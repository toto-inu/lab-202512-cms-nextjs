export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            会社概要
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            株式会社StellarCreateは、テクノロジーで人とサービスの可能性を引き上げることをミッションとした、
            フロントエンド開発とAIソリューションに特化したプロフェッショナル集団です。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              企業情報
            </h2>

            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-sm font-semibold text-gray-600 mb-2">会社名</dt>
                <dd className="text-lg text-gray-900">株式会社StellarCreate</dd>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <dt className="text-sm font-semibold text-gray-600 mb-2">代表者</dt>
                <dd className="text-lg text-gray-900">代表取締役 山田 太郎</dd>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <dt className="text-sm font-semibold text-gray-600 mb-2">設立</dt>
                <dd className="text-lg text-gray-900">2020年4月</dd>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <dt className="text-sm font-semibold text-gray-600 mb-2">資本金</dt>
                <dd className="text-lg text-gray-900">1,000万円</dd>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <dt className="text-sm font-semibold text-gray-600 mb-2">所在地</dt>
                <dd className="text-lg text-gray-900">
                  〒150-0001
                  <br />
                  東京都渋谷区神宮前1-1-1
                </dd>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <dt className="text-sm font-semibold text-gray-600 mb-2">事業内容</dt>
                <dd className="text-lg text-gray-900">
                  <ul className="space-y-2 mt-2">
                    <li>• フロントエンド開発スペシャリスト派遣</li>
                    <li>• Webシステム開発</li>
                    <li>• AIソリューション開発</li>
                    <li>• リード獲得自動化支援</li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                テクノロジーで、人とサービスの可能性を引き上げる。
                <br /><br />
                私たちは最新のフロントエンド技術とAIを駆使し、
                お客様のビジネスを次のステージへと導きます。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                技術パートナーとして、お客様と共に成長し続ける。
                <br /><br />
                単なる開発会社ではなく、お客様のビジネスパートナーとして、
                長期的な成功に貢献します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                常に最新の技術トレンドをキャッチアップし、
                高品質な技術提供を追求します
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partnership
              </h3>
              <p className="text-gray-600">
                お客様の成功を第一に考え、
                真のビジネスパートナーとして伴走します
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                既存の枠にとらわれず、
                常に新しい価値創造に挑戦します
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
