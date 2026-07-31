# Iron Ridge Service Group

Production-ready starter website for a Colorado service group connecting mobile automotive and diesel service, a full-service repair shop, fleet support, and transportation logistics under one brand.

The first deployment milestone includes a responsive homepage, accessible mobile navigation, division overview, central company configuration, contact and about pages, legal pages, custom 404 page, and basic search/social metadata.

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 plus project design tokens in `app/globals.css`
- Lucide React icons
- ESLint with the Next.js Core Web Vitals and TypeScript presets
- npm and Vercel-compatible production scripts

No database, secret, paid service, or external image host is required for the starter.

## Local installation

Requirements: Node.js 22 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site also runs without `.env.local`; optional endpoints may remain blank.

## Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

Before opening a pull request or deploying, run:

```bash
npm run lint
npm run build
```

## Folder structure

```text
app/                    App Router pages, global layout, metadata, and styles
components/             Reusable header, footer, cards, and section components
config/site.ts          Central editable business information
lib/                    Shared helpers
public/images/          Local branding, division, and service image folders
types/                  Shared TypeScript types
.env.example            Documented public environment settings
```

## Editing company information

Update `config/site.ts` before launch. It is the single source for:

- Company and division names
- Main and emergency phone numbers
- General, mobile, shop, and logistics email addresses
- Shop address, hours, and service area
- Social and Google Business Profile links
- USDOT and MC placeholders
- Form endpoints and click-to-call links

Keep unconfirmed information clearly labeled. When replacing phone numbers, update the visible values and their matching `tel:` links.

## Replacing images

Place approved files in:

```text
public/images/branding/
public/images/divisions/
public/images/services/
```

Use optimized WebP or AVIF files with descriptive names. Replace the styled placeholder in `app/page.tsx` with `next/image`, provide accurate alt text, and set explicit image dimensions. Suggested assets include the final Iron Ridge logo, branded mobile service truck, shop exterior/interior, technicians at work, fleet vehicles, flatbed transport, trailers, and equipment.

## Configuring forms

The starter does not send form data. Future forms can use a CRM, Formspree, HubSpot, email provider, or another HTTPS endpoint. Add browser-safe endpoints to `.env.local` during development and to Vercel Environment Variables in production:

```env
NEXT_PUBLIC_GENERAL_FORM_ENDPOINT=
NEXT_PUBLIC_SERVICE_FORM_ENDPOINT=
NEXT_PUBLIC_LOGISTICS_FORM_ENDPOINT=
```

The central config safely treats blank endpoints as empty strings, so they are optional for the first build. Never place private API keys in a `NEXT_PUBLIC_` variable.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical production origin used by Next.js metadata. |
| `NEXT_PUBLIC_GENERAL_FORM_ENDPOINT` | No | Future general contact submission URL. |
| `NEXT_PUBLIC_SERVICE_FORM_ENDPOINT` | No | Future repair and mobile service submission URL. |
| `NEXT_PUBLIC_LOGISTICS_FORM_ENDPOINT` | No | Future transportation quote submission URL. |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | No | Future shop map or directions link. |

Do not commit `.env` or `.env.local`. Only `.env.example` belongs in source control.

## GitHub setup

Replace `USERNAME` with the GitHub account or organization that will own the repository.

```bash
git init
git add .
git commit -m "Initial Iron Ridge website"
git branch -M main
git remote add origin https://github.com/USERNAME/iron-ridge-service-group.git
git push -u origin main
```

Do not put a GitHub token in the remote URL, source files, environment examples, or documentation.

## Deploying to Vercel

1. Push the code to GitHub.
2. Sign in to Vercel.
3. Select **Add New Project**.
4. Import the `iron-ridge-service-group` GitHub repository.
5. Confirm the detected framework is Next.js.
6. Add `NEXT_PUBLIC_SITE_URL` as an environment variable.
7. Set its value to the final Vercel or custom-domain URL, without a trailing slash.
8. Deploy the project.
9. If the final URL was not known before the first deployment, update the environment variable.
10. Redeploy after changing the production URL.

Future pushes to the `main` branch should automatically create new Vercel production deployments. Pull requests and other branches can create preview deployments according to the Vercel project settings.

## Placeholder checklist

Before a public launch, confirm and replace:

- [ ] Logo, favicon, and approved brand assets
- [ ] Main and emergency phone numbers
- [ ] All division email addresses
- [ ] Shop address and map link
- [ ] Business hours and holiday availability
- [ ] Mobile, shop, and transportation service areas
- [ ] USDOT and MC authority information, if applicable
- [ ] Insurance and licensing statements, if approved
- [ ] Social and Google Business Profile links
- [ ] Final photography and image alt text
- [ ] Form provider and submission endpoints
- [ ] Legal review of the privacy policy and terms
- [ ] Final production URL in Vercel

## Future development roadmap

- Dedicated Mobile Service, Auto & Diesel, Logistics, and Fleet Services pages
- Mobile service, shop appointment, transportation quote, and fleet consultation forms
- Accessible validation plus success and error states
- LocalBusiness structured data after address and service-area confirmation
- Service-area and FAQ content based on verified operations
- Testimonials and trust indicators using approved customer material
- Final Open Graph image and local photography
- CRM or email workflow integration
- Analytics and consent controls selected with the business owner

All claims about service availability, operating area, licensing, insurance, authority, response time, and pricing must remain subject to confirmation until verified by the business.
