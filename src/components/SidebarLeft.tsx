"use client";

import Image from "next/image";

import LogoSVG from "@public/images/logo/logo.svg";
import { Link, usePathname } from "@/i18n/routing";
import { navigationList } from "@/constants/navigation";

const SidebarLeft = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-full font-din hidden sm:flex sm:w-[84px] lg:w-60 p-4 flex-col items-center lg:items-start space-y-4 border-r-2">
      {/* Logo at the top */}
      <Link
        href="/learn"
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
        <div className="group relative w-full gap-4 p-2 rounded-xl border-2 hover:bg-sky-100 dark:hover:bg-sky-900/40">
          <div className="flex items-center px-2 max-lg:px-0 gap-4">
            <Image alt="more" src="/icons/more.svg" width={32} height={32} />
            <span className="hidden lg:inline uppercase font-bold text-sm">
              more
            </span>
          </div>

          <div className="absolute z-10 -right-4 -top-4 hidden group-hover:block">
            <div className="py-2 uppercase text-sm translate-x-full bg-white dark:bg-gray-800 shadow-lg border rounded-lg w-48">
              <Link
                href="/sign-up"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
              >
                Create profile
              </Link>
              <Link
                href="/settings"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
              >
                Settings
              </Link>
              <Link
                href="/help"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
              >
                Help
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full mt-auto p-2">
        <span></span>
      </div>
    </div>
  );
};

export default SidebarLeft;
