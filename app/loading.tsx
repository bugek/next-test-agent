export default function Loading() {
  return (
    <main className="state-shell" data-state="loading_state">
      <section className="state-panel shell-stack" data-state="loading_state">
        <span className="eyebrow">Loading</span>
        <h1 className="state-title">Preparing the latest signals.</h1>
        <p className="muted-copy">
          We are arranging the dashboard, syncing active metrics, and getting the refreshed interface ready.
        </p>
        <div className="callout-card tone-loading" data-state="loading_state">
          <span className="status-pill loading">loading_state</span>
          <p className="helper-text">Calm progress feedback keeps the shell responsive while content catches up.</p>
        </div>
        <div className="state-stack" aria-hidden="true">
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
          <div className="state-bar"><span /></div>
        </div>
        <div className="three-up-grid">
          <div className="info-card">
            <span className="section-kicker">Shell</span>
            <p className="helper-text">Layout surfaces are in place while live content resolves.</p>
          </div>
          <div className="info-card tone-empty" data-state="empty_state">
            <span className="status-pill empty">empty_state</span>
            <p className="helper-text">If no fresh records arrive yet, the shell still keeps the low-data moment readable.</p>
          </div>
          <div className="info-card tone-success" data-state="success_state">
            <span className="status-pill success">success_state</span>
            <p className="helper-text">Completion returns to the same shared hierarchy without abrupt visual changes.</p>
          </div>
        </div>
        <div className="state-actions">
          <span className="status-pill loading">Fetching live data</span>
          <span className="status-pill error">error_state</span>
          <span className="status-pill success">Shell loaded</span>
        </div>
      </section>
    </main>
  );
}
