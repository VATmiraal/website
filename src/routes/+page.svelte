<script lang="ts">
	import { resolve } from '$app/paths';
	import { Check } from '@lucide/svelte';
	import { MAINTENANCE_MODE } from '$lib/maintenance';
	import { tr } from '$lib/translation/i18n';

	let m = $derived(tr());
	let p = $derived(m.portal);
	let heroSubParts = $derived(p.heroSubParts as { t: string; w: number }[]);
	let vmPoints = $derived(p.vm.points as string[]);
	let hdPoints = $derived(p.hd.points as string[]);
</script>

<svelte:head>
	{#if MAINTENANCE_MODE}
		<title>VATmiraal — We'll be back soon</title>
		<meta
			name="description"
			content="VATmiraal is updating its website and will be back online soon."
		/>
	{:else}
		<title>VATmiraal — {p.heroTitle}</title>
		<meta name="description" content={p.vm.body} />
	{/if}
</svelte:head>

{#if MAINTENANCE_MODE}
	<section id="maintenance">
		<h1 id="maintenance-heading">Something new is on the way.</h1>
		<p id="maintenance-note">
			Back online soon.
			<a href="https://www.linkedin.com/company/vatmiraal" target="_blank" rel="noopener noreferrer"
				>Reach out anytime.</a
			>
		</p>
	</section>
{:else}
	<!-- Hero -->
	<section class="hero">
		<h1>{p.heroTitle}</h1>
		<p class="hero-sub">
			{#each heroSubParts as part, i (i)}<span style="font-weight:{part.w}" class:em={part.w > 400}
					>{part.t}</span
				>{/each}
		</p>
	</section>

	<!-- Products -->
	<section class="products">
		<span class="kicker">{p.productsKicker}</span>
		<div class="product-grid">
			<!-- VATmiraal · the engine -->
			<a class="product light" href={resolve('/engine')}>
				<img class="product-logo" src="/logo.svg" alt="VATmiraal" />
				<span class="audience">{p.vm.audience}</span>
				<h2>{p.vm.title}</h2>
				<p class="product-body">{p.vm.body}</p>
				<div class="points">
					{#each vmPoints as point (point)}
						<div class="point">
							<Check class="check" size={18} color="var(--color-accent)" strokeWidth={2} /><span
								>{point}</span
							>
						</div>
					{/each}
				</div>
				<span class="product-cta">{p.vm.cta}</span>
			</a>

			<!-- Heimdall · the agent -->
			<a class="product dark" href={resolve('/heimdall')}>
				<span class="wordmark">Heimdall</span>
				<span class="audience">{p.hd.audience}</span>
				<h2>{p.hd.title}</h2>
				<p class="product-body">{p.hd.body}</p>
				<div class="points">
					{#each hdPoints as point (point)}
						<div class="point">
							<Check
								class="check"
								size={18}
								color="var(--color-accent-on-dark)"
								strokeWidth={2}
							/><span>{point}</span>
						</div>
					{/each}
				</div>
				<span class="product-cta">{p.hd.cta}</span>
			</a>
		</div>
	</section>

	<!-- About -->
	<section class="about">
		<span class="kicker">{p.aboutKicker}</span>
		<h2>{p.aboutTitle}</h2>
		<p class="about-body">{p.aboutBody}</p>
		<a class="about-cta" href="mailto:info@vatmiraal.be">{p.aboutCta}</a>
	</section>
{/if}

<style>
	.kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	/* Hero */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: clamp(3.5rem, 10vh, 7rem) var(--section-padding-x) clamp(2.5rem, 6vh, 4rem);
	}

	.hero h1 {
		font-size: var(--h1-hero);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1.05;
		margin: 0;
		max-width: 860px;
	}

	.hero-sub {
		max-width: 620px;
		font-size: var(--font-size-md);
		margin: var(--space-6) 0 0;
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.hero-sub .em {
		color: var(--color-text);
	}

	/* Products */
	.products {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-8);
		padding: 0 var(--section-padding-x) var(--section-padding-y);
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
		gap: var(--space-6);
		width: 100%;
		max-width: 1080px;
	}

	.product {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding: clamp(1.75rem, 4vw, 2.75rem);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		text-decoration: none;
		transition:
			transform var(--duration-base) var(--easing),
			border-color var(--duration-base) var(--easing);
	}

	.product:hover {
		transform: translateY(-3px);
	}

	.product.light {
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
		color: var(--color-text);
	}

	.product.light:hover {
		border-color: var(--color-border-strong);
	}

	.product.dark {
		border: 1px solid var(--color-bg-inverted);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
	}

	.product-logo {
		height: 2.2em;
		width: auto;
		align-self: flex-start;
	}

	.wordmark {
		display: flex;
		align-items: center;
		height: 2.2em;
		font-size: 1.55rem;
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.02em;
		color: var(--color-text-on-dark);
	}

	.audience {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.product.dark .audience {
		color: var(--color-text-on-dark-faint);
	}

	.product h2 {
		margin: 0;
		font-size: clamp(1.5rem, 2.6vw, 2rem);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
	}

	.product-body {
		margin: 0;
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
		color: var(--color-text-muted);
	}

	.product.dark .product-body {
		color: var(--color-text-on-dark-muted);
	}

	.points {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding-top: var(--space-5);
		border-top: 1px solid var(--color-border);
	}

	.product.dark .points {
		border-top-color: var(--color-border-on-dark);
	}

	.point {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: var(--font-size-sm);
		line-height: 1.5;
	}

	.point :global(.check) {
		flex: none;
		margin-top: 1px;
	}

	.product-cta {
		margin-top: auto;
		padding-top: var(--space-3);
		font-weight: var(--font-weight-semibold);
		color: var(--color-accent);
	}

	.product.dark .product-cta {
		color: var(--color-accent-on-dark);
	}

	/* About */
	.about {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-5);
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	.about h2 {
		margin: 0;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
		max-width: 760px;
	}

	.about-body {
		margin: 0;
		max-width: 660px;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.about-cta {
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-md);
		color: var(--color-accent);
		text-decoration: none;
	}

	.about-cta:hover {
		color: var(--color-accent-hover);
	}

	/* Maintenance */
	#maintenance {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - var(--header-total-height));
		padding-bottom: 14vh;
	}

	#maintenance-heading {
		font-size: var(--h1-hero);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1.05;
		text-align: center;
		margin: 0;
		max-width: 820px;
	}

	#maintenance-note {
		max-width: min(620px, 70vw);
		text-align: center;
		font-size: var(--font-size-md);
		margin: var(--space-6) 0 0;
		color: var(--color-text-muted);
	}

	#maintenance-note a {
		color: var(--color-text);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
