export default function GithubLoading() {
  const state = "loading";
  const helper = state === "loading"
    ? 'Route-level loading remains visible and visually consistent.'
    : 'Route is ready.';

  return (
    <main className="state-shell" data-state="loading_state">
      <section className="state-panel" data-state="loading_state">
        <span className="eyebrow">GitHub loading</span>
        <h1 className="state-title">Refreshing repository activity.</h1>
        <p className="muted-copy">
          We are syncing branches, checks, and review queues so the GitHub view stays current.
        </p>
        <div className="callout-card tone-loading" data-state="loading_state">
          <span className="status-pill loading">loading_state</span>
          <p className="helper-text">{helper}</p>
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
