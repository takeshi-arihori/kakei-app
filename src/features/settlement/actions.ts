"use server";

import { createClient } from "@/lib/supabase/server";
import { calculateSettlement } from "./domain/calculator";
import { revalidatePath } from "next/cache";

/**
 * 現在の精算状況を取得
 */
export async function getSettlementStatus() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO:
  // 1. 未精算のトランザクションを取得
  // 2. calculateSettlement() を呼んで精算額を計算
  // 3. 結果を返す

  return {
    userA: { paid: 0, shouldPay: 0, balance: 0 },
    userB: { paid: 0, shouldPay: 0, balance: 0 },
    settlementAmount: 0,
    settlementDirection: "EVEN" as const,
  };
}

/**
 * 精算を実行
 */
export async function executeSettlement() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO:
  // 1. 未精算のトランザクションを取得
  // 2. calculateSettlement() を呼んで精算額を計算
  // 3. Settlementレコードを作成
  // 4. 対象トランザクションをis_settled=trueに更新

  revalidatePath("/settlements");
  return { success: true };
}
