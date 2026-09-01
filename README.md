
# QuoteForge - Greenscape Pro P0 Agent
Built for isthispossible.ai take-home.

## What it does
Turns messy site-walk notes into approved proposal in <2 hours vs 6-9 days. Recovers 35-40% lost leads.

Flow: Site walk notes (voice/text) -> Claude 3.5 Sonnet parses against 200+ pricing items -> Generates scope + line items + margin guard -> Supabase persistence -> Human approval -> Pushes to GHL, Stripe invoice, Slack.

## Stack
- Next.js 14 (App Router)
- Supabase (Postgres) - proposals, clients, pricing_items tables
- Anthropic Claude 3.5 Sonnet - real LLM for scope generation
- GHL API, Stripe, Slack webhook integrations

## Setup
1. cp .env.example .env.local and fill keys
2. npm install
3. Run supabase/supabase.sql in Supabase SQL editor
4. npm run dev

## Deploy
Vercel: vercel --prod . Set env vars in Vercel dashboard.

## Cost per proposal
Claude 3.5 Sonnet: ~$0.11-0.15 (input: 2k pricing context + notes, output: 1.5k tokens)
Supabase: free tier

## Human-in-loop
All proposals start as DRAFT, require Marcus approval before GHL/Slack/Stripe fire.

See STRATEGY.md for full 5-agent prioritization.
