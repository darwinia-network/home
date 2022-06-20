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
            url: "https://www.google.com",
            title: t(localeKeys.developerDocs),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.developerResources),
          },
        ],
      },
      {
        title: t(localeKeys.useCases),
        links: [
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.overview),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.crossChainDex),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.lending),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.crossChainAssetBridge),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.nftMarket),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.daoGovernance),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.multiChainGaming),
          },
        ],
      },
      {
        title: t(localeKeys.resources),
        links: [
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.papers),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.wiki),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.roadmap),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.blog),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.telemetry),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.cooperation),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.careers),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.brand),
          },
        ],
      },
      {
        title: t(localeKeys.collaboration),
        links: [
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.substrateBuildersProgram),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.web3Foundation),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.web3Bootcamp),
          },
          {
            isExternal: true,
            url: "https://www.google.com",
            title: t(localeKeys.polkadot),
          },
        ],
      },
    ],
    socialNetworks: [
      {
        logo: twitter,
        url: "https://twitter.com",
      },
      {
        logo: telegram,
        url: "https://telegram.com",
      },
      {
        logo: github,
        url: "https://github.com",
      },
      {
        logo: medium,
        url: "https://medium.com",
      },
      {
        logo: mail,
        url: "mailto:someone@example.com",
      },
    ],
  };
};
