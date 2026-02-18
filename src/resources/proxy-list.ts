import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type {
	DownloadProxyListParams,
	ListProxiesParams,
	WebshareProxy,
} from "../schemas/proxy-list.js";
import { ProxySchema } from "../schemas/proxy-list.js";

const paginatedProxy = paginatedSchema(ProxySchema);

export class ProxyListResource {
	constructor(private readonly http: HttpClient) {}

	/** List proxies (paginated). */
	async list(params?: ListProxiesParams): Promise<PaginatedResponse<WebshareProxy>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/proxy/list/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedProxy.parse(data);
	}

	/** Auto-paginate through all proxies. */
	listAll(params?: Omit<ListProxiesParams, "page">): AsyncIterable<WebshareProxy> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/**
	 * Download proxy list as plain text.
	 * @param params.token - Download token (from proxy config or download tokens endpoint).
	 * @param params.mode - "direct" or "backbone"
	 * @param params.format - Output format
	 */
	async download(params: DownloadProxyListParams): Promise<string> {
		const { token, ...query } = params;
		const response = await this.http.request({
			method: "GET",
			path: `/api/v2/proxy/list/download/${token}/`,
			query: query as Record<string, string | number | boolean | undefined>,
			raw: true,
		});
		return response.text();
	}

	/** Refresh the proxy list (triggers re-provisioning). */
	async refresh(planId?: number): Promise<void> {
		await this.http.request({
			method: "POST",
			path: "/api/v2/proxy/list/refresh/",
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
	}
}
