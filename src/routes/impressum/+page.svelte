<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<svelte:head>
	<title>Impressum — VATmiraal</title>
	<meta
		name="description"
		content="Legal information for VATmiraal: company registration details, address, and VAT number."
	/>
</svelte:head>

<div id="page">
	<SectionHeader level="h1" title="Impressum" />

	<div id="content">
		<dl>
			<dt>Company name</dt>
			<dd>VATmiraal, BV</dd>

			<dt>Legal form</dt>
			<dd>Company under Belgian law</dd>

			<dt>VAT number</dt>
			<dd>BE 1037.608.406</dd>

			<dt>Email</dt>
			<dd><a href="mailto:info@vatmiraal.be">info@vatmiraal.be</a></dd>
		</dl>
	</div>

	<div id="cta">
		<Button href={resolve('/')} variant="ghost">← Back to home</Button>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		gap: var(--space-16);
		max-width: var(--container-narrow);
		margin: 0 auto;
		box-sizing: border-box;
	}

	#content {
		width: 100%;
	}

	#content {
		margin-top: var(--space-8);
	}

	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--space-4) var(--space-8);
		margin: 0;
	}

	dt {
		font-weight: var(--font-weight-medium);
		color: var(--color-text-muted);
		font-size: var(--font-size-base);
	}

	dd {
		margin: 0;
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
	}

	address {
		font-style: normal;
		line-height: inherit;
	}

	dd a {
		color: var(--color-accent);
		text-decoration: none;
	}

	dd a:hover {
		text-decoration: underline;
	}

	#cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		text-align: center;
		margin-top: var(--space-8);
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-10);
		}

		dl {
			grid-template-columns: 1fr;
			gap: var(--space-2);
		}

		dt {
			margin-top: var(--space-4);
		}

		dt:first-child {
			margin-top: 0;
		}

		dd {
			margin-bottom: var(--space-2);
		}
	}
</style>
