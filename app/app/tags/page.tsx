import Link from 'next/link';
import { getTagWithCount } from '@/data/cases';

export default function TagsPage() {
  const tags = getTagWithCount();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            タグ一覧
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            技術スタックやカテゴリーから事例を探す
          </p>
        </div>
      </section>

      {/* Tags Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="group block p-6 bg-gray-50 rounded-xl hover:bg-gray-900 hover:text-white transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">{tag}</span>
                  <span className="px-3 py-1 bg-gray-200 group-hover:bg-gray-700 text-gray-700 group-hover:text-white text-sm rounded-full transition-colors">
                    {count}
                  </span>
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                  {count}件の事例
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
