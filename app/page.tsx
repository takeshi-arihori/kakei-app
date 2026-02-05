import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      {/* Responsive Container */}
      <div className="relative w-full max-w-md lg:max-w-lg min-h-screen sm:min-h-0 sm:h-auto flex flex-col bg-white dark:bg-gray-900 shadow-xl sm:rounded-3xl overflow-hidden">
        {/* Header / Status Bar Area Placeholder */}
        <div className="h-12 sm:h-16 w-full flex items-center justify-between px-6 shrink-0 z-10" />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 w-full">
          {/* Hero Section */}
          <div className="w-full mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-[320px] sm:max-w-[380px] md:max-w-[420px] rounded-2xl overflow-hidden shadow-lg">
              {/* Decorative bg blobs */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-400/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

              {/* Hero Visual */}
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-blue-400/5 flex items-center justify-center relative z-10">
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-[100px] sm:text-[120px] md:text-[140px] mb-4 block">
                    savings
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">
                savings
              </span>
              <span className="text-sm sm:text-base font-bold tracking-widest text-primary uppercase">
                Couple Budget
              </span>
            </div>
            <h1 className="text-text-main dark:text-white tracking-tight text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-tight px-2">
              ふたりの家計簿を
              <br />
              はじめよう
            </h1>
            <p className="text-text-sub dark:text-gray-400 text-base sm:text-lg md:text-xl font-normal leading-relaxed px-4 max-w-[300px] sm:max-w-[400px] md:max-w-[480px]">
              共有財布も個人財布もこれひとつで。
              <br />
              シンプルで使いやすい家計簿アプリ。
            </p>
          </div>

          {/* Features / Small Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mb-8 sm:mb-10 md:mb-12 opacity-80">
            <div className="bg-primary-light dark:bg-white/5 rounded-xl p-3 sm:p-4 md:p-5 flex items-center justify-center gap-2 border border-transparent dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">
                account_balance_wallet
              </span>
              <span className="text-xs sm:text-sm font-bold text-text-sub dark:text-gray-300">
                共有ウォレット
              </span>
            </div>
            <div className="bg-primary-light dark:bg-white/5 rounded-xl p-3 sm:p-4 md:p-5 flex items-center justify-center gap-2 border border-transparent dark:border-white/10">
              <span className="material-symbols-outlined text-blue-400 text-xl sm:text-2xl">
                pie_chart
              </span>
              <span className="text-xs sm:text-sm font-bold text-text-sub dark:text-gray-300">
                自動グラフ化
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Action Area */}
        <div className="w-full px-6 sm:px-8 md:px-12 py-6 sm:py-8 bg-white dark:bg-gray-900 shrink-0 border-t border-border dark:border-gray-800">
          <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[480px] mx-auto">
            <Link
              href="/register"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 sm:h-16 px-5 bg-primary hover:bg-primary-hover transition-colors text-text-inverse dark:text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              <span className="truncate">新規登録</span>
            </Link>
            <Link
              href="/login"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 sm:h-16 px-5 bg-primary-light dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-text-main dark:text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] active:scale-[0.98]"
            >
              <span className="truncate">ログイン</span>
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-center text-text-sub dark:text-gray-500 mt-6">
            利用を開始することで、
            <Link href="/terms" className="underline hover:text-primary">
              利用規約
            </Link>{" "}
            と{" "}
            <Link href="/privacy" className="underline hover:text-primary">
              プライバシーポリシー
            </Link>{" "}
            に同意したものとみなされます。
          </p>
        </div>
      </div>
    </div>
  );
}
