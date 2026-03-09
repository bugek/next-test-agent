export default function PricingLoading() {
  return (
    <main className="state-shell" data-state="loading_state">
      <section className="state-panel shell-stack" data-state="loading_state">
        <span className="eyebrow">Pricing loading</span>
        <h1 className="state-title">Preparing plan details.</h1>
        <p className="muted-copy">Plan comparisons and feature summaries are being arranged into the refreshed shell.</p>
        <div className="callout-card tone-loading">
          <span className="status-pill loading">loading_state</span>
          <p className="helper-text">Pricing stays readable while plan data is still loading.</p>
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
