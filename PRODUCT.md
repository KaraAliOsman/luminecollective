# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary (default chosen on 2026-11-03, the client left the question open): women in the Netherlands of all ages and newcomers who are looking for a place to meet people, learn and take part. They often arrive on a phone, may be reading Dutch as a second language, and may know nobody yet.

Secondary: volunteers offering time or talent; schools, municipalities and partner organisations; donors checking whether the foundation is trustworthy.

Editors: Turkish-speaking administrators without technical knowledge, working in Sanity Studio.

## Product Purpose

The public Dutch website of Stichting Lumina Collective, founded in 2026. It explains who the foundation is, shows programmes and activities, and turns interest into contact: participating, volunteering, partnering or donating. Success is a visitor who understands within seconds that there is a place for her and takes a first step.

## Positioning

A women-led foundation that gathers many small contributions into something shared. The policy plan's own image: all the petals gathered together form a large bouquet of blooming roses, a blooming society. For women, with everyone.

## Operating Context

- Content comes from Sanity first and falls back to the repository data files.
- Published Sanity content takes precedence; editors can change text and images without code.
- Hosted on Cloudflare Workers through OpenNext, on free-tier services only. The client does not want monthly costs beyond the domain.
- Deployment runs from GitHub Actions on pushes to `main`.

## Capabilities and Constraints

- Routes: home, over-ons, programmas (+detail), agenda (+detail), doe-mee, gemeenschap, nieuws (+detail), anbi, contact, fotografie, privacy, cookies, Sanity Studio at `/studio`.
- Forms for contact, volunteering and update requests, with validation, consent, honeypot and an honest email-draft fallback.
- The public site is in Dutch; the admin is in Turkish.
- No invented event dates, annual figures, testimonials, partners or participant counts.
- ANBI status must not be overstated: the site distinguishes the application from a granted designation and promises no tax deductibility.
- The original policy plan PDF stays unchanged.

## Brand Commitments

- Name: Stichting Lumina Collective. Claim: "Samen leven. Samen groeien."
- Logo: rose-gold line drawing of a woman's profile with a leaf and a star. Keep it. Use it as a thin, horizontal lockup; a square logo or a tall navbar was explicitly rejected.
- Button and text contrast must always be strong. Light-on-light buttons were explicitly rejected.
- Warm, feminine, community-minded, serious. Not a political or activist voice, not a generic NGO template.

## Evidence on Hand

- Copy across all routes, `src/data/organization.ts`, `src/data/programs.ts`, `src/lib/constants/brand.ts`.
- Policy plan 2026-2030 at `public/documenten/beleidsplan-lumina-2026-2030.pdf`.
- Lumina's own photographs from Instagram, at most 828px wide: Burendag gifts, cupcakes, Amsterdam outing.
- Client-approved licensed photography, credited at `/fotografie` and in `docs/preview-images.md`. The hero is four women dancing hand in hand outdoors, by Elina Fairytale.
- Absent and not to be fabricated: event dates, annual figures, testimonials, participant numbers, partner logos.

## Product Principles

1. A first step must feel small and safe: nobody needs experience or an introduction.
2. Show ordinary people happy together. Imagery stays natural and community-based, like other foundations: women on the cover, nothing sad, nothing that signals religion or a political or identity position.
3. Honesty builds trust: what is planned is called planned, and what is unknown stays unsaid.
4. Non-technical Turkish-speaking editors must be able to run the site.
5. Nothing is added just because it can be. Every detail has to earn its place.

## Accessibility & Inclusion

Readers may have limited Dutch, so text stays plain and legible. Keep keyboard access, visible focus, skip link, 16px form inputs on phones and reduced-motion support. Phones from 320px wide are a first-class target.
