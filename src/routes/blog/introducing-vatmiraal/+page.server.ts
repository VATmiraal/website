import { readingTimeFromPage } from '$lib/reading_time';

export async function load() {
	return { readingTime: await readingTimeFromPage(import.meta.url) };
}
