import { getContentBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';

// ב-Next.js 15+, params הוא Promise וחובה להשתמש ב-await
export default async function PostPage({ params }) {
  const { category, slug } = await params;
  const post = getContentBySlug(category, slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24" dir="rtl">
      <header className="mb-16">
        <a href="/" className="font-mono text-xs uppercase opacity-50 hover:opacity-100 italic">
          ← Back to Index
        </a>
      </header>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
          {post.title}
        </h1>
        <div className="prose prose-invert prose-xl font-serif opacity-80 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </div>
  );
}
