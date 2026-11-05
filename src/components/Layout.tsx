import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company } from '../data/content';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['ERP Modules', '/erp-modules'],
  ['Industries', '/industries'],
  ['Portfolio', '/portfolio'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
  ['Admin', '/login']
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Coder Line Technology" className="h-10 w-auto" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="hidden rounded-md bg-brand-blue px-4 py-2 text-sm font-semibold text-white lg:inline-flex">
            Request Demo
          </Link>
          <button className="rounded-md border border-slate-300 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            <div className="grid gap-3">
              {links.map(([label, href]) => (
                <NavLink key={href} to={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-brand-ink text-white">
        <div className="section grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src="/logo.png" alt="Coder Line Technology" className="mb-5 h-12 rounded bg-white p-2" />
            <p className="max-w-xl text-slate-300">Premium ERP software development, custom enterprise systems, and digital transformation services for ambitious companies.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <div className="grid gap-2 text-sm text-slate-300">
              {links.slice(1, 7).map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="grid gap-2 text-sm text-slate-300">
              <span>{company.email}</span>
              <span>{company.website}</span>
              <span>{company.address}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
