import { erpModules } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

export function ErpModules() {
  return (
    <section className="section">
      <SectionHeader eyebrow="ERP Modules" title="Professional ERP modules with dashboards, controls, and measurable benefits." />
      <div className="grid gap-6 lg:grid-cols-2">
        {erpModules.map(({ title, icon: Icon, features, benefits }) => (
          <div key={title} className="card grid gap-6 md:grid-cols-[1fr_220px]">
            <div>
              <Icon className="mb-4 text-brand-blue" />
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-slate-600">{benefits}</p>
              <div className="mt-4 flex flex-wrap gap-2">{features.map((feature) => <span key={feature} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue">{feature}</span>)}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-500">Dashboard Screenshot Placeholder</p>
              <div className="mt-4 grid h-32 grid-cols-5 items-end gap-2">{[40, 72, 56, 88, 64].map((h, i) => <div key={i} className="rounded-t bg-brand-blue" style={{ height: `${h}%` }} />)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
