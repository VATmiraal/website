<script lang="ts">
	import { localePath } from '$lib/translation/i18n';
	import type { ISegment, ILink } from './content';

	let { segments }: { segments: ISegment[] } = $props();

	function href(link: ILink): string {
		if (link.url) return link.url;
		if (link.path) return localePath(link.path) + (link.hash ? '#' + link.hash : '');
		return '#' + link.hash;
	}
</script>

<!-- prettier-ignore -->
{#each segments as seg, i (i)}{#if typeof seg === 'string'}{seg}{:else if 'b' in seg}<b>{seg.b}</b>{:else if seg.url}<a href={seg.url} target="_blank" rel="noopener">{seg.text}</a>{:else}<a href={href(seg)}>{seg.text}</a>{/if}{/each}
