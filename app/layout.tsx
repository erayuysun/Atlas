import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const barlowCondensed = Barlow_Condensed({
  weight: ["200", "300"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Paragliding",
  description: "Paragliding knowledge base, competitions, and adventures across Kenya, India, and Peru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0a0a0a] ${barlowCondensed.variable}`}>
        {/* Max-width wrapper — content capped at 1500px, centered, bg extends full width */}
        <div className="max-w-[1500px] mx-auto relative">
          <Navigation />
          <main>
            {children}
          </main>
          <footer className="bg-[#0f0f0f] text-gray-400 py-8 mt-20 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; 2026 Atlas Paragliding. All rights reserved.</p>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}
