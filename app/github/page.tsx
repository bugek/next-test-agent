function toneClass(tone: string) {
  if (tone === 'loading') return 'tone-loading';
  if (tone === 'empty') return 'tone-empty';
  if (tone === 'error') return 'tone-error';
  return 'tone-success';
}

function pillClass(tone: string) {
  if (tone === 'loading') return 'status-pill loading';
  if (tone === 'empty') return 'status-pill empty';
  if (tone === 'error') return 'status-pill error';
  return 'status-pill success';
}

export default function GithubPage() {
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

  return (
    <main className="page-shell" data-state="success_state">
      <section className="hero-card two-column-grid">
        <div className="content-stack">
          <span className="eyebrow">GitHub operations</span>
          <h1 className="display-title">Repository activity with calmer signal design.</h1>
          <p className="section-copy">
            The GitHub route follows the same cool-toned visual system with stronger spacing,
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

      <section className="card-grid">
        {activity.map((item) => (
          <article key={item.label} className="metric-card">
            <span className="section-kicker">{item.label}</span>
            <p className="metric-value">{item.value}</p>
            <p className="helper-text">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-panel shell-stack">
        <span className="eyebrow">State timeline</span>
        <div className="card-grid">
          {timeline.map((item) => (
            <article key={item.badge} className={`review-card ${toneClass(item.tone)}`} data-state={item.badge}>
              <span className={pillClass(item.tone)}>{item.badge}</span>
              <p className="metric-value">{item.title}</p>
              <p className="helper-text">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel shell-stack" data-state="empty_state">
        <span className="eyebrow">Quiet queue</span>
        <div className="callout-card tone-empty">
          <span className="status-pill empty">empty_state</span>
          <p className="helper-text">
            No pull requests need attention at the moment, so the route surfaces a calm empty state instead of a sparse table.
          </p>
        </div>
      </section>
    </main>
  );
}
