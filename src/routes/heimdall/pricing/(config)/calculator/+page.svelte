<script lang="ts">
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { tr, localePath } from '$lib/translation/i18n';
	import { isLocale } from '$lib/translation/messages';
	import '$lib/doc/doc.css';
	import RateTable from '$lib/components/RateTable.svelte';
	import {
		priceWithCommitment,
		priceWithoutCommitment,
		type PricingConfig
	} from '@vatmiraal/vatmiraal-sdk';
	import { isError } from 'result-interface';
	import {
		num,
		pct,
		euro2,
		euro3,
		formatInt,
		decimalSeparator,
		encodeToken,
		decodeToken,
		type Lang
	} from '$lib/pricing';

	let { data } = $props();

	let m = $derived(tr());
	let c = $derived(m.calc);
	let r = $derived(m.rates);
	let lang = $derived((isLocale(page.data.lang) ? page.data.lang : 'en') as Lang);

	const d = tr().calc.defaults;
	let mode = $state<'committed' | 'graduated'>('committed');
	let committedInput = $state(d.committed);
	let actualInput = $state(d.actual);
	let shareInput = $state(d.share);

	// Keep the volume inputs formatted in the active locale after a language switch.
	let prevLang: Lang | undefined;
	$effect(() => {
		const current = lang;
		if (prevLang !== undefined && prevLang !== current) {
			committedInput = formatInt(num(committedInput), current);
			actualInput = formatInt(num(actualInput), current);
		}
		prevLang = current;
	});

	interface ISummaryRow {
		label: string;
		value: string;
	}

	// The cheapest commitment for a use: the candidate commitment whose committed-mode
	// total is lowest, searched over the actual volume and each tier boundary above it.
	function cheapestCommitment(config: PricingConfig, actual: number, share: number) {
		const candidates = [actual, ...config.tiers.map((tier) => Math.max(actual, tier.from))];
		let best: { amount: number; volume: number } | null = null;
		for (const committed of candidates) {
			const res = priceWithCommitment(config, { committed, actual, premium_share: share });
			if (isError(res)) continue;
			if (!best || res.value.total < best.amount - 1e-9) {
				best = { amount: res.value.total, volume: committed };
			}
		}
		return best;
	}

	// A short, shareable summary: the annual amount, the per-invoice price, and the cost
	// on the other track for comparison. The full breakdown lives on the rates page.
	let summary = $derived.by((): ISummaryRow[] => {
		const s = c.s;
		const config = data.config;
		const share = pct(shareInput);
		const actual = num(actualInput);
		const e0 = (v: number) => euro2(v, lang);
		const e3 = (v: number) => euro3(v, lang);
		const nf = (v: number) => formatInt(v, lang);
		const rows: ISummaryRow[] = [];

		if (mode === 'committed') {
			const r = priceWithCommitment(config, {
				committed: num(committedInput),
				actual,
				premium_share: share
			});
			if (isError(r)) return rows;
			rows.push({
				label: r.value.below_commitment ? `${s.tot} (${s.below})` : s.tot,
				value: e0(r.value.total)
			});
			if (r.value.per_invoice !== undefined) {
				rows.push({ label: s.per, value: e3(r.value.per_invoice) });
			}
			const graduated = priceWithoutCommitment(config, { actual, premium_share: share });
			if (!isError(graduated)) rows.push({ label: s.altG, value: e0(graduated.value.total) });
			return rows;
		}

		const graduated = priceWithoutCommitment(config, { actual, premium_share: share });
		if (isError(graduated)) return rows;
		rows.push({ label: s.tot, value: e0(graduated.value.total) });
		if (graduated.value.per_invoice !== undefined) {
			rows.push({ label: s.per, value: e3(graduated.value.per_invoice) });
		}
		const best = cheapestCommitment(config, actual, share);
		if (best) {
			rows.push({ label: `${s.altC} (${s.altCv} ${nf(best.volume)})`, value: e0(best.amount) });
		}
		return rows;
	});

	interface IBdRow {
		cells: string[];
		cls?: string;
		span?: boolean;
	}

	// The full on-screen breakdown of the calculation.
	let breakdown = $derived.by((): { head: string[] | null; rows: IBdRow[] } => {
		const s = c.s;
		const config = data.config;
		const share = pct(shareInput);
		const actual = num(actualInput);
		const e0 = (v: number) => euro2(v, lang);
		const e3 = (v: number) => euro3(v, lang);
		const nf = (v: number) => formatInt(v, lang);
		const rows: IBdRow[] = [];

		if (mode === 'committed') {
			const committed = priceWithCommitment(config, {
				committed: num(committedInput),
				actual,
				premium_share: share
			});
			if (isError(committed)) return { head: null, rows };
			const res = committed.value;
			rows.push({
				cells: [
					`${s.pr} (${s.std} / ${s.prem})`,
					`${e3(res.standard_price)} / ${e3(res.premium_price)}`
				]
			});
			if (!res.below_commitment) {
				rows.push({ cells: [s.vol, nf(actual)] });
				if (res.invoices_outside_commitment > 0) {
					rows.push({ cells: [s.over, nf(res.invoices_outside_commitment)], cls: 'sub' });
				}
			} else {
				const ex = m.examples;
				const g = priceWithoutCommitment(config, { actual, premium_share: share });
				const base = isError(g) ? 0 : g.value.total;
				const committedAmount = res.full_commitment_cost;
				rows.push({ cells: [ex.stepBase, e0(base)], cls: 'sub' });
				rows.push({
					cells: [ex.stepPenalty, e0(base * (1 + config.below_commitment_penalty_rate))],
					cls: 'sub'
				});
				rows.push({
					cells: [ex.stepFloor, e0(config.below_commitment_minimum_price_ratio * committedAmount)],
					cls: 'sub'
				});
				rows.push({ cells: [ex.stepCap, e0(committedAmount)], cls: 'sub' });
			}
			rows.push({ cells: [s.tot, e0(res.total)], cls: 'tot' });
			if (share > 0) rows.push({ cells: [s.surch, e0(res.premium_surcharge)], cls: 'sub' });
			rows.push({ cells: [s.per, res.per_invoice !== undefined ? e3(res.per_invoice) : '–'] });
			const graduated = priceWithoutCommitment(config, { actual, premium_share: share });
			if (!isError(graduated)) {
				const cheaper = graduated.value.total < res.total;
				rows.push({
					cells: [s.altG, e0(graduated.value.total)],
					cls: cheaper ? 'alt cheaper' : 'alt'
				});
				if (cheaper) {
					rows.push({ cells: [s.save, e0(res.total - graduated.value.total)], cls: 'alt cheaper' });
				}
			}
			return { head: null, rows };
		}

		const graduated = priceWithoutCommitment(config, { actual, premium_share: share });
		if (isError(graduated)) return { head: null, rows };
		const res = graduated.value;
		for (const row of res.rows) {
			const label =
				row.to === null ? `${nf(row.from)} ${s.more}` : `${nf(row.from)} – ${nf(row.to - 1)}`;
			rows.push({ cells: [label, nf(row.invoices), e3(row.price), e0(row.cost)] });
		}
		if (share > 0)
			rows.push({ cells: [s.surch, e0(res.premium_surcharge)], cls: 'sub', span: true });
		rows.push({ cells: [s.tot, nf(res.volume), '', e0(res.total)], cls: 'tot' });
		rows.push({
			cells: [s.per, res.per_invoice !== undefined ? e3(res.per_invoice) : '–'],
			span: true
		});
		const best = cheapestCommitment(config, actual, share);
		if (best) {
			const cheaper = best.amount < res.total;
			rows.push({
				cells: [`${s.altC} (${s.altCv} ${nf(best.volume)})`, e0(best.amount)],
				cls: cheaper ? 'alt cheaper' : 'alt',
				span: true
			});
			if (cheaper) {
				rows.push({ cells: [s.save, e0(res.total - best.amount)], cls: 'alt cheaper', span: true });
			}
		}
		return { head: [s.tier, s.inv, s.price, s.amt], rows };
	});

	function copyText(): string {
		const s = c.s;
		const lines = [s.head, '', `${s.mode}: ${mode === 'committed' ? s.mC : s.mG}`];
		if (mode === 'committed') lines.push(`${s.iC}: ${formatInt(num(committedInput), lang)}`);
		lines.push(`${s.iV}: ${formatInt(num(actualInput), lang)}`, `${s.iS}: ${shareInput} %`, '');
		for (const row of summary) lines.push(`${row.label}: ${row.value}`);
		const ratesUrl = page.url.origin + localePath('/heimdall/pricing');
		lines.push('', `${c.fullTerms.replace(' →', '')}: ${ratesUrl}`, 'info@vatmiraal.be');
		return lines.join('\n');
	}

	let copyLabel = $derived(c.s.copy);
	let linkLabel = $derived(c.s.link);
	let copyFlash = $state('');
	let linkFlash = $state('');

	let fbVisible = $state(false);
	let fbText = $state('');
	let fbEl: HTMLTextAreaElement | undefined = $state();

	async function copy(text: string, onOk: () => void) {
		try {
			await navigator.clipboard.writeText(text);
			onOk();
		} catch {
			fbText = text;
			fbVisible = true;
			await tick();
			fbEl?.select();
		}
	}

	function copyCalc() {
		copy(copyText(), () => {
			copyFlash = c.s.copied;
			setTimeout(() => (copyFlash = ''), 1800);
		});
	}

	function copyLink() {
		const token = encodeToken({
			lang,
			mode,
			committedInput,
			actualInput,
			shareInput
		});
		const url = page.url.origin + page.url.pathname + '#' + token;
		copy(url, () => {
			linkFlash = c.s.linkOk;
			setTimeout(() => (linkFlash = ''), 1800);
		});
	}

	function reformat(which: 'committed' | 'actual') {
		if (which === 'committed') committedInput = formatInt(num(committedInput), lang);
		else actualInput = formatInt(num(actualInput), lang);
	}

	// The premium share is a percentage; snap it back to 100 when more is entered.
	function clampShare() {
		if (parseFloat(shareInput.replace(',', '.')) > 100) shareInput = '100';
	}

	onMount(() => {
		const hash = location.hash.slice(1);
		const tok = decodeToken(hash);
		if (tok) {
			mode = tok.mode;
			if (tok.mode === 'committed') committedInput = formatInt(tok.committed, lang);
			actualInput = formatInt(tok.actual, lang);
			shareInput = tok.shareRaw.replace('p', decimalSeparator(lang));
			return;
		}
		if (hash) {
			const el = document.getElementById(hash);
			if (el) setTimeout(() => el.scrollIntoView(), 0);
		}
	});
</script>

<Seo title={`${c.title} — VATmiraal`} description={c.intro} />

<main class="vm-doc">
	<div class="wrap" style="padding-bottom:48px">
		<div class="title">
			<div class="rule"></div>
			<a class="back" href={localePath('/heimdall/pricing')}>{c.back}</a>
			<h1>{c.title}</h1>
			<p class="intro">{c.intro}</p>
		</div>

		<div id={c.calcId}>
			<div class="card calc">
				<div class="calc-in">
					<div class="fld">
						<span class="lb" id="vm-ml">{c.s.mode}</span>
						<div class="seg" role="group" aria-labelledby="vm-ml">
							<button
								type="button"
								aria-pressed={mode === 'committed'}
								onclick={() => (mode = 'committed')}>{c.committed}</button
							>
							<button
								type="button"
								aria-pressed={mode === 'graduated'}
								onclick={() => (mode = 'graduated')}>{c.notCommitted}</button
							>
						</div>
					</div>
					{#if mode === 'committed'}
						<div class="fld">
							<label for="vm-c">{c.committedVolume}</label>
							<input
								id="vm-c"
								type="text"
								inputmode="numeric"
								bind:value={committedInput}
								onblur={() => reformat('committed')}
							/>
						</div>
					{/if}
					<div class="fld">
						<label for="vm-v">{c.actualVolume}</label>
						<input
							id="vm-v"
							type="text"
							inputmode="numeric"
							bind:value={actualInput}
							onblur={() => reformat('actual')}
						/>
					</div>
					<div class="fld">
						<label for="vm-s">{c.premiumShare}</label>
						<input
							id="vm-s"
							type="text"
							inputmode="decimal"
							bind:value={shareInput}
							onblur={clampShare}
						/>
					</div>
				</div>
				<div class="calc-out">
					<div class="bdwrap">
						<table class="bd">
							{#if breakdown.head}
								<thead>
									<tr
										>{#each breakdown.head as h (h)}<th>{h}</th>{/each}</tr
									>
								</thead>
							{/if}
							<tbody>
								{#each breakdown.rows as row, i (i)}
									<!-- prettier-ignore -->
									<tr class={row.cls}>{#if row.span}<td colspan="3">{row.cells[0]}</td><td>{row.cells[1]}</td>{:else}{#each row.cells as cell, j (j)}<td>{cell}</td>{/each}{/if}</tr>
								{/each}
							</tbody>
						</table>
					</div>
					<div class="sharebar">
						<button type="button" class="sharebtn ghost" onclick={copyCalc}
							>{copyFlash || copyLabel}</button
						>
						<button type="button" class="sharebtn" onclick={copyLink}
							>{linkFlash || linkLabel}</button
						>
					</div>
					{#if fbVisible}
						<div class="fb">
							<span class="small">{c.s.sel}</span>
							<textarea readonly rows="9" bind:this={fbEl} value={fbText}></textarea>
						</div>
					{/if}
					<p class="small">{c.note}</p>
				</div>
			</div>
		</div>

		<a class="calc-link" href={localePath('/heimdall/pricing/examples')} style="margin-top:28px">
			<span>{m.examples.title}</span><span aria-hidden="true">→</span>
		</a>

		<div class="side" style="margin-top:28px">
			<article id={c.ratesId} style="border-top:0;padding-top:0">
				<h2><a class="hl" href={'#' + c.ratesId}>{c.ratesHeading}</a></h2>
				<RateTable
					config={data.config}
					{lang}
					volHead={c.tableHead.volume}
					stdHead={c.tableHead.standard}
					premHead={c.tableHead.premium}
				/>
			</article>
			<article id={c.rulesId} style="border-top:0;padding-top:0">
				<h2><a class="hl" href={'#' + c.rulesId}>{c.rulesHeading}</a></h2>
				<ul class="rules">
					{#each c.rules as rule (rule.lead)}
						<li><b>{rule.lead}</b> {rule.text}</li>
					{/each}
				</ul>
				<a class="full" href={localePath('/heimdall/pricing') + '#' + r.definitions.id}
					>{c.fullTerms}</a
				>
			</article>
		</div>
	</div>
</main>
