export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-main dark:text-white">
            ログイン
          </h1>
          <p className="text-text-sub dark:text-gray-400 mt-2">
            家計簿アプリにログイン
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-main dark:text-white mb-2"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-main dark:text-white mb-2"
            >
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-text-main font-bold rounded-xl transition-colors shadow-lg shadow-primary/20"
          >
            ログイン
          </button>
        </form>

        <p className="text-center text-sm text-text-sub dark:text-gray-400 mt-6">
          アカウントをお持ちでない方は{" "}
          <a href="/register" className="text-primary hover:underline">
            新規登録
          </a>
        </p>
      </div>
    </div>
  );
}
