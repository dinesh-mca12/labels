import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velmurugan Labels | Premium Label Printing & Production Tiruppur",
  description:
    "Velmurugan Labels is Tiruppur's leading industrial label manufacturer. Specializing in designing, digital printing, offset packaging, custom adhesive stickers, rotary fabric labels, and tactile screen printing solutions.",
  keywords: [
    "Tiruppur label printing",
    "Label manufacturers in Tiruppur",
    "Sticker printing company",
    "Industrial printing solutions",
    "Premium label production",
    "Garment label printing",
    "Rotary fabric labels",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Velmurugan Labels | Premium Label Printing & Production",
    description:
      "Tiruppur's premium manufacturer for high-quality garment hangtags, roll stickers, textile labels, and luxury finishing solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50/50 text-slate-800 selection:bg-sky-100 selection:text-sky-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
