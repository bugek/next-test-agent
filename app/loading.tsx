export default function Loading() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <span className="eyebrow">SmartFarm demo</span>
          <h1>Loading dashboard…</h1>
          <p>Preparing the latest greenhouse snapshot and alert feed.</p>
        </div>
        <div className="hero-meta" style={{ width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div className="hero-pill">Route loading</div>
          <div className="hero-pill accent">Desktop + mobile ready</div>
        </div>
      </section>

      <section className="summary-grid" aria-label="Loading metric cards">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="summary-card loading-block" style={{ minHeight: 132 }} />
        ))}
      </section>

      <section className="dashboard-grid" aria-label="Loading dashboard sections">
        <div className="dashboard-main" style={{ display: 'grid', gap: '1rem' }}>
          <div className="dashboard-panel loading-block" style={{ minHeight: 320, width: '100%' }} />
          <div className="dashboard-panel loading-block" style={{ minHeight: 260, width: '100%' }} />
        </div>
        <div className="dashboard-side" style={{ display: 'grid', gap: '1rem' }}>
          <div className="dashboard-panel loading-block" style={{ minHeight: 320, width: '100%' }} />
        </div>
      </section>

      <section
        className="dashboard-panel"
        aria-label="Responsive loading notes"
        style={{ display: 'grid', gap: '0.75rem' }}
      >
        <div className="state-badge">loading state</div>
        <h2 style={{ margin: 0 }}>Responsive preview in progress</h2>
        <p style={{ margin: 0 }}>
          Cards stack cleanly on narrow screens and expand into a dashboard layout on larger viewports.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
          }}
          aria-hidden="true"
        >
          <div className="loading-block" style={{ minHeight: 88, borderRadius: 18 }} />
          <div className="loading-block" style={{ minHeight: 88, borderRadius: 18 }} />
        </div>
      </section>
    </main>
  );
}
