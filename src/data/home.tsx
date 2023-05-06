import { CodeSample, DarwiniaPromo, FeatureWrapper, Hero, LightClient } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import programmable from "../assets/images/programmable.png";
import crossChain from "../assets/images/cross-chain.png";
import ultraLight from "../assets/images/ultra-light.png";
import lightClientFigure from "../assets/images/light-client-figure.png";
import sdk from "../assets/images/sdk.png";
import helixBridge from "../assets/images/helix-bridge.png";
import evolutionLand from "../assets/images/evolution-land.png";
import staking from "../assets/images/staking.png";
import partner from "../assets/images/partner.png";
import integration from "../assets/images/integration.png";
import { accessRestriction, remoteEVMCall, sendMessage } from "./codeSamples";
import HomeHeroAnimation from "../components/HomeHeroAnimation";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useHomeData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const darwiniaIntroData = getDarwiniaIntro(t);
  const howLightClientWorksData = getHowLightClientWorks(t);
  const darwiniaRecommendationData = getDarwiniaRecommendation(t);
  const ecosystemProjectsData = getEcosystemProjects(t);
  const darwiniaPowerData = getDarwiniaPower(t);
  const codeSamplesData = getCodeSamples(t);
  return {
    heroData,
    darwiniaIntroData,
    howLightClientWorksData,
    darwiniaRecommendationData,
    ecosystemProjectsData,
    darwiniaPowerData,
    codeSamplesData,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 1,
    image: <HomeHeroAnimation />,
    text: t(localeKeys.darwiniaIntroData),
    links: [
      {
        title: t(localeKeys.devWithDarwinia),
        url: "/developers",
        isExternal: false,
      },
      {
        title: t(localeKeys.learnMore),
        url: "https://docs.darwinia.network/",
        isExternal: true,
      },
    ],
  };
};

const getDarwiniaIntro = (t: TFunction<"translation">): FeatureWrapper => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.whatIsDarwinia) }}
      />
    ),
    pcGrid: 3,
    data: [
      {
        icon: programmable,
        title: t(localeKeys.programmable),
        text: t(localeKeys.programmableText),
        type: 1,
      },
      {
        icon: crossChain,
        title: t(localeKeys.crossChain),
        text: t(localeKeys.crossChainText),
        type: 1,
      },
      {
        icon: ultraLight,
        title: t(localeKeys.ultraLight),
        text: t(localeKeys.ultraLightText),
        type: 1,
      },
    ],
    links: [
      {
        title: t(localeKeys.devWithDarwinia),
        url: "/developers",
        isExternal: false,
      },
      {
        title: t(localeKeys.learnMore),
        url: "https://docs.darwinia.network/",
        isExternal: true,
      },
    ],
  };
};

const getHowLightClientWorks = (t: TFunction<"translation">): LightClient => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.lightClientTitle) }}
      />
    ),
    text: t(localeKeys.lightClientText),
    subTitle: t(localeKeys.lightClientSubTitle),
    image: lightClientFigure,
  };
};

const getDarwiniaRecommendation = (t: TFunction<"translation">): DarwiniaPromo => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.darwiniaPromoTitle) }}
      />
    ),
    subTitle: t(localeKeys.darwiniaPromoSubTitle),
    content: {
      text: t(localeKeys.darwiniaPromoContent),
      list: [
        t(localeKeys.darwiniaPromoContentText1),
        t(localeKeys.darwiniaPromoContentText2),
        t(localeKeys.darwiniaPromoContentText3),
        t(localeKeys.darwiniaPromoContentText4),
        t(localeKeys.darwiniaPromoContentText5),
        t(localeKeys.darwiniaPromoContentText6),
      ],
    },
    image: sdk,
    links: [
      {
        title: t(localeKeys.sdkDoc),
        url: "https://docs.darwinia.network/solidity-sdk-ac0f639b18094a4caeb1b39714f406b9",
        isExternal: true,
      },
      {
        title: t(localeKeys.learnMore),
        url: "https://docs.darwinia.network/",
        isExternal: true,
      },
    ],
  };
};

const getEcosystemProjects = (t: TFunction<"translation">): FeatureWrapper => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.ecosystemProjects) }}
      />
    ),
    pcGrid: 3,
    data: [
      {
        icon: helixBridge,
        title: t(localeKeys.helixBridge),
        text: t(localeKeys.helixBridgeIntro),
        type: 2,
        links: [
          {
            title: t(localeKeys.learnMore),
            url: "https://helixbridge.app/",
            isExternal: true,
          },
        ],
      },
      {
        icon: evolutionLand,
        title: t(localeKeys.evolutionLand),
        text: t(localeKeys.evolutionLandIntro),
        type: 2,
        links: [
          {
            title: t(localeKeys.learnMore),
            url: "https://www.evolution.land/",
            isExternal: true,
          },
        ],
      },
    ],
  };
};

const getDarwiniaPower = (t: TFunction<"translation">): FeatureWrapper => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.poweringDarwinia) }}
      />
    ),
    pcGrid: 3,
    data: [
      {
        icon: staking,
        title: t(localeKeys.staking),
        text: t(localeKeys.stakingIntro),
        type: 2,
        links: [
          {
            title: t(localeKeys.startStake),
            url: "https://darwinia.notion.site/Staking-56cd5e14439b4c9789f1cf63edd1d9d7",
            isExternal: true,
          },
          {
            title: t(localeKeys.runCollator),
            url: "https://docs.darwinia.network/how-to-become-a-collator-af6bce360d5b49ddacc56e4587510210",
            isExternal: true,
          },
        ],
      },
      {
        icon: partner,
        title: t(localeKeys.partner),
        text: t(localeKeys.partnerIntro),
        type: 2,
        links: [
          {
            title: t(localeKeys.sdkDoc),
            url: "https://docs.darwinia.network/solidity-sdk-ac0f639b18094a4caeb1b39714f406b9",
            isExternal: true,
          },
          {
            title: t(localeKeys.contactUs),
            url: "https://t.me/DarwiniaDev",
            isExternal: true,
          },
        ],
      },
      {
        icon: integration,
        title: t(localeKeys.integration),
        text: t(localeKeys.integrationIntro),
        type: 2,
        links: [
          {
            title: t(localeKeys.talkToExpert),
            url: "https://forms.gle/96Z9HYuAFaeHE1hp8",
            isExternal: true,
          },
        ],
      },
    ],
  };
};

const getCodeSamples = (t: TFunction<"translation">): CodeSample => {
  return {
    links: [
      {
        isExternal: true,
        title: t(localeKeys.sdkDoc),
        url: "https://docs.darwinia.network/solidity-sdk-ac0f639b18094a4caeb1b39714f406b9",
      },
      {
        isExternal: true,
        title: t(localeKeys.learnMore),
        url: "https://docs.darwinia.network/",
      },
    ],
    codes: [
      {
        title: t(localeKeys.sendMessage),
        language: "solidity",
        sample: sendMessage,
      },
      {
        title: t(localeKeys.remoteEVMCall),
        language: "solidity",
        sample: remoteEVMCall,
      },
      {
        title: t(localeKeys.accessRestriction),
        language: "solidity",
        sample: accessRestriction,
      },
    ],
  };
};
