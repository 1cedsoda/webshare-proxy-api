import { z } from "zod";

export const ProxyConfigSchema = z.object({
	id: z.number(),
	state: z.string(),
	countries: z.record(z.string(), z.number()),
	available_countries: z.record(z.string(), z.number()),
	unallocated_countries: z.record(z.string(), z.number()),
	ip_ranges_24: z.record(z.string(), z.number()),
	ip_ranges_16: z.record(z.string(), z.number()),
	ip_ranges_8: z.record(z.string(), z.number()),
	available_ip_ranges_24: z.record(z.string(), z.number()),
	available_ip_ranges_16: z.record(z.string(), z.number()),
	available_ip_ranges_8: z.record(z.string(), z.number()),
	username: z.string(),
	password: z.string(),
	request_timeout: z.number(),
	request_idle_timeout: z.number(),
	ip_authorization_country_codes: z.array(z.string()),
	auto_replace_invalid_proxies: z.boolean(),
	auto_replace_low_country_confidence_proxies: z.boolean(),
	proxy_list_download_token: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type ProxyConfig = z.infer<typeof ProxyConfigSchema>;

export const UpdateProxyConfigInput = z.object({
	countries: z.record(z.string(), z.number()).optional(),
	ip_ranges_24: z.record(z.string(), z.number()).optional(),
	ip_authorization_country_codes: z.array(z.string()).optional(),
	auto_replace_invalid_proxies: z.boolean().optional(),
	auto_replace_low_country_confidence_proxies: z.boolean().optional(),
	request_timeout: z.number().optional(),
	request_idle_timeout: z.number().optional(),
	username: z.string().optional(),
	password: z.string().optional(),
});

export type UpdateProxyConfigInput = z.infer<typeof UpdateProxyConfigInput>;

export const AllocateCountriesInput = z.object({
	countries: z.record(z.string(), z.number()),
});

export type AllocateCountriesInput = z.infer<typeof AllocateCountriesInput>;

// V3 endpoints

export const ProxyConfigV3Schema = z.object({
	id: z.number(),
	state: z.string(),
	countries: z.record(z.string(), z.number()),
	available_countries: z.record(z.string(), z.number()),
	unallocated_countries: z.record(z.string(), z.number()),
	ip_ranges_24: z.record(z.string(), z.number()),
	ip_ranges_16: z.record(z.string(), z.number()),
	ip_ranges_8: z.record(z.string(), z.number()),
	available_ip_ranges_24: z.record(z.string(), z.number()),
	available_ip_ranges_16: z.record(z.string(), z.number()),
	available_ip_ranges_8: z.record(z.string(), z.number()),
	username: z.string(),
	password: z.string(),
	request_timeout: z.number(),
	request_idle_timeout: z.number(),
	ip_authorization_country_codes: z.array(z.string()),
	auto_replace_invalid_proxies: z.boolean(),
	auto_replace_low_country_confidence_proxies: z.boolean(),
	proxy_list_download_token: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type ProxyConfigV3 = z.infer<typeof ProxyConfigV3Schema>;

export const ErrorReasonSchema = z.object({
	reason: z.string(),
	type: z.string(),
	how_to_fix: z.string(),
	http_status: z.number(),
	count: z.number(),
});

export type ErrorReason = z.infer<typeof ErrorReasonSchema>;

export const ProxyStatsV3Schema = z.object({
	bandwidth_projected: z.number(),
	bandwidth_total: z.number(),
	bandwidth_average: z.number(),
	requests_total: z.number(),
	requests_successful: z.number(),
	requests_failed: z.number(),
	error_reasons: z.array(ErrorReasonSchema),
	countries_used: z.record(z.string(), z.number()),
	number_of_proxies_used: z.number(),
	protocols_used: z.record(z.string(), z.number()),
	average_concurrency: z.number(),
	average_rps: z.number(),
	last_request_sent_at: z.string().nullable(),
});

export type ProxyStatsV3 = z.infer<typeof ProxyStatsV3Schema>;

export const ProxyStatusV3Schema = z.object({
	proxy_count_total: z.number(),
	proxy_count_valid: z.number(),
	proxy_count_invalid: z.number(),
	proxy_count_low_country_confidence: z.number(),
	request_timeout: z.number(),
	request_idle_timeout: z.number(),
});

export type ProxyStatusV3 = z.infer<typeof ProxyStatusV3Schema>;
