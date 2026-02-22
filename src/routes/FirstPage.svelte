<script>
	import { resolve } from '$app/paths';
</script>

<div id="page">
	<h1 id="hero-heading">VAT complexity,<br />made clear.</h1>
	<p id="slogan">Explainable AI for confident VAT decisions<br />built for accountants and tax professionals.</p>
	<a id="join-beta" href={resolve('/join_beta')}> Join the Beta </a>
</div>

<style>
	#page {
		--intro-animation-duration: 2s;

		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding-bottom: 14vh;
		height: calc(100vh - var(--header-total-height));
	}

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

	#slogan {
		width: 35vw;
		font-weight: 400;
		text-align: center;
		font-size: 1.6em;
		padding: 0;
		margin: 1.25rem 0 0;
		letter-spacing: -0.01em;
		line-height: 1.35;
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
		animation-delay: calc(var(--intro-animation-duration) * 0.4);
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
		margin-top: 2.5rem;
		opacity: 0;
		animation: fade-up var(--intro-animation-duration) ease-out forwards;
		animation-delay: calc(var(--intro-animation-duration) * 0.8);
		transition:
			background-color 0.22s ease,
			color 0.22s ease,
			transform 0.22s ease,
			box-shadow 0.22s ease;
	}

	#join-beta:hover {
		background-color: #ffffff;
		color: #0f0f0f;
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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

	@media (max-width: 768px) {
		#page {
			padding-bottom: 0;
		}

		#hero-heading {
			font-size: clamp(1.8rem, 8vw, 2.8rem);
		}

		#slogan {
			width: 85vw;
			font-size: 1.2em;
			margin-top: 1rem;
		}

		#join-beta {
			font-size: 1.3em;
			margin-top: 2rem;
		}

		#join-beta:hover {
			transform: translateY(0px);
			box-shadow: none;
		}
	}

	@media (min-width: 400px) and (max-width: 1024px) {
		#page {
			padding-bottom: 8vh;
		}

		#slogan {
			width: 60vw;
			font-size: 1.3em;
			margin-top: 1rem;
		}

		#join-beta {
			margin-top: 2rem;
		}

		#join-beta:hover {
			transform: translateY(0px);
			box-shadow: none;
		}
	}
</style>
