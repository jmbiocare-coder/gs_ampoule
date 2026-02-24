import "./globals.css";
import { Inter } from "next/font/google";
import { ChatWidget } from "@/components/AI/ChatWidget"; // 챗봇 불러오기

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GS Luxury Landing | JM Biocare",
  description: "Premium functional cosmetics GS series.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 실제 페이지 내용이 여기에 들어갑니다 */}
        {children} 
        
        {/* 챗봇 위젯을 여기에 배치하면 모든 페이지에서 보입니다 */}
        <ChatWidget /> 
      </body>
    </html>
  );
}