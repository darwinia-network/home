import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { useCommunityData } from "../../data/community";
import Hero from "../../components/Hero";

const Community = () => {
  const { footerData } = useFooterData();
  const { heroData } = useCommunityData();

  return (
    <div>
      <Hero data={heroData} />
      <Footer data={footerData} />
    </div>
  );
};

export default Community;
