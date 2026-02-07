# セットアップガイド

## 前提条件

- Node.js 24.7.0以上
- npm
- Supabaseアカウント

## インストール

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
```

## 環境変数

`.env.local` ファイルに以下を設定:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く

## ビルド

```bash
npm run build
npm run start
```

## プロジェクト構造

```
kakei-app/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (auth)/            # 認証関連ルート
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/           # ダッシュボード（Auth Guard付き）
│   │   ├── layout.tsx         # Auth Guard
│   │   ├── page.tsx           # ダッシュボード
│   │   ├── transactions/      # 支出管理
│   │   ├── settlements/       # 精算管理
│   │   └── settings/          # 設定
│   ├── api/                   # API Routes
│   ├── layout.tsx             # ルートレイアウト
│   ├── page.tsx               # ウェルカム画面
│   └── globals.css
│   ├── components/                # UIコンポーネント
│   │   ├── ui/                    # 汎用UI部品（shadcn/ui想定）
│   │   └── layouts/               # レイアウト部品
│   ├── features/                  # 機能単位の実装（Vertical Slices）
│   │   ├── auth/                  # 認証機能
│   │   │   ├── actions.ts
│   │   │   └── components/
│   │   ├── household/             # 家計管理・招待
│   │   │   ├── actions.ts
│   │   │   └── components/
│   │   ├── transactions/          # 支出記録（CRUD）
│   │   │   ├── actions.ts
│   │   ├── schemas.ts
│   │   ├── utils.ts
│   │   │   └── components/
│   │   ├── settlement/            # 精算機能（DDD適用）
│   │   │   ├── domain/            # ドメインロジック（Pure TypeScript）
│   │   │   │   ├── calculator.ts
│   │   │   │   └── rules.ts
│   │   │   ├── actions.ts
│   │   │   └── components/
│   │   └── ocr/                   # レシートOCR
│   │       ├── components/
│   │       └── worker/
│   ├── lib/                       # 共通ライブラリ
│   │   ├── supabase/
│   │   │   ├── server.ts          # Server Component/Action用
│   │   │   └── client.ts          # Client Component用
│   │   └── utils.ts               # cn, formatCurrency等
│   └── hooks/                     # カスタムフック
├── docs/                      # ドキュメント
    ├── architecture.md        # アーキテクチャ設計
    ├── requirements.md        # 要件定義書
    ├── schema.dbml            # データベーススキーマ
    └── design/                # UIモックアップ
```

## アーキテクチャの特徴

### Vertical Slice Architecture

- 機能ごとに縦割りで実装（`features/`）
- 各機能は独立性が高く、必要な要素（UI、ロジック、データアクセス）を内包
- 機能追加時の影響範囲を最小化

### Pragmatic DDD

- **精算機能のみDDD戦術的設計を適用**（`settlement/domain/`）
- ビジネスロジックが複雑な部分のみドメイン層を分離
- シンプルなCRUD（transactions）は直接的な実装でOK

### Server Actions

- `features/*/actions.ts` に集約
- クリーンアーキテクチャでいう「Controller」と「Gateway/Repository」を兼ねる
- 直接 `supabase-js` を呼んでOK（MVPのスピード感を優先）

### Auth Guard

- `(dashboard)/layout.tsx` で一括して「ログインしていなければリダイレクト」を実装
- 認証が必要なページを `(dashboard)/` にグループ化

## 技術スタック

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16.1 (React 19), TypeScript |
| Styling | Tailwind CSS v4 (dark mode support) |
| Linting | ESLint with Next.js config |
| Backend | Next.js API Routes / Server Actions |
| Database | Supabase (PostgreSQL) |
| Real-time Sync | Supabase Realtime |
| Authentication | Supabase Auth (email/password) |
| OCR | Tesseract.js (client-side) |
| Validation | Zod |
| Hosting | Vercel (frontend) + Supabase (backend) |

## 実装優先度

1. 認証機能 (`features/auth/`)
2. 家計管理・招待 (`features/household/`)
3. 支出記録 (`features/transactions/`)
4. 精算機能 (`features/settlement/`)
5. レシートOCR (`features/ocr/`)
