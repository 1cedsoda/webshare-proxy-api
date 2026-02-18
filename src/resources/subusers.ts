import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type { CreateSubUserInput, SubUser, UpdateSubUserInput } from "../schemas/subusers.js";
import { SubUserSchema } from "../schemas/subusers.js";

const paginatedSubUser = paginatedSchema(SubUserSchema);

export class SubUsersResource {
	constructor(private readonly http: HttpClient) {}

	/** List sub-users (paginated). */
	async list(
		params?: PaginationParams & { plan_id?: number },
	): Promise<PaginatedResponse<SubUser>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subuser/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedSubUser.parse(data);
	}

	/** Auto-paginate through all sub-users. */
	listAll(params?: Omit<PaginationParams, "page"> & { plan_id?: number }): AsyncIterable<SubUser> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a sub-user by ID. */
	async retrieve(id: number, planId?: number): Promise<SubUser> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/subuser/${id}/`,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return SubUserSchema.parse(data);
	}

	/** Create a new sub-user. */
	async create(input: CreateSubUserInput, planId?: number): Promise<SubUser> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/subuser/",
			body: input,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return SubUserSchema.parse(data);
	}

	/** Update a sub-user. */
	async update(id: number, input: UpdateSubUserInput, planId?: number): Promise<SubUser> {
		const data = await this.http.request({
			method: "PATCH",
			path: `/api/v2/subuser/${id}/`,
			body: input,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
		return SubUserSchema.parse(data);
	}

	/** Delete a sub-user. */
	async delete(id: number, planId?: number): Promise<void> {
		await this.http.request({
			method: "DELETE",
			path: `/api/v2/subuser/${id}/`,
			query: planId !== undefined ? { plan_id: planId } : undefined,
		});
	}

	/** Refresh a sub-user's proxy list. */
	async refreshProxyList(id: number): Promise<SubUser> {
		const data = await this.http.request({
			method: "POST",
			path: `/api/v2/subuser/${id}/refresh/`,
		});
		return SubUserSchema.parse(data);
	}
}
