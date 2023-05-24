import { Menu } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";

import darwiniaChainIcon from "../assets/images/darwinia-chain.svg";
import darwiniaMsgportIcon from "../assets/images/darwinia-msgport.svg";
import ecosystemAppsIcon from "../assets/images/ecosystem-apps.svg";
import stakingIcon from "../assets/images/staking.svg";
import crabChainIcon from "../assets/images/crab-chain.svg";
import faucetIcon from "../assets/images/faucet.svg";

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
      title: `${t(localeKeys.solutions)}▾`,
      device: "PC",
      children: [
        {
          title: t(localeKeys.darwiniaChain),
          children: getDarwiniaChainSubMenu(t),
          icon: darwiniaChainIcon,
          description: t(localeKeys.darwiniaChainDescription),
          isLive: true,
        },
        {
          title: t(localeKeys.darwiniaMsgport),
          icon: darwiniaMsgportIcon,
          description: t(localeKeys.darwiniaMsgportDescription),
          isComingSoon: true,
        },
      ],
    },
    {
      title: `${t(localeKeys.darwiniaChain)}▾`,
      device: "MOBILE",
      children: getDarwiniaChainSubMenu(t),
    },
    {
      title: t(localeKeys.developers),
      path: "/developers",
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
    {
      title: t(localeKeys.support),
      path: "https://darwinia.notion.site/a76d5bdc7ad242bea991c023dfca208f?v=5fb127fc9a7a4d67a3bbc3ed50445180",
      isExternalLink: true,
    },
  ];
};
const getDarwiniaChainSubMenu = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.ecosystemApps),
      path: "https://apps.darwinia.network/",
      isExternalLink: true,
      icon: ecosystemAppsIcon,
      description: t("Explore Dapps in Darwinia Ecosystem."),
    },
    {
      title: t(localeKeys.staking),
      path: "/staking?network=Darwinia",
      icon: stakingIcon,
      description: t("Stake RING & KTON to eran rewards."),
    },
    {
      title: t(localeKeys.crabChain),
      path: "https://docs.darwinia.network/crab-7d27b58cb42a4315b878281da0043aa6",
      isExternalLink: true,
      icon: crabChainIcon,
      description: t("Canary Network of Darwinia Chain."),
    },
    {
      title: t(localeKeys.faucet),
      path: "https://docs.darwinia.network/testnet-faucets-98a5b8e69c7e40b59973aa36af2ac647",
      isExternalLink: true,
      icon: faucetIcon,
      description: t("Get Test Tokens To experiment on TestNet."),
    },
    {
      title: t("Add Darwinia Chain to MetaMask"),
      device: "PC",
      action: "addChain",
    },
  ];
};
