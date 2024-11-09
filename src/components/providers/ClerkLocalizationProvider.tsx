import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import {
  enUS,
  zhCN,
  deDE,
  esES,
  frFR,
  itIT,
  jaJP,
  koKR,
  ruRU,
} from "@clerk/localizations";
import { LocalizationResource } from "@clerk/types";

import "@/styles/clerk.css";

export type Localizations = {
  [key: string]: LocalizationResource;
};

export const localizations: Localizations = {
  en: enUS,
  zh: zhCN,
  de: deDE,
  es: esES,
  fr: frFR,
  it: itIT,
  ja: jaJP,
  ko: koKR,
  ru: ruRU,
};

type Props = {
  children: React.ReactNode;
  locale: string;
  dynamic?: boolean; // Set to true to enable dynamic localization
};

// Static rendering by default
// As a best practice, also consider wrapping <ClerkProvider dynamic> in <Suspense> to setup your application to take advantage of PPR.
// https://clerk.com/docs/references/nextjs/rendering-modes

const ClerkLocalizationProvider = ({
  children,
  locale,
  dynamic = false,
}: Props) => {
  return (
    <ClerkProvider
      dynamic={dynamic}
      appearance={{
        variables: {
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          colorPrimary: "hsl(142, 71%, 45%)",
        },
      }}
      localization={localizations[locale]}
    >
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default ClerkLocalizationProvider;
