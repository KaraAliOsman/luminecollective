# Cloudflare Workers Deployment

## Existing Pipeline

`.github/workflows/deploy.yml` is the production deployment path. Do not create
a second Cloudflare Pages build for the same repository.

Every push to `main` installs the locked dependencies, runs lint/type checks/tests,
builds the Worker plus the static Sanity Studio, then deploys with OpenNext.
Post-deploy smoke checks verify the release SHA, public routes, assets and PDF.
They are required to pass, not silently ignored.

The existing GitHub Actions secret is `CLOUDFLARE_API_TOKEN`. The configured Worker
name is `lumina-collective`; `wrangler.jsonc` contains its account ID. Never commit
the token or copy a Worker secret into public build variables.

## Local Commands

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run cf:build
npm run preview
```

For an authorised local deployment with an authenticated Wrangler session:

```bash
npx wrangler login
npm run deploy
```

The authoritative deployment build runs on Linux in Actions. Windows users can
work in the normal Next development server and use Actions for the adapter build.
Development output is `.next-dev`; production output is `.next` and `.open-next`.

## Runtime Configuration

The repository provides public defaults for the site URL, Sanity dataset and
recipient addresses. Configure `RESEND_API_KEY` as a Worker secret and
`FORMS_FROM_EMAIL` with a verified sender. Existing dashboard variables are
preserved with `keep_vars: true`; values explicitly present in Wrangler still
remain controlled by this repository.

Sanity read tokens, write tokens and `SANITY_REVALIDATE_SECRET` must remain private.
`NEXT_PUBLIC_*` values are public and are compiled into browser code when used
there. Changing analytics or project settings can require a new build.

The Studio is built into static `public/studio/` assets. Do not restore a bundled
Next route for the entire editor. `/static/:path*` rewrites support its asset URLs.
Add the production and authorised editor origins to Sanity CORS.

## Domain And Health

The deployment URL is https://lumina-collective.aliosmankara111.workers.dev.
The intended domain is https://stichtingluminacollective.nl.
See [the domain migration guide](DOMAIN_SETUP.md) before changing DNS or mail records.

```bash
node scripts/smoke-test.mjs https://lumina-collective.aliosmankara111.workers.dev COMMIT_SHA
```

The pipeline's separate read-only domain audit reports nameservers, accessible
zone status, Custom Domain bindings and whether the domain serves this exact
commit. A green Worker deployment alone does not confirm DNS migration.

`/api/forms/status` reports configuration availability only. An accepted provider
receipt confirms acceptance for delivery, not that a message reached an inbox.

## Assets

`next/image` is unoptimized at runtime. The photographic assets are already
compressed WebP files in `public/images`; Sanity image URLs request resized assets
from its CDN. No paid image-processing service is required by this implementation.

`public/_headers` gives the original policy PDF `X-Frame-Options: SAMEORIGIN` so
the ANBI reader can embed it. Do not override that PDF with `DENY` in a global rule.
Hashed Next assets are immutable; non-hashed photographs use a bounded cache TTL.
