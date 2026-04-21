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
			For fifty years, people have wanted a computer that knows tax law. Not a search tool, but a
			system that takes a real transaction, determines its tax treatment, and shows its reasoning.
		</p>
		<p>
			The problem keeps attracting new generations because law looks, superficially, like code. An
			article states a condition, and when the condition holds, a consequence follows. It is a
			tempting analogy, but a misleading one. Statutes can be vague, and what is vague is difficult
			to formalise. Documents can be missing. And some questions can reduce to problems that are
			formally undecidable.
		</p>
		<p>
			It has never quite worked out. Successive efforts have each made real progress and then run
			into the some limits.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The symbolic era (1970s&ndash;1993)</h2>
		<p>
			The first serious attempt was <strong>TAXMAN</strong>, built at Rutgers in 1977 by L. Thorne
			McCarty. It tried to model U.S. corporate tax reorganisation rules in micro-PLANNER. The
			deterministic core worked, but concepts like <em>continuity of interest</em> resisted any
			formal definition, and the system could not be as generalised as hoped for.
		</p>
		<p>
			Around the same time, <a href="https://dl.acm.org/doi/abs/10.1145/234286.1057820"
				>Alain Colmerauer's <strong>Prolog</strong> (1972)</a
			>
			gave the field a natural and powerful way to encode legal rules as logical assertions, specifically
			as <a href="https://en.wikipedia.org/wiki/Horn_clause">Horn clauses</a>. The hardware of the
			era could not keep up with what the language could express, but decades of work gradually
			closed the gap.
			<a
				href="https://direct.mit.edu/books/monograph/4253/Warren-s-Abstract-MachineA-Tutorial-Reconstruction"
				>Warren's Abstract Machine</a
			>
			provided an abstract base on which optimisations could be built once and carried across concrete
			implementations. Better indexing techniques, such as
			<a href="https://www.swi-prolog.org/pldoc/man?section=jitindex">just-in-time indexing</a>
			and
			<a href="https://github.com/mthom/scryer-prolog#strings-and-partial-strings"
				>list compression</a
			>, combined with smarter resolution strategies, made execution efficient. Richer formalisms,
			including <a href="https://www.metalevel.at/prolog/dcg">DCGs</a> for list manipulation and
			<a href="https://www.metalevel.at/prolog/optimization">constraint logic</a> for arithmetic reasoning,
			extended what could be expressed cleanly. Steadily improving hardware did the rest. Together,
			these advances made Prolog practical for business use cases such as tax law. Writing Prolog is
			demanding, but it remains the cleanest and most general way to encode law as logic.
		</p>
		<p>
			What the era got right: deterministic rules belong in formal logic, and every conclusion should
			be traceable to the specific laws it rests on. Those principles hold up today.
		</p>
		<p>
			What it missed is that the real world is not a mathematical formalisation. Getting the inputs
			into the system is a hard problem in its own right, and the systems of the time could not
			cope with it.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The quiet formalisers (2001&ndash;2021)</h2>
		<p>
			A more restrained tradition kept working in parallel, without claims of solving entire
			branches of tax law.
		</p>
		<p>
			<strong>Drools</strong> (2001) became the standard production rule engine for genuinely deterministic
			business logic. Insurers and tax authorities have used it for years to run provisions that admit
			no ambiguity.
		</p>
		<p>
			The more interesting advance was <strong>Catala</strong>, released by Denis Merigoux at INRIA
			in 2021. Catala is a programming language designed to formalise legislation, and its one
			defining idea is that source code sits
			<em>interleaved with the statutory text it implements</em>: the article is a comment, the code
			sits directly underneath. Any divergence between law and implementation is immediately
			visible. The French government used Catala to formally verify parts of its family-benefits
			legislation.
		</p>
		<p>
			What Catala deliberately does not do is extract facts from natural language. A human still has
			to read the document, understand the context, and feed the engine structured inputs. For
			compliance work at scale, that bottleneck stayed open.
		</p>
		<p>
			What Catala cannot do is run in reverse. Given a desired conclusion, it cannot enumerate the
			inputs that would produce it. A Prolog knowledge base can, because the same rule serves as a
			forward evaluator and as a query. "Where must the supplier be established for reverse charge
			to apply?" or "which object classifications admit an exemption?" are everyday questions for a
			practitioner structuring a transaction. A compiled decision tree cannot answer them. A
			relational knowledge base does so by default.
		</p>
		<p>
			Prolog also handles mixed reasoning domains in a single query. Symbolic facts (country,
			classification), numeric constraints (thresholds, rates), and temporal data (dates, periods)
			can all participate in the same inference. That reach turns the same engine into an optimiser:
			given a choice of providers in different jurisdictions, it can pick the country that yields
			the best tax treatment by the same mechanism used to check a single case.
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
			LLMs are probabilistic. They return the most statistically plausible answer, which is usually
			correct on common scenarios, and which goes wrong on edge cases in specific ways:
		</p>
		<ul>
			<li>
				They cannot distinguish "unknown" from "false". Missing information is silently assumed
				away.
			</li>
			<li>
				They are not consistent. The same scenario, rephrased, can produce a different answer.
			</li>
			<li>They hallucinate citations. Article numbers that sound right but don't exist.</li>
		</ul>
		<p>
			A system that is often right is fine for search. It is not fine when the output is your tax
			bill. And when an LLM does get something wrong, there is no clean way to fix it. A user can
			try prompt engineering or retrieval tricks, and the model's maintainer can fine-tune or
			retrain at considerable cost, but neither approach can target a specific error and guarantee
			it stays fixed, because the faulty behaviour is not localised in any set of rules. Worse, the
			underlying models are updated frequently, which can silently break behaviour that previously
			worked. In a rule-based system, by contrast, a wrong answer points to a specific line. You can
			read it, understand why it produced the wrong result, fix it, and write a test that ensures
			the same mistake never reaches production again.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>VATmiraal</h2>
		<p>
			VAT is a good fit for this history. The EU VAT Directive, the national transpositions, and the
			ECJ case law cover a space that is mostly deterministic. Whether reverse charge applies to a
			given B2B transaction, for a standard case, is not a matter of interpretation: either the
			conditions hold or they don't.
		</p>
		<p>
			VATmiraal runs in two stages. First, a language model reads the transaction, whether an
			invoice, a ledger line, or a short description, and extracts the structured facts the rules
			need: supplier country, customer status, object type, VAT identifiers, place-of-supply
			inputs. Second, those facts are handed to a Prolog knowledge base that encodes the statutory
			rules directly. When the upstream system already provides structured data, the first stage is
			skipped and no language model sits in the decision path.
		</p>
		<p>
			The logic engine does not guess. For every transaction it either returns a conclusion with
			the specific articles applied, or it reports that a required fact is missing and names it.
			When a scenario touches provisions that do not admit a clean formal answer, it says so and
			stops, rather than manufacturing confidence.
		</p>
		<p>
			The contrast with existing VAT tooling is narrow but important. Most commercial tools work as
			lookup tables: country pair &times; supply type &times; customer category, return an answer.
			You get the <em>what</em>, not the <em>why</em>. That is adequate for routine domestic cases.
			It becomes a liability the moment you need to defend a position, whether to an auditor, to a
			tax authority, or to yourself six months later when the context has drained out of your head.
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
