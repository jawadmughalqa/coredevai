import { projects, report } from "@/lib/site";
import { sevClass } from "./ReportWindow";

// Live re-creations of what each real bug looked like on screen, so every bug card has its picture.
const shots: Record<string, React.ReactNode> = {
  "BUG-024": (
    <div className="mini" role="img" aria-label="Assignments for one member on one day: 16 hours plus 15 hours, saved as 31 hours">
      <div className="mini__row"><span>Project A · Tue</span><b>16h</b></div>
      <div className="mini__row"><span>Project B · Tue</span><b>15h</b></div>
      <div className="mini__row mini__row--bad"><span>Total for the day</span><b>31h</b></div>
      <div className="mini__toast">Assignment saved</div>
    </div>
  ),
  "BUG-014": (
    <div className="mini" role="img" aria-label="A fine of 100000000000000000000000000 displayed as 1e+26">
      <div className="mini__label">Amount entered</div>
      <div className="mini__field">100000000000000000000000000</div>
      <div className="mini__label">Amount shown</div>
      <div className="mini__big mini__bad">1e+26</div>
    </div>
  ),
  "BUG-033": (
    <div className="mini" role="img" aria-label="New password of one letter followed by spaces, accepted">
      <div className="mini__label">New password</div>
      <div className="mini__field">a&#9251;&#9251;&#9251;&#9251;&#9251;&#9251;&#9251;</div>
      <div className="mini__toast mini__toast--ok">Password updated</div>
    </div>
  ),
};

export function BugCards() {
  return (
    <div className="grid">
      {report.bugs.map((b) => (
        <article className="card card--open bug span-4" key={b.id}>
          <div className="bug__head"><span className="bug-id">{b.id} · {b.module}</span><span className={sevClass(b.severity)}>{b.severity}</span></div>
          <h3>{b.title}</h3>
          <p>{b.expected}</p>
          <div className="panel">{shots[b.id]}</div>
        </article>
      ))}
    </div>
  );
}

export function WorkGrid({ meta = "stack" }: { meta?: "stack" | "line" }) {
  return (
    <div className="grid">
      {projects.map((p) => (
        <a className="card card--open work-tile span-3" href={p.url} key={p.slug} rel="noopener">
          <div className="panel"><img className="frame__img" src={`/work/${p.slug}.jpg`} alt={`${p.name} home page`} loading="lazy" width={1440} height={900} /></div>
          <span className="t-card">{p.name}</span>
          <span className="work-tile__meta">{meta === "stack" ? `${p.kind} · ${p.stack}` : p.line}</span>
        </a>
      ))}
    </div>
  );
}
