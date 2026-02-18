import { describe, expect, it } from "vitest";
import { WebshareClient } from "../../src/index.js";
import { mockFetch } from "../helpers.js";

const PROXY_CONFIG_BODY = {
	id: 1,
	state: "completed",
	countries: { US: 5 },
	available_countries: { US: 95 },
	unallocated_countries: {},
	ip_ranges_24: {},
	ip_ranges_16: {},
	ip_ranges_8: {},
	available_ip_ranges_24: {},
	available_ip_ranges_16: {},
	available_ip_ranges_8: {},
	username: "user",
	password: "pass",
	request_timeout: 86400,
	request_idle_timeout: 900,
	ip_authorization_country_codes: ["US"],
	auto_replace_invalid_proxies: true,
	auto_replace_low_country_confidence_proxies: false,
	proxy_list_download_token: "tok",
	created_at: "2022-01-01T00:00:00Z",
	updated_at: "2022-01-01T00:00:00Z",
};

describe("ProxyListResource", () => {
	it("lists proxies", async () => {
		const proxy = {
			id: 1,
			username: "u",
			password: "p",
			proxy_address: "1.2.3.4",
			port: 8080,
			valid: true,
			last_verification: null,
			country_code: "US",
			city_name: null,
			asn_name: null,
			asn_number: null,
			high_country_confidence: true,
			created_at: "2022-01-01T00:00:00Z",
		};
		const fetch = mockFetch({
			status: 200,
			body: { count: 1, next: null, previous: null, results: [proxy] },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const result = await client.proxyList.list({ mode: "direct" });

		expect(result.count).toBe(1);
		expect(result.results[0]?.proxy_address).toBe("1.2.3.4");
		expect(fetch.calls[0]?.url).toContain("mode=direct");
	});

	it("downloads proxy list as text", async () => {
		const fetch = mockFetch({
			status: 200,
			body: "1.2.3.4:8080\n5.6.7.8:3128",
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const text = await client.proxyList.download({ token: "mytoken" });

		expect(text).toContain("1.2.3.4:8080");
		expect(fetch.calls[0]?.url).toContain("/download/mytoken/");
	});

	it("refreshes proxy list", async () => {
		const fetch = mockFetch({ status: 204 });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.proxyList.refresh();

		expect(fetch.calls[0]?.init.method).toBe("POST");
		expect(fetch.calls[0]?.url).toContain("/proxy/list/refresh/");
	});
});

describe("ProxyConfigResource", () => {
	it("gets proxy config", async () => {
		const fetch = mockFetch({ status: 200, body: PROXY_CONFIG_BODY });
		const client = new WebshareClient({ apiKey: "key", fetch });
		const config = await client.proxyConfig.get();

		expect(config.state).toBe("completed");
		expect(config.countries).toEqual({ US: 5 });
	});

	it("updates proxy config", async () => {
		const fetch = mockFetch({ status: 200, body: PROXY_CONFIG_BODY });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.proxyConfig.update({ auto_replace_invalid_proxies: false });

		expect(fetch.calls[0]?.init.method).toBe("PATCH");
	});

	it("allocates unallocated countries", async () => {
		const fetch = mockFetch({ status: 200, body: PROXY_CONFIG_BODY });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.proxyConfig.allocateUnallocatedCountries({ countries: { FR: 10 } });

		expect(fetch.calls[0]?.init.method).toBe("POST");
		expect(fetch.calls[0]?.url).toContain("allocate_unallocated_countries");
	});

	it("gets v3 config with plan_id", async () => {
		const fetch = mockFetch({ status: 200, body: PROXY_CONFIG_BODY });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.proxyConfig.getConfig(42);

		expect(fetch.calls[0]?.url).toContain("/api/v3/proxy/config");
		expect(fetch.calls[0]?.url).toContain("plan_id=42");
	});
});

describe("IpAuthorizationResource", () => {
	it("creates an IP authorization", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				id: 1,
				ip_address: "10.0.0.1",
				created_at: "t",
				updated_at: "t",
			},
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const ip = await client.ipAuthorization.create({ ip_address: "10.0.0.1" });

		expect(ip.ip_address).toBe("10.0.0.1");
		expect(fetch.calls[0]?.init.method).toBe("POST");
	});

	it("gets whatsMyIp", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { ip_address: "203.0.113.1" },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const result = await client.ipAuthorization.whatsMyIp();

		expect(result.ip_address).toBe("203.0.113.1");
		expect(fetch.calls[0]?.url).toContain("whatsmyip");
	});
});

describe("ProxyReplacementResource", () => {
	it("creates a replacement", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				id: 1,
				state: "pending",
				to_replace: { type: "ip_address", ip_addresses: ["1.2.3.4"] },
				replace_with: [{ type: "country", country_codes: ["US"] }],
				dry_run: false,
				proxies_to_replace: 1,
				proxies_replaced: 0,
				proxies_to_add: 1,
				proxies_added: 0,
				created_at: "t",
				updated_at: "t",
			},
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const repl = await client.proxyReplacement.create({
			to_replace: { type: "ip_address", ip_addresses: ["1.2.3.4"] },
			replace_with: [{ type: "country", country_codes: ["US"] }],
		});

		expect(repl.state).toBe("pending");
		expect(fetch.calls[0]?.url).toContain("/api/v3/proxy/replace/");
	});
});

describe("UserProfileResource", () => {
	const profileBody = {
		id: 1,
		email: "test@test.com",
		first_name: "John",
		last_name: "Doe",
		timezone: "UTC",
		registered_at: "t",
		updated_at: "t",
		referred_by: null,
		subscription_plan_id: 1,
	};

	it("retrieves profile", async () => {
		const fetch = mockFetch({ status: 200, body: profileBody });
		const client = new WebshareClient({ apiKey: "key", fetch });
		const profile = await client.userProfile.retrieve();

		expect(profile.email).toBe("test@test.com");
	});

	it("updates profile", async () => {
		const fetch = mockFetch({ status: 200, body: profileBody });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.userProfile.update({ first_name: "Jane" });

		expect(fetch.calls[0]?.init.method).toBe("PATCH");
	});
});

describe("SubscriptionResource", () => {
	it("gets subscription", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				id: 1,
				plan_id: 42,
				proxy_type: "dedicated",
				start_date: "t",
				end_date: "t",
				bandwidth_limit: 100000,
				bandwidth_used: 5000,
				proxy_count: 10,
				thread_limit: 100,
				ip_authorization_limit: 5,
				subuser_limit: 3,
				free_credits: 0,
				auto_renew: true,
				renewal_plan_id: 42,
				created_at: "t",
				updated_at: "t",
			},
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const sub = await client.subscription.get();

		expect(sub.plan_id).toBe(42);
	});
});

describe("NotificationsResource", () => {
	const notif = {
		id: 1,
		type: "info",
		title: "Test",
		body: "Hello",
		is_read: false,
		is_dismissed: false,
		action_url: null,
		created_at: "t",
		updated_at: "t",
	};

	it("lists notifications", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { count: 1, next: null, previous: null, results: [notif] },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const result = await client.notifications.list();

		expect(result.results).toHaveLength(1);
	});

	it("dismisses a notification", async () => {
		const fetch = mockFetch({ status: 200, body: { ...notif, is_dismissed: true } });
		const client = new WebshareClient({ apiKey: "key", fetch });
		const result = await client.notifications.dismiss(1);

		expect(result.is_dismissed).toBe(true);
		expect(fetch.calls[0]?.url).toContain("/dismiss/");
	});
});

describe("SubUsersResource", () => {
	const subUser = {
		id: 7,
		label: "Test",
		proxy_countries: { ZZ: 1000 },
		proxy_limit: 10,
		max_thread_count: 500,
		aggregate_stats: {
			bandwidth_projected: 0,
			bandwidth_total: 0,
			bandwidth_average: 0,
			requests_total: 0,
			requests_successful: 0,
			requests_failed: 0,
			error_reasons: [],
			countries_used: {},
			number_of_proxies_used: 0,
			protocols_used: {},
			average_concurrency: 0,
			average_rps: 0,
			last_request_sent_at: null,
		},
		created_at: "t",
		updated_at: "t",
		bandwidth_use_start_date: "t",
		bandwidth_use_end_date: "t",
	};

	it("creates a sub-user", async () => {
		const fetch = mockFetch({ status: 200, body: subUser });
		const client = new WebshareClient({ apiKey: "key", fetch });
		const result = await client.subUsers.create({ label: "Test" });

		expect(result.label).toBe("Test");
		expect(fetch.calls[0]?.init.method).toBe("POST");
	});

	it("deletes a sub-user", async () => {
		const fetch = mockFetch({ status: 204 });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.subUsers.delete(7);

		expect(fetch.calls[0]?.init.method).toBe("DELETE");
	});

	it("refreshes sub-user proxy list", async () => {
		const fetch = mockFetch({ status: 200, body: subUser });
		const client = new WebshareClient({ apiKey: "key", fetch });
		await client.subUsers.refreshProxyList(7);

		expect(fetch.calls[0]?.url).toContain("/subuser/7/refresh/");
		expect(fetch.calls[0]?.init.method).toBe("POST");
	});
});

describe("DownloadsResource", () => {
	it("gets a download token", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { id: 1, key: "abc", scope: "activity", expire_at: "t" },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const token = await client.downloads.getToken("activity");

		expect(token.key).toBe("abc");
		expect(fetch.calls[0]?.url).toContain("/download_token/activity/");
	});

	it("resets a download token", async () => {
		const fetch = mockFetch({
			status: 200,
			body: { id: 1, key: "newkey", scope: "proxy_list", expire_at: "t" },
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const token = await client.downloads.resetToken("proxy_list");

		expect(token.key).toBe("newkey");
		expect(fetch.calls[0]?.url).toContain("/download_token/proxy_list/reset/");
	});
});

describe("ReferralResource", () => {
	it("gets referral code info (public)", async () => {
		const fetch = mockFetch({
			status: 200,
			body: {
				referral_code: "abc123",
				promo_type: "first_time_value_off",
				promo_value: 10,
			},
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const info = await client.referral.getReferralCodeInfo("abc123");

		expect(info.referral_code).toBe("abc123");
		expect(fetch.calls[0]?.url).toContain("referral_code=abc123");
	});
});

describe("BillingResource", () => {
	it("downloads an invoice", async () => {
		const fetch = mockFetch({
			status: 200,
			body: "PDF_CONTENT",
		});
		const client = new WebshareClient({ apiKey: "key", fetch });
		const buffer = await client.billing.downloadInvoice(42);

		expect(buffer).toBeInstanceOf(ArrayBuffer);
		expect(fetch.calls[0]?.url).toContain("transaction_id=42");
	});
});
