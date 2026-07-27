import spec from './openapi.json';

export interface IApiInfo {
	title: string;
	version: string;
}

export interface IApiRoute {
	method: string;
	path: string;
	summary: string;
	requiresAuth: boolean;
}

export const apiInfo: IApiInfo = {
	title: spec.info?.title ?? 'VATmiraal API',
	version: spec.info?.version ?? ''
};

type ISchemaNode = Record<string, unknown>;

const schemaRegistry = ((spec.components as ISchemaNode | undefined)?.schemas ?? {}) as Record<
	string,
	ISchemaNode
>;

function resolveRef(node: ISchemaNode): ISchemaNode {
	const ref = node.$ref;
	if (typeof ref === 'string') {
		return schemaRegistry[ref.replace('#/components/schemas/', '')] ?? {};
	}
	return node;
}

/**
 * Build a representative JSON value from a schema node. Prefers an explicit
 * `example`/`default`/`const`/first-`enum`, otherwise recurses by type.
 * `seen` guards against recursive `$ref` cycles.
 */
function exampleFromSchema(node: ISchemaNode | undefined, seen: Set<string> = new Set()): unknown {
	if (!node) return null;

	if (typeof node.$ref === 'string') {
		if (seen.has(node.$ref)) return null;
		const next = new Set(seen).add(node.$ref);
		return exampleFromSchema(resolveRef(node), next);
	}

	if (node.example !== undefined) return node.example;
	if (node.default !== undefined) return node.default;
	if (node.const !== undefined) return node.const;
	if (Array.isArray(node.enum) && node.enum.length) return node.enum[0];

	const allOf = node.allOf as ISchemaNode[] | undefined;
	if (Array.isArray(allOf)) {
		return allOf.reduce<Record<string, unknown>>(
			(acc, part) => Object.assign(acc, exampleFromSchema(part, seen) as object),
			{}
		);
	}
	const variant = (node.anyOf ?? node.oneOf) as ISchemaNode[] | undefined;
	if (Array.isArray(variant) && variant.length) return exampleFromSchema(variant[0], seen);

	const rawType = node.type;
	const type = Array.isArray(rawType) ? rawType.find((t) => t !== 'null') : rawType;

	switch (type) {
		case 'object': {
			const props = (node.properties ?? {}) as Record<string, ISchemaNode>;
			const out: Record<string, unknown> = {};
			for (const [key, value] of Object.entries(props)) out[key] = exampleFromSchema(value, seen);
			return out;
		}
		case 'array':
			return node.items ? [exampleFromSchema(node.items as ISchemaNode, seen)] : [];
		case 'string':
			if (node.format === 'date') return '2025-01-01';
			if (node.format === 'date-time') return '2025-01-01T00:00:00Z';
			return 'string';
		case 'integer':
		case 'number':
			return 0;
		case 'boolean':
			return true;
		default:
			return null;
	}
}

/** Every operation in the spec, flattened into a typed list of routes. */
export const apiRoutes: IApiRoute[] = Object.entries(spec.paths ?? {}).flatMap(([path, ops]) =>
	Object.entries(ops as Record<string, { summary?: string; security?: unknown[] }>).map(
		([method, op]) => ({
			method: method.toUpperCase(),
			path,
			summary: op.summary ?? '',
			requiresAuth: Array.isArray(op.security) && op.security.length > 0
		})
	)
);

const paths = (spec.paths ?? {}) as Record<string, Record<string, ISchemaNode>>;

function getOperation(path: string, method: string): ISchemaNode | undefined {
	return paths[path]?.[method.toLowerCase()];
}

function jsonContent(node: ISchemaNode | undefined): ISchemaNode | undefined {
	const content = node?.content as Record<string, ISchemaNode> | undefined;
	return content?.['application/json'];
}

/** First inline example value, honouring both `example` and `examples`. */
function inlineExample(content: ISchemaNode | undefined): unknown {
	const examples = content?.examples as Record<string, ISchemaNode> | undefined;
	if (examples) {
		const first = Object.values(examples)[0];
		if (first && 'value' in first) return first.value;
	}
	return content?.example;
}

export function formatJson(value: unknown): string {
	return JSON.stringify(value, null, 2);
}

export interface IApiExample {
	request: string | null;
	response: string;
}

/**
 * Request + response sample for one operation. The request uses the spec's own
 * example; the response is synthesised from its schema (the spec ships none).
 */
export function operationExample(path: string, method: string, status = '200'): IApiExample {
	const op = getOperation(path, method);

	const reqContent = jsonContent(op?.requestBody as ISchemaNode | undefined);
	const reqValue =
		inlineExample(reqContent) ?? exampleFromSchema(reqContent?.schema as ISchemaNode);
	const request = reqContent ? formatJson(reqValue) : null;

	const responses = op?.responses as Record<string, ISchemaNode> | undefined;
	const resContent = jsonContent(responses?.[status]);
	const resValue =
		inlineExample(resContent) ?? exampleFromSchema(resContent?.schema as ISchemaNode);

	return { request, response: formatJson(resValue) };
}
