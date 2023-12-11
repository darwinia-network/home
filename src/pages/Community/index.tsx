import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { useCommunityData } from "../../data/community";
import Hero from "../../components/Hero";
import FeatureWrapper from "../../components/FeatureWrapper";

const Community = () => {
  const { footerData } = useFooterData();
  const { heroData, getInvolvedData } = useCommunityData();

  return (
    <div>
      <Hero page={"COMMUNITY"} data={heroData} />
      <div
        data-aos={"fade-up"}
        data-aos-duration={700}
        className={"max-w-8xl w-full mx-auto lg:px-8 px-4 inter-block-space-1"}
      >
        <FeatureWrapper data={getInvolvedData} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Community;
