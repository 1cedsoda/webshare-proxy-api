import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";
import type {
	CancelPlanResponse,
	Plan,
	PurchaseResponse,
	UpdatePlanInput,
	UpgradePlanInput,
} from "../schemas/plan.js";
import { CancelPlanResponseSchema, PlanSchema, PurchaseResponseSchema } from "../schemas/plan.js";

const paginatedPlan = paginatedSchema(PlanSchema);

export class PlanResource {
	constructor(private readonly http: HttpClient) {}

	/** List plans (paginated). */
	async list(params?: PaginationParams): Promise<PaginatedResponse<Plan>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subscription/plan/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedPlan.parse(data);
	}

	/** Auto-paginate through all plans. */
	listAll(params?: Omit<PaginationParams, "page">): AsyncIterable<Plan> {
		return paginate((page) => this.list({ ...params, page }));
	}

	/** Retrieve a plan by ID. */
	async retrieve(id: number): Promise<Plan> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/subscription/plan/${id}/`,
		});
		return PlanSchema.parse(data);
	}

	/** Update a plan (e.g. auto_renew, renewal_plan_id). */
	async update(id: number, input: UpdatePlanInput): Promise<Plan> {
		const data = await this.http.request({
			method: "PATCH",
			path: `/api/v2/subscription/plan/${id}/`,
			body: input,
		});
		return PlanSchema.parse(data);
	}

	/** Upgrade a plan. */
	async upgrade(id: number, input: UpgradePlanInput): Promise<PurchaseResponse> {
		const data = await this.http.request({
			method: "POST",
			path: `/api/v2/subscription/plan/${id}/upgrade/`,
			body: input,
		});
		return PurchaseResponseSchema.parse(data);
	}

	/** Cancel a plan. */
	async cancel(id: number): Promise<CancelPlanResponse> {
		const data = await this.http.request({
			method: "POST",
			path: `/api/v2/subscription/plan/${id}/cancel/`,
		});
		return CancelPlanResponseSchema.parse(data);
	}
}
