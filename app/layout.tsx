import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/projects";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stanlee7.vercel.app"),
  title: {
    default: `${profile.name} — AI 빌더 포트폴리오`,
    template: `%s — ${profile.name}`,
  },
  description: `${profile.headline} ${profile.sub}`,
  openGraph: {
    title: `${profile.name} — AI 빌더 포트폴리오`,
    description: profile.headline,
    images: ["/og/home.png"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
