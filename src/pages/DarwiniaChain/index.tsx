import { useFooterData } from "../../data/footer";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { useDarwiniaChainData } from "../../data/darwiniaChain";
import CompatiblePlatform from "../../components/CompatiblePlatform";
import DeveloperFriendly from "../../components/DeveloperFriendly";
import RingToken from "../../components/RingToken";
import Resources from "../../components/Resources";
import { PropsWithChildren } from "react";

const DarwiniaChain = () => {
  const { heroData } = useDarwiniaChainData();
  const { footerData } = useFooterData();

  return (
    <div>
      <Hero page="DARWINIA_CHAIN" data={heroData} />
      <Section>
        <CompatiblePlatform />
      </Section>
      <Section>
        <DeveloperFriendly />
      </Section>
      <Section>
        <RingToken />
      </Section>
      <Section>
        <Resources />
      </Section>
      <Footer data={footerData} />
    </div>
  );
};

function Section({ children }: PropsWithChildren<unknown>) {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-duration={700}
      className={"max-w-8xl w-full mx-auto lg:px-8 px-4 inter-block-space-1"}
    >
      {children}
    </div>
  );
}

export default DarwiniaChain;
