import React, { useState } from 'react';
import { Image as ImageIcon, Video, Smile, Calendar, Send } from 'lucide-react';

export default function PostComposer({ onPost }) {
  const [text, setText] = useState('');

  const handlePost = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onPost?.({
      id: Date.now(),
      author: 'You',
      role: 'Product Designer',
      avatar: '',
      content: trimmed,
      likes: Math.floor(Math.random() * 50),
      comments: Math.floor(Math.random() * 10),
      time: 'Just now',
    });
    setText('');
  };

  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="flex gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500" />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start a post"
            rows={3}
            className="w-full resize-none rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600">
              <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-blue-50"><ImageIcon className="h-4 w-4" /> Photo</button>
              <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-blue-50"><Video className="h-4 w-4" /> Video</button>
              <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-blue-50"><Smile className="h-4 w-4" /> Mood</button>
              <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-blue-50"><Calendar className="h-4 w-4" /> Event</button>
            </div>
            <button
              onClick={handlePost}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Send className="h-4 w-4" /> Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
