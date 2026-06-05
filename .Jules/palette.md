## 2026-06-05 - Enhance Form and Focus Accessibility
**Learning:** Pure HTML5/vanilla CSS sites without explicit `<label>` elements require careful `aria-label` injection to remain accessible without breaking the visual aesthetic. Default browser focus states are often insufficient for custom dark themes.
**Action:** When working on contact forms in minimal UIs, always check for missing `<label>` tags and use `aria-label`. Implement a global `:focus-visible` rule utilizing the site's accent variable (e.g., `var(--accent)`) to ensure high-contrast keyboard navigation natively.
