<script lang="ts">
	import { siBluesky, siMastodon, siReddit, siYcombinator, siWhatsapp } from 'simple-icons';
	import type { SimpleIcon } from 'simple-icons';
	import { Linkedin, Mail } from '@lucide/svelte';
	import type { Component } from 'svelte';

	type Platform =
		| 'linkedin'
		| 'bluesky'
		| 'mastodon'
		| 'reddit'
		| 'hackernews'
		| 'whatsapp'
		| 'email';

	interface IShareButtonProps {
		platform: Platform;
		title: string;
		url: string;
	}

	type IconSource =
		| { kind: 'simple'; icon: SimpleIcon }
		| { kind: 'lucide'; Component: Component<{ size?: number }> };

	interface IPlatformConfig {
		label: string;
		external: boolean;
		icon: IconSource;
		buildHref: (title: string, url: string) => string;
	}

	let { platform, title, url }: IShareButtonProps = $props();

	const PLATFORMS: Record<Platform, IPlatformConfig> = {
		linkedin: {
			label: 'Share on LinkedIn',
			external: true,
			icon: { kind: 'lucide', Component: Linkedin },
			buildHref: (_t, u) =>
				`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}`
		},
		bluesky: {
			label: 'Share on Bluesky',
			external: true,
			icon: { kind: 'simple', icon: siBluesky },
			buildHref: (t, u) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${t} ${u}`)}`
		},
		mastodon: {
			label: 'Share on Mastodon',
			external: true,
			icon: { kind: 'simple', icon: siMastodon },
			buildHref: (t, u) =>
				`https://mastodonshare.com/?text=${encodeURIComponent(t)}&url=${encodeURIComponent(u)}`
		},
		reddit: {
			label: 'Share on Reddit',
			external: true,
			icon: { kind: 'simple', icon: siReddit },
			buildHref: (t, u) =>
				`https://reddit.com/submit?url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`
		},
		hackernews: {
			label: 'Share on Hacker News',
			external: true,
			icon: { kind: 'simple', icon: siYcombinator },
			buildHref: (t, u) =>
				`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(u)}&t=${encodeURIComponent(t)}`
		},
		whatsapp: {
			label: 'Share on WhatsApp',
			external: true,
			icon: { kind: 'simple', icon: siWhatsapp },
			buildHref: (t, u) => `https://wa.me/?text=${encodeURIComponent(`${t} ${u}`)}`
		},
		email: {
			label: 'Share by email',
			external: false,
			icon: { kind: 'lucide', Component: Mail },
			buildHref: (t, u) => `mailto:?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(u)}`
		}
	};

	const config = $derived(PLATFORMS[platform]);
	const href = $derived(config.buildHref(title, url));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	aria-label={config.label}
	target={config.external ? '_blank' : undefined}
	rel={config.external ? 'noopener noreferrer' : undefined}
>
	{#if config.icon.kind === 'simple'}
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
			<path d={config.icon.icon.path} />
		</svg>
	{:else}
		<config.icon.Component size={18} />
	{/if}
</a>

<style>
	a {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-md);
		color: var(--color-text-muted);
		overflow: hidden;
		transition:
			color var(--duration-base) var(--easing),
			border-color var(--duration-base) var(--easing);
	}

	a::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--color-accent);
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform var(--duration-base) var(--easing);
		z-index: 0;
	}

	a svg,
	a :global(svg) {
		position: relative;
		z-index: 1;
	}

	a:hover,
	a:focus-visible {
		color: var(--color-text-on-dark);
		border-color: var(--color-accent);
	}

	a:hover::before,
	a:focus-visible::before {
		transform: scaleY(1);
	}

	a:focus-visible {
		outline: 2px solid var(--color-focus-ring);
		outline-offset: 3px;
	}
</style>
