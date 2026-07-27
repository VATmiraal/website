/**
 * Vendors the live OpenAPI spec into the repo so the site builds without a
 * runtime dependency on the API being reachable.
 *
 *   bun run openapi:sync
 *
 * Re-run whenever the API contract changes; commit the updated snapshot.
 */
const SPEC_URL = 'https://api.vatmiraal.be/openapi.json';
const OUT_PATH = new URL('../src/lib/api/openapi.json', import.meta.url).pathname;

console.log(`Fetching ${SPEC_URL} ...`);
const res = await fetch(SPEC_URL);
if (!res.ok) {
	throw new Error(`Failed to fetch spec: ${res.status} ${res.statusText}`);
}

const spec = await res.json();
await Bun.write(OUT_PATH, JSON.stringify(spec, null, 2) + '\n');

const paths = Object.keys(spec?.paths ?? {}).length;
console.log(`Wrote ${OUT_PATH} — ${spec?.info?.title} v${spec?.info?.version}, ${paths} paths`);
