// Main client

export type { WebshareClientOptions } from "./client.js";
export { WebshareClient } from "./client.js";

// Errors
export {
	WebshareBadRequestError,
	WebshareError,
	WebshareForbiddenError,
	WebshareNotFoundError,
	WebshareRateLimitError,
	WebshareServerError,
	WebshareUnauthorizedError,
	WebshareValidationError,
} from "./errors.js";

// Pagination
export { paginate } from "./pagination.js";
// Resource classes (for advanced use / extension)
export { ApiKeysResource } from "./resources/api-keys.js";
export { BillingResource } from "./resources/billing.js";
export { CheckoutResource } from "./resources/checkout.js";
export { DownloadsResource } from "./resources/downloads.js";
export { IdVerificationResource } from "./resources/id-verification.js";
export { IpAuthorizationResource } from "./resources/ip-authorization.js";
export { NotificationsResource } from "./resources/notifications.js";
export { PlanResource } from "./resources/plan.js";
export { PricingResource } from "./resources/pricing.js";
export { ProxyActivityResource } from "./resources/proxy-activity.js";
export { ProxyConfigResource } from "./resources/proxy-config.js";
export { ProxyListResource } from "./resources/proxy-list.js";
export { ProxyReplacementResource } from "./resources/proxy-replacement.js";
export { ProxyStatsResource } from "./resources/proxy-stats.js";
export { ReferralResource } from "./resources/referral.js";
export { SubscriptionResource } from "./resources/subscription.js";
export { SubUsersResource } from "./resources/subusers.js";
export { TwoFactorAuthResource } from "./resources/two-factor-auth.js";
export { UserProfileResource } from "./resources/user-profile.js";
export { VerificationResource } from "./resources/verification.js";
export type { ApiKey } from "./schemas/api-keys.js";
// Schemas — API Keys
export { ApiKeySchema, CreateApiKeyInput, UpdateApiKeyInput } from "./schemas/api-keys.js";
export type {
	BillingInfo,
	PaymentMethod,
	PendingPayment,
	Transaction,
	UpdatePaymentMethodResponse,
} from "./schemas/billing.js";

// Schemas — Billing
export {
	BillingInfoSchema,
	PaymentMethodSchema,
	PendingPaymentSchema,
	TransactionSchema,
	UpdateBillingInput,
	UpdatePaymentMethodInput,
	UpdatePaymentMethodResponseSchema,
} from "./schemas/billing.js";
export type { CheckoutResponse } from "./schemas/checkout.js";

// Schemas — Checkout
export { CheckoutResponseSchema, PurchasePlanInput, RenewInput } from "./schemas/checkout.js";
export type {
	CursorPaginationParams,
	PaginatedResponse,
	PaginationParams,
} from "./schemas/common.js";
export type { DownloadToken, DownloadTokenScope } from "./schemas/downloads.js";
// Schemas — Downloads
export { DownloadTokenSchema } from "./schemas/downloads.js";
export type { IdVerification } from "./schemas/id-verification.js";
// Schemas — ID Verification
export { IdVerificationSchema } from "./schemas/id-verification.js";
export type { IpAuthorization, WhatsMyIp } from "./schemas/ip-authorization.js";
// Schemas — IP Authorization
export {
	CreateIpAuthInput,
	IpAuthorizationSchema,
	WhatsMyIpSchema,
} from "./schemas/ip-authorization.js";
export type { Notification } from "./schemas/notifications.js";
// Schemas — Notifications
export { ListNotificationsParams, NotificationSchema } from "./schemas/notifications.js";
export type { CancelPlanResponse, Plan, PurchaseResponse } from "./schemas/plan.js";
// Schemas — Plan
export {
	CancelPlanResponseSchema,
	PlanSchema,
	PurchaseResponseSchema,
	UpdatePlanInput,
	UpgradePlanInput,
} from "./schemas/plan.js";
export type {
	AvailableAssetsResponse,
	CustomizeResponse,
	DiscountTier,
	Feature,
	PricingResponse,
} from "./schemas/pricing.js";
// Schemas — Pricing
export {
	AvailableAssetsResponseSchema,
	CustomizeQueryInput,
	CustomizeResponseSchema,
	DiscountTierSchema,
	FeatureSchema,
	PricingQueryInput,
	PricingResponseSchema,
} from "./schemas/pricing.js";
export type { ProxyActivity } from "./schemas/proxy-activity.js";
// Schemas — Proxy Activity
export {
	DownloadActivityParams,
	ListActivityParams,
	ProxyActivitySchema,
} from "./schemas/proxy-activity.js";
export type {
	ProxyConfig,
	ProxyConfigV3,
	ProxyStatsV3,
	ProxyStatusV3,
} from "./schemas/proxy-config.js";
// Schemas — Proxy Config
export {
	AllocateCountriesInput,
	ProxyConfigSchema,
	ProxyConfigV3Schema,
	ProxyStatsV3Schema,
	ProxyStatusV3Schema,
	UpdateProxyConfigInput,
} from "./schemas/proxy-config.js";
export type { Proxy, WebshareProxy } from "./schemas/proxy-list.js";
// Schemas — Proxy List
export { DownloadProxyListParams, ListProxiesParams, ProxySchema } from "./schemas/proxy-list.js";
export type {
	ProxyReplacement,
	ReplacedProxy,
	ReplaceWith,
	ToReplace,
} from "./schemas/proxy-replacement.js";
// Schemas — Proxy Replacement
export {
	CreateReplacementInput,
	ProxyReplacementSchema,
	ReplacedProxySchema,
	ReplaceWithSchema,
	ToReplaceSchema,
} from "./schemas/proxy-replacement.js";
export type { AggregateStat, ErrorReason, ProxyStat } from "./schemas/proxy-stats.js";
// Schemas — Proxy Stats
export { AggregateStatSchema, ErrorReasonSchema, ProxyStatSchema } from "./schemas/proxy-stats.js";
export type {
	EarnOut,
	ReferralCodeInfo,
	ReferralConfig,
	ReferralCredit,
} from "./schemas/referral.js";
// Schemas — Referral
export {
	EarnOutSchema,
	ReferralCodeInfoSchema,
	ReferralConfigSchema,
	ReferralCreditSchema,
	UpdateReferralConfigInput,
} from "./schemas/referral.js";
export type { Subscription } from "./schemas/subscription.js";
// Schemas — Subscription
export { SubscriptionSchema } from "./schemas/subscription.js";
export type { SubUser } from "./schemas/subusers.js";
// Schemas — Sub-users
export { CreateSubUserInput, SubUserSchema, UpdateSubUserInput } from "./schemas/subusers.js";
export type { TwoFactorMethod } from "./schemas/two-factor-auth.js";
// Schemas — Two-Factor Auth
export {
	ActivateTwoFactorInput,
	ChangeTwoFactorInput,
	EnterTwoFactorCodeInput,
	TwoFactorMethodSchema,
} from "./schemas/two-factor-auth.js";
export type { UserPreferences, UserProfile } from "./schemas/user-profile.js";
// Schemas — User Profile
export {
	UpdatePreferencesInput,
	UpdateProfileInput,
	UserPreferencesSchema,
	UserProfileSchema,
} from "./schemas/user-profile.js";
export type { Verification } from "./schemas/verification.js";
// Schemas — Verification
export { VerificationSchema } from "./schemas/verification.js";
