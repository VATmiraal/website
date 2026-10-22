<script lang="ts">
	import { tr } from '$lib/translation/i18n';
	import { FileText, Check } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import { boxReq, boxRes, infReq, infRes } from '$lib/api/samples';

	interface IPair {
		h: string;
		p: string;
	}
	interface IRoute {
		m: string;
		path: string;
		d: string;
	}
	interface IRouteGroup {
		name: string;
		desc: string;
		routes: IRoute[];
	}

	const REF_URL = 'https://api.vatmiraal.be/doc/';
	const SPEC_URL = 'https://api.vatmiraal.be/openapi.json';
	const SDK_URL = 'https://www.npmjs.com/package/@vatmiraal/vatmiraal-sdk';

	let m = $derived(tr());
	let delivers = $derived(m.api.delivers as IPair[]);
	let boxPoints = $derived(m.api.boxPoints as string[]);
	let pdfFields = $derived(m.api.pdfFields as string[]);
	let routeGroups = $derived(m.api.routeGroups as IRouteGroup[]);

	let boxTab = $state('req');
	let infTab = $state('req');

	let sdkCopied = $state(false);
	function copySdk() {
		navigator.clipboard?.writeText('npm install @vatmiraal/vatmiraal-sdk');
		sdkCopied = true;
		setTimeout(() => (sdkCopied = false), 2000);
	}
</script>

<svelte:head>
	<title>{m.api.docsTitle} — VATmiraal</title>
	<meta name="description" content={m.api.docsSub} />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<span class="kicker">{m.api.docsKicker}</span>
	<h1>{m.api.docsTitle}</h1>
	<p class="hero-sub">{m.api.docsSub}</p>
	<div class="hero-cta">
		<Button href={REF_URL} external variant="primary" size="lg">{m.api.docsRefLink}</Button>
		<Button href={SPEC_URL} external variant="secondary" size="lg">{m.api.docsSpecLink}</Button>
	</div>
</section>

<!-- What the API delivers -->
<section class="band">
	<header class="band-head">
		<span class="kicker">{m.api.deliversKicker}</span>
		<h2>{m.api.deliversTitle}</h2>
	</header>
	<div class="delivers">
		{#each delivers as d (d.h)}
			<div class="card">
				<h3>{d.h}</h3>
				<p>{d.p}</p>
			</div>
		{/each}
	</div>
</section>

<!-- box-analysis -->
<section class="split">
	<div class="split-copy">
		<span class="mono-kicker">POST /box-analysis</span>
		<h2>{m.api.boxTitle}</h2>
		<p>{m.api.boxBody}</p>
		<ul class="points">
			{#each boxPoints as point (point)}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
	<div class="split-code">
		<Tabs
			bind:active={boxTab}
			label="box-analysis"
			tabs={[
				{ id: 'req', label: m.api.tabReq },
				{ id: 'res', label: m.api.tabRes }
			]}
		/>
		{#if boxTab === 'req'}
			<CodeBlock label="POST /box-analysis" code={boxReq} />
		{:else}
			<CodeBlock label="200 OK" code={boxRes} />
		{/if}
	</div>
</section>

<!-- inference/object -->
<section class="split reverse">
	<div class="split-code">
		<Tabs
			bind:active={infTab}
			label="inference/object"
			tabs={[
				{ id: 'req', label: m.api.tabReq },
				{ id: 'res', label: m.api.tabRes }
			]}
		/>
		{#if infTab === 'req'}
			<CodeBlock label="POST /inference/object" code={infReq} />
		{:else}
			<CodeBlock label="200 OK" code={infRes} />
		{/if}
	</div>
	<div class="split-copy">
		<span class="mono-kicker">POST /inference/object</span>
		<h2>{m.api.infTitle}</h2>
		<p>{m.api.infBody}</p>
	</div>
</section>

<!-- PDF invoices -->
<section class="split">
	<div class="split-copy">
		<span class="kicker">{m.api.pdfKicker}</span>
		<h2>{m.api.pdfTitle}</h2>
		<p>{m.api.pdfSub}</p>
		<div class="chips">
			<span class="chip">POST /parse-invoice</span>
			<span class="chip">MCP · parse_invoice</span>
		</div>
	</div>
	<div class="pdf-card">
		<div class="pdf-card-head">
			<FileText size={20} color="var(--color-accent)" strokeWidth={1.75} />
			<span>{m.api.pdfCardHead}</span>
		</div>
		{#each pdfFields as f (f)}
			<div class="pdf-row">
				<Check size={16} color="var(--color-accent)" strokeWidth={2.2} />
				<span>{f}</span>
			</div>
		{/each}
		<div class="pdf-foot">{m.api.pdfFoot}</div>
	</div>
</section>

<!-- Routes -->
<section class="band">
	<header class="band-head">
		<span class="kicker">{m.api.routesKicker}</span>
		<h2>{m.api.routesTitle}</h2>
		<p class="band-sub">{m.api.routesSub}</p>
	</header>
	<div class="route-groups">
		{#each routeGroups as g (g.name)}
			<div class="route-group">
				<div class="route-group-head">
					<h3>{g.name}</h3>
					<span>{g.desc}</span>
				</div>
				<div class="route-grid">
					{#each g.routes as r (r.m + r.path)}
						<div class="route">
							<span class="route-m">{r.m}</span>
							<div class="route-text">
								<span class="route-path">{r.path}</span>
								<span class="route-d">{r.d}</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<a class="routes-link" href={REF_URL} target="_blank" rel="noopener noreferrer"
		>{m.api.routesLink} →</a
	>
</section>

<!-- SDK -->
<section class="band sdk">
	<header class="band-head">
		<span class="kicker">{m.api.sdkKicker}</span>
		<h2>{m.api.sdkTitle}</h2>
		<p class="band-sub">{m.api.sdkSub}</p>
	</header>
	<div class="sdk-install">
		<code><span class="sdk-prompt">$</span> npm install @vatmiraal/vatmiraal-sdk</code>
		<button type="button" onclick={copySdk}>{sdkCopied ? m.api.sdkCopied : m.api.sdkCopy}</button>
	</div>
	<Button href={SDK_URL} external variant="primary" size="lg">{m.api.sdkLink}</Button>
</section>

<!-- MCP (dark) -->
<section class="mcp">
	<div class="mcp-head">
		<span class="kicker on-dark">{m.api.mcpKicker}</span>
		<h2>{m.api.mcpTitle}</h2>
		<p class="mcp-body">{m.api.mcpBody}</p>
	</div>
</section>

<style>
	.kicker,
	.mono-kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.kicker.on-dark {
		color: var(--color-text-on-dark-faint);
	}

	.mono-kicker {
		color: var(--color-accent);
		font-family: var(--font-family-mono);
	}

	h2 {
		margin: 0;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		line-height: var(--line-height-tight);
		letter-spacing: var(--letter-spacing-tight);
	}

	/* Hero */
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-5);
		padding: 9vh 6% 6vh;
		border-bottom: 1px solid var(--color-border);
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
		max-width: min(640px, 86vw);
		font-size: var(--font-size-md);
		margin: 0;
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.hero-cta {
		display: flex;
		gap: var(--space-4);
		justify-content: center;
		flex-wrap: wrap;
		margin-top: var(--space-2);
	}

	/* Bands */
	.band {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3.5rem;
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	.band-head {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: var(--container-narrow);
		margin-inline: auto;
		align-items: center;
		text-align: center;
	}

	.band-sub {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 44rem;
	}

	.delivers {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr));
		gap: var(--space-6);
		width: 100%;
		max-width: var(--container-wide);
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-8);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-md);
		transition: transform var(--duration-fast) var(--easing);
	}

	.card:hover {
		transform: translateY(-3px);
	}

	.card h3 {
		margin: 0;
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
	}

	.card p {
		margin: 0;
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}

	/* Split sections */
	.split {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: var(--space-16);
		align-items: center;
		width: 100%;
		max-width: var(--container-wide);
		margin-inline: auto;
		padding: var(--section-padding-y) var(--section-padding-x);
		border-top: 1px solid var(--color-border);
	}

	.split.reverse {
		grid-template-columns: 1.15fr 0.85fr;
	}

	.split-copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		min-width: 0;
	}

	.split-code {
		min-width: 0;
	}

	.split-copy h2 {
		font-size: var(--h2-section);
	}

	.split-copy p {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.points {
		margin: var(--space-2) 0 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.points li {
		position: relative;
		padding-left: var(--space-6);
		font-size: var(--font-size-base);
		color: var(--color-text);
		line-height: var(--line-height-snug);
	}

	.points li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-weight: var(--font-weight-bold);
	}

	.split-code :global(.tabs) {
		margin-bottom: var(--space-3);
	}

	/* PDF card */
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	.chip {
		font-family: var(--font-family-mono);
		font-size: 0.8rem;
		font-weight: var(--font-weight-semibold);
		padding: 0.35em 0.8em;
		border-radius: var(--radius-sm);
		background: var(--color-accent-tint);
		color: var(--color-accent);
	}

	.pdf-card {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-md);
		overflow: hidden;
	}

	.pdf-card-head {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-4) var(--space-6);
		border-bottom: 1px solid var(--color-border);
		background: var(--color-bg-subtle);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
	}

	.pdf-row {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-4) var(--space-6);
		border-bottom: 1px solid var(--color-border);
		font-size: var(--font-size-base);
	}

	.pdf-foot {
		padding: var(--space-4) var(--space-6);
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	/* Routes */
	.route-groups {
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
		width: 100%;
		max-width: var(--container-wide);
	}

	.route-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.route-group-head {
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		padding-bottom: var(--space-2);
		border-bottom: 1px solid var(--color-border);
	}

	.route-group-head h3 {
		margin: 0;
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
	}

	.route-group-head span {
		font-size: var(--font-size-sm);
		color: var(--color-text-faint);
	}

	.route-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
		gap: var(--space-4);
	}

	.route {
		display: flex;
		align-items: baseline;
		gap: var(--space-4);
		padding: var(--space-5) var(--space-6);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-md);
	}

	.route-m {
		flex: none;
		width: 3.2em;
		font-family: var(--font-family-mono);
		font-size: 0.72rem;
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.04em;
		color: var(--color-accent);
	}

	.route-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.route-path {
		font-family: var(--font-family-mono);
		font-size: 0.86rem;
		color: var(--color-text);
		font-weight: var(--font-weight-semibold);
		overflow-wrap: anywhere;
	}

	.route-d {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		line-height: 1.5;
	}

	.routes-link {
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-semibold);
		color: var(--color-accent);
		text-decoration: none;
	}

	.routes-link:hover {
		color: var(--color-accent-hover);
	}

	/* SDK */
	.sdk {
		background: var(--color-bg-subtle);
		gap: var(--space-8);
	}

	.sdk-install {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		width: 100%;
		max-width: 560px;
		padding: var(--space-3) var(--space-3) var(--space-3) var(--space-6);
		border-radius: var(--radius-lg);
		background: var(--color-bg-inverted);
		box-shadow: var(--shadow-md);
	}

	.sdk-install code {
		flex: 1;
		min-width: 0;
		font-family: var(--font-family-mono);
		font-size: 0.92rem;
		color: var(--color-text-on-dark);
		overflow-x: auto;
		white-space: nowrap;
	}

	.sdk-prompt {
		color: var(--color-accent-on-dark);
	}

	.sdk-install button {
		flex: none;
		padding: 0.5em 0.95em;
		border: 1px solid var(--color-border-on-dark);
		border-radius: var(--radius-md);
		background: transparent;
		color: var(--color-text-on-dark);
		font-family: var(--font-family);
		font-size: 0.8rem;
		font-weight: var(--font-weight-semibold);
		cursor: pointer;
	}

	/* MCP */
	.mcp {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-10);
		padding: var(--space-20) var(--section-padding-x);
		background: var(--color-bg-inverted);
		text-align: center;
	}

	.mcp-head {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
	}

	.mcp-head h2 {
		max-width: var(--container-narrow);
		color: var(--color-text-on-dark);
	}

	.mcp-body {
		margin: 0;
		max-width: 42rem;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-on-dark-muted);
	}

	@media (max-width: 900px) {
		.split,
		.split.reverse {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}

		.split.reverse .split-copy {
			order: -1;
		}
	}
</style>
