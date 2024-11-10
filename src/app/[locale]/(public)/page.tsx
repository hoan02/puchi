import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/landing/Hero"));
const Languages = dynamic(() => import("@/components/landing/Languages"));
const Metrics = dynamic(() => import("@/components/landing/Metrics"));
const Fluency = dynamic(() => import("@/components/landing/Fluency"));
const Reasons = dynamic(() => import("@/components/landing/Reasons"));

const HomePage = () => {
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
