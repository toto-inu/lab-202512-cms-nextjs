import { client } from '@/lib/microcms';

const ENDPOINT = 'company' as const;

// 会社情報を取得
export async function getCompanyInfo() {
  const data = await client.getObject({
    endpoint: ENDPOINT,
  });
  return data;
}
