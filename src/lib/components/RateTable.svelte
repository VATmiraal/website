<script lang="ts">
	import { euro3, formatInt, type Lang } from '$lib/pricing';
	import type { PricingConfig } from '@vatmiraal/vatmiraal-sdk';

	let {
		config,
		lang,
		volHead,
		stdHead,
		premHead
	}: { config: PricingConfig; lang: Lang; volHead: string; stdHead: string; premHead: string } =
		$props();

	// Derive the tier ranges from the pricing config served by the backend.
	let rows = $derived(
		config.tiers.map((tier) => {
			const range =
				tier.to === null
					? `≥ ${formatInt(tier.from, lang)}`
					: `${formatInt(tier.from, lang)} – ${formatInt(tier.to - 1, lang)}`;
			return {
				range,
				std: euro3(tier.standard, lang),
				prem: euro3(tier.standard * config.premium_multiplier, lang)
			};
		})
	);
</script>

<div class="card tbl">
	<table>
		<thead>
			<tr><th>{volHead}</th><th>{stdHead}</th><th>{premHead}</th></tr>
		</thead>
		<tbody>
			{#each rows as r (r.range)}
				<tr><td>{r.range}</td><td>{r.std}</td><td>{r.prem}</td></tr>
			{/each}
		</tbody>
	</table>
</div>
