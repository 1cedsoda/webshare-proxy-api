import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { ApiKey } from "../schemas/api-keys.js";
import {
	ApiKeySchema,
	type CreateApiKeyInput,
	type UpdateApiKeyInput,
} from "../schemas/api-keys.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";

const paginatedApiKey = paginatedSchema(ApiKeySchema);

export class ApiKeysResource {
	constructor(private readonly http: HttpClient) {}

	/** List API keys (paginated). */
	async list(params?: PaginationParams): Promise<PaginatedResponse<ApiKey>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/apikey/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedApiKey.parse(data);
	}

	/** Auto-paginate through all API keys. */
	listAll(params?: Omit<PaginationParams, "page">): AsyncIterable<ApiKey> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a single API key by ID. */
	async retrieve(id: number): Promise<ApiKey> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/apikey/${id}/`,
		});
		return ApiKeySchema.parse(data);
	}

	/** Create a new API key. */
	async create(input: CreateApiKeyInput): Promise<ApiKey> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/apikey/",
			body: input,
		});
		return ApiKeySchema.parse(data);
	}

	/** Update an existing API key. */
	async update(id: number, input: UpdateApiKeyInput): Promise<ApiKey> {
		const data = await this.http.request({
			method: "PATCH",
			path: `/api/v2/apikey/${id}/`,
			body: input,
		});
		return ApiKeySchema.parse(data);
	}

	/** Delete an API key. */
	async delete(id: number): Promise<void> {
		await this.http.request({
			method: "DELETE",
			path: `/api/v2/apikey/${id}/`,
		});
	}
}
