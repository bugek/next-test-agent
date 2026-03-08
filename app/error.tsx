'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <span className="eyebrow">SmartFarm demo</span>
          <h1>Dashboard temporarily unavailable</h1>
          <p>The SmartFarm preview hit an error while rendering sample monitoring data.</p>
        </div>
        <div className="hero-meta" style={{ width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div className="hero-pill">Error fallback</div>
          <div className="hero-pill accent">Desktop + mobile support</div>
        </div>
      </section>

      <section
        className="state-panel error-state"
        style={{
          display: 'grid',
          gap: '1rem',
          background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.98), rgba(254, 226, 226, 0.92))',
          border: '1px solid rgba(239, 68, 68, 0.2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div className="state-badge">error state</div>
          <div className="hero-pill" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#991b1b' }}>
            Responsive recovery
          </div>
        </div>

        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <h2 style={{ margin: 0 }}>We couldn’t load the dashboard</h2>
          <p style={{ margin: 0 }}>Please try again to re-render the route and restore the demo experience.</p>
          <p style={{ margin: 0 }}>
            This fallback keeps content readable in a single column on phones and within the full dashboard shell on larger screens.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              padding: '0.95rem 1rem',
              borderRadius: '18px',
              background: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid rgba(239, 68, 68, 0.14)',
            }}
          >
            <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Alerts snapshot</strong>
            <span>Warnings remain represented even when the dashboard cannot finish rendering.</span>
          </div>
          <div
            style={{
              padding: '0.95rem 1rem',
              borderRadius: '18px',
              background: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid rgba(239, 68, 68, 0.14)',
            }}
          >
            <strong style={{ display: 'block', marginBottom: '0.35rem' }}>Layout coverage</strong>
            <span>Cards stack on mobile and spread naturally across desktop widths.</span>
          </div>
        </div>

        <button className="retry-button" onClick={reset} type="button">
          Retry dashboard
        </button>
      </section>
    </main>
  );
}
