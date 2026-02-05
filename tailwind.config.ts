import type { Config } from "tailwindcss";

const config: Config = {
  // ダークモードはクラス切り替え方式
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // globals.css の変数を紐付け
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)", // class="bg-primary"
          hover: "var(--primary-hover)", // class="hover:bg-primary-hover"
          light: "var(--primary-light)", // class="bg-primary-light"
        },

        text: {
          main: "var(--text-main)", // class="text-text-main"
          sub: "var(--text-sub)", // class="text-text-sub"
          inverse: "var(--text-inverse)",
        },

        border: "var(--border)",
        input: "var(--input)",
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};

export default config;
