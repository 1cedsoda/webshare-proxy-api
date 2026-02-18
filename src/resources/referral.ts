import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type {
	EarnOut,
	ReferralCodeInfo,
	ReferralConfig,
	ReferralCredit,
	UpdateReferralConfigInput,
} from "../schemas/referral.js";
import {
	EarnOutSchema,
	ReferralCodeInfoSchema,
	ReferralConfigSchema,
	ReferralCreditSchema,
} from "../schemas/referral.js";

const paginatedCredit = paginatedSchema(ReferralCreditSchema);
const paginatedEarnOut = paginatedSchema(EarnOutSchema);

export class ReferralResource {
	constructor(private readonly http: HttpClient) {}

	/** Get referral config. */
	async getConfig(): Promise<ReferralConfig> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/referral/config/",
		});
		return ReferralConfigSchema.parse(data);
	}

	/** Update referral config (mode, paypal_payout_email). */
	async updateConfig(input: UpdateReferralConfigInput): Promise<ReferralConfig> {
		const data = await this.http.request({
			method: "PATCH",
			path: "/api/v2/referral/config/",
			body: input,
		});
		return ReferralConfigSchema.parse(data);
	}

	/** List referral credits (paginated). */
	async listCredits(params?: PaginationParams): Promise<PaginatedResponse<ReferralCredit>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/referral/credit/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedCredit.parse(data);
	}

	/** Auto-paginate through all referral credits. */
	listAllCredits(params?: Omit<PaginationParams, "page">): AsyncIterable<ReferralCredit> {
		return paginate((page) => this.listCredits({ ...params, page }));
	}

	/** Get a single referral credit. */
	async getCredit(id: number): Promise<ReferralCredit> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/referral/credit/${id}/`,
		});
		return ReferralCreditSchema.parse(data);
	}

	/** List earn outs (paginated). */
	async listEarnOuts(params?: PaginationParams): Promise<PaginatedResponse<EarnOut>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/referral/earnout/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedEarnOut.parse(data);
	}

	/** Auto-paginate through all earn outs. */
	listAllEarnOuts(params?: Omit<PaginationParams, "page">): AsyncIterable<EarnOut> {
		return paginate((page) => this.listEarnOuts({ ...params, page }));
	}

	/** Get a single earn out. */
	async getEarnOut(id: number): Promise<EarnOut> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/referral/earnout/${id}/`,
		});
		return EarnOutSchema.parse(data);
	}

	/** Get referral code info (public, no auth required). */
	async getReferralCodeInfo(code: string): Promise<ReferralCodeInfo> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/referral/code/info/",
			query: { referral_code: code },
		});
		return ReferralCodeInfoSchema.parse(data);
	}
}
