import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: "Creator Media Kit | justanotherfilmgeek",
  description:
    "TikTok creator one-pager media pack with stats, best content, audience fit, and collaboration details.",
  openGraph: {
    title: "Creator Media Kit | justanotherfilmgeek",
    description:
      "TikTok creator one-pager media pack with stats, best content, audience fit, and collaboration details.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
