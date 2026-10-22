<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';

	import { MAINTENANCE_MODE } from '$lib/maintenance';
	import { tr } from '$lib/translation/i18n';
	import LanguageButton from '$lib/components/LanguageButton.svelte';

	import linkedLogo from '$lib/assets/InBug-Black.png';

	let m = $derived(tr());

	// The nav mirrors the design per page group.
	let path = $derived(page.url.pathname);
	// Heimdall is a dark surface — the header follows suit on its routes.
	let isDark = $derived(path.startsWith('/heimdall'));
	let isEngine = $derived(path.startsWith('/engine'));

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
	{#if isDark}
		<a href={resolve('/')} {onclick}>{m.nav.products}</a>
		<a href={resolve('/team')} {onclick}>{m.nav.team}</a>
	{:else if isEngine}
		<a href={resolve('/engine')} {onclick}>{m.nav.home}</a>
		<a href={resolve('/')} {onclick}>{m.nav.products}</a>
		<a href={resolve('/engine/dev')} {onclick}>{m.nav.docs}</a>
		<a href={resolve('/team')} {onclick}>{m.nav.team}</a>
	{/if}
{/snippet}

{#snippet langSwitch(tone: 'light' | 'dark')}
	<div class="lang-switch" role="group" aria-label="Language">
		<LanguageButton lang="EN" {tone} />
		<LanguageButton lang="NL" {tone} />
		<LanguageButton lang="FR" {tone} />
	</div>
{/snippet}

{#snippet socialIcons(onclick: (() => void) | undefined)}
	<a
		href="https://www.linkedin.com/company/vatmiraal"
		target="_blank"
		rel="noopener noreferrer"
		{onclick}><img src={linkedLogo} alt="VATmiraal on LinkedIn" /></a
	>
{/snippet}

<div id="header" class:maintenance={MAINTENANCE_MODE} class:dark={isDark}>
	<a id="vatmiraal" href={resolve('/')} onclick={closeMenu}>
		<picture>
			<source srcset="/logo_icon.svg" media="(max-width: 768px)" />
			<img src="/logo.svg" alt="VATmiraal" />
		</picture>
	</a>
	{#if !MAINTENANCE_MODE}
		<nav id="nav-links" aria-label="Primary">
			{@render navLinks(undefined)}
		</nav>
	{/if}
	<div id="header-actions">
		{#if !MAINTENANCE_MODE}
			{#if !isEngine && !isDark}
				<a class="action-link" href={resolve('/team')}>{m.nav.team}</a>
			{/if}
			{@render langSwitch(isDark ? 'dark' : 'light')}
			{#if !isDark}
				<div id="social-media">
					{@render socialIcons(undefined)}
				</div>
			{/if}
			{#if !isEngine && !isDark}
				<a class="contact-cta" href="mailto:info@vatmiraal.be">{m.nav.contact}</a>
			{/if}
		{/if}
	</div>
	{#if !MAINTENANCE_MODE}
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
	{/if}
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
		class:dark={isDark}
	>
		<nav id="mobile-nav" aria-label="Primary">
			{@render navLinks(closeMenu)}
			{#if !isEngine && !isDark}
				<a href={resolve('/team')} onclick={closeMenu}>{m.nav.team}</a>
			{/if}
		</nav>
		{#if !isEngine && !isDark}
			<a class="contact-cta" href="mailto:info@vatmiraal.be" onclick={closeMenu}>{m.nav.contact}</a>
		{/if}
		{@render langSwitch(isDark ? 'dark' : 'light')}
		{#if !isDark}
			<div id="mobile-social">
				{@render socialIcons(closeMenu)}
			</div>
		{/if}
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
		height: 2.5em;
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
		font-weight: var(--font-weight-semibold);
		font-size: 1em;
		transition: opacity var(--duration-base) var(--easing);
	}

	#nav-links a:hover {
		opacity: 0.55;
	}

	#header-actions {
		justify-self: end;
		display: flex;
		align-items: center;
		gap: var(--space-5);
	}

	.action-link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: var(--font-weight-semibold);
		font-size: 1em;
		transition: opacity var(--duration-base) var(--easing);
	}

	.action-link:hover {
		opacity: 0.55;
	}

	.lang-switch {
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-pill);
		overflow: hidden;
	}

	.contact-cta {
		display: inline-flex;
		align-items: center;
		height: var(--control-height-md);
		padding: 0 var(--space-5);
		border-radius: var(--radius-md);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-sm);
		text-decoration: none;
		white-space: nowrap;
		transition: opacity var(--duration-base) var(--easing);
	}

	.contact-cta:hover {
		opacity: 0.85;
	}

	/* ─── Dark surface (Heimdall routes) ─── */
	#header.dark {
		background: rgba(15, 15, 15, 0.92);
		border-bottom: 1px solid var(--color-border-on-dark);
	}

	#header.dark #vatmiraal img {
		filter: brightness(0) invert(1);
	}

	#header.dark #nav-links a {
		color: var(--color-text-on-dark);
	}

	#header.dark .lang-switch {
		border-color: var(--color-border-on-dark);
	}

	#header.dark #social-media img {
		filter: brightness(0) invert(1);
	}

	#header.dark .contact-cta {
		background: var(--color-bg);
		color: var(--color-text);
	}

	#header.dark #hamburger span {
		background: var(--color-text-on-dark);
	}

	#mobile-menu.dark {
		background: var(--color-bg-inverted);
	}

	#mobile-menu.dark #mobile-nav a {
		color: var(--color-text-on-dark);
	}

	#mobile-menu.dark .lang-switch {
		border-color: var(--color-border-on-dark);
	}

	#mobile-menu.dark #mobile-social img {
		filter: brightness(0) invert(1);
	}

	#mobile-menu.dark .contact-cta {
		background: var(--color-bg);
		color: var(--color-text);
	}

	#social-media {
		display: flex;
		column-gap: 1.5em;
	}

	/* In maintenance the nav is gone, so pin the actions to the right column. */
	#header.maintenance #header-actions {
		grid-column: 3;
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
		#header-actions {
			display: none;
		}

		#header.maintenance #header-actions {
			display: flex;
			grid-column: auto;
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
			height: 2.2em;
		}
	}
</style>
