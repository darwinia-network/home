import { Hero, Paper } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import paperResourcesHero from "../assets/images/paper-resources.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const usePapersData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const papersData = getPapers(t);
  const getPaperById = (paperId: number): Paper | undefined => {
    return papersData.find((paper) => paper.id === paperId);
  };
  return {
    heroData,
    papersData,
    getPaperById,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    image: <img className={"w-full"} src={paperResourcesHero} alt="image" />,
    text: t(localeKeys.paperResourcesIntro),
  };
};

const getPapers = (t: TFunction<"translation">): Paper[] => {
  return [
    {
      id: 0,
      title: "Darwinia Genepaper v4",
      authors: ["Alex Chien", "Denny Wang"],
      tags: ["Cross-Chain Messaging", "Darwinia Msgport", "Darwinia EVM+"],
      summary: [
        "The blockchain industry has been evolving rapidly, witnessing the emergence of numerous blockchain networks. As proponents of a multi-chain future, we recognize the increasing need for DApp interoperability among these diverse chains. While addressing this interoperability challenge, our focus extends beyond safety to encompass versatility, generalizability, cost-effectiveness, and programmability.",
        "Currently, several service providers offer token bridges for token holders. However, most of these solutions are limited to specific assets or use cases, lacking the desired level of generalization and programmability. Moreover, the complexity that arises from layering application-layer smart contracts on top of underlying cross-chain solutions further compromises security. To meet the needs of cross-chain DApp developers, there is a requirement for layered protocols, including a purpose-built, generalized, and programmable cross-chain messaging layer to support their applications.",
        "Much like how Ethereum revolutionized the industry by introducing smart contracts, thereby transforming blockchains into programmable platforms and laying the foundation for the DApp boom and DeFi summer, we anticipate a substantial increase in blockchain functionality driven by new and emerging cross-chain messaging technologies.",
        "Darwinia aims to lead this trend with its cross-chain messaging services and infrastructure. We focus on enhancing the cross-chain capabilities of DApps by providing developers with Darwinia Msgport. This solution enables seamless integration of cross-chain functionality into their DApps. Additionally, Darwinia offers extensive support facilities and various message protocol options, including ORMP, LCMP, XCMP, L1-L2 Messaging, and more, in addition to the Darwinia EVM+ ability.",
      ],
      mobileSummary:
        "The blockchain industry has been evolving rapidly, witnessing the emergence of numerous blockchain networks. As proponents of a multi-chain future, we recognize the increasing need for DApp interoperability among these diverse chains. While addressing this interoperability challenge, our focus extends beyond safety to encompass versatility, generalizability, cost-effectiveness, and programmability.",
      link: {
        isExternal: true,
        title: t(localeKeys.viewFullPaper),
        url: "/Genepaper_v4.pdf",
      },
      titleUrl: "",
    },
    {
      id: 1,
      title: "Darwinia Genepaper v3",
      authors: ["Alex Chien", "Denny Wang"],
      tags: [t(localeKeys.darwiniaChainRelay), t(localeKeys.lightClient), t(localeKeys.optimisticVerification)],
      summary: t(localeKeys.darwiniaGenePaperSummary),
      mobileSummary: t(localeKeys.darwiniaGenePaperMobileSummary),
      link: {
        isExternal: true,
        title: t(localeKeys.viewFullPaper),
        url: "/Genepaper_v3.pdf",
      },
      titleUrl: "",
    },
    {
      id: 2,
      title: t(localeKeys.darwiniaOptimisticBridge),
      authors: ["Alex Chien", "Denny Wang"],
      tags: [
        t(localeKeys.darwiniaChainRelay),
        t(localeKeys.lightClient),
        t(localeKeys.optimisticVerification),
        t(localeKeys.merkleMountainRange),
      ],
      summary: t(localeKeys.darwiniaOptimisticBridgeSummary),
      mobileSummary: t(localeKeys.darwiniaOptimisticBridgeMobileSummary),
      link: {
        isExternal: true,
        title: t(localeKeys.viewFullPaper),
        url: "/itering_io_optimistic_bridge_technical_paper_en.pdf",
      },
      titleUrl: "",
    },
  ];
};
