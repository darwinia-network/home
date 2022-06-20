import { Menu } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useMenuData = () => {
  const { t } = useTranslation();
  const menu = getMenu(t);
  return {
    menu,
  };
};

const getMenu = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.developers),
      path: "/developers",
    },
    {
      title: `${t(localeKeys.darwiniaNetwork)}▾`,
      device: "MOBILE",
      children: getDarwiniaNetworkLinks(t),
    },
    {
      title: `${t(localeKeys.crabNetwork)}▾`,
      device: "MOBILE",
      children: getCrabNetworkLinks(t),
    },
    {
      title: `${t(localeKeys.networks)}▾`,
      device: "PC",
      children: [
        {
          title: t(localeKeys.darwinia),
          children: getDarwiniaNetworkLinks(t),
        },
        {
          title: t(localeKeys.crab),
          children: getCrabNetworkLinks(t),
        },
      ],
    },
    {
      title: t(localeKeys.tokens),
      path: "/tokens",
    },
    {
      title: t(localeKeys.community),
      path: "/community",
    },
    {
      title: t(localeKeys.blog),
      path: "https://www.google.com",
      isExternalLink: true,
    },
  ];
};

const getDarwiniaNetworkLinks = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.overview),
      path: "https://www.baidu.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.stakingApps),
      path: "https://www.google.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.onChainGovernance),
      path: "https://www.yahoo.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.polkadotParachainAuction),
      path: "https://www.youku.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subscanExplorer),
      path: "https://www.google.com",
      isExternalLink: true,
    },
  ];
};

const getCrabNetworkLinks = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.overview),
      path: "https://www.baidu.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.stakingApps),
      path: "https://www.google.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.onChainGovernance),
      path: "https://www.yahoo.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.kusamaParachainAuction),
      path: "https://www.youku.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subscanExplorer),
      path: "https://www.google.com",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subviewExplorer),
      path: "https://www.google.com",
      isExternalLink: true,
    },
  ];
};
