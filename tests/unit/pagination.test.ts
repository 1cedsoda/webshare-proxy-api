import { describe, expect, it } from "vitest";
import { WebshareClient } from "../../src/index.js";
import { mockFetch } from "../helpers.js";

describe("Auto-pagination", () => {
	it("iterates through multiple pages", async () => {
		const makeKey = (id: number) => ({
			id,
			key: `key-${id}`,
			label: `label-${id}`,
			ip_addresses: [],
			permissions: [],
			created_at: "t",
			updated_at: "t",
		});

		const fetch = mockFetch(
			{
				status: 200,
				body: {
					count: 3,
					next: "https://proxy.webshare.io/api/v2/apikey/?page=2",
					previous: null,
					results: [makeKey(1), makeKey(2)],
				},
			},
			{
				status: 200,
				body: {
					count: 3,
					next: null,
					previous: "https://proxy.webshare.io/api/v2/apikey/?page=1",
					results: [makeKey(3)],
				},
			},
		);

		const client = new WebshareClient({ apiKey: "key", fetch });
		const items = [];
		for await (const key of client.apiKeys.listAll({ page_size: 2 })) {
			items.push(key);
		}

		expect(items).toHaveLength(3);
		expect(items[0]?.id).toBe(1);
		expect(items[1]?.id).toBe(2);
		expect(items[2]?.id).toBe(3);
		expect(fetch.calls).toHaveLength(2);
	});

	it("handles empty results", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { count: 0, next: null, previous: null, results: [] },
		});

		const client = new WebshareClient({ apiKey: "key", fetch });
		const items = [];
		for await (const key of client.apiKeys.listAll()) {
			items.push(key);
		}

		expect(items).toHaveLength(0);
		expect(fetch.calls).toHaveLength(1);
	});

	it("handles single page", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				count: 1,
				next: null,
				previous: null,
				results: [
					{
						id: 1,
						key: "k",
						label: "l",
						ip_addresses: [],
						permissions: [],
						created_at: "t",
						updated_at: "t",
					},
				],
			},
		});

		const client = new WebshareClient({ apiKey: "key", fetch });
		const items = [];
		for await (const key of client.apiKeys.listAll()) {
			items.push(key);
		}

		expect(items).toHaveLength(1);
		expect(fetch.calls).toHaveLength(1);
	});
});
