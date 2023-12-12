import Hero from "../../components/Hero";
import { useHomeData } from "../../data/home";
import DarwiniaPromo from "../../components/DarwiniaPromo";
import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import CodeSample from "../../components/CodeSample";
import { PropsWithChildren } from "react";

const Home = () => {
  const { heroData, darwiniaRecommendationData, codeSamplesData } = useHomeData();

  const { footerData } = useFooterData();

  return (
    <div>
      <Hero page={"HOME"} data={heroData} />
      <Section className="max-w-6xl">
        <CodeSample data={{ ...codeSamplesData[0], pcSide: "left" }} />
      </Section>
      <Section className="max-w-6xl">
        <CodeSample data={codeSamplesData[1]} />
      </Section>
      <Section>
        <DarwiniaPromo data={darwiniaRecommendationData} />
      </Section>
      <Footer data={footerData} />
    </div>
  );
};

function Section({ children, className = "max-w-8xl" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-duration={700}
      className={`w-full mx-auto lg:px-8 px-4 inter-block-space-1 ${className}`}
    >
      {children}
    </div>
  );
}

export default Home;
