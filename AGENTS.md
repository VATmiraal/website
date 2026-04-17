# Agent instructions

## Copywriting flow

For any change to user-facing copy — hero text, headings, subheadings, body copy, CTA labels, meta descriptions, button text — **propose the new text in chat first and wait for approval before writing it into a file**.

- Copy-only change: show the proposed text, wait for "yes" / edit / rewrite, then apply.
- Mixed copy + structure/style change: approve the copy first, then include it in the file edit. Do not sneak unreviewed copy into a component or style edit.
- Applies to small tweaks too (even a one-word swap). Show the new line, confirm, then edit.

Reason: copy typically iterates several times before landing. Writing to files per iteration creates wasted rewrites.

## Styling

- Use design tokens from `src/lib/styles/tokens.css` (imported via `src/app.css`). Never hardcode colors, radii, shadows, spacing, or durations in component styles — always `var(--token)`.
- Shared UI primitives live in `src/lib/components/` (`Button`, `Card`, `SectionHeader`, `StepItem`). Prefer these over bespoke buttons/cards per page.
- Avoid `:global()` in scoped component styles. Slotted content already inherits the parent's CSS scope — target it with normal selectors from the parent.

## Svelte patterns

- Avoid `$effect`. Side effects should run explicitly at the point a user action or state transition occurs, not reactively. For DOM work that needs to happen after a state change, set the state and `await tick()` in the same function, then act on the DOM.
- Use `onMount` / `onDestroy` for one-time lifecycle setup. Reserve runes for pure reactive values (`$state`, `$derived`, `$props`).

## Tooling

- Use **bun**, not npm, for scripts and CLI tools.
- When tests fail, run `bun run test` (not `vitest` directly).
- TypeScript interfaces are prefixed with `I` (e.g. `IBlogPost`, not `BlogPost`).
