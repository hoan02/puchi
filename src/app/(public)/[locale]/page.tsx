import Hero from "@/components/landing/Hero";
import Languages from "@/components/landing/Languages";
import Metrics from "@/components/landing/Metrics";
import Fluency from "@/components/landing/Fluency";
import Reasons from "@/components/landing/Reasons";

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
