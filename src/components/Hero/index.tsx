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
  /* this fakeImageClass determines the width and height(virtually) of the 3D model on PC.
   * It will be a square, just to control the sibling element's height which is the 3d model
   * container (which is positioned absolute) */
  const fakeImageClass = data.type === 1 ? `lg:w-[54.58%] w-full shrink-0` : `hidden`;
  const textClass = data.type === 1 ? `lg:w-[43.083%]` : `flex-1`;
  const topSpace = page === "HOME" ? `space-top-1` : `space-top-2`;
  const Typewriter = getTypewriterByPage(page);
  return (
    <div className={`bg-center bg-cover bg-no-repeat`}>
      <div data-aos={"fade-up"} data-aos-duration={700} className={`container ${topSpace}`}>
        <div className={"flex flex-col lg:flex-row relative"}>
          <div className={`order-2 flex flex-col relative z-20 lg:justify-center lg:order-1 ${textClass}`}>
            <Suspense>
              <Typewriter />
            </Suspense>
            {text}
            {links}
            {socialNetworkLinks}
          </div>
          {/* this item is here just to expand the DOM's height, BUT only on PCs, its height is
          zero on mobile phones */}
          <div className={`opacity-0 order-1 flex-1 ml-[1.75rem] lg:order-2 ${fakeImageClass}`}>
            <div className={`pb-0 lg:pb-[100%]`} />
          </div>
          <div className={`order-1 flex-1 lg:order-2 ${imageClass}`}>{image}</div>
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
        <a key={key} href={link.url} target="_blank" className={"btn capitalize"} rel="noreferrer">
          {link.title}
        </a>
      );
    }
    return (
      <NavLink className={"btn capitalize"} key={key} to={link.url}>
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
