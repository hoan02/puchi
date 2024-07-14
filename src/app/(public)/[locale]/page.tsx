import { unstable_setRequestLocale } from "next-intl/server";

import Hero from "@/components/landing/Hero";
import Languages from "@/components/landing/Languages";
import Metrics from "@/components/landing/Metrics";
import Fluency from "@/components/landing/Fluency";
import Reasons from "@/components/landing/Reasons";

type Props = {
  params: { locale: string };
};

const HomePage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Languages />
      <Metrics>
        <Fluency />
      </Metrics>
      <Reasons />
    </>
  );
};

export default HomePage;
