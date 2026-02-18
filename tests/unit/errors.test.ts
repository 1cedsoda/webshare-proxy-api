import { describe, expect, it } from "vitest";
import {
	WebshareBadRequestError,
	WebshareError,
	WebshareForbiddenError,
	WebshareNotFoundError,
	WebshareRateLimitError,
	WebshareServerError,
	WebshareUnauthorizedError,
} from "../../src/index.js";

describe("WebshareError", () => {
	it("sets status and body", () => {
		const err = new WebshareError("test", 418, { detail: "teapot" });
		expect(err.status).toBe(418);
		expect(err.body).toEqual({ detail: "teapot" });
		expect(err.message).toBe("test");
		expect(err.name).toBe("WebshareError");
	});
});

describe("WebshareBadRequestError", () => {
	it("has status 400", () => {
		const err = new WebshareBadRequestError({ field: "invalid" });
		expect(err.status).toBe(400);
		expect(err.name).toBe("WebshareBadRequestError");
		expect(err instanceof WebshareError).toBe(true);
	});
});

describe("WebshareUnauthorizedError", () => {
	it("has status 401", () => {
		const err = new WebshareUnauthorizedError({ detail: "bad token" });
		expect(err.status).toBe(401);
	});
});

describe("WebshareForbiddenError", () => {
	it("detects 2FA required", () => {
		const err = new WebshareForbiddenError({
			detail: "Two factor authentication is needed.",
			code: "2fa_needed",
		});
		expect(err.status).toBe(403);
		expect(err.is2FARequired).toBe(true);
		expect(err.code).toBe("2fa_needed");
	});

	it("normal forbidden is not 2FA", () => {
		const err = new WebshareForbiddenError({ detail: "forbidden" });
		expect(err.is2FARequired).toBe(false);
		expect(err.code).toBeUndefined();
	});
});

describe("WebshareNotFoundError", () => {
	it("has status 404", () => {
		const err = new WebshareNotFoundError({ detail: "not found" });
		expect(err.status).toBe(404);
	});
});

describe("WebshareRateLimitError", () => {
	it("has status 429 and retryAfterMs", () => {
		const err = new WebshareRateLimitError({}, 5000);
		expect(err.status).toBe(429);
		expect(err.retryAfterMs).toBe(5000);
	});
});

describe("WebshareServerError", () => {
	it("has the given status", () => {
		const err = new WebshareServerError(502, { detail: "gateway" });
		expect(err.status).toBe(502);
		expect(err.message).toBe("Server Error (502)");
	});
});
