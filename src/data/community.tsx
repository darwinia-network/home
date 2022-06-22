import { FeatureWrapper, Hero } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import communityHero from "../assets/images/darwinia-community.png";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
import union from "../assets/images/union.svg";
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
        url: "https://www.google.com",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: telegram,
        url: "https://www.google.com",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: union,
        url: "https://www.google.com",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: discord,
        url: "https://www.google.com",
        iconWidth: 25,
        iconHeight: 20,
      },
      {
        logo: medium,
        url: "https://www.google.com",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: github,
        url: "https://www.google.com",
        iconWidth: 20,
        iconHeight: 20,
      },
      {
        logo: message,
        url: "https://www.google.com",
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
            url: "https://www.google.com",
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
            url: "https://www.google.com",
            title: t(localeKeys.runValidator),
          },
        ],
      },
      {
        icon: darwiniaAmbassador,
        type: 4,
        links: [
          {
            isExternal: true,
            url: "https://www.google.com",
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
            url: "https://www.google.com",
            title: t(localeKeys.applyDarwiniaGrant),
          },
        ],
      },
    ],
  };
};
