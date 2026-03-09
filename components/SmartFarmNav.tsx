import Link from 'next/link';

const links = [
  { href: '/', label: 'Overview' },
  { href: '/github', label: 'GitHub' },
  { href: '/pricing', label: 'Pricing' },
];

export function SmartFarmNav() {
  return (
    <nav className="nav-shell page-shell" aria-label="Primary">
      <div className="state-actions">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hero-pill accent">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
