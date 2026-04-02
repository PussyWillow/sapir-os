import { getContentBySlug } from '../../../../lib/markdown';
import { notFound } from 'next/navigation';
import { ArrowLeft, Maximize2 } from 'lucide-react';

export default async function PostPage({ params }) {
  const { category, slug } = await params;
  const post = getContentBySlug(category, slug);

  if (!post) return notFound();

  // טיפול בגלריה במידה והיא קיימת ב-Frontmatter
  const gallery = post.gallery ? (Array.isArray(post.gallery) ? post.gallery : post.gallery.split(',').map(s => s.trim())) : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 selection:bg-white selection:text-black overflow-x-hidden" dir="rtl">
      <header className="mb-20 relative z-10">
        <a href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all italic">
          <ArrowLeft size={12} /> Back to Index
        </a>
      </header>

      <article className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12 font-mono text-[10px] uppercase text-white/30 tracking-[0.4em]">
          <span>{post.category}</span>
          <div className="h-px w-12 bg-white/10"></div>
          <span>{post.date}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* כותרת וטקסט */}
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-20 break-words drop-shadow-2xl">
              {post.title}
            </h1>
            
            <div className="font-serif text-xl md:text-2xl opacity-80 leading-relaxed max-w-2xl whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* גלריה צדדית / תמונות */}
          {gallery && (
            <div className="lg:col-span-5 space-y-8 mt-12 lg:mt-0">
              {gallery.map((img, i) => (
                <div key={i} className="group relative overflow-hidden border border-white/5 bg-white/5 aspect-[4/5] cursor-zoom-in">
                  <img 
                    src={img} 
                    alt={`Asset ${i}`}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <Maximize2 className="text-white/30" size={32} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      <footer className="mt-40 pt-12 border-t border-white/5 font-mono text-[8px] uppercase tracking-[0.5em] opacity-20 text-left">
        End of Node // {post.slug} // Architecture by Sapir OS
      </footer>
    </div>
  );
}
