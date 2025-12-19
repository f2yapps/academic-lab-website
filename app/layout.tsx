import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Precision Agriculture Lab (PAL) | University of Maryland",
  description: "The Precision Agriculture Lab (PAL) at the University of Maryland is dedicated to advancing innovative, data-driven solutions for sustainable and efficient agricultural practices through remote sensing, GIS, IoT, and artificial intelligence.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <Banner />
        <main className="pt-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
