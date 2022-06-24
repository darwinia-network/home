import { Link, Statistics as IStatistics, StatisticsData } from "../../data/types";
import { NavLink } from "react-router-dom";

interface Props {
  data: IStatistics;
}
const Statistics = ({ data }: Props) => {
  const statisticsData = getStatisticsData(data.data);
  const links = getBottomLinks(data.links);
  const statisticsImages = getStatisticsImages(data.statisticsImages);
  const subText = getSubText(data.subText);
  return (
    <div>
      <div className={"title"}>{data.title}</div>
      <div className={"mt-[0.625rem] capitalize"}>{data.text}</div>
      <div>{statisticsData}</div>
      <div>{statisticsImages}</div>
      <div>{subText}</div>
      <div className={"mt-[1.875rem]"}>{links}</div>
    </div>
  );
};

const getStatisticsImages = (images: string[] | undefined) => {
  if (!images) {
    return null;
  }
  const imagesJSX = images.map((item, index) => {
    return (
      <div className={"flex-1"} key={index}>
        <img className={"w-full"} src={item} alt="image" />
      </div>
    );
  });
  return <div className={"flex flex-col mt-[1.875rem] lg:flex-row gap-[3.125rem] lg:gap-[3.75rem]"}>{imagesJSX}</div>;
};

const getStatisticsData = (data: StatisticsData[] | undefined) => {
  if (!data) {
    return null;
  }
  const dataJSX = data.map((item, index) => {
    const key = `${index}-${item.title}`;
    const info = item.data?.map((infoItem, subIndex) => {
      const subKey = `${index}-${subIndex}`;
      return (
        <div className={"flex flex-col mb-[1.875rem] last:mb-0 lg:flex-row lg:justify-between"} key={subKey}>
          <div className={"capitalize"}>{infoItem.info}</div>
          <div className={"title text-white text-[1.25rem] capitalize"}>{infoItem.figure}</div>
        </div>
      );
    });
    return (
      <div className={"mt-[3.125rem] shrink-0 flex-1 lg:mt-0 first:-mt-0"} key={key}>
        <div className={"flex items-center"}>
          <img className={"w-[3.75rem] mr-[1.25rem]"} src={item.image} alt="image" />
          <div className={"uppercase title text-white text-[2.5rem] leading-[3.3125rem]"}>{item.title}</div>
        </div>
        <div className={"divider my-[1.25rem]"} />
        <div>{info}</div>
        <div className={"divider hidden lg:block mt-[1.25rem]"} />
      </div>
    );
  });
  return <div className={"mt-[3.125rem] flex flex-col lg:gap-[3.75rem] lg:flex-row"}>{dataJSX}</div>;
};

const getBottomLinks = (links: Link[] | undefined) => {
  if (!links) {
    return null;
  }
  return links.map((link, index) => {
    if (link.isExternal) {
      return (
        <a className={"btn capitalize"} key={index} target="_blank" href={link.url} rel="noreferrer">
          {link.title}
        </a>
      );
    }
    return (
      <NavLink key={index} className={"btn capitalize"} to={link.url}>
        {link.title}
      </NavLink>
    );
  });
};

const getSubText = (subText: string | undefined) => {
  if (!subText) {
    return null;
  }
  return <div className={"mt-[1.875rem] capitalize"}>{subText}</div>;
};

export default Statistics;
