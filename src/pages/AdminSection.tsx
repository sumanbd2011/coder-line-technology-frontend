import { Plus } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';
import { leadRows } from '../data/admin';

export function AdminSection({ title }: { title: string }) {
  return (
    <AdminLayout>
      <main className="p-5 sm:p-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div><p className="eyebrow">Admin Module</p><h1 className="mt-2 text-3xl font-bold">{title}</h1></div>
          <button className="btn-primary"><Plus size={18} /> Create</button>
        </div>
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 grid gap-3 md:grid-cols-4">
            <input className="rounded-lg border border-slate-200 px-4 py-3 md:col-span-2" placeholder="Search" />
            <select className="rounded-lg border border-slate-200 px-4 py-3"><option>All Status</option><option>Active</option><option>Draft</option></select>
            <select className="rounded-lg border border-slate-200 px-4 py-3"><option>Sort by newest</option><option>Sort by name</option></select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500"><tr>{['Name', 'Owner', 'Type', 'Status', 'Updated'].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr></thead>
              <tbody>{leadRows.map((row) => <tr key={row.company} className="border-t border-slate-100"><td className="px-4 py-4 font-bold">{row.company}</td><td className="px-4 py-4">{row.contact}</td><td className="px-4 py-4">{row.service}</td><td className="px-4 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand-blue">{row.status}</span></td><td className="px-4 py-4">Today</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-5 flex items-center justify-between text-sm text-slate-500"><span>Showing 1-4 of 24</span><div className="flex gap-2"><button className="btn-secondary">Previous</button><button className="btn-secondary">Next</button></div></div>
        </section>
      </main>
    </AdminLayout>
  );
}
