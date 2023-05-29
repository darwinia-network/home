import { useTranslation } from "react-i18next";
import compatiblePlatform from "../../assets/images/compatible-platform.png";
import { PropsWithChildren } from "react";

const features = [
  ["Complete Set of Web3 RPC Endpoints", "Publish-Subscribe Capabilities", "H160 Accounts & ECDSA Signatures"],
  ["Low gas fee", "Lightning fast tx", "On-chain governance"],
];

export default function CompatiblePlatform() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* title */}
      <div>
        <PartialTitle className="text-primary">{t("EVM Smart Contract ")}</PartialTitle>
        <PartialTitle className="text-white">{t("platform")}</PartialTitle>
      </div>

      {/* sub title */}
      <div className="lg:mt-1 lg:mb-4">
        <span className="text text-sm leading-6 font-light text-gray">
          {t("Darwinia Chain provides a development environment that is fully compatible with EVM.")}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-7 mt-7">
        <Features features={features[0]} className="hidden lg:flex" />
        <img alt="..." src={compatiblePlatform} className="w-full lg:w-2/5" />
        <Features features={features[1]} className="hidden lg:flex" />

        <div className="flex lg:hidden justify-between">
          <Features features={features[0]} className="flex" />
          <Features features={features[1]} className="flex" />
        </div>
      </div>
    </div>
  );
}

const PartialTitle = ({ className, children }: PropsWithChildren<{ className: string }>) => (
  <span className={`uppercase title font-bold text-2xl lg:text-5xl lg:leading-[4rem] ${className}`}>{children}</span>
);

const Features = ({ features, className }: { features: string[]; className: string }) => (
  <div className={`flex-col items-start justify-start gap-2 lg:gap-8 ${className}`}>
    {features.map((feature, index) => (
      <span key={index} className="title lg:text text-xs lg:text-sm leading-6 font-semibold lg:font-light capitalize">
        -{feature}
      </span>
    ))}
  </div>
);
