"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/lib/navigation";
import type { LocalizedLinkHref } from "@/lib/navigation";

type SideMenuItemProps = {
  label: string;
  icon: string;
  href: LocalizedLinkHref;
  hideLabel?: boolean;
};

const SideMenuItem = ({ href, icon, label, hideLabel }: SideMenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Button
        variant={isActive ? "active" : "ghost"}
        className={`h-auto w-full justify-start py-2 sm:max-lg:w-auto sm:max-lg:px-2 ${
          isActive ? "border-b-2" : "text-foreground/85"
        }`}
        asChild
      >
        <Link
          href={href}
          title={label}
          {...(hideLabel && { "aria-label": label })}
        >
          <span className="relative block size-10">
            <Image
              className="object-cover"
              src={`/icons/${icon}.svg`}
              alt={`${label} icon`}
              fill
            />
          </span>
          {!hideLabel && (
            <span className="ml-5 truncate sm:max-lg:sr-only">{label}</span>
          )}
        </Link>
      </Button>
    </li>
  );
};

export default SideMenuItem;
