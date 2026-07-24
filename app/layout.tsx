import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "თამარ ჩოგაძე | ქცევითი თერაპევტი",
  description:
    "ქცევითი თერაპია, კონსულტაციები, ABA თერაპია და პროფესიული ბლოგი.",
verification: {
  google: "bQgGbBobjINyK_tylnKZ3vVgJS_PHkEqiZpKKNoeYG4",
},
  keywords: [
    "თამარ ჩოგაძე",
    "ქცევითი თერაპევტი",
    "ABA თერაპია",
    "ბავშვთა თერაპია",
    "ქცევითი თერაპევტი თბილისი",
  ],

  authors: [{ name: "თამარ ჩოგაძე" }],
  creator: "თამარ ჩოგაძე",

  openGraph: {
    title: "თამარ ჩოგაძე | ქცევითი თერაპევტი",
    description:
      "ქცევითი თერაპია, კონსულტაციები, ABA თერაპია და პროფესიული ბლოგი.",
    images: ["/tamara.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
