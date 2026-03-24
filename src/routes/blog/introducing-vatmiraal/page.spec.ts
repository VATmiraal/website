import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('introducing-vatmiraal load()', () => {
	describe('SSR', () => {
		beforeEach(() => {
			vi.resetModules();
		});

		it('computes reading time from the svelte source file', async () => {
			vi.doMock('$app/environment', () => ({ browser: false }));
			vi.doMock('$lib/reading_time', () => ({
				readingTimeFromPage: vi.fn().mockResolvedValue(3)
			}));

			const { load } = await import('./+page.js');
			const result = await load();

			expect(result.readingTime).toBe(3);
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

			expect(result.readingTime).toBe(2);
		});
	});
});
