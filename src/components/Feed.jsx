import React from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

function Post({ post, onLike }) {
  return (
    <article className="rounded-xl border bg-white p-4">
      <header className="mb-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        <div>
          <h3 className="font-semibold">{post.author}</h3>
          <p className="text-xs text-gray-600">{post.role} • {post.time}</p>
        </div>
        <button className="ml-auto rounded-md p-2 hover:bg-gray-50" aria-label="More">
          <MoreHorizontal className="h-5 w-5 text-gray-600" />
        </button>
      </header>
      <p className="whitespace-pre-wrap text-sm leading-6 text-gray-800">{post.content}</p>
      <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
        <span>{post.likes} likes</span>
        <span>{post.comments ?? 0} comments</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <button onClick={() => onLike?.(post.id)} className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-50">
          <ThumbsUp className="h-4 w-4" /> Like
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-50">
          <MessageCircle className="h-4 w-4" /> Comment
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-50">
          <Share2 className="h-4 w-4" /> Share
        </button>
      </div>
    </article>
  );
}

export default function Feed({ posts = [], onLike }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}
