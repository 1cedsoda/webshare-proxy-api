import { z } from "zod";

export const DownloadTokenSchema = z.object({
	id: z.number(),
	key: z.string(),
	scope: z.enum(["proxy_list", "replaced_proxy", "activity"]),
	expire_at: z.string(),
});

export type DownloadToken = z.infer<typeof DownloadTokenSchema>;

export type DownloadTokenScope = "proxy_list" | "replaced_proxy" | "activity";
