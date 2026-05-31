# Stichting Lumina Collective

Institutionele, editoriale en warme website voor Stichting Lumina Collective.

## Stack

- Next.js App Router
- TypeScript strict
- Tailwind CSS
- Sanity Studio for editable MVP content

## Local Development

```bash
npm install
npm run dev
```

Open:

- Public site: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

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

The CMS is mounted at:

```bash
http://localhost:3000/studio
```

Configure these variables before using Studio with a real Sanity project:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
SANITY_REVALIDATE_SECRET=
```

The current Studio includes Global Settings, Pages, Programs, Events, Gallery, Team, Partners and Testimonials. Public frontend queries are prepared in `src/sanity/queries.ts`; gallery items are filtered to `visibility == "public"` and `consentConfirmed == true`, and testimonials are filtered to `approvedForPublication == true`.

To connect Sanity:

1. Create a Sanity project and dataset.
2. Add the values from `.env.example` to Vercel.
3. Add this site domain to Sanity CORS:
   - `http://localhost:3000`
   - `https://stichtingluminacollective.nl`
   - the Vercel preview domain if preview editing is needed.
4. Create content for Global Settings, Programs, Events and Gallery.
5. Configure a webhook to `https://stichtingluminacollective.nl/api/revalidate?secret=YOUR_SECRET`.

## Deploy On Vercel

1. Import the GitHub repository into Vercel.
2. Set framework preset to Next.js.
3. Add all required environment variables from `.env.example`.
4. Build command: `npm run build`.
5. Output is managed by Next.js/Vercel automatically.
6. Add the production domain `stichtingluminacollective.nl`.
7. Configure DNS according to Vercel instructions.

Do not launch until:

- `npm run lint`, `npm run typecheck` and `npm run build` pass.
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
