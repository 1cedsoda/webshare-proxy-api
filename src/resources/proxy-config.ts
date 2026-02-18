import type { HttpClient } from "../http.js";
import type {
	AllocateCountriesInput,
	ProxyConfig,
	ProxyConfigV3,
	ProxyStatsV3,
	ProxyStatusV3,
	UpdateProxyConfigInput,
} from "../schemas/proxy-config.js";
import {
	ProxyConfigSchema,
	ProxyConfigV3Schema,
	ProxyStatsV3Schema,
	ProxyStatusV3Schema,
} from "../schemas/proxy-config.js";

export class ProxyConfigResource {
	constructor(private readonly http: HttpClient) {}

	/** Get proxy config (v2). */
	async get(planId?: number): Promise<ProxyConfig> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/proxy/config/",
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return ProxyConfigSchema.parse(data);
	}

	/** Update proxy config (v2). */
	async update(input: UpdateProxyConfigInput, planId?: number): Promise<ProxyConfig> {
		const data = await this.http.request({
			method: "PATCH",
			path: "/api/v2/proxy/config/",
			body: input,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return ProxyConfigSchema.parse(data);
	}

	/** Allocate unallocated countries (v2). */
	async allocateUnallocatedCountries(
		input: AllocateCountriesInput,
		planId?: number,
	): Promise<ProxyConfig> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/proxy/config/allocate_unallocated_countries/",
			body: input,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return ProxyConfigSchema.parse(data);
	}

	/** Get proxy config (v3). */
	async getConfig(planId: number): Promise<ProxyConfigV3> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v3/proxy/config",
			query: { plan_id: planId },
		});
		return ProxyConfigV3Schema.parse(data);
	}

	/** Get proxy stats (v3). */
	async getStats(planId: number): Promise<ProxyStatsV3> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v3/proxy/list/stats",
			query: { plan_id: planId },
		});
		return ProxyStatsV3Schema.parse(data);
	}

	/** Get proxy status (v3). */
	async getStatus(planId: number): Promise<ProxyStatusV3> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v3/proxy/list/status",
			query: { plan_id: planId },
		});
		return ProxyStatusV3Schema.parse(data);
	}
}
