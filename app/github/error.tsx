"use client";

type GithubErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GithubError({ error, reset }: GithubErrorProps) {
  return (
    <main className="state-shell" data-state="error_state">
      <section className="state-panel shell-stack" data-state="error_state">
        <span className="eyebrow">GitHub error</span>
        <h1 className="state-title">Repository activity could not be refreshed.</h1>
        <p className="muted-copy">
          Recovery actions stay visible so the team can retry quickly without losing context.
        </p>
        <div className="callout-card tone-error">
          <span className="status-pill error">error_state</span>
          <p className="helper-text">{error.message}</p>
        </div>
        <div className="state-grid">
          <article className="review-card tone-loading" data-state="loading_state">
            <span className="status-pill loading">loading_state</span>
            <p className="helper-text">Background refresh feedback remains structured during recovery.</p>
          </article>
          <article className="review-card tone-empty" data-state="empty_state">
            <span className="status-pill empty">empty_state</span>
            <p className="helper-text">Quiet repository queues still keep clear guidance and hierarchy.</p>
          </article>
          <article className="review-card tone-success" data-state="success_state">
            <span className="status-pill success">success_state</span>
            <p className="helper-text">Healthy reloads return to the shared GitHub route presentation.</p>
          </article>
        </div>
        <div className="state-actions">
          <button type="button" onClick={reset}>Retry sync</button>
          <span className="status-pill empty">Recovery ready</span>
        </div>
      </section>
    </main>
  );
}
