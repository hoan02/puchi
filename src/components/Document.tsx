import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
