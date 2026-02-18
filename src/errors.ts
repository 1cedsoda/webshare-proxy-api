import type { ZodError } from "zod";

/** Base error for all Webshare API errors. */
export class WebshareError extends Error {
	readonly status: number;
	readonly body: unknown;

	constructor(message: string, status: number, body: unknown) {
		super(message);
		this.name = "WebshareError";
		this.status = status;
		this.body = body;
	}
}

/** 400 Bad Request */
export class WebshareBadRequestError extends WebshareError {
	constructor(body: unknown) {
		super("Bad Request", 400, body);
		this.name = "WebshareBadRequestError";
	}
}

/** 401 Unauthorized */
export class WebshareUnauthorizedError extends WebshareError {
	constructor(body: unknown) {
		super("Unauthorized", 401, body);
		this.name = "WebshareUnauthorizedError";
	}
}

/** 403 Forbidden (may indicate 2FA required) */
export class WebshareForbiddenError extends WebshareError {
	readonly code?: string;

	constructor(body: unknown) {
		super("Forbidden", 403, body);
		this.name = "WebshareForbiddenError";
		if (
			typeof body === "object" &&
			body !== null &&
			"code" in body &&
			typeof (body as Record<string, unknown>).code === "string"
		) {
			this.code = (body as Record<string, string>).code;
		}
	}

	get is2FARequired(): boolean {
		return this.code === "2fa_needed";
	}
}

/** 404 Not Found */
export class WebshareNotFoundError extends WebshareError {
	constructor(body: unknown) {
		super("Not Found", 404, body);
		this.name = "WebshareNotFoundError";
	}
}

/** 429 Rate Limited */
export class WebshareRateLimitError extends WebshareError {
	readonly retryAfterMs: number | null;

	constructor(body: unknown, retryAfterMs: number | null) {
		super("Rate Limited", 429, body);
		this.name = "WebshareRateLimitError";
		this.retryAfterMs = retryAfterMs;
	}
}

/** 5xx Server Error */
export class WebshareServerError extends WebshareError {
	constructor(status: number, body: unknown) {
		super(`Server Error (${status})`, status, body);
		this.name = "WebshareServerError";
	}
}

/** Thrown when a response fails Zod validation. */
export class WebshareValidationError extends Error {
	readonly zodError: ZodError;

	constructor(zodError: ZodError) {
		super(`Response validation failed: ${zodError.message}`);
		this.name = "WebshareValidationError";
		this.zodError = zodError;
	}
}
