import { FeatureWrapper, Hero } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import communityHero from "../assets/images/darwinia-community.png";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
import element from "../assets/images/element.svg";
import discord from "../assets/images/discord.svg";
import medium from "../assets/images/medium.svg";
import github from "../assets/images/github.svg";
import message from "../assets/images/message.svg";
import startStake from "../assets/images/start-stake-2.png";
import runValidator from "../assets/images/run-validator.png";
import darwiniaAmbassador from "../assets/images/darwinia-ambassador.png";
import darwiniaGrants from "../assets/images/darwinia-grant.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useCommunityData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const getInvolvedData = getInvolved(t);
  return {
    heroData,
    getInvolvedData,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    image: <img className={"w-full"} src={communityHero} alt="image" />,
    text: t(localeKeys.darwiniaCommunityIntro),
    socialNetworks: [
      {
        logo: twitter,
        url: "https://twitter.com/DarwiniaNetwork",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: telegram,
        url: "https://t.me/DarwiniaNetwork",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: element,
        url: "https://app.element.io/#/room/#darwinia:matrix.org",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: discord,
        url: "https://discord.com/invite/aQdK9H4MZS",
        iconWidth: 25,
        iconHeight: 20,
      },
      {
        logo: medium,
        url: "https://medium.com/darwinianetwork",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: github,
        url: "https://github.com/darwinia-network",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: message,
        url: "https://github.com/darwinia-network/darwinia/discussions",
        iconWidth: 20,
        iconHeight: 20,
      },
    ],
  };
};

const getInvolved = (t: TFunction<"translation">): FeatureWrapper => {
  return {
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.getInvolved) }}
      />
    ),
    pcGrid: 4,
    data: [
      {
        icon: startStake,
        type: 4,
        links: [
          {
            isExternal: true,
            url: "https://darwinia.notion.site/Staking-56cd5e14439b4c9789f1cf63edd1d9d7",
            title: t(localeKeys.startStake),
          },
        ],
      },
      {
        icon: runValidator,
        type: 4,
        links: [
          {
            isExternal: true,
            url: "https://docs.darwinia.network/how-to-become-a-collator-af6bce360d5b49ddacc56e4587510210",
            title: t(localeKeys.runCollator),
          },
        ],
      },
      {
        icon: darwiniaAmbassador,
        type: 4,
        links: [
          {
            isExternal: true,
            url: "https://medium.com/@darwinianetwork/join-the-darwinia-ambassador-program-b57a0d8b2802",
            title: t(localeKeys.becomeDarwiniaAmbassador),
          },
        ],
      },
      {
        icon: darwiniaGrants,
        type: 4,
        links: [
          {
            isExternal: true,
            url: "https://github.com/darwinia-network/collaboration/blob/master/grant/README.md",
            title: t(localeKeys.applyDarwiniaGrant),
          },
        ],
      },
    ],
  };
};
