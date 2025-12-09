import Link from 'next/link';
import { getAllCases } from '@/lib/strapi';

export default async function Cases() {
  let cases = [];
  let error = null;

  try {
    cases = await getAllCases();
  } catch (err) {
    console.error('Failed to fetch cases from Strapi:', err);
    error = err;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            お客様と共に実現したプロジェクト事例をご紹介します
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                CMSとの接続に問題があります
              </h3>
              <p className="text-yellow-700 mb-4">
                Strapi CMSからデータを取得できませんでした。Strapiが起動しているか確認してください。
              </p>
              <code className="text-sm bg-yellow-100 px-2 py-1 rounded">
                docker compose up -d
              </code>
            </div>
          )}

          {!error && cases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                まだケーススタディが登録されていません
              </p>
              <p className="text-gray-400">
                Strapi管理画面から記事を追加してください
              </p>
            </div>
          )}

          {cases.length > 0 && (
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
                    {caseItem.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
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
          )}
        </div>
      </section>
    </div>
  );
}
