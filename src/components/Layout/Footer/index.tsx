import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="col-span-2">
            <Logo />
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-5">
              <a href="https://www.google.com/maps/search/?api=1&query=29953+109th+Ave+N,+Hanover,+MN+55341" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                29953 109th Ave N, Hanover, MN 55341
              </a><br />
              <a href="tel:+19092359814" className="hover:text-primary">+1 (909) 235-9814</a>
            </p>
            <p className="text-xs font-medium text-grey dark:text-white/50 mb-16 max-w-70%">
              A Hanover tradition since the 1880s. Good food, good friends, good times.
            </p>
            <div className="flex gap-6 items-center">
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:instagram"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - Hilltop Bar. Developed by <Link href="http://clubhausagency.com" target="_blank" className="hover:text-primary">Clubhaus Agency</Link> & <Link href="https://www.shiftcreativedesign.com" target="_blank" className="hover:text-primary">Shift Creative Design</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
