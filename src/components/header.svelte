<script>
	import { resolve } from '$app/paths';

	import emailIcon from '$lib/assets/email-logo.svg';
	import linkedLogo from '$lib/assets/InBug-Black.png';
</script>

<div id="header">
	<h1 id="vatmiraal"><a href={resolve('/')}>VATmiraal</a></h1>
	<nav id="nav-links">
		<a href={resolve('/custom_solutions')}>Custom Solutions</a>
		<a href={resolve('/join_beta')}>Join the Beta</a>
		<a href={resolve('/blog')}>Blog</a>
	</nav>
	<div id="social-media">
		<a href="mailto:info@vatmiraal.be"><img src={emailIcon} alt="email logo" /></a>
		<a href="https://www.linkedin.com/company/vatmiraal" target="_blank" rel="noopener noreferrer"
			><img src={linkedLogo} alt="LinkedIn logo" /></a
		>
	</div>
</div>

<style>
	:global(:root) {
		--header-margin: 2.5%;
		--header-height: 3.5rem;
		--header-margin-top: 0;
		--header-total-height: 3.5rem;
	}

	#header {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: var(--header-height);
		margin-top: 0;
		padding: 0 2.5%;
		box-sizing: border-box;
		background: rgba(248, 248, 246, 0.92);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	#nav-links {
		display: flex;
		align-items: center;
		gap: 2.5em;
	}

	#nav-links a {
		color: #0f0f0f;
		text-decoration: none;
		font-weight: 500;
		font-size: 1.2em;
		transition: opacity 0.2s ease;
	}

	#nav-links a:hover {
		opacity: 0.55;
	}

	#social-media {
		display: flex;
		column-gap: 3em;
	}

	#vatmiraal {
		font-size: 2em;
		font-weight: bolder;
		text-align: center;
		margin: 0;
	}

	#vatmiraal a {
		color: black;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	#vatmiraal a:hover {
		opacity: 0.65;
	}

	#social-media img {
		display: block;

		width: 2em;
		height: auto;
		object-fit: contain;
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	#social-media a:hover img {
		opacity: 0.65;
		transform: translateY(-2px);
	}

	@media (max-width: 480px) {
		#nav-links a {
			font-size: 0.75em;
		}

		#nav-links {
			gap: 1em;
		}

		#social-media {
			column-gap: 1em;
		}

		#social-media img {
			width: 1.5em;
		}
	}

	@media (min-width: 481px) and (max-width: 768px) {
		#nav-links a {
			font-size: 0.85em;
		}

		#nav-links {
			gap: 1.5em;
		}

		#social-media {
			column-gap: 1.5em;
		}

		#social-media img {
			width: 1.75em;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		#social-media {
			column-gap: 2em;
		}

		#social-media img {
			width: 2.5em;
		}
	}
</style>
