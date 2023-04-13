import { Feature as IFeature, Link } from "../../data/types";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

interface Props {
  data: IFeature;
  pcGrid: number;
  serialNumber?: number;
}

const Feature = ({ data, pcGrid, serialNumber }: Props) => {
  const { type, text, icon, title, links: bottomLinks } = data;
  const bottomDivider = type === 2 ? <div className={"divider mt-[1.25rem]"} /> : null;
  const linksCustomClass = getLinkClassByType(type);
  const [isTooltipVisible, setTooltipStatus] = useState(false);

  const toggleTooltip = (isVisible: boolean) => {
    setTooltipStatus(() => {
      return isVisible;
    });
  };

  const links = getBottomLinks(bottomLinks, isTooltipVisible, toggleTooltip);
  const parentTypeClasses = getWrapperGrid(pcGrid);
  const childTypeClasses = getChildWidthByGrid(pcGrid);
  const titleNumber =
    typeof serialNumber !== "undefined" ? (serialNumber < 10 ? `0${serialNumber}` : serialNumber) : "";
  const titleJSX = title ? (
    <div className={"title text-white capitalize mt-[1.25rem]"}>
      {titleNumber}&nbsp;{title}
    </div>
  ) : null;
  return (
    <div className={`flex shrink-0 ${parentTypeClasses} inter-block-space-2`}>
      <div className={`${childTypeClasses}`}>
        <img className={"w-[5rem] self-start"} src={icon} alt="icon" />
        {titleJSX}
        <div className={"divider mt-[1.25rem]"} />
        <div className={"capitalize mt-[1.25rem]"}>{text}</div>
        {bottomDivider}
        <div className={`flex text-white ${linksCustomClass}`}>{links}</div>
      </div>
    </div>
  );
};
const getLinkClassByType = (type: number) => {
  switch (type) {
    case 3: {
      return `flex-col mt-[1.25rem] gap-[1.25rem]`;
    }
    case 4: {
      return `flex-wrap gap-[1.25rem] mt-[1.25rem] text-white`;
    }
    default: {
      return `flex-wrap gap-[1.25rem] mt-[1.25rem]`;
    }
  }
};

const getChildWidthByGrid = (pcGrid: number) => {
  switch (pcGrid) {
    case 3: {
      return `w-full lg:w-[85%]`;
    }
    case 4: {
      return `w-full lg:w-[86%]`;
    }
    default: {
      return `w-full`;
    }
  }
};

const getWrapperGrid = (pcGrid: number) => {
  switch (pcGrid) {
    case 3: {
      return `lg:w-[33.33%] lg:justify-center lg:3n-2:justify-start lg:3n:justify-end`;
    }
    case 4: {
      return `lg:w-[25%] lg:justify-center lg:4n-3:justify-start lg:4n:justify-end`;
    }
    case 2:
    default: {
      return `lg:w-[50%] lg:odd:pr-[1.875rem] lg:even:pl-[1.875rem]`;
    }
  }
};

const getBottomLinks = (
  bottomLinks: Link[] | undefined,
  isTooltipVisible: boolean,
  onToggleTooltip: (isVisible: boolean) => void
) => {
  return bottomLinks
    ? bottomLinks.map((link, index) => {
        const key = `${index}-${link.url}`;

        if (link.isComingSoon) {
          return (
            <div className={"flex relative text-white capitalize]"} key={key}>
              <div
                onMouseEnter={() => {
                  onToggleTooltip(true);
                }}
                onMouseLeave={() => {
                  onToggleTooltip(false);
                }}
              >
                {link.title}
              </div>
              <CSSTransition in={isTooltipVisible} unmountOnExit={true} timeout={0} classNames={""}>
                <div
                  className={`absolute left-[25%] top-[26px] bg-primary z-10 text-white px-[10px] py-[3px] text-center`}
                >
                  Updating...
                </div>
              </CSSTransition>
            </div>
          );
        }

        if (link.url === "") {
          return (
            <div key={key}>
              <div className={`opacity-50 capitalize`}>{link.title}</div>
            </div>
          );
        }
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
