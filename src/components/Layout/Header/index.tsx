"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 overflow-x-hidden ${sticky ? " shadow-lg bg-white dark:bg-gray-600 py-4" : "shadow-none py-8"
        }`}
    >
      <div className="lg:py-0 py-2 overflow-x-hidden">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4 overflow-x-hidden">
          <Logo {...(sticky ? { size: 80 } : { size: 200, mobileSize: 120 })} />
          <nav className={`hidden lg:flex flex-grow items-center justify-center transition-all duration-300 ${sticky ? 'gap-2 text-sm' : 'gap-8 text-xl'}`}>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-hidden">
            <div className="hidden md:flex items-center gap-3">
              <Link href="https://www.facebook.com/profile.php?id=61575227142376" target="_blank" className="hover:opacity-80">
                <Icon
                  icon="fa6-brands:facebook-f"
                  className="text-xl"
                  style={{ color: sticky ? '#000000' : '#ffffff' }}
                />
              </Link>
              <Link href="https://www.instagram.com/hilltophanover" target="_blank" className="hover:opacity-80">
                <Icon
                  icon="fa6-brands:instagram"
                  className="text-xl"
                  style={{ color: sticky ? '#000000' : '#ffffff' }}
                />
              </Link>
            </div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black dark:bg-white transition-colors"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5 transition-colors"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5 transition-colors"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 max-w-xs overflow-x-hidden ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800">
            <h2 className="text-lg font-bold text-black dark:text-white">
              <Logo />
            </h2>

            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 invert"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4 bg-white dark:bg-gray-900">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} onClose={() => setNavbarOpen(false)} />
            ))}
            <div className="border-t border-gray-200 dark:border-gray-600 mt-4 pt-4 w-full">
              <div className="flex items-center gap-4">
                <Link href="https://www.facebook.com/profile.php?id=61575227142376" target="_blank" className="hover:opacity-80">
                  <Icon
                    icon="fa6-brands:facebook-f"
                    className="text-2xl"
                    style={{ color: sticky ? '#000000' : '#ffffff' }}
                  />
                </Link>
                <Link href="https://www.instagram.com/hilltophanover" target="_blank" className="hover:opacity-80">
                  <Icon
                    icon="fa6-brands:instagram"
                    className="text-2xl"
                    style={{ color: sticky ? '#000000' : '#ffffff' }}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
