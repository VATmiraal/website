<script>
	import { resolve } from '$app/paths';
	import arrowDown from '$lib/assets/arrow-down.svg';
</script>

<div id="page-1">
	<p>
		VATmiraal is an explainable neuro-symbolic AI tool that provides VAT assistance to accountants
		and tax professionals, enabling confident decision-making in their work.
	</p>
	<a id="join-beta" href={resolve('/join_beta')}> Join the Beta </a>
	<img id="arrow" src={arrowDown} alt="arrow down" />
</div>

<style>
	#join-beta {
		font-size: 1.3em;
		border: solid 2.5px;

		padding-right: 25px;
		padding-left: 25px;

		padding-top: 5px;
		padding-bottom: 5px;

		color: black;
		text-decoration: none;

		font-weight: bold;
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
		font-size: 1.5em;
		font-weight: bold;
	}

	#page-1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;

		gap: 17%;

		padding-top: 12vh;
		height: calc(100vh - var(--header-total-height));
	}
</style>
