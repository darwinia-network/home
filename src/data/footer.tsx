import { Footer } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import telegram from "../assets/images/telegram.png";
import twitter from "../assets/images/twitter.png";
import medium from "../assets/images/medium.png";
import mail from "../assets/images/mail.png";
import github from "../assets/images/github.png";
import discord from "../assets/images/discord.png";
import element from "../assets/images/element.png";

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
        categories: [
          {
            title: t(localeKeys.developers),
            links: [
              {
                isExternal: true,
                url: "https://docs.darwinia.network/",
                title: "Documentation",
              },
            ],
          },
          {
            title: t("Solutions"),
            links: [
              {
                title: "Darwinia EVM + XCMP",
                url: "https://docs.darwinia.network/darwinia-chains-df814f681ec248438cb762df8aaddbd6",
                isExternal: true,
              },
              {
                title: t("Darwinia Msgport"),
                url: "https://docs.darwinia.network/darwinia-msgport-fa89f501ea1747e285b6169697e2ff77",
                isExternal: true,
              },
            ],
          },
        ],
        title: "",
        links: [],
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
            url: "https://darwinia.notion.site/c700133dd5a04c2494ceab489c75c907?v=8ff88199019d4236a3b9a190f5e7b9d5",
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
            url: "https://darwinia.notion.site/Join-Us-d573135a4b5144bca530276d99e6d9f0",
            title: t(localeKeys.careers),
          },
          {
            isExternal: true,
            url: "https://darwinia.notion.site/Brand-Assets-9bd35f88f0674232954737577616f2c2",
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
        logo: discord,
        url: "https://discord.com/invite/aQdK9H4MZS",
      },
      {
        logo: element,
        url: "https://app.element.io/#/room/#darwinia:matrix.org",
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
