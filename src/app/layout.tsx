import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { KitScripts } from "@/components/KitScripts";

// Design system: tasteskill (design-taste-frontend) kit in /public/assets.
// type: service · deal: hero split, nav-centre, close-type, footer-columns, rhythm surface-pairs,
// buttons tonal, mark: the CoreDevAI logo · palette: the client's own brand (navy ink, electric blue)
// · type: Schibsted Grotesk (Albert Sans failed hero-lines) · moments: word-highlight (the report verdict), picture-develops (about).

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CoreDevAI: QA testing and Playwright automation for SaaS teams",
    template: "%s | CoreDevAI",
  },
  description:
    "Founder-led QA studio. We test signup, login and payments on web, Android and iPhone, write Playwright tests and test AI features, with a bug report in 48 hours.",
  applicationName: site.name,
  authors: [{ name: site.founder, url: `${site.url}/about` }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    images: [{ url: "/share.jpg", width: 1200, height: 630, alt: "CoreDevAI" }],
  },
  twitter: { card: "summary_large_image" },
  other: { "site-kind": "other", "page-type": "service" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f7fb",
};

const enter =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

const palette = `:root {
  --p-bg: #f5f7fb; --p-surface: #e8edf6; --p-ink: #0a1330; --p-muted: #4a5672;
  --p-accent: #1e5eff; --p-accent-ink: #f5f7fb; --p-action: #1e5eff; --p-action-ink: #f5f7fb;
  --p-inv-bg: #0a1330; --p-inv-surface: #17203d; --p-inv-ink: #f5f7fb; --p-inv-muted: #9198a9;
  --p-inv-accent: #f5f7fb; --p-inv-accent-ink: #0a1330; --p-inv-action: #f5f7fb; --p-inv-action-ink: #0a1330;
  --font-display: "Schibsted Grotesk", system-ui, sans-serif;
  --font-text: "Schibsted Grotesk", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.042em;
  --ly-scale: 0.98;
}`;

const org = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#org`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      email: site.email,
      description: site.description,
      founder: { "@id": `${site.url}/#jawad` },
      areaServed: "Worldwide",
      sameAs: [site.linkedin, site.instagram],
      knowsAbout: ["Software testing", "Quality assurance", "Playwright", "API testing", "AI testing", "AI automation"],
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#jawad`,
      name: site.founder,
      jobTitle: "SQA Engineer",
      worksFor: { "@id": `${site.url}/#org` },
      url: `${site.url}/about`,
    },
    { "@type": "WebSite", "@id": `${site.url}/#site`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#org` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-type="service" data-radius="soft" data-buttons="tonal" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <link rel="stylesheet" href="/assets/site.css" />
        <style dangerouslySetInnerHTML={{ __html: palette }} />
        <script dangerouslySetInnerHTML={{ __html: enter }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <JsonLd data={org} />
      </head>
      <body>
        <SiteHeader />
        {children}
        <nav className="actionbar" aria-label="Quick actions">
          <a className="btn btn--primary" href="/contact">{site.mainAction}</a>
        </nav>
        <KitScripts />
      </body>
    </html>
  );
}
