import pageContent from './+page.svelte?raw';
import { readingTime } from '$lib/reading_time';

export async function load() {
	return { readingTime: readingTime(pageContent) };
}
