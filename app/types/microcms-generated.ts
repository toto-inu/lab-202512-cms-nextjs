// このファイルは自動生成されています。手動で編集しないでください。
// Generated at: 2025-12-13T13:50:41.427Z

import type { MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

// ブログ (list)
export interface Blog {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: string;
  author?: string;
}

export interface BlogResponse extends Blog, MicroCMSDate {}

export interface BlogListResponse {
  contents: BlogResponse[];
  totalCount: number;
  offset: number;
  limit: number;
}

// 事例 (list)
export interface Cases {
  title: string;
  description: string;
  client: string;
  category: string;
  tags?: string;
  thumbnail?: MicroCMSImage;
  content: string;
}

export interface CasesResponse extends Cases, MicroCMSDate {}

export interface CasesListResponse {
  contents: CasesResponse[];
  totalCount: number;
  offset: number;
  limit: number;
}

// 会社情報 (object)
export interface Company {
  name: string;
  description: string;
}

export interface CompanyResponse extends Company, MicroCMSDate {}

