const plans = [
  {
    name: 'Starter',
    price: '$19',
    detail: 'For smaller teams validating calm operational workflows.',
    badge: 'Good for pilots',
  },
  {
    name: 'Growth',
    price: '$79',
    detail: 'For active product teams that need shared state coverage and deeper visibility.',
    badge: 'Most popular',
  },
  {
    name: 'Scale',
    price: '$199',
    detail: 'For organizations rolling the modernized system across multiple workstreams.',
    badge: 'Enterprise-ready',
  },
];

export default function PricingPage() {
  return (
    <main className="page-shell" data-state="success_state">
      <section className="hero-card two-column-grid">
        <div className="content-stack">
          <span className="eyebrow">Pricing</span>
          <h1 className="display-title">Clear plans in the same modern visual language.</h1>
          <p className="section-copy">
            Pricing adopts the refreshed spacing, surface hierarchy, and typography system so plan decisions feel straightforward on desktop and mobile.
          </p>
          <div className="state-actions">
            <span className="hero-pill accent">Calm comparison</span>
            <span className="hero-pill">Responsive cards</span>
            <span className="status-pill success">success_state</span>
          </div>
        </div>
        <div className="success-panel tone-success" data-state="success_state">
          <span className="section-kicker">Decision support</span>
          <p className="metric-value">3 plans</p>
          <p className="helper-text">Balanced card hierarchy helps teams compare cost, readiness, and rollout fit at a glance.</p>
        </div>
      </section>

      <section className="card-grid">
        {plans.map((plan) => (
          <article key={plan.name} className="metric-card">
            <span className="status-pill info">{plan.badge}</span>
            <p className="metric-value">{plan.name}</p>
            <p className="metric-value">{plan.price}<span className="helper-text"> / month</span></p>
            <p className="helper-text">{plan.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-panel shell-stack" data-state="empty_state">
        <span className="eyebrow">Empty state example</span>
        <div className="callout-card tone-empty">
          <span className="status-pill empty">empty_state</span>
          <p className="helper-text">No custom quote has been requested yet. Guided plan summaries keep the page useful before sales contact begins.</p>
        </div>
      </section>
    </main>
  );
}
