

## Plan

### 1. Remove floating papers from Team page

**PageLayout.tsx** — accept an optional `hideFloatingPapers` prop. When true, skip rendering `<FloatingPapers />`.

**Team.tsx** — pass `hideFloatingPapers` to `<PageLayout>`.

### 2. Add a subtle document tornado animation in the Hero section

The "free space" between the SIRIUS logo (header) and the "Klarheit für Ihre Dokumente" headline is the upper portion of the Hero section (the `pt-20` padding area plus the space above the text within the `min-h-screen` flex container).

Create a new component **`DocumentTornado.tsx`** that renders a CSS-only tornado/whirlwind effect with small document shapes swirling in a vortex pattern. Implementation:

- A container positioned `absolute` in the Hero section, placed in the gap between header and headline (roughly `top: 0` to the headline start)
- 6-8 small document shapes (styled like the floating papers with `paper-deco` class, but smaller ~30-50px) orbiting in elliptical paths at different speeds and radii
- CSS keyframes for elliptical orbit (`tornado-orbit-1` through `tornado-orbit-3`) with varying radii and speeds
- A subtle funnel/vortex visual using a radial gradient or blur effect
- Kept subtle: low opacity (0.3-0.5), small elements, gentle motion
- `pointer-events-none` so it doesn't interfere with interaction

**Index.tsx** — insert `<DocumentTornado />` inside the Hero section, positioned in the upper area.

**index.css** — add tornado orbit keyframes:
- Multiple orbit paths (different ellipse sizes) 
- Documents scale slightly smaller as they go "deeper" into the vortex
- 8-15s animation duration for subtlety

### Technical details

```text
┌─────────────────────────────┐
│  Header (SIRIUS Logo)       │  ← z-50 fixed
├─────────────────────────────┤
│                             │
│   🌀 Document Tornado       │  ← absolute, in this gap
│   (subtle, ~150-200px)      │
│                             │
│  "Klarheit für Ihre         │
│   Dokumente."               │
│                             │
└─────────────────────────────┘
```

Files to create/modify:
- **Create** `src/components/DocumentTornado.tsx`
- **Edit** `src/index.css` — add tornado keyframes
- **Edit** `src/pages/Index.tsx` — add tornado to Hero
- **Edit** `src/components/PageLayout.tsx` — add `hideFloatingPapers` prop
- **Edit** `src/pages/Team.tsx` — pass `hideFloatingPapers`

