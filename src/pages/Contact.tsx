import { Globe2, Mail, MapPin } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { SectionHeader } from '../components/SectionHeader';
import { company } from '../data/content';

export function Contact() {
  return (
    <section className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionHeader eyebrow="Contact" title="Talk to Coder Line Technology about your ERP or software project." text="Share your goals, workflows, and current challenges. The team will help shape the next practical step." />
        <div className="grid gap-4">
          <div className="card flex gap-4"><MapPin className="shrink-0 text-brand-blue" /><span>{company.address}</span></div>
          <div className="card flex gap-4"><Mail className="shrink-0 text-brand-blue" /><span>{company.email}</span></div>
          <div className="card flex gap-4"><Globe2 className="shrink-0 text-brand-blue" /><span>{company.website}</span></div>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
          <iframe title="Google Map" className="h-72 w-full" loading="lazy" src="https://www.google.com/maps?q=Sayeed%20Nagar%20Vatara%20Dhaka%201212%20Bangladesh&output=embed" />
        </div>
        <div className="mt-5 flex gap-3">
          {['in', 'f', 'x'].map((item) => <span key={item} className="grid h-10 w-10 place-items-center rounded-md bg-brand-ink text-sm font-bold text-white">{item}</span>)}
        </div>
      </div>
      <LeadForm />
    </section>
  );
}
