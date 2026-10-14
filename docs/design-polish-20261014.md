# Focused Visual Polish

The approved design remains the baseline: green, coral and white, Barlow Condensed
and Source Sans 3, the compact horizontal wordmark, existing sections and the
Turkish Studio. No new feature, package, animation library or CMS document was added.

The review used Apple Design, Emil Design Engineering, Mobile Native and Web
Performance skills. Relevant reference: [Apple design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles/).
The applied principles are predictable controls, readable hierarchy, appropriate
feedback and platform-specific care, not an imitation of Apple's visual branding.

| Before | After | Why |
| --- | --- | --- |
| Generic illustrative activity photos | Five photographs from Lumina's account, supplemented by four licensed activity photographs | Show real details without fabricating activities |
| Two client-rejected hero portraits | Removed from the website and public assets; gardening and practical volunteering replace them | Lead with open community participation, not posed identity portraits |
| The gardening and outdoor learning heroes were rejected by the client | The client-approved photograph of four women dancing together outdoors, by Elina Fairytale | Represent women's community and shared joy while preserving the approved design and other sections |
| A landscape group photo could lose faces in portrait crops | Separate photo and copy on small screens; photo-specific focal points | Preserve people and legibility |
| The smallest screen could inherit a fixed tablet hero height | Content-driven height and a compact 320px treatment | Keep CTA buttons inside the hero and reveal the next section |
| Mouse hover styling applied to touch devices | Hover styling only for fine pointers; restrained press feedback | Avoid sticky touch states |
| The skip link was behind the sticky header | A visible, high-layer skip link and focusable main landmark | Make keyboard navigation reliable |
| Small consent and contact targets | Larger touch targets, native focus, safe-area padding | Improve phone ergonomics without adding features |
| The old Instagram profile URL | The client-confirmed stichtingluminacollective URL | Send visitors to the correct account |

## Verification

- Browser widths reviewed: 320, 390, 768, 901, 1024 and 1440 pixels.
- No horizontal document overflow on Home at these widths.
- Mobile public pages reviewed: Over ons, Programma's, Agenda, Doe mee,
  Gemeenschap and Contact. Each has one H1; no broken loaded images or missing
  image alt attributes were observed. The offscreen honeypot remains intentionally
  hidden, is excluded from keyboard navigation and does not widen the document.
- Solid button combinations retain contrasting foreground/background colors.
- The mobile menu opens, traps keyboard focus, closes with Escape and returns
  focus to its trigger. The skip link moves focus to main-content.
- Invalid contact submission remains blocked without sending email. Required
  consent is initially unchecked, errors are associated with fields, and focus
  moves to the first invalid input. Text inputs remain 16px on phones.
- Checks should be repeated after publishing different CMS images or copy.

## Deliberate Limits

- The Home, gardening, volunteering and education images are supplementary photography, marked as preview
  and distinguished on the photography page. See preview-images.md.
- Social originals are at most 828px wide. Full-resolution original files would
  improve their sharpness; the Home hero is 1920px wide. No AI enlargement is used.
- Existing Sanity content and privacy visibility/consent rules were not changed.
- Viewport checks do not replace a final check on physical iOS/Android devices.
- No Lighthouse or real-user Core Web Vitals score is claimed by this review.
