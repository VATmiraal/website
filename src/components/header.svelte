<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount, tick } from 'svelte';

	import emailIcon from '$lib/assets/email-logo.svg';
	import linkedLogo from '$lib/assets/InBug-Black.png';

	let menuOpen = $state(false);
	let hamburgerEl: HTMLButtonElement | undefined = $state();
	let menuEl: HTMLDivElement | undefined = $state();

	async function openMenu() {
		menuOpen = true;
		document.body.style.setProperty('overflow', 'hidden');
		await tick();
		const firstLink = menuEl?.querySelector<HTMLElement>('a');
		firstLink?.focus();
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.removeProperty('overflow');
		hamburgerEl?.focus();
	}

	onMount(() => {
		return () => {
			document.body.style.removeProperty('overflow');
		};
	});

	function toggleMenu() {
		if (menuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	function onMenuKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeMenu();
			return;
		}
		if (event.key !== 'Tab' || !menuEl) return;
		const focusables = menuEl.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
		if (focusables.length === 0) return;
		const first = focusables[0];
		const last = focusables[focusables.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}
</script>

{#snippet navLinks(onclick: (() => void) | undefined)}
	<a href={resolve('/custom_solutions')} {onclick}>Custom Solutions</a>
	<a href={resolve('/products')} {onclick}>Products</a>
	<a href={resolve('/demo')} {onclick}>Demo</a>
	<a href={resolve('/roadmap')} {onclick}>Roadmap</a>
	<a href={resolve('/blog')} {onclick}>Blog</a>
{/snippet}

{#snippet socialIcons(onclick: (() => void) | undefined)}
	<a href="mailto:info@vatmiraal.be" {onclick}><img src={emailIcon} alt="Email VATmiraal" /></a>
	<a
		href="https://www.linkedin.com/company/vatmiraal"
		target="_blank"
		rel="noopener noreferrer"
		{onclick}><img src={linkedLogo} alt="VATmiraal on LinkedIn" /></a
	>
{/snippet}

<div id="header">
	<a id="vatmiraal" href={resolve('/')} onclick={closeMenu}>
		<picture>
			<source srcset="/logo_icon.svg" media="(max-width: 768px)" />
			<img src="/logo.svg" alt="VATmiraal" />
		</picture>
	</a>
	<nav id="nav-links" aria-label="Primary">
		{@render navLinks(undefined)}
	</nav>
	<div id="social-media">
		{@render socialIcons(undefined)}
	</div>
	<button
		id="hamburger"
		bind:this={hamburgerEl}
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
		aria-controls="mobile-menu"
		onclick={toggleMenu}
		class:open={menuOpen}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
</div>

{#if menuOpen}
	<div
		id="mobile-menu"
		bind:this={menuEl}
		role="dialog"
		aria-modal="true"
		aria-label="Primary navigation"
		tabindex="-1"
		onkeydown={onMenuKeydown}
	>
		<nav id="mobile-nav" aria-label="Primary">
			{@render navLinks(closeMenu)}
		</nav>
		<div id="mobile-social">
			{@render socialIcons(closeMenu)}
		</div>
	</div>
{/if}

<style>
	#header {
		position: sticky;
		top: 0;
		z-index: var(--z-header);
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		width: 100%;
		height: var(--header-height);
		margin-top: 0;
		padding: 0 2.5%;
		box-sizing: border-box;
		background: rgba(248, 248, 246, 0.92);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	#vatmiraal {
		justify-self: start;
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: opacity var(--duration-base) var(--easing);
	}

	#vatmiraal:hover {
		opacity: 0.65;
	}

	#vatmiraal img {
		height: 5em;
		width: auto;
	}

	#nav-links {
		justify-self: center;
		display: flex;
		align-items: center;
		gap: 2.5em;
	}

	#nav-links a {
		color: var(--color-text);
		text-decoration: none;
		font-weight: var(--font-weight-medium);
		font-size: 1.2em;
		transition: opacity var(--duration-base) var(--easing);
	}

	#nav-links a:hover {
		opacity: 0.55;
	}

	#social-media {
		justify-self: end;
		display: flex;
		column-gap: 3em;
	}

	#social-media img {
		display: block;
		width: 2em;
		height: auto;
		object-fit: contain;
		transition:
			opacity var(--duration-base) var(--easing),
			transform var(--duration-base) var(--easing);
	}

	#social-media a:hover img {
		opacity: 0.65;
		transform: translateY(-2px);
	}

	#hamburger {
		display: none;
		justify-self: end;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		width: 2rem;
		height: 2rem;
	}

	#hamburger span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--color-text);
		border-radius: 2px;
		transition:
			transform var(--duration-base) var(--easing),
			opacity var(--duration-base) var(--easing);
		transform-origin: center;
	}

	#hamburger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	#hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	#hamburger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	#mobile-menu {
		display: none;
		position: fixed;
		top: var(--header-total-height);
		left: 0;
		right: 0;
		bottom: 0;
		z-index: var(--z-mobile-menu);
		background: var(--color-bg);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-12);
	}

	#mobile-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-8);
	}

	#mobile-nav a {
		color: var(--color-text);
		text-decoration: none;
		font-size: 1.6em;
		font-weight: var(--font-weight-semibold);
		letter-spacing: -0.02em;
		transition: opacity var(--duration-base) var(--easing);
	}

	#mobile-nav a:hover {
		opacity: 0.5;
	}

	#mobile-social {
		display: flex;
		gap: var(--space-10);
		align-items: center;
	}

	#mobile-social img {
		display: block;
		width: 2rem;
		height: auto;
		object-fit: contain;
		opacity: 0.7;
		transition: opacity var(--duration-base) var(--easing);
	}

	#mobile-social a:hover img {
		opacity: 1;
	}

	@media (max-width: 1024px) {
		#header {
			grid-template-columns: 1fr auto;
			padding-right: var(--space-4);
		}

		#nav-links,
		#social-media {
			display: none;
		}

		#hamburger {
			display: flex;
		}

		#mobile-menu {
			display: flex;
		}
	}

	@media (max-width: 768px) {
		#vatmiraal img {
			height: 3.2em;
		}
	}
</style>
