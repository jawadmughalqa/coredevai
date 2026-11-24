import { report } from "@/lib/site";

const rows = [
  { id: "BUG-024", title: "31 hours assigned to one person in one day", sev: "High" },
  { id: "BUG-042", title: "Payroll changes cannot be saved", sev: "High" },
  { id: "BUG-033", title: "Password of one letter and spaces accepted", sev: "High" },
  { id: "BUG-016", title: "Dashboard counts 2 members, list shows 3", sev: "Medium" },
  { id: "BUG-035", title: "Long email cut off in the invite toast", sev: "Low" },
];

const cls = (s: string) => (s === "High" ? "sev" : s === "Medium" ? "sev sev--med" : "sev sev--low");

// Jawad's real bug report as live text: the summary page of "Team Management Web App".
export function ReportWindow() {
  return (
    <div className="report" data-visual="" role="img" aria-label={`Bug report summary: ${report.total} bugs, ${report.high} of them High`}>
      <div className="report__bar">
        <span className="report__dots" aria-hidden="true"><i /><i /><i /></span>
        Bug report: {report.product}
      </div>
      <div className="report__body">
        <p className="report__kicker">Summary</p>
        <p className="report__title">Numbers that don&rsquo;t add up, not crashes</p>
        <dl className="report__counts">
          <div><dt>Bugs</dt><dd>{report.total}</dd></div>
          <div><dt>High</dt><dd>{report.high}</dd></div>
          <div><dt>Medium</dt><dd>{report.medium}</dd></div>
          <div><dt>Low</dt><dd>{report.low}</dd></div>
        </dl>
        <ul className="report__rows">
          {rows.map((r) => (
            <li key={r.id}><span className="bug-id">{r.id}</span><span>{r.title}</span><span className={cls(r.sev)}>{r.sev}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { cls as sevClass };
