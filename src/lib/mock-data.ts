/**
 * モックデータ（開発用）
 * DB接続なしでアプリの動作確認を行うためのダミーデータ
 */

// ユーザー基本情報
export const mockProfiles = [
  {
    id: "user-a-uuid-1234",
    display_name: "山田太郎",
    avatar_url: null,
    created_at: "2024-01-15T10:00:00Z",
  },
  {
    id: "user-b-uuid-5678",
    display_name: "山田花子",
    avatar_url: null,
    created_at: "2024-01-15T10:05:00Z",
  },
];

// 家計グループ
export const mockHousehold = {
  id: "household-uuid-9999",
  name: "山田家の家計",
  invite_code: "YAMADA2024",
  created_at: "2024-01-15T10:10:00Z",
};

// 家計メンバー（中間テーブル）
export const mockHouseholdMembers = [
  {
    household_id: "household-uuid-9999",
    user_id: "user-a-uuid-1234",
    role: "ADMIN",
    joined_at: "2024-01-15T10:10:00Z",
  },
  {
    household_id: "household-uuid-9999",
    user_id: "user-b-uuid-5678",
    role: "MEMBER",
    joined_at: "2024-01-16T09:30:00Z",
  },
];

// 支出記録
export const mockTransactions = [
  // 1月の支出
  {
    id: "tx-uuid-0001",
    household_id: "household-uuid-9999",
    payer_id: "user-a-uuid-1234",
    amount: 3500,
    transaction_date: "2024-01-20",
    category: "食費",
    description: "スーパーで買い物",
    split_type: "EQUAL", // 50:50
    split_details: {
      "user-a-uuid-1234": 1750,
      "user-b-uuid-5678": 1750,
    },
    settlement_id: null, // 未精算
    created_at: "2024-01-20T18:30:00Z",
    updated_at: "2024-01-20T18:30:00Z",
  },
  {
    id: "tx-uuid-0002",
    household_id: "household-uuid-9999",
    payer_id: "user-b-uuid-5678",
    amount: 12000,
    transaction_date: "2024-01-22",
    category: "光熱費",
    description: "電気代",
    split_type: "EQUAL",
    split_details: {
      "user-a-uuid-1234": 6000,
      "user-b-uuid-5678": 6000,
    },
    settlement_id: null,
    created_at: "2024-01-22T10:00:00Z",
    updated_at: "2024-01-22T10:00:00Z",
  },
  {
    id: "tx-uuid-0003",
    household_id: "household-uuid-9999",
    payer_id: "user-a-uuid-1234",
    amount: 8000,
    transaction_date: "2024-01-25",
    category: "日用品",
    description: "洗剤、トイレットペーパー",
    split_type: "CUSTOM", // カスタム比率 60:40
    split_details: {
      "user-a-uuid-1234": 4800,
      "user-b-uuid-5678": 3200,
    },
    settlement_id: null,
    created_at: "2024-01-25T14:20:00Z",
    updated_at: "2024-01-25T14:20:00Z",
  },
  {
    id: "tx-uuid-0004",
    household_id: "household-uuid-9999",
    payer_id: "user-b-uuid-5678",
    amount: 1500,
    transaction_date: "2024-01-28",
    category: "交通費",
    description: "タクシー代",
    split_type: "PERSONAL", // 個人支出
    split_details: {
      "user-a-uuid-1234": 0,
      "user-b-uuid-5678": 1500,
    },
    settlement_id: null,
    created_at: "2024-01-28T20:15:00Z",
    updated_at: "2024-01-28T20:15:00Z",
  },
  // 2月の支出
  {
    id: "tx-uuid-0005",
    household_id: "household-uuid-9999",
    payer_id: "user-a-uuid-1234",
    amount: 4200,
    transaction_date: "2024-02-03",
    category: "食費",
    description: "週末の外食",
    split_type: "EQUAL",
    split_details: {
      "user-a-uuid-1234": 2100,
      "user-b-uuid-5678": 2100,
    },
    settlement_id: null,
    created_at: "2024-02-03T19:45:00Z",
    updated_at: "2024-02-03T19:45:00Z",
  },
  {
    id: "tx-uuid-0006",
    household_id: "household-uuid-9999",
    payer_id: "user-b-uuid-5678",
    amount: 6800,
    transaction_date: "2024-02-05",
    category: "日用品",
    description: "ドラッグストアで買い物",
    split_type: "EQUAL",
    split_details: {
      "user-a-uuid-1234": 3400,
      "user-b-uuid-5678": 3400,
    },
    settlement_id: null,
    created_at: "2024-02-05T16:10:00Z",
    updated_at: "2024-02-05T16:10:00Z",
  },
  {
    id: "tx-uuid-0007",
    household_id: "household-uuid-9999",
    payer_id: "user-a-uuid-1234",
    amount: 2800,
    transaction_date: "2024-02-07",
    category: "娯楽",
    description: "映画鑑賞",
    split_type: "PERSONAL",
    split_details: {
      "user-a-uuid-1234": 2800,
      "user-b-uuid-5678": 0,
    },
    settlement_id: null,
    created_at: "2024-02-07T21:00:00Z",
    updated_at: "2024-02-07T21:00:00Z",
  },
];

// 精算履歴
export const mockSettlements = [
  {
    id: "settlement-uuid-0001",
    household_id: "household-uuid-9999",
    from_user_id: "user-b-uuid-5678", // 花子から
    to_user_id: "user-a-uuid-1234", // 太郎へ
    amount: 2500,
    period_start: "2024-01-01",
    period_end: "2024-01-31",
    created_at: "2024-02-01T12:00:00Z",
  },
];

// カテゴリ一覧（プリセット）
export const mockCategories = [
  { id: "cat-01", name: "食費", icon: "restaurant", color: "#ef4444" },
  { id: "cat-02", name: "日用品", icon: "shopping_cart", color: "#f59e0b" },
  { id: "cat-03", name: "交通費", icon: "train", color: "#10b981" },
  { id: "cat-04", name: "光熱費", icon: "water_drop", color: "#3b82f6" },
  { id: "cat-05", name: "通信費", icon: "wifi", color: "#8b5cf6" },
  { id: "cat-06", name: "娯楽", icon: "movie", color: "#ec4899" },
  { id: "cat-07", name: "医療費", icon: "local_hospital", color: "#14b8a6" },
  { id: "cat-08", name: "その他", icon: "more_horiz", color: "#6b7280" },
];

// ヘルパー関数：現在のユーザーを取得
export function getCurrentUser() {
  return mockProfiles[0]; // デフォルトで山田太郎
}

// ヘルパー関数：パートナーを取得
export function getPartner() {
  return mockProfiles[1]; // デフォルトで山田花子
}

// ヘルパー関数：未精算のトランザクションを取得
export function getUnsettledTransactions() {
  return mockTransactions.filter((tx) => tx.settlement_id === null);
}

// ヘルパー関数：月別のトランザクションを取得
export function getTransactionsByMonth(year: number, month: number) {
  return mockTransactions.filter((tx) => {
    const date = new Date(tx.transaction_date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });
}

// ヘルパー関数：カテゴリ別の支出合計を取得
export function getTotalByCategory(transactions: typeof mockTransactions) {
  const categoryTotals = new Map<string, number>();

  transactions.forEach((tx) => {
    const current = categoryTotals.get(tx.category) || 0;
    categoryTotals.set(tx.category, current + tx.amount);
  });

  return Array.from(categoryTotals.entries()).map(([category, total]) => ({
    category,
    total,
  }));
}
