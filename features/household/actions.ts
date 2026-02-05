"use server";

import { createClient } from "@/lib/supabase/server";

/**
 * 家計グループを作成
 */
export async function createHousehold(name: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO: 家計グループ作成ロジック
  // 1. householdsテーブルにレコード作成
  // 2. 招待コードを生成して、招待コードテーブルにレコード作成
  // 3. ユーザーを家計に紐付け

  return { success: true };
}

/**
 * 招待コードで家計グループに参加
 */
export async function joinHousehold(inviteCode: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // TODO: 招待コード検証と参加処理

  return { success: true };
}
