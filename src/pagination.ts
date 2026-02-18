import type { PaginatedResponse } from "./schemas/common.js";

/**
 * Returns an async iterable that auto-fetches all pages from a paginated endpoint.
 *
 * @param fetcher - A function that takes a page number and returns a paginated response.
 */
export function paginate<T>(
	fetcher: (page: number) => Promise<PaginatedResponse<T>>,
): AsyncIterable<T> {
	return {
		[Symbol.asyncIterator]() {
			let page = 1;
			let buffer: T[] = [];
			let done = false;

			return {
				async next(): Promise<IteratorResult<T>> {
					while (buffer.length === 0) {
						if (done) return { done: true, value: undefined };
						const response = await fetcher(page);
						buffer = response.results;
						if (!response.next) {
							done = true;
						} else {
							page++;
						}
						if (buffer.length === 0) {
							return { done: true, value: undefined };
						}
					}
					return { done: false, value: buffer.shift() as T };
				},
			};
		},
	};
}
