import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('introducing-vatmiraal load()', () => {
	beforeEach(() => {
		vi.resetModules();
	});

	it('computes reading time from the svelte source file', async () => {
		vi.doMock('$lib/reading_time', () => ({
			readingTime: vi.fn().mockReturnValue(3)
		}));

		const { load } = await import('./+page.js');
		const result = await load();

		expect(result.readingTime).toBe(3);
	});
});
