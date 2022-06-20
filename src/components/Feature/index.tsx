import { Feature as IFeature, Link } from "../../data/types";
import { NavLink } from "react-router-dom";

interface Props {
  data: IFeature;
}

const Feature = ({ data }: Props) => {
  const { type, text, icon, title, links: bottomLinks } = data;
  const bottomDivider = type === 2 ? <div className={"divider mt-[1.25rem]"} /> : null;
  const linksCustomCLass = type === 3 ? `flex-col mt-[1.25rem] gap-[1.25rem]` : `flex-wrap gap-[1.25rem] mt-[1.25rem]`;
  const links = getBottomLinks(bottomLinks);
  const parentTypeClasses =
    type === 1 || type === 2
      ? `lg:w-[33.33%] lg:items-center lg:3n-2:items-start lg:3n:items-end`
      : `lg:w-[50%] lg:odd:pr-[1.875rem] lg:even:pl-[1.875rem] justify-between`;
  const childTypeClasses = type === 1 || type === 2 ? `w-full lg:w-[85%]` : `w-full`;
  const titleJSX = title ? <div className={"title text-white capitalize mt-[1.25rem]"}>{title}</div> : null;
  return (
    <div className={`flex flex-col shrink-0 ${parentTypeClasses} inter-block-space-2`}>
      <div className={`${childTypeClasses}`}>
        <img className={"w-[5rem] self-start"} src={icon} alt="icon" />
        {titleJSX}
        <div className={"divider mt-[1.25rem]"} />
        <div className={"capitalize mt-[1.25rem]"}>{text}</div>
        {bottomDivider}
        <div className={`flex ${linksCustomCLass}`}>{links}</div>
      </div>
    </div>
  );
};

const getBottomLinks = (bottomLinks: Link[] | undefined) => {
  return bottomLinks
    ? bottomLinks.map((link, index) => {
        const key = `${index}-${link.url}`;
        if (link.isExternal) {
          return (
            <div key={key}>
              <a className={`hover:opacity-70 capitalize`} target="_blank" href={link.url} rel="noreferrer">
                {link.title}
              </a>
            </div>
          );
        }
        return (
          <div key={key}>
            <NavLink className={`hover:opacity-70 capitalize`} to={link.url}>
              {link.title}
            </NavLink>
          </div>
        );
      })
    : null;
};

export default Feature;
