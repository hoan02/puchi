"use client";

import Image from "next/image";
import Link from "next/link";

import LogoSVG from "@public/images/logo/logo.svg";
import { usePathname } from "@/i18n/routing.public";
import { navigationList } from "@/constants/navigation";

const SidebarLeft = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-full font-din hidden sm:flex sm:w-[84px] lg:w-60 p-4 flex-col items-center lg:items-start space-y-4 border-r-2">
      {/* Logo at the top */}
      <Link
        href="/"
        className="w-full py-2 px-4 max-lg:p-0 focus-visible group flex items-center gap-4 text-2xl sm:text-3xl lg:text-4xl"
        title="Puchi app"
      >
        <LogoSVG className="w-[1.5em] group-hover:animate-bounce mx-auto" />
        <span className="font-display -tracking-widest hidden lg:inline">
          Puchi
        </span>
      </Link>

      {/* Sidebar content */}
      <div className="flex-1 flex flex-col items-center lg:items-start gap-2 w-full">
        {navigationList.map((item) => {
          const isActive = pathname.split("/")[1] === item.slug;
          return (
            <div
              key={item.slug}
              className={`w-full gap-4 p-2 rounded-xl border-2 hover:bg-sky-100 dark:hover:bg-sky-900/40 ${
                isActive &&
                "text-sky-400 border-sky-400 bg-sky-100 dark:bg-sky-900/40"
              }`}
            >
              <Link
                href={`/${item.slug}`}
                className="flex items-center px-2 max-lg:px-0 gap-4"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                />
                <span className="hidden lg:inline uppercase font-bold text-sm">
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Bottom section */}
      <div className="w-full mt-auto p-2">
        <span></span>
      </div>
    </div>
  );
};

export default SidebarLeft;
