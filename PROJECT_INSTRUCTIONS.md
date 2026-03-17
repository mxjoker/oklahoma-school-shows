# 🎩 School Magic Assembly Website — Master Project Instructions
*Last updated: Session 11 in progress — DNS propagating, Search Console pending.*

---

## Project Overview
A fully featured, production-grade marketing website for a school magic assembly performer
based in Oklahoma City, serving OK, TX, AR, KS, MO, and surrounding states.
Built with Next.js 16 App Router, deployed to Netlify, zero monthly platform costs.

---

## Business & Performer Details
| Field | Value |
|---|---|
| Performer Name | Joe Coover |
| Brand | Funky Monkey Magic |
| Parent Company | Funky Monkey Events |
| Primary Domain | oklahomeschoolshows.com |
| Redirect Domain | funkymonkeymagic.com → 301 to oklahomeschoolshows.com |
| Registrar | GoDaddy (both domains) |
| Phone | (405) 431-6625 |
| Email | booking@funkymonkeyevents.com |
| Based | Oklahoma City, OK |
| Service Area | Oklahoma, Texas, Arkansas, Kansas, Missouri + neighboring states |
| Show Programs | Science Magic, Reading & Literacy, Math Magic, Character Education, Anti-Bullying |
| Target Audience | Elementary school principals, PTA/PTO coordinators, teachers, district staff |
| Tone | Fun, high-energy, trustworthy, professional but approachable |
| GitHub Repo | https://github.com/mxjoker/oklahoma-school-shows |

---

## Tech Stack & Versions
| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js App Router | 16.1.6 |
| React | React | 19.2.3 |
| Styling | Tailwind CSS | **3.4.19** — do NOT upgrade to v4 |
| Animations | Framer Motion | 12.36.0 |
| Forms | React Hook Form | 7.71.2 |
| Email | Resend | 6.9.3 |
| Blog | gray-matter + @next/mdx | 4.0.3 / 16.1.6 |
| Deployment | Netlify + @netlify/plugin-nextjs | 5.15.9 |
| Icons | lucide-react | 0.577.0 |

---

## ⚠️ Critical Technical Rules — Read Before Every Session

1. **Tailwind is v3** — `globals.css` uses `@tailwind base; @tailwind components; @tailwind utilities;`
   Do NOT use v4 syntax (`@import "tailwindcss"` or `@theme {}`).

2. **No `output: "export"`** — `next.config.ts` must remain in SSR mode.
   The `/api/contact` route requires server execution. Netlify handles SSR via `@netlify/plugin-nextjs`.

3. **Framer Motion easing** — always use `"easeOut" as const`, never cubic bezier arrays like `[0.22, 1, 0.36, 1]`.
   Those cause TypeScript errors in Framer Motion v12.

4. **Google Fonts via `<link>` tags** — fonts are loaded in `app/layout.tsx` via HTML link tags,
   NOT via `next/font/google`. The build environment can't reach fonts.googleapis.com.

5. **`netlify.toml` publishes `.next`** (not `out`) and declares `@netlify/plugin-nextjs`.
   Do not change the publish directory.

6. **`postcss.config.js`** uses `tailwindcss: {}` and `autoprefixer: {}`.
   Do NOT use `@tailwindcss/postcss` (that's the v4 plugin).

7. **Blog uses gray-matter**, not Contentlayer. Contentlayer is incompatible with Next.js 16.
   MDX files live in `/content/blog/`. The reader is at `/lib/blog.ts`.

8. **`tailwindcss` is listed under `dependencies`**, not `devDependencies` — required for Netlify builds.

---

## Brand Design System

### Color Palette
```
brand-purple:   #5B2D8E   primary brand color
brand-violet:   #7B3FBE   hover/secondary purple
brand-gold:     #FFD700   CTA buttons, accents
brand-amber:    #FFC200   gold hover state
brand-magenta:  #E0218A   pop color, eyebrow text
brand-orange:   #FF6B35   secondary pop
brand-dark:     #1A0A2E   near-black purple, dark sections
brand-cream:    #FFF9EE   warm off-white section backgrounds
brand-mist:     #F4F0FF   very light purple tint, card backgrounds
```

### Fonts (loaded via Google Fonts link in layout.tsx)
```
Display → Fredoka 400/600/700          CSS var: --font-fredoka   class: font-display
Heading → Nunito 400/600/700/800/900   CSS var: --font-nunito    class: font-heading
Body    → DM Sans 400/500/600          CSS var: --font-dm-sans   class: font-body
```

### Key CSS Utility Classes (globals.css)
```
.text-hero           clamp(2.5rem, 6vw, 5rem), Fredoka, tight leading
.text-display        clamp(2rem, 4vw, 3.5rem), Fredoka
.text-title          clamp(1.5rem, 3vw, 2.25rem), Fredoka
.text-gold-gradient  gold/amber gradient text
.text-brand-gradient purple→magenta gradient text
.bg-hero-gradient    dark purple hero section background
.bg-brand-gradient   purple→violet→magenta gradient
.section-padding     px-4 py-16 sm:px-6 lg:px-8 lg:py-24
.container-wide      max-w-7xl mx-auto
.card-base           white card with shadow + hover lift
.prose-blog          blog post article typography
.animate-delay-*     100ms through 800ms animation delays
```

---

## Complete File Structure

```
oklahoma-school-shows/
│
├── app/
│   ├── layout.tsx                             ✅ Root layout, Google Fonts, global metadata
│   ├── globals.css                            ✅ Tailwind v3, CSS vars, .prose-blog typography
│   ├── page.tsx                               ✅ Homepage (7 sections composed)
│   │
│   ├── about/page.tsx                         ✅ Bio, story, values grid, timeline, stats bar
│   │
│   ├── blog/
│   │   ├── page.tsx                           ✅ Index: featured hero card + category grid
│   │   └── [slug]/page.tsx                    ✅ Post: article + author card + sidebar
│   │
│   ├── book-now/page.tsx                      ✅ Form + sticky sidebar (trust, phone, guarantee)
│   ├── contact/page.tsx                       ✅ Form + contact info + social + quick links
│   ├── faq/page.tsx                           ✅ 20 questions, 4 categories, animated accordion
│   ├── testimonials/page.tsx                  ✅ Archive page + filterable grid
│   │
│   ├── shows/
│   │   ├── page.tsx                           ✅ Shows index with horizontal program cards
│   │   ├── science/page.tsx                   ✅
│   │   ├── reading/page.tsx                   ✅
│   │   ├── math/page.tsx                      ✅
│   │   ├── character-education/page.tsx       ✅
│   │   └── anti-bullying/page.tsx             ✅
│   │
│   ├── service-area/                          ✅ SESSION 9 complete
│   │   ├── page.tsx                           ✅
│   │   ├── oklahoma/page.tsx                  ✅
│   │   ├── texas/page.tsx                     ✅
│   │   ├── arkansas/page.tsx                  ✅
│   │   ├── kansas/page.tsx                    ✅
│   │   └── missouri/page.tsx                  ✅
│   │
│   └── api/
│       └── contact/route.ts                   ✅ Resend: validate + sanitize + 2 emails
│
├── components/
│   ├── ui/
│   │   ├── Accordion.tsx                      ✅ Animated height, numbered, colored open state
│   │   ├── Badge.tsx                          ✅ 8 variants, dot + icon support
│   │   ├── Button.tsx                         ✅ 5 variants (primary/gold/secondary/outline/ghost)
│   │   ├── Card.tsx                           ✅ 5 variants + CardHeader/Title/Content/Footer
│   │   └── SectionWrapper.tsx                 ✅ Section container + SectionHeader helper
│   │
│   ├── layout/
│   │   ├── Footer.tsx                         ✅ 4-col, purple CTA bar, social, state links
│   │   ├── MobileMenu.tsx                     ✅ Right-side drawer, full nav, phone + book CTAs
│   │   └── Navbar.tsx                         ✅ Fixed, scroll-aware, hover dropdowns, gold CTA
│   │
│   └── sections/
│       ├── BookingForm.tsx                    ✅ RHF, grade toggles, server errors, success screen
│       ├── FinalCTA.tsx                       ✅ Dark card, pulsing badge, reason chips
│       ├── GuaranteeSection.tsx               ✅ Spinning seal, 3 scenario cards, animated
│       ├── HeroSection.tsx                    ✅ Sparkle particles, floating emojis, orbs, CTA
│       ├── ShowGrid.tsx                       ✅ 5 program cards + "help me choose" dark card
│       ├── ShowPageTemplate.tsx               ✅ Shared: hero/highlights/learning/steps/FAQ/CTA
│       ├── ServiceAreaTemplate.tsx            ✅
│       ├── TestimonialsGrid.tsx               ✅ Client component, filter by program + state
│       ├── TestimonialsSection.tsx            ✅ Auto-carousel (6s) + mini static grid
│       ├── TrustBar.tsx                       ✅ Counting stats (scroll-triggered) + ticker
│       └── VideoSection.tsx                   ✅ YouTube-ready player + stat cards
│
├── content/
│   └── blog/
│       ├── how-to-plan-a-school-assembly-oklahoma.mdx                  ✅ Principal planning guide
│       ├── why-magic-is-the-best-teaching-tool.mdx                     ✅ Thought leadership / science of magic
│       ├── best-school-assembly-ideas-oklahoma-elementary.mdx          ✅ SEO ranking post
│       ├── how-much-does-a-school-assembly-cost.mdx                    ✅ Buyer intent / pricing
│       ├── anti-bullying-assembly-programs-elementary-schools.mdx      ✅ Anti-bullying program SEO
│       ├── back-to-school-assembly-ideas-elementary.mdx                ✅ Back-to-school planning SEO
│       └── school-assembly-programs-texas-elementary-schools.mdx       ✅ Texas geo-target SEO
│
├── lib/
│   ├── blog.ts                                ✅ MDX reader, frontmatter, reading time, sort/filter
│   ├── resend.ts                              ✅ HTML email templates for notification + auto-reply
│   ├── serviceAreaData.ts                     ✅ All 5 state definitions WITH city lists (data only)
│   ├── showsData.ts                           ✅ All 5 show definitions (edit content here)
│   ├── testimonialsData.ts                    ✅ 15 testimonials with program + state metadata
│   └── utils.ts                               ✅ cn(), formatPhone(), slugify(), truncate()
│
├── public/
│   └── images/                                🔲 Drop real photos here when available
│
├── mdx-components.tsx                         ✅ Required by @next/mdx, maps internal links to Next Link
├── next.config.ts                             ✅ MDX enabled, SSR mode, no output:export
├── tailwind.config.ts                         ✅ Full brand tokens: colors, fonts, shadows, animations
├── postcss.config.js                          ✅ tailwindcss + autoprefixer (v3 format)
├── netlify.toml                               ✅ SSR mode, .next publish, @netlify/plugin-nextjs
├── .env.example                               ✅ All variables documented
├── .gitignore                                 ✅ env.local excluded
└── PROJECT_INSTRUCTIONS.md                    ✅ This file
```

---

## Environment Variables

```bash
# ── Set in Netlify dashboard (Site Settings → Environment Variables) ──
RESEND_API_KEY=re_your_actual_key_here

# ── Update directly in lib/resend.ts ──────────────────────────────────
# Line 11: export const BOOKING_TO_EMAIL = "your-real@email.com"
#          → Change "your@email.com" to your real notification inbox
#
# Line 15-16: export const RESEND_FROM_EMAIL =
#               process.env.RESEND_FROM_EMAIL ?? "Funky Monkey Magic <onboarding@resend.dev>"
#          → Once oklahomeschoolshows.com domain is verified in Resend dashboard,
#            set RESEND_FROM_EMAIL env var to: Funky Monkey Magic <noreply@oklahomeschoolshows.com>
#          → Until then, onboarding@resend.dev works for testing (sends to your own email only)

# ── Optional ────────────────────────────────────────────────────────────
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=your_youtube_video_id_here
NEXT_PUBLIC_SITE_URL=https://oklahomeschoolshows.com
```

---

## Pages Status

| Route | Status | Notes |
|---|---|---|
| `/` | ✅ Built | 7 sections, fully animated |
| `/about` | ✅ Built | ⚠️ Photo placeholder — swap with real image |
| `/blog` | ✅ Built | |
| `/blog/[slug]` | ✅ Built | Auto-generated from .mdx files — 7 posts total |
| `/book-now` | ✅ Built | Needs RESEND_API_KEY in Netlify to send emails |
| `/contact` | ✅ Built | Same form, different layout |
| `/faq` | ✅ Built | 20 questions, 4 categories |
| `/shows` | ✅ Built | |
| `/shows/science` | ✅ Built | |
| `/shows/reading` | ✅ Built | |
| `/shows/math` | ✅ Built | |
| `/shows/character-education` | ✅ Built | |
| `/shows/anti-bullying` | ✅ Built | |
| `/testimonials` | ✅ Built | Filterable by program + state |
| `/service-area` | ✅ Built | |
| `/service-area/oklahoma` | ✅ Built | |
| `/service-area/texas` | ✅ Built | |
| `/service-area/arkansas` | ✅ Built | |
| `/service-area/kansas` | ✅ Built | |
| `/service-area/missouri` | ✅ Built | |
| `/api/contact` | ✅ Built | Server route — requires RESEND_API_KEY |
| `/sitemap.xml` | ✅ Built | Dynamic — includes all routes + blog posts |
| `/robots.txt` | ✅ Built | |
| `/404` (not-found.tsx) | ✅ Built | On-brand with quick links |
| `/opengraph-image` | ✅ Built | Edge-rendered branded OG image |

---

## Content That Needs Real Data (Before Launch)

| Item | Where to update | Notes |
|---|---|---|
| **Performer photo** | `/public/images/joe-coover.jpg` + `/app/about/page.tsx` ~line 105 | Swap the emoji placeholder div with `<img>` tag |
| **YouTube video** | `NEXT_PUBLIC_YOUTUBE_VIDEO_ID` env var | VideoSection auto-switches from placeholder to embed |
| **Notification email** | `/lib/resend.ts` line 11 | Change `"your@email.com"` to real address |
| **Resend from address** | Netlify env var `RESEND_FROM_EMAIL` | After domain is verified in Resend dashboard |
| **Testimonials** | `/lib/testimonialsData.ts` | 15 placeholder quotes — replace with real ones |
| **Show descriptions** | `/lib/showsData.ts` | Verify all descriptions match actual show content |
| **Blog posts** | `/content/blog/*.mdx` | 7 posts exist — add more anytime |

---

## How to Add a Blog Post

Drop a `.mdx` file in `/content/blog/` — that's it. No config changes needed.

```mdx
---
title: "Your Post Title"
description: "One sentence for SEO meta description."
date: "2025-04-15"
author: "Joe Coover"
category: "School Assembly Tips"
tags: ["school assembly", "oklahoma", "your-tag"]
coverEmoji: "🎩"
featured: false
---

Your post content in Markdown here...
```

**Valid categories:** `School Assembly Tips` | `Magic & Learning` | `Behind the Scenes` | `Oklahoma Schools`

Set `featured: true` on one post to display it as the hero card on the blog index.

---

## Session History

### ✅ Session 1 — Planning
Project scoping, competitor research, tech stack decisions, session plan.

### ✅ Session 2 — Scaffold & Design System
Next.js 16 + Tailwind v3 setup. Design tokens, CSS variables, font loading via link tags.
Button, Card, Badge, SectionWrapper UI components. Navbar + Footer + MobileMenu.
Root layout, netlify.toml, .env.example, postcss config.

### ✅ Session 3 — Homepage Part 1
HeroSection (sparkle particles, animated orbs, floating emojis, staggered text reveals).
TrustBar (scroll-triggered counting stats, scrolling feature ticker).
ShowGrid (5 program cards + help card, scroll-reveal animations).

### ✅ Session 4 — Homepage Part 2
TestimonialsSection (6s auto-carousel, prev/next controls, dot indicators, mini static grid).
VideoSection (pulsing play button with ripple rings, stat cards, YouTube-ready).
GuaranteeSection (animated spinning seal, 3 scenario cards).
FinalCTA (dark card, pulsing availability badge, urgency chips).
Final homepage assembled — 7 sections, clean build.

### ✅ Session 5 — Show Pages
ShowPageTemplate shared component (hero, highlights bar, learning outcomes, 4-step how-it-works, testimonials, FAQ, bottom CTA).
lib/showsData.ts with all 5 show definitions.
5 individual show pages + /shows index page.

### ✅ Session 6 — Booking Form & Emails
lib/resend.ts: branded HTML notification email to performer + auto-reply to booker.
app/api/contact/route.ts: server route with validation, sanitization, concurrent email sending.
BookingForm component: React Hook Form, grade level toggles, success screen, error states.
/book-now page: form + sticky sidebar. /contact page: form + contact details.
Switched from static export to SSR mode to support API route.

### ✅ Session 7 — About, Testimonials, FAQ
/about: hero with photo placeholder, stats bar, story prose, values grid, timeline.
lib/testimonialsData.ts: 15 testimonials reusable across site.
TestimonialsGrid: client component filterable by program AND state.
/testimonials: archive page with filterable grid.
Accordion UI component: smooth animated height, numbered items.
/faq: 20 questions across 4 categories (Booking, Pricing, The Show, Guarantees).

### ✅ Session 8 — Blog System
@next/mdx setup (Contentlayer incompatible with Next 16 — using gray-matter instead).
mdx-components.tsx required file. lib/blog.ts: MDX reader + frontmatter + reading time.
3 SEO-targeted seed blog posts. /blog index + /blog/[slug] post pages.
.prose-blog typography styles added to globals.css.

### ✅ Session 9 — Service Area SEO Pages
ServiceAreaTemplate component built. /service-area index page + 5 state pages
(Oklahoma, Texas, Arkansas, Kansas, Missouri) — all statically rendered.
Each page: hero with stats panel, featured cities, show programs grid,
why-choose section, full city list, social proof, CTA.

### ✅ Session 10 — SEO, Performance & Polish
Google Analytics wired in (G-6Y1Y2W28VG). Dynamic sitemap.xml (all routes + blog).
robots.txt. Branded OpenGraph image via Next.js ImageResponse (edge runtime).
Custom 404 not-found.tsx with quick links. Accessibility fixes: MobileMenu Escape
key + aria-modal; NavDropdown keyboard toggle + aria-expanded/haspopup/role=menu.

### 🔲 Session 11 — Domain, DNS & Launch (IN PROGRESS) ← START HERE
- Site deployed at https://oklahoma-school-shows.netlify.app ✅
- RESEND_API_KEY added to Netlify environment variables ✅
- oklahomeschoolshows.com added to Netlify domain management ✅
- GoDaddy nameservers updated to Netlify DNS ✅ (propagation in progress)
- Google Search Console property created ✅
- GSC TXT verification record added to Netlify DNS ✅ (pending propagation)
- Sitemap submitted to Search Console 🔲 (blocked until DNS propagates — submit sitemap.xml once domain is live)
- SSL certificate 🔲 (auto-provisions once DNS propagates)
- Final smoke test 🔲 (run after SSL is live)
- funkymonkeymagic.com — keeping separate, not redirecting (may become separate site for camps/shows)
- Booking notification email set to joe.coover@gmail.com ✅
- 4 additional SEO blog posts added (pricing, anti-bullying, back-to-school, Texas geo) ✅

### 🔲 Session 12 — Optional Enhancements
Availability calendar. Quote calculator. Newsletter signup. Virtual show page.

---

## How to Start Each Session

Paste this at the start:

```
I'm continuing work on my school magic assembly website.
Here are the master project instructions: [attach PROJECT_INSTRUCTIONS.md]

Today is Session [N]: [Title]
Last session completed: [brief summary]
Let's continue.
```

---

## DNS Notes (Session 11)
- Primary: `oklahomeschoolshows.com` → Netlify (A record or CNAME)
- Redirect: `funkymonkeymagic.com` → 301 to `oklahomeschoolshows.com` (set in Netlify domain settings)
- Both domains registered at GoDaddy — update DNS there
- Netlify provides free SSL (Let's Encrypt) automatically once domain is connected
