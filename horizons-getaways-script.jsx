import { useState, useCallback, useMemo, useEffect } from "react";
import { supabase } from "./src/supabase";
import { BIRTHDAY_DATA, BIRTHDAY_TOPIC_GROUPS, BIRTHDAY_STAGE_ACCENT } from "./src/birthdayModules";
import { SPANISH_DATA, SPANISH_TOPIC_GROUPS } from "./src/spanishModules";
import { SPANISH_BIRTHDAY_DATA, SPANISH_BIRTHDAY_TOPIC_GROUPS } from "./src/spanishBirthdayModules";

/* ─────────────────────────────────────────────
   HORIZONS GETAWAYS — B2B COLD OUTBOUND SCRIPT
   Dashboard Layout
   ───────────────────────────────────────────── */

const SCRIPT_DATA = {
  gatekeeper: {
    id: "gatekeeper",
    stage: "Opening",
    stageNum: 1,
    method: "SNAP",
    title: "Gatekeeper — Who Am I Speaking With?",
    cogTip: "Your only goal here is to find out if this person can say 'yes' to a partnership. Don't pitch yet — qualify first. Keep it warm and respectful.",
    script: `"Hi, this is [Your Name] with Horizons Getaways — we're an outdoor hospitality company. I'm reaching out because we work with travel agencies on a referral partnership, and I wanted to connect with the person who handles new partnerships or vendor relationships. Would that be you, or is there someone better I should speak with?"`,
    notes: [
      "This is NOT a pitch — it's a routing question. Stay light.",
      "Listen to their tone: if they sound senior and engaged, they're likely a decision-maker even if they don't say so",
      "If they say 'that's me' — transition immediately, don't over-qualify",
      "If they hesitate — they're probably not the DM but might be influential"
    ],
    responses: [
      { label: "That's me / I handle that", next: "opening" },
      { label: "Let me transfer you / hold on", next: "opening" },
      { label: "They're not available right now", next: "gatekeeper_front_desk" },
      { label: "I can pass along information", next: "gatekeeper_influencer" },
      { label: "We're not interested", next: "obj_not_interested" }
    ]
  },

  gatekeeper_influencer: {
    id: "gatekeeper_influencer",
    stage: "Opening",
    stageNum: 1,
    method: "H2H",
    title: "Influencer — Build an Internal Ally",
    cogTip: "This person can't say yes, but they CAN get your message to the person who can. Treat them as a partner, not an obstacle.",
    script: `"That's really helpful, thank you. And just so I know who I'm speaking with — what's your name and role? [Wait for answer]\n\nGreat, [Name]. Here's the quick version so you have context: we partner with travel agencies to offer their clients premium glamping experiences in the Southeast, and agencies earn a commission on every referral. Zero operational work on your end.\n\nWould it make sense for me to send a quick one-pager you could share with [the owner / your manager / the partnerships lead]? That way they can see if it's worth a conversation — and I'd love to follow up with them directly if they're open to it.\n\nWhat's the best email to send that to, and who specifically should I address it to?"`,
    notes: [
      "Get their name — you need a reference point when you call back",
      "Give them just enough to be curious, not a full pitch",
      "The one-pager does the selling for you — make it easy for them to forward",
      "Always ask for the DM's name and email — that's the real prize here",
      "Thank them genuinely — they might mention you positively to the DM"
    ],
    responses: [
      { label: "Sure, I'll pass it along — here's the email", next: "callback" },
      { label: "Let me connect you directly", next: "opening" },
      { label: "Just send it to our general email", next: "callback" },
      { label: "We're not looking for new partners", next: "graceful_exit" }
    ]
  },

  gatekeeper_front_desk: {
    id: "gatekeeper_front_desk",
    stage: "Opening",
    stageNum: 1,
    method: "SNAP",
    title: "Front Desk — Get the Right Contact",
    cogTip: "Receptionist = information source. Be warm, be brief, get a name and a time. Don't try to pitch through them.",
    script: `"No problem at all — I totally understand. Could you help me with two quick things?\n\nFirst, who would be the best person to speak with about new partnerships or vendor programs? Just so I can ask for them by name next time.\n\n[Wait for name]\n\nPerfect, thank you. And is there a good time to catch [Name] — mornings, afternoons? I want to be respectful of their schedule.\n\n[Wait for answer]\n\nGreat — I'll try [Name] on [day/time]. Thanks so much for your help, [Receptionist Name]. Have a great day!"`,
    notes: [
      "Goal #1: Get the DM's name",
      "Goal #2: Get the best time to call",
      "Goal #3: Get the receptionist's name (so next time you say 'hi [Name], it's [you] again')",
      "Don't explain the partnership — they can't act on it",
      "Log everything in CRM immediately: DM name, best time, receptionist name"
    ],
    responses: [
      { label: "Got DM name + best time — will call back", next: "callback" },
      { label: "They transferred me!", next: "opening" },
      { label: "Won't share any info", next: "graceful_exit" }
    ]
  },

  opening: {
    id: "opening",
    stage: "Opening",
    stageNum: 1,
    method: "H2H",
    title: "Personalized Opener",
    cogTip: "Keep it under 30 seconds. Mention ONE specific thing about their agency.",
    script: `"Hi [Name], this is [Your Name] with Horizons Getaways. I came across [Agency Name] — I noticed you specialize in [adventure travel / Southeast destinations / boutique experiences]. Quick question: are you open to hearing about a partnership that's been adding a new revenue stream for agencies like yours in about 60 seconds?"`,
    notes: [
      "Research the agency before calling — find their niche or a recent social post",
      "Use their first name, keep tone warm and direct (SNAP: Simple)",
      "The 60-second frame respects their time and lowers resistance"
    ],
    responses: [
      { label: "Yes / Sure, go ahead", next: "pitch" },
      { label: "Not interested", next: "obj_not_interested" },
      { label: "Who is this? / What company?", next: "credibility" },
      { label: "I'm busy right now", next: "obj_busy" }
    ]
  },
  credibility: {
    id: "credibility",
    stage: "Opening",
    stageNum: 1,
    method: "SNAP",
    title: "Credibility Establishment",
    cogTip: "Rule of Three: who we are, what we do, one proof point.",
    script: `"Great question — Horizons Getaways is a glamping and outdoor hospitality brand based in South Carolina. We operate premium nature retreats, and we've been partnering with travel agencies to offer their clients unique getaway experiences. Agencies we work with earn a tiered commission on every booking they refer — starting at 15%. Would that kind of arrangement be worth a quick conversation?"`,
    notes: [
      "Three beats: identity → what we do → proof/benefit",
      "Anchor with commission % to make it tangible immediately",
      "If they ask more details, transition to pitch"
    ],
    responses: [
      { label: "Okay, tell me more", next: "pitch" },
      { label: "We already have glamping partners", next: "obj_competitor" },
      { label: "Not our niche", next: "obj_not_niche" },
      { label: "Send me an email", next: "obj_send_email" }
    ]
  },
  pitch: {
    id: "pitch",
    stage: "Value Pitch",
    stageNum: 2,
    method: "SNAP",
    title: "Partnership Value Proposition",
    cogTip: "Problem → Impact → Solution. Three sentences max before asking a question.",
    script: `"Here's the short version: outdoor and glamping travel has been one of the fastest-growing segments in hospitality, and a lot of agencies tell us they're getting more requests for unique, nature-based experiences but don't have reliable partners to fulfill them.\n\nHorizons Getaways fills that gap. We handle everything — the property, the experience, guest support — and your agency earns a commission on every referral. No inventory risk, no logistics on your end."`,
    notes: [
      "Lead with the market trend (external validation)",
      "Frame the problem THEY face (demand without supply)",
      "Make the offer zero-risk: they refer, we deliver, they earn"
    ],
    responses: [
      { label: "What's the commission structure?", next: "commission" },
      { label: "What kind of properties?", next: "properties" },
      { label: "Sounds interesting — how does it work?", next: "qualification" },
      { label: "We're not really doing outdoor stuff", next: "obj_not_niche" }
    ]
  },
  commission: {
    id: "commission",
    stage: "Value Pitch",
    stageNum: 2,
    method: "SNAP",
    title: "Commission & Economics",
    cogTip: "Be specific with numbers. Vague = distrust.",
    script: `"Our partnership model is designed to scale with you and reward higher-value bookings.\n\nWe offer a tiered commission structure based on total monthly booking revenue you generate with us:\n• Up to $10K/month — 15% commission\n• Up to $15K/month — 20% commission\n• Up to $20K/month — 25% commission"`,
    notes: [
      "Tiered structure by monthly revenue — not by number of bookings",
      "Higher-end bookings move the needle faster — emphasize this with luxury-focused agencies",
      "No ceiling mentioned — keeps the upside open"
    ],
    responses: [
      { label: "That's solid — what's next?", next: "qualification" },
      { label: "Commission is too low", next: "obj_commission_low" },
      { label: "How do you track referrals?", next: "tracking" },
      { label: "Let me think about it", next: "obj_think" }
    ]
  },
  properties: {
    id: "properties",
    stage: "Value Pitch",
    stageNum: 2,
    method: "H2H",
    title: "Property & Experience Details",
    cogTip: "Paint a picture. Use sensory language — they'll sell this to their clients.",
    script: `"We operate [X] properties across South Carolina — think luxury tents, treehouses, and cabins in settings like [specific locations]. Each site is curated for a premium experience: private fire pits, local farm-to-table dining options, guided nature excursions.\n\nOur guests are typically couples, small groups, or corporate teams looking for something beyond the standard resort. The kind of experience your clients will actually post about and come back to tell you 'thank you' for recommending."`,
    notes: [
      "Specificity sells: name real locations and amenities",
      "End with emotional payoff for the AGENT (client gratitude = retention)",
      "Transition to qualification after painting the picture"
    ],
    responses: [
      { label: "My clients would love that", next: "qualification" },
      { label: "Is it seasonal?", next: "seasonal" },
      { label: "What about families with kids?", next: "families" },
      { label: "Send me a brochure", next: "obj_send_email" }
    ]
  },
  qualification: {
    id: "qualification",
    stage: "Qualification",
    stageNum: 3,
    method: "SPIN",
    title: "Discovery & Qualification",
    cogTip: "Ask ONE question at a time. Listen. The goal is to understand their business, not interrogate.",
    script: `SITUATION:\n"Just so I can tailor this to how your agency works — how do you typically source and recommend accommodation partners right now?"\n\nPROBLEM:\n"When clients ask for something off the beaten path — glamping, nature retreats — do you have go-to options, or is that a gap you've been trying to fill?"\n\nIMPLICATION:\n"And when you can't offer what they're looking for, do those clients tend to book elsewhere, or does it just go cold?"\n\nNEED-PAYOFF:\n"If you had a reliable glamping partner that handled everything and just sent you a commission check — would that be something worth integrating into your portfolio?"`,
    notes: [
      "Don't read all four questions — pick the flow based on conversation",
      "S → P is usually enough if they're already warm",
      "I → N only if they need more convincing",
      "LISTEN more than you talk: aim for 60/40 them-to-you ratio"
    ],
    responses: [
      { label: "Yes, let's set something up", next: "close" },
      { label: "We already have outdoor partners", next: "obj_competitor" },
      { label: "I need to talk to my partner/team", next: "obj_decision_maker" },
      { label: "What does onboarding look like?", next: "onboarding" }
    ]
  },
  onboarding: {
    id: "onboarding",
    stage: "Qualification",
    stageNum: 3,
    method: "SNAP",
    title: "Onboarding Process",
    cogTip: "Three steps max. Complexity kills deals at this stage.",
    script: `"It's really straightforward — three steps:\n\n1. We hop on a 20-minute onboarding call where I walk you through properties, pricing, and your referral link.\n2. We send you a co-branded digital kit — property photos, descriptions, pricing — everything your team needs to present it to clients.\n3. You start referring. We handle bookings, guest experience, everything. You get commission reports monthly.\n\nMost agencies are up and running within a week."`,
    notes: [
      "Rule of Three from the research: 3 steps, no more",
      "Emphasize speed: 'within a week' = low commitment barrier",
      "The 20-minute call is the real next step — make it easy"
    ],
    responses: [
      { label: "Sounds easy — let's do it", next: "close" },
      { label: "What if a guest has a problem?", next: "guest_support" },
      { label: "I need to think about it", next: "obj_think" },
      { label: "Send me the details first", next: "obj_send_email" }
    ]
  },
  close: {
    id: "close",
    stage: "Close",
    stageNum: 4,
    method: "SNAP",
    title: "Schedule & Commit",
    cogTip: "Offer TWO specific time slots. Open-ended 'when works for you?' kills momentum.",
    script: `"Awesome — let's lock in that onboarding call. I have availability [Day A] at [Time] or [Day B] at [Time] — which works better for you?\n\n[After confirmation]\n\nPerfect. I'll send you a calendar invite with a Zoom link and a quick one-pager about the program so you can share it with your team before we meet. Looking forward to it, [Name]."`,
    notes: [
      "Two options, not open-ended — reduces decision fatigue",
      "Confirm with calendar invite immediately after call",
      "One-pager gives them something to share = internal champion building",
      "Use their first name at the end — personal touch"
    ],
    responses: [
      { label: "Meeting booked!", next: "success" },
      { label: "Can you call me back next week?", next: "callback" },
      { label: "Actually, let me think about it", next: "obj_think" }
    ]
  },
  success: {
    id: "success",
    stage: "Complete",
    stageNum: 5,
    method: "Complete",
    title: "Meeting Booked — Call Complete",
    cogTip: "Log the call in CRM immediately. Take a 90-second micro-break before the next dial.",
    script: `POST-CALL CHECKLIST:\n\n✓ Log call outcome in CRM (meeting booked)\n✓ Send calendar invite within 5 minutes\n✓ Attach location presentation to the invite\n✓ Set follow-up reminder for 24hrs before the meeting\n✓ Note any personal details mentioned (kids, travel preferences, agency niche) for the onboarding call`,
    notes: [
      "90-second rule: brief physical reset before next call",
      "Personal details = H2H ammunition for the onboarding meeting",
      "This is a WIN — acknowledge it before moving on"
    ],
    responses: []
  },
  callback: {
    id: "callback",
    stage: "Complete",
    stageNum: 5,
    method: "Follow-Up",
    title: "Callback Scheduled",
    cogTip: "Set a specific day AND time. 'Next week' alone = ghosted.",
    script: `"Absolutely — would [specific day] around [specific time] work? I'll put it on my calendar so I don't miss you.\n\n[After confirmation]\n\nGreat, I'll also shoot you a quick email with a summary of what we discussed and a link to our partner page so you can take a look when you have a minute. Talk to you [day], [Name]."`,
    notes: [
      "Pin the callback to a specific time — vague = lost",
      "Email with summary keeps you top of mind",
      "Log in CRM with callback date/time immediately"
    ],
    responses: []
  },
  obj_not_interested: {
    id: "obj_not_interested",
    stage: "Objection",
    stageNum: "OBJ",
    method: "Challenger",
    title: '"Not Interested"',
    cogTip: "Don't argue. Reframe with a question. You have ONE shot to pivot.",
    script: `"Totally fair — and I appreciate the honesty. Just out of curiosity: is that because you're already working with outdoor/glamping partners, or more that it's not something your clients typically ask for?\n\n[If they have partners]:\n"Got it — that makes sense. We're not looking to replace anyone. Some agencies work with us as a complementary option specifically for Charlotte-accessible, South Carolina experiences, since that's where we're strongest. Would it be worth a quick 2-minute overview, just so you have us as an additional option when that kind of request comes up?"\n\n[If not their category]:\n"That makes sense. What we've been seeing, though, is that even agencies that don't focus on outdoor travel are getting more requests for nature-based, but still comfortable and accessible experiences — especially within driving distance of cities like Charlotte. If that starts coming up for your clients, would it be helpful to already have a vetted option you can confidently recommend?"`,
    notes: [
      "The diagnostic question reveals the REAL objection",
      "Challenger approach: offer an insight (market trend) to reframe",
      "'Back pocket' framing = zero commitment, high curiosity"
    ],
    responses: [
      { label: "Okay, give me the quick version", next: "pitch" },
      { label: "No, really not interested", next: "graceful_exit" },
      { label: "Email me something", next: "obj_send_email" }
    ]
  },
  obj_busy: {
    id: "obj_busy",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: '"I\'m Busy Right Now"',
    cogTip: "Respect their time. Offer a specific callback — don't beg for 'just 30 seconds.'",
    script: `"I totally get it — I'll keep it to one sentence and we can schedule a better time: we partner with travel agencies to offer their clients premium glamping in the Southeast and pay a commission on every referral.\n\nWould [tomorrow / Thursday] around [time] work for a quick 5-minute call?"`,
    notes: [
      "One sentence = respect (SNAP: Simple)",
      "Specific time, not 'when works for you'",
      "If they say no to callback too — graceful exit"
    ],
    responses: [
      { label: "Sure, call me [time]", next: "callback" },
      { label: "Just send an email", next: "obj_send_email" },
      { label: "Not interested", next: "graceful_exit" }
    ]
  },
  obj_send_email: {
    id: "obj_send_email",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: '"Just Send Me an Email"',
    cogTip: "Don't fight it — but add a micro-commitment to keep the thread alive.",
    script: `"Happy to — what's the best email to send it to? I'll share a brief presentation with commission details and an overview of the property.\n\n[After they answer]\n\nPerfect — I'll have that in your inbox within the hour. I'll also follow up on [day] just to make sure it came through — does that sound alright?"`,
    notes: [
      "Get their email = real contact captured",
      "Schedule the follow-up ON THIS CALL — don't leave it open",
      "Within the hour = urgency and professionalism",
      "NOTE: ensure the location presentation is ready before using this script"
    ],
    responses: [
      { label: "Email sent + follow-up scheduled", next: "callback" },
      { label: "They won't give email", next: "graceful_exit" }
    ]
  },
  obj_competitor: {
    id: "obj_competitor",
    stage: "Objection",
    stageNum: "OBJ",
    method: "Challenger",
    title: '"We Already Have Partners"',
    cogTip: "Don't compete — complement. Position as an addition, not a replacement.",
    script: `"That's great — it means your clients are already looking for this type of experience, which aligns perfectly with what we offer. Many of our strongest agency partners work with multiple outdoor hospitality brands to ensure full regional coverage.\n\nThe key question is whether your current partner offers strong options within close proximity to Charlotte and the greater Southeast region. That's where we're particularly well positioned — being just about 90 minutes from Charlotte while still offering a true South Carolina nature experience.\n\nThat combination tends to resonate well with clients who want something unique, but still easily accessible. It could make sense to position us as your Charlotte-accessible, South Carolina option, complementing what you already offer rather than replacing it.\n\nWould it be worth exploring how we could fit into your portfolio in that way?"`,
    notes: [
      "Validate their existing partnership — don't challenge it",
      "Challenger insight: Charlotte proximity is a specific regional gap most partners don't fill",
      "'Complementing, not replacing' removes the threat",
      "If they name the competitor — note it for market intel",
      "Charlotte angle works best for Southeast-region agencies — adjust if calling nationally"
    ],
    responses: [
      { label: "We could use a SE option", next: "qualification" },
      { label: "Our current partner covers that area", next: "graceful_exit" },
      { label: "Tell me more about your properties", next: "properties" }
    ]
  },
  obj_not_niche: {
    id: "obj_not_niche",
    stage: "Objection",
    stageNum: "OBJ",
    method: "Challenger",
    title: '"Not Our Niche / We Don\'t Do Outdoor"',
    cogTip: "Challenger move: teach them something about their own market.",
    script: `"That's actually what makes this interesting — a lot of agencies that don't specialize in outdoor are finding that clients bring it up anyway. The outdoor hospitality market is a $3–4B industry and has been growing year over year — and the fastest-growing segment is people who've never camped before but want a luxury nature experience.\n\nSo it's not really 'outdoor adventure' — it's more like boutique hospitality that happens to be in nature. Would it be worth seeing if it fits as a niche add-on for your existing clients?"`,
    notes: [
      "Reframe: it's not camping, it's luxury hospitality in nature",
      "If you have verified market data, mention it — but only cite numbers you can source",
      "Challenger approach: give them an insight they didn't have",
      "'Niche add-on' = low commitment framing"
    ],
    responses: [
      { label: "Hmm, maybe as an add-on", next: "pitch" },
      { label: "Still not for us", next: "graceful_exit" },
      { label: "Send me more info", next: "obj_send_email" }
    ]
  },
  obj_think: {
    id: "obj_think",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SPIN",
    title: '"Let Me Think About It"',
    cogTip: "Isolate the hesitation. 'Think about it' = unspoken objection.",
    script: `"Of course — and I want you to feel good about it. Can I ask: is there a specific part you'd want to think through? Sometimes it's the commission structure, sometimes it's just timing.\n\n[If commission]: → Navigate to commission module\n[If timing]: "Totally fair. What if we penciled in a tentative onboarding call for [date] — no pressure, and you can cancel if you decide it's not a fit? That way you don't have to remember to reach back out."\n[If need approval]: → Navigate to decision maker module`,
    notes: [
      "SPIN Need-Payoff: help them articulate what's holding them back",
      "The diagnostic question turns vague stall into actionable objection",
      "'Pencil in' = low commitment language",
      "Never leave without a next step on the calendar"
    ],
    responses: [
      { label: "It's the commission — explain more", next: "commission" },
      { label: "Need to ask my partner/boss", next: "obj_decision_maker" },
      { label: "Let's pencil something in", next: "close" },
      { label: "I'll reach out when ready", next: "graceful_exit" }
    ]
  },
  obj_commission_low: {
    id: "obj_commission_low",
    stage: "Objection",
    stageNum: "OBJ",
    method: "SNAP",
    title: '"Commission Is Too Low"',
    cogTip: "Anchor on total value, not just percentage. And mention the tiered upside.",
    script: `"I completely understand — commission percentage is important, so let me put it into context.\n\nOur typical bookings range from approximately $910 for a 2-night cabin stay to $1,460 for a 2-night house stay. Based on our tiered structure, that translates to roughly $135–$365+ per booking, depending on volume and monthly performance — all with no operational overhead on your end.\n\nBecause our model is tied to total booking value rather than volume, higher-end and multi-unit bookings can significantly increase your effective earnings. As your monthly booking revenue grows, your commission scales accordingly — reaching up to 25%, which creates meaningful upside for agencies working with premium clients."`,
    notes: [
      "Anchor with real booking price ranges — $910 cabin, $1,460 house",
      "Reframe from % to $ earned per referral — more tangible",
      "Emphasize: higher-end clients = faster tier progression",
      "25% ceiling is the aspirational hook — end on it"
    ],
    responses: [
      { label: "Send me the numbers", next: "obj_send_email" },
      { label: "That's more reasonable", next: "close" },
      { label: "Still too low for us", next: "graceful_exit" }
    ]
  },
  obj_decision_maker: {
    id: "obj_decision_maker",
    stage: "Objection",
    stageNum: "OBJ",
    method: "H2H",
    title: '"Need to Talk to My Partner/Team"',
    cogTip: "Equip them to sell internally. They're now your champion.",
    script: `"That makes total sense — it's a smart move to loop in your team. What if I sent you a quick one-pager you can forward? It covers the commission structure, property highlights, and how the referral tracking works — everything they'd want to see.\n\nAnd would it make sense for me to join a quick call with both of you? Sometimes it's easier when I can answer questions directly. I could do [Day A] or [Day B] — would either work?"`,
    notes: [
      "Give them ammo: the one-pager makes THEM look prepared",
      "Offer a three-way call — removes the 'telephone game' risk",
      "Two specific time options, not open-ended",
      "They're your internal champion now — treat them that way"
    ],
    responses: [
      { label: "Send the one-pager, I'll share it", next: "obj_send_email" },
      { label: "Let's do a three-way call", next: "close" },
      { label: "I'll get back to you", next: "callback" }
    ]
  },
  tracking: {
    id: "tracking",
    stage: "Info Module",
    stageNum: "INFO",
    method: "SNAP",
    title: "Referral Tracking System",
    cogTip: "Keep it simple — they don't want tech specs, they want confidence it works.",
    script: `"We've designed our tracking and payout process to be transparent and straightforward. Each partner agency is assigned a unique promo code, allowing us to accurately track all associated bookings and commissions. In cases where clients book directly, they can simply reference your agency, and we'll ensure the booking is attributed to your account.\n\nCommissions are consolidated and paid out on a monthly basis via bank transfer. The process is fully streamlined and automated, so your team doesn't need to manage invoicing or follow-ups."`,
    notes: [
      "Promo code = simple, memorable, easy for clients to pass along",
      "Monthly bank transfer = predictable, professional",
      "No invoicing = zero admin burden — lead with this"
    ],
    responses: [
      { label: "That works — let's move forward", next: "close" },
      { label: "What about the onboarding process?", next: "onboarding" },
      { label: "Send me login details", next: "obj_send_email" }
    ]
  },
  seasonal: {
    id: "seasonal",
    stage: "Info Module",
    stageNum: "INFO",
    method: "H2H",
    title: "Seasonality & Availability",
    cogTip: "Turn seasonality from a weakness into a selling point.",
    script: `"Great question — we operate year-round, but the experience shifts with the seasons. Spring and fall are peak for couples and small groups. Summer is big for families. And winter — that's actually our hidden gem: fire pit season, sauna season, and that cozy cabin vibe that clients love. Also, as you know, the winters here in South Carolina are very mild!\n\nSo from a referral standpoint, there's always something to recommend regardless of when your client wants to travel."`,
    notes: [
      "Year-round = consistent referral opportunity",
      "Each season has a hook — give them selling points",
      "Winter framing as 'hidden gem' = Challenger insight"
    ],
    responses: [
      { label: "Good to know — tell me about the partnership", next: "qualification" },
      { label: "What about availability during peak?", next: "properties" },
      { label: "Let's set up a call", next: "close" }
    ]
  },
  families: {
    id: "families",
    stage: "Info Module",
    stageNum: "INFO",
    method: "H2H",
    title: "Family-Friendly Options",
    cogTip: null,
    script: `"Absolutely — all our locations are specifically set up for families. Kid-friendly activities like nature trails, ebikes, swimming pool, table tennis, volleyball, fishing, kayaking, and more!\n\nThe parents get the luxury experience, and the kids get an adventure they'll talk about for weeks. It's one of our highest-rebooking segments, actually."`,
    notes: [
      "Paint the picture for the agent — they'll use these words with clients",
      "Rebooking stat = recurring commission opportunity for them"
    ],
    responses: [
      { label: "Perfect for my client base", next: "qualification" },
      { label: "What about the partnership details?", next: "commission" },
      { label: "Set up a call", next: "close" }
    ]
  },
  guest_support: {
    id: "guest_support",
    stage: "Info Module",
    stageNum: "INFO",
    method: "SNAP",
    title: "Guest Support & Liability",
    cogTip: null,
    script: `"That's a smart question — and the answer is: we handle everything. Guest support, on-site issues, cancellations, refunds — that's all on us. Your agency's reputation is protected because we own the guest experience end-to-end.\n\nYou refer, we deliver. If anything goes sideways, the client comes to us, not you."`,
    notes: [
      "Zero liability = zero risk for the agency",
      "Reputation protection is the key emotional trigger for agency owners",
      "Short and direct — SNAP: Simple"
    ],
    responses: [
      { label: "That's what I needed to hear", next: "close" },
      { label: "What about the onboarding?", next: "onboarding" },
      { label: "Let me think about it", next: "obj_think" }
    ]
  },
  graceful_exit: {
    id: "graceful_exit",
    stage: "Complete",
    stageNum: 5,
    method: "H2H",
    title: "Graceful Exit — Door Open",
    cogTip: "Leave with warmth. Today's 'no' is next quarter's 'yes.'",
    script: `"I really appreciate your time, [Name]. I'll leave you my email — [email] — in case the topic ever comes up with a client and you want a quick option. No pressure at all.\n\nWish you and [Agency Name] a great [season/quarter]. Take care!"`,
    notes: [
      "Always leave the door open — travel agency relationships are long-game",
      "Plant the seed: 'in case a client asks'",
      "Log in CRM with 'Not Now' status, set 90-day re-engagement reminder",
      "90-second rule: take a micro-break before the next dial"
    ],
    responses: []
  }
};

// ─── TOPIC GROUPS ────────────────────────────
const TOPIC_GROUPS = {
  "Opening": ["gatekeeper", "gatekeeper_influencer", "gatekeeper_front_desk", "opening", "credibility"],
  "Value Pitch": ["pitch", "commission", "properties"],
  "Qualification": ["qualification", "onboarding"],
  "Close": ["close", "success", "callback"],
  "Objections": ["obj_not_interested", "obj_busy", "obj_send_email", "obj_competitor", "obj_not_niche", "obj_think", "obj_commission_low", "obj_decision_maker"],
  "Info Modules": ["tracking", "seasonal", "families", "guest_support", "graceful_exit"],
};

const STAGE_ACCENT = {
  "Opening": "#B34233",
  "Value Pitch": "#5A7B8F",
  "Qualification": "#7B6B5D",
  "Close": "#4A7C59",
  "Complete": "#4A7C59",
  "Objection": "#C4553A",
  "Objections": "#C4553A",
  "Info Module": "#6B7280",
  "Info Modules": "#6B7280",
};

const BRICK = "#B34233";

// ─── DASHBOARD ───────────────────────────────
const START_MODULE = {
  b2b: "gatekeeper",
  birthday: "bday_opening_birthday",
};

const ALL_DATA = { ...SCRIPT_DATA, ...BIRTHDAY_DATA };

export default function HorizonsScript({ session }) {
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;

  const [scriptMode, setScriptMode] = useState("b2b");
  const [scriptLang, setScriptLang] = useState("en");
  const [currentId, setCurrentId] = useState("opening");
  const [recentIds, setRecentIds] = useState(["opening"]);
  const [userNotes, setUserNotes] = useState({});
  const [noteInput, setNoteInput] = useState("");

  const activeData = scriptMode === "birthday"
    ? (scriptLang === "es" ? SPANISH_BIRTHDAY_DATA : BIRTHDAY_DATA)
    : (scriptLang === "es" ? SPANISH_DATA : SCRIPT_DATA);
  const activeGroups = scriptMode === "birthday"
    ? (scriptLang === "es" ? SPANISH_BIRTHDAY_TOPIC_GROUPS : BIRTHDAY_TOPIC_GROUPS)
    : (scriptLang === "es" ? SPANISH_TOPIC_GROUPS : TOPIC_GROUPS);
  const node = activeData[currentId] || ALL_DATA[currentId];

  const getStageColor = useCallback((stage) => {
    if (scriptMode === "birthday") return BIRTHDAY_STAGE_ACCENT[stage] || "#6B7280";
    return STAGE_ACCENT[stage] || "#6B7280";
  }, [scriptMode]);

  const handleModeSwitch = useCallback((newMode) => {
    setScriptMode(newMode);
    setCurrentId(START_MODULE[newMode]);
    setRecentIds([START_MODULE[newMode]]);
  }, []);

  // ─── Load notes from Supabase on mount ───
  useEffect(() => {
    if (!userId) return;
    supabase
      .from("user_notes")
      .select("*")
      .eq("user_id", userId)
      .then(({ data }) => {
        if (!data) return;
        const grouped = {};
        data.forEach(row => {
          if (!grouped[row.module_id]) grouped[row.module_id] = [];
          grouped[row.module_id].push({
            id: row.id,
            text: row.text,
            done: row.done,
            ts: new Date(row.created_at).getTime()
          });
        });
        setUserNotes(grouped);
      });
  }, [userId]);

  const addNote = useCallback(async () => {
    const text = noteInput.trim();
    if (!text || !userId) return;
    setNoteInput("");

    const { data, error } = await supabase
      .from("user_notes")
      .insert({ user_id: userId, module_id: currentId, text, done: false })
      .select()
      .single();

    if (error || !data) return;

    setUserNotes(prev => ({
      ...prev,
      [currentId]: [...(prev[currentId] || []), {
        id: data.id, text: data.text, done: data.done,
        ts: new Date(data.created_at).getTime()
      }]
    }));
  }, [noteInput, currentId, userId]);

  const toggleNote = useCallback(async (moduleId, index) => {
    setUserNotes(prev => {
      const list = [...(prev[moduleId] || [])];
      list[index] = { ...list[index], done: !list[index].done };
      // fire-and-forget update
      supabase.from("user_notes").update({ done: list[index].done }).eq("id", list[index].id);
      return { ...prev, [moduleId]: list };
    });
  }, []);

  const removeNote = useCallback(async (moduleId, index) => {
    const note = (userNotes[moduleId] || [])[index];
    if (note?.id) {
      supabase.from("user_notes").delete().eq("id", note.id);
    }
    setUserNotes(prev => {
      const list = (prev[moduleId] || []).filter((_, i) => i !== index);
      return { ...prev, [moduleId]: list };
    });
  }, [userNotes]);

  const handleSignOut = useCallback(() => {
    supabase.auth.signOut();
  }, []);

  const navigate = useCallback((id) => {
    if (!ALL_DATA[id]) return;
    setCurrentId(id);
    setRecentIds(prev => {
      const filtered = prev.filter(x => x !== id);
      return [id, ...filtered].slice(0, 8);
    });
  }, []);

  return (
    <div style={{
      height: "100vh", overflow: "hidden",
      display: "flex", flexDirection: "column",
      background: "#F0EDEB",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif",
      color: "#1F2937"
    }}>
      {/* Header */}
      <div style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E0DCDA",
        padding: "4px 0",
        flexShrink: 0
      }}>
        <div style={{
          maxWidth: "100%", margin: "0 auto", padding: "0 20px",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div>
              <img src="/logo.png" alt="Horizons Getaways" style={{ height: "96px", display: "block" }} />
            </div>
            <div style={{
              display: "flex", gap: "4px",
              background: "#E8E4E1", borderRadius: "10px", padding: "4px"
            }}>
              {[
                { key: "b2b", label: "B2B Agency" },
                { key: "birthday", label: "Birthday Outreach" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleModeSwitch(key)}
                  style={{
                    padding: "8px 20px", borderRadius: "8px",
                    border: "none", cursor: "pointer",
                    fontSize: "14px", fontWeight: 600,
                    background: scriptMode === key ? "#FFFFFF" : "transparent",
                    color: scriptMode === key ? "#1F2937" : "#6B7280",
                    boxShadow: scriptMode === key ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                    transition: "all 0.15s ease",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div style={{
                display: "flex", gap: "3px",
                background: "#E8E4E1", borderRadius: "8px", padding: "3px",
                border: "1px solid rgba(179,66,51,0.3)",
                boxShadow: "0 0 8px rgba(179,66,51,0.25), 0 0 20px rgba(179,66,51,0.12), 0 0 40px rgba(179,66,51,0.06)"
              }}>
                {[
                  { key: "en", label: "EN" },
                  { key: "es", label: "ES" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setScriptLang(key)}
                    style={{
                      padding: "6px 14px", borderRadius: "6px",
                      border: "none", cursor: "pointer",
                      fontSize: "13px", fontWeight: 700,
                      background: scriptLang === key ? "#FFFFFF" : "transparent",
                      color: scriptLang === key ? "#B34233" : "#6B7280",
                      boxShadow: scriptLang === key ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {userEmail && (
              <span style={{ fontSize: "12px", color: "#A8A09A" }}>
                {userEmail}
              </span>
            )}
            <button
              onClick={() => { setCurrentId(START_MODULE[scriptMode]); setRecentIds([START_MODULE[scriptMode]]); }}
              style={{
                background: "#FDF2F0", border: "1px solid #E8D5D1",
                color: BRICK, padding: "7px 16px", borderRadius: "7px",
                cursor: "pointer", fontSize: "12px", fontWeight: 600
              }}
            >
              Restart Call
            </button>
            <button
              onClick={handleSignOut}
              style={{
                background: "#F9FAFB", border: "1px solid #E0DCDA",
                color: "#6B7280", padding: "7px 14px", borderRadius: "7px",
                cursor: "pointer", fontSize: "12px", fontWeight: 500
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div style={{
        flex: 1, minHeight: 0,
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gridTemplateRows: "2fr 1fr",
        gap: "12px",
        padding: "12px 16px 12px"
      }}>

        {/* ─── TOP LEFT: Script Panel ─── */}
        <div style={{ ...panelStyle, minHeight: 0, overflowY: "auto" }}>
          <PanelHeader label="Script" sub={`${node.stage} — ${node.method}`} accent={getStageColor(node.stage)} />

          <div style={{ padding: "20px 24px 8px" }}>
            <h2 style={{
              fontSize: "19px", fontWeight: 700, color: "#1F2937", margin: 0,
              fontFamily: "'Georgia', serif"
            }}>
              {node.title}
            </h2>
          </div>

          {node.cogTip && (
            <div style={{
              margin: "12px 24px 0", padding: "12px 16px",
              background: "#FDF8F7", borderRadius: "8px",
              borderLeft: "3px solid #D4776B",
              fontSize: "13px", color: "#8B2E22", lineHeight: 1.55,
              fontStyle: "italic"
            }}>
              {node.cogTip}
            </div>
          )}

          <div style={{ padding: "16px 24px 24px" }}>
            <div style={{
              background: "#F8F7F5", borderRadius: "10px",
              border: "1px solid #ECEAE7",
              padding: "22px 24px", fontSize: "19px", lineHeight: 1.8,
              color: "#374151", whiteSpace: "pre-wrap",
              fontFamily: "'Georgia', serif"
            }}>
              {node.script}
            </div>
          </div>
        </div>

        {/* ─── TOP RIGHT: Responses by Topic ─── */}
        <div style={{ ...panelStyle, maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
          <PanelHeader label="Topics & Responses" accent={BRICK} />

          <div style={{ padding: "12px 16px 16px" }}>
            {/* Current responses first */}
            {node.responses && node.responses.length > 0 && (
              <div style={{ marginBottom: "18px" }}>
                <div style={groupLabelStyle("#B34233")}>
                  Current — Client says...
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {node.responses.map((r, i) => {
                    const target = ALL_DATA[r.next];
                    return (
                      <button
                        key={i}
                        onClick={() => navigate(r.next)}
                        style={responseBtn(true)}
                        onMouseOver={e => { e.currentTarget.style.background = "#FDF2F0"; e.currentTarget.style.borderColor = "#D4776B"; }}
                        onMouseOut={e => { e.currentTarget.style.background = "#FAFAF9"; e.currentTarget.style.borderColor = "#E5E2DF"; }}
                      >
                        <span style={{ flex: 1 }}>{r.label}</span>
                        <span style={tagStyle(getStageColor(target?.stage))}>
                          {target?.stage || "Next"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All topics grouped */}
            {Object.entries(activeGroups).map(([group, ids]) => (
              <div key={group} style={{ marginBottom: "14px" }}>
                <div style={groupLabelStyle(getStageColor(group))}>
                  {group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {ids.map(id => {
                    const n = ALL_DATA[id];
                    const active = id === currentId;
                    return (
                      <button
                        key={id}
                        onClick={() => navigate(id)}
                        style={{
                          padding: "5px 10px", fontSize: "11.5px", fontWeight: active ? 600 : 400,
                          borderRadius: "6px", cursor: "pointer",
                          border: active ? `1px solid ${getStageColor(group)}` : "1px solid #E5E2DF",
                          background: active ? "#FDF2F0" : "#FAFAF9",
                          color: active ? getStageColor(group) : "#6B7280",
                          transition: "all 0.12s",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {n.title.length > 22 ? n.title.slice(0, 20) + "..." : n.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── BOTTOM LEFT: Notes ─── */}
        <div style={{ ...panelStyle, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <PanelHeader label="Notes" accent="#7B6B5D" />
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "10px 16px 6px" }}>
            {/* Script notes (static) */}
            {node.notes && node.notes.length > 0 && (
              <div style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#A8A09A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                  Script Tips
                </div>
                {node.notes.map((note, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "8px", alignItems: "flex-start",
                    fontSize: "12.5px", color: "#6B7280", lineHeight: 1.5, marginBottom: "4px"
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#D1CCC7", flexShrink: 0, marginTop: "6px" }} />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            )}
            {/* User notes (dynamic) */}
            {(userNotes[currentId] || []).length > 0 && (
              <div style={{ marginBottom: "6px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#B34233", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                  My Notes
                </div>
                {(userNotes[currentId] || []).map((n, i) => (
                  <div key={n.ts} style={{
                    display: "flex", gap: "8px", alignItems: "center",
                    fontSize: "12.5px", lineHeight: 1.5, marginBottom: "4px",
                    color: n.done ? "#A8A09A" : "#374151"
                  }}>
                    <input
                      type="checkbox"
                      checked={n.done}
                      onChange={() => toggleNote(currentId, i)}
                      style={{ margin: 0, accentColor: "#B34233", cursor: "pointer", flexShrink: 0 }}
                    />
                    <span style={{
                      flex: 1,
                      textDecoration: n.done ? "line-through" : "none"
                    }}>{n.text}</span>
                    <button
                      onClick={() => removeNote(currentId, i)}
                      style={{
                        background: "none", border: "none", color: "#D1CCC7",
                        cursor: "pointer", fontSize: "14px", padding: "0 4px", flexShrink: 0, lineHeight: 1
                      }}
                      onMouseOver={e => e.target.style.color = "#C4553A"}
                      onMouseOut={e => e.target.style.color = "#D1CCC7"}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Add note input */}
          <div style={{
            padding: "8px 16px 10px",
            borderTop: "1px solid #F0EDEB",
            display: "flex", gap: "8px"
          }}>
            <input
              value={noteInput}
              onChange={e => setNoteInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addNote()}
              placeholder="Add a note..."
              style={{
                flex: 1, padding: "7px 10px", fontSize: "12.5px",
                border: "1px solid #E0DCDA", borderRadius: "6px",
                background: "#FAFAF9", color: "#374151",
                outline: "none", fontFamily: "inherit"
              }}
            />
            <button
              onClick={addNote}
              style={{
                background: "#B34233", border: "none", color: "#fff",
                padding: "7px 14px", borderRadius: "6px",
                cursor: "pointer", fontSize: "12px", fontWeight: 600,
                flexShrink: 0
              }}
            >
              Add
            </button>
          </div>
        </div>

        {/* ─── BOTTOM RIGHT: Recently Visited ─── */}
        <div style={panelStyle}>
          <PanelHeader label="Recent Topics" accent="#5A7B8F" />
          <div style={{ padding: "14px 16px 20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {recentIds.map((id, i) => {
                const n = ALL_DATA[id];
                if (!n) return null;
                const active = id === currentId;
                const accent = getStageColor(n.stage);
                return (
                  <button
                    key={id}
                    onClick={() => navigate(id)}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "9px 12px", borderRadius: "8px",
                      border: "none", cursor: "pointer",
                      background: active ? "#F5F1ED" : "transparent",
                      textAlign: "left", fontSize: "13px",
                      color: active ? "#1F2937" : "#6B7280",
                      fontWeight: active ? 600 : 400,
                      transition: "all 0.12s"
                    }}
                    onMouseOver={e => { if (!active) e.currentTarget.style.background = "#F9F8F6"; }}
                    onMouseOut={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: active ? accent : "#D1CCC7", flexShrink: 0
                    }} />
                    <span style={{ flex: 1 }}>
                      {n.title.length > 26 ? n.title.slice(0, 24) + "..." : n.title}
                    </span>
                    <span style={{
                      fontSize: "10px", color: "#A8A09A", fontWeight: 500,
                      background: "#F0EDEB", padding: "2px 7px", borderRadius: "4px"
                    }}>
                      {n.stage}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Shared styles ───────────────────────────

const panelStyle = {
  background: "#FFFFFF",
  borderRadius: "12px",
  border: "1px solid #E0DCDA",
  overflow: "hidden",
  boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
};

function PanelHeader({ label, sub, accent }) {
  return (
    <div style={{
      padding: "14px 24px",
      borderBottom: "1px solid #F0EDEB",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{
          width: "10px", height: "10px", borderRadius: "3px",
          background: accent || "#6B7280"
        }} />
        <span style={{
          fontSize: "12px", fontWeight: 700, color: "#6B7280",
          textTransform: "uppercase", letterSpacing: "0.08em"
        }}>
          {label}
        </span>
      </div>
      {sub && (
        <span style={{
          fontSize: "11px", fontWeight: 500, color: accent || "#9CA3AF",
          background: `${accent}12`, padding: "3px 10px", borderRadius: "5px"
        }}>
          {sub}
        </span>
      )}
    </div>
  );
}

function groupLabelStyle(accent) {
  return {
    fontSize: "10.5px", fontWeight: 700, color: accent,
    textTransform: "uppercase", letterSpacing: "0.08em",
    marginBottom: "7px", paddingLeft: "2px"
  };
}

function responseBtn(active) {
  return {
    display: "flex", alignItems: "center", gap: "8px",
    padding: "10px 12px", borderRadius: "8px",
    border: "1px solid #E5E2DF",
    background: "#FAFAF9",
    color: "#374151", fontSize: "13px", fontWeight: 500,
    cursor: "pointer", textAlign: "left",
    transition: "all 0.12s",
    fontFamily: "inherit",
    width: "100%"
  };
}

function tagStyle(accent) {
  return {
    fontSize: "10px", color: accent, fontWeight: 600,
    background: `${accent}14`, padding: "2px 8px",
    borderRadius: "4px", whiteSpace: "nowrap", flexShrink: 0
  };
}
