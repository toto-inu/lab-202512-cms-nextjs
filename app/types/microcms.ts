// microCMS API型定義
import type { MicroCMSImage } from 'microcms-js-sdk';

// ====================================
// コンテンツ型定義
// ====================================

// ブログ記事
export interface Blog {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: string;
  author?: string;
  publishedAt?: string;
}

// 事例
export interface Cases {
  title: string;
  description: string;
  client: string;
  category: string;
  tags?: string;
  thumbnail?: MicroCMSImage;
  content: string;
  publishedAt: string;
}

// 会社情報
export interface Company {
  name: string;
  description: string;
  vision?: string;
  mission?: string;
  established?: string;
  address?: string;
  representative?: string;
  employees?: string;
  capital?: string;
}

// ====================================
// microcms-ts-sdk用のEndpoints型
// ====================================

export interface Endpoints {
  list: {
    blog: Blog;
    cases: Cases;
  };
  object: {
    company: Company;
  };
}
