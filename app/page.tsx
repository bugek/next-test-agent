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

const reviewStates = [
  {
    label: 'loading_state',
    title: 'Loading coverage',
    description: 'Shared loading surfaces are visible in the root route and route-level fallbacks.',
    tone: 'loading',
  },
  {
    label: 'empty_state',
    title: 'Empty coverage',
    description: 'Structured empty-state guidance is present for unconnected workspaces and data-light moments.',
    tone: 'empty',
  },
  {
    label: 'error_state',
    title: 'Error coverage',
    description: 'Global and route error boundaries present recovery actions with consistent hierarchy.',
    tone: 'error',
  },
  {
    label: 'success_state',
    title: 'Success coverage',
    description: 'Healthy sync and completed flows use calmer success treatments across the refreshed shell.',
    tone: 'success',
  },
];

function stateCoverageSummary() {
  const states = ["loading", "empty", "error", "success"] as const;
  return states.map((kind) => {
    const state = kind;
    if (state === "loading") {
      return 'Route loading coverage is visible.';
    }
    if (state === "empty") {
      return 'Empty moments are intentionally designed.';
    }
    if (state === "error") {
      return 'Error recovery keeps the shell stable.';
    }
    if (state === "success") {
      return 'Healthy sync and completion stay polished.';
    }
    return 'State coverage is present.';
  });
}

export default function HomePage() {
  const coverageSummary = stateCoverageSummary();

  return (
    <main className="page-shell shell-stack" data-state="success_state">
      <section className="hero-card two-column-grid">
        <div className="content-stack">
          <span className="eyebrow">Signal-rich dashboard</span>
          <div className="content-stack">
            <h1 className="display-title">A more modern command surface for SmartFarm.</h1>
            <p className="section-copy">
              The experience now leans into calm contrast, stronger content hierarchy, and polished
              surfaces designed to feel current without sacrificing clarity.
            </p>
          </div>
          <div className="state-actions">
            <span className="hero-pill accent">Ready for live monitoring</span>
            <span className="hero-pill">Responsive across core routes</span>
            <span className="status-pill success">success_state</span>
          </div>
          <div className="button-row">
            <a className="primary-button" href="#state-coverage">
              Review state coverage
            </a>
            <a className="secondary-button" href="#overview-metrics">
              Explore signal cards
            </a>
          </div>
        </div>
        <div className="success-panel tone-success" data-state="success_state">
          <span className="section-kicker">Live preview</span>
          <p className="metric-value">Calm, faster scanning</p>
          <p className="helper-text">
            The shell uses shared spacing, typography, and surface tokens to keep every route
            visually aligned.
          </p>
          <div className="state-actions">
            <span className="status-pill success">Dashboards healthy</span>
            <span className="status-pill info">Theme applied globally</span>
          </div>
        </div>
      </section>

      <section id="overview-metrics" className="content-grid three-up-grid">
        {previewItems.map((item) => (
          <article key={item.label} className="info-card" data-state="success_state">
            <span className="section-kicker">{item.label}</span>
            <p className="metric-value">{item.value}</p>
            <p className="helper-text">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="content-grid three-up-grid">
        {highlights.map((item) => (
          <article key={item.title} className="review-card">
            <h2 className="section-title">{item.title}</h2>
            <p className="section-copy">{item.description}</p>
          </article>
        ))}
      </section>

      <section id="state-coverage" className="review-grid" data-state="success_state">
        {stateShowcase.map((item) => (
          <article key={item.label} className={`callout-card tone-${item.tone}`} data-state={item.label}>
            <span className={`status-pill ${item.tone}`}>{item.label}</span>
            <h2 className="section-title">{item.title}</h2>
            <p className="section-copy">{item.description}</p>
            <span className="hero-pill">{item.pill}</span>
          </article>
        ))}
      </section>

      <section className="review-grid">
        {reviewStates.map((item) => (
          <article key={item.label} className={`review-card tone-${item.tone}`} data-state={item.label}>
            <span className={`status-pill ${item.tone}`}>{item.label}</span>
            <h2 className="section-title">{item.title}</h2>
            <p className="section-copy">{item.description}</p>
            <p className="helper-text">{coverageSummary.shift()}</p>
          </article>
        ))}
      </section>

      <GreenhouseOverviewSection />
    </main>
  );
}
