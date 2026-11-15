// Ported verbatim from the source Heimdall pages' jsPDF generator. It lays out the PDF from
// the rendered DOM of the active-language document: VATmiraal mark, per-page header/footer,
// the rate table, clause numbering, internal page links and the calculator CTA box.
// Pinned to jspdf 2.5.1 + jspdf-autotable 3.8.2 to keep the output identical to the source.
import type { jsPDF } from 'jspdf';

export type Lang = 'nl' | 'fr' | 'en';

export interface IPdfMessages {
	busy: string;
	err: string;
	saved: string;
	declined: string;
	page: string;
}

export const PDF_MESSAGES: Record<Lang, IPdfMessages> = {
	nl: {
		busy: 'PDF wordt gemaakt…',
		err: 'De PDF kon niet worden gemaakt. Probeer opnieuw.',
		saved: 'PDF opgeslagen.',
		declined: 'Download geannuleerd.',
		page: 'Pagina'
	},
	fr: {
		busy: 'Création du PDF…',
		err: 'Le PDF n’a pas pu être créé. Réessayez.',
		saved: 'PDF enregistré.',
		declined: 'Téléchargement annulé.',
		page: 'Page'
	},
	en: {
		busy: 'Creating PDF…',
		err: 'The PDF could not be created. Try again.',
		saved: 'PDF saved.',
		declined: 'Download cancelled.',
		page: 'Page'
	}
};

export interface IBuildPdfOptions {
	/** The active-language document root (contains `.title` and the sibling sections). */
	root: HTMLElement;
	lang: Lang;
	/** Absolute URL of the online calculator, used for the CTA box link. */
	calcUrl: string;
	/** Absolute URL of the worked-examples page, used for a second CTA box. */
	examplesUrl?: string;
	/** Origin baked into links extracted from the DOM; defaults to the current page origin. */
	origin?: string;
}

// The autotable plugin augments the jsPDF instance at runtime; type the two members we touch.
type AutoTableDoc = jsPDF & {
	autoTable: (options: Record<string, unknown>) => void;
	lastAutoTable: { finalY: number };
};

function clean(t: string): string {
	return String(t || '')
		.replace(/₀/g, '0')
		.replace(/[  ]/g, ' ')
		.replace(/≥\s*([0-9][0-9 .,]*)/g, '$1+')
		.replace(/→/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Build the PDF document for one language from the rendered DOM. Lazy-loads jsPDF. */
export async function buildPdf(opts: IBuildPdfOptions): Promise<jsPDF> {
	const { root, lang, calcUrl, examplesUrl, origin } = opts;

	// Resolve a DOM href to an absolute URL, swapping in `origin` so a local run bakes
	// production links into the provisioned PDFs.
	function linkUrl(hr: string): string {
		const u = new URL(hr, location.href);
		if (origin) {
			const o = new URL(origin);
			u.protocol = o.protocol;
			u.hostname = o.hostname;
			u.port = o.port;
		}
		return u.href;
	}
	const { jsPDF } = await import('jspdf');
	await import('jspdf-autotable');

	const doc = new jsPDF({ unit: 'pt', format: 'a4' }) as AutoTableDoc;
	const W = doc.internal.pageSize.getWidth();
	const H = doc.internal.pageSize.getHeight();
	const M = 54;
	const TOP = 58;
	const BOT = 60;
	let y = TOP;
	const CW = W - 2 * M;
	const ACC = [44, 62, 118];
	const INK = [15, 15, 15];
	const MUT = [105, 105, 105];
	const FAINT = [150, 150, 150];
	const LINE = [226, 226, 222];
	const NAVY = [27, 42, 74];
	const CALC: Record<Lang, string> = {
		nl: 'Klik hier om je jaarbedrag te berekenen in de online prijscalculator',
		fr: 'Cliquez ici pour calculer votre montant annuel avec le calculateur en ligne',
		en: 'Click here to calculate your annual amount with the online price calculator'
	};
	const EXAMPLES: Record<Lang, string> = {
		nl: 'Klik hier voor praktijkvoorbeelden van de tarieven',
		fr: 'Cliquez ici pour des cas d’usage des tarifs',
		en: 'Click here for working examples of the rates'
	};

	const POS: Record<string, { page: number; y: number }> = {};
	const PEND: { page: number; x: number; y: number; w: number; h: number; t: string }[] = [];
	function pg(): number {
		return (
			doc.internal as unknown as { getCurrentPageInfo(): { pageNumber: number } }
		).getCurrentPageInfo().pageNumber;
	}
	function col(c: number[]): void {
		doc.setTextColor(c[0], c[1], c[2]);
	}
	function need(h: number): boolean {
		if (y + h > H - BOT) {
			doc.addPage();
			y = TOP;
			return true;
		}
		return false;
	}
	function lines(t: string, w: number, fs: number, bold?: boolean): string[] {
		doc.setFont('helvetica', bold ? 'bold' : 'normal');
		doc.setFontSize(fs);
		return doc.splitTextToSize(clean(t), w) as unknown as string[];
	}
	function write(
		t: string,
		x: number,
		w: number,
		fs: number,
		o: { bold?: boolean; color?: number[]; nobreak?: boolean }
	): number {
		o = o || {};
		const L = lines(t, w, fs, o.bold);
		col(o.color || INK);
		const lh = fs * 1.4;
		L.forEach(function (l) {
			if (!o.nobreak) need(lh);
			doc.text(l, x, y + fs);
			y += lh;
		});
		return L.length;
	}
	function mark(cx: number, cy: number, sz: number): void {
		const k = sz / 280;
		doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]);
		doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]);
		doc.setLineWidth(18 * k);
		doc.circle(cx, cy, 86 * k, 'S');
		doc.setLineWidth(9 * k);
		[
			[1, 0],
			[0.7071, 0.7071],
			[0, 1],
			[-1, 0],
			[-0.7071, -0.7071],
			[0, -1]
		].forEach(function (v) {
			doc.line(cx + 95 * k * v[0], cy + 95 * k * v[1], cx + 122 * k * v[0], cy + 122 * k * v[1]);
			doc.circle(cx + 122 * k * v[0], cy + 122 * k * v[1], 7 * k, 'F');
		});
		doc.line(cx - 86.3 * k, cy + 86.3 * k, cx + 86.3 * k, cy - 86.3 * k);
		doc.circle(cx - 86.3 * k, cy + 86.3 * k, 7 * k, 'F');
		doc.circle(cx + 86.3 * k, cy - 86.3 * k, 7 * k, 'F');
		doc.setLineWidth(10 * k);
		doc.setFillColor(255, 255, 255);
		doc.circle(cx - 28.3 * k, cy - 28.3 * k, 22 * k, 'FD');
		doc.circle(cx + 28.3 * k, cy + 28.3 * k, 22 * k, 'FD');
	}
	function header(): void {
		mark(M + 11, 30, 22);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(13);
		col(NAVY);
		doc.text('VATmiraal', M + 28, 34.5);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(8.5);
		col(MUT);
		doc.text('info@vatmiraal.be', W - M, 34, { align: 'right' });
		doc.setDrawColor(LINE[0], LINE[1], LINE[2]);
		doc.setLineWidth(0.6);
		doc.line(M, 46, W - M, 46);
	}

	// first page header + title block
	header();
	y = TOP + 18;
	doc.setDrawColor(ACC[0], ACC[1], ACC[2]);
	doc.setLineWidth(2);
	doc.line(M, y, M + 36, y);
	y += 16;
	doc.setFont('helvetica', 'bold');
	doc.setFontSize(7.5);
	col(FAINT);
	doc.text('VATMIRAAL BV', M, y, { charSpace: 1.6 });
	y += 8;
	doc.setFontSize(30);
	col(INK);
	doc.text(clean(root.querySelector('h1')!.textContent || ''), M, y + 26);
	y += 38;
	const meta = root.querySelector('.meta');
	if (meta) {
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(9.5);
		col(MUT);
		doc.text(clean(meta.textContent || ''), M, y + 9);
		y += 24;
	}

	function h2(t: string, id: string): void {
		need(96);
		if (id) POS[id] = { page: pg(), y: y };
		y += 14;
		const m = clean(t).match(/^(\d+\.|[A-Za-zé]+ \d+\.)\s*(.*)$/);
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(13.5);
		if (m) {
			col(ACC);
			doc.text(m[1], M, y + 13.5);
			const wN = doc.getTextWidth(m[1] + ' ');
			col(INK);
			doc.text(m[2], M + wN, y + 13.5);
		} else {
			col(INK);
			doc.text(clean(t), M, y + 13.5);
		}
		y += 21;
		doc.setDrawColor(LINE[0], LINE[1], LINE[2]);
		doc.setLineWidth(0.6);
		doc.line(M, y, W - M, y);
		y += 10;
	}
	function cta(text: string, url: string): void {
		const h = 40;
		need(h + 16);
		y += 6;
		doc.setFillColor(INK[0], INK[1], INK[2]);
		doc.roundedRect(M, y, CW, h, 6, 6, 'F');
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(10);
		doc.setTextColor(248, 248, 246);
		doc.text(text, M + 16, y + 24.5);
		doc.setFontSize(12);
		doc.text('>', W - M - 18, y + 25);
		doc.link(M, y, CW, h, { url });
		y += h + 12;
	}

	[].forEach.call(root.querySelectorAll('.title ~ *'), function (sec: Element) {
		if (sec.classList.contains('tracks')) {
			const cards = [].map.call(sec.querySelectorAll('.track'), function (tr: Element) {
				return {
					href: (tr.getAttribute('href') || '').slice(1),
					k: clean(tr.querySelector('.k')!.textContent || '').toUpperCase(),
					t: clean(tr.querySelector('h2')!.textContent || ''),
					li: [].map.call(tr.querySelectorAll('li'), function (l: Element) {
						return clean(l.textContent || '');
					}) as string[]
				};
			}) as { href: string; k: string; t: string; li: string[]; h?: number }[];
			const gap = 14;
			const cw = (CW - gap) / 2;
			const pad = 14;
			let hmax = 0;
			cards.forEach(function (c) {
				let h = pad + 10 + 18;
				c.li.forEach(function (l) {
					h += lines(l, cw - 2 * pad - 10, 9.5).length * 13 + 3;
				});
				c.h = h + pad - 3;
				hmax = Math.max(hmax, c.h);
			});
			y += 10;
			need(hmax + 8);
			cards.forEach(function (c, i) {
				const x = M + i * (cw + gap);
				let yy = y;
				PEND.push({ page: pg(), x: x, y: yy, w: cw, h: hmax, t: c.href });
				doc.setFillColor(236, 236, 232);
				doc.roundedRect(x + 0.8, yy + 1.6, cw, hmax, 7, 7, 'F');
				doc.setFillColor(255, 255, 255);
				doc.setDrawColor(LINE[0], LINE[1], LINE[2]);
				doc.setLineWidth(0.8);
				doc.roundedRect(x, yy, cw, hmax, 7, 7, 'FD');
				doc.setFont('helvetica', 'bold');
				doc.setFontSize(7.5);
				col(ACC);
				doc.text(c.k, x + pad, yy + pad + 6, { charSpace: 1.4 });
				doc.setFontSize(12.5);
				col(INK);
				doc.text(c.t, x + pad, yy + pad + 23);
				col(ACC);
				doc.text('›', x + pad + doc.getTextWidth(c.t + ' '), yy + pad + 23);
				yy += pad + 34;
				c.li.forEach(function (l) {
					const L = lines(l, cw - 2 * pad - 10, 9.5);
					col(MUT);
					doc.setFont('helvetica', 'normal');
					doc.text('•', x + pad + 1, yy + 9.5);
					col(MUT);
					L.forEach(function (s) {
						doc.text(s, x + pad + 10, yy + 9.5);
						yy += 13;
					});
					yy += 3;
				});
			});
			y += hmax + 6;
			return;
		}
		if (sec.tagName !== 'ARTICLE') return;
		const hh = sec.querySelector('h2');
		if (hh) h2(hh.textContent || '', sec.id);
		[].forEach.call(sec.children, function (ch: Element) {
			if (ch.tagName === 'DL') {
				[].forEach.call(ch.querySelectorAll('dt'), function (dt: Element) {
					const dd = dt.nextElementSibling!;
					const L = lines(dd.textContent || '', CW - 130, 9.5);
					const a = dd.querySelector('a');
					const DT = lines(dt.textContent || '', 118, 9.5, true);
					const NL = Math.max(L.length, DT.length);
					need(NL * 13.3 + 6);
					doc.setFont('helvetica', 'bold');
					doc.setFontSize(9.5);
					col(INK);
					DT.forEach(function (s, i) {
						doc.text(s, M, y + 9.5 + i * 13.3);
					});
					doc.setFontSize(9.5);
					doc.setFont('helvetica', 'normal');
					col(a ? ACC : MUT);
					L.forEach(function (s, i) {
						doc.text(s, M + 130, y + 9.5 + i * 13.3);
					});
					if (a) {
						const hr = a.getAttribute('href') || '';
						if (hr.charAt(0) !== '#')
							doc.link(M + 130, y, CW - 130, L.length * 13.3, {
								url: linkUrl(hr)
							});
						else
							PEND.push({
								page: pg(),
								x: M + 130,
								y: y,
								w: CW - 130,
								h: L.length * 13.3,
								t: hr.slice(1)
							});
						doc.setDrawColor(ACC[0], ACC[1], ACC[2]);
						doc.setLineWidth(0.5);
						L.forEach(function (s, i) {
							doc.line(
								M + 130,
								y + 11.5 + i * 13.3,
								M + 130 + doc.getTextWidth(s),
								y + 11.5 + i * 13.3
							);
						});
					}
					y += NL * 13.3 + 6;
				});
			} else if (ch.classList.contains('tbl')) {
				const t = ch.querySelector('table')!;
				const head = [
					[].map.call(t.querySelectorAll('thead th'), function (x: Element) {
						return clean(x.textContent || '');
					})
				];
				const bodyR = [].map.call(
					t.querySelectorAll('tbody tr'),
					function (r: HTMLTableRowElement) {
						return [].map.call(r.cells, function (c: HTMLTableCellElement) {
							return clean(c.textContent || '');
						});
					}
				);
				need(150);
				doc.autoTable({
					head: head,
					body: bodyR,
					startY: y + 2,
					margin: { left: M, right: M, top: TOP, bottom: BOT },
					theme: 'plain',
					styles: {
						font: 'helvetica',
						fontSize: 9.5,
						cellPadding: { top: 6, bottom: 6, left: 10, right: 10 },
						textColor: INK,
						lineColor: LINE,
						lineWidth: { bottom: 0.6 }
					},
					headStyles: {
						fillColor: INK,
						textColor: [248, 248, 246],
						fontStyle: 'bold',
						fontSize: 8.5,
						lineWidth: 0
					},
					columnStyles: {
						0: { fontStyle: 'bold' },
						1: { halign: 'right' },
						2: { halign: 'right', textColor: MUT }
					},
					didParseCell: function (d: {
						section: string;
						column: { index: number };
						cell: { styles: { halign: string } };
					}) {
						if (d.section === 'head' && d.column.index > 0) d.cell.styles.halign = 'right';
					}
				});
				y = doc.lastAutoTable.finalY + 8;
				if (sec.id && /-(tarieven|tarifs|rates)$/.test(sec.id)) {
					cta(CALC[lang], calcUrl);
					if (examplesUrl) cta(EXAMPLES[lang], examplesUrl);
				}
			} else if (ch.classList.contains('cl')) {
				[].forEach.call(ch.children, function (c: Element) {
					let n = c.children[0].textContent || '';
					const body = c.children[1];
					const ol = body.querySelector('ol');
					function clause(txt: string): void {
						const L = lines(txt, CW - 30, 10);
						need(Math.min(L.length, 3) * 14);
						doc.setFont('helvetica', 'bold');
						doc.setFontSize(9);
						col(FAINT);
						doc.text(n, M, y + 10);
						n = '';
						write(txt, M + 30, CW - 30, 10, {});
					}
					if (ol) {
						const tn = [].filter
							.call(body.childNodes, function (nd: Node) {
								return nd.nodeType === 3;
							})
							.map(function (nd: Node) {
								return nd.textContent || '';
							}) as string[];
						clause(tn[0] || '');
						[].forEach.call(ol.children, function (li: Element, i: number) {
							lines(li.textContent || '', CW - 56, 10);
							need(lines(li.textContent || '', CW - 56, 10).length * 14);
							doc.setFont('helvetica', 'bold');
							doc.setFontSize(10);
							col(ACC);
							doc.text(String.fromCharCode(97 + i) + ')', M + 34, y + 10);
							write(li.textContent || '', M + 52, CW - 52, 10, {});
						});
						const rest = clean(tn.slice(1).join(' '));
						if (rest) {
							y += 2;
							write(rest, M + 30, CW - 30, 9.5, { color: MUT });
						}
						y += 6;
					} else {
						clause(body.textContent || '');
						y += 6;
					}
				});
			}
		});
	});

	PEND.forEach(function (l) {
		const d = POS[l.t];
		if (!d) return;
		doc.setPage(l.page);
		doc.link(l.x, l.y, l.w, l.h, {
			pageNumber: d.page,
			magFactor: 'XYZ',
			top: Math.max(0, d.y - 6)
		});
	});
	const n = doc.getNumberOfPages();
	const ft = 'VATmiraal BV · info@vatmiraal.be';
	for (let i = 1; i <= n; i++) {
		doc.setPage(i);
		if (i > 1) header();
		doc.setDrawColor(LINE[0], LINE[1], LINE[2]);
		doc.setLineWidth(0.6);
		doc.line(M, H - 42, W - M, H - 42);
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(8);
		col(MUT);
		doc.text(ft, M, H - 28);
		doc.text(PDF_MESSAGES[lang].page + ' ' + i + ' / ' + n, W - M, H - 28, { align: 'right' });
	}
	return doc;
}
