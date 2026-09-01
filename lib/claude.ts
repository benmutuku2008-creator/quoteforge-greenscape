
import Anthropic from '@anthropic-ai/sdk';

export async function generateProposalFromNotes(notes: string, pricingContext: string) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

  const system = `You are QuoteForge for Greenscape Pro, a high-end hardscape company in Phoenix.
You have 200+ line items pricing. Your job: parse messy site walk notes into structured proposal.
Return JSON only: { "scope": "paragraph", "line_items": [{ "sku": "", "name": "", "qty": number, "unit": "", "unit_price": number, "total": number }], "needs_render": boolean, "reasoning": "" }
Rules: 
- Use only items from pricing context
- Calculate qty from notes (e.g., 20x20 = 400 sqft)
- Add base prep and demo where logical
- Margin guard 38% target, flag if below
- Phoenix heat considerations, slope issues`;

  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 2000,
    system,
    messages: [{ role: "user", content: `Pricing Context:
${pricingContext}

Site Notes:
${notes}

Generate proposal JSON.` }]
  });

  const text = msg.content[0].type === 'text' ? msg.content[0].text : '';
  return { raw: text, parsed: JSON.parse(text), cost: 0.12, model: 'claude-3-5-sonnet' };
}
