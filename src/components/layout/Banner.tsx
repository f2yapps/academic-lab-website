"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.png",
  "/banners/banner4.png",
  "/banners/banner5.jpg",
  "/banners/banner6.png",
  "/banners/banner7.JPG",
  "/banners/banner8.JPG",
  "/banners/banner9.png",
  "/banners/banner10.jpg",
  "/banners/banner11.jpg",
  "/banners/banner12.jpg",
  "/banners/banner13.jpg",
  "/banners/banner14.jpg",
  "/banners/banner15.JPEG",
  "/banners/banner16.jpg",
  "/banners/banner17.JPG",
  "/banners/banner18.JPG"
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
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10" style={{
        background: 'linear-gradient(to top, rgba(30, 58, 138, 0.4), rgba(59, 130, 246, 0.3))',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="py-2 sm:py-3">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set */}
            <span 
              className="text-xs sm:text-base font-semibold px-6" 
              style={{
                color: '#FFFFFF'
              }}
              suppressHydrationWarning
            >
              Digital and Precision Agriculture Lab, University of Maryland
            </span>
            <span 
              className="text-sm sm:text-lg font-semibold" 
              style={{
                color: '#FFFFFF',
                paddingLeft: '400px'
              }}
              suppressHydrationWarning
            >
              Precision Agriculture Technology Conference on Feb 26, 2026 at the Crowne Plaza, Annapolis.
            </span>
            {/* Duplicated set for seamless scrolling */}
            <span 
              className="text-xs sm:text-base font-semibold" 
              style={{
                color: '#FFFFFF',
                paddingLeft: '400px'
              }}
              suppressHydrationWarning
            >
              Digital and Precision Agriculture Lab, University of Maryland
            </span>
            <span 
              className="text-sm sm:text-lg font-semibold" 
              style={{
                color: '#FFFFFF',
                paddingLeft: '400px'
              }}
              suppressHydrationWarning
            >
              Precision Agriculture Technology Conference on Feb 26, 2026 at the Crowne Plaza, Annapolis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}






