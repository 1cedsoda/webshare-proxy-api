import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type { Verification } from "../schemas/verification.js";
import { VerificationSchema } from "../schemas/verification.js";

const paginatedVerification = paginatedSchema(VerificationSchema);

export class VerificationResource {
	constructor(private readonly http: HttpClient) {}

	/** List verifications (paginated). */
	async list(params?: PaginationParams): Promise<PaginatedResponse<Verification>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/verification/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedVerification.parse(data);
	}

	/** Auto-paginate through all verifications. */
	listAll(params?: Omit<PaginationParams, "page">): AsyncIterable<Verification> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a single verification. */
	async retrieve(id: number): Promise<Verification> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/verification/${id}/`,
		});
		return VerificationSchema.parse(data);
	}

	/** Submit evidence for a verification. */
	async submitEvidence(verificationId: number, input: Record<string, unknown>): Promise<unknown> {
		return this.http.request({
			method: "POST",
			path: `/api/v2/verification/${verificationId}/evidence/`,
			body: input,
		});
	}

	/** Submit a security code. */
	async submitSecurityCode(input: { code: string }): Promise<unknown> {
		return this.http.request({
			method: "POST",
			path: "/api/v2/verification/security_code/",
			body: input,
		});
	}

	/** Submit an appeal for a verification. */
	async submitAppeal(verificationId: number, input: Record<string, unknown>): Promise<unknown> {
		return this.http.request({
			method: "POST",
			path: `/api/v2/verification/${verificationId}/appeal/`,
			body: input,
		});
	}
}
