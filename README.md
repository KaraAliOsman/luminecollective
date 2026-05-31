# Stichting Lumina Collective

Institutionele, editoriale en warme website voor Stichting Lumina Collective.

## Stack

- Next.js App Router
- TypeScript strict
- Tailwind CSS
- Sanity Studio for editable MVP content, built as static assets for Cloudflare

## Local Development

```bash
npm install
npm run dev
```

Open:

- Public site: `http://localhost:3000`
- Sanity Studio dev server: `npm run studio:dev`
- Sanity Studio static preview after build: `http://localhost:3000/studio`

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Email And Forms

The MVP includes functional contact, volunteer and newsletter endpoints:

- `POST /api/contact`
- `POST /api/volunteer`
- `POST /api/newsletter`

They validate on the client and server with Zod, include a honeypot field, require GDPR consent and use a basic in-memory rate limit.

To enable email delivery, configure:

```bash
RESEND_API_KEY=
FORMS_FROM_EMAIL=
CONTACT_EMAIL=
VOLUNTEER_EMAIL=
NEWSLETTER_EMAIL=
```

If these variables are missing locally, submissions still validate and return a success state without sending email. No private keys are exposed to the browser.

## Sanity Studio

For Cloudflare Workers free tier, the Studio is not bundled as a Next.js route.
Instead, `npm run build` runs `npm run studio:build` and writes the static Studio
to `public/studio/`. OpenNext then uploads it as static Worker assets.

The deployed CMS is mounted at:

```bash
https://your-domain.example/studio
```

Configure these variables before using Studio with a real Sanity project:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
SANITY_REVALIDATE_SECRET=
```

The current Studio includes guided sections for Site Settings, fixed MVP pages, Programs, Events, News & Stories, Gallery, Team, Partners and Testimonials. Public frontend queries are prepared in `src/sanity/queries.ts`; gallery items are filtered to `visibility == "public"` and `consentConfirmed == true`, and testimonials are filtered to `approvedForPublication == true`.

For Turkish non-technical editing instructions, see `docs/admin-guide.md`.

To connect Sanity:

1. Create a Sanity project and dataset.
2. Add the values from `.env.example` to Cloudflare Workers.
3. Add this site domain to Sanity CORS:
   - `http://localhost:3000`
   - `http://localhost:3333`
   - `https://stichtingluminacollective.nl`
   - your `*.workers.dev` preview URL if preview editing is needed.
4. Create content for Global Settings, Programs, Events and Gallery.
5. Configure a webhook to `https://stichtingluminacollective.nl/api/revalidate?secret=YOUR_SECRET`.

## Deploy On Cloudflare Workers

This project is configured for Cloudflare Workers with the OpenNext Cloudflare
adapter. It does not require Vercel.

See the full deployment checklist in `docs/cloudflare-deploy.md`.

Local checks:

```bash
npm run lint
npm run typecheck
npm run build
npm run cf:build
```

Cloudflare preview:

```bash
npm run preview
```

Deploy from local machine:

```bash
npx wrangler login
npm run deploy
```

Recommended production setup:

1. Add the domain `stichtingluminacollective.nl` to Cloudflare DNS.
2. Create/import the Workers project from this GitHub repository.
3. Use `npm run deploy` as the deploy command if deploying with CI.
4. Add the custom domain to the Worker in Cloudflare.
5. Set all required environment variables and secrets.

Use Cloudflare secrets for private values:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put SANITY_REVALIDATE_SECRET
npx wrangler secret put CONTACT_EMAIL
npx wrangler secret put VOLUNTEER_EMAIL
npx wrangler secret put NEWSLETTER_EMAIL
```

Public/non-secret values can stay in `wrangler.jsonc` or be set in the
Cloudflare dashboard:

```bash
NEXT_PUBLIC_SITE_URL=https://stichtingluminacollective.nl
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

Do not launch until:

- `npm run lint`, `npm run typecheck` and `npm run build` pass.
- `npm run cf:build` passes.
- `CONTACT_EMAIL`, `VOLUNTEER_EMAIL` and `NEWSLETTER_EMAIL` are real addresses.
- Resend domain and `FORMS_FROM_EMAIL` are verified.
- Sanity Studio opens and published content appears on the frontend.
- Legal placeholders are reviewed and completed.
- Preview photography is accepted or replaced with real Lumina photos.

## Analytics

Analytics scripts are loaded only after cookie consent.

- GA4: set `NEXT_PUBLIC_GA_ID`.
- Plausible: set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.

Keep both empty if analytics should remain disabled.

## Search Console

After deploy:

1. Verify `stichtingluminacollective.nl` in Google Search Console.
2. Submit `https://stichtingluminacollective.nl/sitemap.xml`.
3. Inspect `/`, `/over-ons`, `/programmas`, `/agenda`, `/doe-mee` and `/contact`.
4. Check mobile usability and Core Web Vitals after Google collects data.

## Preview Photography

The current MVP uses locally stored preview photography from Pexels in
`public/preview/`. Sources and credits are documented in
`docs/preview-images.md`. Replace these files with real Lumina photos before
or shortly after launch.

Legal, KVK, ANBI, address and official email details are intentionally not
invented. Fill the bracketed legal placeholders before production launch.
