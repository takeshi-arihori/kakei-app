# CSS設計ガイド

## カラー管理の原則

**「`globals.css` に色コード（HEX値）を集約し、`tailwind.config.ts` で名前をつける」**

色がコード内に散らばると（`emerald-500` だったり `green-400` だったり）、デザインの修正が大変になり、統一感も損なわれます。

この設計を行えば、あとで「テーマカラーを青に変えたい」と思った時も、`globals.css` の1行を変えるだけでアプリ全体の色が変わります。

## カラー定義

### `app/globals.css` (色の定義書)

ここを「色の唯一の定義場所（Source of Truth）」にします。
具体的なカラーコードはここにしか書きません。

```css
@import "tailwindcss";

@layer base {
  :root {
    /* --- ベースカラー --- */
    --background: #ffffff; /* 全体の背景色 */
    --foreground: #1f2937; /* 基本の文字色 (Gray-800) */

    /* --- ブランドカラー (メインの緑) --- */
    /* 変更したいときはここだけ変えればOK */
    --primary: #13ec80; /* Emerald-400: ボタン、アイコンなど */
    --primary-hover: #0fd673; /* Emerald-500: ホバー時の濃い色 */
    --primary-light: #d1fae5; /* Emerald-100: 薄い背景用 */

    /* --- テキストカラー --- */
    --text-main: #111814; /* 見出し、本文 (Gray-800) */
    --text-sub: #637588; /* 補足、日付 (Gray-500) */
    --text-inverse: #ffffff; /* ボタン内の文字など */

    /* --- 機能色 --- */
    --border: #e5e7eb; /* 枠線 (Gray-200) */
    --input: #f9fafb; /* 入力フォーム背景 (Gray-50) */
    --danger: #ef4444; /* エラー、削除ボタン (Red-500) */
  }

  .dark {
    /* --- ダークモード専用カラー --- */
    --background: #102219; /* ダークモードの背景色 */
    --foreground: #ffffff; /* ダークモードの文字色 */

    /* ブランドカラーはダークモードでも同じ */
    --primary: #13ec80;
    --primary-hover: #0fd673;
    --primary-light: #1a3d2e;

    /* --- テキストカラー（ダークモード） --- */
    --text-main: #ffffff;
    --text-sub: #9ca3af; /* Gray-400 */
    --text-inverse: #111814;

    /* --- 機能色（ダークモード） --- */
    --border: #374151; /* Gray-700 */
    --input: #1f2937; /* Gray-800 */
    --danger: #f87171; /* Red-400 */
  }
}
```

### `tailwind.config.ts` (色の登録)

CSSで作った変数を、Tailwindのクラス名（`bg-primary` など）として使えるように登録します。

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  // ダークモードはクラス切り替え方式
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // globals.css の変数を紐付け
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)", // class="bg-primary"
          hover: "var(--primary-hover)", // class="hover:bg-primary-hover"
          light: "var(--primary-light)", // class="bg-primary-light"
        },

        text: {
          main: "var(--text-main)", // class="text-text-main"
          sub: "var(--text-sub)", // class="text-text-sub"
          inverse: "var(--text-inverse)",
        },

        border: "var(--border)",
        input: "var(--input)",
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};

export default config;
```

## 実際の使い方

これで、コード内から具体的な色名（`emerald-400` など）を排除できます。
役割に応じた名前を使うようになるため、コードの意味も分かりやすくなります。

### 良い例（意味で指定している）

```tsx
<button className="bg-primary text-text-inverse hover:bg-primary-hover">
  保存する
</button>

<p className="text-text-sub">2024/02/06</p>
```

### 悪い例（具体的な色を指定してしまっている）

```tsx
// ❌ 変更時に全箇所を書き換える必要がある
<button className="bg-emerald-400 text-white hover:bg-emerald-500">
  保存する
</button>
```

## ダークモード対応

### HTMLタグに`dark`クラスを追加

```tsx
// ライトモード（デフォルト）
<html lang="ja" className="light">

// ダークモード
<html lang="ja" className="dark">
```

### コンポーネントでの使用例

```tsx
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-text-main dark:text-white">タイトル</h1>
  <p className="text-text-sub dark:text-gray-400">説明文</p>
</div>
```

## レスポンシブデザイン

### Tailwind CSS のブレークポイント

- `sm`: 640px以上
- `md`: 768px以上
- `lg`: 1024px以上
- `xl`: 1280px以上
- `2xl`: 1536px以上

### 使用例

```tsx
<div className="p-4 sm:p-6 md:p-8">
  <h1 className="text-[28px] sm:text-[36px] md:text-[42px]">
    ふたりの家計簿を
  </h1>
  <div className="w-full max-w-md lg:max-w-lg">
    {/* コンテンツ */}
  </div>
</div>
```

## Tech Lead の補足

この設計にしておくと、例えば将来「やっぱりアプリのテーマカラーをピンクにしたい！」となった場合でも、`globals.css` の `--primary` 関連のHEXコードを書き換えるだけで、全ページのボタンやアイコンの色が一瞬で変わります。

### カラー変更の例

```css
/* Before */
--primary: #13ec80; /* 緑 */

/* After */
--primary: #ec4899; /* ピンク */
```

この1行の変更だけで、アプリ全体のボタン、アイコン、リンクの色が変わります。
