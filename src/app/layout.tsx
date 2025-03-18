"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import useThemeStore from "@/store/theme.store";
import { useEffect } from "react";
import ToogleButton from "@/components/ToogleButton";

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
        <ToogleButton></ToogleButton>
        {children}
      </body>
    </html>
  );
}
