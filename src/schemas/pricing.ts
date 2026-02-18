import { z } from "zod";

export const DiscountTierSchema = z.object({
	proxy_count_from: z.number(),
	proxy_count_to: z.number().nullable(),
	discount_percent: z.number(),
});

export type DiscountTier = z.infer<typeof DiscountTierSchema>;

export const FeatureSchema = z.object({
	name: z.string(),
	value: z.union([z.string(), z.number(), z.boolean()]),
});

export type Feature = z.infer<typeof FeatureSchema>;

export const PricingResponseSchema = z.object({
	price: z.number(),
	price_per_proxy: z.number(),
	price_period: z.string(),
	proxy_count: z.number(),
	bandwidth_limit: z.number().nullable(),
	thread_limit: z.number(),
	discount_tiers: z.array(DiscountTierSchema).optional(),
	features: z.array(FeatureSchema).optional(),
});

export type PricingResponse = z.infer<typeof PricingResponseSchema>;

export const PricingQueryInput = z.object({
	proxy_type: z.string(),
	proxy_count: z.number().optional(),
	bandwidth_limit: z.number().optional(),
	price_period: z.string().optional(),
	countries: z.record(z.string(), z.number()).optional(),
});

export type PricingQueryInput = z.infer<typeof PricingQueryInput>;

export const CustomizeQueryInput = z.object({
	proxy_type: z.string().optional(),
	proxy_count: z.number().optional(),
	bandwidth_limit: z.number().optional(),
	price_period: z.string().optional(),
	countries: z.record(z.string(), z.number()).optional(),
});

export type CustomizeQueryInput = z.infer<typeof CustomizeQueryInput>;

export const CustomizeResponseSchema = z.object({
	price: z.number(),
	price_per_proxy: z.number(),
	price_period: z.string(),
	proxy_count: z.number(),
	bandwidth_limit: z.number().nullable(),
	thread_limit: z.number(),
});

export type CustomizeResponse = z.infer<typeof CustomizeResponseSchema>;

export const AvailableAssetsResponseSchema = z.object({
	available_proxy_types: z.array(z.string()),
	available_price_periods: z.array(z.string()),
	available_countries: z.record(z.string(), z.number()),
});

export type AvailableAssetsResponse = z.infer<typeof AvailableAssetsResponseSchema>;
