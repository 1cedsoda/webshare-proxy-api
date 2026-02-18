import { z } from "zod";

export const TwoFactorMethodSchema = z.object({
	id: z.number(),
	type: z.enum(["email_code", "device_totp"]),
	active: z.boolean(),
	secret_key: z.string().nullable().optional(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type TwoFactorMethod = z.infer<typeof TwoFactorMethodSchema>;

export const ActivateTwoFactorInput = z.object({
	type: z.enum(["email_code", "device_totp"]),
	code: z.string().optional(),
});

export type ActivateTwoFactorInput = z.infer<typeof ActivateTwoFactorInput>;

export const ChangeTwoFactorInput = z.object({
	type: z.enum(["email_code", "device_totp"]),
});

export type ChangeTwoFactorInput = z.infer<typeof ChangeTwoFactorInput>;

export const EnterTwoFactorCodeInput = z.object({
	code: z.string(),
});

export type EnterTwoFactorCodeInput = z.infer<typeof EnterTwoFactorCodeInput>;
