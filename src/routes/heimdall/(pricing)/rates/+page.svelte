<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { tr, localePath } from '$lib/translation/i18n';
	import { isLocale } from '$lib/translation/messages';
	import { localeHref } from '$lib/translation/locale';
	import '$lib/doc/doc.css';
	import DefinitionSection from '$lib/doc/DefinitionSection.svelte';
	import ClauseSection from '$lib/doc/ClauseSection.svelte';
	import Tracks from '$lib/doc/Tracks.svelte';
	import RateTable from '$lib/components/RateTable.svelte';
	import { buildPdf, PDF_MESSAGES, type Lang } from '$lib/pdf';

	let { data } = $props();
	let m = $derived(tr());
	let r = $derived(m.rates);
	let lang = $derived((isLocale(page.data.lang) ? page.data.lang : 'en') as Lang);

	const calcPath = '/heimdall/calculator';

	let docRoot: HTMLElement | undefined = $state();
	let pdfBusy = $state(false);
	let pdfMsg = $state('');

	async function downloadPdf() {
		if (!docRoot) return;
		const msgs = PDF_MESSAGES[lang];
		pdfBusy = true;
		pdfMsg = msgs.busy;
		try {
			// `?pdfOrigin=` lets the provisioning script bake production links from a local run.
			const origin = page.url.searchParams.get('pdfOrigin') || page.url.origin;
			const calcUrl = origin + localeHref(calcPath, lang);
			const examplesUrl = origin + localeHref('/heimdall/examples', lang);
			const doc = await buildPdf({ root: docRoot, lang, calcUrl, examplesUrl, origin });
			doc.save(`VATmiraal-tarieven-${lang}.pdf`);
			pdfMsg = msgs.saved;
		} catch {
			pdfMsg = msgs.err;
		} finally {
			pdfBusy = false;
		}
	}

	onMount(() => {
		const hash = location.hash.slice(1);
		if (!hash) return;
		// Old-style calculator deep-links now live on the calculator page.
		if (/^[a-z]{2}-calc/.test(hash)) {
			goto(localePath(calcPath) + '#' + hash, { replaceState: true });
			return;
		}
		const el = document.getElementById(hash);
		if (el) setTimeout(() => el.scrollIntoView(), 0);
	});
</script>

<Seo title={`${r.title} — VATmiraal`} description={r.meta} />

<main class="vm-doc">
	<div class="wrap" style="padding-bottom:48px">
		<div bind:this={docRoot}>
			<div class="title">
				<div class="rule"></div>
				<div class="kicker">{r.kicker}</div>
				<div class="titlebar">
					<h1>{r.title}</h1>
					<div style="display:grid;gap:4px;justify-items:end">
						<button type="button" class="pdfbtn" disabled={pdfBusy} onclick={downloadPdf}
							>{r.pdfLabel}</button
						>
						<span class="pdfmsg">{pdfMsg}</span>
					</div>
				</div>
				<p class="meta">{r.meta}</p>
			</div>

			<DefinitionSection section={r.definitions} />
			<Tracks block={r.tracks} calcHref={localePath(calcPath)} />

			<article id={r.rates.id}>
				<h2><a class="hl" href={'#' + r.rates.id}>{r.rates.heading}</a></h2>
				<RateTable
					config={data.config}
					{lang}
					volHead={r.rates.tableHead.volume}
					stdHead={r.rates.tableHead.standard}
					premHead={r.rates.tableHead.premium}
				/>
				<a class="calc-link" href={localePath('/heimdall/examples')} style="margin-top:14px">
					<span>{m.examples.title}</span><span aria-hidden="true">→</span>
				</a>
			</article>

			{#each r.clauses as section (section.id)}
				<ClauseSection {section} />
			{/each}
		</div>
	</div>
</main>
