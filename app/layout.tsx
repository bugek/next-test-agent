import type { Metadata } from 'next';
import { SmartFarmNav } from '../components/SmartFarmNav';
import './globals.css';
import packageJson from '../package.json';

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
            padding: "1rem 1.5rem 2rem",
            textAlign: "center",
            color: "#6b5a4a",
            fontSize: "0.95rem",
          }}
        >
          App version v{appVersion}
        </footer>
      </body>
    </html>
  );
}
