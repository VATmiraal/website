<script lang="ts">
	interface IWalkthroughStepProps {
		index: string;
		title: string;
		body: string;
		image: string;
		alt: string;
		reverse?: boolean;
	}

	let { index, title, body, image, alt, reverse = false }: IWalkthroughStepProps = $props();
</script>

<li class="step" class:step-reverse={reverse} id={`step-${index}`}>
	<div class="step-copy">
		<span class="step-numeral" aria-hidden="true">{index}</span>
		<div class="step-text">
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	</div>
	<figure class="step-image">
		<img src={image} {alt} />
	</figure>
</li>

<style>
	.step {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
		gap: var(--space-12);
		align-items: center;
		scroll-margin-top: calc(var(--header-total-height) + var(--space-6));
	}

	.step-reverse .step-image {
		grid-column: 1;
		grid-row: 1;
	}

	.step-reverse .step-copy {
		grid-column: 2;
		grid-row: 1;
		flex-direction: row-reverse;
		text-align: right;
	}

	.step-copy {
		display: flex;
		align-items: flex-start;
		gap: var(--space-5);
	}

	.step-numeral {
		font-size: clamp(4rem, 9vw, 8rem);
		font-weight: 300;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
		line-height: 0.9;
		color: var(--color-text-faint);
		flex-shrink: 0;
		user-select: none;
	}

	.step-text {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding-top: var(--space-4);
	}

	.step-text h3 {
		margin: 0;
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		line-height: var(--line-height-tight);
		color: var(--color-text);
	}

	.step-text p {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
		max-width: 34rem;
	}

	.step-reverse .step-text p {
		margin-left: auto;
	}

	.step-image {
		margin: 0;
		width: 100%;
	}

	.step-image img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}

	@media (max-width: 1024px) {
		.step {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}

		.step-reverse .step-image {
			grid-column: 1;
			grid-row: 2;
		}

		.step-reverse .step-copy {
			grid-column: 1;
			grid-row: 1;
			flex-direction: row;
			text-align: left;
		}

		.step-reverse .step-text p {
			margin-left: 0;
		}

		.step-image {
			grid-row: 2;
		}

		.step-copy {
			grid-row: 1;
		}
	}

	@media (max-width: 768px) {
		.step-numeral {
			font-size: clamp(3rem, 14vw, 5rem);
		}

		.step-text {
			padding-top: var(--space-2);
		}
	}
</style>
