import { CheckCircle2, Eye, EyeOff, LockKeyhole } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShell } from '../components/AuthShell';
import { FormField } from '../components/FormField';

export function ResetPassword() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const rules = useMemo(() => [
    ['Minimum 8 characters', password.length >= 8],
    ['Uppercase letter', /[A-Z]/.test(password)],
    ['Lowercase letter', /[a-z]/.test(password)],
    ['Number', /\d/.test(password)],
    ['Special character', /[^A-Za-z0-9]/.test(password)]
  ] as const, [password]);
  const valid = rules.every(([, ok]) => ok) && password === confirm && confirm.length > 0;

  return (
    <AuthShell title="Reset Password" subtitle="Create a strong new password for your admin account.">
      <div className="grid gap-5">
        <FormField label="New Password">
          <div className="relative">
            <LockKeyhole className="absolute left-4 top-3.5 text-slate-400" size={19} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} className="w-full rounded-lg border border-white/20 bg-white px-12 py-3 text-brand-ink outline-none ring-brand-blue transition focus:ring-4" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-3 rounded-md p-1 text-slate-500" aria-label="Show or hide password">{show ? <EyeOff size={20} /> : <Eye size={20} />}</button>
          </div>
        </FormField>
        <FormField label="Confirm Password" error={confirm && password !== confirm ? 'Passwords do not match.' : ''}>
          <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type={show ? 'text' : 'password'} className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-brand-ink outline-none ring-brand-blue transition focus:ring-4" />
        </FormField>
        <div className="grid gap-2 rounded-lg bg-white/10 p-4">
          {rules.map(([label, ok]) => <span key={label} className={`flex items-center gap-2 text-sm ${ok ? 'text-emerald-100' : 'text-blue-50'}`}><CheckCircle2 size={16} />{label}</span>)}
        </div>
        <button disabled={!valid} className="h-12 rounded-lg bg-white font-bold text-brand-blue shadow-glow disabled:opacity-60">Reset Password</button>
        <Link to="/login" className="text-center text-sm font-semibold text-white underline-offset-4 hover:underline">Back to Login</Link>
      </div>
    </AuthShell>
  );
}
