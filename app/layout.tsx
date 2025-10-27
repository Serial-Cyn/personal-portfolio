import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Christian Mamplata",
  description: "This is where I showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Navbar />
      </body>
    </html>
  );
}
