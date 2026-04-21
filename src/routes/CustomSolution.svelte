<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<div id="page">
	<SectionHeader
		title="Deeper integration? Custom workflow? Something specific?"
		subtitle="We're a dynamic, flexible, innovative team and always open to talk."
		tone="dark"
	/>
	<div id="cta-actions">
		<Button href="mailto:info@vatmiraal.be" variant="primary" tone="dark">Talk to us</Button>
		<Button href={resolve('/custom_solutions')} variant="ghost" tone="dark">
			How we work →
		</Button>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		gap: var(--space-8);
		padding: var(--space-20) var(--section-padding-x);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
	}

	#cta-actions {
		display: flex;
		gap: var(--space-6);
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
		}
	}
</style>
