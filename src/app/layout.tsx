import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata = {
  generator: "Next.js",
  applicationName: "Puchi",
  referrer: "origin-when-cross-origin",
  keywords: ["Puchi", "learn vietnamese", "HoanIT", "hoan02"],
  authors: [
    { name: "Hoan" },
    { name: "Hoan", url: "https://www.facebook.com/hoanit02" },
  ],
  creator: "Lê Công Hoan",
  publisher: "Hoan IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Props) {
  return children;
}
