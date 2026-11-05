import { Camera, Clock, KeyRound, Save, Upload } from 'lucide-react';
import { AdminLayout } from '../components/AdminLayout';

export function AdminProfile() {
  return (
    <AdminLayout>
      <main className="p-5 sm:p-8">
        <p className="eyebrow">Admin Profile Page</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Profile & Security</h1>
        <div className="mt-8 grid gap-6 xl:grid-cols-[360px_1fr]">
          <section className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-ink text-white">
              <Camera size={36} />
            </div>
            <h2 className="mt-5 text-xl font-bold">Super Admin</h2>
            <p className="text-sm text-slate-500">admin@coderlinetechnology.com</p>
            <button className="btn-secondary mt-5 w-full"><Upload size={18} /> Upload Profile Picture</button>
            <div className="mt-6 rounded-lg bg-slate-50 p-4 text-left">
              <div className="flex gap-3"><Clock className="text-brand-blue" /><div><p className="text-sm font-bold">Last Login Information</p><p className="mt-1 text-sm text-slate-500">June 17, 2026 at 10:15 AM from Dhaka, Bangladesh</p></div></div>
            </div>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Update Profile</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">Full Name<input className="rounded-lg border border-slate-200 px-4 py-3 font-normal" defaultValue="Super Admin" /></label>
              <label className="grid gap-2 text-sm font-bold">Email Address<input className="rounded-lg border border-slate-200 px-4 py-3 font-normal" defaultValue="admin@coderlinetechnology.com" /></label>
              <label className="grid gap-2 text-sm font-bold">Phone<input className="rounded-lg border border-slate-200 px-4 py-3 font-normal" defaultValue="+880 1XXX XXXXXX" /></label>
              <label className="grid gap-2 text-sm font-bold">Language<select className="rounded-lg border border-slate-200 px-4 py-3 font-normal"><option>English</option><option>Bangla</option></select></label>
            </div>
            <button className="btn-primary mt-6"><Save size={18} /> Save Profile</button>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="flex items-center gap-2 text-xl font-bold"><KeyRound className="text-brand-blue" /> Change Password</h2>
              <div className="mt-5 grid gap-4">
                <input type="password" className="rounded-lg border border-slate-200 px-4 py-3" placeholder="Current password" />
                <input type="password" className="rounded-lg border border-slate-200 px-4 py-3" placeholder="New password" />
                <input type="password" className="rounded-lg border border-slate-200 px-4 py-3" placeholder="Confirm new password" />
              </div>
              <button className="btn-secondary mt-5">Change Password</button>
            </div>
          </section>
        </div>
      </main>
    </AdminLayout>
  );
}
