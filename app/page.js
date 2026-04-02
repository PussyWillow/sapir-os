import { getAllContent } from '../lib/markdown';

export default function Home() {
  const posts = getAllContent();
  return (
    <div className="min-h-screen p-6 md:p-12">
      <header className="mb-20">
        <h1 className="text-2xl font-bold uppercase tracking-tighter italic">Sapir // OS</h1>
      </header>
      <main className="max-w-6xl mx-auto">
        {posts.length === 0 ? (
          <p className="font-mono opacity-50">המערכת ריקה. תזריקי קבצי Markdown לתיקיית content.</p>
        ) : (
          posts.map(post => (
            <a key={post.slug} href={`/posts/${post.category}/${post.slug}`} className="block border-b border-black/10 py-10 hover:italic transition-all">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">{post.title}</h2>
              <p className="font-mono text-xs opacity-40 mt-2">{post.category} // {post.date}</p>
            </a>
          ))
        )}
      </main>
    </div>
  );
}
