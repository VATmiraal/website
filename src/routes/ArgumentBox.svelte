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

		background-color: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
		min-height: 220px;
		padding: 1.5em;
		width: 25vw;
		transition: transform 0.22s ease, box-shadow 0.22s ease;
	}

	div:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06);
	}

	ul {
		align-self: flex-start;
		font-size: 1.05em;
		line-height: 1.65;
		padding-left: 1.4em;
		margin: 0 0 1em 0;
		color: #333333;
	}

	h1 {
		width: 80%;
		text-align: center;
		font-size: 1.25em;
		font-weight: 700;
		letter-spacing: -0.01em;
		min-height: 3em;
		margin: 0;
		padding: 0.75em 0 0.5em;
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

		div:hover {
			transform: none;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
		}

		h1 {
			font-size: 1.15em;
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
			font-size: 1.2em;
		}
	}
</style>
