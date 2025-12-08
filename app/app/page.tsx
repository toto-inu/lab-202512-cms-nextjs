import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              テクノロジーで、
              <br />
              人とサービスの
              <br />
              可能性を引き上げる
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Next.js / TypeScript を中心とした
              <br />
              フロントエンド開発とAIソリューションで
              <br />
              お客様の成長を加速させます
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                お問い合わせ
              </Link>
              <Link
                href="/cases"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                事例を見る
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              お客様のビジネスを加速させる3つのサービス
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                スペシャリスト派遣
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Next.js / TypeScript のエキスパートがチームに参画し、
                高品質なフロントエンド開発を実現します
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                システム開発
              </h3>
              <p className="text-gray-600 leading-relaxed">
                コンセプト検証からプロダクトローンチまで、
                一気通貫でシステム開発をサポートします
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                リード獲得自動化
              </h3>
              <p className="text-gray-600 leading-relaxed">
                自社システムを活用したAIソリューションで、
                効率的なリード獲得を実現します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              お客様と共に実現したプロジェクト事例
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all"
            >
              すべての事例を見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            プロジェクトについて
            <br />
            お気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            サービスに関するご質問やお見積もりなど、
            <br />
            まずはお気軽にお問い合わせください
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
