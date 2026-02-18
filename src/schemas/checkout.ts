import { z } from "zod";

export const PurchasePlanInput = z.object({
	plan_type: z.string().optional(),
	proxy_type: z.string(),
	proxy_count: z.number().optional(),
	bandwidth_limit: z.number().optional(),
	thread_limit: z.number().optional(),
	countries: z.record(z.string(), z.number()).optional(),
	price_period: z.string().optional(),
	auto_renew: z.boolean().optional(),
	payment_method_id: z.number().optional(),
	referral_code: z.string().optional(),
});

export type PurchasePlanInput = z.infer<typeof PurchasePlanInput>;

export const RenewInput = z.object({
	plan_id: z.number(),
	payment_method_id: z.number().optional(),
});

export type RenewInput = z.infer<typeof RenewInput>;

export const CheckoutResponseSchema = z.object({
	id: z.number(),
	status: z.string(),
	message: z.string().optional(),
	stripe_pi_client_secret: z.string().nullable().optional(),
});

export type CheckoutResponse = z.infer<typeof CheckoutResponseSchema>;
