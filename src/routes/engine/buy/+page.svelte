<script lang="ts">
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import FormspreeForm from '$lib/components/FormspreeForm.svelte';

	interface IOption {
		k: string;
		label: string;
		desc: string;
	}

	let m = $derived(tr());
	let b = $derived(m.buy);
	let opts = $derived(b.opts as IOption[]);
	let volumes = $derived(b.volumes as string[]);

	let buyPick = $state('both');
</script>

<svelte:head>
	<title>{b.title} — VATmiraal</title>
	<meta name="description" content={b.sub} />
</svelte:head>

<section class="page">
	<div class="wrap">
		<header class="intro">
			<span class="divider"></span>
			<span class="kicker">{b.kicker}</span>
			<h1>{b.title}</h1>
			<p class="sub">{b.sub}</p>
		</header>

		<FormspreeForm
			subject="Buy the engine & agent"
			successTitle={b.doneTitle}
			successMessage={b.doneSub}
			redirectTo="/"
			backLabel={b.back}
		>
			<input type="hidden" name="interest" value={buyPick} />

			<div class="buy-body">
				<fieldset class="interest">
					<legend>{b.f.interest}</legend>
					<div class="options">
						{#each opts as o (o.k)}
							<button
								type="button"
								class="option"
								class:active={buyPick === o.k}
								aria-pressed={buyPick === o.k}
								onclick={() => (buyPick = o.k)}
							>
								<span class="opt-label">{o.label}</span>
								<span class="opt-desc">{o.desc}</span>
							</button>
						{/each}
					</div>
				</fieldset>

				<div class="grid">
					<label class="field"
						>{b.f.name}<input name="name" type="text" autocomplete="name" required /></label
					>
					<label class="field"
						>{b.f.email}<input name="email" type="email" autocomplete="email" required /></label
					>
					<label class="field"
						>{b.f.company}<input
							name="company"
							type="text"
							autocomplete="organization"
							required
						/></label
					>
					<label class="field">{b.f.role}<input name="role" type="text" /></label>
				</div>

				<label class="field"
					>{b.f.volume}<select name="volume">
						{#each volumes as v (v)}
							<option value={v}>{v}</option>
						{/each}
					</select></label
				>

				<label class="field"
					>{b.f.message}<textarea name="message" rows="5" placeholder={b.f.messagePh}
					></textarea></label
				>

				<div class="submit-row">
					<label class="consent">
						<input type="checkbox" name="consent" value={b.privacy} required />
						<span>{b.privacy}</span>
					</label>
					<Button type="submit" variant="primary" size="lg">{b.submit}</Button>
				</div>
			</div>
		</FormspreeForm>
	</div>
</section>

<style>
	.page {
		display: flex;
		justify-content: center;
		min-height: calc(100vh - var(--header-total-height));
		padding: var(--section-padding-y) var(--section-padding-x);
		box-sizing: border-box;
	}

	.wrap {
		width: 100%;
		max-width: var(--container-narrow);
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-3);
	}

	.divider {
		width: 48px;
		height: 2px;
		background: var(--color-accent);
		margin-bottom: var(--space-3);
	}

	.kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	h1 {
		margin: 0;
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		font-size: var(--h2-section);
		text-wrap: balance;
	}

	.sub {
		margin: 0;
		max-width: 600px;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.buy-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		padding: clamp(1.5rem, 4vw, 2.5rem);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
	}

	/* Fields */
	.field {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text);
	}

	.field input,
	.field select,
	.field textarea {
		width: 100%;
		box-sizing: border-box;
		padding: 0.8em 0.9em;
		font: inherit;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-regular);
		color: var(--color-text);
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-md);
		outline: none;
		transition:
			border-color var(--duration-fast) var(--easing),
			box-shadow var(--duration-fast) var(--easing);
	}

	.field textarea {
		resize: vertical;
		line-height: var(--line-height-base);
	}

	.field input:focus,
	.field select:focus,
	.field textarea:focus {
		border-color: var(--color-accent);
		box-shadow: 0 0 0 4px var(--color-accent-tint);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--space-5);
	}

	/* Interest selector */
	.interest {
		margin: 0;
		padding: 0;
		border: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.interest legend {
		padding: 0;
		margin-bottom: var(--space-3);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text);
	}

	.options {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: var(--space-3);
	}

	.option {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-1);
		padding: var(--space-4);
		text-align: left;
		font: inherit;
		cursor: pointer;
		border-radius: var(--radius-md);
		background: var(--color-bg-elevated);
		color: var(--color-text);
		border: 1px solid var(--color-border-strong);
		transition:
			border-color var(--duration-fast) var(--easing),
			background-color var(--duration-fast) var(--easing),
			box-shadow var(--duration-fast) var(--easing);
	}

	.option:hover {
		border-color: var(--color-accent);
	}

	.option.active {
		background: var(--color-accent-tint);
		color: var(--color-accent);
		border-color: var(--color-accent);
		box-shadow: 0 0 0 1px var(--color-accent);
	}

	.opt-label {
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-base);
	}

	.opt-desc {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-snug);
		opacity: 0.75;
	}

	/* Consent + submit */
	.submit-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		flex-wrap: wrap;
		padding-top: var(--space-2);
	}

	.consent {
		flex: 1 1 260px;
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-regular);
		line-height: var(--line-height-base);
		color: var(--color-text-muted);
		cursor: pointer;
	}

	.consent input {
		flex: none;
		width: 18px;
		height: 18px;
		margin: 2px 0 0;
		accent-color: var(--color-accent);
		cursor: pointer;
	}
</style>
