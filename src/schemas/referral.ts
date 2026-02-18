import { z } from "zod";

export const ReferralConfigSchema = z.object({
	id: z.number(),
	mode: z.enum(["payout", "credits"]),
	paypal_payout_email: z.string().nullable(),
	id_verification_required: z.boolean(),
	credits_earned: z.number(),
	payouts_earned: z.number(),
	total_credits_earned: z.number(),
	total_payouts_earned: z.number(),
	number_of_users_referred: z.number(),
	number_of_users_upgraded: z.number(),
	earn_out_frequency: z.string(),
	next_earn_out_date: z.string(),
	minimum_earn_out_amount: z.number(),
	referral_code: z.string(),
	referral_url: z.string(),
	referral_maximum_credits: z.number(),
	referral_credit_ratio: z.number(),
	referral_payment_pending_days: z.string(),
	promo_type: z
		.enum([
			"first_time_value_off",
			"first_time_percent_off",
			"always_value_off",
			"always_percent_off",
		])
		.nullable(),
	promo_value: z.number().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type ReferralConfig = z.infer<typeof ReferralConfigSchema>;

export const UpdateReferralConfigInput = z.object({
	mode: z.enum(["payout", "credits"]).optional(),
	paypal_payout_email: z.string().nullable().optional(),
});

export type UpdateReferralConfigInput = z.infer<typeof UpdateReferralConfigInput>;

export const ReferralCreditSchema = z.object({
	id: z.number(),
	user_id: z.number(),
	mode: z.enum(["payout", "credits"]),
	amount: z.number(),
	status: z.enum(["pending", "available", "reverted"]),
	created_at: z.string(),
	updated_at: z.string(),
	reverted_at: z.string().nullable(),
});

export type ReferralCredit = z.infer<typeof ReferralCreditSchema>;

export const EarnOutSchema = z.object({
	id: z.number(),
	mode: z.enum(["payout", "credits"]),
	paypal_payout_email: z.string().nullable(),
	amount: z.number(),
	status: z.enum(["processing", "completed", "failed"]),
	error_reason: z.string().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type EarnOut = z.infer<typeof EarnOutSchema>;

export const ReferralCodeInfoSchema = z.object({
	referral_code: z.string(),
	promo_type: z
		.enum([
			"first_time_value_off",
			"first_time_percent_off",
			"always_value_off",
			"always_percent_off",
		])
		.nullable(),
	promo_value: z.number().nullable(),
});

export type ReferralCodeInfo = z.infer<typeof ReferralCodeInfoSchema>;
