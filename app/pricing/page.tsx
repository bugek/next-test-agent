const plans = [
  {
    name: 'Starter',
    price: '$29',
    detail: 'For smaller growing operations that need better visibility fast.',
    points: ['Core greenhouse metrics', 'Shared loading and error states', 'Mobile-ready dashboards'],
    tone: 'empty',
  },
  {
    name: 'Growth',
    price: '$99',
    detail: 'For teams scaling production with richer signals and cleaner operations.',
    points: ['Advanced automation insights', 'GitHub and workflow snapshots', 'Priority support'],
    tone: 'success',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: 'For multi-site organizations that need tailored reporting and controls.',
    points: ['Custom integrations', 'Dedicated onboarding', 'Security and governance review'],
    tone: 'loading',
  },
];

export default function PricingPage() {
  return (
    <main className="page-shell shell-stack" data-state="success_state">
      <section className="hero-card">
        <div className="content-stack">
          <span className="eyebrow">Pricing</span>
          <h1 className="display-title">Clear plans for a more polished operations stack.</h1>
          <p className="section-copy">
            Pricing now shares the same calm visual system, with stronger hierarchy, better spacing,
            and responsive cards that remain easy to compare on every screen size.
          </p>
          <div className="state-actions">
            <span className="hero-pill accent">Modern card hierarchy</span>
            <span className="status-pill success">success_state</span>
            <span className="version-tag">App v0.1.0 · Next 16.1.6</span>
          </div>
        </div>
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card tone-${plan.tone}`} data-state={plan.tone === 'success' ? 'success_state' : plan.tone === 'loading' ? 'loading_state' : 'empty_state'}>
            <span className="section-kicker">{plan.name}</span>
            <p className="metric-value">{plan.price}</p>
            <p className="section-copy">{plan.detail}</p>
            <ul className="list-reset bullet-list">
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
