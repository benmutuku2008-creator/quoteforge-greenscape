
-- Supabase schema for QuoteForge
create table clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  phone text,
  budget_range text,
  created_at timestamp default now()
);

create table pricing_items (
  id serial primary key,
  sku text unique,
  name text not null,
  category text, -- paver, pergola, turf, etc
  unit_price numeric not null,
  unit text default 'sqft',
  description text
);

create table proposals (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id),
  site_notes text not null,
  scope_text text,
  line_items jsonb, -- [{name, qty, unit_price, total}]
  subtotal numeric,
  total numeric,
  margin_percent numeric,
  status text default 'DRAFT', -- DRAFT, APPROVED, SENT
  ai_cost numeric,
  ai_model text,
  ghl_contact_id text,
  created_at timestamp default now()
);

-- Seed 15 sample pricing items (real sheet has 200+)
insert into pricing_items (sku, name, category, unit_price, unit) values
('PAV-TRAV-001', 'Travertine Pavers - Premium', 'paver', 18.50, 'sqft'),
('PAV-PORC-002', 'Porcelain Pavers', 'paver', 22.00, 'sqft'),
('PERG-ALU-12x16', 'Aluminum Pergola 12x16 with Fans', 'pergola', 8500, 'each'),
('PERG-WOOD-10x12', 'Wood Pergola 10x12', 'pergola', 5200, 'each'),
('FIRE-GAS-001', 'Gas Fire Pit - Custom', 'fire', 3800, 'each'),
('TURF-SYN-500', 'Artificial Turf - Premium', 'turf', 12.00, 'sqft'),
('IRR-FIX', 'Irrigation Repair / Reroute', 'irrigation', 850, 'each'),
('RETAIN-001', 'Retaining Wall - Block', 'hardscape', 45.00, 'lf'),
('KITCHEN-BASE', 'Outdoor Kitchen Base Module', 'kitchen', 6500, 'each'),
('LIGHT-LED-6', 'LED Landscape Lighting (6)', 'lighting', 1200, 'set'),
('DEMO-001', 'Demo & Haul', 'prep', 2.50, 'sqft'),
('BASE-PREP', 'Base Prep & Compaction', 'prep', 4.00, 'sqft');
