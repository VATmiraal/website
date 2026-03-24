import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('from-taxman-to-vatmiraal load()', () => {
	describe('SSR', () => {
		beforeEach(() => {
			vi.resetModules();
		});

		it('computes reading time from the svelte source file', async () => {
			vi.doMock('$app/environment', () => ({ browser: false }));
			vi.doMock('$lib/reading_time', () => ({
				readingTimeFromPage: vi.fn().mockResolvedValue(5)
			}));

			const { load } = await import('./+page.js');
			const result = await load();

			expect(result.readingTime).toBe(5);
		});
	});

	describe('client', () => {
		beforeEach(() => {
			vi.resetModules();
		});

		it('returns hardcoded fallback reading time', async () => {
			vi.doMock('$app/environment', () => ({ browser: true }));

			const { load } = await import('./+page.js');
			const result = await load();

			expect(result.readingTime).toBe(6);
		});
	});
});
