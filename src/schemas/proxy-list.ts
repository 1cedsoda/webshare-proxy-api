import { z } from "zod";

export const ProxySchema = z.object({
	id: z.number(),
	username: z.string(),
	password: z.string(),
	proxy_address: z.string(),
	port: z.number(),
	valid: z.boolean(),
	last_verification: z.string().nullable(),
	country_code: z.string(),
	city_name: z.string().nullable(),
	asn_name: z.string().nullable(),
	asn_number: z.number().nullable(),
	high_country_confidence: z.boolean(),
	created_at: z.string(),
});

export type WebshareProxy = z.infer<typeof ProxySchema>;
/** @deprecated Use `WebshareProxy` instead to avoid shadowing the global `Proxy`. */
export type Proxy = WebshareProxy;

export const ListProxiesParams = z.object({
	mode: z.enum(["direct", "backbone"]).optional(),
	page: z.number().optional(),
	page_size: z.number().optional(),
	country_code: z.string().optional(),
	country_code__in: z.string().optional(),
	asn_name: z.string().optional(),
	asn_number: z.number().optional(),
	city_name: z.string().optional(),
	ip_range_24: z.string().optional(),
	valid: z.boolean().optional(),
	ordering: z.string().optional(),
});

export type ListProxiesParams = z.infer<typeof ListProxiesParams>;

export const DownloadProxyListParams = z.object({
	token: z.string(),
	mode: z.enum(["direct", "backbone"]).optional(),
	format: z.enum(["txt_user_pass", "txt_ip_port", "csv"]).optional(),
	country_code: z.string().optional(),
	country_code__in: z.string().optional(),
});

export type DownloadProxyListParams = z.infer<typeof DownloadProxyListParams>;
