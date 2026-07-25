<script lang="ts">
	import { resolve } from '$app/paths';
	import { MAINTENANCE_MODE } from '$lib/maintenance';
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import {
		ShoppingCart,
		Landmark,
		Building2,
		SquarePlus,
		GraduationCap,
		Factory,
		Bus,
		FileWarning,
		Undo2,
		LockOpen,
		ChartPie,
		Eye,
		ShieldCheck,
		Database,
		SquareTerminal,
		Radio,
		type Icon as IconType
	} from '@lucide/svelte';

	interface IPair {
		h: string;
		p: string;
	}

	let m = $derived(tr());
	let sectors = $derived(m.home.sectors as IPair[]);
	let outcomes = $derived(m.home.outcomes as IPair[]);
	let llmCols = $derived(m.home.llmCols as IPair[]);
	let interopCards = $derived(m.home.interopCards as IPair[]);
	let interopSystems = $derived(m.home.interopSystems as string[]);
	let interopChannels = $derived(m.home.interopChannels as string[]);
	let interopProtocols = $derived(m.home.interopProtocols as string[]);

	const sectorIcons: (typeof IconType)[] = [
		ShoppingCart,
		Landmark,
		Building2,
		SquarePlus,
		GraduationCap,
		Factory,
		Bus
	];
	const outcomeIcons: (typeof IconType)[] = [
		FileWarning,
		Undo2,
		LockOpen,
		ChartPie,
		Eye,
		ShieldCheck
	];
	const interopIcons: (typeof IconType)[] = [Database, SquareTerminal, Radio];

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'VATmiraal',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		url: 'https://vatmiraal.be',
		description:
			'Explainable AI for confident VAT decisions, built for accountants and tax professionals.',
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/PreOrder',
			price: '0',
			priceCurrency: 'EUR'
		},
		provider: { '@id': 'https://vatmiraal.be/#organization' }
	};
</script>

{#snippet iconCard(Icon: typeof IconType, h: string, p: string, large: boolean)}
	<article class="card">
		<span class="icon" class:lg={large}>
			<Icon size={large ? 24 : 22} strokeWidth={large ? 1.75 : 2} />
		</span>
		<h3>{h}</h3>
		<p>{p}</p>
	</article>
{/snippet}

<svelte:head>
	{#if MAINTENANCE_MODE}
		<title>VATmiraal — We'll be back soon</title>
		<meta
			name="description"
			content="VATmiraal is updating its website and will be back online soon."
		/>
	{:else}
		<title>VATmiraal — {m.home.heroTitle}</title>
		<meta name="description" content={m.home.heroSub} />
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
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
		<div class="divider"></div>
		<span class="kicker">{m.home.heroKicker}</span>
		<h1>{m.home.heroTitle}</h1>
		<p class="hero-sub">{m.home.heroSub}</p>
		<p class="tagline">{m.common.tagline}</p>
		<div class="hero-cta">
			<Button href={resolve('/request_a_demo')} variant="primary" size="lg"
				>{m.home.heroCtaPrimary}</Button
			>
			<Button href={resolve('/products/api')} variant="ghost" size="lg"
				>{m.home.heroCtaGhost}</Button
			>
		</div>

		<!-- Cited determination proof -->
		<div class="proof">
			<div class="proof-head">
				<span class="proof-tx">{m.home.proofTx}</span>
				<span class="proof-badge"><span class="dot"></span>{m.home.proofBadge}</span>
			</div>
			<div class="proof-body">
				<div class="proof-amount">
					<span class="proof-box">{m.home.proofBox}</span>
					<span class="proof-value">{m.home.proofAmount}</span>
				</div>
				<p class="proof-label">{m.home.proofJustLabel}</p>
				<p class="proof-text">{m.home.proofJust}</p>
				<p class="proof-label">{m.home.proofRefLabel}</p>
				<span class="proof-ref">{m.home.proofRef}</span>
				<div class="proof-status">
					<span><span class="warn-mark">⚠</span>{m.home.proofWarnings}</span>
					<span><span class="ok-mark">✓</span>{m.home.proofIncons}</span>
				</div>
				<div class="proof-callout">
					<span class="warn-mark">⚠</span>
					<p>{m.home.proofWarnMsg}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Sectors -->
	<section class="section subtle">
		<header class="section-header">
			<span class="kicker">{m.home.sectorsKicker}</span>
			<h2>{m.home.sectorsTitle}</h2>
			<p class="section-sub">{m.home.sectorsSub}</p>
		</header>
		<div class="cards wrap">
			{#each sectors as s, i (s.h)}
				{@render iconCard(sectorIcons[i], s.h, s.p, true)}
			{/each}
		</div>
	</section>

	<!-- Outcomes -->
	<section class="section">
		<header class="section-header">
			<span class="kicker">{m.home.outcomesKicker}</span>
			<h2>{m.home.outcomesTitle}</h2>
			<p class="section-sub">{m.home.outcomesSub}</p>
		</header>
		<div class="cards auto">
			{#each outcomes as o, i (o.h)}
				{@render iconCard(outcomeIcons[i], o.h, o.p, false)}
			{/each}
		</div>
		<a
			class="text-cta"
			href="mailto:info@vatmiraal.be?subject=Reverse-audit%20of%20my%20AP%20ledger"
			>{m.home.outcomesCta}</a
		>
	</section>

	<!-- Trust / LLM + Prolog -->
	<section class="section">
		<header class="section-header">
			<h2>{m.home.llmTitle}</h2>
		</header>
		<div class="cards auto">
			{#each llmCols as c (c.h)}
				<article class="card">
					<h3>{c.h}</h3>
					<p>{c.p}</p>
				</article>
			{/each}
		</div>
		<div class="prolog">
			<span class="kicker">{m.home.prologKicker}</span>
			<div class="prolog-row">
				<span class="prolog-item">ISO/IEC 13211, the Prolog standard</span>
				<span class="prolog-item bordered">
					<img src="/scryer-logo.png" alt="" />
					Scryer Prolog, an ISO-compliant implementation
				</span>
			</div>
		</div>
	</section>

	<!-- Interop -->
	<section class="section">
		<header class="section-header">
			<span class="kicker">{m.home.interopKicker}</span>
			<h2>{m.home.interopTitle}</h2>
			<p class="section-sub">{m.home.interopSub}</p>
		</header>
		<div class="cards auto">
			{#each interopCards as c, i (c.h)}
				{@render iconCard(interopIcons[i], c.h, c.p, false)}
			{/each}
		</div>
		<div class="chip-groups">
			<div class="chip-group">
				<span class="kicker">{m.home.interopSystemsLabel}</span>
				<div class="chips">
					{#each interopSystems as sys (sys)}<span class="chip">{sys}</span>{/each}
				</div>
			</div>
			<div class="chip-group">
				<span class="kicker">{m.home.interopChannelsLabel}</span>
				<div class="chips">
					{#each interopChannels as ch (ch)}<span class="chip">{ch}</span>{/each}
				</div>
			</div>
			<div class="chip-group">
				<span class="kicker">{m.home.interopProtocolsLabel}</span>
				<div class="chips">
					{#each interopProtocols as pr (pr)}<span class="chip accent">{pr}</span>{/each}
				</div>
			</div>
		</div>
		<p class="interop-note">{m.home.interopNote}</p>
	</section>

	<!-- Dark CTA -->
	<section class="cta-dark">
		<header class="section-header">
			<h2>{m.home.ctaTitle}</h2>
			<p class="section-sub on-dark">{m.home.ctaSub}</p>
		</header>
		<div class="hero-cta">
			<Button href={resolve('/request_a_demo')} tone="dark" variant="primary"
				>{m.home.ctaBtn}</Button
			>
			<Button href={resolve('/products/api')} tone="dark" variant="ghost">{m.home.ctaGhost}</Button>
		</div>
	</section>
{/if}

<style>
	/* Hero */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 8vh 6%;
		min-height: calc(84vh - var(--header-height));
	}

	.divider {
		width: 48px;
		height: 2px;
		background: var(--color-accent);
		margin: 0 auto var(--space-7, 28px);
	}

	.kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.hero .kicker {
		margin-bottom: var(--space-6);
	}

	h1 {
		font-size: var(--h1-hero);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1.05;
		margin: 0;
		max-width: 900px;
	}

	.hero-sub {
		max-width: min(640px, 74vw);
		font-size: var(--font-size-md);
		margin: var(--space-6) 0 0;
		letter-spacing: var(--letter-spacing-snug);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.tagline {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin: var(--space-8) 0 0;
	}

	.hero-cta {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
		justify-content: center;
		margin-top: var(--space-8);
	}

	/* Proof card */
	.proof {
		width: 100%;
		max-width: 540px;
		margin-top: var(--space-12);
		text-align: left;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
	}

	.proof-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-4) var(--space-5);
		border-bottom: 1px solid var(--color-border);
	}

	.proof-tx {
		font-family: var(--font-family-mono);
		font-size: 0.78rem;
		color: var(--color-text-muted);
	}

	.proof-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 0.68rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-proof);
		background: var(--color-proof-tint);
		padding: 3px 10px;
		border-radius: var(--radius-pill);
	}

	.proof-badge .dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--color-proof);
	}

	.proof-body {
		padding: var(--space-5);
	}

	.proof-amount {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-4);
		margin-bottom: var(--space-3);
	}

	.proof-box {
		font-size: 1.15rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
	}

	.proof-value {
		font-family: var(--font-family-mono);
		font-size: 1.15rem;
		font-weight: var(--font-weight-bold);
	}

	.proof-label {
		margin: 0 0 var(--space-2);
		font-size: 0.68rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.proof-text {
		margin: 0 0 var(--space-4);
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-snug);
	}

	.proof-ref {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-family-mono);
		font-size: 0.78rem;
		font-weight: var(--font-weight-semibold);
		color: var(--color-accent);
		background: var(--color-accent-tint);
		padding: 5px 12px;
		border-radius: var(--radius-sm);
	}

	.proof-status {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-5);
		padding-top: var(--space-4);
		border-top: 1px solid var(--color-border);
	}

	.proof-status span {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		font-size: 0.78rem;
		color: var(--color-text-muted);
	}

	.warn-mark {
		color: var(--color-attention);
		font-weight: var(--font-weight-bold);
	}

	.ok-mark {
		color: var(--color-proof);
		font-weight: var(--font-weight-bold);
	}

	.proof-callout {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		margin-top: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-sm);
		background: var(--color-attention-tint);
		border: 1px solid var(--color-attention);
	}

	.proof-callout p {
		margin: 0;
		font-size: 0.78rem;
		line-height: 1.4;
		color: var(--color-text-muted);
	}

	/* Sections */
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3.5rem;
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	.section.subtle {
		background: var(--color-bg-subtle);
	}

	.section-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: var(--container-narrow);
		margin-inline: auto;
		align-items: center;
		text-align: center;
	}

	.section-header h2 {
		margin: 0;
		font-weight: var(--font-weight-heavy);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
		font-size: var(--h2-section);
	}

	.section-sub {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 44rem;
	}

	/* Card grids */
	.cards {
		width: 100%;
		max-width: var(--container-wide);
	}

	.cards.wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-6);
		max-width: 960px;
	}

	.cards.auto {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: var(--space-6);
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-8);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-md);
		transition: transform var(--duration-fast) var(--easing);
	}

	.cards.wrap .card {
		flex: 0 0 calc(25% - var(--space-6));
		gap: var(--space-4);
	}

	.card:hover {
		transform: translateY(-3px);
	}

	.icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
		border-radius: var(--radius-sm);
		background: var(--color-accent-tint);
		color: var(--color-accent);
	}

	.icon.lg {
		width: 44px;
		height: 44px;
		border-radius: var(--radius-md);
	}

	.card h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0;
	}

	.card p {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0;
	}

	.text-cta {
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-semibold);
		color: var(--color-accent);
		text-decoration: none;
	}

	.text-cta:hover {
		color: var(--color-accent-hover);
	}

	/* Prolog strip */
	.prolog {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		width: 100%;
		max-width: var(--container-wide);
	}

	.prolog-row {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.prolog-item {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-1) var(--space-6);
		opacity: 0.85;
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: var(--color-text);
	}

	.prolog-item.bordered {
		border-left: 1px solid var(--color-border);
	}

	.prolog-item img {
		height: 26px;
		width: auto;
	}

	/* Interop chips */
	.chip-groups {
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
		width: 100%;
		max-width: var(--container-wide);
	}

	.chip-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		align-items: center;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		justify-content: center;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		padding: var(--space-2) var(--space-5);
		border: 1px dashed var(--color-border-strong);
		border-radius: var(--radius-pill);
		background: transparent;
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-faint);
	}

	.chip.accent {
		border: 1px solid var(--color-accent);
		background: var(--color-accent-tint);
		color: var(--color-accent);
	}

	.interop-note {
		margin: 0;
		font-size: var(--font-size-base);
		color: var(--color-text-faint);
		text-align: center;
	}

	/* Dark CTA */
	.cta-dark {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 48vh;
		gap: var(--space-8);
		padding: var(--space-20) var(--section-padding-x);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
	}

	.cta-dark h2 {
		margin: 0;
		font-weight: var(--font-weight-heavy);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
		font-size: var(--h2-section);
		color: var(--color-text-on-dark);
	}

	.section-sub.on-dark {
		color: var(--color-text-on-dark-muted);
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

	@media (max-width: 1024px) {
		.cards.wrap .card {
			flex-basis: calc(50% - var(--space-6));
		}
	}

	@media (max-width: 768px) {
		.section,
		.cta-dark {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-10);
		}

		.hero {
			padding: 6vh var(--section-padding-x-mobile);
		}

		.prolog-row {
			flex-direction: column;
			gap: var(--space-5);
		}

		.prolog-item {
			flex-direction: column;
			justify-content: center;
			text-align: center;
			gap: var(--space-2);
		}

		.prolog-item.bordered {
			border-left: none;
		}

		.prolog-item img {
			height: 40px;
		}
	}

	@media (max-width: 560px) {
		.cards.wrap .card {
			flex-basis: 100%;
		}
	}
</style>
