<script lang="ts">
	import { resolve } from '$app/paths';
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import {
		Scale,
		ShieldCheck,
		FileText,
		Plug,
		ShoppingCart,
		Landmark,
		Building2,
		SquarePlus,
		GraduationCap,
		Factory,
		Bus,
		Check,
		type Icon as IconType
	} from '@lucide/svelte';

	interface IFeatItem {
		n: string;
		d: string;
	}
	interface IFeatGroup {
		tag: string;
		items: IFeatItem[];
	}
	interface IPair {
		h: string;
		p: string;
	}

	let m = $derived(tr());
	let fg = $derived(m.api.fg as IFeatGroup[]);
	let sectors = $derived(m.home.sectors as IPair[]);

	let sec = $state(0);
	let active = $derived(sectors[sec]);

	// Determine, Verify, Report & recover, Connect.
	const fgIcons: (typeof IconType)[] = [Scale, ShieldCheck, FileText, Plug];
	// Sectors, in the same order as the home sector list.
	const sectorIcons: (typeof IconType)[] = [
		ShoppingCart,
		Landmark,
		Building2,
		SquarePlus,
		GraduationCap,
		Factory,
		Bus
	];
	const sectorPhotos = [
		'/sectors/ecommerce.jpg',
		'/sectors/banks.jpg',
		'/sectors/government.jpg',
		'/sectors/hospitals.jpg',
		'/sectors/schools.jpg',
		'/sectors/manufacturing.jpg',
		'/sectors/transport.jpg'
	];

	const Determine = fgIcons[0];
	const BadgeIcon = $derived(sectorIcons[sec]);
</script>

<svelte:head>
	<title>{m.api.heroTitle} — VATmiraal</title>
	<meta name="description" content={m.api.heroSub} />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<h1>{m.api.heroTitle}</h1>
	<p class="hero-sub">{m.api.heroSub}</p>
	<div class="hero-cta">
		<Button href={resolve('/engine/buy')} variant="primary" size="lg">{m.api.heroBuy}</Button>
	</div>
</section>

<!-- The one-stop shop for VAT -->
<section class="feat">
	<header class="feat-head">
		<span class="kicker">{m.api.featKicker}</span>
		<h2>{m.api.featTitle}</h2>
		<p class="feat-sub">{m.api.featSub}</p>
	</header>

	<div class="feat-stack">
		<!-- Determine (dark, full width) -->
		<div class="fg dark">
			<div class="fg-head">
				<span class="fg-ico dark"
					><Determine size={24} color="var(--color-accent-on-dark)" strokeWidth={1.75} /></span
				>
				<h3>{fg[0].tag}</h3>
			</div>
			<div class="fg-items wide">
				{#each fg[0].items as item (item.n)}
					<div class="fg-item">
						<Check class="chk" size={18} color="var(--color-accent-on-dark)" strokeWidth={2.2} />
						<div class="fg-text">
							<span class="fg-n">{item.n}</span>
							<span class="fg-d">{item.d}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Verify · Report & recover · Connect (light) -->
		<div class="feat-row">
			{#each [fg[1], fg[2], fg[3]] as group, i (group.tag)}
				{@const FgIcon = fgIcons[i + 1]}
				<div class="fg light">
					<div class="fg-head">
						<span class="fg-ico"
							><FgIcon size={24} color="var(--color-accent)" strokeWidth={1.75} /></span
						>
						<h3 class="accent">{group.tag}</h3>
					</div>
					<div class="fg-items">
						{#each group.items as item (item.n)}
							<div class="fg-item">
								<Check class="chk" size={18} color="var(--color-accent)" strokeWidth={2.2} />
								<div class="fg-text">
									<span class="fg-n">{item.n}</span>
									<span class="fg-d">{item.d}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Sector selector -->
<section class="sectors">
	<header class="sec-head">
		<div class="sec-head-left">
			<div class="sec-eyebrow">
				<span class="sec-tick"></span>
				<span class="sec-kicker">{m.home.sectorsKicker}</span>
			</div>
			<h2>{m.home.sectorsTitle}</h2>
		</div>
		<p class="sec-sub">{m.home.sectorsSub}</p>
	</header>

	<div class="sec-pick">
		<div class="sec-list">
			{#each sectors as s, i (s.h)}
				{@const SecIcon = sectorIcons[i]}
				<button
					type="button"
					class="sec-btn"
					class:active={sec === i}
					aria-pressed={sec === i}
					onclick={() => (sec = i)}
				>
					<span class="sec-btn-ico"><SecIcon size={20} strokeWidth={1.75} /></span>
					<span>{s.h}</span>
				</button>
			{/each}
		</div>

		<div class="sec-panel">
			<div class="sec-photo" style="background-image:url('{sectorPhotos[sec]}')"></div>
			<div class="sec-scrim"></div>
			<span class="sec-badge"
				><BadgeIcon size={30} color="var(--color-accent-on-dark)" strokeWidth={1.75} /></span
			>
			<div class="sec-copy">
				<h3>{active.h}</h3>
				<p>{active.p}</p>
				<a class="sec-cta" href="mailto:info@vatmiraal.be?subject=VATmiraal%20for%20my%20sector"
					>{m.home.sectorCta}</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.kicker,
	.sec-kicker {
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
		justify-content: center;
		text-align: center;
		padding: 9vh 6% 7vh;
		border-bottom: 1px solid var(--color-border);
	}

	.hero h1 {
		font-size: var(--h1-hero);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1.05;
		margin: 0;
		max-width: 900px;
	}

	.hero-sub {
		max-width: min(660px, 74vw);
		font-size: var(--font-size-md);
		margin: var(--space-6) 0 0;
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.hero-cta {
		display: flex;
		gap: var(--space-4);
		justify-content: center;
		flex-wrap: wrap;
		margin-top: var(--space-8);
	}

	/* Shared section shell */
	.feat,
	.sectors {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3.5rem;
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	.sectors {
		background: var(--color-bg-subtle);
	}

	.feat-head {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: var(--container-narrow);
		margin-inline: auto;
		align-items: center;
		text-align: center;
	}

	.feat-head h2 {
		margin: 0;
		font-weight: var(--font-weight-heavy);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
		font-size: var(--h2-section);
	}

	.feat-sub {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 42rem;
	}

	/* Feature groups */
	.feat-stack {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		width: 100%;
		max-width: var(--container-wide);
	}

	.feat-row {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-6);
	}

	.fg {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		padding: clamp(1.75rem, 3.5vw, 2.5rem);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
	}

	.fg.light {
		border: 1px solid var(--color-border);
		background: var(--color-bg-elevated);
	}

	.fg.dark {
		border: 1px solid var(--color-bg-inverted);
		background: var(--color-bg-inverted);
	}

	.fg-head {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.fg-ico {
		flex: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: var(--radius-md);
		background: var(--color-accent-tint);
	}

	.fg-ico.dark {
		background: rgba(248, 248, 246, 0.08);
	}

	.fg-head h3 {
		margin: 0;
		font-size: 1.05rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.01em;
		text-transform: uppercase;
		line-height: 1.3;
		color: var(--color-text-on-dark);
	}

	.fg-head h3.accent {
		color: var(--color-accent);
	}

	.fg-items.wide {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
		column-gap: var(--space-10);
	}

	.fg-items {
		display: flex;
		flex-direction: column;
	}

	.fg-item {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-border);
	}

	.fg.dark .fg-item {
		border-top-color: var(--color-border-on-dark);
	}

	.fg-item :global(.chk) {
		flex: none;
		margin-top: 3px;
	}

	.fg-text {
		display: flex;
		flex-direction: column;
		gap: 1px;
		min-width: 0;
	}

	.fg-n {
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
	}

	.fg.dark .fg-n {
		color: var(--color-text-on-dark);
	}

	.fg-d {
		font-size: var(--font-size-sm);
		line-height: 1.5;
		color: var(--color-text-muted);
	}

	.fg.dark .fg-d {
		color: var(--color-text-on-dark-muted);
	}

	/* Sector selector */
	.sec-head {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
		gap: var(--space-12);
		align-items: end;
		width: 100%;
		max-width: var(--container-wide);
		padding-bottom: var(--space-8);
		border-bottom: 1px solid var(--color-border-strong);
	}

	.sec-head-left {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.sec-eyebrow {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.sec-tick {
		width: 28px;
		height: 2px;
		background: var(--color-accent);
	}

	.sec-head .sec-kicker {
		color: var(--color-accent);
	}

	.sec-head h2 {
		margin: 0;
		max-width: 15ch;
		font-size: clamp(2.2rem, 4.6vw, 3.5rem);
		font-weight: var(--font-weight-heavy);
		line-height: 1.03;
		letter-spacing: -0.04em;
	}

	.sec-sub {
		margin: 0;
		justify-self: end;
		max-width: 26rem;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.sec-pick {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: var(--space-8);
		width: 100%;
		max-width: var(--container-wide);
		align-items: stretch;
	}

	.sec-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.sec-btn {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		width: 100%;
		text-align: left;
		padding: 0.8rem 1rem;
		border: 1px solid transparent;
		border-radius: var(--radius-md);
		background: transparent;
		cursor: pointer;
		font-family: var(--font-family);
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-muted);
		transition:
			background var(--duration-fast) var(--easing),
			color var(--duration-fast) var(--easing);
	}

	.sec-btn:hover {
		color: var(--color-text);
		background: var(--color-bg-elevated);
	}

	.sec-btn.active {
		background: var(--color-bg-elevated);
		border-color: var(--color-border);
		color: var(--color-text);
		box-shadow: var(--shadow-sm);
	}

	.sec-btn-ico {
		flex: none;
		display: inline-flex;
		color: var(--color-text-faint);
	}

	.sec-btn.active .sec-btn-ico {
		color: var(--color-accent);
	}

	.sec-panel {
		position: relative;
		isolation: isolate;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-10);
		min-height: 420px;
		padding: clamp(1.75rem, 4vw, 3rem);
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: var(--color-bg-inverted);
		box-shadow: var(--shadow-lg);
	}

	.sec-photo {
		position: absolute;
		inset: 0;
		z-index: -2;
		background-size: cover;
		background-position: center;
	}

	.sec-scrim {
		position: absolute;
		inset: 0;
		z-index: -1;
		background: linear-gradient(to top, rgba(15, 15, 15, 0.45) 0%, rgba(15, 15, 15, 0) 45%);
		pointer-events: none;
	}

	.sec-badge {
		pointer-events: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 64px;
		border-radius: var(--radius-pill);
		background: rgba(15, 15, 15, 0.45);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
	}

	.sec-copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		text-shadow:
			0 1px 2px rgba(0, 0, 0, 0.55),
			0 2px 18px rgba(0, 0, 0, 0.45);
	}

	.sec-copy h3 {
		margin: 0;
		font-size: clamp(1.8rem, 3.2vw, 2.6rem);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.035em;
		line-height: 1.08;
		color: var(--color-text-on-dark);
	}

	.sec-copy p {
		margin: 0;
		max-width: 34rem;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-on-dark);
	}

	.sec-cta {
		align-self: flex-start;
		margin-top: var(--space-2);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-on-dark);
		text-decoration: none;
	}

	.sec-cta:hover {
		color: var(--color-accent-on-dark);
	}

	@media (max-width: 900px) {
		.feat-row {
			grid-template-columns: 1fr;
		}

		.sec-head {
			grid-template-columns: 1fr;
			gap: var(--space-5);
			align-items: start;
		}

		.sec-sub {
			justify-self: start;
		}

		.sec-pick {
			grid-template-columns: 1fr;
		}
	}
</style>
