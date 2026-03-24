import { browser } from '$app/environment';
import { readingTimeFromPage } from '$lib/reading_time';

export async function load() {
	if (!browser) {
		return { readingTime: await readingTimeFromPage(import.meta.url) };
	}

	return { readingTime: 6 };
}
