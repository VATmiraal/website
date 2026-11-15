import { describe, it, expect, vi } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';

vi.mock('$app/state', () => ({
	page: {
		data: { lang: 'en' },
		url: new URL('http://localhost/en/heimdall/calculator')
	}
}));

import Page from './+page.svelte';

const config = {
	version: '2026-11-12',
	currency: 'EUR',
	premium_multiplier: 2,
	below_commitment_penalty_rate: 0.1,
	below_commitment_minimum_price_ratio: 0.8,
	tiers: [
		{ from: 0, to: 25000, standard: 0.15 },
		{ from: 25000, to: 100000, standard: 0.12 },
		{ from: 100000, to: 500000, standard: 0.1 },
		{ from: 500000, to: 1000000, standard: 0.08 },
		{ from: 1000000, to: 3000000, standard: 0.065 },
		{ from: 3000000, to: null, standard: 0.05 }
	]
};

describe('calculator table reactivity', () => {
	it('recomputes the annual amount when the premium share changes', async () => {
		render(Page, { props: { data: { config, lang: 'en' } } });

		// Default: committed 288,000 / actual 288,000 / 0% premium -> 288,000 x EUR0.100.
		await expect.element(page.getByText('€28,800.00')).toBeVisible();

		// 100% premium doubles every invoice -> the total recomputes live.
		await page.getByLabelText('Share of premium invoices (%)').fill('100');
		await expect.element(page.getByText('€57,600.00')).toBeVisible();
	});
});
