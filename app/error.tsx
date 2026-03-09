"use client";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: RootErrorProps) {
  return (
    <main className="state-shell" data-state="error_state">
      <section className="state-panel shell-stack" data-state="error_state">
        <span className="eyebrow">Global error</span>
        <h1 className="state-title">Something interrupted the refreshed workspace view.</h1>
        <p className="muted-copy">
          The app keeps recovery actions clear so teams can retry quickly without losing the calmer visual context.
        </p>
        <div className="callout-card tone-error">
          <span className="status-pill error">error_state</span>
          <p className="helper-text">{error.message}</p>
        </div>
        <div className="state-grid">
          <article className="review-card tone-loading" data-state="loading_state">
            <span className="status-pill loading">loading_state</span>
            <p className="helper-text">Fallback feedback remains structured while the route attempts to recover.</p>
          </article>
          <article className="review-card tone-empty" data-state="empty_state">
            <span className="status-pill empty">empty_state</span>
            <p className="helper-text">Even low-data moments keep helpful hierarchy and guidance visible.</p>
          </article>
          <article className="review-card tone-success" data-state="success_state">
            <span className="status-pill success">success_state</span>
            <p className="helper-text">Successful reloads return to the same consistent shell and surface system.</p>
          </article>
        </div>
        <div className="state-actions">
          <button type="button" onClick={reset}>Try again</button>
          <span className="status-pill empty">Recovery ready</span>
        </div>
      </section>
    </main>
  );
}
