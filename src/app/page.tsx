import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Menu from "@/components/Home/Menu";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hilltop Bar - Historic Hanover, MN",
  description: "Re-Established 2025 in Historic Hanover. A gathering place for the community since the 1880s.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Newsletter />
    </main>
  );
}
