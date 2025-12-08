export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            サービスに関するご質問やお見積もりなど、
            まずはお気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="example@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="03-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="specialist">スペシャリスト派遣について</option>
                  <option value="development">システム開発について</option>
                  <option value="ai">AIソリューションについて</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
                >
                  送信する
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-gray-600 text-center">
              ご入力いただいた個人情報は、お問い合わせ対応の目的でのみ使用いたします
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              その他のお問い合わせ方法
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                メールでのお問い合わせ
              </h3>
              <p className="text-gray-600 mb-2">
                info@stellar-create.co.jp
              </p>
              <p className="text-sm text-gray-500">
                営業時間: 平日 9:00〜18:00
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                お電話でのお問い合わせ
              </h3>
              <p className="text-gray-600 mb-2">
                03-1234-5678
              </p>
              <p className="text-sm text-gray-500">
                営業時間: 平日 9:00〜18:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
