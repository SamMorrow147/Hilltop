import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Menu from "@/components/Home/Menu";
import Gallery from "@/components/Home/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hilltop Bar - Historic Hanover, MN",
  description: "Re-Established 2025 in Historic Hanover. A gathering place for the community since the 1880s.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex justify-between py-2 bg-transparent gap-3 md:gap-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: '#9B2323' }}></span>
        ))}
      </div>
      <About />
      <Menu />
      <Gallery />
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 my-8">
        <div className="flex justify-between py-2 bg-transparent gap-1 md:gap-0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: '#003366' }}></span>
          ))}
        </div>
      </div>
    </main>
  );
}
