import { z } from "zod";

export const BillingInfoSchema = z.object({
	id: z.number(),
	company_name: z.string().nullable(),
	address_line1: z.string().nullable(),
	address_line2: z.string().nullable(),
	city: z.string().nullable(),
	state: z.string().nullable(),
	postal_code: z.string().nullable(),
	country: z.string().nullable(),
	vat_number: z.string().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type BillingInfo = z.infer<typeof BillingInfoSchema>;

export const UpdateBillingInput = z.object({
	company_name: z.string().nullable().optional(),
	address_line1: z.string().nullable().optional(),
	address_line2: z.string().nullable().optional(),
	city: z.string().nullable().optional(),
	state: z.string().nullable().optional(),
	postal_code: z.string().nullable().optional(),
	country: z.string().nullable().optional(),
	vat_number: z.string().nullable().optional(),
});

export type UpdateBillingInput = z.infer<typeof UpdateBillingInput>;

export const StripeCardSchema = z.object({
	type: z.literal("stripe_card"),
	id: z.number(),
	stripe_card_brand: z.string(),
	stripe_card_last4: z.string(),
	stripe_card_exp_month: z.number(),
	stripe_card_exp_year: z.number(),
	is_default: z.boolean(),
	created_at: z.string(),
	updated_at: z.string(),
});

export const LinkPaymentSchema = z.object({
	type: z.literal("link_payment"),
	id: z.number(),
	link_email: z.string(),
	is_default: z.boolean(),
	created_at: z.string(),
	updated_at: z.string(),
});

export const PaymentMethodSchema = z.discriminatedUnion("type", [
	StripeCardSchema,
	LinkPaymentSchema,
]);

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

export const UpdatePaymentMethodInput = z.object({
	stripe_payment_method_id: z.string().optional(),
	set_default_payment_method_id: z.number().optional(),
});

export type UpdatePaymentMethodInput = z.infer<typeof UpdatePaymentMethodInput>;

export const UpdatePaymentMethodResponseSchema = z.object({
	stripe_setup_intent_client_secret: z.string().nullable(),
});

export type UpdatePaymentMethodResponse = z.infer<typeof UpdatePaymentMethodResponseSchema>;

export const TransactionSchema = z.object({
	id: z.number(),
	amount: z.number(),
	currency: z.string(),
	status: z.string(),
	description: z.string().nullable(),
	payment_method_type: z.string().nullable(),
	invoice_available: z.boolean(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type Transaction = z.infer<typeof TransactionSchema>;

export const PendingPaymentSchema = z.object({
	id: z.number(),
	amount: z.number(),
	currency: z.string(),
	status: z.string(),
	description: z.string().nullable(),
	stripe_pi_client_secret: z.string().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type PendingPayment = z.infer<typeof PendingPaymentSchema>;
