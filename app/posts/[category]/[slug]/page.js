import { getContentBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export default function Post({ params }) {
  const { category, slug } = params;
  const post = getContentBySlug(category, slug);
  
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      <header className="mb-12">
        <a href="/" className="font-mono text-xs opacity-50 hover:opacity-100 italic">← Back to Index</a>
      </header>
      <article className="max-w-4xl mx-auto text-right" dir="rtl">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
          {post.title}
        </h1>
        <div className="prose prose-invert max-w-none font-serif text-xl opacity-80 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </div>
  );
}
