import { Hero } from "./types";
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

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useCommunityData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  return {
    heroData,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    image: <img className={"w-full"} src={communityHero} alt="image" />,
    title: (
      <div
        className={"title-lg uppercase text-white"}
        dangerouslySetInnerHTML={{ __html: t(localeKeys.welcomeToDarwiniaCommunity) }}
      />
    ),
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
