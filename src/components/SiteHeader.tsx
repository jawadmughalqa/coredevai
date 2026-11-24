import { nav, services, site } from "@/lib/site";
import { Logo } from "./Logo";

const chev = (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SiteHeader() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <Logo />
        <nav className="nav__links" aria-label="Main">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div className="nav__item" key={item.href}>
                <a className="nav__link" href={item.href}>{item.label} {chev}</a>
                <div className="nav__menu">
                  <div className="wrap grid">
                    <div className="menu-col span-4">
                      <p className="t-label">Testing</p>
                      {services.slice(0, 3).map((s) => (
                        <a key={s.slug} href={`/services/${s.slug}`}>{s.name}<span>{s.value}</span></a>
                      ))}
                    </div>
                    <div className="menu-col span-4">
                      <p className="t-label">AI</p>
                      {services.slice(3).map((s) => (
                        <a key={s.slug} href={`/services/${s.slug}`}>{s.name}<span>{s.value}</span></a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="nav__item" key={item.href}>
                <a className="nav__link" href={item.href}>{item.label}</a>
              </div>
            ),
          )}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href="/contact">{site.mainAction}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  );
}
