import { ClerkProvider } from "@clerk/nextjs";
import { viVN, enUS } from "@clerk/localizations";
import { LocalizationResource } from "@clerk/types";

export type Localizations = {
  [key: string]: LocalizationResource;
};

export const localizations: Localizations = {
  vi: viVN,
  en: enUS,
};

type ClerkLocalizationProviderProps = {
  children: React.ReactNode;
  locale: string;
};

const ClerkLocalizationProvider = ({
  children,
  locale,
}: ClerkLocalizationProviderProps) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          colorPrimary: "hsl(142, 71%, 45%)",
        },
      }}
      localization={localizations[locale]}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkLocalizationProvider;
