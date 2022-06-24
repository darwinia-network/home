import { DarwiniaPromo as IDarwiniaPromo } from "../../data/types";

interface Props {
  data: IDarwiniaPromo;
}

const DarwiniaPromo = ({ data }: Props) => {
  const { subTitle, title, content, image, links } = data;
  const { text, list } = content;
  const dAppsExamples = list.map((item, index) => {
    return (
      <li className={"capitalize"} key={index}>
        {item}
      </li>
    );
  });
  const linksJSX = links.map((item, index) => {
    return (
      <a className={"btn capitalize"} key={index} href={item.url}>
        {item.title}
      </a>
    );
  });
  return (
    <div>
      <div className={"lg:hidden"}>{title}</div>
      <div className={"flex flex-col lg:flex-row"}>
        <div className={"mt-[3.125rem] lg:mt-[3.4375rem] w-[59.70%] lg:w-[30.917%] shrink-0"}>
          <img src={image} alt="" />
        </div>
        <div className={"lg:pl-[11.1875rem] capitalize"}>
          <div className={"hidden lg:block mb-[1.875rem]"}>{title}</div>
          <div className={"mt-[3.125rem] lg:mt-0 title text-white"}>{subTitle}</div>
          <div className={"mt-[3.125rem] lg:mt-[1.25rem]"}>
            <div className={"mb-[1.25rem] capitalize"}>{text}</div>
            <ul className={"list-disc pl-[1.625rem]"}>{dAppsExamples}</ul>
          </div>
          <div className={"flex lg:flex-row items-start mt-[3.125rem] lg:mt-[1.875rem] flex-col gap-[1.25rem]"}>
            {linksJSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarwiniaPromo;
