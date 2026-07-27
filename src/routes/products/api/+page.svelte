<script lang="ts">
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import { apiRoutes, operationExample } from '$lib/api/openapi';

	interface IDeliver {
		h: string;
		p: string;
	}

	const DOCS_URL = 'https://api.vatmiraal.be/doc';
	const BUY_MAILTO = 'mailto:info@vatmiraal.be?subject=Buying the VATmiraal API';

	let m = $derived(tr());
	let delivers = $derived(m.api.delivers as IDeliver[]);
	let boxPoints = $derived(m.api.boxPoints as string[]);
	let priceOptions = $derived(m.api.priceOptions as string[]);
	let routeDesc = $derived(m.api.routeDesc as Record<string, string>);

	// Examples are locale-independent: request from the spec, response synthesised.
	const boxExample = operationExample('/box-analysis', 'post');
	const infExample = operationExample('/inference/object', 'post');

	const referenceRoutes = apiRoutes.filter((route) => route.method === 'GET' && route.path !== '/');

	let boxTab = $state('req');
	let infTab = $state('req');
</script>

<svelte:head>
	<title>{m.api.heroTitle} — VATmiraal</title>
	<meta name="description" content={m.api.heroSub} />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<SectionHeader
		level="h1"
		size="hero"
		kicker={m.api.heroKicker}
		title={m.api.heroTitle}
		subtitle={m.api.heroSub}
	/>
	<div class="hero-cta">
		<Button href="#pricing" variant="primary" size="lg">{m.api.heroBuy}</Button>
		<Button href={DOCS_URL} variant="ghost" size="lg">{m.api.heroDocs}</Button>
	</div>
</section>

<!-- What the API delivers -->
<section class="band">
	<SectionHeader kicker={m.api.deliversKicker} title={m.api.deliversTitle} />
	<div class="deliver-grid">
		{#each delivers as item (item.h)}
			<Card>
				<h3>{item.h}</h3>
				<p>{item.p}</p>
			</Card>
		{/each}
	</div>
</section>

<!-- box-analysis showcase -->
<section class="band example">
	<div class="example-copy">
		<h2>{m.api.boxTitle}</h2>
		<p>{m.api.boxBody}</p>
		<ul class="points">
			{#each boxPoints as point (point)}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
	<div class="example-code">
		<Tabs
			bind:active={boxTab}
			label="box-analysis"
			tabs={[
				{ id: 'req', label: m.api.tabReq },
				{ id: 'res', label: m.api.tabRes }
			]}
		/>
		{#if boxTab === 'req'}
			<CodeBlock label="POST /box-analysis" code={boxExample.request ?? ''} />
		{:else}
			<CodeBlock label="200 OK" code={boxExample.response} />
		{/if}
	</div>
</section>

<!-- inference showcase -->
<section class="band example reverse">
	<div class="example-copy">
		<h2>{m.api.infTitle}</h2>
		<p>{m.api.infBody}</p>
	</div>
	<div class="example-code">
		<Tabs
			bind:active={infTab}
			label="inference/object"
			tabs={[
				{ id: 'req', label: m.api.tabReq },
				{ id: 'res', label: m.api.tabRes }
			]}
		/>
		{#if infTab === 'req'}
			<CodeBlock label="POST /inference/object" code={infExample.request ?? ''} />
		{:else}
			<CodeBlock label="200 OK" code={infExample.response} />
		{/if}
	</div>
</section>

<!-- Routes (from OpenAPI) -->
<section class="band">
	<SectionHeader kicker={m.api.routesKicker} title={m.api.routesTitle} subtitle={m.api.routesSub} />
	<div class="routes">
		{#each referenceRoutes as route (route.method + route.path)}
			<div class="route">
				<span class="method {route.method.toLowerCase()}">{route.method}</span>
				<code class="path">{route.path}</code>
				<span class="desc">{routeDesc[route.path] ?? route.summary}</span>
			</div>
		{/each}
	</div>
	<p class="routes-link">
		<a href={DOCS_URL}>{m.api.routesLink}</a>
	</p>
</section>

<!-- MCP -->
<section class="band mcp">
	<SectionHeader
		tone="dark"
		kicker={m.api.mcpKicker}
		title={m.api.mcpTitle}
		subtitle={m.api.mcpBody}
	/>
</section>

<!-- Pricing -->
<section id="pricing" class="band">
	<SectionHeader kicker={m.api.priceKicker} title={m.api.priceTitle} />
	<div class="price-card">
		<span class="price-value">{m.api.price}</span>
		<ul class="price-options">
			{#each priceOptions as opt (opt)}
				<li>{opt}</li>
			{/each}
		</ul>
		<p class="price-depends">{m.api.priceDepends}</p>
		<Button href={BUY_MAILTO} variant="primary" size="lg">{m.api.priceCta}</Button>
	</div>
</section>

<style>
	section {
		padding: var(--section-padding-y) var(--section-padding-x);
		max-width: var(--container-wide);
		margin: 0 auto;
	}

	.hero {
		text-align: center;
		padding-top: var(--space-24);
	}

	.hero-cta {
		display: flex;
		gap: var(--space-4);
		justify-content: center;
		flex-wrap: wrap;
		margin-top: var(--space-8);
	}

	h2 {
		font-size: var(--h2-section);
		line-height: var(--line-height-tight);
		margin: 0 0 var(--space-4);
	}

	h3 {
		font-size: var(--h3-card);
		margin: 0 0 var(--space-2);
	}

	p {
		color: var(--color-text-muted);
		margin: 0;
	}

	.deliver-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--space-6);
		margin-top: var(--space-12);
	}

	.example {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-12);
		align-items: start;
	}

	.example-copy,
	.example-code {
		min-width: 0;
	}

	.example.reverse .example-copy {
		order: 2;
	}

	.points {
		margin: var(--space-6) 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: var(--space-3);
	}

	.points li {
		padding-left: var(--space-6);
		position: relative;
		color: var(--color-text-muted);
	}

	.points li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--color-accent);
	}

	.example-code :global(.tabs) {
		margin-bottom: var(--space-3);
	}

	.routes {
		display: grid;
		gap: var(--space-1);
		margin-top: var(--space-12);
	}

	.route {
		display: grid;
		grid-template-columns: 4.5rem minmax(0, auto) minmax(0, 1fr);
		align-items: center;
		gap: var(--space-4);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-md);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
	}

	.method {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		text-align: center;
		padding: 0.2em 0.4em;
		border-radius: var(--radius-sm);
	}

	.method.get {
		background: var(--color-accent-tint);
		color: var(--color-accent);
	}

	.method.post {
		background: var(--color-proof-tint);
		color: var(--color-proof);
	}

	.path {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-sm);
		color: var(--color-text);
		overflow-wrap: anywhere;
	}

	.desc {
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
	}

	.routes-link {
		margin-top: var(--space-6);
		text-align: center;
	}

	.routes-link a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.routes-link a:hover {
		text-decoration: underline;
	}

	.mcp {
		background: var(--color-bg-inverted);
		border-radius: var(--radius-lg);
		text-align: center;
		max-width: var(--container-medium);
	}

	.price-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		text-align: center;
		width: 100%;
		max-width: 400px;
		margin: var(--space-12) auto 0;
		padding: var(--space-8);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		border: 1.5px solid var(--color-accent);
		box-shadow: var(--shadow-lg);
	}

	.price-value {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: 1;
	}

	.price-options {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: var(--space-2);
		text-align: left;
		width: 100%;
	}

	.price-options li {
		position: relative;
		padding-left: var(--space-6);
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.price-options li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-proof);
		font-weight: var(--font-weight-bold);
	}

	.price-depends {
		margin: 0;
		font-size: var(--font-size-sm);
		color: var(--color-text-faint);
		line-height: var(--line-height-snug);
	}

	@media (max-width: 768px) {
		section {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}

		.hero {
			padding-top: var(--space-16);
		}
	}

	@media (max-width: 900px) {
		.example {
			grid-template-columns: 1fr;
		}

		.example.reverse .example-copy {
			order: 0;
		}

		.route {
			grid-template-columns: 3.5rem 1fr;
			grid-template-areas:
				'method path'
				'desc desc';
			row-gap: var(--space-2);
		}

		.method {
			grid-area: method;
		}
		.path {
			grid-area: path;
		}
		.desc {
			grid-area: desc;
		}
	}
</style>
