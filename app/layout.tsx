import type { Metadata } from 'next';
import './globals.css';
import pkg from '../package.json';

export const metadata: Metadata = {
  title: 'SmartFarm',
  description: 'A calm, modern product shell for the SmartFarm experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="brand-mark">
              <span className="brand-badge">S</span>
              <div className="brand-copy">
                <span className="brand-title">SmartFarm</span>
                <span className="brand-subtitle">Calm operational clarity</span>
              </div>
            </div>
            <nav className="site-nav" aria-label="Primary">
              <a className="nav-link" href="/">Overview</a>
              <a className="nav-link" href="/github">GitHub</a>
              <a className="nav-link" href="/pricing">Pricing</a>
              <span className="version-pill">v{pkg.version}</span>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <div className="footer-panel">
              <span>Modernized cool-toned theme system with shared state styling.</span>
              <span>Responsive shell · version {pkg.version}</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
