import { describe, expect, it } from "vitest";
import {
	AggregateStatSchema,
	ApiKeySchema,
	BillingInfoSchema,
	DownloadTokenSchema,
	EarnOutSchema,
	IdVerificationSchema,
	IpAuthorizationSchema,
	NotificationSchema,
	PendingPaymentSchema,
	PlanSchema,
	ProxyActivitySchema,
	ProxyConfigSchema,
	ProxyReplacementSchema,
	ProxySchema,
	ProxyStatSchema,
	ReferralConfigSchema,
	ReferralCreditSchema,
	SubscriptionSchema,
	SubUserSchema,
	TransactionSchema,
	TwoFactorMethodSchema,
	UserPreferencesSchema,
	UserProfileSchema,
	VerificationSchema,
} from "../../src/index.js";

describe("ApiKeySchema", () => {
	it("parses a valid API key", () => {
		const data = {
			id: 1,
			key: "abc123",
			label: "test",
			ip_addresses: ["1.2.3.4"],
			permissions: ["proxy_list"],
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(ApiKeySchema.parse(data)).toEqual(data);
	});

	it("rejects missing fields", () => {
		expect(() => ApiKeySchema.parse({ id: 1 })).toThrow();
	});
});

describe("ProxySchema", () => {
	it("parses a valid proxy", () => {
		const data = {
			id: 1,
			username: "user",
			password: "pass",
			proxy_address: "1.2.3.4",
			port: 8080,
			valid: true,
			last_verification: "2022-01-01T00:00:00Z",
			country_code: "US",
			city_name: "New York",
			asn_name: "ISP Corp",
			asn_number: 12345,
			high_country_confidence: true,
			created_at: "2022-01-01T00:00:00Z",
		};
		expect(ProxySchema.parse(data)).toEqual(data);
	});

	it("allows null for nullable fields", () => {
		const data = {
			id: 1,
			username: "user",
			password: "pass",
			proxy_address: "1.2.3.4",
			port: 8080,
			valid: true,
			last_verification: null,
			country_code: "US",
			city_name: null,
			asn_name: null,
			asn_number: null,
			high_country_confidence: false,
			created_at: "2022-01-01T00:00:00Z",
		};
		expect(ProxySchema.parse(data)).toEqual(data);
	});
});

describe("ProxyConfigSchema", () => {
	it("parses a valid proxy config", () => {
		const data = {
			id: 1,
			state: "completed",
			countries: { US: 5 },
			available_countries: { US: 95 },
			unallocated_countries: {},
			ip_ranges_24: { "10.1.1.0/24": 5 },
			ip_ranges_16: { "10.1.0.0/16": 5 },
			ip_ranges_8: { "10.0.0.0/8": 5 },
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
			proxy_list_download_token: "abc",
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(ProxyConfigSchema.parse(data)).toEqual(data);
	});
});

describe("IpAuthorizationSchema", () => {
	it("parses a valid IP authorization", () => {
		const data = {
			id: 1,
			ip_address: "1.2.3.4",
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(IpAuthorizationSchema.parse(data)).toEqual(data);
	});
});

describe("ProxyReplacementSchema", () => {
	it("parses a replacement with ip_address + country", () => {
		const data = {
			id: 1,
			state: "completed",
			to_replace: {
				type: "ip_address",
				ip_addresses: ["1.2.3.4"],
			},
			replace_with: [{ type: "country", country_codes: ["US"] }],
			dry_run: false,
			proxies_to_replace: 1,
			proxies_replaced: 1,
			proxies_to_add: 1,
			proxies_added: 1,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(ProxyReplacementSchema.parse(data)).toEqual(data);
	});

	it("parses a replacement with asn + any", () => {
		const data = {
			id: 2,
			state: "pending",
			to_replace: {
				type: "asn",
				asns: [12345],
			},
			replace_with: [{ type: "any" }],
			dry_run: true,
			proxies_to_replace: 5,
			proxies_replaced: 0,
			proxies_to_add: 5,
			proxies_added: 0,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(ProxyReplacementSchema.parse(data)).toEqual(data);
	});
});

describe("ProxyStatSchema & AggregateStatSchema", () => {
	it("parses a proxy stat", () => {
		const data = {
			date: "2022-01-01",
			bandwidth_total: 1000,
			requests_total: 100,
			requests_successful: 90,
			requests_failed: 10,
		};
		expect(ProxyStatSchema.parse(data)).toEqual(data);
	});

	it("parses an aggregate stat", () => {
		const data = {
			bandwidth_projected: 10000,
			bandwidth_total: 5000,
			bandwidth_average: 1000,
			requests_total: 500,
			requests_successful: 450,
			requests_failed: 50,
			error_reasons: [
				{
					reason: "timeout",
					type: "network",
					how_to_fix: "retry",
					http_status: 504,
					count: 50,
				},
			],
			countries_used: { US: 100, GB: 50 },
			number_of_proxies_used: 10,
			protocols_used: { http: 400, socks5: 100 },
			average_concurrency: 0.5,
			average_rps: 1.2,
			last_request_sent_at: "2022-01-01T12:00:00Z",
		};
		expect(AggregateStatSchema.parse(data)).toEqual(data);
	});
});

describe("ProxyActivitySchema", () => {
	it("parses a proxy activity record", () => {
		const data = {
			id: 1,
			proxy_address: "1.2.3.4",
			port: 8080,
			country_code: "US",
			target_url: "https://example.com",
			http_method: "GET",
			http_status: 200,
			protocol: "http",
			bytes_sent: 100,
			bytes_received: 500,
			duration_ms: 250,
			error_reason: null,
			error_type: null,
			created_at: "2022-01-01T00:00:00Z",
		};
		expect(ProxyActivitySchema.parse(data)).toEqual(data);
	});
});

describe("UserProfileSchema", () => {
	it("parses a user profile", () => {
		const data = {
			id: 1,
			email: "test@example.com",
			first_name: "John",
			last_name: "Doe",
			timezone: "UTC",
			registered_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
			referred_by: null,
			subscription_plan_id: 42,
		};
		expect(UserProfileSchema.parse(data)).toEqual(data);
	});
});

describe("UserPreferencesSchema", () => {
	it("parses user preferences", () => {
		const data = {
			id: 1,
			marketing_emails: true,
			notification_emails: false,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(UserPreferencesSchema.parse(data)).toEqual(data);
	});
});

describe("SubscriptionSchema", () => {
	it("parses a subscription", () => {
		const data = {
			id: 1,
			plan_id: 42,
			proxy_type: "dedicated",
			start_date: "2022-01-01T00:00:00Z",
			end_date: "2023-01-01T00:00:00Z",
			bandwidth_limit: 100000,
			bandwidth_used: 5000,
			proxy_count: 10,
			thread_limit: 100,
			ip_authorization_limit: 5,
			subuser_limit: 3,
			free_credits: 0,
			auto_renew: true,
			renewal_plan_id: 42,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(SubscriptionSchema.parse(data)).toEqual(data);
	});
});

describe("PlanSchema", () => {
	it("parses a plan", () => {
		const data = {
			id: 1,
			name: "Pro",
			proxy_type: "dedicated",
			price: 9.99,
			price_period: "monthly",
			proxy_count: 10,
			bandwidth_limit: null,
			thread_limit: 100,
			ip_authorization_limit: 5,
			subuser_limit: 3,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(PlanSchema.parse(data)).toEqual(data);
	});
});

describe("NotificationSchema", () => {
	it("parses a notification", () => {
		const data = {
			id: 1,
			type: "info",
			title: "Test",
			body: "Hello world",
			is_read: false,
			is_dismissed: false,
			action_url: null,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(NotificationSchema.parse(data)).toEqual(data);
	});
});

describe("SubUserSchema", () => {
	it("parses a sub-user", () => {
		const data = {
			id: 7,
			label: "Test User",
			proxy_countries: { ZZ: 1000 },
			proxy_limit: 10.0,
			max_thread_count: 500,
			aggregate_stats: {
				bandwidth_projected: 100000,
				bandwidth_total: 5000,
				bandwidth_average: 1000,
				requests_total: 5,
				requests_successful: 4,
				requests_failed: 1,
				error_reasons: [
					{
						reason: "client_connect_forbidden_host",
						type: "configuration",
						how_to_fix: "The target website cannot be accessed.",
						http_status: 403,
						count: 1,
					},
				],
				countries_used: { GB: 1, FR: 4 },
				number_of_proxies_used: 2,
				protocols_used: { http: 5 },
				average_concurrency: 0.0001,
				average_rps: 0.0002,
				last_request_sent_at: "2022-08-11T17:12:32.589667-07:00",
			},
			created_at: "2019-06-09T23:34:00.095501-07:00",
			updated_at: "2019-06-09T23:34:00.095517-07:00",
			bandwidth_use_start_date: "2019-06-09T23:34:00.095517-07:00",
			bandwidth_use_end_date: "2019-07-09T23:34:00.095517-07:00",
		};
		expect(SubUserSchema.parse(data)).toEqual(data);
	});
});

describe("ReferralConfigSchema", () => {
	it("parses a referral config", () => {
		const data = {
			id: 1,
			mode: "payout" as const,
			paypal_payout_email: "paypal@example.com",
			id_verification_required: false,
			credits_earned: 0.0,
			payouts_earned: 0.0,
			total_credits_earned: 0.0,
			total_payouts_earned: 0.0,
			number_of_users_referred: 0,
			number_of_users_upgraded: 0,
			earn_out_frequency: "7 00:00:00",
			next_earn_out_date: "2022-06-14T11:58:10.246406-07:00",
			minimum_earn_out_amount: 10,
			referral_code: "abc123",
			referral_url: "https://www.webshare.io/?referral_code=abc123",
			referral_maximum_credits: 100,
			referral_credit_ratio: 0.25,
			referral_payment_pending_days: "30 00:00:00",
			promo_type: "first_time_value_off" as const,
			promo_value: 10,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(ReferralConfigSchema.parse(data)).toEqual(data);
	});
});

describe("ReferralCreditSchema", () => {
	it("parses a referral credit", () => {
		const data = {
			id: 1,
			user_id: 6124,
			mode: "credits" as const,
			amount: 2.5,
			status: "pending" as const,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
			reverted_at: null,
		};
		expect(ReferralCreditSchema.parse(data)).toEqual(data);
	});
});

describe("EarnOutSchema", () => {
	it("parses an earn out", () => {
		const data = {
			id: 1,
			mode: "credits" as const,
			paypal_payout_email: null,
			amount: 2.5,
			status: "completed" as const,
			error_reason: null,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(EarnOutSchema.parse(data)).toEqual(data);
	});
});

describe("DownloadTokenSchema", () => {
	it("parses a download token", () => {
		const data = {
			id: 56,
			key: "abcdef",
			scope: "activity" as const,
			expire_at: "2022-06-14T11:58:10.246406-07:00",
		};
		expect(DownloadTokenSchema.parse(data)).toEqual(data);
	});
});

describe("VerificationSchema", () => {
	it("parses a verification", () => {
		const data = {
			id: 1,
			type: "acceptable_use_violation" as const,
			state: "inflow" as const,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
			needs_evidence: false,
		};
		expect(VerificationSchema.parse(data)).toEqual(data);
	});
});

describe("IdVerificationSchema", () => {
	it("parses an ID verification", () => {
		const data = {
			id: 1,
			state: "not-required" as const,
			client_secret: null,
			verification_failure_times: 0,
			max_verification_failure_times: 2,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
			verified_at: null,
		};
		expect(IdVerificationSchema.parse(data)).toEqual(data);
	});
});

describe("TwoFactorMethodSchema", () => {
	it("parses a 2FA method", () => {
		const data = {
			id: 137,
			type: "email_code" as const,
			active: true,
			secret_key: "WMYX3M3A5UML5Y2ZVL7ABLGIRFY3X4H5",
			created_at: "2023-03-04T05:34:35.553059-08:00",
			updated_at: "2023-03-04T05:34:35.553059-08:00",
		};
		expect(TwoFactorMethodSchema.parse(data)).toEqual(data);
	});
});

describe("BillingInfoSchema", () => {
	it("parses billing info", () => {
		const data = {
			id: 1,
			company_name: "Acme Corp",
			address_line1: "123 Main St",
			address_line2: null,
			city: "New York",
			state: "NY",
			postal_code: "10001",
			country: "US",
			vat_number: null,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(BillingInfoSchema.parse(data)).toEqual(data);
	});
});

describe("TransactionSchema", () => {
	it("parses a transaction", () => {
		const data = {
			id: 1,
			amount: 9.99,
			currency: "USD",
			status: "completed",
			description: "Pro plan",
			payment_method_type: "stripe_card",
			invoice_available: true,
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(TransactionSchema.parse(data)).toEqual(data);
	});
});

describe("PendingPaymentSchema", () => {
	it("parses a pending payment", () => {
		const data = {
			id: 1,
			amount: 9.99,
			currency: "USD",
			status: "pending",
			description: null,
			stripe_pi_client_secret: "pi_secret",
			created_at: "2022-01-01T00:00:00Z",
			updated_at: "2022-01-01T00:00:00Z",
		};
		expect(PendingPaymentSchema.parse(data)).toEqual(data);
	});
});
