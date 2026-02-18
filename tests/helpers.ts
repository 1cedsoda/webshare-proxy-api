/**
 * Creates a mock fetch function that returns the given responses in sequence.
 * Each call to the returned function returns the next response.
 */
export function mockFetch(
	...responses: Array<{
		status: number;
		body?: unknown;
		headers?: Record<string, string>;
	}>
): typeof globalThis.fetch & { calls: Array<{ url: string; init: RequestInit }> } {
	const calls: Array<{ url: string; init: RequestInit }> = [];
	let callIndex = 0;

	const fn = async (input: string | URL | Request, init?: RequestInit): Promise<Response> => {
		const url = typeof input === "string" ? input : input.toString();
		calls.push({ url, init: init ?? {} });

		const resp = responses[callIndex] ?? responses[responses.length - 1];
		callIndex++;

		const headers = new Headers(resp.headers);
		if (resp.body !== undefined && !headers.has("Content-Type")) {
			headers.set("Content-Type", "application/json");
		}

		return new Response(
			resp.body !== undefined
				? typeof resp.body === "string"
					? resp.body
					: JSON.stringify(resp.body)
				: null,
			{
				status: resp.status,
				headers,
			},
		);
	};

	fn.calls = calls;
	return fn as typeof globalThis.fetch & {
		calls: Array<{ url: string; init: RequestInit }>;
	};
}
