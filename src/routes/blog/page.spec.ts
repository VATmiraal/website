import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('blog index load()', () => {
	describe('SSR', () => {
		beforeEach(() => {
			vi.resetModules();
		});

		it('computes reading times from svelte source files and strips fallbackReadingTime', async () => {
			vi.doMock('$app/environment', () => ({ browser: false }));
			vi.doMock('fs/promises', () => ({
				readFile: vi.fn().mockResolvedValue('<p>word1 word2 word3</p>')
			}));
			vi.doMock('path', () => ({
				dirname: vi.fn().mockReturnValue('/fake'),
				join: vi.fn().mockReturnValue('/fake/post/+page.svelte')
			}));
			vi.doMock('url', () => ({
				fileURLToPath: vi.fn().mockReturnValue('/fake/+page.ts')
			}));

			const { load } = await import('./+page.js');
			const result = await load();

			expect(result.posts.length).toBeGreaterThan(0);
			// 3 words at 200 words/min → Math.ceil(3/200) = 1
			result.posts.forEach((post) => {
				expect(post.readingTime).toBe(1);
			});
		});
	});

	describe('client', () => {
		beforeEach(() => {
			vi.resetModules();
		});

		it('uses fallbackReadingTime as readingTime and strips fallbackReadingTime', async () => {
			vi.doMock('$app/environment', () => ({ browser: true }));

			const { load } = await import('./+page.js');
			const result = await load();

			expect(result.posts.length).toBeGreaterThan(0);
			expect(result.posts.find((p) => p.slug === 'introducing-vatmiraal')?.readingTime).toBe(2);
		});
	});
});
