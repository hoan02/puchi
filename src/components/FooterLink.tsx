import { Link } from "@/i18n/routing";

const FooterLink = () => {
  return (
    <div className="w-full py-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500 text-center font-bold font-din">
      <Link href="/about">ABOUT</Link>
      <Link href="/help">HELP</Link>
      <Link href="/attribution">ATTRIBUTION</Link>
      <Link href="/guidelines">GUIDELINES</Link>
      <Link href="/terms-of-service">TERMS</Link>
      <Link href="/privacy-policy">PRIVACY</Link>
    </div>
  );
};

export default FooterLink;
