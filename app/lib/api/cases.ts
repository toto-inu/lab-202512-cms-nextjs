import { client } from '@/lib/microcms';

const ENDPOINT = 'cases' as const;

// すべての事例を取得
export async function getAllCases(queries?: { limit?: number; offset?: number; filters?: string }) {
  const data = await client.getList({
    endpoint: ENDPOINT,
    queries: {
      limit: 100,
      ...queries,
    },
  });
  return data.contents;
}

// IDで事例を取得
export async function getCaseById(id: string) {
  const data = await client.getListDetail({
    endpoint: ENDPOINT,
    contentId: id,
  });
  return data;
}

// タグで事例を取得
export async function getCasesByTag(tag: string) {
  const data = await client.getList({
    endpoint: ENDPOINT,
    queries: {
      filters: `tags[contains]${tag}`,
      limit: 100,
    },
  });
  return data.contents;
}

// すべてのタグを取得
export async function getAllTags(): Promise<string[]> {
  const cases = await getAllCases();
  const tagSet = new Set<string>();
  cases.forEach((c) => {
    if (c.tags) {
      c.tags.split(',').forEach((tag) => tagSet.add(tag.trim()));
    }
  });
  return Array.from(tagSet).sort();
}

// タグとカウントを取得
export async function getTagWithCount(): Promise<{ tag: string; count: number }[]> {
  const cases = await getAllCases();
  const tagCount = new Map<string, number>();

  cases.forEach((c) => {
    if (c.tags) {
      c.tags.split(',').forEach((tag) => {
        const trimmedTag = tag.trim();
        tagCount.set(trimmedTag, (tagCount.get(trimmedTag) || 0) + 1);
      });
    }
  });

  return Array.from(tagCount.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

// 関連する事例を取得
export async function getRelatedCases(
  currentCaseId: string,
  limit: number = 2
) {
  const currentCase = await getCaseById(currentCaseId);
  const allCases = await getAllCases();

  const currentTags = currentCase.tags ? currentCase.tags.split(',').map(t => t.trim()) : [];

  // タグが共通している事例を優先的に取得
  const related = allCases
    .filter((c) => c.id !== currentCaseId)
    .map((c) => {
      const cTags = c.tags ? c.tags.split(',').map(t => t.trim()) : [];
      const score = cTags.filter((tag) => currentTags.includes(tag)).length;
      return { case: c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.case);

  return related;
}
