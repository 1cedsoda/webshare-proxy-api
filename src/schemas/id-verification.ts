import { z } from "zod";

export const IdVerificationSchema = z.object({
	id: z.number(),
	state: z.enum(["not-required", "requested", "pending", "processing", "failed", "verified"]),
	client_secret: z.string().nullable(),
	verification_failure_times: z.number(),
	max_verification_failure_times: z.number(),
	created_at: z.string(),
	updated_at: z.string(),
	verified_at: z.string().nullable(),
});

export type IdVerification = z.infer<typeof IdVerificationSchema>;
