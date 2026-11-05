import { services } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

export function Services() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Services" title="Enterprise software services for every stage of digital transformation." text="From planning and design to deployment, integrations, and support, Coder Line Technology delivers business systems that teams can trust." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map(({ title, icon: Icon, text }) => <div key={title} className="card"><Icon className="mb-4 text-brand-blue" /><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-slate-600">{text}</p></div>)}
      </div>
    </section>
  );
}
