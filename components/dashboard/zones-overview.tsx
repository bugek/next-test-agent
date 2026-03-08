export type FarmZone = {
  name: string;
  crop: string;
  temperature: string;
  moisture: string;
  irrigation: string;
  status: string;
};

type ZonesOverviewProps = {
  zones: FarmZone[];
};

export function ZonesOverview({ zones }: ZonesOverviewProps) {
  return (
    <section className="dashboard-panel" aria-labelledby="zones-title">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Farm zones</span>
          <h2 id="zones-title">Greenhouse overview</h2>
        </div>
        <span className="hero-pill accent">{zones.length} zones</span>
      </div>

      <div className="zones-grid">
        {zones.map((zone) => (
          <article key={zone.name} className="zone-card">
            <div className="zone-header">
              <div>
                <h3>{zone.name}</h3>
                <p>{zone.crop}</p>
              </div>
              <span className="status-badge stable">{zone.status}</span>
            </div>
            <dl className="zone-stats">
              <div>
                <dt>Temperature</dt>
                <dd>{zone.temperature}</dd>
              </div>
              <div>
                <dt>Moisture</dt>
                <dd>{zone.moisture}</dd>
              </div>
              <div>
                <dt>Irrigation</dt>
                <dd>{zone.irrigation}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
