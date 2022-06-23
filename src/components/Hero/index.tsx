import { Hero as IHero, Link, Page, SocialNetwork } from "../../data/types";
import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

interface Props {
  data: IHero;
  page: Page;
}

const Hero = ({ data, page }: Props) => {
  const links = getLinks(data.links);
  const text = getText(data.text);
  const image = getImage(data.image);
  const socialNetworkLinks = getSocialNetworkLinks(data.socialNetworks);
  const imageClass = data.type === 1 ? `hero-image-1` : `hero-image-2`;
  const Typewriter = getTypewriterByPage(page);
  return (
    <div className={`bg-center bg-cover bg-no-repeat`}>
      <div data-aos={"fade-up"} data-aos-duration={700} className={`container space-top`}>
        <div className={"flex flex-col lg:flex-row pt-[1.25rem]"}>
          <div className={"order-2 flex-1 lg:order-1"}>
            <Suspense>
              <Typewriter />
            </Suspense>
            {text}
            {links}
            {socialNetworkLinks}
          </div>
          <div className={`order-1 lg:order-2 ${imageClass}`}>{image}</div>
        </div>
      </div>
    </div>
  );
};

const getTypewriterByPage = (page: Page) => {
  switch (page) {
    case "HOME": {
      return lazy(() => import("../HomeTypewriter"));
    }
    case "DEVELOPERS": {
      return lazy(() => import("../DevelopersTypewriter"));
    }
    case "TOKENS": {
      return lazy(() => import("../TokensTypewriter"));
    }
    case "COMMUNITY": {
      return lazy(() => import("../CommunityTypewriter"));
    }
    case "PAPERS":
    default: {
      return lazy(() => import("../PapersTypewriter"));
    }
  }
};

const getText = (text: string | undefined) => {
  if (!text) {
    return null;
  }
  return <div className={"text pb-[1.25rem] lg:pb-[1.875rem] capitalize"}>{text}</div>;
};

const getLinks = (links: Link[] | undefined) => {
  if (!links) {
    return null;
  }
  const linksJSX = links.map((link, index) => {
    const key = `${index}-${link.url}`;
    if (link.isExternal) {
      return (
        <a key={key} href={link.url} target="_blank" className={"btn"} rel="noreferrer">
          {link.title}
        </a>
      );
    }
    return (
      <NavLink className={"btn"} key={key} to={link.url}>
        {link.title}
      </NavLink>
    );
  });
  return <div className={"flex-wrap flex gap-[1.25rem]"}>{linksJSX}</div>;
};

const getSocialNetworkLinks = (socialNetworkLinks: SocialNetwork[] | undefined) => {
  if (!socialNetworkLinks) {
    return null;
  }
  const socialLinks = socialNetworkLinks.map((network, index) => {
    return (
      <a
        className={"shrink-0 hover:opacity-70 mr-[1.2rem] lg:mr-[2.5rem]"}
        key={index}
        href={network.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ width: `${network.iconWidth}px`, height: `${network.iconHeight}px` }}
          src={network.logo}
          alt="image"
        />
      </a>
    );
  });
  return <div className={"flex flex-wrap"}>{socialLinks}</div>;
};

const getImage = (image: JSX.Element) => {
  return image;
};

export default Hero;
