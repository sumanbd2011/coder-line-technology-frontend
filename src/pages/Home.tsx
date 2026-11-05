import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { erpModules, industries, metrics, services, testimonials, whyChoose } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

export function Home() {
  return (
    <>
      <section className="mesh overflow-hidden">
        <div className="section grid min-h-[calc(100vh-76px)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="eyebrow">ERP Software Development Company</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-brand-ink sm:text-6xl">
              Transform Your Business with Smart ERP Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Custom ERP, Business Automation, and Enterprise Software Solutions designed to accelerate growth and efficiency.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">Request Demo <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn-secondary">Contact Us <Phone size={18} /></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="glass rounded-lg p-5">
            <div className="rounded-lg bg-brand-ink p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <img src="/logo.png" alt="Coder Line Technology" className="h-10 rounded bg-white p-1" />
                <span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold">Live ERP</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-white p-4 text-brand-ink">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold">Executive Dashboard</p>
                  <p className="text-sm text-brand-blue">Q2 Growth</p>
                </div>
                <div className="grid h-36 grid-cols-8 items-end gap-2">
                  {[42, 58, 44, 72, 65, 84, 76, 92].map((height, index) => (
                    <div key={index} className="rounded-t bg-brand-blue/80" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Company Overview" title="Enterprise software built around measurable business outcomes." text="Coder Line Technology helps organizations replace disconnected manual work with secure, connected, and decision-ready digital systems." />
        <div className="grid gap-5 md:grid-cols-3">
          {['ERP strategy and development', 'Workflow automation', 'Long-term support and improvement'].map((item) => (
            <motion.div {...fade} key={item} className="card">
              <CheckCircle2 className="mb-4 text-brand-blue" />
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-slate-600">Designed for clarity, adoption, and growth across departments.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section">
          <SectionHeader eyebrow="Services" title="From custom ERP to connected digital operations." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ title, icon: Icon, text }) => (
              <motion.div {...fade} key={title} className="card">
                <Icon className="mb-4 text-brand-blue" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="ERP Modules" title="A modular ERP foundation for every core department." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {erpModules.slice(0, 6).map(({ title, icon: Icon, features }) => (
            <motion.div {...fade} key={title} className="card">
              <div className="mb-4 flex items-center justify-between">
                <Icon className="text-brand-blue" />
                <ChevronRight className="text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {features.map((feature) => <span key={feature} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{feature}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-brand-ink text-white">
        <div className="section">
          <SectionHeader eyebrow="Why Choose Us" title="Built for enterprise trust, delivery discipline, and conversion." inverted />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(({ title, icon: Icon, text }) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <Icon className="mb-4 text-brand-blue" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Industries" title="ERP solutions tailored to operational realities." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ title, icon: Icon, text }) => (
            <div key={title} className="card">
              <Icon className="mb-4 text-brand-blue" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section">
          <SectionHeader eyebrow="Testimonials" title="Trusted by teams modernizing business operations." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="card">
                <p className="text-slate-700">"{item.quote}"</p>
                <p className="mt-5 font-semibold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="rounded-lg bg-gradient-to-r from-brand-blue to-brand-ink p-8 text-white lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">Contact CTA</p>
              <h2 className="mt-3 text-3xl font-bold">Ready to plan your ERP or custom software project?</h2>
              <p className="mt-3 text-blue-50">Book a discovery discussion and turn your business workflows into a scalable digital platform.</p>
            </div>
            <Link to="/contact" className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-brand-blue">Request Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
