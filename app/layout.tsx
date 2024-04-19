import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";

const inter = Montserrat({ subsets: ["latin"], style: "normal", weight: "400" });

export const metadata: Metadata = {
  title: "Blog Home",
  description: "Blog Home create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className} style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} >
    <TheHeader />
    <main className="flex flex-grow flex-col items-center py-3">
        {children}
    </main>
    <TheFooter />
    </body>
    </html>
);
}
