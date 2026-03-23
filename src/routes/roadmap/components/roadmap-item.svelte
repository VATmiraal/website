<script lang="ts">
	let { number, title, description }: { number: number; title: string; description: string } =
		$props();
</script>

<div class="item">
	<span class="item-number">{number}</span>
	<div class="item-body">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.item {
		display: flex;
		align-items: flex-start;
		gap: 1.25em;
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.09);
		border-radius: 10px;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.06),
			0 1px 2px rgba(0, 0, 0, 0.04);
		padding: 1.75em 2em;
		text-align: left;
	}

	.item-number {
		flex-shrink: 0;
		width: 2em;
		height: 2em;
		border-radius: 50%;
		background: #0f0f0f;
		color: #f8f8f6;
		font-size: 0.9em;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item-body h3 {
		font-size: 1.15em;
		font-weight: 700;
		letter-spacing: -0.01em;
		margin: 0 0 0.4em;
	}

	.item-body p {
		font-size: 1em;
		color: rgba(15, 15, 15, 0.7);
		line-height: 1.65;
		margin: 0;
	}

	@media (max-width: 768px) {
		.item {
			padding: 1.4em 1.5em;
		}
	}
</style>
