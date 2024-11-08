import { Locale } from "@/i18n/config";

interface Country {
  title: string;
  flag: string;
  word: string;
}

const recordCountries: Record<Locale, Country> = {
  en: {
    title: "English",
    flag: "en",
    word: "Hello",
  },
  es: {
    title: "Spanish",
    flag: "es",
    word: "Hola",
  },
  fr: {
    title: "French",
    flag: "fr",
    word: "Bonjour",
  },
  kr: {
    title: "Korean",
    flag: "kr",
    word: "Annyeong",
  },
  jp: {
    title: "Japanese",
    flag: "jp",
    word: "Konnichiwa",
  },
  cn: {
    title: "Mandarin",
    flag: "cn",
    word: "Nǐ hǎo",
  },
  it: {
    title: "Italian",
    flag: "it",
    word: "Ciao",
  },
  ru: {
    title: "Russian",
    flag: "ru",
    word: "Привет",
  },
  de: {
    title: "German",
    flag: "de",
    word: "Hallo",
  },
};

export const countries: [Locale, Country][] = Object.entries(
  recordCountries
) as [Locale, Country][];
