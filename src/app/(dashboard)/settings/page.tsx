export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-text-main dark:text-white mb-8">
          設定
        </h1>

        {/* プロフィール */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            プロフィール
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
                表示名
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                placeholder="山田太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                placeholder="example@example.com"
                disabled
              />
            </div>
          </div>
        </div>

        {/* 家計グループ */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            家計グループ
          </h2>
          <p className="text-text-sub dark:text-gray-400 mb-4">
            パートナーを招待して家計を共有しましょう
          </p>
          <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-text-main font-bold rounded-xl transition-colors shadow-lg shadow-primary/20">
            招待コードを発行
          </button>
        </div>

        {/* カテゴリ管理 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            カテゴリ管理
          </h2>
          <p className="text-text-sub dark:text-gray-400">
            カスタムカテゴリを追加できます
          </p>
        </div>
      </div>
    </div>
  );
}
