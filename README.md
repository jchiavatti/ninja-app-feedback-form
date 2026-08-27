# Ninja Selling app feedback form

A public, single-page feedback intake for the Ninja Selling platform. An agent — or a
coach submitting on someone's behalf — picks a note type, fills in a short set of fields
that adapt to that type, optionally attaches screenshots, acknowledges the non-urgent
SLA, and submits.

Built from the Claude design handoff in [`design-reference/`](design-reference/), matching
its tokens, copy, conditional logic, and validation rules.

**→ To stand it up, follow [SETUP.md](SETUP.md).**

---

## How it works

```
Browser (GitHub Pages)                Google Apps Script              Google account
┌──────────────────────┐              ┌────────────────────┐          ┌──────────────┐
│ index.html           │  POST JSON   │ doPost()           │  append  │ Google Sheet │
│ downscales images    │ ───────────► │  validate + guard  │ ───────► │ one row each │
│ to 1600px JPEG 0.8   │              │  store screenshots │          ├──────────────┤
│                      │ ◄─────────── │  append row        │  upload  │ Drive folder │
└──────────────────────┘  {ok:true}   └────────────────────┘ ───────► │ per-submission│
                                                                       └──────────────┘
```

There is no server to run and no credentials anywhere. The Apps Script is deployed **by
the Google account that owns the target Drive**, and runs *as* that account — which is
how the screenshots reach a Drive that Claude Code has no access to.

Each submission produces one Sheet row. If it carried screenshots, they go into their own
Drive subfolder named `2026-08-27 14-30-02 — Jane Rivera — broken`, and the row's
**Screenshots** cell links straight to that folder.

### Why `Content-Type: text/plain`

The form posts JSON with a `text/plain` content type. That keeps it a CORS *simple
request*, so the browser sends no `OPTIONS` preflight — which matters because Apps Script
web apps don't answer preflight requests. The body is still JSON and is parsed as JSON on
the other side. Don't "fix" this to `application/json`; it will break.

---

## Layout

```
index.html              the page
css/tokens.css          design-system tokens, copied verbatim — don't invent values here
css/app.css             base styles, form primitives, page layout
js/config.js            the only file you edit after deploying (endpoint + limits)
js/app.js               form behaviour
assets/logo-primary.png official wordmark — never recolour, stretch, or add effects
apps-script/Code.gs     the backend, pasted into Apps Script
design-reference/       the original Claude design handoff and its spec
```

`css/app.css` reimplements the design system's `Button`, `Input`, `Select`, `Textarea`,
and `Checkbox` in plain CSS, matching the bundled React primitives' rest/focus/invalid
treatment. If this ever moves into an app that already has those components, use them
instead and map the tokens across.

---

## Local development

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>. With `ENDPOINT` empty in `js/config.js` the form runs
in dry-run mode: it validates normally and logs the payload to the console instead of
sending it.

Asset links carry a `?v=1` query. Bump it when you change `app.css` or `app.js` so
browsers and the GitHub Pages CDN pick up the new file instead of a cached one.

---

## Payload

```json
{
  "report_type": "broken | idea | win",
  "on_behalf_of": false,
  "submitter_name": "", "submitter_email": "",
  "affected_name": "", "affected_email": "",
  "screen": "", "platform": "", "description": "", "timing": "",
  "acknowledged_non_urgent": true,
  "user_agent": "", "submitted_at": "ISO-8601",
  "images": ["data:image/jpeg;base64,…"],
  "company": "", "elapsed_ms": 42000
}
```

For `report_type: "idea"`, `screen` / `platform` / `timing` are sent as empty strings.
`company` and `elapsed_ms` are the spam guards, described below.

When the on-behalf box is unchecked, `affected_*` mirrors `submitter_*` — so the "who is
this actually about" columns are always populated.

---

## Validation

Runs on submit only; each field's error clears as soon as that field changes. The same
rules run again in `Code.gs`, so a crafted request can't skip them.

- a note type is selected
- description is ≥ 8 characters after trim (and ≤ 5000)
- submitter name is non-empty
- submitter email matches `/.+@.+\..+/`
- if on-behalf: the affected person's name is non-empty
- the acknowledgement box is checked

---

## Spam protection

No CAPTCHA — the audience skews older and the form is low-value to spammers. Three quiet
layers instead:

- **Honeypot.** A visually hidden `company` field. People never see it; bots that fill
  every input get rejected.
- **Time-to-submit.** Anything submitted in under 3 seconds (`MIN_FILL_MS`) is rejected.
- **Rate limit.** Max 12 submissions per hour per submitter email
  (`RATE_LIMIT_PER_HOUR`), tracked in the script cache.

Plus hard caps: 6 screenshots, 4 MB each after downscaling, 5000-character description.

If this ever does attract real abuse, the next step is Cloudflare Turnstile — add the
widget to the page and verify the token at the top of `doPost`.

---

## Privacy

- `localStorage` holds **only** `{name, email}` for the submitter, under
  `ninja_connect_submitter`, so returning users don't retype it. Nothing else is stored.
- The affected person's details are never persisted — they're cleared on load, after each
  submit, and on a back-button page restore.
- Screenshots are private to the Drive folder by default. See "Screenshot visibility" in
  [SETUP.md](SETUP.md) before changing that.

---

## Design constraints

From the brand guide — these are non-negotiable and worth re-reading before any change:

- No gamification: no badges, streaks, scores, progress bars, or celebration animations.
- Sentence case everywhere; ALL CAPS only on the small wide-tracked eyebrow labels. No emoji.
- Copper `#977B58` is the single primary action colour; one primary button per view.
- Calm motion only: 200ms `cubic-bezier(.4,0,.2,1)`, no bounce or overshoot.
- Touch targets ≥ 48px; body text ≥ 16px.
- Quiet semantics — mauve for attention, olive for positive. No alarm red, no bright green.
