<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import { tr, localePath } from '$lib/translation/i18n';
	import { isLocale } from '$lib/translation/messages';
	import '$lib/doc/doc.css';
	import { priceWithCommitment, priceWithoutCommitment } from '@vatmiraal/vatmiraal-sdk';
	import { isError } from 'result-interface';
	import { euro2, euro3, formatInt, type Lang } from '$lib/pricing';

	let { data } = $props();
	let m = $derived(tr().examples);
	let calcTitle = $derived(tr().calc.title);
	let lang = $derived((isLocale(page.data.lang) ? page.data.lang : 'en') as Lang);

	const SAMPLE = 288_000;
	const INPUTS: Record<string, { committed: number; actual: number }> = {
		at: { committed: SAMPLE, actual: SAMPLE },
		without: { committed: 0, actual: SAMPLE },
		below: { committed: SAMPLE, actual: 200_000 },
		above: { committed: SAMPLE, actual: 350_000 }
	};

	interface IStep {
		label: string;
		value: string;
	}
	interface IWorked {
		committed: number;
		actual: number;
		steps: IStep[];
		total: number;
		per: number | undefined;
		note?: string;
	}

	// Build one example's steps and result from the config, entirely via the SDK calc.
	function build(kind: string): IWorked | null {
		const config = data.config;
		const { committed, actual } = INPUTS[kind];
		const nf = (v: number) => formatInt(v, lang);
		const e0 = (v: number) => euro2(v, lang);
		const e3 = (v: number) => euro3(v, lang);
		const steps: IStep[] = [];

		if (kind === 'without') {
			const r = priceWithoutCommitment(config, { actual, premium_share: 0 });
			if (isError(r)) return null;
			for (const row of r.value.rows) {
				const range = row.to === null ? `≥ ${nf(row.from)}` : `${nf(row.from)} – ${nf(row.to - 1)}`;
				steps.push({
					label: range,
					value: `${nf(row.invoices)} × ${e3(row.price)} = ${e0(row.cost)}`
				});
			}
			return { committed, actual, steps, total: r.value.total, per: r.value.per_invoice };
		}

		if (kind === 'below') {
			const graduated = priceWithoutCommitment(config, { actual, premium_share: 0 });
			const committedRes = priceWithCommitment(config, { committed, actual, premium_share: 0 });
			if (isError(graduated) || isError(committedRes)) return null;
			const base = graduated.value.total;
			const penalised = base * (1 + config.below_commitment_penalty_rate);
			const committedAmount = committedRes.value.full_commitment_cost;
			const floor = config.below_commitment_minimum_price_ratio * committedAmount;
			steps.push({ label: m.stepBase, value: e0(base) });
			steps.push({ label: m.stepPenalty, value: e0(penalised) });
			steps.push({ label: m.stepFloor, value: e0(floor) });
			steps.push({ label: m.stepCap, value: e0(committedAmount) });
			return {
				committed,
				actual,
				steps,
				total: committedRes.value.total,
				per: committedRes.value.per_invoice,
				note: m.stepResult
			};
		}

		const r = priceWithCommitment(config, { committed, actual, premium_share: 0 });
		if (isError(r)) return null;
		steps.push({ label: m.stepFlat, value: `${nf(actual)} × ${e3(r.value.standard_price)}` });
		return { committed, actual, steps, total: r.value.total, per: r.value.per_invoice };
	}

	let cards = $derived(
		m.examples.map((ex) => {
			const setup = ex.setup
				.replace('{committed}', formatInt(INPUTS[ex.kind].committed, lang))
				.replace('{actual}', formatInt(INPUTS[ex.kind].actual, lang));
			return {
				ex,
				setup,
				worked: build(ex.kind),
				clauseHref: localePath('/heimdall/pricing') + '#' + lang + '-' + ex.section + '-' + ex.n
			};
		})
	);
</script>

<Seo title={`${m.title} — VATmiraal`} description={m.intro} />

<main class="vm-doc">
	<div class="wrap" style="padding-bottom:48px">
		<div class="title">
			<div class="rule"></div>
			<a class="back" href={localePath('/heimdall/pricing')}>{m.back}</a>
			<h1>{m.title}</h1>
			<p class="intro">{m.intro}</p>
		</div>

		<div class="examples">
			{#each cards as { ex, setup, worked, clauseHref } (ex.n + ex.kind)}
				<article class="card ex">
					<div class="head">
						<a
							class="clause"
							href={clauseHref}
							target="_blank"
							rel="noopener noreferrer"
							title={m.newTab}
						>
							{m.clause}
							{ex.n} ↗
						</a>
						<h2>{ex.title}</h2>
						<p class="setup">{setup}</p>
					</div>
					{#if worked}
						<dl class="steps">
							{#each worked.steps as step, i (i)}
								<div>
									<dt>{step.label}</dt>
									<dd>{step.value}</dd>
								</div>
							{/each}
						</dl>
						<div class="totals">
							<div class="result">
								<span>{m.totalLabel}{worked.note ? ` (${worked.note})` : ''}</span>
								<strong>{euro2(worked.total, lang)}</strong>
							</div>
							{#if worked.per !== undefined}
								<div class="per">
									<span>{m.perLabel}</span><span>{euro3(worked.per, lang)}</span>
								</div>
							{/if}
						</div>
					{/if}
				</article>
			{/each}

			<a class="calc-link" href={localePath('/heimdall/pricing/calculator')}>
				<span>{calcTitle}</span><span aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</main>

<style>
	.examples {
		display: grid;
		gap: var(--space-6);
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		margin-top: var(--space-10);
	}
	.ex {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		padding: var(--space-8);
	}
	.head {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.clause {
		align-self: start;
		padding: var(--space-1) var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-pill);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-muted);
		text-decoration: none;
	}
	.clause:hover {
		color: var(--color-text);
		border-color: var(--color-text-muted);
	}
	.ex h2 {
		margin: 0;
		font-size: var(--font-size-lg);
		line-height: var(--line-height-snug);
		letter-spacing: var(--letter-spacing-tight);
	}
	.setup {
		margin: 0;
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}
	.steps {
		margin: 0;
		display: flex;
		flex-direction: column;
	}
	.steps div {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--space-5);
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-border);
		font-size: var(--font-size-sm);
	}
	.steps dt {
		color: var(--color-text-muted);
	}
	.steps dd {
		margin: 0;
		text-align: right;
		white-space: nowrap;
		font-variant-numeric: tabular-nums;
	}
	.totals {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding-top: var(--space-4);
		border-top: 2px solid var(--color-text);
	}
	.result,
	.per {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--space-5);
		font-variant-numeric: tabular-nums;
	}
	.result {
		font-weight: var(--font-weight-semibold);
	}
	.result strong {
		font-size: var(--font-size-lg);
	}
	.per {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}
</style>
