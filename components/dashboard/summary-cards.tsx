export type SummaryMetric = {
  label: string;
  value: string;
  trend: string;
  status: 'good' | 'warning' | 'stable';
};

type SummaryCardsProps = {
  metrics: SummaryMetric[];
};

export function SummaryCards({ metrics }: SummaryCardsProps) {
  return (
    <section className="summary-grid" aria-label="Farm summary metrics">
      {metrics.map((metric) => (
        <article key={metric.label} className="summary-card">
          <div className="summary-card-top">
            <span className="summary-label">{metric.label}</span>
            <span className={`status-badge ${metric.status}`}>{metric.status}</span>
          </div>
          <strong className="summary-value">{metric.value}</strong>
          <p className="summary-trend">{metric.trend}</p>
        </article>
      ))}
    </section>
  );
}
