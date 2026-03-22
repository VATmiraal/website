<script>
	import { resolve } from '$app/paths';

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

<article id="page">
	<header id="hero">
		<h1>From TAXMAN to VATmiraal: Fifty Years of Teaching Machines the Law</h1>
		<p id="meta">5 min read &middot; March 2026</p>
	</header>

	<section class="prose">
		<p>
			Tax professionals, lawyers, compliance officers &mdash; anyone who works at the intersection
			of rules and reality has wanted the same thing: a machine that knows the law. Not a search
			engine that retrieves statutes &mdash; something that <em>reasons</em>. Takes a messy
			real-world situation and reliably says: this is compliant, this is not, here is the article
			that says so.
		</p>
		<p>
			The dream is seductive because law looks, at first glance, like logic. It is written down.
			Rules have conditions and consequences. Surely a computer, built on logic, could handle it?
		</p>
		<p>
			Fifty years of effort confirm it is harder than it looks. Every era solved one half of the
			problem and stumbled on the other. Understanding why is the fastest way to understand what the
			current generation gets right.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The First Attempts: Symbolic AI and Its Limits (1970s&ndash;1993)</h2>
		<p>
			The earliest serious attempt came in 1977, when L. Thorne McCarty built <strong>TAXMAN</strong
			>
			at Rutgers &mdash; a system written in micro-PLANNER that attempted to model U.S. corporate tax
			reorganisation rules. It worked for the deterministic core and immediately hit a wall at the edges:
			legal terms like "continuity of interest" resisted formal definition. Around the same time, Alain
			Colmerauer's <strong>Prolog</strong> (1972) emerged as the dominant formalism for encoding legal
			rules as logical declarations, and researchers across Europe began applying it to benefits legislation,
			contract law, and tax codes.
		</p>
		<p>
			The conclusion was consistent: symbolic systems excel at <em>deterministic</em> rules where
			every term is well-defined. Real law has too much of the other kind. The commercial expert
			systems boom of the mid-1980s &mdash; products promising to capture expert judgment in if-then
			rule bases &mdash; collapsed by 1993 under the weight of its own brittleness. Every
			legislative amendment required expensive re-engineering. Edge cases produced silent failures.
			The field had confused <em>formalisation</em> with <em>coverage</em>.
		</p>
		<p>
			<strong>What this era got right:</strong> deterministic legal rules must be encoded as formal logic,
			and every conclusion must be traceable to a specific clause. These principles remain foundational.
		</p>
		<p>
			<strong>What it missed:</strong> encoding the rules correctly &mdash; itself a substantial
			undertaking requiring deep legal and technical expertise &mdash; turned out to be only half
			the challenge. The other half was extracting the <em>facts</em> those rules consume from messy real-world
			documents.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>Honest Formalisation: Drools and Catala (2001&ndash;2021)</h2>
		<p>
			A quieter, more rigorous tradition continued in parallel. <strong>Drools</strong> (2001) became
			the standard production rule engine for genuinely deterministic business logic &mdash; no claims
			of intelligence, just reliable execution of correctly encoded rules, used by insurers and tax authorities
			for provisions that admit no ambiguity.
		</p>
		<p>
			The most significant advance was <strong>Catala</strong>, released by Denis Merigoux at INRIA
			in 2021. Catala is a programming language built specifically to formalise legislation, with
			one key innovation: source code is <em>interleaved with the actual statutory text</em>. The
			legal article appears as a comment; directly beneath it sits its formal implementation. Any
			gap between law and code is immediately visible. The French government used it to formally
			verify parts of its family benefits legislation.
		</p>
		<p>
			What Catala cannot do &mdash; and makes no pretence of doing &mdash; is extract the facts it
			needs from natural language. A human must still read the invoice, understand the context, and
			provide structured inputs. For high-volume compliance work, that bottleneck remained unsolved.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The LLM Turn and Its Discontents (2017&ndash;2023)</h2>
		<p>
			When transformer-based language models arrived, the fact-extraction problem suddenly seemed
			tractable. For the first time, machines could read a contract, identify the relevant parties,
			classify the transaction type, and surface the provisions at issue &mdash; at scale, in plain
			language.
		</p>
		<p>
			But pure language models have a fundamental limitation in law: they are
			<strong>probabilistic</strong>. When a modern LLM analyses a compliance scenario, it produces
			the most statistically likely answer. For common scenarios, this is usually correct. But:
		</p>
		<ul>
			<li>
				It cannot distinguish "unknown" from "false" &mdash; missing information is silently assumed
				away
			</li>
			<li>
				It cannot guarantee consistency &mdash; the same scenario rephrased may yield a different
				answer
			</li>
			<li>
				It hallucinates citations &mdash; producing plausible-sounding article numbers that do not
				exist
			</li>
		</ul>
		<p>
			Several high-profile failures &mdash; AI-drafted legal briefs citing non-existent cases,
			compliance tools giving confidently wrong advice &mdash; demonstrated the point. A system that
			is right 95% of the time is not acceptable when the 5% results in a penalty.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>The Synthesis: Each Half Needs the Other</h2>
		<p>
			The case for neuro-symbolic AI in legal reasoning can be stated simply: neural networks excel
			at exactly what symbolic systems cannot do, and symbolic systems are reliable at exactly what
			neural networks cannot do. The task is composing them correctly.
		</p>
		<p>
			<strong>Neural networks bring:</strong> extracting structured facts from unstructured text; handling
			linguistic variation; generating readable explanations of formal conclusions.
		</p>
		<p>
			<strong>Symbolic systems bring:</strong> deterministic, auditable reasoning; complete citation
			trails; guaranteed consistency; and critically &mdash; a three-valued logic that can return
			<em>true</em>, <em>false</em>, or <em>insufficient information to conclude</em>.
		</p>
		<p>
			A well-designed neuro-symbolic system works in two stages. A language model reads the user's
			description and extracts a structured representation of the relevant facts. That
			representation is passed to a formal knowledge base that applies the statutory rules &mdash;
			and either produces a proof with every step cited, or identifies precisely which fact is
			missing to resolve the question. The symbolic engine does not guess. It reasons.
		</p>
	</section>

	<hr />

	<section class="prose">
		<h2>VATmiraal: Defensible Reasoning at Scale</h2>
		<p>
			Tax law &mdash; VAT in particular &mdash; is the ideal test case for this architecture. The EU
			VAT Directive spans 28 member states, decades of ECJ case law, and thousands of cross-border
			scenarios. Most core rules are genuinely deterministic. Whether reverse charge applies to a
			given B2B transaction is not a matter of interpretation for standard cases. Either the
			conditions are met or they are not.
		</p>
		<p>
			VATmiraal sits at the point where this history has been heading. A language model reads a
			transaction in plain language and extracts the facts the legal analysis requires. A logic
			engine then applies the statutory rules and produces a conclusion &mdash; but crucially, it
			also produces the full reasoning trace: every condition checked, every article applied or
			ruled out, laid out in a form that can be reviewed, challenged, or cited in an audit.
		</p>
		<p>
			This is where the contrast with existing tax engines matters. Most commercial VAT tools work
			through table lookups: they classify a transaction against a matrix of country pairs, supply
			types, and customer categories, and return an answer. They tell you <em>what</em> the outcome
			is. They do not tell you <em>why</em> &mdash; which conditions were satisfied, which exemption was
			considered and rejected, which article of which directive governs the result.
		</p>
		<p>
			For routine processing, that is often enough. But for cross-border transactions where the
			stakes are high and the rules interact in non-obvious ways, an answer without a reasoning
			trace is a liability, not an asset. You cannot defend an audit position you cannot explain.
			You cannot catch a wrong answer you cannot inspect.
		</p>
		<p>
			When a required fact is missing, the system does not guess &mdash; it asks. When a scenario
			touches provisions that resist full formalisation, it says so and routes to expert review
			rather than producing a confident answer that may be wrong.
		</p>
		<p>
			Every conclusion either cites specific statutory articles, or honestly reports that it cannot
			conclude and explains what would resolve the question. This is not AI replacing a tax advisor.
			It is AI making a tax advisor's work faster, more consistent, and genuinely defensible.
		</p>
	</section>

	<hr />

	<section class="prose closing">
		<p>
			The machines are finally learning the law &mdash; not by memorising it, not by guessing at it,
			but by reasoning through it. Step by step, article by article. The way a careful lawyer would.
		</p>
	</section>

	<footer id="author">
		<p>
			<em>
				Jan De Meyer is the founder of VATmiraal (vatmiraal.be), a Belgian neuro-symbolic VAT
				compliance system.
			</em>
		</p>
	</footer>

	<a id="back-blog" href={resolve('/blog')}>&larr; All posts</a>
</article>

<style>
	#page {
		max-width: 700px;
		margin: 0 auto;
		padding: 6rem 2rem 5rem;
		box-sizing: border-box;
	}

	#hero {
		margin-bottom: 3rem;
	}

	h1 {
		font-size: clamp(2rem, 4.5vw, 2.8rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.12;
		margin: 0 0 0.75rem;
	}

	#meta {
		font-size: 0.95em;
		color: rgba(15, 15, 15, 0.45);
		margin: 0;
	}

	h2 {
		font-size: 1.5em;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin: 0 0 1rem;
	}

	.prose {
		margin-bottom: 0;
	}

	.prose p {
		font-size: 1.05em;
		line-height: 1.75;
		color: rgba(15, 15, 15, 0.85);
		margin: 0 0 1.25em;
	}

	.prose p:last-child {
		margin-bottom: 0;
	}

	.prose ul {
		margin: 0 0 1.25em;
		padding: 0 0 0 1.5em;
	}

	.prose li {
		font-size: 1.05em;
		line-height: 1.75;
		color: rgba(15, 15, 15, 0.85);
		margin-bottom: 0.5em;
	}

	.prose strong {
		color: #0f0f0f;
	}

	.prose em {
		font-style: italic;
	}

	.closing p {
		font-size: 1.1em;
		font-weight: 500;
		color: #0f0f0f;
	}

	hr {
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		margin: 2.5rem 0;
	}

	#author {
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	#author p {
		font-size: 0.95em;
		color: rgba(15, 15, 15, 0.55);
		line-height: 1.6;
		margin: 0;
	}

	#back-blog {
		display: inline-block;
		margin-top: 2rem;
		color: rgba(15, 15, 15, 0.5);
		text-decoration: none;
		font-size: 0.95em;
		transition: color 0.2s ease;
	}

	#back-blog:hover {
		color: #0f0f0f;
	}

	@media (max-width: 768px) {
		#page {
			padding: 4rem 1.5rem 4rem;
		}

		h1 {
			font-size: clamp(1.6rem, 7vw, 2.2rem);
		}

		h2 {
			font-size: 1.3em;
		}
	}
</style>
