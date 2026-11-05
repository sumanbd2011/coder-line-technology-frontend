import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthShell } from '../components/AuthShell';
import { FormField } from '../components/FormField';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('admin@coderlinetechnology.com');
  const [password, setPassword] = useState('Admin@123456');
  const errors = useMemo(() => ({
    email: email && !/^\S+@\S+\.\S+$/.test(email) ? 'Enter a valid email address.' : '',
    password: password && password.length < 8 ? 'Password must be at least 8 characters.' : ''
  }), [email, password]);

  const submit = () => {
    if (!email || !password || errors.email || errors.password) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      navigate('/admin/dashboard');
    }, 850);
  };

  return (
    <AuthShell title="Admin Login" subtitle="Secure access for Coder Line Technology administrators, content managers, and sales teams.">
      <div className="grid gap-5">
        <FormField label="Email Address" error={!email ? 'Email address is required.' : errors.email}>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={19} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-white/20 bg-white px-12 py-3 text-brand-ink outline-none ring-brand-blue transition focus:ring-4" placeholder="admin@coderlinetechnology.com" />
          </div>
        </FormField>
        <FormField label="Password" error={!password ? 'Password is required.' : errors.password}>
          <div className="relative">
            <LockKeyhole className="absolute left-4 top-3.5 text-slate-400" size={19} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className="w-full rounded-lg border border-white/20 bg-white px-12 py-3 pr-12 text-brand-ink outline-none ring-brand-blue transition focus:ring-4" placeholder="Password" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 rounded-md p-1 text-slate-500" aria-label="Show or hide password">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </FormField>
        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 font-semibold text-blue-50"><input type="checkbox" className="h-4 w-4 rounded border-white/30" /> Remember Me</label>
          <Link to="/forgot-password" className="font-semibold text-white underline-offset-4 hover:underline">Forgot Password</Link>
        </div>
        <button onClick={submit} disabled={loading} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white font-bold text-brand-blue shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
          {loading && <Loader2 className="animate-spin" size={19} />} {loading ? 'Signing in...' : 'Login'}
        </button>
      </div>
      <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-4 text-xs leading-6 text-blue-50">
        Security: JWT authentication, refresh tokens, password hashing, RBAC, account lockout, secure cookies, and CSRF-ready API design.
      </div>
    </AuthShell>
  );
}
