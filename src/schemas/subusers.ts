import { z } from "zod";
import { ErrorReasonSchema } from "./proxy-stats.js";

export const SubUserAggregateStatsSchema = z.object({
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

export const SubUserSchema = z.object({
	id: z.number(),
	label: z.string(),
	proxy_countries: z.record(z.string(), z.number()),
	proxy_limit: z.number(),
	max_thread_count: z.number(),
	aggregate_stats: SubUserAggregateStatsSchema,
	created_at: z.string(),
	updated_at: z.string(),
	bandwidth_use_start_date: z.string(),
	bandwidth_use_end_date: z.string(),
});

export type SubUser = z.infer<typeof SubUserSchema>;

export const CreateSubUserInput = z.object({
	label: z.string(),
	proxy_countries: z.record(z.string(), z.number()).optional(),
	proxy_limit: z.number().optional(),
	max_thread_count: z.number().optional(),
});

export type CreateSubUserInput = z.infer<typeof CreateSubUserInput>;

export const UpdateSubUserInput = z.object({
	label: z.string().optional(),
	proxy_countries: z.record(z.string(), z.number()).optional(),
	proxy_limit: z.number().optional(),
	max_thread_count: z.number().optional(),
});

export type UpdateSubUserInput = z.infer<typeof UpdateSubUserInput>;
