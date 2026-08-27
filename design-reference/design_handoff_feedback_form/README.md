# Handoff: Ninja Selling App Feedback form

## Overview
A single-page, public feedback/issue intake form for the Ninja Selling platform. An agent (or a coach submitting on someone's behalf) picks a note type, fills in a short set of fields that adapt to that type, optionally attaches screenshots, acknowledges the non-urgent SLA, and submits. Calm, no gamification, no progress bar, no celebration on success.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype of the intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, Vue, etc.) using its established component library, form handling, and styling patterns. If no environment exists yet, pick the most appropriate framework for the project and implement there.

The prototype uses the Ninja Selling design system's React primitives (Button, Input, Textarea, Select, Checkbox) plus its CSS custom-property tokens. If the target codebase already has equivalents of these primitives, use those and map the tokens listed below onto the codebase's own theme values.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, copy, conditional logic, and validation rules are final and should be reproduced closely. Exact values are listed under Design Tokens; exact copy is quoted under Screens.

## Screens / Views

### 1. Feedback form (only view)
**Purpose:** capture a piece of feedback — a bug, an idea, or a win — with enough context to act on it.

**Page layout**
- Full-height page, background `--surface-page` (#EEEAE6), padding `56px 20px 120px`.
- Content column: `max-width: 720px`, centered, `display:flex; flex-direction:column; gap:24px`.
- Base font: Open Sans, 16px, color `--text-body`.

**Header**
- Centered logo (`assets/logo-primary.png`, height 35px, auto width), `padding-bottom: 28px`.
- Eyebrow: "NINJA SELLING APP FEEDBACK" — 12px, weight 600, `letter-spacing:.14em`, uppercase, `--text-muted`.
- H1: "Tell us what's on your mind." — Cormorant Garamond 600, 44px, line-height 1.1, `letter-spacing:-.01em`, `--text-strong`.
- Sub-head: "Please note this form is for non-urgent items. If your item is urgent, please email us at techsupport@ninjaselling.com" — 18px/1.6, `max-width:56ch`; the address is a `mailto:` link colored `--text-link`, hover `--copper-hover` + underline.
- Header block internal gap: 12px.

**Card shell (used by every section)**
- `background: --surface-card` (#FFFFFF), `border-radius: 20px`, `padding: 28px`, `box-shadow: --shadow-card`, `display:flex; flex-direction:column; gap:20px`.
- Section titles: 20px, weight 600, `--text-strong`. Section sub-text: 15px, `--text-muted`.

**Card 1 — "What kind of note is this?"** (always visible)
- Sub-text: "Pick one to get started."
- Grid of three selectable buttons: `repeat(auto-fit, minmax(190px,1fr))`, gap 12px.
- Each option button: left-aligned column, gap 8px, padding 20px, `min-height:118px`, `border-radius:14px`, `border:1.5px solid --border-strong`, background `--surface-card`.
  - Title span: 17px/1.3, weight 600, `min-height:44px` (reserves two lines so all blurbs align).
  - Blurb span: 14px/1.5, `--text-muted`.
  - Hover: `border-color: --copper`. Selected: `border-color: --copper` and `background: --copper-tint`. Transition 200ms `cubic-bezier(.4,0,.2,1)` on background and shadow. Controls do not scale on press.
- Options (id / title / blurb):
  1. `broken` — "Something isn't working" — "A piece of the platform is broken or behaving oddly."
  2. `idea` — "I have an idea" — "Something that would make your day easier."
  3. `win` — "Something worked well" — "A win worth passing along to the team."
- Error line (after a failed submit, only if no type chosen): "Choose one so we know where to send this." — 14px, `--attention`.

**Everything below is hidden until a type is selected.** On reveal, the whole lower block fades in: `opacity 0→1`, `translateY(6px)→0`, 200ms `cubic-bezier(.4,0,.2,1)`. No scroll-jacking.

**Card 2 — "Who is this about?"**
- Checkbox: label "I'm submitting this on behalf of another Ninja", description "Coaches and support staff — we'll ask for their details too."
- If submitter name + a valid email are already known (from localStorage) and not being edited: a summary row instead of the fields — `background:--surface-sunken`, `border-radius:14px`, padding `16px 20px`, text "Name · email" (15px, `--text-strong`) with a right-aligned copper "Edit" text button (15px, weight 600).
- Otherwise: eyebrow "YOUR INFORMATION" then a two-up grid (`minmax(220px,1fr)`, gap 16px) of "Your name" (placeholder "Jane Rivera") and "Your email" (type=email, placeholder "jane@example.com"). Both persist to localStorage on blur.
- If the on-behalf checkbox is checked: an additional block separated by a 1px `--border-hairline` top rule with `padding-top:20px`, eyebrow "NINJA EXPERIENCING THE ISSUE", and a two-up grid of "Their name" (placeholder "Full name") and "Their email" (placeholder "name@example.com"). These two fields are never persisted.

**Card 3 — "The details"**
- Shown only when type ≠ `idea`: two-up grid of
  - "Where in the platform?" select, placeholder "Choose a screen", options: Home, Mastery & Flow, My Business, Ninja 9, FORD & Record, Business Tracker, My People, Scorecard, My Ninja Path, Classes, NinjaYou, Resources, Referrals (Find a Ninja), Community, Marketplace, Ninja AI, Other.
  - "What were you using?" select, options: Desktop web, Mobile web, iPhone app, Android app — pre-selected from the user agent.
- Always: textarea, 6 rows, placeholder "Plain language is perfect — what you expected, and what happened instead."
  - Label varies by type: `broken` → "What happened?", `idea` → "What would you like to see?", `win` → "What worked well?"
  - Hint (only for `broken`): "The steps you took, if you remember them, help a lot."
  - Invalid state (1.5px `--attention` outline via the design system's `invalid` prop) when validation fails.
- Shown only when type ≠ `idea`: "When did this happen?" select, options: Just now (default), Earlier today, Yesterday, This week, Longer ago / ongoing.

**Card 4 — "Add a screenshot"**
- Sub-text varies: `broken` → "Optional, but it usually saves a round of questions."; `idea`/`win` → "You may or may not have something visual to share, it's not expected or required."
- Paste/drop zone: centered column, gap 10px, padding `36px 24px`, `border-radius:14px`, `border:1.5px dashed --border-strong`, `background:--surface-sunken`, `cursor:pointer`, `tabindex=0`.
  - Primary line: "Press ⌘V to paste a screenshot" (17px, weight 600) — the key hint is "⌘V" on Mac, "Ctrl + V" elsewhere.
  - Secondary line: "Or drag an image here, or click to browse your files." (15px, `--text-muted`).
  - While dragging over: `border-color: --copper` (200ms transition).
  - Click opens a hidden `<input type="file" accept="image/*" multiple>`.
- Thumbnails: wrapping flex, gap 12px. Each item 132px wide: image 132×96, `object-fit:cover`, `border-radius:10px`, 1px `--border-hairline`; filename below in 13px `--text-muted`, single-line ellipsis; a 28px round remove button at `top:-8px; right:-8px` (white fill, hairline border, `--shadow-raised`, "×").

**Submit block**
- Required checkbox: "I understand that the information will be reviewed, but on a non-urgent basis. Anything urgent is to be handled by our support team at tech@ninjaselling.com". Inline error under it when unchecked at submit: "Please check this box so we can send your note along." (14px, `--attention`, margin-top 8px).
- Field-level error banner (only after a submit attempt, and only if a *field* is missing): "We need a bit more here to help — check the highlighted fields above." — 15px, `--attention` on `--attention-tint`, `border-radius:14px`, padding `14px 18px`.
- Buttons row: flex, wrap, gap 12px.
  - Primary (Copper, size lg): "Submit Feedback"
  - Secondary (outline, size lg): "Send and add another"
- Success confirmation (rendered near the top of the page after a successful submit): row with an 8px `--positive` dot and the text "Thank you — that came through. We'll follow up if we need more detail." on `--olive-tint`, 1px `--border-hairline`, `border-radius:20px`, padding `20px 24px`. No confetti, no modal.

## Interactions & Behavior
- **Progressive reveal, not a wizard.** Selecting a note type reveals cards 2–4 and the submit block in place; there is no stepper or progress bar.
- **Type-dependent fields:** `idea` hides the screen, platform, and timing selects entirely (and sends them empty). Textarea label and screenshot hint copy switch by type as listed above.
- **On-behalf toggle:** when checked, adds the affected-Ninja block; when unchecked, the submitter's own name/email are used as the affected person in the payload.
- **Paste anywhere:** a document-level `paste` listener captures image files from the clipboard, not just when the drop zone is focused. Drag/drop and file browse both add images. Max 6 attachments (max 4 per add).
- **Image processing on submit:** each file is drawn to a canvas, downscaled to max 1600px wide (never upscaled), and re-encoded as JPEG quality 0.8 data URLs.
- **Validation** runs only on submit; error state clears per field as soon as that field changes. Rules:
  - a note type is selected
  - description is non-empty and ≥ 8 characters after trim
  - submitter name non-empty
  - submitter email matches `/.+@.+\..+/`
  - if on-behalf: affected name non-empty
  - acknowledgement checkbox checked
- **Submit:** POST the payload as JSON to the backend endpoint (the prototype logs it to the console — wire this to the real endpoint). On success: persist submitter identity, revoke object URLs, clear the form, show the confirmation, smooth-scroll to top.
- **"Send and add another":** identical, but also clears the selected type so the next note starts from the type picker.
- **Motion:** everything 200ms `cubic-bezier(.4,0,.2,1)`. No springs, no overshoot, no looping animation.
- **Focus:** 3px `--focus-ring` (Ocean) outline with 2px offset on all interactive elements (from the design system's base CSS).
- **Responsive:** all grids are `repeat(auto-fit, minmax(220px, 1fr))` (190px for the type cards), so they collapse to a single column under roughly 560px. Touch targets ≥ 48px; buttons use size lg (52px).

## State Management
Single component, local state:

| key | type | notes |
|---|---|---|
| `type` | "" \| "broken" \| "idea" \| "win" | gates the rest of the form |
| `onBehalf` | boolean | shows affected-Ninja block |
| `editingCoach` | boolean | expands the submitter fields when a saved identity exists |
| `submitterName`, `submitterEmail` | string | persisted to localStorage |
| `affectedName`, `affectedEmail` | string | never persisted; cleared on load and after submit |
| `screen`, `platform`, `description`, `timing` | string | `platform` seeded from user agent; `timing` defaults "Just now" |
| `images` | array of `{id, name, url, file}` | `url` is an object URL, revoked on remove/submit |
| `dragging` | boolean | drop-zone border state |
| `acknowledged` | boolean | required; reset to false after each submit |
| `errors` | object of booleans | empty until the first submit attempt |
| `justSubmitted` | boolean | shows the confirmation row |

**Persistence:** localStorage key `ninja_connect_submitter` holding `{name, email}` only. Written on blur of the submitter fields and after each successful submit; read on mount. Nothing else is stored.

**Payload shape** (JSON):
```json
{
  "report_type": "broken | idea | win",
  "on_behalf_of": false,
  "submitter_name": "", "submitter_email": "",
  "affected_name": "", "affected_email": "",
  "screen": "", "platform": "", "description": "", "timing": "",
  "acknowledged_non_urgent": true,
  "user_agent": "", "submitted_at": "ISO-8601",
  "images": ["data:image/jpeg;base64,..."]
}
```
For `report_type: "idea"`, `screen`/`platform`/`timing` are sent as empty strings.

## Design Tokens
All values come from the Ninja Selling design system (`_ds/.../tokens/*.css`, bundled here).

**Color**
- Page background `--surface-page` #EEEAE6 (Cream)
- Card `--surface-card` #FFFFFF; sunken/input rest `--surface-sunken` #E3DDCF
- Copper (primary action, selected state) `--copper` #977B58; hover #856A4A; press #705942; tint `--copper-tint` #EDE6DC
- Text: strong #363A36, body #4A4E49, muted #6E726C, subtle #9A9D97
- Link `--text-link` #576F7C (Ocean); focus ring Ocean
- Borders: hairline #DED7CC, strong #C7BCA1
- Quiet semantics: positive #485237 on tint #E5E7DF; attention #8E6C69 on tint #EDE4E2. No alarm red, no bright green.
- Note: the original brief listed Copper as #9b8661; the brand guide value #977B58 is what's implemented. Confirm which the codebase should use.

**Type**
- Display: Cormorant Garamond 600 — H1 44px/1.1, `-0.01em`
- UI/body: Open Sans — 20px/600 section titles, 18px/1.6 lead, 17px/600 card titles, 16px body, 15px secondary, 14px errors and blurbs, 13px meta, 12px/600 uppercase eyebrows at `.14em`

**Spacing** — 8px base. Used here: 6, 8, 10, 12, 16, 20, 24, 28 (card padding), 48, 56, 120.

**Radius** — cards 20px; inputs/buttons 10px; tiles/inner blocks 14px; pills/round buttons 999px.

**Shadows** — `--shadow-card` at rest, `--shadow-raised` for the thumbnail remove button. Cool-black tinted, never pure black.

**Motion** — 120ms fast / 200ms base / 320ms slow, easing `cubic-bezier(.4,0,.2,1)`.

## Assets
- `assets/logo-primary.png` — official Ninja Selling wordmark (black type, copper 気), extracted from the brand guide PDF. Never recolor, stretch, or add effects; clear space equals the kanji's height; min on-screen size 120px (rendered here at 35px height as a compact form header — if the codebase enforces the 120px rule, use its standard header logo instead).
- Icons: Lucide outline, stroke width 2, from the design system's self-hosted subset. This screen currently uses no icons.
- No photography.

## Files
- `Ninja Connect Intake.dc.html` — the prototype. Markup lives inside the `<x-dc>` element (inline styles throughout); all behavior lives in the `class Component` script at the bottom (`state`, `validate()`, `doSubmit()`, `renderVals()` maps state to the markup).
- `_ds/ninja-selling-design-system-.../` — design system: `tokens/*.css` (the token source of truth), `styles.css`, and `_ds_bundle.js` (compiled Button/Input/Textarea/Select/Checkbox primitives).
- `assets/logo-primary.png`.

## Notes for implementation
- Submission currently only `console.log`s the payload. Point it at the real endpoint and add a submitting/disabled state plus a failure path (a quiet inline message in `--attention`, matching the validation banner — no alert dialogs).
- Base64 images in the JSON body are fine for a couple of screenshots; if the backend prefers uploads, switch to `multipart/form-data` or presigned URLs and keep the 1600px/0.8 downscale.
- Add server-side validation mirroring the client rules, plus basic spam protection.
- Accessibility: the paste/drop zone is a focusable div — in the real implementation make it a `<button>` or add `role="button"` with Enter/Space handling, and announce attachment adds/removes via a live region.
