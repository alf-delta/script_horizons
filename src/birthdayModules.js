// ============================================================
// HORIZONS GETAWAYS — Birthday Outreach Script Modules
// Mode: "birthday" — warm call to past Florida guests
// whose birthday falls in April or May
// ============================================================

export const BIRTHDAY_DATA = {
  bday_opening_warm: {
    id: "bday_opening_warm",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Warm Opener — They Know Us",
    cogTip: "You're not a stranger. They chose Horizons before. Speak like someone who remembers them — not like someone reading a list.",
    script: `"Hi, is this [Name]? Hey [Name] — this is [your name] calling from Horizons Getaways. You stayed with us at our Florida location a while back, and I just wanted to reach out personally — we just opened a brand-new location and I thought of you."`,
    notes: [
      "Use their name at least twice in the first 30 seconds",
      "Pause after 'I thought of you' — let it land before continuing",
      "Warm and unhurried — this is NOT a cold call tone",
    ],
    responses: [
      { label: "Oh hey, yeah I remember!", next: "bday_pitch_news" },
      { label: "Who is this again?", next: "bday_credibility" },
      { label: "I'm busy right now", next: "bday_obj_busy" },
      { label: "Not interested", next: "bday_obj_not_interested" },
    ],
  },

  bday_opening_news: {
    id: "bday_opening_news",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Opener — Lead With the News",
    cogTip: "A real news hook ('we just opened') gives you a genuine reason to call. It doesn't feel like a sales pitch — it feels like an update.",
    script: `"Hi [Name]! This is [your name] from Horizons Getaways. You stayed with us at our Florida location — and I'm calling with some exciting news. We just opened a brand-new location in South Carolina, and I wanted you to be one of the first to hear about it."`,
    notes: [
      "Use this version if Option A feels too soft for the situation",
      "'One of the first to hear' creates mild exclusivity — use it naturally, not as a pressure tactic",
    ],
    responses: [
      { label: "Oh nice, tell me more", next: "bday_pitch_news" },
      { label: "Who is this again?", next: "bday_credibility" },
      { label: "I'm busy", next: "bday_obj_busy" },
      { label: "Not interested", next: "bday_obj_not_interested" },
    ],
  },

  bday_opening_birthday: {
    id: "bday_opening_birthday",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Opener — Birthday First (Strongest)",
    cogTip: "Lead with the birthday only when you know their birth month. It's the most personal opener — but it must feel natural, not creepy. Warm tone is everything here.",
    script: `"Hi [Name], this is [your name] from Horizons Getaways — you stayed with us in Florida. I actually noticed your birthday is coming up this spring, and I had to call — we just opened a gorgeous new location in South Carolina that would be absolutely perfect for it."`,
    notes: [
      "BEST version when you know their birth month is April or May",
      "'I had to call' signals genuine enthusiasm — not a script",
      "If they seem surprised you know their birthday: 'It's in your guest profile from your stay with us'",
    ],
    responses: [
      { label: "Ha, how did you know?", next: "bday_credibility" },
      { label: "Tell me about the new place", next: "bday_pitch_news" },
      { label: "I'm busy", next: "bday_obj_busy" },
      { label: "Not interested", next: "bday_obj_not_interested" },
    ],
  },

  bday_credibility: {
    id: "bday_credibility",
    stage: "Opening",
    stageNum: "1",
    method: "H2H",
    title: "Re-establish Who We Are",
    cogTip: "Keep it short. One vivid memory from their Florida stay is worth more than a company description.",
    script: `"Of course — Horizons Getaways, we're the glamping retreat you stayed at in Florida. Private cottages, outdoor spaces — that Horizons experience. We have your guest profile from your stay, that's actually how I noticed your birthday coming up. We just opened a second location in South Carolina and I wanted to personally reach out."`,
    notes: [
      "If they don't remember the Florida stay at all — pivot to bday_pitch_news and don't dwell on it",
      "Keep this block under 20 seconds — it's a bridge, not a pitch",
    ],
    responses: [
      { label: "Oh right, I remember now!", next: "bday_pitch_news" },
      { label: "OK, what's the new location?", next: "bday_pitch_news" },
      { label: "Still not sure I remember", next: "bday_pitch_news" },
    ],
  },

  bday_pitch_news: {
    id: "bday_pitch_news",
    stage: "Pitch",
    stageNum: "2",
    method: "H2H",
    title: "The New Location + Birthday Hook",
    cogTip: "Paint one vivid picture, don't list features. 'Waking up in your own cottage on your birthday' does more than any amenity list.",
    script: `"So we just opened Horizons Sand Hills in South Carolina — it's a glamping retreat with private cottages, open-air spaces, and beautiful nature all around. Really different vibe from Florida, but that same Horizons feel you already know. And with your birthday coming up in [April / May] — I just thought, what a way to celebrate. Imagine waking up in your own private cottage out in nature on your birthday morning."`,
    notes: [
      "Pause after the picture — let them react before you say anything else",
      "Don't list amenities. One image > five bullet points",
      "'Same Horizons feel you already know' activates their memory — use it",
      "If they respond with energy — go straight to bday_availability",
    ],
    responses: [
      { label: "That sounds amazing", next: "bday_availability" },
      { label: "Tell me more about it", next: "bday_pitch_details" },
      { label: "How much does it cost?", next: "bday_obj_price" },
      { label: "I already have plans", next: "bday_obj_has_plans" },
      { label: "Maybe, I'm not sure", next: "bday_obj_maybe" },
    ],
  },

  bday_pitch_details: {
    id: "bday_pitch_details",
    stage: "Pitch",
    stageNum: "2",
    method: "H2H",
    title: "Venue Details — On Request",
    cogTip: "They asked — so give them real information. But keep it conversational, not a brochure readout.",
    script: `"Sure! Sand Hills is our newest property — it's in South Carolina, set in nature with private cottages you can book for a night or a weekend. You get your own space, there are outdoor activities on site, and it has that same retreat feel as Florida but in a completely different landscape. It's opening in April, so your birthday timing is actually perfect."`,
    notes: [
      "Keep it to 3-4 sentences max — you're still in the pitch stage",
      "End with a question: 'Does that sound like the kind of thing you'd be into?'",
      "If they ask about specific amenities you don't know — say 'Let me check that and follow up'",
    ],
    responses: [
      { label: "Yeah that does sound nice", next: "bday_availability" },
      { label: "How much is it?", next: "bday_obj_price" },
      { label: "I already have plans", next: "bday_obj_has_plans" },
      { label: "Not really my thing", next: "bday_obj_not_interested" },
    ],
  },

  bday_availability: {
    id: "bday_availability",
    stage: "Close",
    stageNum: "3",
    method: "SNAP",
    title: "Check Availability — Soft Close",
    cogTip: "Don't ask 'do you want to book?' — ask if they want to check availability. It's a micro-commitment that feels easy to say yes to.",
    script: `"So [Name] — should I go ahead and check what's available around your birthday? I can tell you exactly what's open and what the rates look like. Takes two minutes. And if you want to hold a date, we can do that right now."`,
    notes: [
      "Check Cloudbeds before or during this call if possible",
      "'Hold a date' is lower friction than 'make a booking' — use that language",
      "If they say yes — move to bday_booking_confirm",
      "If they hesitate — bday_obj_maybe",
    ],
    responses: [
      { label: "Yes, let's check", next: "bday_booking_confirm" },
      { label: "Sure, what are the rates?", next: "bday_obj_price" },
      { label: "Maybe, let me think", next: "bday_obj_maybe" },
      { label: "Not right now", next: "bday_obj_not_interested" },
    ],
  },

  bday_booking_confirm: {
    id: "bday_booking_confirm",
    stage: "Close",
    stageNum: "3",
    method: "SNAP",
    title: "Confirm the Booking",
    cogTip: "Keep the energy warm and celebratory — they're booking a birthday, not signing a contract. Make it feel exciting.",
    script: `"Perfect! So I'm looking at [dates] — we have [availability]. The rate for that would be [price]. To hold that date I'd just need your name and email — we can handle the rest from there. And happy early birthday, [Name] — this is going to be a great one."`,
    notes: [
      "Fill in [dates], [availability], [price] from Cloudbeds in real time",
      "Confirm details in Cloudbeds immediately after the call",
      "Send confirmation to their email same day",
      "Log outcome in CRM: name, birthday month, dates booked",
    ],
    responses: [
      { label: "Great, let's do it!", next: "bday_success" },
      { label: "Can I think about it?", next: "bday_obj_maybe" },
      { label: "Price is too high", next: "bday_obj_price" },
    ],
  },

  bday_success: {
    id: "bday_success",
    stage: "Close",
    stageNum: "3",
    method: "H2H",
    title: "Booking Confirmed",
    cogTip: "End on a high. This is a celebration — match the energy.",
    script: `"Wonderful! I've got you down for [dates] at Sand Hills. You'll receive a confirmation to [email] shortly. We're so excited to have you celebrate your birthday with us at the new location — it's going to be special. If you have any questions before then, just reach out to us at gohorizons.us. Can't wait to see you there, [Name]!"`,
    notes: [
      "Confirm booking in Cloudbeds immediately",
      "Send confirmation email same day",
      "Log in CRM: booked, dates, guest name",
      "This is a win — celebrate it internally too",
    ],
    responses: [
      { label: "Call complete — log it", next: "bday_post_call" },
    ],
  },

  bday_callback: {
    id: "bday_callback",
    stage: "Close",
    stageNum: "3",
    method: "H2H",
    title: "Schedule a Callback",
    cogTip: "A specific time is 3x more likely to result in a real callback than 'I'll try again later'.",
    script: `"No problem at all, [Name]. When would be a better time to reach you — would [day] work, maybe around [time]? I'll send you our website in the meantime so you can take a look: gohorizons.us."`,
    notes: [
      "Get a specific day and time — not 'sometime next week'",
      "Set reminder in CRM immediately",
      "Send website link by text or email before hanging up if possible",
    ],
    responses: [
      { label: "Set callback — log it", next: "bday_post_call" },
    ],
  },

  bday_post_call: {
    id: "bday_post_call",
    stage: "Close",
    stageNum: "3",
    method: "H2H",
    title: "Post-Call Checklist",
    cogTip: "The call ends — the work doesn't. Log everything now while it's fresh.",
    script: `— Internal checklist — not spoken aloud —`,
    notes: [
      "Log in CRM: guest name, birthday month, interest level, outcome",
      "If availability requested — check Cloudbeds and send details within 24h",
      "If 'maybe later' — set follow-up reminder for 7 days",
      "If booked — confirm in Cloudbeds + send confirmation email",
      "If no answer — try once more on a different day, then mark unreachable",
      "Send website link: gohorizons.us",
    ],
    responses: [
      { label: "Start new call", next: "bday_opening_birthday" },
    ],
  },

  bday_obj_busy: {
    id: "bday_obj_busy",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objection — I'm Busy",
    cogTip: "Don't push. Respect their time — it's the fastest way to keep the door open.",
    script: `"Absolutely, I'll keep it brief — we're Horizons Getaways, you stayed with us in Florida. We just opened a new glamping location in South Carolina, and your birthday is coming up in [April/May] — I thought it might be a perfect fit. Can I send you a quick link and follow up next week?"`,
    notes: [
      "Under 20 seconds — honor what you said ('I'll keep it brief')",
      "Goal here: get permission to follow up, not to pitch",
      "If they agree to a callback — get a specific time",
    ],
    responses: [
      { label: "OK, send me the link", next: "bday_callback" },
      { label: "Actually tell me more", next: "bday_pitch_news" },
      { label: "No thanks", next: "bday_graceful_exit" },
    ],
  },

  bday_obj_not_interested: {
    id: "bday_obj_not_interested",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Not Interested",
    cogTip: "Don't fight it. Leave the door open — they were a guest once, they might be again.",
    script: `"No worries at all, [Name] — I completely understand. If you ever want to check out the new location, our website is gohorizons.us. It's worth a look when you have a moment. Hope you have a wonderful birthday this spring!"`,
    notes: [
      "No second attempt after a clear 'not interested'",
      "Warm, genuine close — they may come back on their own",
      "Log in CRM: not interested, date of call",
    ],
    responses: [
      { label: "End call — log it", next: "bday_post_call" },
    ],
  },

  bday_obj_price: {
    id: "bday_obj_price",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objection — How Much / Too Expensive",
    cogTip: "Don't give a price without availability context. Anchor to the experience first, then the number.",
    script: `"Totally fair question. Rates depend on the dates and cottage type — let me pull up what's available around your birthday so I can give you the exact numbers. What dates were you thinking? That way I can give you something real, not a rough guess."`,
    notes: [
      "Never give a vague price range — it anchors them to the wrong number",
      "Pull up Cloudbeds and give real availability + pricing",
      "If the price is genuinely too high: 'We do have different cottage options at different price points — let me show you what's available'",
    ],
    responses: [
      { label: "OK, let's check dates", next: "bday_availability" },
      { label: "Still seems too much", next: "bday_graceful_exit" },
      { label: "Actually let's do it", next: "bday_booking_confirm" },
    ],
  },

  bday_obj_has_plans: {
    id: "bday_obj_has_plans",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Already Have Birthday Plans",
    cogTip: "Don't push. Pivot to later in the year or leave a warm impression for next time.",
    script: `"Oh that's great — happy early birthday! If anything changes or you're looking for a getaway later this year, keep us in mind. Sand Hills is going to be stunning in the summer too. I'll send you the link — gohorizons.us — just to have it."`,
    notes: [
      "This is not a lost contact — they're a past guest with a future",
      "Log in CRM: has plans, follow up in 3 months",
      "Summer / fall getaway is a genuine secondary hook",
    ],
    responses: [
      { label: "Actually, what are the dates?", next: "bday_availability" },
      { label: "End call — log it", next: "bday_post_call" },
    ],
  },

  bday_obj_maybe: {
    id: "bday_obj_maybe",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objection — Maybe / Need to Think",
    cogTip: "Soft urgency — not pressure. April and May do fill up. Mention it once, naturally.",
    script: `"Totally understand — no pressure at all. The one thing I'll mention is that April and May tend to book up pretty fast since it's opening season for us. Want me to just check what's still open around your birthday so you have the info? You don't have to decide anything right now."`,
    notes: [
      "Offer to check availability — it's a low-commitment yes",
      "'You don't have to decide anything right now' reduces resistance",
      "If still unsure — offer a callback at a specific time",
    ],
    responses: [
      { label: "Sure, check availability", next: "bday_availability" },
      { label: "I'll call you back", next: "bday_callback" },
      { label: "No, I'll pass", next: "bday_graceful_exit" },
    ],
  },

  bday_graceful_exit: {
    id: "bday_graceful_exit",
    stage: "Info",
    stageNum: "INFO",
    method: "H2H",
    title: "Graceful Exit",
    cogTip: "Every call that ends well is a future booking. Leave them with warmth.",
    script: `"Completely understood, [Name]. No pressure at all — I just wanted to make sure you knew about it. Our website is gohorizons.us if you ever feel like checking it out. Hope you have an amazing birthday this spring — take care!"`,
    notes: [
      "Warm, genuine — no frustration in the voice",
      "Log in CRM: outcome, date, notes",
      "Do not call again unless they reach out first",
    ],
    responses: [
      { label: "End call — log it", next: "bday_post_call" },
    ],
  },

  bday_venue_info: {
    id: "bday_venue_info",
    stage: "Info",
    stageNum: "INFO",
    method: "H2H",
    title: "Venue Quick Reference",
    cogTip: "On-demand facts if they ask specific questions. Keep answers short — you're in a call, not a tour.",
    script: `— Reference only — answer questions as needed —`,
    notes: [
      "Location: South Carolina — Horizons Sand Hills",
      "Property type: Glamping — private cottages, open-air spaces",
      "Activities: On-site outdoor activities (details in Cloudbeds)",
      "Opening: April 2026",
      "Accommodates: Individuals, couples, small groups",
      "Website: gohorizons.us",
      "Bookings: Via Cloudbeds — check availability in real time",
    ],
    responses: [
      { label: "Back to pitch", next: "bday_pitch_news" },
      { label: "Check availability", next: "bday_availability" },
    ],
  },
};

export const BIRTHDAY_TOPIC_GROUPS = {
  "Opening": ["bday_opening_birthday", "bday_opening_warm", "bday_opening_news", "bday_credibility"],
  "Pitch": ["bday_pitch_news", "bday_pitch_details"],
  "Close": ["bday_availability", "bday_booking_confirm", "bday_success", "bday_callback", "bday_post_call"],
  "Objections": ["bday_obj_busy", "bday_obj_not_interested", "bday_obj_price", "bday_obj_has_plans", "bday_obj_maybe"],
  "Info": ["bday_graceful_exit", "bday_venue_info"],
};

export const BIRTHDAY_STAGE_ACCENT = {
  "Opening": "#7C5C8A",
  "Pitch": "#5A7B8F",
  "Close": "#4A7C59",
  "Objection": "#C4553A",
  "Objections": "#C4553A",
  "Info": "#6B7280",
};
