export default function PricingLoading() {
  return (
    <main className="state-shell" data-state="loading_state">
      <section className="state-panel" data-state="loading_state">
        <span className="eyebrow">Pricing loading</span>
        <h1 className="state-title">Preparing plan comparisons.</h1>
        <p className="muted-copy">
          Shared pricing surfaces are loading so tiers remain easy to compare once content is ready.
        </p>
        <div className="callout-card tone-loading" data-state="loading_state">
          <span className="status-pill loading">loading_state</span>
          <p className="helper-text">The pricing route keeps a polished loading treatment on desktop and mobile.</p>
        </div>
        <div className="state-stack" aria-hidden="true">
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
        </div>
      </section>
    </main>
  );
}
