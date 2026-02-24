import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        appleGrey: '#1D1D1F',    // Apple 공식 텍스트 컬러
        appleSilver: '#F5F5F7',  // 배경용 실버 컬러
        luxuryGold: '#D4AF37',   // 포인트 골드 컬러
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'sans-serif'], // Apple 폰트 시스템
      },
      letterSpacing: {
        tightest: '-.025em', // Apple 특유의 긴장감 있는 자간
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
};
export default config;