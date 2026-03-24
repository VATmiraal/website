import { readingTime } from '$lib/reading_time';
import type { IBlogPost } from '$lib/types';
import introducingVatmiraalContent from './introducing-vatmiraal/+page.svelte?raw';
import fromTaxmanContent from './from-taxman-to-vatmiraal/+page.svelte?raw';

type IArticleDefinition = Omit<IBlogPost, 'readingTime'> & { content: string };

const articles: IArticleDefinition[] = [
	{
		slug: 'introducing-vatmiraal',
		title: 'Introducing VATmiraal',
		date: 'March 2026',
		excerpt:
			'Three tools built on the same rules engine: the Assistant, the Analyser, and Advanced Booking Templates. Formal logic and constraint solving for VAT compliance.',
		content: introducingVatmiraalContent
	},
	{
		slug: 'from-taxman-to-vatmiraal',
		title: 'From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law',
		date: 'March 2026',
		excerpt:
			'A history of computational legal reasoning, from symbolic AI and expert systems to LLMs and neuro-symbolic architectures, and how VATmiraal fits in.',
		content: fromTaxmanContent
	}
];

export async function load() {
	return {
		posts: articles.map(({ content, ...a }) => ({
			...a,
			readingTime: readingTime(content)
		}))
	};
}
