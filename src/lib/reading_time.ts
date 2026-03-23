import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/**
 * Extracts text from <p> tags in a Svelte source string and returns
 * the estimated reading time in minutes (200 words/min average).
 */
export function readingTime(svelteSrc: string): number {
	const text = [...svelteSrc.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
		.map((m) => m[1].replace(/<[^>]+>/g, ''))
		.join(' ');

	const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
	return Math.ceil(wordCount / 200);
}

/**
 * Reads a sibling +page.svelte file and returns its estimated reading time.
 * Pass `import.meta.url` from the calling +page.server.ts.
 */
export async function readingTimeFromPage(importMetaUrl: string): Promise<number> {
	const dir = dirname(fileURLToPath(importMetaUrl));
	const src = await readFile(join(dir, '+page.svelte'), 'utf-8');
	return readingTime(src);
}
