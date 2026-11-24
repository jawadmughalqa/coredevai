# CoreDevAI website: audit, positioning, blog platform and build plan

Prepared 25 Nov 2026. Nothing in the codebase has been changed yet. This document is the proposal to approve first.

---

## 1. What the site is today

### Stack and hosting

| Item | Finding |
|---|---|
| Framework | Next.js 16.2 (App Router), React 19, Tailwind v4, shadcn-style UI, framer-motion |
| Hosting | Hostinger (`platform: hostinger` header), running as a Node app: `/api/contact` answers, so the server routes work |
| Contact form | Server route + nodemailer over Hostinger SMTP |
| Blog | Already exists: 6 posts hard-coded in `src/lib/blog-posts.ts`, rendered by `src/app/blog/[slug]/page.tsx` |
| Deploys | **Live site is behind `main`.** Live still shows the old placeholder projects (Real Estate, Restaurant...). The real client projects added on 16 to 17 June 2026 are not live. Auto-deploy from GitHub is probably not connected. |

### Why it reads as "AI slop"

The look and the words are the default template of 2024 AI site builders:

- **Hero:** centered "We Build Digital Products That Drive Results", gradient text, hand-drawn underline, grid pattern, two blurred glow blobs, scroll-mouse icon, a row of tech badges. Says nothing a stranger could not say about any of 10,000 agencies.
- **Six identical cards** with rainbow icon tiles (blue, green, purple, orange, pink, teal). Six different accent colours means no brand colour at all.
- **Generic copy:** "Services Built for Modern Businesses", "Projects We're Proud Of", "Ready to Build Something Amazing?", "game-changer", "strategic partners".
- **Every section the same:** badge, two-tone heading, grey sentence, 3-column grid of cards. No rhythm, no real picture anywhere on the home page.
- **Inter loaded from Google Fonts** by `<link>` (layout shift, no `next/font`).

### Trust problems (must fix before anything else)

These are on the live site today and conflict with your own rules ("never fake clients, fake case studies, invented statistics"):

| Where | What | Action |
|---|---|---|
| `TestimonialsSection.tsx` | 6 invented testimonials (Sarah Mitchell, Ahmed Raza, Emily Clarke, Carlos Mendez, Nadia Hassan, James Okafor) with 5 stars | Delete |
| `StatsSection.tsx` | 50+ projects, 30+ clients, 98% satisfaction, 3+ years | Delete (or replace only with numbers you can prove) |
| `HeroSection.tsx` | "Trusted by 30+ clients worldwide" + 5 stars + fake avatars | Delete |
| `about/page.tsx` | Team: Sara K. (UI/UX), Bilal R. (Backend) | Delete unless they are real people who agreed to be listed |
| `blog-posts.ts` | 6 generic Next.js / React Native / FastAPI posts, off-topic for QA, dated 2025 | Remove and 301 to `/blog` (they would dilute QA topical authority) |
| `layout.tsx` | Title "Modern Software House", keywords "web development, mobile apps" | Rewrite |

A buyer who spots one fake testimonial stops trusting the rest. Google's quality raters look for the same thing (E-E-A-T: real author, real experience).

### SEO technical gaps

- No structured data (no `Organization`, `ProfessionalService`, `Person`, `Article`, `BreadcrumbList`). The reference site has 9 JSON-LD blocks on its home page.
- No `og:image`, so shared links show no picture.
- `sitemap.ts` stamps every URL with the build time as `lastModified`, which tells Google every page changed on every deploy. Blog posts need their real dates.
- `public/sitemap.xml` and `public/robots.txt` duplicate `app/sitemap.ts` and `app/robots.ts`. Keep one of each.
- No author page, no categories, no internal linking between posts, no RSS.
- The deploy gap means fixes made in the repo do not reach Google.

---

## 2. What to take from aaghaz.ai (and what not to)

What it does well:

- **One accent colour** (lime) on near-black. Every button, highlight and badge is the same colour, so the brand is unmistakable.
- **One custom display face** (Thicccboi) instead of Inter.
- **Real pictures of real things:** the founder on camera, 3D renders of their own ebooks.
- **SEO machine:** blog with categories (`/blog?category=...`), plus service-by-city landing pages (`/uae/dubai/zapier-automation-course`). Built on Next.js, the same as you.

What not to copy:

- Its code, words, pictures or its lime-on-black look (that is its signature).
- The pushy "Only 10 seats left!" popup that blocks the page on arrival.
- Its wall of influencer testimonials (you do not have those yet, and that is fine).
- City pages without substance. Pages like "Playwright testing in Dubai" that only swap the city name are thin "doorway pages" and can hurt rankings. Only do location pages when each has real, different content.

---

## 3. The skill: design-taste-frontend (tasteskill 2.5.1)

### What it is

An "anti-slop" build system with its own CSS/JS kit, copy rules, layout rules, and scripts that check the page in a real headless Chrome. It refuses to call a page finished until its gate passes (`GATE: PASS`).

### How it applies to CoreDevAI

| Skill rule | What it means for this site |
|---|---|
| **The kind of business decides everything.** An agency is kind **service** | Light flat grounds, real photographs, real tool icons, at most one still diagram. **No shader effects, no gradients, no dark hero.** Your navy goes in one dark brand band plus the footer/nav. |
| Service page plan | nav, hero, services list, work, steps, people, proof (only real quotes), FAQ, contact form, footer. Never "product UI the firm does not run", stock handshakes or invented client logos. |
| Client's own colours | `start.mjs brand --bg --ink --accent` replaces the random palette deal, so **your colours are kept**. Accent is darkened until text on it passes 4.5:1 contrast. |
| Copy rules | h1 names the category and the buyer ("QA testing for SaaS launches"), one hard fact on the first screen, buttons are verb + object ("Book a Money Flow Check"), never "Learn more". `copy-lint.mjs` fails slop words and stock lines. |
| Nothing invented | Same as your brand rule: no fake reviews, quotes, customers or figures. |
| One section per screen, equal edges, hero enters once, 1 to 2 "dealt moments", hover micro-motion | Replaces the current fade-in-on-everything and glow blobs. |
| Existing Next.js project | Builds in our own stack: kit copied to `public/assets`, components take the kit's markup and classes. Checks run against the dev server URL, so the `/api/contact` server route can stay (no static export needed). |
| Real icons | Playwright, Postman, GitHub Actions, BrowserStack, etc. as real logos, only for tools you actually use. |
| Photographs | Needs real photos of you working, devices on a desk, a test run on screen. Licensed stand-ins are allowed but listed as such. |

### The strongest visual you have

The skill wants "the real thing on every screen". For a QA business the real thing is **your output**: a real bug report (from Gymanger), a Playwright HTML report, a trace viewer screenshot, a test plan. Those are honest, specific, and no competitor can copy them. They replace the fake dashboards and glow blobs.

---

## 4. Positioning: from software house to QA and AI automation studio

### Facts we can stand on (from your brand rules)

- Developer-turned-QA: built web and mobile apps (MERN, Next.js, React Native), testing full-time since Sep 2026.
- Built and tested 3 SaaS products of your own, including Gymanger.
- 8 real shipped builds (Gymanger, Right Way Garage Doors, MedWing Express, Wonders of Heaven PK, Denka CRM, BA Money Market, SoulMatchh, Ambient Weaving).
- Skills: manual, functional and regression testing; web, Android and iOS; API testing with Postman; test case design; bug reporting; Playwright automation.
- Based in Pakistan, working with international clients.

### Honest "agency" framing

You are one person today, with a day job. An "agency" site with "our team" and stock team photos would break your own integrity rule. Recommended framing:

> **CoreDevAI is a founder-led QA and test-automation studio.** You work directly with Jawad, the engineer who tests your product.

"Founder-led" sells well to startup founders (no hand-offs, no juniors), it is true, and it can grow into a team later without rewriting the site. No "senior", "expert", "years of experience" or "bug-free".

### Positioning line (draft, for you to edit)

> QA testing and Playwright automation for SaaS teams. We find the bugs that cost you signups and payments, before your users do.

Developer background as the differentiator: "Built by a developer who now tests. Bug reports your developers can fix in one read."

### Ideal client

Tier A: SaaS founders launching now or launched in the last 6 months (US, UK, EU, Gulf). Also early-stage CTOs and small dev agencies with no in-house QA.

### Services (proposed; confirm each one is something you will actually deliver)

| # | Service | Page | Notes |
|---|---|---|---|
| 1 | **Money Flow Check** (starter offer) | `/services/saas-launch-testing` | Signup, login, checkout on web + 1 Android + 1 iPhone, severity-sorted bug report in 48 hours. No public price, "message for details". |
| 2 | **Pre-launch QA audit** | same page or own page | Full functional + regression pass before a launch. |
| 3 | **Playwright test automation** | `/services/playwright-automation` | Set up Playwright, write the critical-path suite, run it in GitHub Actions on every PR. |
| 4 | **API testing** | `/services/api-testing` | Postman collections, contract and negative tests. |
| 5 | **AI app testing** | `/services/ai-testing` | Testing chatbots and LLM features: wrong answers, prompt regressions, broken edge cases. Only if you will offer it. |
| 6 | **AI automation** | `/services/ai-automation` | Your brand file does not list this. Needs your answer: what do you actually build (n8n/Make workflows, AI agents, test generation with AI)? Without real examples, leave it out of v1. |

### Site map

```
/                         Home
/services                 Services hub
/services/saas-launch-testing
/services/playwright-automation
/services/api-testing
/services/ai-testing      (if confirmed)
/work                     Gymanger QA case study + "Built by us" (the 8 real builds)
/about                    Jawad: developer-turned-QA story, real photo
/blog                     Articles, with category pages
/blog/category/[slug]
/blog/[slug]
/resources/pre-launch-checklist   Lead magnet (email or direct download)
/contact                  Form + WhatsApp
/privacy, /terms
```

Home page plan (skill's service plan): hero (category + buyer + one hard fact: "Bug report in 48 hours", button "Book a Money Flow Check") → services list → sample bug report (the real artifact, a dealt moment) → how it works in 3 steps → work (Gymanger + builds) → about Jawad (photo, short story) → FAQ → contact → footer.

---

## 5. Blog platform: research and recommendation

### Your situation

- Site already in Next.js, already hosted as a Node app on Hostinger.
- You are technical and comfortable with Git.
- One author (you), low budget.
- Goal: rank on Google for QA, Playwright and AI testing topics. That means the blog must live on **coredevai.com/blog** (same domain, so every article's links build the main site's authority), load fast, and carry proper structured data.

### Comparison

| | **MDX in the repo** (+ optional Keystatic editor) | **Sanity** (headless) | **Ghost** | **WordPress** | **Webflow CMS** |
|---|---|---|---|---|---|
| Cost | $0 | Free tier $0, Growth ~$15/seat/mo | Ghost(Pro) ~$15 to 18/mo Starter, $29 Publisher; self-host free but you run a server | Hosting is cheap on Hostinger; plugins, theme, upkeep time | Premium site plan ~$25/mo (yearly), since May 2026 |
| On coredevai.com/blog | Yes, native | Yes, rendered by Next.js | Usually `blog.coredevai.com` subdomain, or a reverse proxy (fiddly) | Subdomain or reverse proxy | Only if the whole site moves to Webflow |
| SEO control (schema, meta, URLs, internal links) | Full | Full (you build it in Next.js) | Good built-in, but separate from the main site | Good with Yoast/RankMath | Good, but limited schema control |
| Speed | Static HTML, fastest | Fast (static generation from API) | Fast | Depends on theme/plugins | Fast |
| Writing experience | Markdown in VS Code; Keystatic adds a visual editor at `/keystatic` that commits to GitHub | Excellent hosted editor | Best-in-class editor, newsletter built in | Familiar editor | Visual editor |
| Code blocks, Playwright snippets, custom components | Excellent (MDX: real React components inside posts) | Good with custom blocks | Good | OK with plugins | Weak |
| Matches the redesign | Same design system, same components | Same | Second design to maintain | Second design to maintain | Rebuild everything |
| Lock-in | None: plain files in Git | Content in Sanity's cloud (exportable) | Low | Low | High |
| Risk | Writing needs Git (solved by Keystatic) | API dependency, another account | Splits authority if on a subdomain | Security patches, plugin bloat, second stack | Throws away the Next.js site |

### Recommendation: MDX files in the repo, with Keystatic added when you want a visual editor

Why, for you specifically:

1. **$0 and no new service.** It rides on the hosting and the GitHub repo you already have.
2. **Same domain, same design.** Articles live at `coredevai.com/blog/...`, share the new design system, and link straight into service pages. All authority stays on one domain.
3. **Built for technical content.** Your articles will be full of Playwright code, config files, CI YAML and screenshots. MDX handles code highlighting and lets us drop in components (a "Book a Money Flow Check" box, a checklist download, a callout) anywhere in an article.
4. **Full SEO control:** `Article` + `BreadcrumbList` + `Person` JSON-LD, auto OG images per post, real `lastModified` dates, RSS, category hubs, related-post links.
5. **Fastest possible pages:** static HTML at build time.
6. **No lock-in:** posts are Markdown files in Git, readable forever.

When to choose something else:

- **Sanity** if non-technical writers join later and you want scheduling, roles and a hosted editor. Moving from MDX to Sanity later is straightforward.
- **Ghost** only if an email newsletter becomes the main channel.
- **Not WordPress or Webflow:** both mean running a second site or rebuilding the first, for no ranking benefit.

---

## 6. SEO and content strategy

### Be realistic about the starting point

coredevai.com is a new, low-authority domain. Head terms like "QA testing services" or "software testing company" are owned by large firms with years of links. You will not rank for them in year one. You **can** rank for specific, long-tail questions where your hands-on experience shows. Search volumes below are not measured yet: check them in Google Search Console, Ahrefs or Semrush before committing.

### Topic clusters (each: one pillar page + 5 to 10 supporting articles, all linking to each other and to a service page)

| Cluster | Pillar | Example supporting articles | Links to service |
|---|---|---|---|
| SaaS launch QA | Pre-launch QA checklist for SaaS founders | How to test a Stripe checkout before launch; Signup flow bugs that kill conversions; What a good bug report looks like (with a real Gymanger example) | Money Flow Check |
| Playwright automation | Playwright test automation: a practical guide | Fixing flaky Playwright tests; Playwright + GitHub Actions setup; Page Object Model in Playwright; Testing login with stored auth state; Playwright vs Cypress in 2026 | Playwright automation |
| API testing | API testing with Postman: a practical guide | Negative tests most teams skip; Postman collections in CI with Newman; Testing auth and rate limits | API testing |
| AI app testing | How to test an AI chatbot or LLM feature | Prompt regression tests; Checking for wrong or made-up answers; Testing AI features with Playwright | AI testing |
| Mobile web QA | Testing web apps on real phones | Safari-only bugs; Testing on one Android + one iPhone without a device lab | Money Flow Check |

Each article must carry one detail only you know (a real bug you found, a real moment from building Gymanger), per your brand rules. That is also exactly what Google's "experience" signal looks for.

### Publishing rhythm

2 articles a month you can sustain beats 8 in one month then nothing. Start with the 5 pillars, then supporting articles.

### Technical SEO checklist

- Google Search Console + Bing Webmaster Tools verified, sitemap submitted.
- `ProfessionalService` + `Organization` + `Person` (Jawad) JSON-LD site-wide; `Service` on each service page; `Article` + `BreadcrumbList` on posts; `FAQPage` on FAQ blocks.
- Per-page titles and descriptions written for the keyword, canonical URLs, OG images.
- `next/font` self-hosted fonts, optimised images, Core Web Vitals green.
- Author page `/about` linked from every article (E-E-A-T).
- Old off-topic posts 301-redirected.

---

## 7. Implementation plan

| Phase | Work | Output |
|---|---|---|
| **0. Trust and deploy fixes** (small, ship first) | Remove fake testimonials, stats, rating badge, unconfirmed team members, off-topic posts (with redirects). Fix metadata. Connect Hostinger auto-deploy from GitHub so `main` reaches the live site. | An honest live site within a day |
| **1. Copy first** | Fact sheet + voice card, all page copy written in Markdown, linted with the skill's `copy-lint.mjs`, reviewed by you | Approved words for every page |
| **2. Design system** | Arm the skill's gate (`--kind service`), apply brand colours via `start.mjs brand`, deal the hero, type pairing and moments, copy the kit into `public/assets`, map it onto the Next.js components | New look, one system |
| **3. Pages** | Home, services hub + service pages, work, about, contact rebuilt to the service plan | New site in the dev server |
| **4. Blog engine** | MDX pipeline, frontmatter schema, categories, author, JSON-LD, OG images, RSS, real sitemap dates, related posts. First 2 to 3 real articles from you | Blog live on the new design |
| **5. Check and ship** | Skill gate (`GATE: PASS`), perf, layout checks at 1440 / 1024 / 768 / 390 / 320, Search Console submit, deploy | Live |

Each phase is one reviewable pull request.

---

## 8. Decisions needed from you before building

1. **Which colours are "the brand"?** The CoreDevAI logo and current site are electric blue/cyan on deep navy (#040920). Your personal SQA brand file uses lime #82FF1F on #111111, the same family as aaghaz.ai. Recommendation: **CoreDevAI blue on navy**, because the domain, logo and favicon are CoreDevAI.
2. **Team:** Are Sara K. and Bilal R. real people who agreed to be listed? If not, they go, and the site is framed as founder-led.
3. **AI automation:** What do you actually deliver here today? Real examples, or leave it out of v1.
4. **Photos:** Can you supply a real photo of yourself and a few of your setup (laptop + phones, a test run on screen)? Without them the skill uses licensed stand-ins, which is weaker for a founder-led studio.
5. **Proof:** Can we show a real (anonymised) Gymanger bug report and a Playwright report screenshot as the site's main visual?
6. **The 8 built projects:** Keep them as "Built by us" (proves the developer background) next to the QA work? Recommendation: yes.
