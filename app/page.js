import { getAllContent } from '../lib/markdown';

export default function Home() {
  const posts = getAllContent();

  return (
    <div className="min-h-screen p-8 md:p-24 bg-[#ecebd9]">
      <header className="mb-24 flex justify-between items-baseline">
        <h1 className="text-3xl font-black uppercase tracking-tighter italic">Sapir // OS</h1>
        <span className="font-mono text-[10px] opacity-40">SYSTEM_ACTIVE // {posts.length} NODES</span>
      </header>

      <main className="max-w-6xl mx-auto">
        {posts.length === 0 ? (
          <p className="font-mono text-sm opacity-50 italic">המערכת ריקה. תזריקי קבצי Markdown לתיקיית content.</p>
        ) : (
          posts.map((post) => (
            <a 
              key={post.slug} 
              href={`/posts/${post.category}/${post.slug}`} 
              className="group block border-b border-black/10 py-12 hover:bg-black/[0.01] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">
                  {post.title}
                </h2>
                <div className="mt-4 md:mt-0 font-mono text-[10px] uppercase opacity-40">
                  {post.category} // {post.date}
                </div>
              </div>
            </a>
          ))
        )}
      </main>
    </div>
  );
}
