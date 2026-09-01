
import { NextRequest, NextResponse } from 'next/server';
import { generateProposalFromNotes } from '@/lib/claude';
import { supabase } from '@/lib/supabase';
import { pushToGHL, createStripeDeposit, notifySlack } from '@/lib/integrations';

export async function POST(req: NextRequest) {
  const { client, notes } = await req.json();

  // Get pricing context from Supabase
  const { data: pricing } = await supabase.from('pricing_items').select('*').limit(200);
  const pricingContext = pricing?.map(p => `${p.name} ${p.unit_price}/${p.unit}`).join(', ') || '';

  // Real LLM call
  const ai = await generateProposalFromNotes(notes, pricingContext);

  // Persist
  const { data: clientRow } = await supabase.from('clients').insert(client).select().single();
  const { data: proposal } = await supabase.from('proposals').insert({
    client_id: clientRow.id,
    site_notes: notes,
    scope_text: ai.parsed.scope,
    line_items: ai.parsed.line_items,
    total: ai.parsed.line_items.reduce((s:any, li:any)=>s+li.total,0),
    ai_cost: ai.cost,
    ai_model: ai.model,
    status: 'DRAFT'
  }).select().single();

  await notifySlack({ ...proposal, client_name: client.name });

  return NextResponse.json({ proposal, ai });
}
