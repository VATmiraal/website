<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
</script>

<div id="page">
	<h1 id="hero-heading">VAT complexity,<br />made clear.</h1>
	<p id="slogan">
		Explainable VAT decisions, ready for just-in-time audit — built for accountants and tax
		professionals.
	</p>
	<div id="cta-row">
		<Button href={resolve('/request_a_demo')} variant="primary" size="lg">Request a demo</Button>
		<Button href={resolve('/demo')} variant="ghost" size="lg">See an example →</Button>
	</div>
</div>

<style>
	#page {
		--intro-animation-duration: 2s;

		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding-bottom: 14vh;
		height: calc(100vh - var(--header-total-height));
	}

	#hero-heading {
		font-size: var(--h1-hero);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1.05;
		text-align: center;
		margin: 0;
		max-width: 820px;
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
	}

	#hero-heading::before {
		content: '';
		display: block;
		width: 48px;
		height: 2px;
		background: var(--color-accent);
		margin: 0 auto 28px;
	}

	#slogan {
		max-width: min(620px, 70vw);
		font-weight: var(--font-weight-regular);
		text-align: center;
		font-size: var(--font-size-md);
		padding: 0;
		margin: var(--space-6) 0 0;
		letter-spacing: var(--letter-spacing-snug);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
		animation-delay: calc(var(--intro-animation-duration) * 0.4);
	}

	#cta-row {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
		justify-content: center;
		margin-top: var(--space-10);
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
		animation-delay: calc(var(--intro-animation-duration) * 0.8);
	}

	@keyframes fade-up {
		0% {
			opacity: 0;
			transform: translateY(16px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		#page {
			padding-bottom: 0;
		}

		#hero-heading {
			font-size: clamp(1.8rem, 8vw, 2.8rem);
		}

		#slogan {
			max-width: 85vw;
			font-size: var(--font-size-base);
			margin-top: var(--space-4);
		}

		#cta-row {
			margin-top: var(--space-8);
			flex-direction: column;
		}
	}

	@media (min-width: 400px) and (max-width: 1024px) {
		#page {
			padding-bottom: 8vh;
		}

		#slogan {
			max-width: 70vw;
			margin-top: var(--space-4);
		}

		#cta-row {
			margin-top: var(--space-8);
		}
	}
</style>
