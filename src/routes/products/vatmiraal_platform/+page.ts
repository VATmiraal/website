import { redirect } from '@sveltejs/kit';

// The platform is now a "coming soon" — route to the waitlist.
export const load = () => {
	redirect(308, '/waitlist');
};
