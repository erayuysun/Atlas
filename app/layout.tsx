import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
      <body className="antialiased bg-[#0a0a0a]">
        <Navigation />
        <main>
          {children}
        </main>
        <footer className="bg-[#0f0f0f] text-gray-400 py-8 mt-20 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">&copy; 2026 Atlas Paragliding. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
