import { z } from "zod";

export const PlanSchema = z.object({
	id: z.number(),
	name: z.string(),
	proxy_type: z.string(),
	price: z.number(),
	price_period: z.string(),
	proxy_count: z.number(),
	bandwidth_limit: z.number().nullable(),
	thread_limit: z.number(),
	ip_authorization_limit: z.number(),
	subuser_limit: z.number(),
	countries: z.record(z.string(), z.number()).optional(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type Plan = z.infer<typeof PlanSchema>;

export const UpdatePlanInput = z.object({
	auto_renew: z.boolean().optional(),
	renewal_plan_id: z.number().nullable().optional(),
});

export type UpdatePlanInput = z.infer<typeof UpdatePlanInput>;

export const UpgradePlanInput = z.object({
	plan_type: z.string().optional(),
	proxy_type: z.string().optional(),
	proxy_count: z.number().optional(),
	bandwidth_limit: z.number().optional(),
	thread_limit: z.number().optional(),
	countries: z.record(z.string(), z.number()).optional(),
	price_period: z.string().optional(),
	auto_renew: z.boolean().optional(),
});

export type UpgradePlanInput = z.infer<typeof UpgradePlanInput>;

export const CancelPlanResponseSchema = z.object({
	id: z.number(),
	message: z.string().optional(),
});

export type CancelPlanResponse = z.infer<typeof CancelPlanResponseSchema>;

export const PurchaseResponseSchema = z.object({
	id: z.number(),
	status: z.string(),
	message: z.string().optional(),
	stripe_pi_client_secret: z.string().nullable().optional(),
});

export type PurchaseResponse = z.infer<typeof PurchaseResponseSchema>;
