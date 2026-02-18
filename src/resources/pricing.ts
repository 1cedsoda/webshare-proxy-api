import type { HttpClient } from "../http.js";
import type {
	AvailableAssetsResponse,
	CustomizeQueryInput,
	CustomizeResponse,
	PricingQueryInput,
	PricingResponse,
} from "../schemas/pricing.js";
import {
	AvailableAssetsResponseSchema,
	CustomizeResponseSchema,
	PricingResponseSchema,
} from "../schemas/pricing.js";

export class PricingResource {
	constructor(private readonly http: HttpClient) {}

	/** Get pricing information. */
	async get(query: PricingQueryInput, planId?: number): Promise<PricingResponse> {
		const q: Record<string, string | number | boolean | undefined> = {
			query: JSON.stringify(query),
		};
		if (planId !== undefined) q.plan_id = planId;
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subscription/pricing/",
			query: q,
		});
		return PricingResponseSchema.parse(data);
	}

	/** Get customized pricing. */
	async customize(query: CustomizeQueryInput, planId?: number): Promise<CustomizeResponse> {
		const q: Record<string, string | number | boolean | undefined> = {
			query: JSON.stringify(query),
		};
		if (planId !== undefined) q.plan_id = planId;
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subscription/customize/",
			query: q,
		});
		return CustomizeResponseSchema.parse(data);
	}

	/** Get available assets (proxy types, periods, countries). */
	async availableAssets(): Promise<AvailableAssetsResponse> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subscription/available_assets/",
		});
		return AvailableAssetsResponseSchema.parse(data);
	}
}
