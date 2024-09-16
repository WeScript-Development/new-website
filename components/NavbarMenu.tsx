"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/Menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative z-[5000] w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="#products">
          <MenuItem setActive={setActive} active={active} item="Producten">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Intranet & Meldkamer"
                href="/intranet"
                src="/intranet2.png"
                description="Hét systeem voor FiveM en Roblox clans met grote ambities!"
              />
              <ProductItem
                title="Binnenkort meer..."
                href="/soon"
                src="/unknownProduct.png"
                description="Dit product is nog niet bekend gemaakt, kom later terug voor meer informatie."
              />
              <ProductItem
                title="Custom verzoeken"
                href="/custom"
                src="/unknownProduct.png"
                description="Een team nodig dat jouw idee werkelijkheid maakt?"
              />
            </div>
          </MenuItem>
        </a>
        
        <MenuItem setActive={setActive} active={null} item="Over ons" />
        <a href="/contact">
          <MenuItem setActive={setActive} active={null} item="Contact" />
        </a>
      </Menu>
    </div>
  );
}
