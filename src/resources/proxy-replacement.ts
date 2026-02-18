import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type {
	CreateReplacementInput,
	ProxyReplacement,
	ReplacedProxy,
} from "../schemas/proxy-replacement.js";
import { ProxyReplacementSchema, ReplacedProxySchema } from "../schemas/proxy-replacement.js";

const paginatedReplacement = paginatedSchema(ProxyReplacementSchema);
const paginatedReplacedProxy = paginatedSchema(ReplacedProxySchema);

export class ProxyReplacementResource {
	constructor(private readonly http: HttpClient) {}

	/** List proxy replacements (paginated, v3). */
	async list(
		params?: PaginationParams & { plan_id?: number },
	): Promise<PaginatedResponse<ProxyReplacement>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v3/proxy/replace/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedReplacement.parse(data);
	}

	/** Auto-paginate through all proxy replacements. */
	listAll(
		params?: Omit<PaginationParams, "page"> & { plan_id?: number },
	): AsyncIterable<ProxyReplacement> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a proxy replacement by ID (v3). */
	async retrieve(id: number, planId?: number): Promise<ProxyReplacement> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v3/proxy/replace/${id}/`,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return ProxyReplacementSchema.parse(data);
	}

	/** Create a proxy replacement (v3). */
	async create(input: CreateReplacementInput, planId?: number): Promise<ProxyReplacement> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v3/proxy/replace/",
			body: input,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return ProxyReplacementSchema.parse(data);
	}

	/** List replaced proxies (paginated, v2). */
	async listReplaced(
		params?: PaginationParams & { plan_id?: number },
	): Promise<PaginatedResponse<ReplacedProxy>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/proxy/list/replaced/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedReplacedProxy.parse(data);
	}

	/** Auto-paginate through all replaced proxies. */
	listAllReplaced(
		params?: Omit<PaginationParams, "page"> & { plan_id?: number },
	): AsyncIterable<ReplacedProxy> {
		return paginate((page) => this.listReplaced({ ...params, page }));
	}

	/** Download replaced proxies as text. */
	async downloadReplaced(params: { token: string; format?: string }): Promise<string> {
		const { token, ...query } = params;
		const response = await this.http.request({
			method: "GET",
			path: `/api/v2/proxy/list/replaced/download/${token}/`,
			query: query as Record<string, string | number | boolean | undefined>,
			raw: true,
		});
		return response.text();
	}
}
