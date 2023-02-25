import "./globals.css";
import { Inter } from "@next/font/google";
import Providers from "./providers";
import React from 'react';
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`bg-teal-700 ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
