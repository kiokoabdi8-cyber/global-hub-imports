# Global Hub Imports — Phase 1 Website

Premium bathroom & kitchen fittings — importer & supplier, Nairobi, Kenya.

## Tech Stack

- **Frontend:** Next.js 14 (React, TypeScript)
- **CMS:** Sanity (headless, structured content)
- **Styling:** Tailwind CSS + custom CSS
- **Hosting:** Vercel (frontend) + Sanity Cloud (CMS)
- **Forms:** Next.js API routes → Email + Google Sheets

## Project Structure

```
.
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Global layout
│   ├── page.tsx                  # Homepage
│   ├── products/                 # Product pages
│   ├── quote/                    # Quotation form
│   ├── about/                    # About page
│   ├── professionals/            # B2B page
│   ├── faq/                      # FAQ page
│   └── globals.css               # Global styles
├── components/                    # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── home/                     # Homepage sections
├── sanity/                        # Sanity CMS schemas
│   └── schemas/
│       ├── product.ts
│       ├── category.ts
│       ├── project.ts
│       ├── journal.ts
│       └── faq.ts
├── lib/                           # Utilities
│   ├── sanity.ts                 # Sanity client
│   └── image.ts                  # Image URL builder
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── sanity.config.ts              # Sanity configuration
```

## Setup Instructions

### 1. Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Get these from your Sanity project dashboard.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 4. Start Sanity Studio

```bash
cd studio
npm install
npm run dev
```

Open http://localhost:3333

## Phase 1 Deliverables

- [x] Homepage (hero, categories, value props, featured collection, projects, professionals band, showroom, journal teaser, closing CTA)
- [x] Products hub page
- [x] Category landing page templates (8 categories)
- [x] Product detail page template
- [x] Projects & Clients portfolio page
- [x] For Professionals B2B page
- [x] About Us page
- [x] Quotation form (single product + multi-product quote basket)
- [x] Professional project inquiry form
- [x] FAQ page (collapsible categories)
- [x] Navigation (desktop mega-menu ready, mobile bottom action bar)
- [x] Footer (4-column with links, contact, hours)
- [x] Sanity CMS schemas (Product, Category, Project, Journal, FAQ)
- [x] Mobile-responsive layout
- [x] WhatsApp integration (context-aware pre-filled links)
- [x] Colour palette & typography per spec

## Phase 2 (E-Commerce) — Architecture Ready

The codebase is designed to accommodate Phase 2 (checkout, cart, M-Pesa) without a full rebuild:
- Product data structure includes pricing visibility flags
- Component layouts reserve cart/checkout spacing
- Form submission endpoints are API-route agnostic
- Zustand store placeholder for cart/quote state management

## Content Entry Workflow

1. **Sanity Studio** → Create Product documents with:
   - Name, SKU, category, finishes, price, specs, images, PDFs
   - Related products, warranty, stock status

2. **Categories** → Mapped to product sub-categories, include buying guides

3. **Projects** → Case studies with images, scope, location

4. **Journal** → Blog posts with SEO meta, images, related products (max 3)

5. **FAQs** → Question/answer pairs, grouped by category

## Performance Targets

- LCP < 2.5s (mobile 4G)
- FID < 100ms
- CLS < 0.1
- All images lazy-loaded, responsive, WebP with JPEG fallback

## Analytics & Tracking

- GA4 events for WhatsApp clicks, quote submissions, product views
- UTM tracking on all CTA links
- Form submission tracking (Google Sheets + email fallback)

## Deployment

### Frontend (Vercel)

```bash
vercel deploy
```

Connect GitHub repo, auto-deploys on push to `main`.

### Sanity CMS

Use Sanity's hosting or self-host at sanity.io/manage.

## Next Steps

1. **Create Sanity project** → sanity.io/manage
2. **Fill .env.local** with project credentials
3. **Populate content** in Sanity Studio (products, categories, projects, FAQs, journal)
4. **Connect domain** (purchase .co.ke domain, point DNS to Vercel)
5. **Set up WhatsApp Business account**
6. **Configure form backend** (email service + Google Sheets webhook)
7. **Deploy to production**

## Support

For questions, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Built for Global Hub Imports, July 2026**
