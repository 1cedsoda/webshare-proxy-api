import { z } from "zod";

export const ToReplaceIpRange = z.object({
	type: z.literal("ip_range"),
	ip_ranges: z.array(z.string()),
});

export const ToReplaceIpAddress = z.object({
	type: z.literal("ip_address"),
	ip_addresses: z.array(z.string()),
});

export const ToReplaceAsn = z.object({
	type: z.literal("asn"),
	asns: z.array(z.number()),
});

export const ToReplaceCountry = z.object({
	type: z.literal("country"),
	country_codes: z.array(z.string()),
});

export const ToReplaceSchema = z.discriminatedUnion("type", [
	ToReplaceIpRange,
	ToReplaceIpAddress,
	ToReplaceAsn,
	ToReplaceCountry,
]);

export type ToReplace = z.infer<typeof ToReplaceSchema>;

export const ReplaceWithIpRange = z.object({
	type: z.literal("ip_range"),
	ip_ranges: z.array(z.string()),
});

export const ReplaceWithAsn = z.object({
	type: z.literal("asn"),
	asns: z.array(z.number()),
});

export const ReplaceWithCountry = z.object({
	type: z.literal("country"),
	country_codes: z.array(z.string()),
});

export const ReplaceWithAny = z.object({
	type: z.literal("any"),
});

export const ReplaceWithSchema = z.discriminatedUnion("type", [
	ReplaceWithIpRange,
	ReplaceWithAsn,
	ReplaceWithCountry,
	ReplaceWithAny,
]);

export type ReplaceWith = z.infer<typeof ReplaceWithSchema>;

export const ProxyReplacementSchema = z.object({
	id: z.number(),
	state: z.string(),
	to_replace: ToReplaceSchema,
	replace_with: z.array(ReplaceWithSchema),
	dry_run: z.boolean(),
	proxies_to_replace: z.number(),
	proxies_replaced: z.number(),
	proxies_to_add: z.number(),
	proxies_added: z.number(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type ProxyReplacement = z.infer<typeof ProxyReplacementSchema>;

export const CreateReplacementInput = z.object({
	to_replace: ToReplaceSchema,
	replace_with: z.array(ReplaceWithSchema),
	dry_run: z.boolean().optional(),
});

export type CreateReplacementInput = z.infer<typeof CreateReplacementInput>;

export const ReplacedProxySchema = z.object({
	id: z.number(),
	proxy_address: z.string(),
	port: z.number(),
	country_code: z.string(),
	city_name: z.string().nullable(),
	asn_name: z.string().nullable(),
	asn_number: z.number().nullable(),
	replaced_at: z.string(),
	created_at: z.string(),
});

export type ReplacedProxy = z.infer<typeof ReplacedProxySchema>;
