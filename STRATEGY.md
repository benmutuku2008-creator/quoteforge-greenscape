# Greenscape Pro - AI Agent Strategy
**Prepared for isthispossible.ai audit**
**By: Benjamin Mutuku | Health Navigator approach adapted for construction**

## Summary Judgment
Marcus THINKS his problems are: quoting, follow-up, crew coaching, marketing.
The DATA says: Quote cycle is bleeding $588K-$784K/year in lost deals (35-40% of qualified leads lost x $28k avg). Post-sign drag locks $224K-$336K in delayed revenue at any time. Customer comms drives referrals but inconsistent. 1400 closed-lost leads = $784K latent. Crew coaching = $104K/year problem, content = non-problem (lead volume not constraint).

We push back hard on his #3 and #4.

### Agent 1: QuoteForge - AI Proposal Accelerator (P0)
**Purpose:** Turn site-walk notes into approved proposal in 2 hours, not 6-9 days.

**What it does:**
- Marcus voice-records or types site walk notes in field (mobile-first)
- LLM parses notes against 200+ line item pricing spreadsheet + past proposals
- Auto-generates scope of work, line items, quantities, pricing, margin guardrails
- Generates 3D render brief for Carlos if >$30K
- Human-in-loop: Marcus approves/edits in one tap

**Replaces:** Marcus spending 2-3 hours per proposal drafting from scratch, being sole bottleneck.

**ROI:** If we recover even 50% of lost 35-40% close-lost: 20 extra deals/year x $28K = $560K revenue, ~$212K margin. Also saves Marcus 10-15 hrs/week = evenings back.

**Why #1:** Single highest leverage. Auditor math confirms. Closes gap from 6-9 days to same-day. Directly attacks 35-40% lost to faster competitors.

### Agent 2: Onboarding Orchestrator - Post-Sign Drag Killer
**Purpose:** Automate HOA, permit, deposit chase.

**What it does:**
- Watches GHL for signed deal, auto-triggers deposit invoice (Stripe), welcome packet, HOA package
- Daily check of deposit paid? HOA submitted? Permit status? Auto SMS/email to client with exact next step
- Escalates to Jenna only when human needed
- Dashboard of 8-12 projects in limbo with $ at risk

**Replaces:** Jenna manual chasing, 4-6 week drag to 2 week target.

**ROI:** Accelerates $224K-$336K delayed revenue, frees Jenna 1-2 hrs/day, reduces crew scheduling gaps.

**Why #2:** Second biggest revenue blocker, directly cited by Jenna. Unblocks cash flow.

### Agent 3: BuildComm - Automated Client Update Agent
**Purpose:** Kill anxiety calls, drive referrals with Marcus-branded updates.

**What it does:**
- Triggers on CompanyCam photo upload / Jobber milestone
- LLM summarizes day's progress from crew check-in + photos into client-friendly update (Marcus voice)
- Sends via GHL SMS/email + CompanyCam comment
- Auto-generates halfway Loom script for Marcus to record in 60 sec, or AI voiceover version
- Flags issues (delay, extra material) early

**Replaces:** Inconsistent comms, 4-5 day silence, Jenna fielding "what's happening?" calls daily.

**ROI:** 30% of jobs get Loom today, goal 100%. Customers who get updates refer. Reduces 5-10 inbound anxiety calls/week.

**Why #3:** High-signal, low-cost. Marcus already knows this drives referrals, just can't keep up.

### Agent 4: Revival - Closed-Lost Reactivation Agent
**Purpose:** Monetize 1400 dead leads with personalized outreach.

**What it does:**
- Pulls lead from GHL closed-lost, reads notes, timeline, scope, why lost
- LLM writes hyper-personalized SMS/email in Marcus voice referencing their specific backyard project
- Sends via GHL, 2-3 touch sequence over 2 weeks, human approval queue
- Books directly to Marcus calendar if reply positive

**Replaces:** Brittany's sporadic blast, occasional deals.

**ROI:** 1400 leads x 2% re-close = 28 deals x $28K = $784K latent revenue. Even 1% = $392K.

**Why #4:** Pure found money, low risk. GHL already has data.

### Agent 5: Qualifier - AI Pre-Qualification Gate
**Purpose:** Protect Marcus calendar from tire-kickers.

**What it does:**
- Instant SMS after Meta lead form: 4-5 questions (budget range, timeline, own/rent, scope size)
- LLM scores lead: qualified / unqualified / nurture
- Qualified -> auto books site walk in Marcus calendar
- Unqualified -> polite decline + referral, never hits calendar
- Nurture -> goes to Revival sequence

**Replaces:** Marcus calling 15-20 leads/week, 4-6 clearly unqualified, 10-15 mins each.

**ROI:** Saves 1-2 hrs/week of CEO time, improves show rate for site walks, data for ROAS.

**Why #5:** Smallest $ impact but highest time-leverage for CEO. Ranked last because it doesn't create revenue, only protects time.

---

### Answers

**Why is #1 the #1, and not founder's stated #1?** 
Founder's stated #1 was also quoting, so aligned, but we define it differently. Marcus said "speed up quoting" but solution is not just faster typing, it's removing Marcus as interpreter bottleneck via LLM that turns messy field notes into structured scope + pricing. His stated #3 (crew coaching) and #4 (marketing content) are traps: coaching = $104K/year problem, marketing = solving non-problem (he admitted lead volume not constraint, ROAS 4.5x healthy). We push them out of top 5.

**What agent considered but NOT included and why?**

**Crew Coach Pocket AI** - Marcus wanted "AI in pocket" for crews to handle upsells and avoid free work. Math: 4 crews x 1 incident/week x $500 = $104K/year leakage. Real money but 5x smaller than quote cycle loss. More importantly, it's a training/process problem, not AI problem. Needs rule book + pricing guardrails in Jobber, not LLM. Would also require change management with crews. ROI lower, implementation harder, so cut.

**Assumptions:**
- GHL has API access for leads
- Pricing spreadsheet can be exported to DB
- Marcus willing to voice-record site notes on phone
- Carlos render workflow can take structured brief
