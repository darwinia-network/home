import { Hero as IHero, Link, SocialNetwork } from "../../data/types";
import { NavLink } from "react-router-dom";

interface Props {
  data: IHero;
}

const Hero = ({ data }: Props) => {
  const links = getLinks(data.links);
  const text = getText(data.text);
  const title = getTitle(data.title);
  const image = getImage(data.image);
  const socialNetworkLinks = getSocialNetworkLinks(data.socialNetworks);
  const imageClass = data.type === 1 ? `hero-image-1` : `hero-image-2`;
  return (
    <div className={`bg-center bg-cover bg-no-repeat`}>
      <div data-aos={"fade-up"} data-aod-duration={700} className={`container space-top`}>
        <div className={"flex flex-col lg:flex-row pt-[1.25rem]"}>
          <div className={"order-2 flex-1 lg:order-1"}>
            {title}
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

const getTitle = (title: JSX.Element | undefined) => {
  if (!title) {
    return null;
  }
  return (
    <div
      className={
        "title-lg text-white text-[1.875rem] leading-[2.5rem] lg:text-[4rem] lg:leading-[5.25rem] pb-[1.875rem] lg:pb-[1.25rem] pt-[3.75rem] lg:pt-[7.5rem]"
      }
    >
      {title}
    </div>
  );
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
