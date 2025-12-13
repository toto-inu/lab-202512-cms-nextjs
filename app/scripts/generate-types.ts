import fs from 'fs/promises';
import path from 'path';

const SCHEMAS_DIR = path.join(process.cwd(), 'microcms-schemas');
const OUTPUT_FILE = path.join(process.cwd(), 'types', 'microcms-generated.ts');

type FieldKind =
  | 'text'
  | 'textArea'
  | 'richEditor'
  | 'media'
  | 'number'
  | 'boolean'
  | 'select'
  | 'date'
  | 'relation'
  | 'relationList'
  | 'custom'
  | 'repeater';

interface Field {
  fieldId: string;
  name: string;
  kind: FieldKind;
  required: boolean;
  multipleSelect?: boolean;
  textSizeLimitValidation?: number;
}

interface Schema {
  id: string;
  name: string;
  endpoint: string;
  kind: 'list' | 'object';
  fields: Field[];
}

/**
 * フィールドの kind から TypeScript の型を生成
 */
function fieldKindToTypeScript(field: Field): string {
  switch (field.kind) {
    case 'text':
    case 'textArea':
    case 'richEditor':
    case 'select':
      return 'string';
    case 'media':
      return 'MicroCMSImage';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'date':
      return 'string';
    case 'relation':
      // リレーション先の型を推測（ここでは any）
      return 'any';
    case 'relationList':
      return 'any[]';
    case 'custom':
    case 'repeater':
      return 'any';
    default:
      return 'any';
  }
}

/**
 * スキーマから TypeScript 型定義を生成
 */
function generateTypeDefinition(schema: Schema): string {
  const interfaceName = schema.id.charAt(0).toUpperCase() + schema.id.slice(1);

  let typeDef = `// ${schema.name} (${schema.kind})\n`;
  typeDef += `export interface ${interfaceName} {\n`;

  for (const field of schema.fields) {
    const fieldType = fieldKindToTypeScript(field);
    const optional = field.required ? '' : '?';
    typeDef += `  ${field.fieldId}${optional}: ${fieldType};\n`;
  }

  typeDef += '}\n\n';

  // MicroCMSDate を含むレスポンス型
  typeDef += `export interface ${interfaceName}Response extends ${interfaceName}, MicroCMSDate {}\n\n`;

  // リスト型の場合はリストレスポンス型も生成
  if (schema.kind === 'list') {
    typeDef += `export interface ${interfaceName}ListResponse {\n`;
    typeDef += `  contents: ${interfaceName}Response[];\n`;
    typeDef += `  totalCount: number;\n`;
    typeDef += `  offset: number;\n`;
    typeDef += `  limit: number;\n`;
    typeDef += '}\n\n';
  }

  return typeDef;
}

/**
 * メイン処理
 */
async function main() {
  console.log('Starting type generation...\n');

  // スキーマファイル一覧を取得
  const schemaFiles = await fs.readdir(SCHEMAS_DIR);
  const jsonFiles = schemaFiles.filter((file) => file.endsWith('.json'));

  if (jsonFiles.length === 0) {
    console.error('✗ No schema files found in', SCHEMAS_DIR);
    process.exit(1);
  }

  // 型定義の開始部分
  let output = `// このファイルは自動生成されています。手動で編集しないでください。\n`;
  output += `// Generated at: ${new Date().toISOString()}\n\n`;
  output += `import type { MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';\n\n`;

  // 各スキーマファイルから型定義を生成
  for (const file of jsonFiles) {
    const filePath = path.join(SCHEMAS_DIR, file);
    const schemaJson = await fs.readFile(filePath, 'utf-8');
    const schema: Schema = JSON.parse(schemaJson);

    console.log(`Generating types for ${schema.name} (${schema.endpoint})...`);
    output += generateTypeDefinition(schema);
  }

  // 型定義ファイルを出力
  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, output, 'utf-8');

  console.log(`\n✓ Types generated successfully at ${OUTPUT_FILE}`);
}

main();
