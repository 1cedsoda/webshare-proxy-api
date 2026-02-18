import type { HttpClient } from "../http.js";
import { paginate } from "../pagination.js";
import type {
	BillingInfo,
	PaymentMethod,
	PendingPayment,
	Transaction,
	UpdateBillingInput,
	UpdatePaymentMethodInput,
	UpdatePaymentMethodResponse,
} from "../schemas/billing.js";
import {
	BillingInfoSchema,
	PaymentMethodSchema,
	PendingPaymentSchema,
	TransactionSchema,
	UpdatePaymentMethodResponseSchema,
} from "../schemas/billing.js";
import type { PaginatedResponse, PaginationParams } from "../schemas/common.js";
import { paginatedSchema } from "../schemas/common.js";

const paginatedPaymentMethod = paginatedSchema(PaymentMethodSchema);
const paginatedTransaction = paginatedSchema(TransactionSchema);
const paginatedPending = paginatedSchema(PendingPaymentSchema);

export class BillingResource {
	constructor(private readonly http: HttpClient) {}

	/** Get billing info. */
	async getBillingInfo(): Promise<BillingInfo> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/subscription/billing_info/",
		});
		return BillingInfoSchema.parse(data);
	}

	/** Update billing info. */
	async updateBillingInfo(input: UpdateBillingInput): Promise<BillingInfo> {
		const data = await this.http.request({
			method: "PATCH",
			path: "/api/v2/subscription/billing_info/",
			body: input,
		});
		return BillingInfoSchema.parse(data);
	}

	/** List payment methods (paginated). */
	async listPaymentMethods(params?: PaginationParams): Promise<PaginatedResponse<PaymentMethod>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/payment/method/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedPaymentMethod.parse(data);
	}

	/** Auto-paginate through all payment methods. */
	listAllPaymentMethods(params?: Omit<PaginationParams, "page">): AsyncIterable<PaymentMethod> {
		return paginate((page) => this.listPaymentMethods({ ...params, page }));
	}

	/** Get a single payment method. */
	async getPaymentMethod(id: number): Promise<PaymentMethod> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/payment/method/${id}/`,
		});
		return PaymentMethodSchema.parse(data);
	}

	/** Add or update a payment method. */
	async updatePaymentMethod(input: UpdatePaymentMethodInput): Promise<UpdatePaymentMethodResponse> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/payment/method/",
			body: input,
		});
		return UpdatePaymentMethodResponseSchema.parse(data);
	}

	/** List transactions (paginated). */
	async listTransactions(params?: PaginationParams): Promise<PaginatedResponse<Transaction>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/payment/transaction/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedTransaction.parse(data);
	}

	/** Auto-paginate through all transactions. */
	listAllTransactions(params?: Omit<PaginationParams, "page">): AsyncIterable<Transaction> {
		return paginate((page) => this.listTransactions({ ...params, page }));
	}

	/** Get a single transaction. */
	async getTransaction(id: number): Promise<Transaction> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/payment/transaction/${id}/`,
		});
		return TransactionSchema.parse(data);
	}

	/** List pending payments (paginated). */
	async listPendingPayments(params?: PaginationParams): Promise<PaginatedResponse<PendingPayment>> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/payment/pending/",
			query: params as Record<string, string | number | boolean | undefined>,
		});
		return paginatedPending.parse(data);
	}

	/** Auto-paginate through all pending payments. */
	listAllPendingPayments(params?: Omit<PaginationParams, "page">): AsyncIterable<PendingPayment> {
		return paginate((page) => this.listPendingPayments({ ...params, page }));
	}

	/** Get a single pending payment. */
	async getPendingPayment(id: number): Promise<PendingPayment> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/payment/pending/${id}/`,
		});
		return PendingPaymentSchema.parse(data);
	}

	/** Download an invoice PDF as ArrayBuffer. */
	async downloadInvoice(transactionId: number): Promise<ArrayBuffer> {
		const response = await this.http.request({
			method: "GET",
			path: "/api/v2/invoices/download",
			query: { transaction_id: transactionId },
			raw: true,
		});
		return response.arrayBuffer();
	}
}
