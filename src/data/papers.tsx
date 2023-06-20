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
      id: 1,
      title: t(localeKeys.darwiniaGenePaper),
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
