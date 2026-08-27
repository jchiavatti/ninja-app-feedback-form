# Start here (paste this to Claude Code)

You are implementing a designed feedback form in this codebase.

1. Read `README.md` in this folder first — it is the full spec: layout, exact copy, conditional logic, validation rules, payload shape, and design tokens.
2. Open `Ninja Connect Intake.dc.html` in a browser to see the working prototype. It is a **design reference**, not code to copy: the markup is inline-styled HTML inside `<x-dc>`, and all behavior is the `class Component` script at the bottom (`state`, `validate()`, `doSubmit()`, `renderVals()`).
3. Rebuild it in this project's existing stack and component library. Use our own Button/Input/Select/Textarea/Checkbox primitives if they exist; only fall back to the bundled design-system CSS in `_ds/` for token values.
4. Match the token values in `_ds/tokens/colors.css` etc. exactly — do not invent colors, radii, or type sizes.
5. Wire the submit handler to the real endpoint (the prototype only `console.log`s the payload). Add a submitting state, a failure path, server-side validation mirroring the client rules, and spam protection.

## Brand constraints (non-negotiable)
- No gamification: no badges, streaks, scores, progress bars, or celebration animations.
- Sentence case everywhere; no ALL CAPS except the small wide-tracked eyebrow labels. No emoji.
- Copper (#977B58) is the single primary action color; one primary button per view.
- Calm motion only: 200ms `cubic-bezier(.4,0,.2,1)`, no bounce or overshoot.
- Touch targets ≥ 48px; body text ≥ 16px (audience skews older).

## Screenshots
`screenshots/01-form.png` … `04-form.png` — "Something isn't working" selected, scrolled top → bottom.
`screenshots/05-form.png` — "I have an idea" selected (screen / platform / timing fields hidden).
`screenshots/06-form.png` — validation state after submitting an empty form.
`screenshots/01-state.png` … `04-state.png` — type-picker states (none / first / second selected).
