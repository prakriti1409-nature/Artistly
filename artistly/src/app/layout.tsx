// src/app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Artistly – Book Top Artists",
  description: "A platform to discover and book top-performing artists for your event.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body
        className="min-h-screen font-sans text-black bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/e.jpg')", // 🔁 Replace with your actual background image path if needed
        }}
      >
        {/* Optional dark gradient overlay for better readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-0"></div>

        {/* Main Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="container mx-auto flex-1 px-4 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
