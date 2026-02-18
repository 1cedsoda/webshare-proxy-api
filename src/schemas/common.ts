import { z } from "zod";

/** Generic paginated response schema factory. */
export function paginatedSchema<T extends z.ZodType>(itemSchema: T) {
	return z.object({
		count: z.number(),
		next: z.string().nullable(),
		previous: z.string().nullable().optional(),
		results: z.array(itemSchema),
	});
}

/** Inferred paginated response type. */
export type PaginatedResponse<T> = {
	count: number;
	next: string | null;
	previous?: string | null;
	results: T[];
};

/** Common pagination query parameters. */
export interface PaginationParams {
	page?: number;
	page_size?: number;
}

/** Cursor-based pagination query parameters. */
export interface CursorPaginationParams {
	starting_after?: string;
	page_size?: number;
}
