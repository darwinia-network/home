import { TFunction, useTranslation } from "react-i18next";
import { Hero } from "./types";
import helloDarwiniaChain from "../assets/images/hello-darwinia-chain.png";

export const useDarwiniaChainData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  return { heroData };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    image: <img alt="..." src={helloDarwiniaChain} />,
    text: t("EVM compatible smart contract platform, sharing security of Polkadot."),
    links: [
      {
        title: t("Try it Now >"),
        url: "https://docs.darwinia.network/",
        isExternal: true,
      },
    ],
  };
};
