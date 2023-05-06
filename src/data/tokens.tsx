import { Hero, Statistics } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import tokensHero from "../assets/images/tokens-hero.png";
import stakingBasicModel from "../assets/images/staking-basic-model.png";
import stakingAdvancedModel from "../assets/images/staking-advanced-model.png";
import totalSupply from "../assets/images/total-supply.png";
import annualInflationRate from "../assets/images/annual-inflation-rate.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useTokensData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const tokenStatistics = getTokensStatistics(t);
  const stakingModelData = getStakingModel(t);
  const ringInflationModel = getRingInflationModel(t);
  return {
    heroData,
    tokenStatistics,
    stakingModelData,
    ringInflationModel,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    image: <img className={"w-full"} src={tokensHero} alt="image" />,
    text: t(localeKeys.internetOfTokens),
    links: [
      {
        title: t(localeKeys.howToStake),
        url: "https://darwinia.notion.site/Staking-56cd5e14439b4c9789f1cf63edd1d9d7",
        isExternal: true,
      },
    ],
  };
};

const getTokensStatistics = (t: TFunction<"translation">): Statistics => {
  return {
    title: (
      <div className={"title-lg uppercase text-white"} dangerouslySetInnerHTML={{ __html: t(localeKeys.tokens) }} />
    ),
    text: t(localeKeys.tokensIntro),
    links: [
      {
        title: t(localeKeys.learnMore),
        url: "/genepaper_v2.pdf",
        isExternal: true,
      },
    ],
    data: [],
  };
};

const getStakingModel = (t: TFunction<"translation">): Statistics => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.stakingModel) }}
      />
    ),
    text: t(localeKeys.stakingModelIntro),
    links: [
      {
        title: t(localeKeys.learnMore),
        url: "/genepaper_v2.pdf",
        isExternal: true,
      },
    ],
    statisticsImages: [stakingBasicModel, stakingAdvancedModel],
  };
};

const getRingInflationModel = (t: TFunction<"translation">): Statistics => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.ringInflationModel) }}
      />
    ),
    text: t(localeKeys.ringInflationInfo),
    subText: t(localeKeys.ringInflationNote),
    links: [
      {
        title: t(localeKeys.learnMore),
        url: "/genepaper_v2.pdf",
        isExternal: true,
      },
    ],
    statisticsImages: [totalSupply, annualInflationRate],
  };
};
