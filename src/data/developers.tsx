import { FeatureWrapper, Hero, TechSupport } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import heroImg from "../assets/images/build-with-darwinia-hero.png";
// import introduction from "../assets/images/darwinia-introduction.png";
import guides from "../assets/images/darwinia-guides.png";
import api from "../assets/images/darwinia-api.png";
// import examples from "../assets/images/darwinia-examples.png";

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
      /* {
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
      }, */
      {
        icon: guides,
        title: t(localeKeys.guides),
        links: [
          {
            isExternal: true,
            url: "https://www.notion.so/itering/Getting-Started-with-MetaMask-0916766fba6e417ea6532dc4386eefe1",
            title: t(localeKeys.gettingStartedWithMetaMask),
          },
          {
            isExternal: true,
            url: "https://www.notion.so/itering/Create-A-Simple-Dapp-8635c1b5131240848e3b6a68067712c1",
            title: t(localeKeys.createASimpleDapp),
          },
          {
            isExternal: true,
            url: "https://www.notion.so/itering/Ethereum-Darwinia-Parachain-a57933c2440146d2b531cd5ed1bd8308",
            title: t(localeKeys.ethereumDarwiniaParachain),
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
            title: t(localeKeys.soliditySDKApi),
            isComingSoon: true,
          },
          {
            isExternal: true,
            url: "https://darwinia-js-sdk.darwinia.network/",
            title: t(localeKeys.jsSDKApi),
          },
        ],
        type: 3,
      },
      /* {
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
      }, */
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
