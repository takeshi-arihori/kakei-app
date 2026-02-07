import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white dark:bg-[#182620]">
      {/* Left Half - Hero Image Section (Mobile: Top 1/3, Desktop: Left 1/2) */}
      <div className="lg:w-1/2 w-full h-[33vh] lg:h-screen relative overflow-hidden bg-gray-100">
        {/* Placeholder for hero image - in production, replace with actual image */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 via-blue-400/10 to-purple-400/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-[120px] lg:text-[200px]">
            account_balance_wallet
          </span>
        </div>
        {/* Gradient overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
      </div>

      {/* Right Half - Content Section (Mobile: Bottom 2/3, Desktop: Right 1/2) */}
      <div className="lg:w-1/2 w-full flex-1 lg:h-screen flex flex-col justify-center items-center px-6 py-12 lg:px-24 xl:px-32 bg-white dark:bg-[#182620]">
        <div className="w-full max-w-lg flex flex-col items-start gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-[#102219]">
              <span className="material-symbols-outlined text-2xl">
                account_balance_wallet
              </span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-text-main dark:text-white">
              COUPLE BUDGET
            </span>
          </div>

          {/* Heading & Description */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-text-main dark:text-white">
              ふたりの家計簿を
              <br className="hidden lg:block" />
              はじめる
            </h1>
            <p className="text-base lg:text-lg text-text-sub dark:text-[#a0c2b0] leading-relaxed">
              共有の財布も、個人の財布も、これひとつで。
              <br className="hidden lg:block" />
              ふたりの未来のために、賢くお金を管理しましょう。
              <br className="hidden lg:block" />
              割り勘計算もスムーズに、ストレスフリーな家計管理を。
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
            <Link
              href="/register"
              className="flex-1 flex items-center justify-center h-14 px-8 rounded-full bg-primary text-[#102219] text-lg font-bold hover:bg-primary-hover active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
            >
              新規登録
            </Link>
            <Link
              href="/login"
              className="flex-1 flex items-center justify-center h-14 px-8 rounded-full bg-gray-100 dark:bg-white/10 text-text-main dark:text-white text-lg font-bold hover:bg-gray-200 dark:hover:bg-white/20 active:scale-[0.98] transition-all"
            >
              ログイン
            </Link>
          </div>

          {/* Footer Links */}
          <div className="w-full pt-4 border-t border-gray-100 dark:border-white/10 mt-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-sub dark:text-[#a0c2b0]">
              <Link href="#features" className="hover:text-primary transition-colors">
                機能紹介
              </Link>
              <Link href="#pricing" className="hover:text-primary transition-colors">
                プラン・料金
              </Link>
              <Link href="#faq" className="hover:text-primary transition-colors">
                よくある質問
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors ml-auto">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
