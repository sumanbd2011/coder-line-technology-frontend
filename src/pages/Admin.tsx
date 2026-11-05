import { Activity, Database, LockKeyhole, Users } from 'lucide-react';
import { adminModules, authFeatures, metrics } from '../data/content';

export function Admin() {
  return (
    <section className="min-h-screen bg-slate-100">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="bg-brand-ink p-6 text-white">
          <img src="/logo.png" alt="Coder Line Technology" className="mb-8 h-12 rounded bg-white p-2" />
          <nav className="grid gap-2">
            {adminModules.map((module, index) => <button key={module} className={`rounded-md px-4 py-3 text-left text-sm font-semibold ${index === 0 ? 'bg-brand-blue' : 'bg-white/5 hover:bg-white/10'}`}>{module}</button>)}
          </nav>
        </aside>
        <main className="p-5 sm:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">Admin Panel</p>
              <h1 className="mt-2 text-3xl font-bold">Dashboard Analytics</h1>
            </div>
            <button className="btn-primary">Create Lead</button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => <div key={metric.label} className="card"><p className="text-3xl font-bold text-brand-blue">{metric.value}</p><p className="mt-2 text-sm text-slate-600">{metric.label}</p></div>)}
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="card">
              <div className="mb-5 flex items-center gap-3"><Activity className="text-brand-blue" /><h2 className="text-xl font-semibold">Lead Pipeline</h2></div>
              <div className="grid h-72 grid-cols-7 items-end gap-3">{[34, 52, 46, 70, 63, 88, 76].map((h, i) => <div key={i} className="rounded-t bg-brand-blue" style={{ height: `${h}%` }} />)}</div>
            </div>
            <div className="card">
              <div className="mb-5 flex items-center gap-3"><LockKeyhole className="text-brand-blue" /><h2 className="text-xl font-semibold">Authentication</h2></div>
              <div className="grid gap-3">{authFeatures.map((feature) => <div key={feature} className="rounded-md bg-slate-50 p-3 text-sm font-semibold">{feature}</div>)}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="card"><Users className="mb-4 text-brand-blue" /><h2 className="text-xl font-semibold">User & Role Management</h2><p className="mt-3 text-slate-600">Create admins, assign permissions, and protect content management areas with role-based authorization.</p></div>
            <div className="card"><Database className="mb-4 text-brand-blue" /><h2 className="text-xl font-semibold">Content Operations</h2><p className="mt-3 text-slate-600">Manage blogs, services, ERP modules, testimonials, contact messages, and leads.</p></div>
          </div>
        </main>
      </div>
    </section>
  );
}
