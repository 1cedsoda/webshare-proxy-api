import { z } from "zod";

export const ErrorReasonSchema = z.object({
	reason: z.string(),
	type: z.string(),
	how_to_fix: z.string(),
	http_status: z.number(),
	count: z.number(),
});

export type ErrorReason = z.infer<typeof ErrorReasonSchema>;

export const ProxyStatSchema = z.object({
	date: z.string(),
	bandwidth_total: z.number(),
	requests_total: z.number(),
	requests_successful: z.number(),
	requests_failed: z.number(),
});

export type ProxyStat = z.infer<typeof ProxyStatSchema>;

export const AggregateStatSchema = z.object({
	bandwidth_projected: z.number(),
	bandwidth_total: z.number(),
	bandwidth_average: z.number(),
	requests_total: z.number(),
	requests_successful: z.number(),
	requests_failed: z.number(),
	error_reasons: z.array(ErrorReasonSchema),
	countries_used: z.record(z.string(), z.number()),
	number_of_proxies_used: z.number(),
	protocols_used: z.record(z.string(), z.number()),
	average_concurrency: z.number(),
	average_rps: z.number(),
	last_request_sent_at: z.string().nullable(),
});

export type AggregateStat = z.infer<typeof AggregateStatSchema>;
