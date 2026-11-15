<script lang="ts">
	import type { ITracksBlock } from './content';

	let { block, calcHref }: { block: ITracksBlock; calcHref: string } = $props();
</script>

<div class="tracks" id={block.id}>
	{#each block.cards as card (card.href)}
		<a class="card track" href={'#' + card.href}>
			<span class="k">{card.k}</span>
			<h2>{card.title} <span aria-hidden="true">→</span></h2>
			<ul>
				{#each card.items as it, i (i)}<li>{it}</li>{/each}
			</ul>
		</a>
	{/each}
	<a class="calc-link" href={calcHref}
		><span>{block.calcText}</span><span aria-hidden="true">→</span></a
	>
</div>
