<script>
	import { resolve } from '$app/paths';

	import emailIcon from '$lib/assets/email-logo.svg';
	import linkedLogo from '$lib/assets/InBug-Black.png';
</script>

<div id="header">
	<h1 id="vatmiraal"><a href={resolve('/')}>VATmiraal</a></h1>
	<div id="social-media">
		<a href="mailto:info@vatmiraal.be"><img src={emailIcon} alt="email logo" /></a>
		<a href="https://www.linkedin.com/company/vatmiral" target="_blank"
			><img src={linkedLogo} alt="linkeding InBug-black logo" /></a
		>
	</div>
</div>

<style>
	:global(:root) {
		--header-margin: 2.5%;
		--header-height: 3em;
		--header-margin-top: 1.5em;
		--header-total-height: calc(var(--header-height) + var(--header-margin-top));
	}

	#header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: var(--header-height);
		margin-top: var(--header-margin-top);
	}

	#social-media {
		display: flex;

		margin-right: var(--header-margin);

		column-gap: 3em;
	}

	#vatmiraal {
		margin-left: var(--header-margin);
		font-size: 3em;
		font-weight: bolder;
	}

	#vatmiraal a {
		color: black;
		text-decoration: none;
	}

	#social-media img {
		display: block;

		width: 3em;
		height: auto;
		object-fit: contain;
	}

	@media (max-width: 768px) {
		#vatmiraal {
			font-size: 1.8em;
		}

		#social-media {
			column-gap: 1.5em;
		}

		#social-media img {
			width: 2em;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#vatmiraal {
			font-size: 2.2em;
		}

		#social-media {
			column-gap: 2em;
		}

		#social-media img {
			width: 2.5em;
		}
	}
</style>
