<script lang="ts">
	import { tr } from '$lib/translation/i18n';
	import linkedLogo from '$lib/assets/InBug-Black.png';

	interface IPerson {
		name: string;
		photo: string;
		linkedin: string;
		role: string;
		bio: string;
		creds: string[];
	}

	let m = $derived(tr());
	let t = $derived(m.team);

	// Names, photos and LinkedIn URLs are not translated.
	let people = $derived<IPerson[]>([
		{
			name: 'Jan De Meyer',
			photo: '/team-photo-1.jpg',
			linkedin: 'https://www.linkedin.com/in/jan-de-meyer-311372255/',
			...t.people.jan
		},
		{
			name: 'Niels Vandendriessche',
			photo: '/team-photo-2.jpg',
			linkedin: 'https://www.linkedin.com/in/niels-vandendriessche-00433984/',
			...t.people.niels
		}
	]);
</script>

<svelte:head>
	<title>{t.title} — VATmiraal</title>
	<meta name="description" content={t.sub} />
</svelte:head>

<section class="intro">
	<span class="divider"></span>
	<span class="kicker">{t.kicker}</span>
	<h1>{t.title}</h1>
	<p class="sub">{t.sub}</p>
</section>

<section class="grid-wrap">
	<div class="grid">
		{#each people as person (person.name)}
			<article class="card">
				<div class="photo">
					<img src={person.photo} alt={person.name} />
				</div>
				<div class="body">
					<div class="heading">
						<span class="role">{person.role}</span>
						<h2>{person.name}</h2>
					</div>
					<p class="bio">{person.bio}</p>
					<ul class="creds">
						{#each person.creds as cred (cred)}
							<li><span class="dot"></span><span>{cred}</span></li>
						{/each}
					</ul>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="linkedin" href={person.linkedin} target="_blank" rel="noopener noreferrer">
						<img src={linkedLogo} alt="" /><span>{t.linkedin}</span>
					</a>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-5);
		padding: clamp(3rem, 8vh, 5.5rem) var(--section-padding-x) clamp(2rem, 5vh, 3rem);
	}

	.divider {
		display: block;
		width: 48px;
		height: 2px;
		background: var(--color-accent);
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
		max-width: 820px;
		font-size: var(--h2-section);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
	}

	.sub {
		margin: 0;
		max-width: 620px;
		font-size: var(--font-size-md);
		line-height: var(--line-height-snug);
		color: var(--color-text-muted);
	}

	.grid-wrap {
		display: flex;
		justify-content: center;
		padding: 0 var(--section-padding-x) var(--section-padding-y);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: var(--space-6);
		width: 100%;
		max-width: 960px;
	}

	.card {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background: var(--color-bg-elevated);
		box-shadow: var(--shadow-md);
		overflow: hidden;
	}

	.photo {
		aspect-ratio: 4 / 3.4;
		overflow: hidden;
		background: var(--color-bg-subtle);
	}

	.photo img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 22%;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: clamp(1.5rem, 3.5vw, 2.25rem);
		flex: 1;
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.role {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		letter-spacing: var(--letter-spacing-wide);
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.4rem, 2.4vw, 1.75rem);
		font-weight: var(--font-weight-heavy);
		letter-spacing: var(--letter-spacing-tight);
		line-height: var(--line-height-tight);
	}

	.bio {
		margin: 0;
		min-height: calc(var(--font-size-base) * 1.65 * 3);
		font-size: var(--font-size-base);
		line-height: var(--line-height-base);
		color: var(--color-text-muted);
	}

	.creds {
		flex: 1;
		list-style: none;
		margin: 0;
		padding: var(--space-4) 0 0;
		border-top: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.creds li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: var(--font-size-sm);
		line-height: 1.5;
		color: var(--color-text);
	}

	.dot {
		flex: none;
		width: 6px;
		height: 6px;
		margin-top: 0.5em;
		border-radius: var(--radius-pill);
		background: var(--color-accent);
	}

	.linkedin {
		margin-top: auto;
		padding-top: var(--space-2);
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-weight: var(--font-weight-semibold);
		color: var(--color-accent);
		text-decoration: none;
	}

	.linkedin:hover {
		color: var(--color-accent-hover);
	}

	.linkedin img {
		display: block;
		width: 1.1em;
		height: auto;
	}
</style>
