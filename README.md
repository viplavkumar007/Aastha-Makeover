# Aastha Makeover & Training Center — Website

A premium, single-page React website for **Aastha Makeover & Training Center**, Lucknow.
Built with React + Vite + Tailwind CSS + Framer Motion. Light, luxury rose-gold theme
derived from the studio logo. All leads route to WhatsApp.

---

## Tech stack

- **React 18** (JavaScript only — no TypeScript)
- **Vite** build tooling
- **Tailwind CSS** (only styling method)
- **Framer Motion** (animations)
- **lucide-react** (icons)

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Build for production:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

> Requires Node.js 18+.

---

## Editing content (important)

**All text, services, offers, prices, testimonials, FAQs and contact details live in
one file:**

```
src/data/siteContent.js
```

You should not need to touch component code for routine updates. Common edits:

| Want to change…            | Edit in `siteContent.js`                          |
| -------------------------- | ------------------------------------------------- |
| Phone / WhatsApp number    | `contact.phonePrimary`, `contact.whatsappNumber`  |
| Add email lead copy        | `contact.email` (leave `''` for WhatsApp-only)    |
| Instagram / Facebook       | `contact.socials`                                 |
| Opening hours              | `hours`                                           |
| Services & sub-items       | `services`                                        |
| Offer prices               | `offers`                                          |
| Testimonials / FAQs        | `testimonials`, `faqs`                            |
| Gallery photos             | `gallery` (set `src` to a path in `/public`)      |

### Lead routing

Every CTA, service card, offer card and the contact form opens WhatsApp on
`contact.whatsappNumber` with a pre-typed message. The number must include the
country code with no `+` or spaces, e.g. `918953006278`.

If you set `contact.email`, the contact form will **also** open a pre-filled email
draft alongside WhatsApp.

### Logo & images

- The logo lives at `public/logo.jpg` (used in navbar, footer, hero, favicon).
- Gallery tiles render as styled rose-gold panels until you add photos. To use real
  images, drop them in `public/` (e.g. `public/gallery/bridal.jpg`) and set the matching
  `src` in `gallery`.

---

## Project structure

```
src/
├── data/siteContent.js      Single source of truth for all content
├── lib/whatsapp.js          WhatsApp / call / maps / mailto link builders
├── hooks/                   useScrollSpy, useScrolled, usePrefersReducedMotion
├── components/
│   ├── ui/                  Button, Reveal, SectionHeading, Toast, Icon
│   ├── layout/              Navbar, Footer
│   ├── decor/               GoldParticles, Ornaments
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── FAQAccordion.jsx
│   ├── ContactForm.jsx
│   ├── CTA.jsx
│   └── FloatingActions.jsx
└── sections/                About, Services, Offers, Gallery, Testimonials, FAQ, Contact
```

---

## Deploy

### Vercel
1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist`). `vercel.json` is included.
4. Deploy.

### Netlify
1. Push this repo to GitHub.
2. In Netlify, **Add new site → Import an existing project**.
3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. Deploy.

---

## Accessibility & performance

- Semantic HTML, keyboard navigation, visible focus rings.
- `prefers-reduced-motion` respected throughout (animations disable gracefully).
- Images lazy-loaded; ARIA-live toast notifications; accessible accordion and carousel.

---

© Aastha Makeover & Training Center. Site template by your developer.
```
