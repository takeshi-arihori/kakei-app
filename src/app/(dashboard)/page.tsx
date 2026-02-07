export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-text-main dark:text-white mb-8">
          ダッシュボード
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 今月の収支サマリー */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
              今月の収入
            </h2>
            <p className="text-2xl font-bold text-text-main dark:text-white">
              ¥0
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
              今月の支出
            </h2>
            <p className="text-2xl font-bold text-text-main dark:text-white">
              ¥0
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-medium text-text-sub dark:text-gray-400 mb-2">
              残高
            </h2>
            <p className="text-2xl font-bold text-primary">¥0</p>
          </div>
        </div>

        {/* 精算状況 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            精算状況
          </h2>
          <p className="text-text-sub dark:text-gray-400">
            未精算の支出はありません
          </p>
        </div>

        {/* 直近の取引 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            直近の取引
          </h2>
          <p className="text-text-sub dark:text-gray-400">
            取引履歴はまだありません
          </p>
        </div>
      </div>
    </div>
  );
}
