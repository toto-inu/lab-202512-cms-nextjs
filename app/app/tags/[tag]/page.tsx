import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCasesByTag, getAllTags } from '@/lib/api/cases';

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: encodedTag } = await params;
  const tag = decodeURIComponent(encodedTag);
  const cases = await getCasesByTag(tag);

  if (cases.length === 0) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tags"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            タグ一覧に戻る
          </Link>

          <div className="mb-6">
            <span className="px-6 py-3 bg-white/10 text-white text-lg rounded-full">
              {tag}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {tag} の事例
          </h1>
          <p className="text-xl text-gray-300">
            {cases.length}件の事例
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <Link
                key={caseItem.id}
                href={`/cases/${caseItem.id}`}
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl opacity-20">📊</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{caseItem.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {caseItem.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.slice(0, 3).map((caseTag) => (
                      <span
                        key={caseTag}
                        className={`px-3 py-1 text-xs rounded-full ${
                          caseTag === tag
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {caseTag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-900 font-semibold">
                    詳しく見る
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
