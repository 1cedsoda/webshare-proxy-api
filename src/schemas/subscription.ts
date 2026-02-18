import { z } from "zod";

export const SubscriptionSchema = z.object({
	id: z.number(),
	plan_id: z.number().nullable(),
	proxy_type: z.string().nullable(),
	start_date: z.string().nullable(),
	end_date: z.string().nullable(),
	bandwidth_limit: z.number().nullable(),
	bandwidth_used: z.number(),
	proxy_count: z.number(),
	thread_limit: z.number(),
	ip_authorization_limit: z.number(),
	subuser_limit: z.number(),
	free_credits: z.number(),
	auto_renew: z.boolean(),
	renewal_plan_id: z.number().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type Subscription = z.infer<typeof SubscriptionSchema>;
