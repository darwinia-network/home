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
      path: "https://medium.com/darwinianetwork",
      isExternalLink: true,
    },
  ];
};

const getDarwiniaNetworkLinks = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.overview),
      path: "https://darwinia.network/",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.stakingApps),
      path: "https://apps.darwinia.network/?network=darwinia",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.onChainGovernance),
      path: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.darwinia.network#/democracy",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.polkadotParachainAuction),
      path: "https://darwinia.network/plo",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subscanExplorer),
      path: "https://darwinia.subscan.io/",
      isExternalLink: true,
    },
  ];
};

const getCrabNetworkLinks = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.overview),
      path: "https://crab.network/",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.stakingApps),
      path: "https://apps.darwinia.network/?network=crab",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.onChainGovernance),
      path: "https://crab.subsquare.io/",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.kusamaParachainAuction),
      path: "https://crab.network/plo",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subscanExplorer),
      path: "https://crab.subscan.io/",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subviewExplorer),
      path: "https://subview.xyz/",
      isExternalLink: true,
    },
  ];
};
