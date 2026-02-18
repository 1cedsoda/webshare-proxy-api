import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type { ListNotificationsParams, Notification } from "../schemas/notifications.js";
import { NotificationSchema } from "../schemas/notifications.js";

const paginatedNotification = paginatedSchema(NotificationSchema);

export class NotificationsResource {
	constructor(private readonly http: HttpClient) {}

	/** List notifications (paginated). */
	async list(params?: ListNotificationsParams): Promise<PaginatedResponse<Notification>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/notification/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedNotification.parse(data);
	}

	/** Auto-paginate through all notifications. */
	listAll(params?: Omit<ListNotificationsParams, "page">): AsyncIterable<Notification> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a single notification. */
	async retrieve(id: number): Promise<Notification> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/notification/${id}/`,
		});
		return NotificationSchema.parse(data);
	}

	/** Dismiss a notification. */
	async dismiss(id: number): Promise<Notification> {
		const data = await this.http.request({
			method: "POST",
			path: `/api/v2/notification/${id}/dismiss/`,
		});
		return NotificationSchema.parse(data);
	}

	/** Restore a dismissed notification. */
	async restore(id: number): Promise<Notification> {
		const data = await this.http.request({
			method: "POST",
			path: `/api/v2/notification/${id}/restore/`,
		});
		return NotificationSchema.parse(data);
	}
}
