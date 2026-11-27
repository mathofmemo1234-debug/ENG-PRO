import React, { useState } from 'react';
import { MessageCircle, Send, ThumbsUp, UserCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DiscussionPost } from '../data/types';

interface LessonDiscussionProps {
  lessonId: string;
  seeds: DiscussionPost[];
}

export const LessonDiscussion: React.FC<LessonDiscussionProps> = ({ lessonId, seeds }) => {
  const { getLessonDiscussions, addDiscussionPost, addDiscussionReply, toggleLikePost } =
    useApp();

  const posts = getLessonDiscussions(lessonId, seeds);
  const [filter, setFilter] = useState<'all' | 'question' | 'tip'>('all');
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState<'question' | 'tip'>('question');
  const [text, setText] = useState('');
  const [replyOpenId, setReplyOpenId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const visiblePosts = posts.filter((p) => (filter === 'all' ? true : p.tag === filter));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addDiscussionPost(lessonId, seeds, {
      author: author.trim() || 'طالب مجتهد',
      role: 'student',
      tag,
      text: text.trim(),
    });
    setText('');
  };

  const handleReply = (postId: string) => {
    if (!replyText.trim()) return;
    addDiscussionReply(lessonId, seeds, postId, author.trim() || 'زميلك بالصف', 'student', replyText.trim());
    setReplyText('');
    setReplyOpenId(null);
  };

  return (
    <section className="no-print bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">مجتمع نقاش الطلاب</h3>
            <p className="text-xs text-slate-500">
              اسأل زملاءك أو شارك ملخصاً ذكياً ونصيحة حفظ حول هذا الدرس ({posts.length} مشاركات)
            </p>
          </div>
        </div>

        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
          {(
            [
              { id: 'all', label: 'الكل' },
              { id: 'question', label: 'الأسئلة' },
              { id: 'tip', label: 'النصائح والملخصات' },
            ] as const
          ).map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                filter === f.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* New Post Form */}
      <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="اسمك (اختياري)"
            className="flex-1 min-w-[160px] px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[var(--brand-primary)]"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value as 'question' | 'tip')}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none"
          >
            <option value="question">❓ سؤال للنقاش</option>
            <option value="tip">💡 نصيحة أو تلخيص</option>
          </select>
        </div>
        <div className="flex gap-2">
          <textarea
            rows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="اكتب سؤالك أو ملاحظتك هنا لمشاركتها مع الطلاب..."
            className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[var(--brand-primary)]"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-[var(--brand-primary)] text-white font-bold text-xs flex items-center gap-1.5 hover:opacity-95 transition self-end cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            نشر
          </button>
        </div>
      </form>

      {/* Posts Feed */}
      <div className="space-y-3">
        {visiblePosts.map((post) => (
          <div key={post.id} className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-white">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold ${
                    post.role === 'teacher'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-teal-100 text-teal-800'
                  }`}
                >
                  {post.role === 'teacher' ? <UserCheck className="w-4 h-4" /> : post.author[0]}
                </span>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">{post.author}</div>
                  <div className="text-[11px] text-slate-400">{post.timestamp}</div>
                </div>
              </div>
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  post.tag === 'question'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {post.tag === 'question' ? '❓ سؤال' : '💡 نصيحة'}
              </span>
            </div>

            <p className="text-sm text-slate-800 leading-relaxed">{post.text}</p>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => toggleLikePost(lessonId, seeds, post.id)}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[var(--brand-primary)] cursor-pointer"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                مفيد ({post.likes})
              </button>
              <button
                type="button"
                onClick={() => setReplyOpenId(replyOpenId === post.id ? null : post.id)}
                className="text-xs font-bold text-[var(--brand-primary-dark)] hover:underline cursor-pointer"
              >
                إضافة رد ({post.replies.length})
              </button>
            </div>

            {post.replies.length > 0 && (
              <div className="pr-4 border-r-2 border-slate-200 space-y-2 pt-1">
                {post.replies.map((rep) => (
                  <div key={rep.id} className="bg-slate-50 rounded-xl p-2.5 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">{rep.author}</span>
                      <span className="text-[10px] text-slate-400">{rep.timestamp}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{rep.text}</p>
                  </div>
                ))}
              </div>
            )}

            {replyOpenId === post.id && (
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="اكتب ردك هنا..."
                  className="flex-1 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleReply(post.id)}
                  className="px-3 py-1.5 rounded-xl bg-[var(--brand-primary)] text-white text-xs font-bold cursor-pointer"
                >
                  إرسال
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
