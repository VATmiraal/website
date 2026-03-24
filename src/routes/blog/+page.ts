import { browser } from '$app/environment';
import { readingTime } from '$lib/reading_time';
import type { IBlogPost } from '$lib/types';

type IArticleDefinition = Omit<IBlogPost, 'readingTime'> & { fallbackReadingTime: number };

const articles: IArticleDefinition[] = [
	{
		slug: 'introducing-vatmiraal',
		title: 'Introducing VATmiraal',
		date: 'March 2026',
		excerpt:
			'Three tools built on the same rules engine: the Assistant, the Analyser, and Advanced Booking Templates. Formal logic and constraint solving for VAT compliance.',
		fallbackReadingTime: 2
	}
	,{
		slug: 'from-taxman-to-vatmiraal',
		title: 'From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law',
		date: 'March 2026',
		excerpt:
			'A history of computational legal reasoning, from symbolic AI and expert systems to LLMs and neuro-symbolic architectures, and how VATmiraal fits in.',
		fallbackReadingTime: 6
	}
];

export async function load() {
	if (!browser) {
		const { readFile } = await import('fs/promises');
		const { dirname, join } = await import('path');
		const { fileURLToPath } = await import('url');
		const dir = dirname(fileURLToPath(import.meta.url));

		const posts = await Promise.all(
			articles.map(async ({ ...article }) => {
				const src = await readFile(join(dir, article.slug, '+page.svelte'), 'utf-8');
				return { ...article, readingTime: readingTime(src) };
			})
		);
		return { posts };
	}

	return {
		posts: articles.map(({ fallbackReadingTime, ...a }) => ({
			...a,
			readingTime: fallbackReadingTime
		}))
	};
}
