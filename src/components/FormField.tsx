export function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm font-semibold text-rose-200">{error}</span>}
    </label>
  );
}
