import { Bell, Download, Languages, Moon, Search, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { sidebarSections } from '../data/admin';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-brand-ink">
      <div className="grid lg:grid-cols-[292px_1fr]">
        <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r border-slate-200 bg-white p-5 lg:block">
          <div className="mb-7 flex justify-center">
            <img src="/logo.png" alt="Coder Line Technology" className="h-14 w-auto" />
          </div>
          <nav className="grid gap-6">
            {sidebarSections.map((section) => (
              <div key={section.title}>
                <p className="mb-2 px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{section.title}</p>
                <div className="grid gap-1">
                  {section.items.map(({ label, href, icon: Icon }) => (
                    <NavLink key={href} to={href} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${isActive ? 'bg-brand-blue text-white shadow-glow' : 'text-slate-600 hover:bg-slate-100 hover:text-brand-ink'}`}>
                      <Icon size={18} /> {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>
        <div>
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 px-5 py-4 backdrop-blur-xl sm:px-8">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center justify-between gap-4">
                <img src="/logo.png" alt="Coder Line Technology" className="h-10 lg:hidden" />
                <div className="relative max-w-xl flex-1 xl:w-[420px]">
                  <Search className="absolute left-4 top-3 text-slate-400" size={19} />
                  <input className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none ring-brand-blue focus:ring-4" placeholder="Search leads, content, contacts..." />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600" title="Dark Mode"><Moon size={18} /></button>
                <button className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600" title="Multi-language Ready"><Languages size={18} /></button>
                <button className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600" title="Notifications"><Bell size={18} /></button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700"><Download size={18} /> Export</button>
                <div className="flex items-center gap-3 rounded-lg bg-brand-ink px-3 py-2 text-white">
                  <ShieldCheck size={18} />
                  <div className="text-xs"><p className="font-bold">Super Admin</p><p className="text-slate-300">Last login today</p></div>
                </div>
              </div>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
