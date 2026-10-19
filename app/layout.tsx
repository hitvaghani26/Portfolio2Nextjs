
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Hit Vaghani",
  description:
    "Hit Vaghani is a full-stack software engineer working with React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB. Explore selected project contributions.",
  keywords:
    "Hit Vaghani, Full-Stack Software Engineer, React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Portfolio",
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
