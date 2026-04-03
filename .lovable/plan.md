
## Problem

The floating papers appear **in front of text** on all subpages but correctly behind text on the homepage.

**Root cause:** The CSS rule `main section > *` only targets direct children of `<section>` elements inside `<main>`. However, components like `PageHero` render as `<div>` directly inside `<main>` (not inside a `<section>`), so they don't get `z-index: 2` and end up behind the papers (z-index: 1).

On the homepage, the Hero component manually sets `z-10` on its content, which is why it works there.

## Fix

**Single change in `src/index.css`** — extend the CSS z-index rule to also cover direct children of `<main>`:

```css
main > *,
main section > *,
main article > *,
footer > * {
  position: relative;
  z-index: 2;
}
```

Adding `main > *` ensures that `PageHero` and any other direct children of `<main>` (like standalone sections or divs) are elevated above the floating papers layer.

No other files need to change.
