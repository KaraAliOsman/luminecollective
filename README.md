# Stichting Lumina Collective

Public Dutch-language website for the Tilburg foundation. Next.js App Router,
TypeScript, Sanity Studio and OpenNext for Cloudflare Workers.

## Development

Node.js 22.18+ and npm 11.9.0. Use the committed `package-lock.json`.

```bash
npm ci
npm run dev
```

The default local URL is `http://localhost:3000`. For a different port:

```bash
npm run dev -- --port 3100
```

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm audit
npm run cf:build
node scripts/smoke-test.mjs http://127.0.0.1:3100
```

`cf:build` builds Sanity Studio and the Worker. The deployment build runs on Linux
in GitHub Actions. The smoke test checks public routes, images, the exact original
policy PDF, redirects, invalid form submissions, sitemap and Studio.

## Publication

Pushes to `main` run `.github/workflows/deploy.yml`: install, lint, types, tests,
production build, deploy, release verification and a read-only domain audit.
Pull requests run validation and the build, without deploying.

- Repository: https://github.com/KaraAliOsman/luminecollective
- Worker: https://lumina-collective.aliosmankara111.workers.dev
- Intended domain: https://stichtingluminacollective.nl
- Release check: `/api/health`

The custom domain requires its own DNS migration. A successful Worker deployment
does not prove that the domain serves it. See [domain setup](docs/DOMAIN_SETUP.md)
and [deployment details](docs/cloudflare-deploy.md).

## Content And ANBI

- `src/data/organization.ts`: board, mission, statutory scope, remuneration and ANBI data.
- `src/data/programs.ts`: four programme directions from the policy plan.
- `src/lib/constants/brand.ts`: official contact details, bank account and identifiers.
- `public/documenten/beleidsplan-lumina-2026-2030.pdf`: original, unchanged supplied PDF.
- `/anbi`: organisation data, policy download/reader, board, funding, SWOT and reports.

RSIN and a granted ANBI designation were not supplied. The site explicitly
distinguishes the application from a confirmed designation and does not promise
tax deductibility. Annual figures and event dates must not be invented.

Published Sanity content takes precedence where supported. Without published
events, the agenda shows an honest empty state. Gallery photos require public
visibility and confirmed consent; demonstration images and unapproved testimonials
are not presented as participants or past activities.

## Forms

Contact, volunteer and update-request endpoints validate with Zod, require consent,
limit body size, check request origin and include honeypot/rate-limit protection.
The rate limit is best-effort per Worker isolate, not a distributed anti-abuse service.

Required Worker settings:

```text
RESEND_API_KEY
FORMS_FROM_EMAIL
CONTACT_EMAIL
VOLUNTEER_EMAIL
NEWSLETTER_EMAIL
```

Keep the API key in Worker secrets. Use a verified Resend sender. Success requires
an accepted provider receipt; it is never simulated when email is unavailable.
`/api/forms/status` exposes only whether email is configured. Without configuration,
the form offers a clearly labelled email draft which the visitor must send from
their own email application. A newsletter request is a request to the foundation,
not an automatic subscription to an external mailing platform.

## Sanity

The Studio is built separately into ignored `public/studio/` assets so it is not
included in the Worker JavaScript bundle. Production URL: `/studio`.
`npm run studio:dev` starts the separate local editor.

Set the project/dataset in the build environment. Add the site and Studio origins
to Sanity CORS when editing. Keep read/write tokens and the revalidation secret
private. A webhook can call `/api/revalidate` with the configured secret.

The existing [administrator guide](docs/admin-guide.md) explains the editorial
sections. Publish only confirmed social profiles in Site Settings.

## Photography And Privacy

Eight locally hosted, compressed WebP photographs illustrate the foundation's
themes. Credits and source links are available at `/fotografie` and in
[the image register](docs/preview-images.md). They are not photographs of Lumina
participants. No unlicensed Shutterstock previews or watermarked assets are used.

Fonts are self-hosted through `next/font`: Barlow Condensed and Source Sans 3.
Analytics remain off while `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
are empty. Enabling either requires a rebuild and visitor consent.
