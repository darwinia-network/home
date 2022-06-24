import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import Hero from "../../components/Hero";
import { useTokensData } from "../../data/tokens";
import Statistics from "../../components/Statistics";

const Tokens = () => {
  const { footerData } = useFooterData();
  const { heroData, tokenStatistics, stakingModelData, ringInflationModel } = useTokensData();

  return (
    <div>
      <Hero page={"TOKENS"} data={heroData} />
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Statistics data={tokenStatistics} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Statistics data={stakingModelData} />
      </div>
      <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <Statistics data={ringInflationModel} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Tokens;
