"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

/**
 * 支出を登録
 */
export async function createTransaction(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO: トランザクション作成ロジック
  // 1. バリデーション（Zodスキーマ）
  // 2. DBに保存
  // 3. 共通支出の場合はExpenseShareも作成

  revalidatePath("/transactions");
  return { success: true };
}

/**
 * 支出を更新
 */
export async function updateTransaction(id: string, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO: トランザクション更新ロジック

  revalidatePath("/transactions");
  return { success: true };
}

/**
 * 支出を削除
 */
export async function deleteTransaction(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO: トランザクション削除ロジック

  revalidatePath("/transactions");
  return { success: true };
}
