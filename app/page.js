import { getAllContent } from '../lib/markdown';

export default function Home() {
  const posts = getAllContent();

  return (
    <div className="min-h-screen p-6 md:p-16 flex flex-col">
      <header className="mb-32 flex flex-col md:flex-row justify-between items-baseline border-b border-black/10 pb-8">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter magazine-title">Sapir // OS</h1>
          <p className="font-mono text-[10px] uppercase tracking-widest mt-2 opacity-40 italic">Digital Archive & Thought Repository</p>
        </div>
        <div className="mt-8 md:mt-0 font-mono text-[10px] uppercase opacity-30 text-right leading-relaxed tracking-widest">
          EST: 2026<br/>
          NODES: {posts.length}<br/>
          LATEST_SYNC: {new Date().toLocaleDateString('he-IL')}
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-px bg-black/5">
          {posts.length === 0 ? (
            <div className="py-24 text-center italic opacity-30 serif-hebrew text-4xl">המערכת מחכה לסיגנל ראשון...</div>
          ) : (
            posts.map((post, idx) => (
              <a 
                key={post.slug} 
                href={`/posts/${post.category}/${post.slug}`} 
                className="group bg-[#ecebd9] py-16 md:py-24 transition-all duration-700 hover:bg-white relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between px-4">
                  <div className="flex items-center gap-12 md:gap-24 relative z-10">
                    <span className="font-mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity tracking-widest">
                      ISSUE_0{idx + 1}
                    </span>
                    <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] group-hover:italic transition-all duration-700 magazine-title">
                      {post.title}
                    </h2>
                  </div>
                  <div className="mt-8 md:mt-0 relative z-10">
                    <div className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-30 mb-2">{post.category}</div>
                    <div className="h-px w-24 bg-black/10 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
                {/* Background Text Shadow */}
                <span className="absolute -bottom-10 -right-10 text-[15rem] font-black opacity-[0.02] pointer-events-none uppercase tracking-tighter italic">
                  {post.category}
                </span>
              </a>
            ))
          )}
        </div>
      </main>

      <footer className="mt-40 border-t border-black/5 py-12 flex justify-between items-center">
        <span className="font-mono text-[8px] uppercase tracking-[1em] opacity-20">© Architecture by Sapir</span>
        <div className="flex gap-8 font-mono text-[8px] uppercase tracking-widest opacity-40">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Github</a>
        </div>
      </footer>
    </div>
  );
}
