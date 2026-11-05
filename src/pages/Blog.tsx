import { Search } from 'lucide-react';
import { blogPosts } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';

export function Blog() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
  return (
    <section className="section">
      <SectionHeader eyebrow="Blog" title="ERP insights for founders, operators, and technology leaders." />
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <label className="relative">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
          <input className="w-full rounded-md border border-slate-200 py-3 pl-12 pr-4" placeholder="Search articles" />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => <button key={category} className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold">{category}</button>)}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {blogPosts.map((post) => (
          <article key={post.title} className={`card ${post.featured ? 'border-brand-blue' : ''}`}>
            <p className="text-sm font-semibold text-brand-blue">{post.category}</p>
            <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm text-slate-500">{post.date}</p>
            <p className="mt-4 text-slate-600">Practical guidance for evaluating, designing, and implementing business software with lower risk.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
