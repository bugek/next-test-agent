export default function Loading() {
  const state = "loading";
  const message = state === "loading"
    ? 'Calm progress feedback keeps the shell responsive while content catches up.'
    : 'The route is ready.';

  return (
    <main className="state-shell" data-state="loading_state">
      <section className="state-panel" data-state="loading_state">
        <span className="eyebrow">Loading</span>
        <h1 className="state-title">Preparing the latest signals.</h1>
        <p className="muted-copy">
          We are arranging the dashboard, syncing active metrics, and getting the refreshed
          interface ready.
        </p>
        <div className="callout-card tone-loading" data-state="loading_state">
          <span className="status-pill loading">loading_state</span>
          <p className="helper-text">{message}</p>
        </div>
        <div className="state-stack" aria-hidden="true">
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
        </div>
        <div className="state-actions">
          <span className="status-pill loading">Fetching live data</span>
          <span className="status-pill success">Shell loaded</span>
        </div>
      </section>
    </main>
  );
}
