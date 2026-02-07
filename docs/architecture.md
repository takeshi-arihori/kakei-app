# Architecture - 家計アプリ

MVP開発における「実用的なDDD（Pragmatic DDD）」と「機能単位の構成（Vertical Slice Architecture）」を採用。

## ディレクトリ構造

```
src/
├── app/                     # Next.js App Router
│   ├── (auth)/              # 認証関連ルート (Group Route)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/         # ログイン後のメイン機能 (Sidebar/Header共有)
│   │   ├── layout.tsx       # Dashboard Layout (Auth Guard含む)
│   │   ├── page.tsx         # ダッシュボード (サマリー表示)
│   │   ├── transactions/    # 支出管理機能
│   │   │   └── page.tsx
│   │   ├── settlements/     # 精算機能
│   │   │   └── page.tsx
│   │   └── settings/        # 設定 (プロファイル・家計)
│   │       └── page.tsx
│   ├── api/                 # Route Handlers
│   │   └── export/          # CSVダウンロード用など
│   ├── layout.tsx           # Root Layout
│   └── globals.css
│
├── components/
│   ├── ui/                  # 汎用UI (Button, Input, Card - shadcn/ui想定)
│   └── layouts/             # アプリケーション固有のレイアウト部品 (Sidebar, Header)
│
├── features/                # ★ 機能単位の分割 (Vertical Slices)
│   ├── auth/                # 認証機能
│   │   ├── components/      # AuthFormなど
│   │   └── actions.ts       # Server Actions (Login, Logout)
│   │
│   ├── household/           # 家計管理・招待機能
│   │   ├── components/
│   │   └── actions.ts       # createHousehold, joinHousehold
│   │
│   ├── transactions/        # 支出記録機能 (CRUD中心)
│   │   ├── components/
│   │   │   ├── transaction-form.tsx
│   │   │   ├── transaction-list.tsx
│   │   │   └── filter-bar.tsx
│   │   ├── schemas.ts       # Zod Schema (Form Validation)
│   │   ├── actions.ts       # Server Actions (DB Insert/Update)
│   │   └── utils.ts         # 通貨表示フォーマットなどのViewロジック
│   │
│   ├── settlement/          # ★ 精算機能 (DDD戦術的設計を適用)
│   │   ├── domain/          # ドメイン層: 外部依存のない純粋なロジック
│   │   │   ├── calculator.ts    # 割り勘計算アルゴリズム (Core Logic)
│   │   │   ├── rules.ts         # 3つの財布・配分ルールの定義
│   │   │   └── calculator.test.ts # ロジックの単体テスト
│   │   ├── components/      # UI: 精算プレビュー、履歴表示
│   │   └── actions.ts       # Application Service: 計算結果をDBに永続化
│   │
│   └── ocr/                 # レシートOCR機能
│       ├── components/
│       │   └── receipt-camera.tsx
│       └── worker/          # Tesseract.js Web Worker (Client-side)
│
├── lib/
│   ├── supabase/
│   │   ├── server.ts        # Server Component / Action 用クライアント
│   │   └── client.ts        # Client Component 用クライアント
│   ├── database.types.ts    # ★ Supabase CLIで自動生成 (手動編集禁止)
│   └── utils.ts             # 共通ユーティリティ (cn, tailwind-merge)
│
└── hooks/                   # アプリケーション全体のHooks
    └── use-toast.ts         # 通知用
```

## 設計のポイント

### 1. `features/settlement/domain/` の分離

- **純粋な TypeScript (Plain Old TypeScript Objects)** で記述
- 「Supabase」や「React」のことを知らない
- 「Aさんが3000円、Bさんが5000円払った時の精算額は？」といった複雑なケースのテストが容易
- **ドメインロジックをフレームワークから独立させる**

### 2. `features/*/actions.ts`

- Next.js の **Server Actions** をここに集約
- クリーンアーキテクチャでいう「Controller」と「Gateway/Repository」を兼ねる
- 直接 `supabase-js` を呼んでOK（MVPのスピード感を優先）

### 3. `(dashboard)` Group Route

- 認証が必要なページをグループ化
- `layout.tsx` で一括して「ログインしていなければリダイレクト」という処理（Auth Guard）を記述
- レイアウト（Sidebar/Header）を共有

### 4. `(auth)` Group Route

- 認証関連のページをグループ化
- ログイン済みの場合はダッシュボードにリダイレクト

## アーキテクチャ原則

### Vertical Slice Architecture

- 機能ごとに縦割りで実装（`features/`）
- 各機能は独立性が高く、必要な要素（UI、ロジック、データアクセス）を内包
- 機能追加時の影響範囲を最小化

### Pragmatic DDD

- **精算機能のみDDD戦術的設計を適用**（`settlement/domain/`）
- ビジネスロジックが複雑な部分のみドメイン層を分離
- シンプルなCRUD（transactions）は直接的な実装でOK

### Layer Separation

```
UI Layer (React Components)
    ↓
Application Layer (Server Actions)
    ↓
Domain Layer (Pure TypeScript) ← 精算機能のみ
    ↓
Infrastructure Layer (Supabase Client)
```

## ファイル命名規約

- **Page**: `page.tsx`
- **Layout**: `layout.tsx`
- **Component**: `kebab-case.tsx` (例: `transaction-form.tsx`)
- **Actions**: `actions.ts`
- **Schemas**: `schemas.ts`
- **Utils**: `utils.ts`
- **Types**: `types.ts`

## テスト戦略

- **ドメインロジック**: `*.test.ts` (Vitest/Jest)
- **コンポーネント**: Testing Library (必要に応じて)
- **E2E**: Playwright (MVP後)

## 実装優先度

1. 認証機能 (`features/auth/`)
2. 家計管理・招待 (`features/household/`)
3. 支出記録 (`features/transactions/`)
4. 精算機能 (`features/settlement/`)
5. レシートOCR (`features/ocr/`)
