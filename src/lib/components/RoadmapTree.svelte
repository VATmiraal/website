<script module lang="ts">
	export interface IRoadmapLeaf {
		title: string;
	}

	export interface IRoadmapBranch {
		root: string;
		leaves: IRoadmapLeaf[];
	}
</script>

<script lang="ts">
	interface IRoadmapTreeProps {
		branches: IRoadmapBranch[];
	}

	let { branches }: IRoadmapTreeProps = $props();
</script>

<div class="tree" role="group" aria-label="Roadmap of planned features">
	{#each branches as branch (branch.root)}
		<article class="branch">
			<h3 class="root">{branch.root}</h3>
			<ul class="leaves">
				{#each branch.leaves as leaf (leaf.title)}
					<li>{leaf.title}</li>
				{/each}
			</ul>
		</article>
	{/each}
</div>

<style>
	.tree {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: var(--space-16);
		width: 100%;
	}

	.branch {
		display: flex;
		flex-direction: column;
		min-width: 220px;
	}

	.root {
		position: relative;
		margin: 0;
		padding: 0 0 0.75em 0;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-heavy);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text);
	}

	/* stub dropping from root label into the trunk */
	.root::after {
		content: '';
		position: absolute;
		left: 0.5em;
		bottom: 0;
		width: 1.5px;
		height: 0.55em;
		background: var(--color-accent);
	}

	.leaves {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.leaves li {
		position: relative;
		padding: 0.4em 0 0.4em 1.9em;
		font-size: var(--font-size-base);
		color: var(--color-text);
		line-height: 1.4;
	}

	/* vertical trunk */
	.leaves li::before {
		content: '';
		position: absolute;
		left: 0.5em;
		top: 0;
		bottom: 0;
		width: 1.5px;
		background: var(--color-accent);
	}

	/* last leaf: trunk stops at midpoint */
	.leaves li:last-child::before {
		height: 50%;
		bottom: auto;
	}

	/* horizontal stub into the leaf text */
	.leaves li::after {
		content: '';
		position: absolute;
		left: 0.5em;
		top: 50%;
		width: 0.9em;
		height: 1.5px;
		background: var(--color-accent);
		transform: translateY(-50%);
	}

	@media (max-width: 900px) {
		.tree {
			flex-direction: column;
			align-items: center;
			gap: var(--space-10);
			max-width: 440px;
			margin: 0 auto;
		}
	}
</style>
