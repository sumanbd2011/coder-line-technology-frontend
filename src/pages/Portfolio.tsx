import { portfolio } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

export function Portfolio() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Portfolio" title="ERP projects, software projects, case studies, and client success stories." />
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((item) => (
          <article key={item.title} className="card">
            <div className="mb-5 h-40 rounded-lg bg-gradient-to-br from-brand-blue/20 via-white to-slate-200" />
            <p className="text-sm font-semibold text-brand-blue">{item.type}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
