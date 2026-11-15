import { describe, it, expect, beforeEach, vi } from 'vitest';
import { result, error as asError } from 'result-interface';

const { fetchPricing } = vi.hoisted(() => ({ fetchPricing: vi.fn() }));
vi.mock('@vatmiraal/vatmiraal-sdk', () => ({ VatmiraalClient: class {}, fetchPricing }));

import { load } from '../../src/routes/heimdall/pricing/(config)/+layout';

const config = {
	version: '2026-11-12',
	currency: 'EUR',
	premium_multiplier: 2,
	below_commitment_penalty_rate: 0.1,
	below_commitment_minimum_price_ratio: 0.8,
	tiers: [{ from: 0, to: null, standard: 0.15 }]
};

describe('pricing layout load', () => {
	beforeEach(() => fetchPricing.mockReset());

	it('returns the config on success', async () => {
		fetchPricing.mockResolvedValue(result(config));
		const data = await load({} as never);
		expect(data).toEqual({ config });
	});

	it('throws a 503 when the pricing fetch fails', async () => {
		fetchPricing.mockResolvedValue(asError(new Error('down')));
		await expect(load({} as never)).rejects.toMatchObject({ status: 503 });
	});
});
