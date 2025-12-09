/**
 * Strapi API Client
 *
 * Next.jsアプリケーションからStrapiのREST APIにアクセスするためのクライアント
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Strapiのレスポンス型定義（Strapi v5対応）
 */
interface StrapiResponseData<T> {
  id: number;
  documentId: string;
  [key: string]: any;
}

interface StrapiResponse<T> {
  data: T extends Array<any> ? StrapiResponseData<T[number]>[] : StrapiResponseData<T>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Strapiメディアファイルの型定義
 */
interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    url: string;
    formats: {
      thumbnail?: StrapiMediaFormat;
      small?: StrapiMediaFormat;
      medium?: StrapiMediaFormat;
      large?: StrapiMediaFormat;
    };
  };
}

/**
 * CaseコンテンツタイプのStrapi型（Strapi v5対応 - フラット構造）
 */
interface StrapiCase {
  id: number;
  documentId: string;
  title: string;
  description: string;
  client: string;
  category: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: StrapiMedia | null;
}

/**
 * アプリケーション用のCase型（モックデータと互換性あり）
 */
export interface Case {
  id: string;
  title: string;
  description: string;
  client: string;
  category: string;
  tags: string[];
  publishedAt: string;
  thumbnail: string;
  content: string;
}

/**
 * StrapiのCase responseをアプリケーション用のCase型に変換（Strapi v5対応）
 */
function transformCase(strapiCase: StrapiCase): Case {
  const thumbnailUrl = strapiCase.thumbnail?.attributes?.url || '';

  return {
    id: strapiCase.documentId,
    title: strapiCase.title,
    description: strapiCase.description,
    client: strapiCase.client,
    category: strapiCase.category,
    tags: strapiCase.tags,
    publishedAt: strapiCase.publishedAt || strapiCase.createdAt,
    thumbnail: thumbnailUrl.startsWith('http') ? thumbnailUrl : `${STRAPI_URL}${thumbnailUrl}`,
    content: strapiCase.content,
  };
}

/**
 * Strapi APIへのfetchラッパー
 */
async function fetchAPI<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (API_TOKEN) {
    headers['Authorization'] = `Bearer ${API_TOKEN}`;
  }

  const url = `${STRAPI_URL}/api${path}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
      // 開発環境ではキャッシュなし、本番環境では適宜調整
      cache: options.cache || 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Strapi API Error (${url}):`, error);
    throw error;
  }
}

/**
 * すべてのCaseを取得
 */
export async function getAllCases(): Promise<Case[]> {
  try {
    const response = await fetchAPI<{ data: StrapiCase[] }>(
      '/cases?populate=thumbnail&sort=publishedAt:desc'
    );

    if (!response.data) {
      return [];
    }

    return response.data.map(transformCase);
  } catch (error) {
    console.error('Failed to fetch cases:', error);
    // フォールバック: 空配列を返す
    return [];
  }
}

/**
 * IDでCaseを取得
 */
export async function getCaseById(id: string): Promise<Case | undefined> {
  try {
    const response = await fetchAPI<{ data: StrapiCase }>(
      `/cases/${id}?populate=thumbnail`
    );

    if (!response.data) {
      return undefined;
    }

    return transformCase(response.data);
  } catch (error) {
    console.error(`Failed to fetch case ${id}:`, error);
    return undefined;
  }
}

/**
 * タグでフィルタリングしてCaseを取得
 */
export async function getCasesByTag(tag: string): Promise<Case[]> {
  try {
    // Strapiのフィルター構文: filters[tags][$contains]=tag
    const response = await fetchAPI<{ data: StrapiCase[] }>(
      `/cases?populate=thumbnail&filters[tags][$contains]=${encodeURIComponent(tag)}&sort=publishedAt:desc`
    );

    if (!response.data) {
      return [];
    }

    return response.data.map(transformCase);
  } catch (error) {
    console.error(`Failed to fetch cases by tag ${tag}:`, error);
    return [];
  }
}

/**
 * すべてのタグを取得（重複なし）
 */
export async function getAllTags(): Promise<string[]> {
  try {
    const cases = await getAllCases();
    const tagSet = new Set<string>();

    cases.forEach(c => {
      c.tags.forEach(tag => tagSet.add(tag));
    });

    return Array.from(tagSet).sort();
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

/**
 * タグと記事数のペアを取得
 */
export async function getTagWithCount(): Promise<{ tag: string; count: number }[]> {
  try {
    const cases = await getAllCases();
    const tagCount = new Map<string, number>();

    cases.forEach(c => {
      c.tags.forEach(tag => {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      });
    });

    return Array.from(tagCount.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Failed to fetch tag counts:', error);
    return [];
  }
}

/**
 * 関連するCaseを取得（タグの共通度で判定）
 */
export async function getRelatedCases(currentCaseId: string, limit: number = 2): Promise<Case[]> {
  try {
    const [currentCase, allCases] = await Promise.all([
      getCaseById(currentCaseId),
      getAllCases()
    ]);

    if (!currentCase) return [];

    // タグが共通している記事を優先的に取得
    const related = allCases
      .filter(c => c.id !== currentCaseId)
      .map(c => ({
        case: c,
        score: c.tags.filter(tag => currentCase.tags.includes(tag)).length
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.case);

    return related;
  } catch (error) {
    console.error(`Failed to fetch related cases for ${currentCaseId}:`, error);
    return [];
  }
}
