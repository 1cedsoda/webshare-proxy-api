import { z } from "zod";

export const UserProfileSchema = z.object({
	id: z.number(),
	email: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	timezone: z.string(),
	registered_at: z.string(),
	updated_at: z.string(),
	referred_by: z.string().nullable(),
	subscription_plan_id: z.number().nullable(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;

export const UpdateProfileInput = z.object({
	first_name: z.string().optional(),
	last_name: z.string().optional(),
	timezone: z.string().optional(),
});

export type UpdateProfileInput = z.infer<typeof UpdateProfileInput>;

export const UserPreferencesSchema = z.object({
	id: z.number(),
	marketing_emails: z.boolean(),
	notification_emails: z.boolean(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type UserPreferences = z.infer<typeof UserPreferencesSchema>;

export const UpdatePreferencesInput = z.object({
	marketing_emails: z.boolean().optional(),
	notification_emails: z.boolean().optional(),
});

export type UpdatePreferencesInput = z.infer<typeof UpdatePreferencesInput>;
