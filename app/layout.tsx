import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Digital and Precision Agriculture Lab (D-PAL) | University of Maryland",
  description: "The Digital and Precision Agriculture Lab (D-PAL) at the University of Maryland is an AI-focused lab advancing data-driven solutions for sustainable agriculture through machine learning, remote sensing, GIS, IoT, and precision decision support.",
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
        <main className="pt-4 sm:pt-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
