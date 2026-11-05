import { milestones, values } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

export function About() {
  return (
    <>
      <section className="mesh">
        <div className="section">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-6xl">A software partner for businesses that need clarity, control, and scale.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Coder Line Technology builds ERP and enterprise software for companies that want better processes, better data, and stronger decision-making.</p>
        </div>
      </section>
      <section className="section grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Company Story" title="From practical software delivery to full ERP transformation." text="We focus on solving real operational problems first, then shape technology around the business model, users, data, and reporting needs." />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card"><h3 className="text-xl font-semibold">Mission</h3><p className="mt-3 text-slate-600">Help organizations digitize critical workflows through reliable, secure, and scalable software.</p></div>
            <div className="card"><h3 className="text-xl font-semibold">Vision</h3><p className="mt-3 text-slate-600">Become a trusted ERP technology partner for Bangladesh and international enterprise clients.</p></div>
          </div>
        </div>
        <div className="rounded-lg bg-brand-ink p-6 text-white">
          <h3 className="text-2xl font-semibold">Company Milestones</h3>
          <div className="mt-6 grid gap-4">
            {milestones.map((item, index) => <div key={item} className="rounded-lg bg-white/10 p-4"><span className="text-brand-blue">0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="section">
          <SectionHeader eyebrow="Core Values" title="The standards behind every delivery." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => <div key={value.title} className="card"><h3 className="text-lg font-semibold">{value.title}</h3><p className="mt-3 text-sm text-slate-600">{value.text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Team Members" title="A delivery team shaped around product thinking and enterprise engineering." />
        <div className="grid gap-5 md:grid-cols-3">
          {['ERP Consultant', 'Full-Stack Engineer', 'Support Specialist'].map((role) => <div key={role} className="card"><div className="mb-4 h-28 rounded-lg bg-gradient-to-br from-brand-blue/20 to-slate-100" /><h3 className="font-semibold">{role}</h3><p className="mt-2 text-sm text-slate-600">Focused on implementation, adoption, and measurable business value.</p></div>)}
        </div>
      </section>
    </>
  );
}
