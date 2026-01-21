"use client";

import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4 lg:py-10">
      {/* Top Navigation */}
      <TopNav />

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 mt-6 lg:mt-18">
        {/* App Screenshot - Centered on mobile, left on desktop */}
        <div className="flex-shrink-0 order-2 lg:order-1">
          <Image
            src="/image/main-screen.png"
            alt="Fifteenfit App Screenshot"
            width={280}
            height={560}
            className="w-[260px] sm:w-[300px] lg:w-[360px] rounded-2xl"
          />
        </div>

        {/* Content - Centered on mobile, right on desktop */}
        <div className="flex-1 flex flex-col items-center text-center gap-6 max-w-2xl order-1 lg:order-2">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <div className="relative">
              {/* <div className="absolute -right-1 -bottom-1 w-[80px] h-[80px] bg-black"></div> */}
              <Image
                src="/image/app-icon.png"
                alt="Fifteenfit Icon"
                width={80}
                height={80}
                className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-white rounded-lg"
              />
            </div>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Fifteenfit
            </span>
          </div>

          {/* Headlines */}
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight text-white mt-8">
            Transform your body in just 15 minutes a day
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-[#0f4fb8]">
            Ready to unlock your full fitness potential?
          </h2>
          <div className="flex flex-col sm:flex-row max-w-lg justify-center mt-2 mb-2 sm:mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-transform hover:scale-105 w-full max-w-[140px] sm:max-w-[160px] lg:max-w-[180px]"
            >
              {/* <div className="absolute -right-1 -bottom-1 w-[200px] h-[60px] bg-white rounded-sm"></div> */}
              <Image
                src="/image/apple-store-badge.png"
                alt="Download on the App Store"
                width={180}
                height={50}
                className="relative h-[40px] sm:h-[45px] lg:h-[50px] w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
