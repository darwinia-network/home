import { Footer } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import telegram from "../assets/images/telegram.png";
import twitter from "../assets/images/twitter.png";
import medium from "../assets/images/medium.png";
import mail from "../assets/images/mail.png";
import github from "../assets/images/github.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useFooterData = () => {
  const { t } = useTranslation();
  const footerData = getFooterData(t);
  return {
    footerData,
  };
};

const getFooterData = (t: TFunction<"translation">): Footer => {
  const year = new Date().getFullYear();
  return {
    copyright: <div dangerouslySetInnerHTML={{ __html: t(localeKeys.darwiniaNetworkCopyright, { year }) }} />,
    referenceLinks: [
      {
        title: t(localeKeys.developers),
        links: [
          {
            isExternal: true,
            url: "https://docs.darwinia.network/",
            title: t(localeKeys.developerDocs),
          },
          {
            isExternal: false,
            url: "/developers",
            title: t(localeKeys.developerResources),
          },
        ],
      },
      {
        title: t(localeKeys.useCases),
        links: [
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.overview),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.crossChainDex),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.lending),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.crossChainAssetBridge),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.nftMarket),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.daoGovernance),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.multiChainGaming),
          },
        ],
      },
      {
        title: t(localeKeys.resources),
        links: [
          {
            isExternal: false,
            url: "/papers",
            title: t(localeKeys.papers),
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/",
            title: t(localeKeys.wiki),
          },
          {
            isExternal: true,
            url: "https://www.notion.so/itering/9617e154ec884b07a7cee9a056374e42?v=0c3e4d9f257646c486a32a0425ee3a93",
            title: t(localeKeys.roadmap),
          },
          {
            isExternal: true,
            url: "https://medium.com/darwinianetwork",
            title: t(localeKeys.blog),
          },
          {
            isExternal: true,
            url: "https://telemetry.polkadot.io/#list/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
            title: t(localeKeys.telemetry),
          },
          {
            isExternal: true,
            url: "mailto:hello@darwinia.network",
            title: t(localeKeys.cooperation),
          },
          {
            isExternal: true,
            url: "https://www.itering.io/jobs?lng=en-US",
            title: t(localeKeys.careers),
          },
          {
            isExternal: true,
            url: "/darwinia_brand.zip",
            title: t(localeKeys.brand),
          },
        ],
      },
      {
        title: t(localeKeys.collaboration),
        links: [
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.substrateBuildersProgram),
            isFake: true,
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.web3Foundation),
            isFake: true,
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.web3Bootcamp),
            isFake: true,
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.polkadot),
            isFake: true,
          },
        ],
      },
    ],
    socialNetworks: [
      {
        logo: twitter,
        url: "https://twitter.com/DarwiniaNetwork",
      },
      {
        logo: telegram,
        url: "https://t.me/DarwiniaNetwork",
      },
      {
        logo: github,
        url: "https://github.com/darwinia-network",
      },
      {
        logo: medium,
        url: "https://medium.com/darwinianetwork",
      },
      {
        logo: mail,
        url: "mailto:hello@darwinia.network",
      },
    ],
  };
};
