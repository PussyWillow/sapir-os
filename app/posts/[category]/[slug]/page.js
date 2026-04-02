import { getContentBySlug } from '../../../../lib/markdown';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const { category, slug } = await params;
  const post = getContentBySlug(category, slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24 selection:bg-white selection:text-black" dir="rtl">
      <header className="mb-20">
        <a href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
          ← Back to Index
        </a>
      </header>

      <article className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 font-mono text-[10px] uppercase text-white/30 tracking-[0.3em]">
          <span>{post.category}</span>
          <div className="h-px w-12 bg-white/10"></div>
          <span>{post.date}</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-16">
          {post.title}
        </h1>

        <div className="prose prose-invert prose-xl font-serif opacity-80 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </div>
  );
}
