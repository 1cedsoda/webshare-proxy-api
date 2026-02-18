import { z } from "zod";

export const IpAuthorizationSchema = z.object({
	id: z.number(),
	ip_address: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type IpAuthorization = z.infer<typeof IpAuthorizationSchema>;

export const CreateIpAuthInput = z.object({
	ip_address: z.string(),
});

export type CreateIpAuthInput = z.infer<typeof CreateIpAuthInput>;

export const WhatsMyIpSchema = z.object({
	ip_address: z.string(),
});

export type WhatsMyIp = z.infer<typeof WhatsMyIpSchema>;
