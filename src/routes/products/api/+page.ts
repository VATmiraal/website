import { redirect } from '@sveltejs/kit';

// The API page is now the developer page under the engine.
export const load = () => {
	redirect(308, '/engine/dev');
};
