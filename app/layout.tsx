import type { Metadata } from 'next';
import packageJson from '../package.json';
import { SmartFarmNav } from '../components/SmartFarmNav';
import './globals.css';

export const metadata: Metadata = {
  title: 'SmartFarm Dashboard',
  description: 'A demo-ready SmartFarm monitoring dashboard built with Next.js.',
};

const appVersion = packageJson.version;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmartFarmNav />
        {children}
        <footer
          style={{
            padding: '1rem 1.5rem 2rem',
            textAlign: 'center',
            color: '#6b5a4a',
            fontSize: '0.95rem',
          }}
        >
          SmartFarm Dashboard v{appVersion}
        </footer>
      </body>
    </html>
  );
}
