import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "@justanotherfilmgeek — Creator Media Kit",
  description:
    "TikTok creator media pack for @justanotherfilmgeek — film reviews, franchise lore, viral rankings.",
  openGraph: {
    title: "@justanotherfilmgeek — Creator Media Kit",
    description:
      "TikTok creator media pack for @justanotherfilmgeek — film reviews, franchise lore, viral rankings.",
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
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
