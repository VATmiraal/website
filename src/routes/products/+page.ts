import { redirect } from '@sveltejs/kit';

// Products overview is replaced by the product portal at the home page.
export const load = () => {
	redirect(308, '/');
};
