import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('from-taxman-to-vatmiraal load()', () => {
	beforeEach(() => {
		vi.resetModules();
	});

	it('computes reading time from the svelte source file', async () => {
		vi.doMock('$lib/reading_time', () => ({
			readingTime: vi.fn().mockReturnValue(5)
		}));

		const { load } = await import('./+page.js');
		const result = await load();

		expect(result.readingTime).toBe(5);
	});
});
