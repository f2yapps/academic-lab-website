"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png",
  "/banners/banner4.png",
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000); // Change banner every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative h-64 md:h-80 lg:h-96 overflow-hidden border-b border-gray-300">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
            unoptimized
          />
        </div>
      ))}
      
      {/* Running text at bottom of banner */}
      <div className="absolute bottom-0 left-0 right-0 py-3 overflow-hidden bg-transparent">
        <div className="flex animate-scroll whitespace-nowrap">
          <span className="text-lg font-semibold text-white drop-shadow-lg" suppressHydrationWarning>
            Precision Agriculture Lab (PAL) @ University of Maryland
          </span>
        </div>
      </div>
    </div>
  );
}






