import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoadForge",
  description:
    "Optimize your processes with LoadForge, a high-performance platform designed for maximum efficiency and innovation.",
  icons: ["/favicon.ico"], 
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
 
      </head>
      <body className={`${inter.variable} antialiased min-h-screen  h-[100vh]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
