import type { HttpClient } from "../http.js";
import type { CheckoutResponse, PurchasePlanInput, RenewInput } from "../schemas/checkout.js";
import { CheckoutResponseSchema } from "../schemas/checkout.js";

export class CheckoutResource {
	constructor(private readonly http: HttpClient) {}

	/** Purchase a new plan. */
	async purchase(input: PurchasePlanInput): Promise<CheckoutResponse> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/subscription/checkout/purchase/",
			body: input,
		});
		return CheckoutResponseSchema.parse(data);
	}

	/** Renew an existing plan. */
	async renew(input: RenewInput): Promise<CheckoutResponse> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/subscription/checkout/renew/",
			body: input,
		});
		return CheckoutResponseSchema.parse(data);
	}
}
