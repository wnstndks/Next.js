import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// 상위의 layout.js가 있다면 그걸로 페이지를 싸매게 된다
// 페이지 변경과 상관없이 계속 보여줄 UI는 layout.js를 쓰면 편하다
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* 모든 페이지에 보일 HTML은 layout.js에서 작성 */}
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/abc/def">def</Link>
        </div>
        {children}
      </body>
    </html>
  )
} 
