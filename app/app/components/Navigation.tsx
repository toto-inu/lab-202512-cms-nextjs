'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            StellarCreate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              トップ
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              会社概要
            </Link>
            <Link
              href="/cases"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              事例
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              ブログ
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              トップ
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              会社概要
            </Link>
            <Link
              href="/cases"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              事例
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ブログ
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
