<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { tr, localePath } from '$lib/translation/i18n';
	import { isLocale } from '$lib/translation/messages';
	import { localeHref } from '$lib/translation/locale';
	import '$lib/doc/doc.css';
	import DefinitionSection from '$lib/doc/DefinitionSection.svelte';
	import ClauseSection from '$lib/doc/ClauseSection.svelte';
	import { buildPdf, PDF_MESSAGES, type Lang } from '$lib/pdf';

	let m = $derived(tr());
	let sv = $derived(m.service);
	let lang = $derived((isLocale(page.data.lang) ? page.data.lang : 'en') as Lang);

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
			const calcUrl = origin + localeHref('/heimdall/pricing/calculator', lang);
			const doc = await buildPdf({ root: docRoot, lang, calcUrl, origin });
			doc.save(`VATmiraal-Heimdall-${lang}.pdf`);
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
		const el = document.getElementById(hash);
		if (el) setTimeout(() => el.scrollIntoView(), 0);
	});
</script>

<Seo title={`${sv.title} — VATmiraal`} description={sv.meta} />

<main class="vm-doc">
	<div class="wrap" style="padding-bottom:48px">
		<div bind:this={docRoot}>
			<div class="title">
				<div class="rule"></div>
				<a class="back" href={localePath('/heimdall/pricing/rates')}>{sv.back}</a>
				<div class="kicker">{sv.kicker}</div>
				<div class="titlebar">
					<h1>{sv.title}</h1>
					<div style="display:grid;gap:4px;justify-items:end">
						<button type="button" class="pdfbtn" disabled={pdfBusy} onclick={downloadPdf}
							>{sv.pdfLabel}</button
						>
						<span class="pdfmsg">{pdfMsg}</span>
					</div>
				</div>
				<p class="meta">{sv.meta}</p>
			</div>

			<DefinitionSection section={sv.definitions} />
			{#each sv.clauses as section (section.id)}
				<ClauseSection {section} />
			{/each}
		</div>
	</div>
</main>
