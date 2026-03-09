"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function PricingError({ error, reset }: ErrorProps) {
  return (
    <main className="state-shell" data-state="error_state">
      <section className="state-panel glass-card">
        <span className="eyebrow">Pricing error</span>
        <h1 className="state-title">Pricing details could not be loaded.</h1>
        <p className="muted-copy">
          Even route-level failures keep the refreshed spacing, hierarchy, and recovery actions intact.
        </p>
        <div className="callout-card tone-error" data-state="error_state">
          <span className="status-pill error">error_state</span>
          <p className="helper-text">{error.message}</p>
        </div>
        <div className="state-actions">
          <button type="button" onClick={reset}>
            Reload pricing
          </button>
          <span className="status-pill empty">Assistance available</span>
        </div>
      </section>
    </main>
  );
}
