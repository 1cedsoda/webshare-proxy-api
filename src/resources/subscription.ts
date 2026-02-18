import type { HttpClient } from "../http.js";
import type { Subscription } from "../schemas/subscription.js";
import { SubscriptionSchema } from "../schemas/subscription.js";

export class SubscriptionResource {
	constructor(private readonly http: HttpClient) {}

	/** Get the current subscription. */
	async get(): Promise<Subscription> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subscription/",
		});
		return SubscriptionSchema.parse(data);
	}
}
