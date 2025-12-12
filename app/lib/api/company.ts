import { client } from '@/lib/microcms';
import type { CompanyResponse } from '@/types/microcms';

const ENDPOINT = 'company';

// 会社情報を取得
export async function getCompanyInfo(): Promise<CompanyResponse> {
  const data = await client.get<CompanyResponse>({
    endpoint: ENDPOINT,
  });
  return data;
}
