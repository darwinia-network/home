import FeatureV2 from "./FeatureV2";

export const features: { icon: string; title: string; description: string }[] = [
  {
    icon: "/images/features/chain-free-empowerment.png",
    title: "Chain-Free Empowerment",
    description:
      "Darwinia revolutionizes DApp development, enabling developers to easily build across multiple chains, free from underlying protocol constraints, and focus on innovation and user experience",
  },
  {
    icon: "/images/features/composable-modules.png",
    title: "Composable Modules",
    description:
      "Darwinia Msgport modules enhance functionality while maintaining separation from core protocols, streamlining the creation of composable, integrated DApps",
  },
  {
    icon: "/images/features/versatile-message-lines.png",
    title: "Versatile Message Lines",
    description:
      "Darwinia Msgport offers a unified, simple port to access a wide array of networks. It integrates a diverse range of messaging protocols like ORMP, LCMP, XCMP, and CCIP, catering to the ever-changing and varied needs of cross-chain applications",
  },
];

export default function Features() {
  return (
    <>
      <div className="flex flex-col gap-[60px] lg:hidden">
        {features.map(({ icon, title, description }) => (
          <FeatureV2 key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
      <div className="lg:flex flex-col hidden gap-[90px] w-fit">
        <div className="flex items-center justify-center">
          {features.at(1) ? (
            <FeatureV2 icon={features[1].icon} title={features[1].title} description={features[1].description} />
          ) : null}
        </div>
        <div className="flex items-center gap-[304px]">
          {features.at(0) ? (
            <FeatureV2 icon={features[0].icon} title={features[0].title} description={features[0].description} />
          ) : null}
          {features.at(2) ? (
            <FeatureV2 icon={features[2].icon} title={features[2].title} description={features[2].description} />
          ) : null}
        </div>
      </div>
    </>
  );
}
