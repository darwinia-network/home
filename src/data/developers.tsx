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
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.startBuildingWithDarwinia) }}
      />
    ),
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
    data: [
      {
        icon: introduction,
        title: t(localeKeys.introduction),
        links: [
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.getStarted),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
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
            url: "https://www.google.com",
            title: t(localeKeys.smartChainWithMetamask),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.yourCrossChainStatus),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
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
            url: "https://www.google.com",
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
            url: "https://www.google.com",
            title: t(localeKeys.demoRMRK),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.demoCallback),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.demoCrossChainFilter),
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
      url: "https://www.google.com",
      title: t(localeKeys.devTelegram),
    },
  };
};
