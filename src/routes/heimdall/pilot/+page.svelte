<script lang="ts">
	import { tr } from '$lib/translation/i18n';
	import Button from '$lib/components/Button.svelte';
	import FormspreeForm from '$lib/components/FormspreeForm.svelte';

	let m = $derived(tr());
	let f = $derived(m.heimdall.form);
</script>

<svelte:head>
	<title>{f.title} — Heimdall</title>
	<meta name="description" content={f.sub} />
</svelte:head>

<section class="pilot">
	<div class="intro">
		<span class="kicker">{f.kicker}</span>
		<h1>{f.title}</h1>
		<p class="sub">{f.sub}</p>
	</div>

	<div class="card">
		<FormspreeForm
			subject="Heimdall pilot license"
			endpoint="https://formspree.io/f/xbggrpzn"
			successTitle={f.doneTitle}
			successMessage={f.doneSub}
			redirectTo="/heimdall"
			backLabel={f.back}
		>
			<div class="form-group">
				<label for="name">{f.name}</label>
				<input id="name" name="name" type="text" autocomplete="name" required />
			</div>

			<div class="form-group">
				<label for="email">{f.email}</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="you@firm.be"
					autocomplete="email"
					required
				/>
			</div>

			<div class="form-group">
				<label for="firm">{f.firm} <span class="hint">· {f.firmHint}</span></label>
				<input id="firm" name="firm" type="text" autocomplete="organization" />
			</div>

			<label class="consent">
				<input type="checkbox" name="consent" value={f.consent} required />
				<span>{f.consent}</span>
			</label>

			<div class="submit-wrap">
				<Button type="submit" variant="primary" size="lg">{f.submit}</Button>
			</div>
		</FormspreeForm>
	</div>
</section>

<style>
	.pilot {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-10);
		min-height: calc(100vh - var(--header-total-height));
		padding: clamp(3rem, 8vh, 5rem) 5%;
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
		box-sizing: border-box;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-4);
		max-width: 560px;
	}

	.kicker {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-on-dark-faint);
	}

	h1 {
		margin: 0;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: var(--color-text-on-dark);
	}

	.sub {
		margin: 0;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-on-dark-muted);
	}

	.card {
		width: 100%;
		max-width: 480px;
		padding: clamp(1.5rem, 4vw, 2.5rem);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		color: var(--color-text);
		box-shadow: var(--shadow-lg);
	}

	.hint {
		font-weight: var(--font-weight-regular);
		color: var(--color-text-faint);
	}
</style>
