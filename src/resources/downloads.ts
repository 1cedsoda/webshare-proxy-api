import type { HttpClient } from "../http.js";
import type { DownloadToken, DownloadTokenScope } from "../schemas/downloads.js";
import { DownloadTokenSchema } from "../schemas/downloads.js";

export class DownloadsResource {
	constructor(private readonly http: HttpClient) {}

	/** Get a download token for a given scope. */
	async getToken(scope: DownloadTokenScope): Promise<DownloadToken> {
		const data = await this.http.request({
			method: "GET",
			path: `/api/v2/download_token/${scope}/`,
		});
		return DownloadTokenSchema.parse(data);
	}

	/** Reset a download token for a given scope. */
	async resetToken(scope: DownloadTokenScope): Promise<DownloadToken> {
		const data = await this.http.request({
			method: "POST",
			path: `/api/v2/download_token/${scope}/reset/`,
		});
		return DownloadTokenSchema.parse(data);
	}
}
