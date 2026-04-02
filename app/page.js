import { getAllContent } from '../lib/markdown';

export default function Home() {
  const posts = getAllContent();

  return (
    <div className="min-h-screen p-6 md:p-16 flex flex-col justify-start">
      <header className="mb-32 flex justify-between items-start">
        <h1 className="text-2xl font-black uppercase tracking-tighter">Sapir // OS</h1>
        <div className="font-mono text-[10px] uppercase opacity-30 text-left leading-relaxed">
          ARCHIVE_SCAN: ACTIVE<br/>
          NODES_FOUND: {posts.length}<br/>
          LOCATION: TLV_NODE
        </div>
      </header>

      <main className="w-full">
        {posts.length === 0 ? (
          <div className="border-t border-black/10 py-20 italic opacity-40 font-serif text-3xl">
            המערכת שקטה מדי. תזריקי מחשבות לתיקיית Content.
          </div>
        ) : (
          posts.map((post, idx) => (
            <a 
              key={post.slug} 
              href={`/posts/${post.category}/${post.slug}`} 
              className="group block border-b border-black/10 py-12 md:py-20 transition-all hover:bg-black/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="font-mono text-[10px] opacity-20 mt-4">0{idx + 1}</span>
                  <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] group-hover:italic transition-all duration-500">
                    {post.title}
                  </h2>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 text-left group-hover:opacity-100 transition-opacity">
                  {post.category} // {post.date}
                </div>
              </div>
            </a>
          ))
        )}
      </main>

      <footer className="mt-40 font-mono text-[8px] uppercase tracking-[0.5em] opacity-20">
        System_Root // Authorized Access Only
      </footer>
    </div>
  );
}
