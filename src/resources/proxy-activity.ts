import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type {
	DownloadActivityParams,
	ListActivityParams,
	ProxyActivity,
} from "../schemas/proxy-activity.js";
import { ProxyActivitySchema } from "../schemas/proxy-activity.js";

const paginatedActivity = paginatedSchema(ProxyActivitySchema);

export class ProxyActivityResource {
	constructor(private readonly http: HttpClient) {}

	/** List proxy activity (paginated). */
	async list(params?: ListActivityParams): Promise<PaginatedResponse<ProxyActivity>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/proxy/activity/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedActivity.parse(data);
	}

	/** Auto-paginate through all proxy activity records. */
	listAll(params?: Omit<ListActivityParams, "page">): AsyncIterable<ProxyActivity> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Download proxy activity as CSV. */
	async download(params: DownloadActivityParams): Promise<string> {
		const { token, ...query } = params;
		const response = await this.http.request({
			method: "GET",
			path: `/api/v2/proxy/activity/download/${token}/`,
			query: query as Record<string, string | number | boolean | undefined>,
			raw: true,
		});
		return response.text();
	}
}
