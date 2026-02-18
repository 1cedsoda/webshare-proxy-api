import { z } from "zod";

export const NotificationSchema = z.object({
	id: z.number(),
	type: z.string(),
	title: z.string(),
	body: z.string(),
	is_read: z.boolean(),
	is_dismissed: z.boolean(),
	action_url: z.string().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type Notification = z.infer<typeof NotificationSchema>;

export const ListNotificationsParams = z.object({
	page: z.number().optional(),
	page_size: z.number().optional(),
	is_dismissed: z.boolean().optional(),
	ordering: z.string().optional(),
});

export type ListNotificationsParams = z.infer<typeof ListNotificationsParams>;
