import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { VatmiraalClient, fetchPricing } from '@vatmiraal/vatmiraal-sdk';
import { isError } from 'result-interface';
import { env } from '$env/dynamic/public';

/**
 * Load the pricing config once for the rates and calculator pages; a failure renders the
 * whole-page error state. Shared here so moving between the two pages does not refetch.
 */
export const load: LayoutLoad = async () => {
	// Unset (e.g. prod without the env) falls back to the SDK's default API.
	const client = new VatmiraalClient({
		baseUrl: env.PUBLIC_API_BASE_URL || undefined,
		credentials: 'omit'
	});
	const res = await fetchPricing(client);
	if (isError(res)) {
		error(503);
	}
	return { config: res.value };
};
