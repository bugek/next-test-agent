import { AlertsPanel, type AlertItem } from '../components/dashboard/alerts-panel';
import { StateWrapper, type DemoState } from '../components/dashboard/state-wrapper';
import { SummaryCards, type SummaryMetric } from '../components/dashboard/summary-cards';
import { ZonesOverview, type FarmZone } from '../components/dashboard/zones-overview';

const demoState: DemoState = 'success';

const metrics: SummaryMetric[] = [
  {
    label: 'Temperature',
    value: '24.8°C',
    trend: '+1.2°C since dawn',
    status: 'stable',
  },
  {
    label: 'Humidity',
    value: '68%',
    trend: 'Ideal seedling range',
    status: 'good',
  },
  {
    label: 'Soil Moisture',
    value: '41%',
    trend: 'Sector B slightly low',
    status: 'warning',
  },
  {
    label: 'Water Tank',
    value: '72%',
    trend: 'Refill projected in 3 days',
    status: 'good',
  },
  {
    label: 'Device Status',
    value: '18 / 20 online',
    trend: '2 sensors need inspection',
    status: 'warning',
  },
];

const alerts: AlertItem[] = [
  {
    title: 'Soil moisture below target in Zone B',
    detail: 'Moisture dropped to 32% over the last 2 hours.',
    level: 'warning',
    time: '10 min ago',
  },
  {
    title: 'Nutrient pump delayed response',
    detail: 'Pump 02 reported a slow activation cycle during the last run.',
    level: 'warning',
    time: '42 min ago',
  },
  {
    title: 'Greenhouse 3 vent reopened',
    detail: 'Vent system recovered after a brief temperature spike.',
    level: 'info',
    time: '1 hr ago',
  },
];

const zones: FarmZone[] = [
  {
    name: 'Greenhouse A',
    crop: 'Tomatoes',
    temperature: '25°C',
    moisture: 'Healthy',
    irrigation: 'Scheduled 4:00 PM',
    status: 'Optimal',
  },
  {
    name: 'Greenhouse B',
    crop: 'Leafy Greens',
    temperature: '22°C',
    moisture: 'Needs water',
    irrigation: 'Priority queue',
    status: 'Attention',
  },
  {
    name: 'Orchard West',
    crop: 'Citrus',
    temperature: '27°C',
    moisture: 'Balanced',
    irrigation: 'Completed 8:15 AM',
    status: 'Stable',
  },
  {
    name: 'Nursery Bay',
    crop: 'Seedlings',
    temperature: '23°C',
    moisture: 'Protected',
    irrigation: 'Misting active',
    status: 'Optimal',
  },
];

const stateCopy: Record<DemoState, { title: string; message: string }> = {
  loading: {
    title: 'Loading SmartFarm dashboard',
    message: 'Preparing the latest greenhouse snapshot and alert feed.',
  },
  empty: {
    title: 'No SmartFarm data yet',
    message: 'Connect sensors or add sample readings to populate this demo view.',
  },
  error: {
    title: 'Dashboard preview unavailable',
    message: 'We could not load the sample monitoring data. Try refreshing the demo.',
  },
  success: {
    title: 'Farm operations are in view',
    message: 'A live-style snapshot of climate, irrigation, and sensor activity across your farm.',
  },
};

const stateOrder: DemoState[] = ['success', 'loading', 'empty', 'error'];

function DashboardContent({ currentState }: { currentState: DemoState }) {
  const currentAlerts = currentState === 'empty' ? [] : alerts;
  const currentZones = currentState === 'empty' ? [] : zones;

  return (
    <StateWrapper
      state={currentState}
      emptyTitle="No live farm readings"
      emptyMessage="Summary cards stay visible for context, while alerts and zones show how empty dashboard sections are presented."
      errorTitle="Dashboard content unavailable"
      errorMessage="This in-page example demonstrates an inline error state alongside route-level error boundaries."
    >
      <section className="dashboard-grid" aria-label="SmartFarm dashboard overview">
        <div className="dashboard-main">
          <SummaryCards metrics={metrics} />
          {currentZones.length === 0 ? (
            <section className="dashboard-panel">
              <div className="empty-panel">
                <strong>No zones configured</strong>
                <p>Add greenhouses or irrigation zones to populate this overview.</p>
              </div>
            </section>
          ) : (
            <ZonesOverview zones={currentZones} />
          )}
        </div>
        <div className="dashboard-side">
          <AlertsPanel alerts={currentAlerts} />
        </div>
      </section>
    </StateWrapper>
  );
}

export default function Page() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <span className="eyebrow">SmartFarm demo</span>
          <h1>{stateCopy[demoState].title}</h1>
          <p>{stateCopy[demoState].message}</p>
        </div>
        <div className="hero-meta">
          <div className="hero-pill">Primary mode: {demoState}</div>
          <div className="hero-pill accent">Responsive sample dashboard</div>
        </div>
      </section>

      <DashboardContent currentState={demoState} />

      <section className="state-showcase" aria-label="Dashboard UI states showcase">
        {stateOrder.map((state) => {
          const copy = stateCopy[state];

          return (
            <article key={state} className="state-showcase-card">
              <div className="panel-header">
                <div>
                  <span className="eyebrow">State preview</span>
                  <h2>{copy.title}</h2>
                </div>
                <span className="hero-pill">{state}</span>
              </div>
              <p className="state-showcase-copy">{copy.message}</p>
              <DashboardContent currentState={state} />
            </article>
          );
        })}
      </section>
    </main>
  );
}
