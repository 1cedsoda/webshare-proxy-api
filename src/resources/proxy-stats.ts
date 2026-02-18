import { z } from "zod";
import type { HttpClient } from "../http.js";
import type { AggregateStat, ProxyStat } from "../schemas/proxy-stats.js";
import { AggregateStatSchema, ProxyStatSchema } from "../schemas/proxy-stats.js";

export interface ListStatsParams {
	plan_id?: number;
	start_date?: string;
	end_date?: string;
}

export interface AggregateStatsParams {
	plan_id?: number;
	start_date?: string;
	end_date?: string;
}

export class ProxyStatsResource {
	constructor(private readonly http: HttpClient) {}

	/** List proxy stats (not paginated — returns array). */
	async list(params?: ListStatsParams): Promise<ProxyStat[]> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/stats/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return z.array(ProxyStatSchema).parse(data);
	}

	/** Get aggregate proxy stats. */
	async aggregate(params?: AggregateStatsParams): Promise<AggregateStat> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/stats/aggregate/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return AggregateStatSchema.parse(data);
	}
}
