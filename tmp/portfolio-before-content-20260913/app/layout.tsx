
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Hit Vaghani",
  description:
    "Portfolio of Hit Vaghani, a frontend developer specializing in React, TypeScript, and modern web development. Explore projects, skills, and contact details.",
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
        {children}
      </body>
    </html>
  );
}
