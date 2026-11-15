<script lang="ts">
	import Segments from './Segments.svelte';
	import type { IClauseSection } from './content';

	let { section }: { section: IClauseSection } = $props();
</script>

<article id={section.id}>
	<h2><a class="hl" href={'#' + section.id}>{section.heading}</a></h2>
	<div class="cl">
		{#each section.clauses as c (c.n)}
			<!-- prettier-ignore -->
			<div id={section.id + '-' + c.n}><span>{c.n}</span><div><Segments segments={c.lead} />{#if c.list}<ol type="a">{#each c.list as li, i (i)}<li><Segments segments={li} /></li>{/each}</ol>{/if}{#if c.after}<Segments segments={c.after} />{/if}</div></div>
		{/each}
	</div>
</article>
