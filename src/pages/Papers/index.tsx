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
      <Hero page={"PAPERS"} data={heroData} />
      <div data-aos={"fade-up"} data-aos-duration={700} className={"max-w-8xl w-full mx-auto lg:px-8 px-4 inter-block-space-1"}>
        <PapersGrid data={papersData} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Papers;
