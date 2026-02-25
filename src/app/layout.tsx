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
      <head>
        {/* 구글 태그 관리자 (1번 코드: Head용) - 서버에서 안전하게 인라인 스크립트로 삽입 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WB8PFBGN');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* 구글 태그 관리자 (2번 코드: Body용 noscript) - noscript에 요소를 직접 넣지 않고 HTML로 삽입 */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB8PFBGN" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* 실제 페이지 내용 */}
        {children}

        {/* 챗봇 위젯 */}
        <ChatWidget />
      </body>
    </html>
  );
}