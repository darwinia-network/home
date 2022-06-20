import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { useDevelopersData } from "../../data/developers";
import Hero from "../../components/Hero";
import FeatureWrapper from "../../components/FeatureWrapper";
import { NavLink } from "react-router-dom";

const Developers = () => {
  const { heroData, devRoadmapData, techSupportData } = useDevelopersData();
  const { footerData } = useFooterData();

  const techSupportLink = techSupportData.link.isExternal ? (
    <a href={techSupportData.link.url} className={"btn"} target="_blank" rel="noreferrer">
      {techSupportData.link.title}
    </a>
  ) : (
    <NavLink className={"btn"} to={techSupportData.link.url}>
      {techSupportData.link.title}
    </NavLink>
  );

  return (
    <div>
      <Hero data={heroData} />
      <div data-aos={"fade-up"} data-aod-duration={700} className={"container inter-block-space-1"}>
        <FeatureWrapper data={devRoadmapData} />
      </div>
      <div data-aos={"fade-up"} data-aod-duration={700} className={"container inter-block-space-1"}>
        <div className={"lg:border border-halfWhite lg:px-[20%] lg:py-[2.5rem]"}>
          <div className={"title lg:text-center"}>{techSupportData.title}</div>
          <div className={"lg:text-center text-white"}>{techSupportData.text}</div>
          <div className={"flex lg:justify-center mt-[1.25rem]"}>{techSupportLink}</div>
        </div>
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Developers;
