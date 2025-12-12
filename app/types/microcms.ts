import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

// 事例(Case)の型定義
export interface Case {
  id: string;
  title: string;
  description: string;
  client: string;
  category: string;
  tags: string;
  publishedAt: string;
  thumbnail?: MicroCMSImage;
  content: string;
}

export interface CaseResponse extends Case, MicroCMSDate {}

export interface CaseListResponse {
  contents: CaseResponse[];
  totalCount: number;
  offset: number;
  limit: number;
}

// ブログ記事の型定義
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  thumbnail?: MicroCMSImage;
  tags: string;
  author?: string;
}

export interface BlogPostResponse extends BlogPost, MicroCMSDate {}

export interface BlogPostListResponse {
  contents: BlogPostResponse[];
  totalCount: number;
  offset: number;
  limit: number;
}

// 会社情報の型定義
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

export interface CompanyResponse extends Company, MicroCMSDate {}

// microCMSのクエリパラメータ型
export type CaseQueries = MicroCMSQueries;
export type BlogQueries = MicroCMSQueries;
