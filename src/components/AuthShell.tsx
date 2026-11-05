import { motion } from 'framer-motion';

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#2f8bff_0%,#0d6efd_34%,#111827_100%)] px-5 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-center justify-center">
        <motion.img initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} src="/logo.png" alt="Coder Line Technology" className="mb-8 h-14 rounded-lg bg-white px-4 py-2 shadow-2xl" />
        <motion.section initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.45 }} className="w-full max-w-md rounded-2xl border border-white/20 bg-white/15 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
          <div className="mb-7 text-center">
            <h1 className="text-3xl font-bold tracking-normal">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-blue-50">{subtitle}</p>
          </div>
          {children}
        </motion.section>
      </div>
    </main>
  );
}
