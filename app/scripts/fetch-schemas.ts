import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// .env.local を読み込み
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

// 環境変数から設定を読み込み
const SERVICE_ID = process.env.MICROCMS_SERVICE_DOMAIN;
const MANAGEMENT_API_KEY = process.env.MICROCMS_MANAGEMENT_API_KEY;

if (!SERVICE_ID) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!MANAGEMENT_API_KEY) {
  throw new Error('MICROCMS_MANAGEMENT_API_KEY is required');
}

const BASE_URL = `https://${SERVICE_ID}.microcms-management.io/api/v1`;
const SCHEMAS_DIR = path.join(process.cwd(), 'microcms-schemas');

// API エンドポイント一覧とその種類
const ENDPOINTS = [
  { endpoint: 'blog', kind: 'list', name: 'ブログ' },
  { endpoint: 'cases', kind: 'list', name: '事例' },
  { endpoint: 'company', kind: 'object', name: '会社情報' },
] as const;

/**
 * Management API からスキーマを取得
 */
async function fetchSchema(endpoint: string) {
  const url = `${BASE_URL}/apis/${endpoint}`;
  console.log(`Fetching schema for ${endpoint}...`);

  const response = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': MANAGEMENT_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch schema for ${endpoint}: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * スキーマをファイルに保存
 */
async function saveSchema(
  endpointInfo: { endpoint: string; kind: string; name: string },
  apiFieldsResponse: any
) {
  const filePath = path.join(SCHEMAS_DIR, `${endpointInfo.endpoint}.json`);

  // Management APIのレスポンスにメタ情報を追加
  const schemaWithMetadata = {
    id: endpointInfo.endpoint,
    name: endpointInfo.name,
    endpoint: endpointInfo.endpoint,
    kind: endpointInfo.kind,
    fields: apiFieldsResponse.apiFields || [],
  };

  await fs.writeFile(filePath, JSON.stringify(schemaWithMetadata, null, 2), 'utf-8');
  console.log(`✓ Saved schema to ${filePath}`);
}

/**
 * メイン処理
 */
async function main() {
  console.log('Starting schema fetch...\n');

  // スキーマディレクトリを作成
  await fs.mkdir(SCHEMAS_DIR, { recursive: true });

  // 各エンドポイントのスキーマを取得
  for (const endpointInfo of ENDPOINTS) {
    try {
      const schema = await fetchSchema(endpointInfo.endpoint);
      await saveSchema(endpointInfo, schema);
    } catch (error) {
      console.error(`✗ Error fetching schema for ${endpointInfo.endpoint}:`, error);
      process.exit(1);
    }
  }

  console.log('\n✓ All schemas fetched successfully!');
}

main();
