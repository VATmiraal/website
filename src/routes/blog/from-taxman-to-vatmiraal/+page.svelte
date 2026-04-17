<script lang="ts">
	import BlogArticle from '../components/blog-article.svelte';
	import type { IBlogPostData } from '$lib/types';

	let { data }: { data: IBlogPostData } = $props();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law',
		datePublished: '2026-03-22',
		author: {
			'@type': 'Person',
			name: 'Jan De Meyer'
		},
		publisher: { '@id': 'https://vatmiraal.be/#organization' },
		url: 'https://vatmiraal.be/blog/from-taxman-to-vatmiraal',
		description:
			'A history of computational legal reasoning, from symbolic AI and expert systems to LLMs and neuro-symbolic architectures, and how VATmiraal fits in.'
	};
</script>

<svelte:head>
	<title>From TAXMAN to VATmiraal &mdash; VATmiraal Blog</title>
	<meta
		name="description"
		content="A history of computational legal reasoning, from symbolic AI and expert systems to LLMs and neuro-symbolic architectures."
	/>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<${'script'} type="application/ld+json">${JSON.stringify(schema)}<${'/script'}>`}
</svelte:head>

<BlogArticle
	title="From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law"
	meta={`${data.readingTime} min read · March 2026`}
	backHref="/blog"
	backLabel="All posts"
>
	<section class="prose">
		<p>
			For fifty years, people have wanted a computer that knows tax law. Not a search tool that
			retrieves statutes &mdash; a system that takes a real transaction and says: this is what the
			law concludes, and here is the article that says so.
		</p>
		<p>
			The problem keeps attracting new generations because law looks, superficially, like logic.
			Statutes are written down. Articles have conditions and consequences. The match to a
			rule-based program feels obvious.
		</p>
		<p>
			It has never quite worked out. Each generation has solved one half of the problem and gotten
			stuck on the other. It's worth knowing why.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The symbolic era (1970s&ndash;1993)</h2>
		<p>
			The first serious attempt was <strong>TAXMAN</strong>, built at Rutgers in 1977 by L. Thorne
			McCarty. It tried to model U.S. corporate tax reorganisation rules in micro-PLANNER. The
			deterministic core worked. Terms like <em>continuity of interest</em> resisted any formal definition
			and broke the system at its edges.
		</p>
		<p>
			Around the same time, Alain Colmerauer's <strong>Prolog</strong> (1972) gave the field a
			natural, powerful way to encode legal rules as logical assertions. The hardware of the period
			couldn't yet keep up with what Prolog could express &mdash; but decades of work on term
			indexing and smarter resolution strategies, alongside Moore's law, have since opened the
			language up to an even wider range of applications without heavy performance-driven
			engineering. Prolog remains one of the cleanest tools we have for encoding law as logic.
		</p>
		<p>
			The commercial expert-system wave that followed in the mid-1980s promised to capture expert
			judgment in if-then rule bases. By 1993 most of those products had collapsed. Every
			legislative change demanded a re-engineering project. Edge cases failed silently. The
			underlying mistake was treating <em>formalisation</em> as though it were the same thing as
			<em>coverage</em>.
		</p>
		<p>
			What the era got right: deterministic rules belong in formal logic, and every conclusion
			needs to be traceable to a specific clause. Those principles hold up today.
		</p>
		<p>
			What it missed: encoding rules is the <em>second</em> problem. The first is extracting the structured
			facts those rules consume from a messy invoice, email, or ledger line.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The quiet formalisers (2001&ndash;2021)</h2>
		<p>
			A more restrained tradition kept working in parallel without making claims about intelligence.
		</p>
		<p>
			<strong>Drools</strong> (2001) became the standard production rule engine for genuinely
			deterministic business logic. Insurers and tax authorities have used it for years to run
			provisions that admit no ambiguity. It doesn't try to read anything.
		</p>
		<p>
			The more interesting advance was <strong>Catala</strong>, released by Denis Merigoux at INRIA
			in 2021. Catala is a programming language designed to formalise legislation, and its one
			defining idea is that source code sits <em>interleaved with the statutory text it implements</em>:
			the article is a comment, the code sits directly underneath. Any divergence between law and
			implementation is immediately visible. The French government used Catala to formally verify
			parts of its family-benefits legislation.
		</p>
		<p>
			What Catala deliberately doesn't do is extract facts from natural language. A human still has
			to read the document, understand the context, and feed the engine structured inputs. For
			compliance work at scale, that bottleneck stayed open.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The LLM turn</h2>
		<p>
			Transformer-based language models closed the fact-extraction gap almost overnight. Given a
			contract or an invoice, a modern LLM can identify parties, classify the transaction, and
			surface the provisions at issue. The unstructured half of the problem became tractable.
		</p>
		<p>
			The catch is what happens when those same models are asked to <em>decide</em> what the law says.
			LLMs are probabilistic. They return the most statistically plausible answer, which on common
			scenarios is usually correct, and which on edge cases goes wrong in specific ways:
		</p>
		<ul>
			<li>They cannot distinguish "unknown" from "false". Missing information is silently assumed away.</li>
			<li>They are not consistent. The same scenario, rephrased, can produce a different answer.</li>
			<li>They hallucinate citations. Article numbers that sound right but don't exist.</li>
		</ul>
		<p>
			A system that is often right is fine for search. It is not fine when you get tax penalties.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>VATmiraal</h2>
		<p>
			VAT is a good fit for this history. The EU VAT Directive, the national transpositions, and
			the ECJ case law cover a space that is mostly deterministic. Whether reverse charge applies
			to a given B2B transaction, for a standard case, is not a matter of interpretation: either
			the conditions hold or they don't.
		</p>
		<p>
			VATmiraal runs in two stages. A language model reads the transaction &mdash; invoice, ledger
			line, or short description &mdash; and extracts the structured facts the rules need: supplier
			country, customer status, object type, VAT identifiers, place-of-supply inputs. That
			representation is then handed to a Prolog-based knowledge base that encodes the statutory
			rules directly.
		</p>
		<p>
			The logic engine does not guess. For every transaction it either produces a conclusion
			together with the specific articles applied, or it reports that a required fact is missing
			and says which one. When a scenario touches provisions that don't admit a clean formal
			answer, it says so and stops, instead of manufacturing confidence.
		</p>
		<p>
			The contrast with existing VAT tooling is narrow but important. Most commercial tools work
			as lookup tables: country pair &times; supply type &times; customer category, return an
			answer. You get the <em>what</em>, not the <em>why</em>. That's adequate for routine domestic
			cases. It becomes a liability the moment you need to defend a position &mdash; to an auditor,
			to a tax authority, or to yourself six months later when the context has drained out of your
			head.
		</p>
	</section>

	<hr />

	<section class="prose closing">
		<p>
			You cannot defend an audit position you cannot explain. The premise of VATmiraal is that every
			VAT decision should arrive with its justification attached, or not arrive at all.
		</p>
	</section>

	<footer id="author">
		<p>
			<em>
				Jan De Meyer is the founder of VATmiraal (vatmiraal.be), a neuro-symbolic VAT compliance
				system.
			</em>
		</p>
	</footer>
</BlogArticle>

<style>
	#author {
		margin-top: var(--space-10);
		padding-top: var(--space-8);
		border-top: 1px solid var(--color-border);
	}

	#author p {
		font-size: var(--font-size-sm);
		color: var(--color-text-subtle);
		line-height: var(--line-height-base);
		margin: 0;
	}
</style>
