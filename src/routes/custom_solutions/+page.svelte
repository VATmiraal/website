<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Custom VAT Automation',
		url: 'https://vatmiraal.be/custom_solutions',
		description:
			'Scoped VAT automation engagements for accountants, enterprises, and public-sector teams — complex workflows, special VAT treatments, semi-digitised tax processes, and multi-jurisdictional rules that go beyond our standard tool.',
		serviceType: 'Tax Technology Consulting',
		provider: { '@id': 'https://vatmiraal.be/#organization' },
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'info@vatmiraal.be',
			contactType: 'sales'
		}
	};
</script>

<svelte:head>
	<title>Custom VAT Automation — VATmiraal</title>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<div id="page">
	<SectionHeader
		level="h1"
		title="Custom VAT automation, scoped to your context"
		subtitle="We work directly with accountants, enterprises, and government bodies: complex workflows, special VAT treatments, semi-digitised tax processes, multi-jurisdictional rules, and volumes or edge cases that our standard tool can't handle."
	/>

	<div id="steps">
		<Card>
			<div class="step">
				<span class="step-number">1</span>
				<div class="step-body">
					<h3>Discovery call</h3>
					<p>
						A short call to map your transaction types, data sources, and the VAT decisions that
						currently cost your team time. No commitment.
					</p>
				</div>
			</div>
		</Card>
		<Card>
			<div class="step">
				<span class="step-number">2</span>
				<div class="step-body">
					<h3>Scoped proposal</h3>
					<p>
						A fixed scope, fixed deliverables, and a timeline. Pricing reflects the complexity of
						the use case.
					</p>
				</div>
			</div>
		</Card>
		<Card>
			<div class="step">
				<span class="step-number">3</span>
				<div class="step-body">
					<h3>Build alongside you</h3>
					<p>
						We ship in reviewable increments. Your team sees progress weekly and can redirect before
						requirements ossify.
					</p>
				</div>
			</div>
		</Card>
	</div>

	<div id="cta">
		<p>Every engagement starts with a 30-minute conversation.</p>
		<Button href="mailto:info@vatmiraal.be" variant="primary">Book a discovery call</Button>
		<Button href={resolve('/')} variant="ghost">← Back to home</Button>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--space-24) var(--section-padding-x) var(--space-20);
		gap: var(--space-20);
		max-width: var(--container-narrow);
		margin: 0 auto;
		box-sizing: border-box;
	}

	#steps {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		width: 100%;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: var(--space-5);
		text-align: left;
	}

	.step-number {
		flex-shrink: 0;
		width: 2em;
		height: 2em;
		border-radius: var(--radius-pill);
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		font-size: 0.9em;
		font-weight: var(--font-weight-bold);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step-body h3 {
		font-size: var(--h3-card);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-snug);
		margin: 0 0 var(--space-2);
	}

	.step-body p {
		font-size: var(--font-size-base);
		color: var(--color-text-muted);
		line-height: var(--line-height-base);
		margin: 0;
	}

	#cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		text-align: center;
	}

	#cta > p {
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-medium);
		margin: 0;
	}

	@media (max-width: 768px) {
		#page {
			padding: var(--section-padding-y-mobile) var(--section-padding-x-mobile);
			gap: var(--space-14, 3.5rem);
		}
	}
</style>
