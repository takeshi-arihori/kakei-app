/**
 * 精算計算のドメインロジック
 * Supabase、React、Next.jsに依存しない純粋なTypeScript
 */

export type SplitType = "PERSONAL" | "EQUAL" | "CUSTOM";

export interface Transaction {
  id: string;
  amount: number;
  paidBy: "A" | "B"; // ユーザーA or B
  splitType: SplitType;
  customRatio?: {
    userA: number; // 0-100
    userB: number; // 0-100
  };
}

export interface SettlementResult {
  userA: {
    paid: number; // 支払った総額
    shouldPay: number; // 負担すべき金額
    balance: number; // 差額 (正なら受け取る、負なら払う)
  };
  userB: {
    paid: number;
    shouldPay: number;
    balance: number;
  };
  settlementAmount: number; // 精算額 (正ならA→B、負ならB→A)
  settlementDirection: "A_TO_B" | "B_TO_A" | "EVEN";
}

/**
 * 未精算のトランザクションから精算額を計算
 */
export function calculateSettlement(
  transactions: Transaction[]
): SettlementResult {
  let userAPaid = 0;
  let userBPaid = 0;
  let userAShouldPay = 0;
  let userBShouldPay = 0;

  for (const tx of transactions) {
    // 誰が支払ったか
    if (tx.paidBy === "A") {
      userAPaid += tx.amount;
    } else {
      userBPaid += tx.amount;
    }

    // 誰が負担すべきか
    if (tx.splitType === "PERSONAL") {
      // 個人支出: 支払者が100%負担
      if (tx.paidBy === "A") {
        userAShouldPay += tx.amount;
      } else {
        userBShouldPay += tx.amount;
      }
    } else if (tx.splitType === "EQUAL") {
      // 共通支出: 50:50で分割
      const half = tx.amount / 2;
      userAShouldPay += half;
      userBShouldPay += half;
    } else if (tx.splitType === "CUSTOM" && tx.customRatio) {
      // カスタム比率
      userAShouldPay += (tx.amount * tx.customRatio.userA) / 100;
      userBShouldPay += (tx.amount * tx.customRatio.userB) / 100;
    }
  }

  const userABalance = userAPaid - userAShouldPay;
  const userBBalance = userBPaid - userBShouldPay;

  // 精算額 (正ならA→B、負ならB→A)
  const settlementAmount = userABalance;

  let direction: "A_TO_B" | "B_TO_A" | "EVEN" = "EVEN";
  if (settlementAmount > 0) {
    direction = "B_TO_A"; // Aが多く払った → BからAへ
  } else if (settlementAmount < 0) {
    direction = "A_TO_B"; // Bが多く払った → AからBへ
  }

  return {
    userA: {
      paid: userAPaid,
      shouldPay: userAShouldPay,
      balance: userABalance,
    },
    userB: {
      paid: userBPaid,
      shouldPay: userBShouldPay,
      balance: userBBalance,
    },
    settlementAmount: Math.abs(settlementAmount),
    settlementDirection: direction,
  };
}
