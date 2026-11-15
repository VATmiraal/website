<script lang="ts">
	import Segments from './Segments.svelte';
	import type { IDefinitionSection } from './content';

	let { section }: { section: IDefinitionSection } = $props();
</script>

<article id={section.id}>
	<h2><a class="hl" href={'#' + section.id}>{section.heading}</a></h2>
	<dl>
		<!-- prettier-ignore -->
		{#each section.items as item (item.term)}<dt>{item.term}</dt><dd><Segments segments={item.desc} /></dd>{/each}
	</dl>
</article>
