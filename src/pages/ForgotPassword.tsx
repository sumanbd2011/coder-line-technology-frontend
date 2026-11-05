import { Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShell } from '../components/AuthShell';
import { FormField } from '../components/FormField';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <AuthShell title="Forgot Password" subtitle="Enter your admin email address and a secure reset link will be sent to your inbox.">
      <div className="grid gap-5">
        <FormField label="Email Address" error={email && !/^\S+@\S+\.\S+$/.test(email) ? 'Enter a valid email address.' : ''}>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={19} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-white/20 bg-white px-12 py-3 text-brand-ink outline-none ring-brand-blue transition focus:ring-4" placeholder="admin@coderlinetechnology.com" />
          </div>
        </FormField>
        {sent && <p className="rounded-lg bg-emerald-400/20 p-3 text-sm font-semibold text-emerald-50">Reset link queued successfully.</p>}
        <button onClick={() => { setLoading(true); setTimeout(() => { setLoading(false); setSent(true); }, 700); }} disabled={loading || !email} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white font-bold text-brand-blue shadow-glow disabled:opacity-70">
          {loading && <Loader2 className="animate-spin" size={19} />} Send Reset Link
        </button>
        <Link to="/login" className="text-center text-sm font-semibold text-white underline-offset-4 hover:underline">Back to Login</Link>
      </div>
    </AuthShell>
  );
}
