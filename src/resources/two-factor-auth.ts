import type { HttpClient } from "../http.js";
import type {
	ActivateTwoFactorInput,
	ChangeTwoFactorInput,
	EnterTwoFactorCodeInput,
	TwoFactorMethod,
} from "../schemas/two-factor-auth.js";
import { TwoFactorMethodSchema } from "../schemas/two-factor-auth.js";

export class TwoFactorAuthResource {
	constructor(private readonly http: HttpClient) {}

	/** Get the current 2FA method. */
	async getMethod(): Promise<TwoFactorMethod> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/2fa/",
		});
		return TwoFactorMethodSchema.parse(data);
	}

	/** Activate a 2FA method. */
	async activateMethod(input: ActivateTwoFactorInput): Promise<TwoFactorMethod> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/2fa/activate/",
			body: input,
		});
		return TwoFactorMethodSchema.parse(data);
	}

	/** Change the 2FA method. */
	async changeMethod(input: ChangeTwoFactorInput): Promise<TwoFactorMethod> {
		const data = await this.http.request({
			method: "POST",
			path: "/api/v2/2fa/change/",
			body: input,
		});
		return TwoFactorMethodSchema.parse(data);
	}

	/** Enter a 2FA code. */
	async enterCode(input: EnterTwoFactorCodeInput): Promise<unknown> {
		return this.http.request({
			method: "POST",
			path: "/api/v2/2fa/enter/",
			body: input,
		});
	}

	/** Resend 2FA email code. */
	async resendEmail(): Promise<unknown> {
		return this.http.request({
			method: "POST",
			path: "/api/v2/2fa/resend/",
		});
	}
}
