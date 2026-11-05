export function SectionHeader({ eyebrow, title, text, inverted = false }: { eyebrow: string; title: string; text?: string; inverted?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold tracking-normal sm:text-4xl ${inverted ? 'text-white' : 'text-brand-ink'}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-8 ${inverted ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
    </div>
  );
}
