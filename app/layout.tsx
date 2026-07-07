import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const barlowCondensed = Barlow_Condensed({
  weight: ["200", "300"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
      <body className={`antialiased bg-[#0a0a0a] ${barlowCondensed.variable} ${poppins.variable}`}>
        {/* Max-width wrapper — content capped at 1500px, centered, bg extends full width */}
        <div className="relative mx-auto w-full max-w-[1500px] min-[1875px]:w-[80vw] min-[1875px]:max-w-none">
          <Navigation />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
