"use client";

import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/constants/countries";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { redirect } from "next/navigation";

const SelectLanguage = () => {
  const currLocale = useLocale();
  const pathName = usePathname();

  const handleChangeLanguage = (locale: string) => {
    const newPath = `/${locale}${pathName}`;
    redirect(newPath);
  };

  return (
    <Select onValueChange={handleChangeLanguage} value={currLocale}>
      <SelectTrigger className="font-bold">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {countries.map(([locale, country]) => {
          return (
            <SelectItem key={locale} value={locale}>
              <div className="flex gap-4 items-center">
                <Image
                  src={`/images/flag/${country.flag}.svg`}
                  alt={`${country.title} flag`}
                  width={24}
                  height={16}
                />
                <p className="uppercase">{country.title}</p>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
