import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostById, getAllBlogPosts, getRecentBlogPosts } from '@/lib/api/blog';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const post = await getBlogPostById(id);
    const recentPosts = await getRecentBlogPosts(3);
    const relatedPosts = recentPosts.filter((p) => p.id !== id).slice(0, 2);

    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ブログ一覧に戻る
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {post.tags && (
              <div className="flex flex-wrap gap-3 mb-6">
                {post.tags.split(',').map((tag) => (
                  <span
                    key={tag.trim()}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-6 text-sm text-gray-300">
              {post.author && (
                <div>
                  <span className="font-semibold">著者: </span>
                  {post.author}
                </div>
              )}
              <div>
                <span className="font-semibold">公開日: </span>
                {new Date(post.publishedAt || post.createdAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Thumbnail */}
        {post.thumbnail?.url && (
          <section className="bg-gray-100 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.thumbnail.url}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="
              prose
              prose-slate
              dark:prose-invert
              max-w-none
              prose-headings:scroll-mt-20
              prose-headings:font-bold
              prose-headings:tracking-tight
              prose-h1:text-5xl
              prose-h1:leading-tight
              prose-h1:font-extrabold
              prose-h1:text-gray-900
              dark:prose-h1:text-white
              prose-h1:mt-16
              prose-h1:mb-8
              prose-h1:pb-6
              prose-h1:border-b-2
              prose-h1:border-gray-200
              dark:prose-h1:border-gray-700
              prose-h2:text-3xl
              prose-h2:leading-snug
              prose-h2:text-gray-900
              dark:prose-h2:text-white
              prose-h2:mt-16
              prose-h2:mb-6
              prose-h2:pb-4
              prose-h2:border-b
              prose-h2:border-gray-200
              dark:prose-h2:border-gray-700
              prose-h3:text-2xl
              prose-h3:leading-snug
              prose-h3:text-gray-800
              dark:prose-h3:text-gray-200
              prose-h3:mt-12
              prose-h3:mb-4
              prose-h4:text-xl
              prose-h4:leading-normal
              prose-h4:text-gray-800
              dark:prose-h4:text-gray-200
              prose-h4:mt-8
              prose-h4:mb-3
              prose-p:text-base
              prose-p:leading-[1.8]
              prose-p:text-gray-700
              dark:prose-p:text-gray-300
              prose-p:my-6
              prose-ul:my-6
              prose-ul:space-y-3
              prose-ol:my-6
              prose-ol:space-y-3
              prose-li:text-base
              prose-li:leading-[1.8]
              prose-li:text-gray-700
              dark:prose-li:text-gray-300
              prose-li:my-2
              prose-li:marker:text-gray-500
              dark:prose-li:marker:text-gray-400
              prose-a:text-blue-600
              dark:prose-a:text-blue-400
              prose-a:no-underline
              prose-a:font-medium
              hover:prose-a:text-blue-800
              dark:hover:prose-a:text-blue-300
              hover:prose-a:underline
              prose-a:transition-colors
              prose-strong:text-gray-900
              dark:prose-strong:text-white
              prose-strong:font-bold
              prose-blockquote:border-l-4
              prose-blockquote:border-gray-300
              dark:prose-blockquote:border-gray-600
              prose-blockquote:pl-6
              prose-blockquote:pr-6
              prose-blockquote:py-4
              prose-blockquote:my-8
              prose-blockquote:bg-gray-50
              dark:prose-blockquote:bg-gray-800
              prose-blockquote:italic
              prose-blockquote:text-gray-700
              dark:prose-blockquote:text-gray-300
              prose-blockquote:rounded-r
              prose-code:text-sm
              prose-code:font-mono
              prose-code:text-pink-600
              dark:prose-code:text-pink-400
              prose-code:bg-gray-100
              dark:prose-code:bg-gray-800
              prose-code:px-1.5
              prose-code:py-0.5
              prose-code:rounded
              prose-code:before:content-['']
              prose-code:after:content-['']
              prose-pre:bg-gray-900
              dark:prose-pre:bg-gray-950
              prose-pre:text-gray-100
              prose-pre:rounded-lg
              prose-pre:p-6
              prose-pre:my-8
              prose-pre:overflow-x-auto
              prose-pre:shadow-lg
              prose-hr:border-gray-200
              dark:prose-hr:border-gray-700
              prose-hr:my-12
              prose-table:w-full
              prose-table:my-8
              prose-thead:border-b-2
              prose-thead:border-gray-300
              dark:prose-thead:border-gray-600
              prose-th:px-4
              prose-th:py-3
              prose-th:text-left
              prose-th:font-semibold
              prose-th:text-gray-900
              dark:prose-th:text-white
              prose-td:px-4
              prose-td:py-3
              prose-td:border-t
              prose-td:border-gray-200
              dark:prose-td:border-gray-700
              dark:prose-td:text-gray-300
              prose-img:rounded-lg
              prose-img:shadow-md
              prose-img:my-8
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </article>
          </div>
        </section>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                最近の記事
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group block bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                      {relatedPost.thumbnail?.url ? (
                        <img
                          src={relatedPost.thumbnail.url}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-4xl opacity-20">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {new Date(relatedPost.publishedAt || relatedPost.createdAt).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      {relatedPost.tags && (
                        <div className="flex flex-wrap gap-2">
                          {relatedPost.tags.split(',').slice(0, 2).map((tag) => (
                            <span
                              key={tag.trim()}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              お気軽にご相談ください
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              プロジェクトのご相談や技術的なお問い合わせは
              <br />
              お気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
