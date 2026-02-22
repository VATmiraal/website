<script lang="ts">
	import { resolve } from '$app/paths';

	import emailIcon from '$lib/assets/email-logo.svg';
	import linkedLogo from '$lib/assets/InBug-Black.png';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}
</script>

{#snippet navLinks(onclick: (() => void) | undefined)}
	<a href={resolve('/custom_solutions')} {onclick}>Custom Solutions</a>
	<a href={resolve('/join_beta')} {onclick}>Join the Beta</a>
	<a href={resolve('/blog')} {onclick}>Blog</a>
{/snippet}

{#snippet socialIcons(onclick: (() => void) | undefined)}
	<a href="mailto:info@vatmiraal.be" {onclick}><img src={emailIcon} alt="email logo" /></a>
	<a
		href="https://www.linkedin.com/company/vatmiraal"
		target="_blank"
		rel="noopener noreferrer"
		{onclick}><img src={linkedLogo} alt="LinkedIn logo" /></a
	>
{/snippet}

<div id="header">
	<h1 id="vatmiraal"><a href={resolve('/')} onclick={closeMenu}>VATmiraal</a></h1>
	<nav id="nav-links">
		{@render navLinks(undefined)}
	</nav>
	<div id="social-media">
		{@render socialIcons(undefined)}
	</div>
	<button
		id="hamburger"
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
		onclick={() => (menuOpen = !menuOpen)}
		class:open={menuOpen}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
</div>

{#if menuOpen}
	<div id="mobile-menu">
		<nav id="mobile-nav">
			{@render navLinks(closeMenu)}
		</nav>
		<div id="mobile-social">
			{@render socialIcons(closeMenu)}
		</div>
	</div>
{/if}

<style>
	:global(:root) {
		--header-margin: 2.5%;
		--header-height: 3.5rem;
		--header-margin-top: 0;
		--header-total-height: 3.5rem;
	}

	#header {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: var(--header-height);
		margin-top: 0;
		padding: 0 2.5%;
		box-sizing: border-box;
		background: rgba(248, 248, 246, 0.92);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	#nav-links {
		display: flex;
		align-items: center;
		gap: 2.5em;
	}

	#nav-links a {
		color: #0f0f0f;
		text-decoration: none;
		font-weight: 500;
		font-size: 1.2em;
		transition: opacity 0.2s ease;
	}

	#nav-links a:hover {
		opacity: 0.55;
	}

	#social-media {
		display: flex;
		column-gap: 3em;
	}

	#vatmiraal {
		font-size: 2em;
		font-weight: bolder;
		text-align: center;
		margin: 0;
	}

	#vatmiraal a {
		color: black;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	#vatmiraal a:hover {
		opacity: 0.65;
	}

	#social-media img {
		display: block;
		width: 2em;
		height: auto;
		object-fit: contain;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	#social-media a:hover img {
		opacity: 0.65;
		transform: translateY(-2px);
	}

	/* Hamburger — hidden on desktop */
	#hamburger {
		display: none;
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
		background: #0f0f0f;
		border-radius: 2px;
		transition:
			transform 0.22s ease,
			opacity 0.22s ease;
		transform-origin: center;
	}

	/* Animate to X when open */
	#hamburger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	#hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	#hamburger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Mobile menu panel */
	#mobile-menu {
		display: none;
		position: fixed;
		top: var(--header-total-height);
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		background: #f8f8f6;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;
	}

	#mobile-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	#mobile-nav a {
		color: #0f0f0f;
		text-decoration: none;
		font-size: 1.6em;
		font-weight: 600;
		letter-spacing: -0.02em;
		transition: opacity 0.2s ease;
	}

	#mobile-nav a:hover {
		opacity: 0.5;
	}

	#mobile-social {
		display: flex;
		gap: 2.5rem;
		align-items: center;
	}

	#mobile-social img {
		display: block;
		width: 2rem;
		height: auto;
		object-fit: contain;
		opacity: 0.7;
		transition: opacity 0.2s ease;
	}

	#mobile-social a:hover img {
		opacity: 1;
	}

	@media (max-width: 768px) {
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

		#vatmiraal {
			font-size: 1.6em;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#nav-links a {
			font-size: 1em;
		}

		#nav-links {
			gap: 1.5em;
		}

		#social-media {
			column-gap: 2em;
		}

		#social-media img {
			width: 1.75em;
		}
	}
</style>
