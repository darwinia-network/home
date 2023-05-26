import Hero from "../../components/Hero";
import FeatureWrapper from "../../components/FeatureWrapper";
import { useHomeData } from "../../data/home";
import DarwiniaPromo from "../../components/DarwiniaPromo";
import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import CodeSample from "../../components/CodeSample";

const Home = () => {
  const {
    heroData,
    darwiniaIntroData,
    darwiniaRecommendationData,
    darwiniaPowerData,
    codeSamplesData,
  } = useHomeData();

  const { footerData } = useFooterData();

  return (
    <div>
      <Hero page={"HOME"} data={heroData} />
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <FeatureWrapper data={darwiniaIntroData} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <CodeSample data={{...codeSamplesData[0], pcSide: "left"}} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <CodeSample data={codeSamplesData[1]} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <DarwiniaPromo data={darwiniaRecommendationData} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <FeatureWrapper data={darwiniaPowerData} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Home;
