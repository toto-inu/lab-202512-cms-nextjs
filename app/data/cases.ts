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

export const cases: Case[] = [
  {
    id: 'ecommerce-platform',
    title: 'ECプラットフォームのフロントエンド刷新',
    description: 'Next.js と TypeScript を活用した、モダンなECプラットフォームのフロントエンド開発',
    client: '大手アパレルメーカー様',
    category: 'Webシステム開発',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    publishedAt: '2024-10-15',
    thumbnail: '/images/case-ecommerce.jpg',
    content: `# ECプラットフォームのフロントエンド刷新

## プロジェクト概要

大手アパレルメーカー様のECプラットフォームのフロントエンド部分を、Next.js を使用して完全に刷新しました。

## 課題

- レガシーなフロントエンド技術による保守性の低下
- ページ読み込み速度の遅さによるコンバージョン率の低下
- スマートフォン対応の不十分さ
- SEO対策の不足

## 実施内容

### 1. アーキテクチャ設計

Next.js 14 の App Router を採用し、Server Components と Client Components を適切に使い分けることで、
パフォーマンスとユーザー体験を最適化しました。

### 2. UI/UX の改善

- Tailwind CSS を使用したレスポンシブデザインの実装
- アクセシビリティを考慮したコンポーネント設計
- ページ遷移アニメーションの実装

### 3. パフォーマンス最適化

- 画像の最適化（Next.js Image コンポーネント活用）
- コード分割による初期ロードの高速化
- ISR（Incremental Static Regeneration）の活用

### 4. SEO対策

- メタデータの最適化
- 構造化データの実装
- サイトマップの自動生成

## 成果

- **ページ読み込み速度**: 70% 改善
- **コンバージョン率**: 45% 向上
- **モバイルからの購入**: 2倍に増加
- **開発生産性**: 開発速度が 50% 向上

## 使用技術

- Next.js 14
- TypeScript
- React 18
- Tailwind CSS
- Vercel

## プロジェクト期間

6ヶ月（要件定義から本番リリースまで）

## お客様の声

> 「Next.js を使った新しいフロントエンドは、驚くほど高速で、
> ユーザーからの評価も大幅に向上しました。
> StellarCreate のチームは技術力が高く、
> 私たちのビジネス要件を深く理解して実装してくれました。」
>
> — プロジェクトマネージャー様
`
  },
  {
    id: 'ai-chatbot',
    title: 'カスタマーサポート向けAIチャットボット開発',
    description: 'GPT-4を活用した高度なカスタマーサポートチャットボットの開発',
    client: 'SaaSスタートアップ様',
    category: 'AIソリューション',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'PostgreSQL'],
    publishedAt: '2024-09-20',
    thumbnail: '/images/case-ai-chatbot.jpg',
    content: `# カスタマーサポート向けAIチャットボット開発

## プロジェクト概要

SaaSプロダクトのカスタマーサポートを効率化するため、
GPT-4を活用した高度なAIチャットボットを開発しました。

## 課題

- カスタマーサポートチームの対応工数の増加
- 夜間・休日の問い合わせ対応の遅延
- 同様の質問への繰り返し対応
- サポート品質のばらつき

## 実施内容

### 1. AIモデルの選定とカスタマイズ

- OpenAI GPT-4 の採用
- プロダクト固有の知識ベースの構築
- RAG（Retrieval-Augmented Generation）の実装

### 2. フロントエンド開発

- Next.js を使用したチャットUIの実装
- リアルタイムストリーミングレスポンスの実装
- 会話履歴の管理

### 3. バックエンド開発

- API エンドポイントの設計・実装
- セキュリティ対策（レート制限、認証など）
- ログ収集と分析基盤の構築

### 4. 継続的な改善

- ユーザーフィードバックの収集
- 回答精度の継続的な改善
- 新機能の追加

## 成果

- **問い合わせ対応時間**: 80% 削減
- **カスタマー満足度**: 15% 向上
- **サポートコスト**: 60% 削減
- **24時間対応**: 実現

## 使用技術

- Next.js 14
- TypeScript
- OpenAI API (GPT-4)
- PostgreSQL
- Vercel

## プロジェクト期間

4ヶ月

## お客様の声

> 「AIチャットボットの導入により、
> カスタマーサポートの生産性が劇的に向上しました。
> 24時間365日対応が可能になり、
> お客様からの評価も非常に高いです。」
>
> — CTO様
`
  },
  {
    id: 'corporate-website',
    title: '大手企業コーポレートサイトのリニューアル',
    description: 'Next.js と Headless CMS を活用した、大規模コーポレートサイトの構築',
    client: '大手製造業様',
    category: 'Webシステム開発',
    tags: ['Next.js', 'TypeScript', 'Headless CMS', 'Vercel'],
    publishedAt: '2024-08-10',
    thumbnail: '/images/case-corporate.jpg',
    content: `# 大手企業コーポレートサイトのリニューアル

## プロジェクト概要

大手製造業のコーポレートサイトを、Next.js と Headless CMS を活用して
完全にリニューアルしました。

## 課題

- レガシーCMSによる更新作業の煩雑さ
- グローバル展開における多言語対応の困難さ
- モバイル対応の不足
- セキュリティ上の懸念

## 実施内容

### 1. Headless CMS の導入

- コンテンツ管理の効率化
- マルチチャネル対応
- 承認フローの実装

### 2. 多言語対応

- 5言語（日本語、英語、中国語、韓国語、スペイン語）対応
- 地域ごとのコンテンツ出し分け
- 自動翻訳機能の実装

### 3. パフォーマンス最適化

- SSG（Static Site Generation）の活用
- CDN の最適活用
- 画像の自動最適化

### 4. セキュリティ強化

- WAF の導入
- セキュリティヘッダーの最適化
- 定期的な脆弱性診断

## 成果

- **ページ更新時間**: 90% 削減
- **サイト表示速度**: 75% 改善
- **グローバルアクセス**: 3倍に増加
- **管理工数**: 70% 削減

## 使用技術

- Next.js 14
- TypeScript
- Contentful (Headless CMS)
- Vercel
- Cloudflare

## プロジェクト期間

8ヶ月

## お客様の声

> 「新しいコーポレートサイトは、
> 更新作業が格段に楽になり、
> グローバル展開もスムーズに進められるようになりました。
> StellarCreate の提案力と実行力に感謝しています。」
>
> — マーケティング部長様
`
  }
];

export function getCaseById(id: string): Case | undefined {
  return cases.find(c => c.id === id);
}

export function getAllCases(): Case[] {
  return cases;
}

export function getRelatedCases(currentCaseId: string, limit: number = 2): Case[] {
  const currentCase = getCaseById(currentCaseId);
  if (!currentCase) return [];

  // タグが共通している事例を優先的に取得
  const related = cases
    .filter(c => c.id !== currentCaseId)
    .map(c => ({
      case: c,
      score: c.tags.filter(tag => currentCase.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.case);

  return related;
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  cases.forEach(c => {
    c.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getCasesByTag(tag: string): Case[] {
  return cases.filter(c => c.tags.includes(tag));
}

export function getTagWithCount(): { tag: string; count: number }[] {
  const tagCount = new Map<string, number>();

  cases.forEach(c => {
    c.tags.forEach(tag => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCount.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
