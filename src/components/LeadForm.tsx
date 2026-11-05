import { Send } from 'lucide-react';

export function LeadForm() {
  return (
    <form className="glass rounded-lg p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-md border border-slate-200 px-4 py-3" placeholder="Full name" />
        <input className="rounded-md border border-slate-200 px-4 py-3" placeholder="Company" />
        <input className="rounded-md border border-slate-200 px-4 py-3" placeholder="Email" />
        <input className="rounded-md border border-slate-200 px-4 py-3" placeholder="Phone" />
        <select className="rounded-md border border-slate-200 px-4 py-3 sm:col-span-2">
          <option>ERP Software Development</option>
          <option>Custom Software Development</option>
          <option>Business Process Automation</option>
          <option>Support & Maintenance</option>
        </select>
        <textarea className="min-h-32 rounded-md border border-slate-200 px-4 py-3 sm:col-span-2" placeholder="Tell us about your project" />
      </div>
      <button type="button" className="btn-primary mt-5 w-full sm:w-auto">
        Send Inquiry <Send size={18} />
      </button>
    </form>
  );
}
