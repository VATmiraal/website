import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readingTime } from '$lib/reading-time';
import type { IBlogPost } from '$lib/types';

const articles: Omit<IBlogPost, 'readingTime'>[] = [
	{
		slug: 'introducing-vatmiraal',
		title: 'Introducing VATmiraal',
		date: 'March 2026',
		excerpt:
			'Three tools built on the same rules engine: the Assistant, the Analyser, and Advanced Booking Templates. Formal logic and constraint solving for VAT compliance.'
	},
	{
		slug: 'from-taxman-to-vatmiraal',
		title: 'From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law',
		date: 'March 2026',
		excerpt:
			'A history of computational legal reasoning, from symbolic AI and expert systems to LLMs and neuro-symbolic architectures, and how VATmiraal fits in.'
	}
];

export async function load() {
	const dir = dirname(fileURLToPath(import.meta.url));

	const posts = await Promise.all(
		articles.map(async (article) => {
			const src = await readFile(join(dir, article.slug, '+page.svelte'), 'utf-8');
			return { ...article, readingTime: readingTime(src) };
		})
	);

	return { posts };
}
