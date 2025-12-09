# Next.js + Strapi CMS Project

このプロジェクトは、Next.js（フロントエンド）とStrapi（ヘッドレスCMS）を組み合わせた構成です。

## プロジェクト構成

```
/
├── app/                    # Next.jsアプリケーション
├── documents/              # プロジェクトドキュメント
├── docker-compose.yml      # Docker構成
├── .env.example            # 環境変数テンプレート
├── strapi/                 # Strapiデータ（自動生成）
├── postgres-data/          # PostgreSQLデータ（自動生成）
└── uploads/                # アップロードされた画像（自動生成）
```

## 必要な環境

- Docker Desktop
- Node.js 18以上（Next.js開発用）
- Bun（Next.jsのパッケージマネージャー）

## セットアップ手順

### 1. 環境変数の設定

```bash
# ルートディレクトリで環境変数ファイルを作成
cp .env.example .env
```

`.env`ファイルを開いて、以下のシークレットキーを生成・設定してください：

```bash
# ランダムな文字列を生成（macOS/Linux）
openssl rand -base64 32
```

### 2. Docker環境の起動

```bash
# Dockerコンテナをバックグラウンドで起動
docker compose up -d

# ログを確認
docker compose logs -f
```

以下のサービスが起動します：
- **Strapi CMS**: http://localhost:1337
- **PostgreSQL**: localhost:5432

### 3. Strapiの初期設定

1. ブラウザで http://localhost:1337/admin にアクセス
2. 管理者アカウントを作成
3. コンテンツタイプを作成（詳細は`documents/strapi-setup.md`参照）

### 4. Next.jsアプリケーションの起動

```bash
cd app

# 環境変数ファイルを作成
cp .env.local.example .env.local

# 依存関係のインストール
bun install

# 開発サーバーを起動
bun dev
```

Next.jsアプリケーションが http://localhost:3000 で起動します。

## よく使うコマンド

### Docker関連

```bash
# コンテナの起動
docker compose up -d

# コンテナの停止
docker compose down

# コンテナの再起動
docker compose restart

# ログの確認
docker compose logs -f strapi
docker compose logs -f postgres

# コンテナの状態確認
docker compose ps

# 完全にクリーンアップ（データも削除）
docker compose down -v
```

### Next.js関連

```bash
cd app

# 開発サーバー起動
bun dev

# ビルド
bun build

# 本番サーバー起動
bun start

# Lint
bun lint
```

## トラブルシューティング

### Strapiが起動しない場合

```bash
# ログを確認
docker compose logs strapi

# データをクリーンアップして再起動
docker compose down -v
docker compose up -d
```

### PostgreSQLへの接続エラー

1. `.env`ファイルの設定を確認
2. PostgreSQLコンテナが起動しているか確認：
   ```bash
   docker compose ps
   ```

### ポートが既に使用されている場合

```bash
# ポート1337を使用しているプロセスを確認
lsof -i :1337

# ポート5432を使用しているプロセスを確認
lsof -i :5432
```

## ディレクトリ詳細

### `/app`
Next.jsアプリケーションのディレクトリです。詳細は`app/README.md`を参照してください。

### `/documents`
プロジェクトのドキュメントが格納されています：
- `候補.md` - CMS選定時の候補リスト
- `strapi-setup.md` - Strapiのセットアップガイド

### `/strapi`
Strapiの設定ファイルやカスタムコードが保存されます（Dockerで自動生成）。

### `/postgres-data`
PostgreSQLのデータが保存されます（Dockerで自動生成）。

### `/uploads`
Strapiにアップロードされた画像やファイルが保存されます（Dockerで自動生成）。

## 本番環境へのデプロイ

本番環境では以下の変更を推奨します：

1. **環境変数の変更**
   - `NODE_ENV=production`
   - セキュアなパスワード・シークレットキーの使用

2. **ストレージの変更**
   - ローカルストレージからクラウドストレージへ移行（AWS S3, Cloudinaryなど）

3. **データベースのバックアップ**
   - PostgreSQLの定期バックアップ設定

4. **HTTPS化**
   - リバースプロキシ（Nginx, Caddy）の使用

## 関連リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## ライセンス

MIT
