/**
 * Generate the Heimdall rate-contract and service-definition PDFs from the running site, so the
 * manually-provisioned backend artifacts always match the current frontend.
 *
 * Usage: bun scripts/provision-pdfs.ts <siteUrl> [originForLinks] [outDir]
 *   siteUrl         where the pages are served (e.g. http://localhost:5173)
 *   originForLinks  origin baked into the PDF's internal links (defaults to siteUrl);
 *                   pass the production origin when provisioning, e.g. https://vatmiraal.be
 *   outDir          where to write the PDFs (defaults to ./provisioned-pdfs, gitignored);
 *                   point it at the backend's pricing/artifact to provision directly
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const site = (process.argv[2] ?? 'http://localhost:5173').replace(/\/$/, '');
const origin = (process.argv[3] ?? site).replace(/\/$/, '');
const outDir = resolve(process.argv[4] ?? resolve(import.meta.dir, '../provisioned-pdfs'));
mkdirSync(outDir, { recursive: true });

const langs = ['en', 'nl', 'fr'] as const;
const pages = [
	{ path: '/heimdall/rates', prefix: 'contract', wait: '.tbl' },
	{ path: '/heimdall/service-description', prefix: 'heimdall_definition', wait: '.vm-doc' }
] as const;

const browser = await chromium.launch();
const ctx = await browser.newContext({ acceptDownloads: true });
const pageObj = await ctx.newPage();

// The artifact date must match the pricing version the site serves; read it off the wire.
let version: string | undefined;
pageObj.on('response', async (res) => {
	if (version || !/\/pricing(?:$|\?)/.test(res.url()) || !res.ok()) return;
	try {
		version = (await res.json())?.version;
	} catch {
		/* not the pricing JSON */
	}
});

for (const lang of langs) {
	for (const { path, prefix, wait } of pages) {
		const url = `${site}/${lang}${path}?pdfOrigin=${encodeURIComponent(origin)}`;
		await pageObj.goto(url, { waitUntil: 'networkidle' });
		await pageObj.waitForSelector(wait, { timeout: 30_000 });
		await pageObj.waitForSelector('.pdfbtn:not([disabled])', { timeout: 30_000 });
		if (!version) throw new Error('could not read the pricing version from the site');
		const [download] = await Promise.all([
			pageObj.waitForEvent('download'),
			pageObj.click('.pdfbtn')
		]);
		const name = `${prefix}-${lang}-${version}.pdf`;
		await download.saveAs(resolve(outDir, name));
		console.log('✓', name);
	}
}

await browser.close();
console.log(`\nProvisioned 6 PDFs into ${outDir} (links → ${origin}).`);
