import { HttpClient } from "./http.js";
import { ApiKeysResource } from "./resources/api-keys.js";
import { BillingResource } from "./resources/billing.js";
import { CheckoutResource } from "./resources/checkout.js";
import { DownloadsResource } from "./resources/downloads.js";
import { IdVerificationResource } from "./resources/id-verification.js";
import { IpAuthorizationResource } from "./resources/ip-authorization.js";
import { NotificationsResource } from "./resources/notifications.js";
import { PlanResource } from "./resources/plan.js";
import { PricingResource } from "./resources/pricing.js";
import { ProxyActivityResource } from "./resources/proxy-activity.js";
import { ProxyConfigResource } from "./resources/proxy-config.js";
import { ProxyListResource } from "./resources/proxy-list.js";
import { ProxyReplacementResource } from "./resources/proxy-replacement.js";
import { ProxyStatsResource } from "./resources/proxy-stats.js";
import { ReferralResource } from "./resources/referral.js";
import { SubscriptionResource } from "./resources/subscription.js";
import { SubUsersResource } from "./resources/subusers.js";
import { TwoFactorAuthResource } from "./resources/two-factor-auth.js";
import { UserProfileResource } from "./resources/user-profile.js";
import { VerificationResource } from "./resources/verification.js";

export interface WebshareClientOptions {
	/** Your Webshare API key (Token). */
	apiKey: string;
	/** Base URL for the API. Defaults to "https://proxy.webshare.io". */
	baseUrl?: string;
	/** Custom fetch implementation (for testing or older runtimes). */
	fetch?: typeof globalThis.fetch;
	/** Max retries for 429 rate limit responses. Defaults to 3. */
	maxRetries?: number;
	/** Initial retry delay in ms for rate limit retries. Defaults to 1000. */
	retryDelayMs?: number;
}

function buildResources(http: HttpClient) {
	return {
		apiKeys: new ApiKeysResource(http),
		proxyList: new ProxyListResource(http),
		proxyConfig: new ProxyConfigResource(http),
		ipAuthorization: new IpAuthorizationResource(http),
		proxyReplacement: new ProxyReplacementResource(http),
		proxyStats: new ProxyStatsResource(http),
		proxyActivity: new ProxyActivityResource(http),
		userProfile: new UserProfileResource(http),
		subscription: new SubscriptionResource(http),
		plans: new PlanResource(http),
		pricing: new PricingResource(http),
		billing: new BillingResource(http),
		checkout: new CheckoutResource(http),
		notifications: new NotificationsResource(http),
		subUsers: new SubUsersResource(http),
		referral: new ReferralResource(http),
		downloads: new DownloadsResource(http),
		verification: new VerificationResource(http),
		idVerification: new IdVerificationResource(http),
		twoFactorAuth: new TwoFactorAuthResource(http),
	} as const;
}

export class WebshareClient {
	private readonly http: HttpClient;

	readonly apiKeys: ApiKeysResource;
	readonly proxyList: ProxyListResource;
	readonly proxyConfig: ProxyConfigResource;
	readonly ipAuthorization: IpAuthorizationResource;
	readonly proxyReplacement: ProxyReplacementResource;
	readonly proxyStats: ProxyStatsResource;
	readonly proxyActivity: ProxyActivityResource;
	readonly userProfile: UserProfileResource;
	readonly subscription: SubscriptionResource;
	readonly plans: PlanResource;
	readonly pricing: PricingResource;
	readonly billing: BillingResource;
	readonly checkout: CheckoutResource;
	readonly notifications: NotificationsResource;
	readonly subUsers: SubUsersResource;
	readonly referral: ReferralResource;
	readonly downloads: DownloadsResource;
	readonly verification: VerificationResource;
	readonly idVerification: IdVerificationResource;
	readonly twoFactorAuth: TwoFactorAuthResource;

	constructor(options: WebshareClientOptions);
	/** @internal */
	constructor(options: WebshareClientOptions | null, http?: HttpClient);
	constructor(options: WebshareClientOptions | null, http?: HttpClient) {
		if (http) {
			this.http = http;
		} else {
			const opts = options as WebshareClientOptions;
			this.http = new HttpClient({
				baseUrl: opts.baseUrl ?? "https://proxy.webshare.io",
				apiKey: opts.apiKey,
				fetch: opts.fetch ?? globalThis.fetch.bind(globalThis),
				maxRetries: opts.maxRetries ?? 3,
				retryDelayMs: opts.retryDelayMs ?? 1000,
			});
		}

		const resources = buildResources(this.http);
		this.apiKeys = resources.apiKeys;
		this.proxyList = resources.proxyList;
		this.proxyConfig = resources.proxyConfig;
		this.ipAuthorization = resources.ipAuthorization;
		this.proxyReplacement = resources.proxyReplacement;
		this.proxyStats = resources.proxyStats;
		this.proxyActivity = resources.proxyActivity;
		this.userProfile = resources.userProfile;
		this.subscription = resources.subscription;
		this.plans = resources.plans;
		this.pricing = resources.pricing;
		this.billing = resources.billing;
		this.checkout = resources.checkout;
		this.notifications = resources.notifications;
		this.subUsers = resources.subUsers;
		this.referral = resources.referral;
		this.downloads = resources.downloads;
		this.verification = resources.verification;
		this.idVerification = resources.idVerification;
		this.twoFactorAuth = resources.twoFactorAuth;
	}

	/**
	 * Returns a new WebshareClient that sends the `X-Subuser` header
	 * with every request, masquerading as the given sub-user.
	 */
	withSubUser(subuserId: number): WebshareClient {
		return new WebshareClient(null, this.http.withSubUser(subuserId));
	}
}
