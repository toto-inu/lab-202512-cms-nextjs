import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">株式会社StellarCreate</h3>
            <p className="text-sm leading-relaxed">
              テクノロジーで、人とサービスの可能性を引き上げる
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  トップ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm hover:text-white transition-colors">
                  事例
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
            <p className="text-sm">
              サービスに関するご質問やご相談は
              <br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} StellarCreate Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
