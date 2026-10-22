<script lang="ts">
	import { resolve } from '$app/paths';
	import { tr } from '$lib/translation/i18n';

	let m = $derived(tr());
	let hp = $derived(m.heimdall.page);
</script>

<svelte:head>
	<title>Heimdall — VATmiraal</title>
	<meta name="description" content={hp.sub} />
</svelte:head>

<section class="heimdall">
	<div class="divider"></div>
	<span class="kicker">{hp.kicker}</span>
	<h1>Heimdall</h1>
	<p class="sub">{hp.sub}</p>

	<div class="video">
		<iframe
			referrerpolicy="strict-origin-when-cross-origin"
			src="https://www.youtube.com/embed/mRUog4OA9jE?autoplay=1&mute=1&loop=1&playlist=mRUog4OA9jE&playsinline=1&rel=0&modestbranding=1&controls=0&disablekb=1&fs=0&iv_load_policy=3"
			title="Heimdall"
			allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
			allowfullscreen
			tabindex="-1"
		></iframe>
	</div>

	<a class="notify" href={resolve('/heimdall/pilot')}>{hp.notify}</a>
</section>

<style>
	.heimdall {
		flex: 1;
		min-height: calc(100vh - var(--header-total-height));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: clamp(0.6rem, 2vh, 1.5rem);
		padding: clamp(1rem, 4vh, 3rem) 6%;
		background: var(--color-bg-inverted);
		color: var(--color-text-on-dark);
	}

	.divider {
		width: 48px;
		height: 2px;
		background: var(--color-accent-on-dark);
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
		font-size: clamp(2.4rem, min(9vw, 9vh), 5.5rem);
		font-weight: var(--font-weight-heavy);
		letter-spacing: -0.04em;
		line-height: 1;
		color: var(--color-text-on-dark);
	}

	.sub {
		margin: 0;
		max-width: 560px;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-on-dark-muted);
	}

	.video {
		flex: 0 1 auto;
		min-height: 0;
		width: min(100%, 640px, calc((100dvh - var(--header-height) - 22rem) * 16 / 9));
		aspect-ratio: 16 / 9;
		margin-top: clamp(0rem, 1vh, 0.5rem);
		position: relative;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid rgba(248, 248, 246, 0.14);
		background: #000;
	}

	.video iframe {
		position: absolute;
		left: 0;
		top: -80px;
		display: block;
		width: 100%;
		height: calc(100% + 160px);
		border: 0;
		pointer-events: none;
	}

	.notify {
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-md);
		color: var(--color-accent-on-dark);
		text-decoration: none;
	}

	.notify:hover {
		color: var(--color-text-on-dark);
	}
</style>
