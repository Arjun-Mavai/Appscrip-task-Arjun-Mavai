import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "E-commerce Product Listing | Shop Premium Products",
  description:
    "Discover our premium products with sustainable materials and unique designs. Shop our collection of bags, accessories, and more.",
  openGraph: {
    title: "E-commerce Product Listing | Shop Premium Products",
    description: "Discover our premium products with sustainable materials and unique designs.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}
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
        <Providers>
        {children}
        
        <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  );
}
