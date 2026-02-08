<script>
	import { resolve } from '$app/paths';
	import arrowDown from '$lib/assets/arrow-down.svg';
</script>

<div id="page">
	<p>
		VATmiraal is an explainable neuro-symbolic AI tool that provides VAT assistance to accountants
		and tax professionals, enabling confident decision-making in their work.
	</p>
	<a id="join-beta" href={resolve('/join_beta')}> Join the Beta </a>
	<img id="arrow" src={arrowDown} alt="arrow down" />
</div>

<style>
	#join-beta {
		--join-beta-border-width: 2.5px;
		font-size: 1.7em;
		border: solid var(--join-beta-border-width);

		padding-right: 25px;
		padding-left: 25px;

		padding-top: 5px;
		padding-bottom: 5px;

		color: black;
		text-decoration: none;

		font-weight: bold;

		animation: shake 1s ease-out;
		animation-delay: var(--intro-animation-duration);
	}

	#join-beta:hover {
		transform: translateY(-3px);
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-12px);
		}
		20% {
			transform: translateX(12px);
		}
		30% {
			transform: translateX(-10px);
		}
		40% {
			transform: translateX(10px);
		}
		50% {
			transform: translateX(-8px);
		}
		60% {
			transform: translateX(8px);
		}
		70% {
			transform: translateX(-5px);
		}
		80% {
			transform: translateX(5px);
		}
		90% {
			transform: translateX(-2px);
		}
	}

	#arrow {
		--arrow-height: 20vh;
		margin-top: auto;

		display: block;

		width: auto;
		height: var(--arrow-height);
		object-fit: contain;

		position: relative;

		bottom: calc(var(--arrow-height) / 2 + 2%);
	}

	p {
		width: 35vw;
		font-weight: bold;
		text-align: center;
		font-size: 1.6em;
		font-weight: bold;
		padding: 1em;
		border-radius: 8px;
		animation: border-glow var(--intro-animation-duration) ease-out forwards;
	}

	@keyframes border-glow {
		0% {
			box-shadow:
				0 0 0 4px #002395,
				0 0 30px rgba(0, 35, 149, 0.6);
		}
		33% {
			box-shadow:
				0 0 0 4px #10b981,
				0 0 30px rgba(16, 185, 129, 0.6);
		}
		66% {
			box-shadow:
				0 0 0 4px #ed2939,
				0 0 25px rgba(237, 41, 57, 0.5);
		}
		100% {
			box-shadow:
				0 0 0 4px black,
				0 0 25px transparent;
		}
	}

	#page {
		--intro-animation-duration: 2s;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;

		gap: 17vh;

		padding-top: 12vh;
		height: calc(100vh - var(--header-total-height));
	}

	@media (max-width: 768px) {
		p {
			width: 85vw;
			font-size: 1.2em;
		}

		#join-beta {
			font-size: 1.3em;
		}

		#page {
			gap: 8%;
			padding-top: 8vh;
		}

		#arrow {
			--arrow-height: 12vh;
		}
	}

	@media (min-width: 400px) and (max-width: 1024px) {
		p {
			width: 60vw;
			font-size: 1.3em;
		}

		#page {
			gap: 12%;
		}

		#arrow {
			--arrow-height: 15vh;
		}
	}
</style>
