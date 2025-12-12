import { client } from '@/lib/microcms';
import type {
  BlogPostResponse,
  BlogPostListResponse,
  BlogQueries
} from '@/types/microcms';

const ENDPOINT = 'blog';

// すべてのブログ記事を取得
export async function getAllBlogPosts(queries?: BlogQueries): Promise<BlogPostResponse[]> {
  const data = await client.get<BlogPostListResponse>({
    endpoint: ENDPOINT,
    queries: {
      limit: 100,
      orders: '-publishedAt',
      ...queries,
    },
  });
  return data.contents;
}

// IDでブログ記事を取得
export async function getBlogPostById(id: string): Promise<BlogPostResponse> {
  const data = await client.get<BlogPostResponse>({
    endpoint: ENDPOINT,
    contentId: id,
  });
  return data;
}

// タグでブログ記事を取得
export async function getBlogPostsByTag(tag: string): Promise<BlogPostResponse[]> {
  const data = await client.get<BlogPostListResponse>({
    endpoint: ENDPOINT,
    queries: {
      filters: `tags[contains]${tag}`,
      limit: 100,
      orders: '-publishedAt',
    },
  });
  return data.contents;
}

// すべてのタグを取得
export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.split(',').forEach((tag) => tagSet.add(tag.trim()));
    }
  });
  return Array.from(tagSet).sort();
}

// 最新のブログ記事を取得
export async function getRecentBlogPosts(limit: number = 5): Promise<BlogPostResponse[]> {
  const data = await client.get<BlogPostListResponse>({
    endpoint: ENDPOINT,
    queries: {
      limit,
      orders: '-publishedAt',
    },
  });
  return data.contents;
}
