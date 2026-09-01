"use client";
import { useState } from "react";

export default function Page() {
  const [client, setClient] = useState("John Smith");
  const [address, setAddress] = useState("123 Camelback Rd, Phoenix AZ 85018");
  const [budget, setBudget] = useState("$25k-40k");
  const [notes, setNotes] = useState("Backyard 40x30, wants paver patio 20x20, low water plants, firepit");
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState("");

  async function generate() {
    setLoading(true);
    setProposal("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client, address, budget, notes, needsRender: render }),
      });
      const data = await res.json();
      setProposal(data.text || JSON.stringify(data, null, 2));
    } catch (e: any) {
      setProposal("Error: " + e.message + "\n\n(Mock) Generated Proposal for " + client + " at " + address + "\nBudget: " + budget + "\nScope: " + notes);
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f6f8f5] p-4 md:p-10 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-[#0a0a0a]">Greenscape Pro</h1>
            <p className="text-black/60 mt-1 text-sm">QuoteForge • P0 Agent • Marcus Tate • Phoenix, AZ</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-green-100 border border-green-200 px-3 py-1.5 text-xs font-bold text-green-800">● Supabase Connected</span>
            <span className="rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white">Claude 3.5 Sonnet • $0.12/proposal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left - Capture */}
          <div className="lg:col-span-3 rounded- bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/[0.06] p-6 md:p-8">
            <h2 className="text- font-bold mb-1">Site Walk Capture (Field)</h2>
            <p className="text-sm text-black/50 mb-6">Fill after walk, AI will draft client-ready proposal</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-black/60 uppercase tracking-wide">Client Name</label>
                <input value={client} onChange={e=>setClient(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#fbfdfb] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" placeholder="Client Name" />
              </div>
              <div>
                <label className="text-xs font-semibold text-black/60 uppercase tracking-wide">Address</label>
                <input value={address} onChange={e=>setAddress(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#fbfdfb] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500 transition" placeholder="Address" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-black/60 uppercase tracking-wide">Budget Range</label>
                <select value={budget} onChange={e=>setBudget(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#fbfdfb] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500">
                  <option>$15k-25k</option><option>$25k-40k</option><option>$40k-60k</option><option>$60k+</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-black/10 bg-[#f6f8f5] px-4 py-3 text-sm">
                  <input type="checkbox" checked={render} onChange={e=>setRender(e.target.checked)} className="h-4 w-4 rounded border-black/20 text-green-600 focus:ring-green-500" />
                  <span className="font-medium">Needs 3D Render? (&gt;$30K)</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-semibold text-black/60 uppercase tracking-wide">Site Notes</label>
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#fbfdfb] px-4 py-3 text-sm min-h- outline-none focus:ring-2 focus:ring-green-500" placeholder="Measurements, materials, client wants..." />
            </div>

            <button onClick={generate} disabled={loading} className="w-full rounded-xl bg-black text-white font-bold py-3.5 hover:bg-black/80 active:bg-black/90 disabled:opacity-50 transition flex items-center justify-center gap-2">
              {loading? "Generating with Claude..." : "✦ Generate Proposal with AI"}
            </button>

            <div className="mt-6 rounded-xl bg-[#f6f8f5] border border-black/5 p-4 text- leading-relaxed text-black/70">
              <div>Will push to: <span className="font-semibold text-black">GHL CRM • Stripe Deposit • Slack #proposals • CompanyCam</span></div>
              <div className="mt-1">Pipeline: <span className="font-mono text-xs bg-white px-2 py-1 rounded border">Site Walk Done → AI Drafted → Awaiting Approval → Sent</span></div>
              <div className="mt-1">ROI: <b>6-9 days → 2 hours</b>. Recovery $28K per proposal. Supabase persistent.</div>
            </div>
          </div>

          {/* Right - Output */}
          <div className="lg:col-span-2 rounded- bg-[#111111] text-white p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-h- flex flex-col">
            <h3 className="text-lg font-bold mb-2">AI Proposal Draft</h3>
            <p className="text-white/50 text-xs mb-4">Powered by Claude 3.5 Sonnet + Supabase • Human approval required</p>
            <div className="flex-1 rounded-xl bg-white/5 border border-white/10 p-4 text-sm whitespace-pre-wrap overflow-auto font-mono leading-relaxed">
              {proposal? proposal : "Your AI proposal will appear here after generation.\n\n• Itemized pricing\n• Scope of work\n• Timeline & terms\n• Will save to Supabase proposals table"}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="rounded-xl bg-white text-black text-sm font-bold py-2.5">Approve & Send</button>
              <button className="rounded-xl bg-white/10 text-white text-sm font-bold py-2.5 border border-white/10">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
