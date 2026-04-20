// ============================================================
// HORIZONS GETAWAYS — Inbound Leads Script
// Mode: "inbound" — warm leads from ad campaigns
// targeting queries like "beach town south carolina"
// Goal: reposition from beach/town to nature/glamping
// ============================================================

export const INBOUND_DATA = {

  inbound_opening: {
    id: "inbound_opening",
    stage: "Opening",
    stageNum: 1,
    method: "H2H",
    title: "Warm Opener — They Filled Out a Form",
    cogTip: "They came to you — that's huge. They're already interested in a South Carolina getaway. Your job isn't to sell from scratch, it's to redirect. Lead with their intention, not your product.",
    script: `"Hi, is this [Name]? Hey [Name], this is [Your Name] calling from Horizons Getaways — you recently reached out about a getaway in South Carolina, and I wanted to personally follow up.\n\nFirst — did I catch you at an okay time? [Wait]\n\nPerfect. So I saw you were looking into South Carolina for a trip — I'd love to hear a little about what you had in mind. What kind of experience were you hoping for?"`,
    notes: [
      "Always ask if it's a good time — they filled a form, not answered an ad call",
      "Open with a question about THEIR vision — don't pitch yet",
      "Listen for: who they're traveling with, timeframe, vibe they want",
      "The goal of this module is to gather intel, not to sell"
    ],
    responses: [
      { label: "Beach / coastal town vibe", next: "inbound_reposition" },
      { label: "Just exploring options", next: "inbound_pitch" },
      { label: "Already knows about glamping", next: "inbound_pitch" },
      { label: "I'm busy / bad time", next: "inbound_callback" },
      { label: "Wrong number / not interested", next: "inbound_graceful_exit" }
    ]
  },

  inbound_reposition: {
    id: "inbound_reposition",
    stage: "Reposition",
    stageNum: 2,
    method: "H2H",
    title: "The Pivot — From Beach to Nature",
    cogTip: "Don't dismiss what they wanted. Validate it first. Then offer a reframe — not a replacement. The goal is 'what if I told you there's something even better for what you're actually after?'",
    script: `"I totally get it — South Carolina has amazing coastal spots, and that beach town energy is really appealing. Can I share something with you, though?\n\nA lot of our guests actually came to us the same way you did — they were thinking beach, and then they experienced something completely different and honestly couldn't believe they hadn't done it sooner.\n\nWe're a glamping retreat about 90 minutes from Charlotte, set in nature in South Carolina. Think private cottages, outdoor fire pits, kayaking, a pool — but none of the crowds, parking nightmares, or overpriced seafood restaurants that come with beach towns in the summer.\n\nSame South Carolina, completely different feel. More private, more personal, honestly more memorable. What kind of trip is this — are you going with a partner, family, or a group of friends?"`,
    notes: [
      "'I totally get it' — validate before pivoting, never dismiss",
      "The 'our guests came the same way' line = social proof + normalizes the reposition",
      "'Couldn't believe they hadn't done it sooner' = future regret framing",
      "The beach town pain points (crowds, parking, prices) are real — use them naturally",
      "End with a qualifying question — gather intel for the pitch"
    ],
    responses: [
      { label: "Traveling with partner / romantic trip", next: "inbound_pitch_couples" },
      { label: "Family with kids", next: "inbound_pitch_families" },
      { label: "Group of friends", next: "inbound_pitch" },
      { label: "Solo / flexible", next: "inbound_pitch" },
      { label: "I really wanted the beach though", next: "inbound_obj_wanted_beach" }
    ]
  },

  inbound_pitch: {
    id: "inbound_pitch",
    stage: "Pitch",
    stageNum: 3,
    method: "H2H",
    title: "What We Offer — The Experience",
    cogTip: "Paint one picture. Don't list amenities — describe a feeling. 'Waking up to nothing but trees and birds' beats any bullet point.",
    script: `"So here's what Horizons Getaways actually looks like: you arrive to your own private cottage — no shared walls, no front desk, no lobby. Just your space, your fire pit, and nature around you.\n\nDuring the day you've got kayaking, fishing, ebikes, a pool, volleyball — there's genuinely a lot to do if you want activity. And if you just want to sit on the porch with a coffee and not talk to anyone? You can do that too.\n\nWe're in South Carolina, about 90 minutes from Charlotte — so it's a real getaway without the hassle of a flight.\n\nWhat dates were you thinking about? I can check what's available and give you a real sense of pricing."`,
    notes: [
      "'No shared walls, no front desk' — speaks directly to what people hate about hotels",
      "List activities but balance with the 'do nothing' option — covers both types of guests",
      "90 minutes from Charlotte = easy drive, real escape",
      "End by moving toward availability — natural next step"
    ],
    responses: [
      { label: "That sounds amazing — what are the dates/prices?", next: "inbound_availability" },
      { label: "How much does it cost?", next: "inbound_obj_price" },
      { label: "I'm not really a nature/outdoors person", next: "inbound_obj_not_outdoors" },
      { label: "What exactly is glamping?", next: "inbound_what_is_glamping" },
      { label: "We already have something booked", next: "inbound_obj_already_booked" },
      { label: "Let me think about it / talk to my partner", next: "inbound_obj_think" }
    ]
  },

  inbound_pitch_couples: {
    id: "inbound_pitch_couples",
    stage: "Pitch",
    stageNum: 3,
    method: "H2H",
    title: "Couples Pitch — Romantic Getaway Angle",
    cogTip: "Romance is about privacy, presence, and novelty. A beach town rarely delivers any of those. Lean into what glamping does better.",
    script: `"Perfect — honestly, for a couple's trip, this might be even better than a beach town.\n\nImagine this: your own private cottage, a fire pit just outside your door, waking up to nothing but trees and birdsong — no crowds, no noise, no people bumping into you on a boardwalk.\n\nOur couples guests consistently tell us it's the most present, disconnected-from-everything trip they've had in years. You're not spending half the day looking for parking or waiting for a table at a restaurant — you're just... there together.\n\nWe also have things like kayaking and a pool if you want to mix in some activity, but the vibe is really about slowing down.\n\nWhat dates are you looking at? I can check availability and give you a real picture of what it would cost."`,
    notes: [
      "Privacy = romantic, and beach towns notoriously lack it in summer",
      "'Most present trip in years' = emotional peak experience language",
      "Parking and restaurant waits are genuine pain points — mention them naturally",
      "Don't oversell activities to couples — the 'slow down' angle is the closer"
    ],
    responses: [
      { label: "That sounds perfect — check dates", next: "inbound_availability" },
      { label: "How much is it?", next: "inbound_obj_price" },
      { label: "I'm not really outdoorsy", next: "inbound_obj_not_outdoors" },
      { label: "We were really set on the beach", next: "inbound_obj_wanted_beach" },
      { label: "Let me check with my partner first", next: "inbound_obj_think" }
    ]
  },

  inbound_pitch_families: {
    id: "inbound_pitch_families",
    stage: "Pitch",
    stageNum: 3,
    method: "H2H",
    title: "Families Pitch — Kids & Parents Both Win",
    cogTip: "Parents want the kids occupied and themselves not stressed. Beach towns often deliver the opposite. Frame glamping as the trip where everyone actually has a good time.",
    script: `"Oh, family trips are honestly where we shine the most. Let me tell you why.\n\nBeach towns with kids can be... a lot. Sand in everything, sunscreen every hour, kids bored after day two, the whole thing.\n\nAt Horizons, the kids have a full day's worth of stuff — ebikes, kayaking, fishing, a pool, volleyball, nature trails. They're genuinely entertained and worn out by evening. Meanwhile, you actually get to relax.\n\nYou're in your own private cottage — so nap time is nap time, bedtime is bedtime, and nobody's sharing a wall with strangers. It feels like a real home base.\n\nHow old are the kids? That'll help me point you to the right setup."`,
    notes: [
      "The 'sand in everything' line is universal — every parent laughs and nods",
      "'Worn out by evening' = parents dream outcome — say it",
      "Private cottage = family rhythm preserved (naps, bedtime)",
      "Asking about kids' ages = qualifying + personalizing, moves toward availability"
    ],
    responses: [
      { label: "That sounds perfect — what are the prices/dates?", next: "inbound_availability" },
      { label: "How much does it cost?", next: "inbound_obj_price" },
      { label: "Are there really enough things for kids?", next: "inbound_obj_kids_activities" },
      { label: "We really wanted the beach for the kids", next: "inbound_obj_wanted_beach" },
      { label: "Let me talk to my spouse first", next: "inbound_obj_think" }
    ]
  },

  inbound_availability: {
    id: "inbound_availability",
    stage: "Close",
    stageNum: 4,
    method: "SNAP",
    title: "Check Availability — Soft Close",
    cogTip: "Don't ask 'do you want to book?' — ask about dates. It's a smaller yes that leads naturally to the bigger one.",
    script: `"Let me pull up availability for you right now. What dates were you thinking — do you have something specific in mind, or are you flexible?\n\n[After they give dates — check Cloudbeds]\n\nOkay, so I'm looking at [dates] — we have [availability]. The rate for that would be [price] for a [cabin/house]. That includes everything — the property, access to all the amenities, the whole experience.\n\nTo hold that date I'd just need your name and email, and we can get everything set up from there. Does that work?"`,
    notes: [
      "Check Cloudbeds in real time — don't guess on availability or price",
      "'Includes everything' = removes fear of hidden costs",
      "'Hold that date' is softer than 'book' — less friction",
      "If they hesitate on price — go to inbound_obj_price",
      "If they want to think — go to inbound_obj_think"
    ],
    responses: [
      { label: "Yes, let's book it", next: "inbound_booking" },
      { label: "Price is higher than expected", next: "inbound_obj_price" },
      { label: "Dates don't work — need different ones", next: "inbound_availability" },
      { label: "Let me think / check with partner", next: "inbound_obj_think" }
    ]
  },

  inbound_booking: {
    id: "inbound_booking",
    stage: "Close",
    stageNum: 4,
    method: "SNAP",
    title: "Confirm the Booking",
    cogTip: "Keep the energy warm and excited — they're booking a vacation, not signing paperwork. Make it feel like the trip already started.",
    script: `"Perfect! So I've got you down for [dates] — [cottage/house type]. The total comes to [price].\n\nI just need your name, email, and we'll send you a confirmation with everything you need. Check-in is [time], check-out is [time], and I'll include a link to our guest guide so you can start getting excited about what's available on site.\n\nAnd honestly — you're going to love it. This is one of those trips people come back from and immediately start planning the next one. Welcome to Horizons, [Name]!"`,
    notes: [
      "Confirm dates, type, price out loud — prevents confusion later",
      "Check-in/out details reduce anxiety and create momentum",
      "Guest guide mention = they start imagining the trip = commitment strengthens",
      "End with genuine warmth — this is a celebration"
    ],
    responses: [
      { label: "Booking confirmed — log it", next: "inbound_success" }
    ]
  },

  inbound_success: {
    id: "inbound_success",
    stage: "Complete",
    stageNum: 5,
    method: "Complete",
    title: "Booking Confirmed — Call Complete",
    cogTip: "Log it immediately. The follow-up email within the hour is what separates great guest experiences from forgettable ones.",
    script: `POST-CALL CHECKLIST:\n\n✓ Confirm booking in Cloudbeds immediately\n✓ Send confirmation email within the hour\n✓ Attach guest guide / property overview\n✓ Log in CRM: name, dates, property type, how they found us (ad query)\n✓ Note any personal details (kids' ages, occasion, group size) for guest experience team\n✓ Set reminder to check in 48hrs before arrival`,
    notes: [
      "The 48hr pre-arrival check-in = huge for guest satisfaction",
      "Log the ad query source in CRM — valuable for marketing feedback",
      "Personal details to guest experience team = surprise-and-delight moments"
    ],
    responses: []
  },

  inbound_callback: {
    id: "inbound_callback",
    stage: "Close",
    stageNum: 4,
    method: "H2H",
    title: "Schedule a Callback",
    cogTip: "They came to you — so they do want to hear from you. A specific callback time is almost always accepted.",
    script: `"No worries at all — I appreciate you picking up. When would be a better time for a quick chat? I just want to take five minutes to walk you through what we offer and see if it could be a fit for your trip.\n\nWould [tomorrow / later today] around [time] work? I'll send you a quick text with my number so you have it."`,
    notes: [
      "Keep it short — 'five minutes' feels manageable",
      "Sending your number = you're real, not a call center",
      "Specific time = 3x more likely to actually connect than open-ended"
    ],
    responses: [
      { label: "Callback scheduled — log it", next: "inbound_success" },
      { label: "Not interested at all", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_wanted_beach: {
    id: "inbound_obj_wanted_beach",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Really Wanted the Beach",
    cogTip: "Don't fight the beach. Validate it fully, then zoom out to the deeper desire behind it — which is probably relaxation, sunshine, and a break. Then show how you deliver all of that without the downsides.",
    script: `"Honestly, I get it — there's something about the beach that just feels like vacation. I'm not here to talk you out of that.\n\nCan I ask — what is it about the beach that you're most looking forward to? Is it the water, the sun, the vibe of being somewhere different?\n\n[Listen]\n\nYeah, that makes total sense. Here's the thing — most of what you're describing, we actually have. [Sun and warmth: 'South Carolina summers are gorgeous inland too, you'll be outside all day.'] [Water: 'We have kayaking on the water, fishing, a pool.'] [The vibe of being away: 'Private cottage, no schedule, no obligations — that's exactly what we're built for.']\n\nThe one thing we can't offer is ocean waves. But everything else? It's here — and honestly without the downsides that come with beach towns in peak season."`,
    notes: [
      "Ask what they love about the beach — most answers are addressable",
      "Match each beach desire to a glamping equivalent specifically",
      "'I'm not here to talk you out of that' = disarms defensiveness",
      "The only honest concession: no ocean. Own it — it builds trust",
      "End by restating the positives, not dwelling on what's missing"
    ],
    responses: [
      { label: "Okay, I'm open to hearing more", next: "inbound_pitch" },
      { label: "It's really the ocean I want", next: "inbound_graceful_exit" },
      { label: "What about families / kids at the beach?", next: "inbound_pitch_families" }
    ]
  },

  inbound_obj_not_outdoors: {
    id: "inbound_obj_not_outdoors",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Not Really an Outdoors Person",
    cogTip: "Glamping's whole point is that it's for people who aren't outdoors people. Lead with that.",
    script: `"You know what — that's actually the most common thing we hear from guests before they arrive. And then they come back.\n\nGlamping isn't camping. You're not setting up a tent, you're not sleeping on the ground, you're not cooking over a fire unless you want to. You're in a private cottage with a real bed, air conditioning, a bathroom — it's basically a cabin rental that happens to be surrounded by nature.\n\nYou don't have to be outdoorsy to enjoy it. You can honestly spend the whole trip sitting on your porch, reading a book, and ordering food. The nature is just the backdrop — it's not a requirement.\n\nDoes that change the picture at all?"`,
    notes: [
      "'Most common thing we hear before they arrive — and then they come back' = social proof",
      "The camping vs glamping distinction is crucial — say it explicitly",
      "List the creature comforts: bed, AC, bathroom — those are the objection killers",
      "'Nature is the backdrop, not a requirement' = perfect reframe"
    ],
    responses: [
      { label: "Okay, that's actually reassuring", next: "inbound_pitch" },
      { label: "Still not sure it's my thing", next: "inbound_obj_think" },
      { label: "What about bugs / wildlife?", next: "inbound_obj_bugs" }
    ]
  },

  inbound_obj_bugs: {
    id: "inbound_obj_bugs",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Bugs / Wildlife Concern",
    cogTip: "Take it seriously — don't dismiss it. Acknowledge, then reframe with specifics.",
    script: `"Totally fair — and I won't pretend there are zero bugs in South Carolina, because that would be a lie.\n\nHere's the reality though: you're in a solid structure with screens and doors. You're not in a tent. The property is well-maintained and guests aren't reporting anything alarming. It's more like sitting on a screened-in porch than being out in the woods.\n\nWe also use firewood treated with a natural bio-insecticide — so when you've got a fire going, it actually helps keep mosquitoes away from your outdoor space. It's one of those details that makes a real difference in the evening.\n\nAnd honestly, beach towns aren't exactly bug-free either — mosquitoes love waterfront areas just as much as anywhere else.\n\nIs that a dealbreaker for you, or more of a 'good to know' thing?"`,
    notes: [
      "Don't oversell 'no bugs' — it destroys trust when they arrive",
      "Solid structure with screens = concrete reassurance",
      "The beach towns / mosquitoes comparison = levels the playing field",
      "Ending question helps you gauge how serious the objection actually is"
    ],
    responses: [
      { label: "Good to know — okay I'm open to it", next: "inbound_pitch" },
      { label: "Yeah that's still a dealbreaker", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_price: {
    id: "inbound_obj_price",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objection — Price / Cost Concern",
    cogTip: "Anchor to value, not just number. Compare to what a beach town trip actually costs when you add it all up.",
    script: `"That's a fair question — and I want to give you a real answer, not a sales pitch.\n\nOur cabins start at around $910 for a 2-night stay, houses at around $1,460 for 2 nights. That covers the full property — there's no resort fee, no parking fee, no 'amenity charge.' What you see is what you pay.\n\nHere's the thing — when you add up a beach town trip: the hotel, parking, restaurant meals twice a day, entry fees... it adds up fast. With us, you've got your own space, your own kitchen if you want it, and all the activities on site are included.\n\nWhat was your rough budget for the trip? That'll help me figure out what makes sense for you."`,
    notes: [
      "State real numbers — $910 cabin, $1,460 house — don't be vague",
      "'No resort fee, no parking fee' = speaks directly to a known frustration",
      "The total-trip-cost comparison to beach towns is effective — use it",
      "Asking about budget = moves toward finding a fit, not defending a price"
    ],
    responses: [
      { label: "That's actually reasonable — let's check dates", next: "inbound_availability" },
      { label: "Still outside our budget", next: "inbound_graceful_exit" },
      { label: "Let me think about it", next: "inbound_obj_think" }
    ]
  },

  inbound_obj_already_booked: {
    id: "inbound_obj_already_booked",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Already Have Plans / Booked Somewhere",
    cogTip: "Don't push. Plant a seed for the next trip. Every booked guest today is a potential rebooking.",
    script: `"Oh that's great — sounds like the trip is coming together! I won't try to talk you out of something you're already excited about.\n\nI do want to make sure you have us for next time though. A lot of our guests are people who tried us once — sometimes even by accident — and now they come back every year.\n\nWould it be okay if I sent you a quick overview so you have it? No pressure to do anything with it — just good to have when you're planning the next getaway."`,
    notes: [
      "Zero pressure — they're already booked, pushing is pointless and burns goodwill",
      "'By accident' = self-referential humor about the reposition situation",
      "Email capture is the real goal here — stay in their orbit",
      "Log in CRM: 'already booked, follow up in 3 months'"
    ],
    responses: [
      { label: "Sure, send it over", next: "inbound_callback" },
      { label: "No thanks", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_think: {
    id: "inbound_obj_think",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: "Objection — Need to Think / Talk to Partner",
    cogTip: "Soft urgency — spring/summer availability is genuinely limited. Mention it once, naturally. Then offer to hold a date tentatively.",
    script: `"Of course — totally makes sense, especially if you're planning something together.\n\nThe one thing I'll mention: [spring / summer] dates do tend to fill up, and once a weekend's gone it's gone. But I don't want you to feel rushed.\n\nWhat if I held a date tentatively while you chat? No charge, nothing locked in — just so the option stays open. If you decide it's not for you, I'll release it, no hard feelings.\n\nWhat dates were you looking at?"`,
    notes: [
      "Tentative hold = low-commitment yes that keeps momentum",
      "'No charge, nothing locked in' removes the fear of committing",
      "If they won't give dates — offer to follow up at a specific time instead",
      "Don't repeat the urgency line more than once — it becomes pressure"
    ],
    responses: [
      { label: "Okay, let's tentatively hold a date", next: "inbound_availability" },
      { label: "Just follow up with me later", next: "inbound_callback" },
      { label: "No, I'll reach out when ready", next: "inbound_graceful_exit" }
    ]
  },

  inbound_obj_kids_activities: {
    id: "inbound_obj_kids_activities",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: "Objection — Enough for the Kids to Do?",
    cogTip: "Parents need to be sold on 'kids will be fine' before they can relax into wanting the trip for themselves.",
    script: `"Yeah, that's always the number one parent question — and it should be. There's nothing worse than a trip where the kids are bored by noon.\n\nHere's the honest rundown: ebikes, kayaking, a pool, fishing, volleyball, nature trails. Most families tell us the kids don't want to leave. Like, genuinely hard to get them back in the car.\n\nAnd because it's a private property — the kids have room to actually run around and be loud without anyone giving you the look. It's not a hotel where you're constantly shushing them.\n\nHow old are your kids? That'll help me give you a better feel for what they'd be into."`,
    notes: [
      "'Nothing worse than a trip where kids are bored by noon' = you understand them",
      "List the activities specifically — vague reassurance doesn't work with parents",
      "'Hard to get them back in the car' = the gold standard for parents",
      "Private property = kids can be kids = huge for parents with young children"
    ],
    responses: [
      { label: "Okay that covers it — let's look at dates", next: "inbound_availability" },
      { label: "What about kids' age limits / safety?", next: "inbound_pitch_families" },
      { label: "What's the pricing?", next: "inbound_obj_price" }
    ]
  },

  inbound_what_is_glamping: {
    id: "inbound_what_is_glamping",
    stage: "Info",
    stageNum: "INFO",
    method: "H2H",
    title: "What Is Glamping?",
    cogTip: "Keep it simple and visual. Most people picture a fancy tent. Replace that image immediately.",
    script: `"Great question — honestly, the name is a little misleading. 'Glamping' is basically glamorous camping, but in practice it means a private cottage or cabin in a natural setting with all the comforts of a normal accommodation.\n\nWe're talking: real beds, air conditioning, a bathroom, your own outdoor space. Not a tent, not a sleeping bag, not camp food. Just a private place to stay that happens to be surrounded by nature instead of a parking lot.\n\nIf you've ever stayed in a cabin rental, it's similar to that — but on a curated property with things to do, so you're not just sitting in a cabin staring at trees.\n\nDoes that help clarify it?"`,
    notes: [
      "'Not a tent, not a sleeping bag, not camp food' — say what it isn't first",
      "Cabin rental comparison is the most relatable frame for Americans",
      "'Surrounded by nature instead of a parking lot' — hotel comparison, visual and funny",
      "End with a question to confirm comprehension and re-engage"
    ],
    responses: [
      { label: "Oh okay, that makes sense — tell me more", next: "inbound_pitch" },
      { label: "Is it fully enclosed / weatherproof?", next: "inbound_obj_not_outdoors" },
      { label: "What about activities?", next: "inbound_pitch" }
    ]
  },

  inbound_graceful_exit: {
    id: "inbound_graceful_exit",
    stage: "Complete",
    stageNum: 5,
    method: "H2H",
    title: "Graceful Exit — Keep the Door Open",
    cogTip: "They came to you once. They might come back. Leave with warmth and no pressure.",
    script: `"Absolutely no problem at all, [Name] — I really appreciate you taking the time. If you ever want to explore something a little different for a South Carolina getaway, our website is gohorizons.com — worth a browse when you have a free minute.\n\nHope your trip goes great, whatever you end up doing. Take care!"`,
    notes: [
      "Zero frustration in voice — they're a potential future guest",
      "Website mention = passive re-entry point",
      "Log in CRM: 'not converted, source, date' — follow up in 60 days",
      "Never guilt-trip — 'hope your trip goes great' is genuine"
    ],
    responses: []
  },

};

export const INBOUND_TOPIC_GROUPS = {
  "Opening": ["inbound_opening"],
  "Reposition": ["inbound_reposition"],
  "Pitch": ["inbound_pitch", "inbound_pitch_couples", "inbound_pitch_families"],
  "Close": ["inbound_availability", "inbound_booking", "inbound_success", "inbound_callback"],
  "Objections": ["inbound_obj_wanted_beach", "inbound_obj_not_outdoors", "inbound_obj_bugs", "inbound_obj_price", "inbound_obj_already_booked", "inbound_obj_think", "inbound_obj_kids_activities"],
  "Info": ["inbound_what_is_glamping", "inbound_graceful_exit"],
};

export const INBOUND_STAGE_ACCENT = {
  "Opening":   "#5A7B8F",
  "Reposition": "#B34233",
  "Pitch":     "#7B6B5D",
  "Close":     "#4A7C59",
  "Complete":  "#4A7C59",
  "Objection": "#C4553A",
  "Objections": "#C4553A",
  "Info":      "#6B7280",
};
