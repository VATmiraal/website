<script lang="ts">
	interface IStepItemProps {
		number: number;
		title: string;
		description: string;
		orientation?: 'vertical' | 'horizontal';
	}

	let { number, title, description, orientation = 'vertical' }: IStepItemProps = $props();
</script>

<div class="step step-{orientation}">
	<div class="step-num" aria-hidden="true">{number}</div>
	<div class="step-body">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style>
	.step {
		display: flex;
		gap: var(--space-5);
	}

	.step-vertical {
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-4);
	}

	.step-horizontal {
		flex-direction: row;
		align-items: flex-start;
	}

	.step-num {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--radius-pill);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-base);
	}

	.step-body h3 {
		margin: 0 0 var(--space-2) 0;
		font-size: var(--h3-card);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-snug);
		color: var(--color-text);
	}

	.step-body p {
		margin: 0;
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
	}
</style>
