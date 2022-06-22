import { Paper } from "../../data/types";
import avatar from "../../assets/images/avatar.png";
import PaperTag from "../PaperTag";
import { NavLink } from "react-router-dom";

interface Props {
  data: Paper[];
}
const PapersGrid = ({ data }: Props) => {
  const papers = data.map((paper, index) => {
    const key = `${index}-${paper.title}`;
    return (
      <div
        className={
          "flex inter-block-space-2 lg:first-item:mt-0 lg:second-item:mt-0 lg:third-item:mt-0 lg:w-[33.33%] lg:justify-center lg:3n-2:justify-start lg:3n:justify-end"
        }
        key={key}
      >
        {getSinglePaperItem(paper)}
      </div>
    );
  });
  return <div className={"flex flex-col shrink-0 lg:flex-row lg:flex-wrap"}>{papers}</div>;
};

const getSinglePaperItem = (paper: Paper) => {
  const authors = paper.authors.join(", ");
  const tags = getTags(paper.tags);
  return (
    <div
      className={
        "transform-cpu w-full lg:w-[83%] transition-all hover:cursor-pointer lg:hover:scale-[1.03] duration-[300ms] ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]"
      }
    >
      <NavLink
        to={`/papers/${paper.id}`}
        className={
          "pb-[118.71%] block min-h-[24.25rem] relative after:bg-black after:absolute after:top-[10px] after:right-0 after:bottom-0 after:left-[10px] after:-z-10 after:border after:border-halfWhite"
        }
      >
        <div
          className={
            "absolute overflow-hidden flex flex-col justify-between p-[0.625rem] bg-black z-10 left-0 right-[10px] top-0 bottom-[10px] border border-white"
          }
        >
          <div>
            <div className={"title bg-white p-[0.625rem] text-black text-[1.25rem]"}>{paper.title}</div>
            <div className={"flex mt-[0.625rem]"}>
              <img className={"w-[20px] h-[20px]"} src={avatar} alt="" />
              <div className={"ml-[0.625rem]"}>{authors}</div>
            </div>
          </div>
          <div className={"flex flex-wrap"}>{tags}</div>
        </div>
      </NavLink>
    </div>
  );
};

const getTags = (tags: string[]) => {
  return tags.map((tag, index) => {
    const key = `${index}-${tag}`;
    return <PaperTag key={key} tag={tag} />;
  });
};

export default PapersGrid;
