import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Logout() {
  const t = useTranslations("Logout");
  return <Link href="/app">{t("label")}</Link>;
}
