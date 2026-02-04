import React from "react";
import Hero from "@/components/Home/Hero";
import OrderCallout from "@/components/Home/OrderCallout";
import About from "@/components/Home/About";
import Menu from "@/components/Home/Menu";
import Gallery from "@/components/Home/Gallery";
import HoursLocation from "@/components/Home/HoursLocation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hilltop Bar - Historic Hanover, MN",
  description: "Re-Established 2025 in Historic Hanover. A gathering place for the community since the 1880s.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <OrderCallout />
      <div className="w-full overflow-hidden px-4 bg-white">
        <div className="flex justify-center py-2 bg-white gap-8 md:gap-12 max-w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full flex-shrink-0 hidden md:inline-block" style={{ backgroundColor: '#000000' }}></span>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i + 20} className="w-2 h-2 rounded-full flex-shrink-0 md:hidden" style={{ backgroundColor: '#000000' }}></span>
          ))}
        </div>
      </div>
      <About />
      <Menu />
      <Gallery />
      <HoursLocation />
    </main>
  );
}
