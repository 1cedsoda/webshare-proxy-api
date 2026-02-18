import {
	WebshareBadRequestError,
	WebshareError,
	WebshareForbiddenError,
	WebshareNotFoundError,
	WebshareRateLimitError,
	WebshareServerError,
	WebshareUnauthorizedError,
} from "./errors.js";

export interface HttpClientOptions {
	baseUrl: string;
	apiKey: string;
	subuserId?: number;
	fetch: typeof globalThis.fetch;
	maxRetries: number;
	retryDelayMs: number;
}

export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export interface RequestOptions {
	method: HttpMethod;
	path: string;
	body?: unknown;
	query?: Record<string, string | number | boolean | undefined>;
	headers?: Record<string, string>;
	/** If true, return the raw Response instead of parsing JSON. */
	raw?: boolean;
}

function buildQueryString(params: Record<string, string | number | boolean | undefined>): string {
	const entries = Object.entries(params).filter(
		(entry): entry is [string, string | number | boolean] => entry[1] !== undefined,
	);
	if (entries.length === 0) return "";
	const qs = new URLSearchParams();
	for (const [k, v] of entries) {
		qs.set(k, String(v));
	}
	return `?${qs.toString()}`;
}

async function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export class HttpClient {
	private readonly opts: HttpClientOptions;

	constructor(opts: HttpClientOptions) {
		this.opts = opts;
	}

	async request<_T = unknown>(options: RequestOptions & { raw: true }): Promise<Response>;
	async request<T = unknown>(options: RequestOptions): Promise<T>;
	async request<T = unknown>(options: RequestOptions): Promise<T | Response> {
		const url =
			this.opts.baseUrl + options.path + (options.query ? buildQueryString(options.query) : "");

		const headers: Record<string, string> = {
			Authorization: `Token ${this.opts.apiKey}`,
			...options.headers,
		};

		if (this.opts.subuserId !== undefined) {
			headers["X-Subuser"] = String(this.opts.subuserId);
		}

		if (options.body !== undefined && options.method !== "GET" && options.method !== "DELETE") {
			headers["Content-Type"] = "application/json";
		}

		const init: RequestInit = {
			method: options.method,
			headers,
			body:
				options.body !== undefined && options.method !== "GET" && options.method !== "DELETE"
					? JSON.stringify(options.body)
					: undefined,
		};

		let lastError: Error | null = null;

		for (let attempt = 0; attempt <= this.opts.maxRetries; attempt++) {
			const response = await this.opts.fetch(url, init);

			if (response.ok) {
				if (options.raw) return response;
				if (response.status === 204) return undefined as T;
				return (await response.json()) as T;
			}

			// Parse error body
			let body: unknown;
			try {
				body = await response.json();
			} catch {
				body = await response.text().catch(() => null);
			}

			// Rate limit — retry
			if (response.status === 429 && attempt < this.opts.maxRetries) {
				const retryAfterHeader = response.headers.get("Retry-After");
				const retryAfterMs = retryAfterHeader
					? parseFloat(retryAfterHeader) * 1000
					: this.opts.retryDelayMs * 2 ** attempt;
				lastError = new WebshareRateLimitError(body, retryAfterMs);
				await sleep(retryAfterMs);
				continue;
			}

			// Throw appropriate error
			throw this.createError(response.status, body);
		}

		// If we exhausted retries on rate limit, throw the last error
		throw lastError ?? new Error("Request failed after retries");
	}

	private createError(status: number, body: unknown): WebshareError {
		switch (status) {
			case 400:
				return new WebshareBadRequestError(body);
			case 401:
				return new WebshareUnauthorizedError(body);
			case 403:
				return new WebshareForbiddenError(body);
			case 404:
				return new WebshareNotFoundError(body);
			case 429:
				return new WebshareRateLimitError(body, null);
			default:
				if (status >= 500) return new WebshareServerError(status, body);
				return new WebshareError(`HTTP ${status}`, status, body);
		}
	}

	/** Create a new HttpClient with a different subuser ID. */
	withSubUser(subuserId: number): HttpClient {
		return new HttpClient({ ...this.opts, subuserId });
	}
}
