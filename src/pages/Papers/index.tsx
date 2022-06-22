import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { usePapersData } from "../../data/papers";
import Hero from "../../components/Hero";
import PapersGrid from "../../components/PapersGrid";

const Papers = () => {
  const { footerData } = useFooterData();
  const { heroData, papersData } = usePapersData();

  return (
    <div>
      <Hero data={heroData} />
      <div data-aos={"fade-up"} data-aod-duration={700} className={"container inter-block-space-1"}>
        <PapersGrid data={papersData} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Papers;
