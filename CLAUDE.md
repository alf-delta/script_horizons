# Horizons Getaways — Sales Script Dashboard

## What this is

A React single-page app that serves as an interactive sales script dashboard for Horizons Getaways glamping resort managers. Managers follow branching conversation flows during live phone calls — clicking responses to navigate between modules, taking notes per module, and switching between scripts for different sales scenarios.

**Live at:** gohorizons.com (deployed via Railway or Vite build)

---

## Tech stack

- **React 19 + Vite 6** — JSX, hooks only (useState, useCallback, useMemo, useEffect)
- **Supabase** — Auth (email/password) + PostgreSQL with Row Level Security
- **Env vars:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (in `.env`, not committed)
- No CSS framework — inline styles throughout, CSS Grid layout

---

## File structure

```
/
├── horizons-getaways-script.jsx   # Main dashboard component (single large file)
├── src/
│   ├── main.jsx                   # Auth wrapper — session gate before rendering dashboard
│   ├── supabase.js                # Supabase client init
│   ├── LoginScreen.jsx            # Email/password sign up / sign in form
│   ├── birthdayModules.js         # Birthday mode EN — 18 modules + groups + accent
│   ├── spanishBirthdayModules.js  # Birthday mode ES — same structure, cultural adaptation
│   ├── inboundModules.js          # Inbound Leads mode EN — 18 modules + groups + accent
│   └── spanishInboundModules.js   # Inbound Leads mode ES — same structure
│   └── spanishModules.js          # B2B mode ES — 25 modules, same IDs as SCRIPT_DATA
├── BD_project/
│   └── placeholders-to-fill.json  # Business data gaps to fill before calling live
├── supabase-migration.sql         # Already executed — creates user_notes table + RLS
├── public/
│   ├── logo.png                   # Horizons Getaways logo (96px tall in header)
│   └── favicon.png
└── .env                           # NOT in git
```

`SCRIPT_DATA` (25 B2B modules) lives inside `horizons-getaways-script.jsx` directly. All other mode data is imported from `src/`.

---

## Script modes

| Mode | Status | Start module | Description |
|------|--------|-------------|-------------|
| `b2b` | Active | `gatekeeper` | Cold outreach to travel agencies for referral partnerships |
| `inbound` | Active | `inbound_opening` | Warm inbound leads from ad campaigns targeting beach/vacation queries |
| `birthday` | Archived | `bday_opening_birthday` | B2C birthday celebration outreach — in Archive dropdown |

Mode switching resets to each mode's start module. Archive modes are hidden behind a dropdown (`archiveOpen` state), not deleted.

---

## Language system

Two-language toggle: **EN** / **ES** (Latin American Spanish, Florida/South American dialect, `usted` form).

```js
const activeData =
  scriptMode === "birthday" ? (scriptLang === "es" ? SPANISH_BIRTHDAY_DATA : BIRTHDAY_DATA) :
  scriptMode === "inbound"  ? (scriptLang === "es" ? SPANISH_INBOUND_DATA : INBOUND_DATA) :
  (scriptLang === "es" ? SPANISH_DATA : SCRIPT_DATA);
```

- EN is default. Toggle renders in header with brick glow/soft gradient accent border.
- Language does NOT reset when switching modes. Each mode has full EN + ES coverage.
- Spanish modules share the same module IDs as their EN counterparts — the graph structure is identical, only text differs.
- Spanish adaptation is cultural, not literal translation — tone, idioms, and formality are adapted for Latin American business Spanish.

---

## Module data shape

Every module follows this structure:

```js
{
  id: "module_id",
  title: "Display title",
  stage: "stage_name",          // used for color-coding
  script: "Text the manager reads aloud",
  responses: [
    { text: "What the prospect might say", next: "next_module_id" },
    ...
  ]
}
```

`responses` entries with `next: null` are terminal (call ends). Some modules have no responses (informational only).

---

## B2B mode — key modules

- `gatekeeper` → routes to `opening` (LPR on the line), `gatekeeper_influencer` (can relay), or `gatekeeper_front_desk` (need DM info)
- `opening` → pitch, objections, close
- Commission structure: tiered — 15% up to threshold, 20% mid, 25% top volume
- Key objections: `obj_not_niche`, `obj_happy_with_others`, `obj_not_enough_demand`, `obj_send_email`, `obj_think_about_it`
- `success` → sends partnership portal link, follows up with deck

## Inbound Leads mode — key modules

- Core module: `inbound_reposition` — validates beach desire, pivots to "escape" framing
- Objection `inbound_obj_bugs` — mentions bio-insecticide firewood in the firepit that repels mosquitoes
- Key objections: `obj_wanted_beach`, `obj_not_outdoors`, `obj_bugs`, `obj_price`, `obj_already_booked`, `obj_think`, `obj_kids_activities`
- Utility: `inbound_what_is_glamping` — explains glamping for unfamiliar leads

---

## Dashboard layout

4-panel CSS Grid, 100vh, no scroll:

```
[ Script panel (top-left) ] [ Topics & Responses (top-right) ]
[ Notes panel (bottom-left) ] [ Recent Topics (bottom-right)  ]
```

Grid: `gridTemplateRows: "2fr 1fr"`, `gridTemplateColumns: "1fr 320px"`

Script font: 19px (30% larger than original 14.5px baseline).

---

## Supabase

**Table:** `user_notes`
```sql
id uuid, user_id uuid → auth.users, module_id text, text text, done boolean, created_at timestamptz
```

RLS: all policies use `auth.uid() = user_id` — users only see their own notes. Notes are per `(userId, moduleId)` pair.

**Auth:** Email/password only. Session managed in `src/main.jsx` via `onAuthStateChange`.

---

## Pending business data

`BD_project/placeholders-to-fill.json` tracks real values needed before going live. Placeholders still in scripts:

- `[X]%` — base commission rate
- `$[Y]` / `$[Z]` — booking price range low/high
- `$[amount]` — typical referral earning
- `[N]+` — tier threshold referral count
- `[higher]%` — higher-tier rate
- `$[annual amount]` — top partner annual earning
- `[X] properties` — property count
- `[specific locations]` — named SC locations

Per-call fields (`[Name]`, `[Agency Name]`, `[Day A]`, etc.) are filled by the manager before each call — no global replacement needed.

---

## What to avoid

- Do not add a CSS framework or change the inline-style pattern — all styling is inline.
- Do not split `SCRIPT_DATA` out of `horizons-getaways-script.jsx` — it imports from `src/` for other modes but B2B data stays in the main file.
- Do not use `.us` for the website URL — it's `gohorizons.com`.
- Do not add unverified statistics. The $3–4B glamping market size is confirmed valid. Percentage growth claims without a cited source are not.
- Do not add comments explaining what code does — only add comments for non-obvious WHY.
- Do not reset language when switching modes.
- Do not delete archived modes — archive = hidden in dropdown, not removed.
- Module IDs must stay stable — they are used as Supabase `module_id` foreign keys in saved notes.

---

## Running locally

```bash
npm run dev     # starts Vite dev server
npm run build   # production build to /dist
```

Requires `.env` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
