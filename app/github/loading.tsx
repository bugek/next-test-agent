export default function GithubLoading() {
  return (
    <main className="state-shell" data-state="loading_state">
      <section className="state-panel shell-stack" data-state="loading_state">
        <span className="eyebrow">GitHub loading</span>
        <h1 className="state-title">Refreshing repository signals.</h1>
        <p className="muted-copy">
          Activity summaries, checks, and review queues are syncing into the shared route shell.
        </p>
        <div className="callout-card tone-loading" data-state="loading_state">
          <span className="status-pill loading">loading_state</span>
          <p className="helper-text">Repository health remains understandable while background data is still loading.</p>
        </div>
        <div className="state-stack" aria-hidden="true">
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
        </div>
        <div className="three-up-grid">
          <div className="info-card tone-empty" data-state="empty_state">
            <span className="status-pill empty">empty_state</span>
            <p className="helper-text">If review queues are quiet, the route keeps empty guidance visible.</p>
          </div>
          <div className="info-card tone-error" data-state="error_state">
            <span className="status-pill error">error_state</span>
            <p className="helper-text">Recovery actions stay clear if repository data cannot be refreshed.</p>
          </div>
          <div className="info-card tone-success" data-state="success_state">
            <span className="status-pill success">success_state</span>
            <p className="helper-text">Healthy syncs return to the same calmer GitHub hierarchy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
