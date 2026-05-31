# Cloudflare Deployment Guide

This project is configured to run on Cloudflare Workers using the OpenNext
Cloudflare adapter. The goal is a near-zero monthly cost setup where the domain
is the only expected fixed cost.

## Recommended Free-First Stack

| Need | Recommended service | Why |
| --- | --- | --- |
| DNS, CDN, hosting, SSR/API runtime | Cloudflare Workers | Free tier, global edge, no Vercel dependency |
| Static assets | Cloudflare Worker assets | Included with the OpenNext build output |
| Forms delivery | Resend | Simple free tier for transactional email |
| CMS | Sanity | Good free tier for editorial content and Studio |
| Analytics | Cloudflare Web Analytics or Plausible/GA4 with consent | Cloudflare Web Analytics avoids cookies; GA4/Plausible are already prepared |
| Bot protection | Cloudflare Turnstile | Free CAPTCHA alternative, can be added later if spam appears |

## Commands

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run cf:build
```

Preview locally in the Cloudflare Workers runtime:

```bash
npm run preview
```

Deploy:

```bash
npx wrangler login
npm run deploy
```

## Required Cloudflare Settings

1. Add `stichtingluminacollective.nl` to Cloudflare.
2. Point the nameservers from the domain registrar to Cloudflare.
3. Deploy the Worker from this repository.
4. Add a custom domain route for `stichtingluminacollective.nl`.
5. Keep SSL/TLS mode as `Full` or `Full (strict)`.
6. Enable Always Use HTTPS.

## Important: Workers, Not Pages

This repository is configured for Cloudflare Workers via OpenNext. Do not create
a classic Cloudflare Pages project for this repo.

If your build log says:

```txt
Did you mean to use wrangler.toml to configure Pages?
pages_build_output_dir
```

then the project was imported as **Pages**. Create/deploy it as a **Worker**
instead, or deploy from your machine with:

```bash
npx wrangler login
npm run deploy
```

The `.npmrc` file intentionally sets `legacy-peer-deps=true` because
it makes Cloudflare's `npm clean-install` less brittle when Sanity packages
publish peer metadata changes. The current app uses a Cloudflare-compatible
Next 15.5 release and builds cleanly with `npm ci`.

## Sanity Studio On The Free Tier

Do not restore `src/app/studio` as a Next.js route. Bundling Sanity Studio into
the Worker makes the script too large for the Cloudflare Workers free tier.

The project now builds Studio separately:

```bash
npm run studio:build
```

This writes static assets to `public/studio/`. During `npm run cf:build`,
OpenNext uploads those files as Worker assets, so the admin is available at:

```txt
/studio
```

Sanity's generated Studio references `/static/...` assets, so `next.config.ts`
contains a rewrite from `/static/:path*` to `/studio/static/:path*`.

Before logging in, add the production domain and the workers.dev preview domain
to Sanity CORS.

## Required Variables

Set public values in the Cloudflare dashboard or `wrangler.jsonc`:

```txt
NEXT_PUBLIC_SITE_URL=https://stichtingluminacollective.nl
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

Set private values as Worker secrets:

```bash
npx wrangler secret put SANITY_REVALIDATE_SECRET
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put FORMS_FROM_EMAIL
npx wrangler secret put CONTACT_EMAIL
npx wrangler secret put VOLUNTEER_EMAIL
npx wrangler secret put NEWSLETTER_EMAIL
```

## Notes

- `next/image` is configured as `unoptimized` to avoid requiring Cloudflare
  Images or any paid image optimization service.
- Preview images are committed locally in `public/preview`.
- Sanity images are already requested through Sanity's image URL builder.
- R2 is not required for the MVP. Add it later only if ISR/cache needs grow.
- The project does not use Vercel for hosting.
