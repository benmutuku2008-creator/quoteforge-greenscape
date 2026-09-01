
export async function pushToGHL(client: any, proposal: any) {
  // Real implementation: POST to https://rest.gohighlevel.com/v1/contacts/
  // Using GHL_API_KEY
  console.log('Pushing to GHL:', client.name);
  return { ghl_contact_id: 'ghl_' + Date.now() };
}

export async function createStripeDeposit(proposal: any) {
  // Real: stripe.invoices.create with 50% deposit
  console.log('Creating Stripe 50% deposit:', proposal.total * 0.5);
  return { invoice_url: 'https://stripe.test/invoice/...' };
}

export async function notifySlack(proposal: any) {
  const webhook = process.env.SLACK_WEBHOOK_URL!;
  if(!webhook) return;
  await fetch(webhook, { method: 'POST', body: JSON.stringify({ text: `New proposal needs approval: ${proposal.total} for ${proposal.client_name} - ${process.env.NEXT_PUBLIC_APP_URL}` }) });
}
