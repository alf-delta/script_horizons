# Birthday Mode — Integration Guide
# horizons-getaways-script.jsx

## What changes, what stays the same

STAYS THE SAME:
- All existing B2B modules — untouched
- 4-panel layout, grid, header structure
- Supabase notes (per module_id, per user)
- Recently visited tracker
- Auth flow

CHANGES:
- Header: mode switcher added (B2B Agency | Birthday Outreach)
- Script data: `activeModules` becomes computed from current mode
- stageColors: extended with birthday palette
- Starting module: mode-aware (`opening` for B2B, `bday_opening_birthday` for Birthday)
- Panel title / subtitle: reflects current mode


## Step 1 — Add modules data

Create new file: src/birthdayModules.js
Copy content from horizons-birthday-modules.js into it.

In horizons-getaways-script.jsx, at the top:

  import { birthdayModules } from './birthdayModules';


## Step 2 — Add mode state

Inside HorizonsScript component, near the top with other useState:

  const [scriptMode, setScriptMode] = useState('b2b');
  // 'b2b' | 'birthday'


## Step 3 — Compute activeModules

Replace your current static `modules` array reference with:

  const activeModules = scriptMode === 'birthday' ? birthdayModules : modules;

Then replace every reference to `modules` in the component with `activeModules`.

IMPORTANT — places to check:
  - Module lookup:        activeModules.find(m => m.id === currentId)
  - Topics panel:        activeModules grouped by stage
  - Recent modules:      already uses IDs — no change needed
  - Notes panel:         module_id stored as string — works across modes
  - Restart button:      reset to mode-appropriate start ID (see Step 5)


## Step 4 — Mode switcher in header

Find your header JSX. Add this switcher next to the company name / subtitle:

  <div style={{
    display: 'flex',
    gap: '4px',
    background: '#E8E4E1',
    borderRadius: '8px',
    padding: '3px',
  }}>
    {[
      { key: 'b2b',      label: 'B2B Agency'       },
      { key: 'birthday', label: 'Birthday Outreach' },
    ].map(({ key, label }) => (
      <button
        key={key}
        onClick={() => handleModeSwitch(key)}
        style={{
          padding: '5px 14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '500',
          background: scriptMode === key ? '#FFFFFF' : 'transparent',
          color:      scriptMode === key ? '#1F2937'  : '#6B7280',
          boxShadow:  scriptMode === key ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
          transition: 'all 0.15s ease',
        }}
      >
        {label}
      </button>
    ))}
  </div>


## Step 5 — handleModeSwitch function

Add this function inside HorizonsScript (near your other handlers):

  const START_MODULE = {
    b2b:      'opening',              // your existing B2B start ID
    birthday: 'bday_opening_birthday',
  };

  const handleModeSwitch = (newMode) => {
    setScriptMode(newMode);
    setCurrentModuleId(START_MODULE[newMode]);
    setHistory([]);
    setRecentModules([]);
    // notes are user+module_id scoped — no reset needed
  };

Note: if your Restart button uses a hardcoded start ID, update it:

  onClick={() => {
    setCurrentModuleId(START_MODULE[scriptMode]);
    setHistory([]);
  }}


## Step 6 — Stage colors

In your stageColors object (or wherever you map stage → color), add:

  // Birthday mode stages reuse most B2B colors.
  // Only Opening gets a new color to signal different mode.
  // The rest are intentionally the same — no need to maintain two full palettes.

  const stageColors = {
    // --- existing B2B colors ---
    'Opening':    '#B34233',
    'Value Pitch':'#5A7B8F',
    'Qualification': '#7B6B5D',
    'Close':      '#4A7C59',
    'Objection':  '#C4553A',
    'Info Module':'#6B7280',

    // --- birthday-specific override for Opening stage ---
    // Apply only when scriptMode === 'birthday':
    // 'Opening': '#7C5C8A',   // warm purple — visual signal of birthday mode
  };

  // Easiest approach — compute color with mode awareness:
  const getStageColor = (stage) => {
    if (scriptMode === 'birthday' && stage === 'Opening') return '#7C5C8A';
    return stageColors[stage] || '#6B7280';
  };

  // Then replace stageColors[module.stage] with getStageColor(module.stage)
  // everywhere in the JSX.


## Step 7 — Header subtitle (optional but nice)

Show which mode is active in the dashboard subtitle:

  <span style={{ color: '#6B7280', fontSize: '13px' }}>
    {scriptMode === 'birthday'
      ? 'Birthday Outreach — Past Florida Guests'
      : 'B2B Agency Outreach — US Southeast'}
  </span>


## Step 8 — Supabase notes — no changes needed

Notes are stored as: { user_id, module_id, text, done }
Birthday module IDs all start with `bday_` — they're naturally isolated.
No migration needed. Notes from B2B calls won't bleed into birthday modules.


## Module ID reference — Birthday Mode

OPENING
  bday_opening_birthday   ← default start (strongest opener)
  bday_opening_warm
  bday_opening_news
  bday_credibility

PITCH
  bday_pitch_news
  bday_pitch_details

CLOSE
  bday_availability       ← soft close
  bday_booking_confirm
  bday_success
  bday_callback
  bday_post_call          ← checklist

OBJECTIONS
  bday_obj_busy
  bday_obj_not_interested
  bday_obj_price
  bday_obj_has_plans
  bday_obj_maybe

INFO / EXIT
  bday_graceful_exit
  bday_venue_info


## Navigation flow — happy path

  bday_opening_birthday
    → bday_pitch_news
      → bday_availability
        → bday_booking_confirm
          → bday_success
            → bday_post_call


## Navigation flow — most common objection paths

  bday_opening_birthday → bday_obj_busy → bday_callback → bday_post_call
  bday_pitch_news       → bday_obj_price → bday_availability → bday_booking_confirm
  bday_pitch_news       → bday_obj_has_plans → bday_post_call
  bday_availability     → bday_obj_maybe → bday_availability → bday_booking_confirm


## Files to modify

  horizons-getaways-script.jsx    — mode state, switcher, activeModules, getStageColor, handleModeSwitch
  src/birthdayModules.js          — NEW file (copy from horizons-birthday-modules.js)

Files NOT touched:
  src/main.jsx
  src/supabase.js
  src/LoginScreen.jsx
  supabase-migration.sql
  vite.config.js
  package.json
