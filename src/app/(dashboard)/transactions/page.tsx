export default function TransactionsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-main dark:text-white">
            支出管理
          </h1>
          <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-text-main font-bold rounded-xl transition-colors shadow-lg shadow-primary/20">
            支出を追加
          </button>
        </div>

        {/* フィルター */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
                期間
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
                カテゴリ
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                <option>すべて</option>
                <option>食費</option>
                <option>日用品</option>
                <option>交通費</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
                財布
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                <option>すべて</option>
                <option>自分</option>
                <option>パートナー</option>
                <option>共通</option>
              </select>
            </div>
          </div>
        </div>

        {/* 取引一覧 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-text-sub dark:text-gray-400">
            取引履歴はまだありません
          </p>
        </div>
      </div>
    </div>
  );
}
