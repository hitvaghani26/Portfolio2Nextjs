
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { PortfolioNav } from './components/PortfolioNav';
import { PortfolioFooter } from './components/PortfolioFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://hitvaghani.dev'),
  title: { default: 'Hit Vaghani | Full-stack Developer', template: '%s | Hit Vaghani' },
  description:
    "Full-stack developer building React, Next.js, and Node.js applications. Explore production engineering, client websites, and creative frontend work. Based in India, interested in freelance projects and German software teams.",
  keywords:
    "Frontend Developer, Fullstack Developer, React, TypeScript, JavaScript, Portfolio, Web Development",
  authors: [{ name: "Hit Vaghani" }],
  icons: {
    icon: "/icon.jpg",
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <PortfolioNav />
        {children}
        <PortfolioFooter />
      </body>
    </html>
  );
}
