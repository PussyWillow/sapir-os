import { getAllContent } from '../lib/markdown';

export default function Home() {
  const posts = getAllContent();
  return (
    <div className="min-h-screen bg-[#ecebd9] p-12">
      <h1 className="text-2xl font-bold mb-20 uppercase">Sapir // OS</h1>
      <div className="max-w-5xl mx-auto">
        {posts.map(post => (
          <a key={post.slug} href={`/posts/${post.category}/${post.slug}`} className="block border-b border-black/10 py-10 hover:italic">
            <h2 className="text-6xl font-black uppercase tracking-tighter">{post.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
