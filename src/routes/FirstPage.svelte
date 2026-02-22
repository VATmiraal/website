<script>
	import { resolve } from '$app/paths';
	import arrowDown from '$lib/assets/arrow-down.svg';
</script>

<div id="page">
	<h1 id="hero-heading">VAT compliance,<br>made intelligent.</h1>
	<p>
		Explainable AI for confident VAT decisions — built for accountants and tax professionals.
	</p>
	<a id="join-beta" href={resolve('/join_beta')}> Join the Beta </a>
	<img id="arrow" src={arrowDown} alt="arrow down" />
</div>

<style>
	#hero-heading {
		font-size: clamp(2.2rem, 5vw, 4rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.05;
		text-align: center;
		margin: 0;
		max-width: 700px;
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
	}

	#join-beta {
		font-size: 1.7em;
		background-color: #0f0f0f;
		color: #ffffff;
		border: 2px solid #0f0f0f;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		letter-spacing: 0.01em;
		padding: 0.45em 1.2em;
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
		animation-delay: calc(var(--intro-animation-duration) * 0.8);
		transition: background-color 0.22s ease, color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
	}

	#join-beta:hover {
		background-color: #ffffff;
		color: #0f0f0f;
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	#arrow {
		--arrow-height: 20vh;

		display: block;

		width: auto;
		height: var(--arrow-height);
		object-fit: contain;

		position: relative;

		bottom: calc(var(--arrow-height) / 1.7);
		margin-top: auto;
	}

	p {
		width: 35vw;
		font-weight: 400;
		text-align: center;
		font-size: 1.6em;
		padding: 1em;
		letter-spacing: -0.01em;
		line-height: 1.55;
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
		animation-delay: calc(var(--intro-animation-duration) * 0.4);
	}

	@keyframes fade-up {
		0% {
			opacity: 0;
			transform: translateY(16px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	#page {
		--intro-animation-duration: 2s;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		gap: 2.5rem;

		padding-top: 0;
		height: calc(100vh - var(--header-total-height));
	}

	@media (max-width: 768px) {
		#hero-heading {
			font-size: clamp(1.8rem, 8vw, 2.8rem);
		}

		p {
			width: 85vw;
			font-size: 1.2em;
		}

		#join-beta {
			font-size: 1.3em;
		}

		#page {
			gap: 2rem;
			padding-top: 0;
		}

		#arrow {
			visibility: hidden;
		}

		#join-beta:hover {
			transform: translateY(0px);
			box-shadow: none;
		}
	}

	@media (min-width: 400px) and (max-width: 1024px) {
		p {
			width: 60vw;
			font-size: 1.3em;
		}

		#page {
			gap: 2rem;
		}

		#arrow {
			visibility: hidden;
		}

		#join-beta:hover {
			transform: translateY(0px);
			box-shadow: none;
		}
	}
</style>
