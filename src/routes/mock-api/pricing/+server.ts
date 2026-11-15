import { dev } from '$app/environment';
import { json, error } from '@sveltejs/kit';
import type { PricingConfig } from '@vatmiraal/vatmiraal-sdk';
import type { RequestHandler } from './$types';

/** Dev-only stand-in for the backend GET /pricing, so the site runs without the service. */
const config: PricingConfig = {
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

export const GET: RequestHandler = () => {
	if (!dev) error(404);
	return json(config);
};
