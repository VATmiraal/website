<script lang="ts">
	export interface IVatmiraalArg {
		title: string;
		args: string[];
	}

	let { title, args }: IVatmiraalArg = $props();
</script>

<div>
	<h1>{title}</h1>
	<ul>
		{#each args as arg (arg)}
			<li>{arg}</li>
		{/each}
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;

		border: 2.5px solid;
		height: 30vh;
		width: 25vw;
	}

	ul {
		align-self: flex-start;
		font-size: 1.17em;
	}

	h1 {
		width: 80%;
		font-weight: bold;
		text-align: center;
		font-size: 1.6em;
		font-weight: bold;
		min-height: 3em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 768px) {
		div {
			width: 85vw;
			height: auto;
			padding-bottom: 1.5em;
		}

		h1 {
			font-size: 1.3em;
			min-height: 2em;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		div {
			width: 28vw;
			height: auto;
			padding-bottom: 1.5em;
		}

		h1 {
			font-size: 1.4em;
		}
	}
</style>
