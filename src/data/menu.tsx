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
    // {
    //   title: t(localeKeys.tokens),
    //   path: "/tokens",
    // },
    {
      title: t(localeKeys.community),
      path: "/community",
    },
    {
      title: t(localeKeys.blog),
      path: "https://medium.com/darwinianetwork",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.support),
      path: "https://darwinia.notion.site/a76d5bdc7ad242bea991c023dfca208f?v=5fb127fc9a7a4d67a3bbc3ed50445180",
      isExternalLink: true,
    },
  ];
};
const getDarwiniaNetworkLinks = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.stakingApps),
      path: "https://staking.darwinia.network/#/?network=Darwinia",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.darwiniaAppsPortal),
      path: "https://apps.darwinia.network/portal",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subscanExplorer),
      path: "https://darwinia.subscan.io/",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.subviewExplorer),
      path: "https://darwinia.subview.xyz/",
      isComingSoon: true,
    },
    {
      title: t(localeKeys.polkadotParachainAuction),
      path: "https://darwinia-network.github.io/home-v1/plo",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.generalAccountMigration),
      path: "https://migration.darwinia.network/#/?network=Darwinia",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.multisigAccountMigration),
      path: "https://migration.darwinia.network/#/multisig-home?network=Darwinia",
      isExternalLink: true,
    },
  ];
};

const getCrabNetworkLinks = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.stakingApps),
      path: "https://staking.darwinia.network/#/?network=Crab",
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
    {
      title: t(localeKeys.kusamaParachainAuction),
      path: "https://darwinia-network.github.io/crab-home-v1/plo_contribute",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.generalAccountMigration),
      path: "https://migration.darwinia.network/#/?network=Crab",
      isExternalLink: true,
    },
    {
      title: t(localeKeys.multisigAccountMigration),
      path: "https://migration.darwinia.network/#/multisig-home?network=Crab",
      isExternalLink: true,
    },
  ];
};
