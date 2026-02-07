export default function SettlementsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-text-main dark:text-white mb-8">
          精算管理
        </h1>

        {/* 現在の精算状況 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            現在の精算状況
          </h2>
          <div className="text-center py-8">
            <p className="text-4xl font-bold text-primary mb-2">¥0</p>
            <p className="text-text-sub dark:text-gray-400">
              精算が必要な金額はありません
            </p>
          </div>
          <button
            disabled
            className="w-full mt-6 py-3 px-4 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-bold rounded-xl cursor-not-allowed"
          >
            精算を実行
          </button>
        </div>

        {/* 精算履歴 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">
            精算履歴
          </h2>
          <p className="text-text-sub dark:text-gray-400">
            精算履歴はまだありません
          </p>
        </div>
      </div>
    </div>
  );
}
