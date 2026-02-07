<script lang="ts">
	import Header from '../components/header.svelte';

	let { children } = $props();
</script>

<Header />

{@render children()}

<style>
	@font-face {
		font-family: 'Inter';
		src: url('/Inter-VariableFont_opsz,wght.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
		margin: 0;
	}
</style>
