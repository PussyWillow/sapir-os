import { getContentBySlug } from '../../../../lib/markdown';

export default function Post({ params }) {
  const post = getContentBySlug(params.category, params.slug);
  return (
    <div className="min-h-screen bg-black text-white p-12">
      <h1 className="text-7xl font-black uppercase mb-10">{post.title}</h1>
      <div className="max-w-2xl text-xl opacity-80 leading-relaxed">{post.content}</div>
    </div>
  );
}
