import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type { CreateIpAuthInput, IpAuthorization, WhatsMyIp } from "../schemas/ip-authorization.js";
import { IpAuthorizationSchema, WhatsMyIpSchema } from "../schemas/ip-authorization.js";

const paginatedIpAuth = paginatedSchema(IpAuthorizationSchema);

export class IpAuthorizationResource {
	constructor(private readonly http: HttpClient) {}

	/** List IP authorizations (paginated). */
	async list(
		params?: PaginationParams & { plan_id?: number },
	): Promise<PaginatedResponse<IpAuthorization>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/proxy/ipauthorization/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedIpAuth.parse(data);
	}

	/** Auto-paginate through all IP authorizations. */
	listAll(
		params?: Omit<PaginationParams, "page"> & { plan_id?: number },
	): AsyncIterable<IpAuthorization> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a single IP authorization. */
	async retrieve(id: number, planId?: number): Promise<IpAuthorization> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/proxy/ipauthorization/${id}/`,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return IpAuthorizationSchema.parse(data);
	}

	/** Create a new IP authorization. */
	async create(input: CreateIpAuthInput, planId?: number): Promise<IpAuthorization> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/proxy/ipauthorization/",
			body: input,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return IpAuthorizationSchema.parse(data);
	}

	/** Delete an IP authorization. */
	async delete(id: number, planId?: number): Promise<void> {
		await this.http.request({
			method: "DELETE",
			path: `/api/v2/proxy/ipauthorization/${id}/`,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
	}

	/** Get your current IP address as seen by the proxy. */
	async whatsMyIp(): Promise<WhatsMyIp> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/proxy/ipauthorization/whatsmyip/",
		});
		return WhatsMyIpSchema.parse(data);
	}
}
