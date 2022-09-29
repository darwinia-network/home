import { FeatureWrapper, Hero, TechSupport } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import heroImg from "../assets/images/build-with-darwinia-hero.png";
import introduction from "../assets/images/darwinia-introduction.png";
import guides from "../assets/images/darwinia-guides.png";
import api from "../assets/images/darwinia-api.png";
import examples from "../assets/images/darwinia-examples.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useDevelopersData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const devRoadmapData = getDarwiniaDevRoadmap(t);
  const techSupportData = getTechSupport(t);
  return {
    heroData,
    devRoadmapData,
    techSupportData,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    image: <img className={"w-full"} src={heroImg} alt="image" />,
    text: t(localeKeys.buildUserFriendly),
  };
};

const getDarwiniaDevRoadmap = (t: TFunction<"translation">): FeatureWrapper => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.developWithDarwinia) }}
      />
    ),
    pcGrid: 2,
    data: [
      {
        icon: introduction,
        title: t(localeKeys.introduction),
        links: [
          {
            isExternal: true,
            url: "https://docs.darwinia.network/",
            title: t(localeKeys.getStarted),
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/glossary",
            title: t(localeKeys.glossary),
          },
        ],
        type: 3,
      },
      {
        icon: guides,
        title: t(localeKeys.guides),
        links: [
          {
            isExternal: true,
            url: "https://docs.darwinia.network/sdk/guides/using-smart-chain-with-metamask",
            title: t(localeKeys.smartChainWithMetamask),
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/sdk/guides/know-your-cross-chain-status",
            title: t(localeKeys.yourCrossChainStatus),
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/sdk/guides/build-your-first-cross-chain-dapp",
            title: t(localeKeys.firstCrossChainDApp),
          },
        ],
        type: 3,
      },
      {
        icon: api,
        title: t(localeKeys.api),
        links: [
          {
            isExternal: true,
            url: "https://docs.darwinia.network/sdk/api-reference",
            title: t(localeKeys.solidityForSmartChain),
          },
        ],
        type: 3,
      },
      {
        icon: examples,
        title: t(localeKeys.examples),
        links: [
          {
            isExternal: true,
            url: "https://github.com/darwinia-network/darwinia-messages-sol/blob/master/contracts/periphery/contracts/s2s/examples/dispatch/RemarkDemo.sol",
            title: t(localeKeys.demoCrossChainRemark),
          },
          {
            isExternal: true,
            url: "https://github.com/darwinia-network/darwinia-messages-sol/blob/master/contracts/periphery/contracts/s2s/examples/execute/ExecuteDemo.sol",
            title: t(localeKeys.demoRemoteEVMTransact),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.demoERC20RemoteIssuing),
          },
        ],
        type: 3,
      },
    ],
  };
};

const getTechSupport = (t: TFunction<"translation">): TechSupport => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.findTechSolution) }}
      />
    ),
    text: t(localeKeys.techSolutionIntro),
    link: {
      isExternal: true,
      url: "https://t.me/DarwiniaDev",
      title: t(localeKeys.devTelegram),
    },
  };
};
