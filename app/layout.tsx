import type { Metadata } from 'next';
import { SmartFarmNav } from '../components/SmartFarmNav';
import './globals.css';

export const metadata: Metadata = {
  title: 'SmartFarm Dashboard',
  description: 'A demo-ready SmartFarm monitoring dashboard built with Next.js.',
};

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
      </body>
    </html>
  );
}
