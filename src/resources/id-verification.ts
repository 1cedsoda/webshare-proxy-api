import type { HttpClient } from "../http.js";
import type { IdVerification } from "../schemas/id-verification.js";
import { IdVerificationSchema } from "../schemas/id-verification.js";

export class IdVerificationResource {
	constructor(private readonly http: HttpClient) {}

	/** Retrieve current ID verification status. */
	async retrieve(): Promise<IdVerification> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/idverification/",
		});
		return IdVerificationSchema.parse(data);
	}

	/** Start ID verification (Stripe Identity). */
	async start(): Promise<IdVerification> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/idverification/start/",
		});
		return IdVerificationSchema.parse(data);
	}

	/** Mark ID verification as complete. */
	async complete(): Promise<IdVerification> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/idverification/complete/",
		});
		return IdVerificationSchema.parse(data);
	}
}
