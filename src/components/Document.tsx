import { ReactNode } from "react";

import ThemeProvider from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { fonts } from "@/styles/fonts";
import "@/styles/globals.css";

type Props = {
  children: ReactNode;
  locale: string;
};

export default function Document({ children, locale }: Props) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="relative scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-300"
    >
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        <body className={cn(fonts, "flex flex-col font-sans")}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
