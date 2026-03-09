"use client";

type PricingErrorProps = {
  error: Error;
  reset: () => void;
};

export default function PricingError({ error, reset }: PricingErrorProps) {
  return (
    <main className="state-shell" data-state="error_state">
      <section className="state-panel shell-stack" data-state="error_state">
        <span className="eyebrow">Pricing error</span>
        <h1 className="state-title">Plan details could not be loaded.</h1>
        <p className="muted-copy">The pricing route keeps recovery clear so teams can retry without losing layout context.</p>
        <div className="callout-card tone-error">
          <span className="status-pill error">error_state</span>
          <p className="helper-text">{error.message}</p>
        </div>
        <div className="state-actions">
          <button type="button" onClick={reset}>Retry pricing</button>
          <span className="status-pill success">success_state</span>
          <span className="status-pill empty">empty_state</span>
        </div>
      </section>
    </main>
  );
}
