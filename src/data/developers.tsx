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
    isNumbered: true,
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
            url: "https://docs.darwinia.network/getting-started-with-metamask-7e62c6c12f884e868110461b956b4f40",
            title: `${t(localeKeys.gettingStartedWithMetaMask)} >`,
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/create-a-simple-dapp-8e274497e45e41b981dbd7bf040f70d8",
            title: `${t(localeKeys.createASimpleDapp)} >`,
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/ethereum-lessgreater-darwinia-lessgreater-parachain-723500992ab44562ba11b2a79553da23",
            title: `${t(localeKeys.ethereumDarwiniaParachain)} >`,
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
            title: `${t(localeKeys.soliditySDKApi)} >`,
            isComingSoon: true,
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
