import { Paper } from "../../data/types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";
import externalLink from "../../assets/images/external-link.png";
import PaperTag from "../PaperTag";
import pdf from "../../assets/images/pdf.png";
import { NavLink } from "react-router-dom";

interface Props {
  data?: Paper;
}

const PaperDetails = ({ data: paper }: Props) => {
  const { t } = useTranslation();
  if (!paper) {
    return <div />;
  }
  const headers = getPaperHeaders(paper, t);
  const summary = getSummaryText(paper);
  const link = paper.link;
  return (
    <div>
      {headers}
      <div className={"divider mt-[1.25rem]"} />
      <div className={"capitalize mt-[1.25rem]"}>{summary}</div>
      <div className={"divider mt-[1.25rem]"} />
      <div className={"flex mt-[1.5625rem] lg:mt-[2.8125rem]"}>
        <img className={"self-center w-[30px] h-[34px] mr-[15px]"} src={pdf} alt="" />
        <a className={"text-white hover:opacity-70 capitalize"} target="_blank" href={link.url} rel="noreferrer">
          {link.title}
          <span className={"ml-[5px]"}>{">"}</span>
        </a>
      </div>
    </div>
  );
};

const getPaperHeaders = (paper: Paper, t: TFunction<"translation", undefined>) => {
  const authors = paper.authors.join(", ");
  const tags = paper.tags.map((tag, index) => {
    const key = `${index}-${tag}`;
    return <PaperTag key={key} tag={tag} />;
  });
  const title = getPaperTitle(paper);
  return (
    <>
      <div className={"mt-[3.125rem]"}>
        <NavLink to={"/papers"} className={"btn capitalize"}>
          <>
            {"<"} {t(localeKeys.back)}
          </>
        </NavLink>
      </div>
      <div className={"hidden mt-[2.5rem] lg:block capitalize"}>
        {t(localeKeys.paperResources)}/{paper.title}
      </div>
      <div className={"title lg:text-[2.5rem] lg:leading-[3.3125rem] text-white mt-[1.25rem] capitalize"}>{title}</div>
      <div className={"text-white mt-[1.25rem] capitalize"}>{authors}</div>
      <div className={"flex flex-wrap mt-[1.25rem] capitalize"}>{tags}</div>
    </>
  );
};

const getPaperTitle = (paper: Paper) => {
  const link = paper.link;
  return paper.titleUrl === "" ? (
    <div className={"inline"}>{paper.title}</div>
  ) : (
    <a className={"inline hover:opacity-70"} target="_blank" href={link.url} rel="noreferrer">
      {paper.title}
      <img
        className={"inline-block ml-[5px] lg:ml-[10px] w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"}
        src={externalLink}
        alt="image"
      />
    </a>
  );
};

const getSummaryText = (paper: Paper) => {
  const isMobileSummaryAvailable = typeof paper.mobileSummary !== "undefined" && paper.mobileSummary.length > 0;
  const mobileSummaryClasses = isMobileSummaryAvailable ? "flex lg:hidden" : "hidden";
  const pcSummaryClasses = isMobileSummaryAvailable ? "hidden lg:flex" : "flex";
  return (
    <div>
      <div className={`${mobileSummaryClasses}`}>{paper.mobileSummary}</div>
      <div className={`${pcSummaryClasses}`}>{paper.summary}</div>
    </div>
  );
};

export default PaperDetails;
