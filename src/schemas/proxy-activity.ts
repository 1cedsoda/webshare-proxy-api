import { z } from "zod";

export const ProxyActivitySchema = z.object({
	id: z.number(),
	proxy_address: z.string(),
	port: z.number(),
	country_code: z.string(),
	target_url: z.string(),
	http_method: z.string(),
	http_status: z.number().nullable(),
	protocol: z.string(),
	bytes_sent: z.number(),
	bytes_received: z.number(),
	duration_ms: z.number(),
	error_reason: z.string().nullable(),
	error_type: z.string().nullable(),
	created_at: z.string(),
});

export type ProxyActivity = z.infer<typeof ProxyActivitySchema>;

export const ListActivityParams = z.object({
	page: z.number().optional(),
	page_size: z.number().optional(),
	starting_after: z.string().optional(),
	country_code: z.string().optional(),
	proxy_address: z.string().optional(),
	target_url: z.string().optional(),
	http_status: z.number().optional(),
	error_reason: z.string().optional(),
	ordering: z.string().optional(),
});

export type ListActivityParams = z.infer<typeof ListActivityParams>;

export const DownloadActivityParams = z.object({
	token: z.string(),
	format: z.enum(["csv"]).optional(),
});

export type DownloadActivityParams = z.infer<typeof DownloadActivityParams>;
