import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { arrow } from "./SiteFooter";

// The dealt split hero, shared by inner pages: words on span-5, the real thing on span-6 start-7.
export function InnerHero({
  kicker,
  title,
  lead,
  visual,
  primary = { href: "/contact", label: site.mainAction },
  secondary,
}: {
  kicker?: string;
  title: string;
  lead: string;
  visual: ReactNode;
  primary?: { href: string; label: string } | null;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="hero hero--split" data-enter aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="hero__text span-5">
          {kicker && <p className="hero__kicker"><span className="dot" aria-hidden="true" />{kicker}</p>}
          <h1 id="hero-h">{title}</h1>
          <p className="hero__lead">{lead}</p>
          {(primary || secondary) && (
            <div className="btn-row">
              {primary && <a className="btn btn--primary" href={primary.href}>{primary.label}{arrow}</a>}
              {secondary && <a className="btn btn--secondary" href={secondary.href}>{secondary.label}</a>}
            </div>
          )}
        </div>
        <div className="hero__media span-6 start-7">{visual}</div>
      </div></div>
    </section>
  );
}
