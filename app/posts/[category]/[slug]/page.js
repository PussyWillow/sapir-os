import { getContentBySlug } from '../../../../lib/markdown';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const { category, slug } = await params;
  const post = getContentBySlug(category, slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-16 flex flex-col justify-center" dir="rtl">
      <header className="fixed top-0 left-0 right-0 p-6 md:p-12 z-50 flex justify-between mix-blend-difference">
        <a href="/" className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition-all italic underline underline-offset-4">
          ← Index
        </a>
      </header>

      <article className="max-w-7xl mx-auto w-full mt-24">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] uppercase text-white/30 tracking-[0.4em]">
            <span>{post.date}</span>
            <div className="h-[1px] w-12 bg-white/10"></div>
          </div>
          
          <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.75] mb-12 animate-in fade-in slide-in-from-right-12 duration-1000">
            {post.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 custom-serif text-xl md:text-3xl opacity-80 leading-relaxed whitespace-pre-wrap max-w-3xl">
            {post.content}
          </div>
          
          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-r border-white/10 pt-12 lg:pt-0 lg:pr-12 text-left" dir="ltr">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 italic">METADATA_NODE</p>
            <div className="text-[10px] font-mono leading-loose opacity-40">
              SLUG: {slug}<br/>
              TYPE: {category}<br/>
              BUILD: NEXT_15_TURBO
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
