"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  const state = "error";
  const errorLabel = state === "error" ? 'Recovery path available' : 'Stable shell';

  return (
    <main className="state-shell" data-state="error_state">
      <section className="state-panel" data-state="error_state">
        <span className="eyebrow">Application error</span>
        <h1 className="state-title">Something interrupted the refreshed dashboard.</h1>
        <p className="muted-copy">
          The shell stays readable and recovery actions remain available so the experience still
          feels intentional during failures.
        </p>
        <div className="callout-card tone-error" data-state="error_state">
          <span className="status-pill error">error_state</span>
          <p className="helper-text">{error.message}</p>
        </div>
        <div className="state-actions">
          <button type="button" onClick={reset}>
            Try again
          </button>
          <span className="status-pill empty">{errorLabel}</span>
        </div>
      </section>
    </main>
  );
}
