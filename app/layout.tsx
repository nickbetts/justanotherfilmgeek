import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono, Bebas_Neue } from "next/font/google";
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

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas"
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
      <body className={`${bricolage.variable} ${spaceMono.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
