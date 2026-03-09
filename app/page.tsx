import { GreenhouseOverviewSection } from '../components/greenhouse-overview-section';

const previewItems = [
  { label: 'Primary signal', value: '$128k', detail: 'Net uplift since the last release window.' },
  { label: 'Momentum', value: '+18%', detail: 'Week-on-week momentum across the main surface.' },
  { label: 'Coverage', value: '4 states', detail: 'Loading, empty, error, and success are styled consistently.' },
];

const highlights = [
  {
    title: 'Sharper hierarchy',
    description: 'A cleaner visual rhythm helps teams scan critical signals, summaries, and next actions faster.',
  },
  {
    title: 'Calm responsive surfaces',
    description: 'Cool-toned panels and modern spacing keep dense information readable across desktop and mobile.',
  },
  {
    title: 'Production-ready polish',
    description: 'Consistent tokens, elevated cards, and refined contrast give the app a more intentional product feel.',
  },
];

const stateShowcase = [
  {
    title: 'Loading state',
    description: 'Skeleton-inspired progress treatment keeps the shell feeling active while live signals synchronize.',
    tone: 'loading',
    pill: 'Sync in progress',
    label: 'loading_state',
  },
  {
    title: 'Empty state',
    description: 'Guided empty messaging keeps the experience useful when a workspace has not connected data yet.',
    tone: 'empty',
    pill: 'No recent uploads',
    label: 'empty_state',
  },
  {
    title: 'Error state',
    description: 'Clear recovery messaging and measured contrast keep interruptions understandable without feeling alarming.',
    tone: 'error',
    pill: 'Retry available',
    label: 'error_state',
  },
  {
    title: 'Success state',
    description: 'Positive confirmations use the shared token system so completion feedback feels intentional.',
    tone: 'success',
    pill: 'Deployment completed',
    label: 'success_state',
  },
];

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

export default function HomePage() {
  return (
    <main className="page-shell" data-state="success_state">
      <section className="hero-card two-column-grid">
        <div className="content-stack">
          <span className="eyebrow">Calm product refresh</span>
          <h1 className="display-title">A more modern dashboard language for every state and route.</h1>
          <p className="section-copy">
            SmartFarm now layers cool surfaces, cleaner typography, and deliberate spacing into a distinct,
            production-ready shell that stays readable on large screens and mobile devices.
          </p>
          <div className="state-actions">
            <span className="hero-pill accent">Refreshed visual system</span>
            <span className="hero-pill">Responsive by default</span>
            <span className="status-pill success">success_state</span>
          </div>
        </div>
        <div className="success-panel tone-success" data-state="success_state">
          <span className="section-kicker">Success snapshot</span>
          <p className="metric-value">Theme applied</p>
          <p className="helper-text">
            Shared tokens align the app shell, route cards, and UI feedback moments without changing app behavior.
          </p>
          <div className="state-actions">
            <span className="status-pill success">Visual system active</span>
            <span className="status-pill info">Production-ready polish</span>
          </div>
        </div>
      </section>

      <section className="card-grid">
        {previewItems.map((item) => (
          <article key={item.label} className="metric-card">
            <span className="section-kicker">{item.label}</span>
            <p className="metric-value">{item.value}</p>
            <p className="helper-text">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-panel shell-stack">
        <span className="eyebrow">Why it feels newer</span>
        <div className="card-grid">
          {highlights.map((item) => (
            <article key={item.title} className="info-card">
              <p className="metric-value">{item.title}</p>
              <p className="helper-text">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel shell-stack">
        <span className="eyebrow">Reviewable state coverage</span>
        <div className="card-grid">
          {stateShowcase.map((item) => (
            <article key={item.label} className={`review-card ${toneClass(item.tone)}`} data-state={item.label}>
              <span className={pillClass(item.tone)}>{item.label}</span>
              <p className="metric-value">{item.title}</p>
              <p className="helper-text">{item.description}</p>
              <div className="state-actions">
                <span className={pillClass(item.tone)}>{item.pill}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel shell-stack" data-state="empty_state">
        <span className="eyebrow">Empty state example</span>
        <div className="callout-card tone-empty">
          <span className="status-pill empty">empty_state</span>
          <p className="helper-text">
            No greenhouse alerts are active right now. The low-data experience stays useful with guidance instead of blank space.
          </p>
        </div>
      </section>

      <GreenhouseOverviewSection />
    </main>
  );
}
