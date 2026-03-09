export default function GithubPage() {
  const coverageSummary = ["loading", "empty", "error", "success"].map((kind) => {
    const state = kind;
    if (state === "loading") {
      return 'Repository sync feedback stays visible while checks refresh.';
    }
    if (state === "empty") {
      return 'The route remains useful when review queues are clear.';
    }
    if (state === "error") {
      return 'Recovery guidance is available when repository signals fail.';
    }
    if (state === "success") {
      return 'Healthy delivery states keep the calmer visual system applied.';
    }
    return 'State coverage remains visible.';
  });

  const activity = [
    {
      label: 'Synced repositories',
      value: '24',
      detail: 'Production and preview branches are included in the latest pass.',
    },
    {
      label: 'Healthy checks',
      value: '98.4%',
      detail: 'Recent CI runs are passing with clearer release visibility.',
    },
    {
      label: 'Review latency',
      value: '2.1h',
      detail: 'A calmer hierarchy makes open work easier to triage quickly.',
    },
  ];

  const timeline = [
    {
      title: 'Success state',
      copy: 'Webhook delivery and repository sync completed successfully.',
      badge: 'success_state',
      tone: 'success',
    },
    {
      title: 'Empty state',
      copy: 'No pending pull requests are waiting for review right now.',
      badge: 'empty_state',
      tone: 'empty',
    },
    {
      title: 'Loading state',
      copy: 'Background checks continue to refresh branch protections and status checks.',
      badge: 'loading_state',
      tone: 'loading',
    },
    {
      title: 'Error state',
      copy: 'Recovery actions stay visible if repository signals fail to refresh.',
      badge: 'error_state',
      tone: 'error',
    },
  ];

  const emptyHighlights = [
    'No reviews are blocked',
    'Queues are currently clear',
    'Notifications stay low-noise',
  ];

  return (
    <main className="page-shell shell-stack" data-state="success_state">
      <section className="hero-card two-column-grid">
        <div className="content-stack">
          <span className="eyebrow">GitHub operations</span>
          <h1 className="display-title">Repository activity with calmer signal design.</h1>
          <p className="section-copy">
            The GitHub route now follows the same cool-toned visual system with stronger spacing,
            cleaner card hierarchy, and clearer state communication for healthy, empty, in-flight,
            and recovery moments.
          </p>
          <div className="state-actions">
            <span className="hero-pill accent">Connected delivery view</span>
            <span className="hero-pill">Designed for quick scanning</span>
            <span className="status-pill success">success_state</span>
          </div>
        </div>
        <div className="success-panel tone-success" data-state="success_state">
          <span className="section-kicker">Success snapshot</span>
          <p className="metric-value">Stable sync</p>
          <p className="helper-text">
            Shared tokens keep route-level surfaces consistent with the home and pricing experiences.
          </p>
          <div className="state-actions">
            <span className="status-pill success">24 repositories updated</span>
            <span className="status-pill info">Checks healthy</span>
          </div>
        </div>
      </section>

      <section className="content-grid three-up-grid">
        {activity.map((item) => (
          <article key={item.label} className="info-card" data-state="success_state">
            <span className="section-kicker">{item.label}</span>
            <p className="metric-value">{item.value}</p>
            <p className="helper-text">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="state-grid">
        <article className="empty-panel tone-empty" data-state="empty_state">
          <div className="content-stack">
            <span className="eyebrow">Empty queue</span>
            <h2 className="section-title">Nothing needs review right now.</h2>
            <p className="section-copy">
              Empty moments are treated as positive status, not missing UI. The page keeps hierarchy,
              reassurance, and a clear summary when no work is waiting.
            </p>
          </div>
          <ul className="list-reset bullet-list">
            {emptyHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {timeline.map((item) => (
          <article key={item.badge} className={`callout-card tone-${item.tone}`} data-state={item.badge}>
            <span className={`status-pill ${item.tone}`}>{item.badge}</span>
            <h2 className="section-title">{item.title}</h2>
            <p className="section-copy">{item.copy}</p>
            <p className="helper-text">{coverageSummary.shift()}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
