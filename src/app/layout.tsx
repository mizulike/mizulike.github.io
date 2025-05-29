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
  title: "Timothy Flynn - Full Stack Developer | Portfolio",
  description: "🚀 Creative full-stack developer crafting mind-blowing digital experiences with React, Next.js, Node.js, and cutting-edge technologies. Ready to turn your wildest ideas into reality!",
  keywords: "full-stack developer, web developer, React, Next.js, Node.js, TypeScript, portfolio, Timothy Flynn",
  authors: [{ name: "Timothy Flynn" }],
  creator: "Timothy Flynn",
  openGraph: {
    title: "Timothy Flynn - Full Stack Developer",
    description: "🚀 Creative full-stack developer crafting mind-blowing digital experiences",
    url: "https://mizulike.github.io",
    siteName: "Timothy Flynn Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy Flynn - Full Stack Developer",
    description: "🚀 Creative full-stack developer crafting mind-blowing digital experiences",
    creator: "@timothyflynn",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
