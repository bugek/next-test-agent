import './globals.css';
import packageJson from '../package.json';

export const metadata = {
  title: 'SmartFarm',
  description: 'A calmer, more modern SmartFarm dashboard experience.',
};

const appVersion = packageJson.version;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell-backdrop">
          <div className="app-frame">{children}</div>
        </div>
      
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
