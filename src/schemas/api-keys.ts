import { z } from "zod";

export const ApiKeySchema = z.object({
	id: z.number(),
	key: z.string(),
	label: z.string(),
	ip_addresses: z.array(z.string()),
	permissions: z.array(z.string()),
	created_at: z.string(),
	updated_at: z.string(),
});

export type ApiKey = z.infer<typeof ApiKeySchema>;

export const CreateApiKeyInput = z.object({
	label: z.string().optional(),
	ip_addresses: z.array(z.string()).optional(),
	permissions: z.array(z.string()).optional(),
});

export type CreateApiKeyInput = z.infer<typeof CreateApiKeyInput>;

export const UpdateApiKeyInput = z.object({
	label: z.string().optional(),
	ip_addresses: z.array(z.string()).optional(),
	permissions: z.array(z.string()).optional(),
});

export type UpdateApiKeyInput = z.infer<typeof UpdateApiKeyInput>;
