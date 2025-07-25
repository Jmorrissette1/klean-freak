import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import { MobileDock } from "./components/MobileDock";
import Footer from "./components/Footer";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-prompt", 
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klean Freak Car Wash | Serving Poulsbo & Silverdale Washington",
  description:
    "Take pride in your ride, Kitsap County! Our Car Wash puts the Klean back in your machine!✨ Transform your car from road warrior to dazzling showstopper at Klean Freak Car Wash! Serving Silverdale & Poulsbo with eco-friendly washes, meticulous detailing, & VIP service. Visit our sparkling locations & experience the Klean Freak difference!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${prompt.variable} font-sans`}>
        <Navbar />
        <main className="main-content">{children}</main>
        <MobileDock />
        <Footer />
      </body>
    </html>
  );
}
