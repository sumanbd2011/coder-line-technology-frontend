import { motion } from 'framer-motion';
import { Download, Filter, Plus, ShieldCheck } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AdminLayout } from '../components/AdminLayout';
import { activities, adminRoles, dashboardStats, leadRows, monthlyLeads, securityFeatures } from '../data/admin';

export function AdminDashboard() {
  return (
    <AdminLayout>
      <main className="p-5 sm:p-8">
        <div className="mb-8 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
          <div>
            <p className="eyebrow">Dashboard Home</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Enterprise Admin Dashboard</h1>
            <p className="mt-3 max-w-3xl text-slate-600">Monitor leads, contacts, content performance, visitors, roles, audit activity, and website operations from one SaaS-style control center.</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary"><Filter size={18} /> Filter</button>
            <button className="btn-primary"><Plus size={18} /> New Lead</button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {dashboardStats.map(({ label, value, change, icon: Icon }, index) => (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-lg bg-blue-50 p-2 text-brand-blue"><Icon size={20} /></span>
                <span className="text-xs font-bold text-emerald-600">{change}</span>
              </div>
              <p className="text-2xl font-bold">{value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div><h2 className="text-xl font-bold">Monthly Leads</h2><p className="text-sm text-slate-500">Lead and contact acquisition trend</p></div>
              <button className="rounded-lg border border-slate-200 p-2 text-slate-600"><Download size={18} /></button>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyLeads}>
                  <defs><linearGradient id="leadFill" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0D6EFD" stopOpacity={0.35}/><stop offset="95%" stopColor="#0D6EFD" stopOpacity={0}/></linearGradient></defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" /><YAxis /><Tooltip />
                  <Area type="monotone" dataKey="leads" stroke="#0D6EFD" fill="url(#leadFill)" strokeWidth={3} />
                  <Area type="monotone" dataKey="contacts" stroke="#111827" fill="transparent" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Website Analytics</h2>
            <p className="mb-5 text-sm text-slate-500">Visitors by month</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyLeads}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" /><YAxis /><Tooltip />
                  <Bar dataKey="visitors" fill="#0D6EFD" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Lead Management</h2>
              <div className="flex gap-2"><button className="btn-secondary">Excel</button><button className="btn-secondary">PDF</button></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-500"><tr>{['Company', 'Contact', 'Service', 'Status', 'Value'].map((h) => <th key={h} className="px-4 py-3 font-bold">{h}</th>)}</tr></thead>
                <tbody>
                  {leadRows.map((row) => <tr key={row.company} className="border-t border-slate-100"><td className="px-4 py-4 font-bold">{row.company}</td><td className="px-4 py-4">{row.contact}</td><td className="px-4 py-4">{row.service}</td><td className="px-4 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand-blue">{row.status}</span></td><td className="px-4 py-4 font-bold">{row.value}</td></tr>)}
                </tbody>
              </table>
            </div>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <div className="mt-5 grid gap-4">
              {activities.map((activity) => <div key={activity.text} className="rounded-lg bg-slate-50 p-4"><p className="text-sm font-bold text-brand-blue">{activity.type}</p><p className="mt-1 text-sm text-slate-700">{activity.text}</p><p className="mt-2 text-xs font-semibold text-slate-400">{activity.time}</p></div>)}
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Admin User Roles</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {adminRoles.map((role) => <div key={role.name} className="rounded-lg border border-slate-200 p-4"><p className="font-bold">{role.name}</p><p className="mt-1 text-sm text-slate-500">{role.access}</p></div>)}
            </div>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Security & Enterprise Features</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {securityFeatures.map(({ title, icon: Icon }) => <div key={title} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-sm font-bold"><ShieldCheck className="text-brand-blue" size={18} /><Icon size={18} />{title}</div>)}
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}
