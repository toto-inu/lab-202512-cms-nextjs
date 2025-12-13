import { client } from '@/lib/microcms';

const ENDPOINT = 'blog' as const;

// すべてのブログ記事を取得
export async function getAllBlogPosts(queries?: { limit?: number; offset?: number; filters?: string }) {
  const data = await client.getList({
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
export async function getBlogPostById(id: string) {
  const data = await client.getListDetail({
    endpoint: ENDPOINT,
    contentId: id,
  });
  return data;
}

// タグでブログ記事を取得
export async function getBlogPostsByTag(tag: string) {
  const data = await client.getList({
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
export async function getRecentBlogPosts(limit: number = 5) {
  const data = await client.getList({
    endpoint: ENDPOINT,
    queries: {
      limit,
      orders: '-publishedAt',
    },
  });
  return data.contents;
}
