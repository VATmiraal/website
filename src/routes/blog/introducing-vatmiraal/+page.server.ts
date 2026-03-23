import { readingTimeFromPage } from '$lib/reading-time';

export async function load() {
	return { readingTime: await readingTimeFromPage(import.meta.url) };
}
