"use client";

import { NavbarDemo } from "@/components/NavbarMenu";
import Hero from "@/components/HeroIntranet";
import Footer from "@/components/Footer";
import { productIntranetPackets } from "@/data";
import { TimelineDemo } from "@/components/TimelineDemo";
import PriceSection from "@/components/PriceSection";

const Intranet = () => {
  return (
    <main className="relative w-full bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <NavbarDemo />
        <Hero />
        <PriceSection packets={productIntranetPackets} />
        <TimelineDemo />
        <Footer />
      </div>
    </main>
  );
};

export default Intranet;
