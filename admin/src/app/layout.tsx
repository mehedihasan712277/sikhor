
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin-Sikhor",
  description: "Generated by Mehedi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div className="ml-[300px] mt-[100px]">
          {children}
        </div>
      </body>
    </html>
  );
}
