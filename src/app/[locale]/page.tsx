import dynamic from "next/dynamic";
import { unstable_setRequestLocale } from "next-intl/server";

const Hero = dynamic(() => import("@/components/landing/Hero"));
const Languages = dynamic(() => import("@/components/landing/Languages"));
const Metrics = dynamic(() => import("@/components/landing/Metrics"));
const Fluency = dynamic(() => import("@/components/landing/Fluency"));
const Reasons = dynamic(() => import("@/components/landing/Reasons"));

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
