<script lang="ts">
	import { resolve } from '$app/paths';
	import { Play, Pause, Rewind, FastForward, Maximize, Minimize } from '@lucide/svelte';
	import { tr } from '$lib/translation/i18n';

	let m = $derived(tr());
	let hp = $derived(m.heimdall.page);

	let containerEl: HTMLDivElement | undefined = $state();
	let videoEl: HTMLVideoElement | undefined = $state();
	let playing = $state(true);
	let isFullscreen = $state(false);

	function togglePlay() {
		if (!videoEl) return;
		if (videoEl.paused) videoEl.play();
		else videoEl.pause();
	}
	function seek(delta: number) {
		if (!videoEl) return;
		const d = videoEl.duration || 0;
		videoEl.currentTime = Math.min(Math.max(0, videoEl.currentTime + delta), d);
	}
	function toggleFullscreen() {
		if (document.fullscreenElement) document.exitFullscreen();
		else containerEl?.requestFullscreen();
	}

	$effect(() => {
		const sync = () => (isFullscreen = document.fullscreenElement === containerEl);
		document.addEventListener('fullscreenchange', sync);
		return () => document.removeEventListener('fullscreenchange', sync);
	});

	// Press "F" anywhere on the page to toggle fullscreen.
	$effect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key !== 'f' && e.key !== 'F') return;
			const t = e.target as HTMLElement | null;
			if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
			e.preventDefault();
			toggleFullscreen();
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	});
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

	<div class="video" bind:this={containerEl}>
		<video
			bind:this={videoEl}
			class="player"
			src="/heimdall.mp4"
			autoplay
			muted
			loop
			playsinline
			preload="metadata"
			onplay={() => (playing = true)}
			onpause={() => (playing = false)}
		></video>
		<div class="controls">
			<button type="button" onclick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
				{#if playing}<Pause size={18} strokeWidth={2} />{:else}<Play
						size={18}
						strokeWidth={2}
					/>{/if}
			</button>
			<button type="button" onclick={() => seek(-10)} aria-label="Back 10 seconds">
				<Rewind size={18} strokeWidth={2} />
			</button>
			<button type="button" onclick={() => seek(10)} aria-label="Forward 10 seconds">
				<FastForward size={18} strokeWidth={2} />
			</button>
			<button
				type="button"
				onclick={toggleFullscreen}
				title={isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
				aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
			>
				{#if isFullscreen}<Minimize size={18} strokeWidth={2} />{:else}<Maximize
						size={18}
						strokeWidth={2}
					/>{/if}
			</button>
		</div>
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
		width: min(100%, 820px, calc((100dvh - var(--header-height) - 19rem) * 16 / 9));
		aspect-ratio: 16 / 9;
		margin-top: clamp(0rem, 1vh, 0.5rem);
		position: relative;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid rgba(248, 248, 246, 0.14);
		background: #000;
	}

	.player {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.controls {
		position: absolute;
		bottom: var(--space-3);
		right: var(--space-3);
		z-index: 2;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-1);
		border-radius: var(--radius-pill);
		background: rgba(15, 15, 15, 0.5);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		opacity: 0;
		transition: opacity var(--duration-base) var(--easing);
	}

	.video:hover .controls,
	.controls:focus-within {
		opacity: 1;
	}

	.controls button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		padding: 0;
		border: none;
		border-radius: var(--radius-pill);
		background: transparent;
		color: var(--color-text-on-dark);
		cursor: pointer;
		transition: background-color var(--duration-fast) var(--easing);
	}

	.controls button:hover {
		background: rgba(248, 248, 246, 0.16);
	}

	.video:fullscreen {
		width: 100%;
		height: 100%;
		max-width: none;
		aspect-ratio: auto;
		border: none;
		border-radius: 0;
	}

	.video:fullscreen .player {
		object-fit: contain;
	}

	.video:fullscreen .controls {
		opacity: 1;
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
