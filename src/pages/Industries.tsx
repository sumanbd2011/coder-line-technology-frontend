import { industries } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

export function Industries() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Industries" title="ERP solutions for demanding operational environments." text="Each industry has its own controls, reporting needs, and approval flows. The platform is tailored around those realities." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ title, icon: Icon, text }) => <div key={title} className="card"><Icon className="mb-4 text-brand-blue" /><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-slate-600">{text}</p></div>)}
      </div>
    </section>
  );
}
