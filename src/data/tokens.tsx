import { Hero, Statistics } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import tokensHero from "../assets/images/tokens-hero.png";
import ring from "../assets/images/ring.svg";
import kTon from "../assets/images/kton.svg";
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
        url: "https://www.google.com",
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
        url: "https://www.google.com",
        isExternal: true,
      },
    ],
    data: [
      {
        title: t(localeKeys.ring),
        image: ring,
        data: [
          {
            info: t(localeKeys.initialSupply),
            figure: "2,000,000,000",
          },
          {
            info: t(localeKeys.circulatingSupply),
            figure: "511,306,888",
          },
          {
            info: t(localeKeys.totalSupply),
            figure: "2,149,283,936",
          },
        ],
      },
      {
        title: t(localeKeys.kTon),
        image: kTon,
        data: [
          {
            info: t(localeKeys.initialSupply),
            figure: "--",
          },
          {
            info: t(localeKeys.circulatingSupply),
            figure: "39,781",
          },
          {
            info: t(localeKeys.totalSupply),
            figure: "91,337",
          },
        ],
      },
    ],
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
        url: "https://www.google.com",
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
        url: "https://www.google.com",
        isExternal: true,
      },
    ],
    statisticsImages: [totalSupply, annualInflationRate],
  };
};
