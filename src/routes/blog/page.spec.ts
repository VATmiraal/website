import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('blog index load()', () => {
	beforeEach(() => {
		vi.resetModules();
	});

	it('computes reading times from svelte source files', async () => {
		vi.doMock('$lib/reading_time', () => ({
			readingTime: vi.fn().mockReturnValue(1)
		}));

		const { load } = await import('./+page.js');
		const result = await load();

		expect(result.posts.length).toBeGreaterThan(0);
		result.posts.forEach((post) => {
			expect(post.readingTime).toBe(1);
		});
	});
});
