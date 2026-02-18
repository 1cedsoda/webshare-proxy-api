import { describe, expect, it } from "vitest";
import { WebshareClient } from "../../src/index.js";
import { mockFetch } from "../helpers.js";

describe("HttpClient", () => {
	it("sends Authorization header", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { count: 0, next: null, previous: null, results: [] },
		});
		const client = new WebshareClient({ apiKey: "test-key-123", fetch });
		await client.apiKeys.list();

		expect(fetch.calls).toHaveLength(1);
		const headers = fetch.calls[0]?.init.headers as Record<string, string>;
		expect(headers.Authorization).toBe("Token test-key-123");
	});

	it("uses custom base URL", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { count: 0, next: null, previous: null, results: [] },
		});
		const client = new WebshareClient({
			apiKey: "key",
			baseUrl: "https://custom.example.com",
			fetch,
		});
		await client.apiKeys.list();

		expect(fetch.calls[0]?.url).toMatch(/^https:\/\/custom\.example\.com/);
	});

	it("handles 204 No Content", async () => {
		const fetch = mockFetch({ status: 204 });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await expect(client.apiKeys.delete(1)).resolves.toBeUndefined();
	});

	it("throws WebshareBadRequestError on 400", async () => {
		const fetch = mockFetch({
			status: 400,
			body: { field: ["This field is required."] },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });

		await expect(client.apiKeys.create({ label: "" })).rejects.toThrow("Bad Request");
	});

	it("throws WebshareNotFoundError on 404", async () => {
		const fetch = mockFetch({
			status: 404,
			body: { detail: "Not found." },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });

		await expect(client.apiKeys.retrieve(99999)).rejects.toThrow("Not Found");
	});

	it("retries on 429 and eventually succeeds", async () => {
		const fetch = mockFetch(
			{ status: 429, body: { detail: "throttled" }, headers: { "Retry-After": "0.01" } },
			{
				status: 200,
				body: {
					id: 1,
					key: "k",
					label: "l",
					ip_addresses: [],
					permissions: [],
					created_at: "t",
					updated_at: "t",
				},
			},
		);
		const client = new WebshareClient({
			apiKey: "key",
			fetch,
			maxRetries: 3,
			retryDelayMs: 10,
		});

		const result = await client.apiKeys.retrieve(1);
		expect(result.id).toBe(1);
		expect(fetch.calls).toHaveLength(2);
	});

	it("throws WebshareRateLimitError after max retries", async () => {
		const fetch = mockFetch(
			{ status: 429, body: { detail: "throttled" } },
			{ status: 429, body: { detail: "throttled" } },
			{ status: 429, body: { detail: "throttled" } },
			{ status: 429, body: { detail: "throttled" } },
		);
		const client = new WebshareClient({
			apiKey: "key",
			fetch,
			maxRetries: 2,
			retryDelayMs: 10,
		});

		await expect(client.apiKeys.retrieve(1)).rejects.toThrow("Rate Limited");
		// initial + 2 retries = 3 calls
		expect(fetch.calls).toHaveLength(3);
	});

	it("sends X-Subuser header with withSubUser", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				id: 1,
				state: "completed",
				countries: {},
				available_countries: {},
				unallocated_countries: {},
				ip_ranges_24: {},
				ip_ranges_16: {},
				ip_ranges_8: {},
				available_ip_ranges_24: {},
				available_ip_ranges_16: {},
				available_ip_ranges_8: {},
				username: "u",
				password: "p",
				request_timeout: 86400,
				request_idle_timeout: 900,
				ip_authorization_country_codes: [],
				auto_replace_invalid_proxies: true,
				auto_replace_low_country_confidence_proxies: false,
				proxy_list_download_token: "t",
				created_at: "t",
				updated_at: "t",
			},
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const subClient = client.withSubUser(42);
		await subClient.proxyConfig.get();

		const headers = fetch.calls[0]?.init.headers as Record<string, string>;
		expect(headers["X-Subuser"]).toBe("42");
	});

	it("sends JSON body for POST requests", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				id: 1,
				key: "k",
				label: "test",
				ip_addresses: [],
				permissions: [],
				created_at: "t",
				updated_at: "t",
			},
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.apiKeys.create({ label: "test" });

		const headers = fetch.calls[0]?.init.headers as Record<string, string>;
		expect(headers["Content-Type"]).toBe("application/json");
		expect(JSON.parse(fetch.calls[0]?.init.body as string)).toEqual({
			label: "test",
		});
	});

	it("sends query parameters", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { count: 0, next: null, previous: null, results: [] },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.apiKeys.list({ page: 2, page_size: 10 });

		const url = fetch.calls[0]?.url;
		expect(url).toContain("page=2");
		expect(url).toContain("page_size=10");
	});
});
