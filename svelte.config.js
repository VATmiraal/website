import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Strict CSP. SvelteKit hashes its own inline hydration script, and the app's
		// inline style attributes were refactored to classes, so no 'unsafe-inline'.
		// The one remaining runtime inline style is SvelteKit's a11y route announcer;
		// 'unsafe-hashes' + its hash allows exactly that style and nothing else. If a
		// SvelteKit upgrade changes the announcer, update this hash (the browser console
		// prints the expected value); failure is non-fatal (announcer only).
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['self'],
				'script-src': ['self'],
				'style-src': [
					'self',
					'unsafe-hashes',
					'sha256-S8qMpvofolR8Mpjy4kQvEm7m1q8clzU4dfDH0AmvZjo='
				],
				'img-src': ['self', 'data:'],
				'font-src': ['self'],
				'connect-src': ['self', 'https://formspree.io'],
				'form-action': ['self', 'https://formspree.io'],
				'base-uri': ['self'],
				'object-src': ['none'],
				'frame-ancestors': ['none']
			}
		}
	}
};

export default config;
