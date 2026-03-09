"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GithubError({ error, reset }: ErrorProps) {
  const state = "error";
  const supportLabel = state === "error" ? 'Fallback guidance available' : 'Signals stable';

  return (
    <main className="state-shell" data-state="error_state">
      <section className="state-panel" data-state="error_state">
        <span className="eyebrow">GitHub error</span>
        <h1 className="state-title">Repository activity could not be refreshed.</h1>
        <p className="muted-copy">
          The route preserves hierarchy and recovery actions so GitHub failures stay actionable and
          easy to understand.
        </p>
        <div className="callout-card tone-error" data-state="error_state">
          <span className="status-pill error">error_state</span>
          <p className="helper-text">{error.message}</p>
        </div>
        <div className="state-actions">
          <button type="button" onClick={reset}>
            Retry sync
          </button>
          <span className="status-pill empty">{supportLabel}</span>
        </div>
      </section>
    </main>
  );
}
