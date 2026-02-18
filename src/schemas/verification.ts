import { z } from "zod";

export const VerificationSchema = z.object({
	id: z.number(),
	type: z.enum(["acceptable_use_violation", "abuse_report", "fraudulent_payment"]),
	state: z.enum(["inflow", "successful_verification", "failed_verification"]),
	created_at: z.string(),
	updated_at: z.string(),
	needs_evidence: z.boolean(),
});

export type Verification = z.infer<typeof VerificationSchema>;
