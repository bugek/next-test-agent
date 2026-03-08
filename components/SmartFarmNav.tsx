'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Overview' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/github', label: 'GitHub' },
];

const styles = {
  header: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 40,
    backdropFilter: 'blur(18px)',
    background: 'rgba(255, 250, 245, 0.88)',
    borderBottom: '1px solid rgba(180, 83, 9, 0.14)',
  },
  shell: {
    width: 'min(1120px, calc(100% - 2rem))',
    margin: '0 auto',
    padding: '1rem 0',
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column' as const,
    textDecoration: 'none',
    color: '#2f241c',
  },
  eyebrow: {
    margin: 0,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.16em',
    fontSize: '0.7rem',
    color: '#b45309',
  },
  title: {
    margin: '0.18rem 0 0',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#2f241c',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  desktopOnly: {
    display: 'none',
  },
  mobileToggle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    minHeight: '44px',
    padding: '0.7rem 1rem',
    borderRadius: '999px',
    border: '1px solid rgba(180, 83, 9, 0.25)',
    background: '#fffaf5',
    color: '#2f241c',
    fontSize: '0.95rem',
    fontWeight: 600,
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
    cursor: 'pointer',
  },
  mobilePanel: {
    marginTop: '0.9rem',
    padding: '0.75rem',
    borderRadius: '24px',
    background: '#fffaf5',
    border: '1px solid rgba(180, 83, 9, 0.14)',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
  },
  mobileList: {
    display: 'grid',
    gap: '0.65rem',
  },
  linkBase: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    borderRadius: '999px',
    padding: '0.72rem 1rem',
    minHeight: '44px',
    fontWeight: 600,
    transition: 'background-color 160ms ease, color 160ms ease, border-color 160ms ease',
  },
  linkIdle: {
    color: '#6b5a4a',
    background: 'transparent',
    border: '1px solid transparent',
  },
  linkActive: {
    color: '#fffaf5',
    background: '#b45309',
    border: '1px solid #b45309',
  },
  mobileLink: {
    width: '100%',
    justifyContent: 'flex-start',
    background: '#f1e4d4',
    color: '#2f241c',
    border: '1px solid rgba(180, 83, 9, 0.08)',
  },
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' as const,
    border: 0,
  },
};

function MenuIcon({ open }: { open: boolean }) {
  const line = {
    display: 'block',
    width: '18px',
    height: '2px',
    borderRadius: '999px',
    background: '#2f241c',
    transition: 'transform 180ms ease, opacity 180ms ease',
  };

  return (
    <span aria-hidden="true" style={{ display: 'grid', gap: '4px' }}>
      <span style={{ ...line, transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
      <span style={{ ...line, opacity: open ? 0 : 1 }} />
      <span style={{ ...line, transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
    </span>
  );
}

export function SmartFarmNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleLabel = open ? 'Close SmartFarm navigation menu' : 'Open SmartFarm navigation menu';

  return (
    <header style={styles.header}>
      <style>{`
        @media (min-width: 768px) {
          [data-smartfarm-desktop='true'] { display: flex !important; }
          [data-smartfarm-mobile-toggle='true'] { display: none !important; }
          [data-smartfarm-mobile-panel='true'] { display: none !important; }
        }
      `}</style>
      <div style={styles.shell}>
        <div style={styles.bar}>
          <Link href="/" style={styles.brand} aria-label="SmartFarm home">
            <span style={styles.eyebrow}>SmartFarm</span>
            <span style={styles.title}>Monitoring Dashboard</span>
          </Link>

          <nav aria-label="Primary" data-smartfarm-desktop="true" style={{ ...styles.desktopNav, ...styles.desktopOnly }}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    ...styles.linkBase,
                    ...(active ? styles.linkActive : styles.linkIdle),
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={toggleLabel}
            data-smartfarm-mobile-toggle="true"
            onClick={() => setOpen((current) => !current)}
            style={styles.mobileToggle}
          >
            <MenuIcon open={open} />
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        {open ? (
          <div id={menuId} data-smartfarm-mobile-panel="true" style={styles.mobilePanel}>
            <nav aria-label="Mobile primary navigation" style={styles.mobileList}>
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    style={{
                      ...styles.linkBase,
                      ...styles.mobileLink,
                      ...(active
                        ? { background: '#b45309', color: '#fffaf5', border: '1px solid #b45309' }
                        : null),
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <span style={styles.srOnly}>Menu opened successfully.</span>
          </div>
        ) : null}
      </div>
    </header>
  );
}
