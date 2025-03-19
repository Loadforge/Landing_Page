"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import useThemeStore from "@/store/theme.store";
import { useEffect } from "react";
import Header from "@/components/header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen h-[620vh]`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
