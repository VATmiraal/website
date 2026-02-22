<script lang="ts">
	import type { IVatmiraalArg } from './ArgumentBox.svelte';
	import ArgumentBox from './ArgumentBox.svelte';

	const naturalInput: IVatmiraalArg = {
		title: 'Natural Input For VAT analysis',
		args: ['Text', 'Documents', 'Email chains']
	};

	const enterpriseProduct: IVatmiraalArg = {
		title: 'Enterprise Product',
		args: [
			'Integrate your existing stack',
			'No vendor lock-in',
			'Processes hundreds of transactions per second'
		]
	};

	const businessPlaning: IVatmiraalArg = {
		title: 'Integrated with Business Planing',
		args: ['Combine tax planning with logistic constraints', 'Just-In-Time calculation']
	};

	const vatmiraalArgs: IVatmiraalArg[] = [naturalInput, enterpriseProduct, businessPlaning];
</script>

<div id="page">
	<p id="why-vatmiraal">Why VATmiraal</p>
	<div id="arguments">
		{#each vatmiraalArgs as arg (arg)}
			<ArgumentBox {...arg} />
		{/each}
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		gap: 4rem;
		padding: 6rem 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	#why-vatmiraal {
		width: 35vw;
		text-align: center;
		font-size: 2.6em;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
		margin: 0;
	}

	#arguments {
		display: flex;
		justify-content: center;

		gap: 6vw;
	}

	@media (max-width: 768px) {
		#page {
			height: auto;
			gap: 2.5rem;
			padding-bottom: 3rem;
		}

		#why-vatmiraal {
			width: 85vw;
			font-size: 1.8em;
		}

		#arguments {
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#page {
			height: auto;
			gap: 3rem;
			padding-bottom: 3rem;
		}

		#why-vatmiraal {
			width: 60vw;
			font-size: 2.2em;
		}

		#arguments {
			gap: 3vw;
		}
	}
</style>
