import { getCompanyInfo } from '@/lib/api/company';

export default async function About() {
  // 会社情報を取得（エラー時はデフォルト値を使用）
  let company;
  try {
    company = await getCompanyInfo();
  } catch (error) {
    // microCMSにデータがまだない場合のデフォルト値
    company = {
      name: '株式会社StellarCreate',
      description: 'テクノロジーで人とサービスの可能性を引き上げることをミッションとした、フロントエンド開発とAIソリューションに特化したプロフェッショナル集団です。',
      vision: '技術パートナーとして、お客様と共に成長し続ける。単なる開発会社ではなく、お客様のビジネスパートナーとして、長期的な成功に貢献します。',
      mission: 'テクノロジーで、人とサービスの可能性を引き上げる。私たちは最新のフロントエンド技術とAIを駆使し、お客様のビジネスを次のステージへと導きます。',
      established: '2020年4月',
      address: '〒150-0001 東京都渋谷区神宮前1-1-1',
      representative: '代表取締役 山田 太郎',
      capital: '1,000万円',
    };
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            会社概要
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {company.description}
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
              {company.name && (
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-semibold text-gray-600 mb-2">会社名</dt>
                  <dd className="text-lg text-gray-900">{company.name}</dd>
                </div>
              )}

              {company.representative && (
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-semibold text-gray-600 mb-2">代表者</dt>
                  <dd className="text-lg text-gray-900">{company.representative}</dd>
                </div>
              )}

              {company.established && (
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-semibold text-gray-600 mb-2">設立</dt>
                  <dd className="text-lg text-gray-900">{company.established}</dd>
                </div>
              )}

              {company.capital && (
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-semibold text-gray-600 mb-2">資本金</dt>
                  <dd className="text-lg text-gray-900">{company.capital}</dd>
                </div>
              )}

              {company.address && (
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-semibold text-gray-600 mb-2">所在地</dt>
                  <dd className="text-lg text-gray-900 whitespace-pre-line">{company.address}</dd>
                </div>
              )}

              {company.employees && (
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-semibold text-gray-600 mb-2">従業員数</dt>
                  <dd className="text-lg text-gray-900">{company.employees}</dd>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {(company.mission || company.vision) && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {company.mission && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Mission
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {company.mission}
                  </p>
                </div>
              )}

              {company.vision && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Vision
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {company.vision}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

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
