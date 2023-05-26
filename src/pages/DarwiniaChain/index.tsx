import { useFooterData } from "../../data/footer";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { useDarwiniaChainData } from "../../data/darwiniaChain";
import CompatiblePlatform from "../../components/CompatiblePlatform";
import DeveloperFriendly from "../../components/DeveloperFriendly";
import RingToken from "../../components/RingToken";
import Resources from "../../components/Resources";

const DarwiniaChain = () => {
  const { heroData } = useDarwiniaChainData();
  const { footerData } = useFooterData();

  return (
    <div>
      <Hero page="DARWINIA_CHAIN" data={heroData} />
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <CompatiblePlatform />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <DeveloperFriendly />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <RingToken />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Resources />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default DarwiniaChain;
