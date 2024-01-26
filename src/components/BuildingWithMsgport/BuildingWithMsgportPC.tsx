import { useState } from "react";
import PrettyCode from "../PrettyCode";

interface Props {
  title: string[];
  menu: {
    title: string;
    description: string;
    code: string;
  }[];
  link: string; // External link
}

export default function BuildingWithMsgportPC({ title, menu, link }: Props) {
  const [activeTitle, setActiveTitle] = useState(menu[0].title);
  const activeMenu = menu.find(({ title }) => title === activeTitle) || menu[0];

  return (
    <div className="flex gap-[6.875rem]">
      <div className="flex flex-col gap-[1.875rem] max-w-max items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-h2 text-app-black">{title.at(0)}</h2>
          <span className="text-app-main font-bold text-[3.125rem] tracking-[0.125rem] whitespace-nowrap">
            {title.at(1)}
          </span>
        </div>
        <div className="flex flex-col gap-[1.875rem] overflow-y-auto w-full">
          {menu.map((m) => (
            <button
              key={m.title}
              className={`w-full rounded-[4rem] py-[1rem] text-center text-h3 transition-colors ${
                m.title === activeTitle
                  ? "bg-app-main text-app-white hover:cursor-default"
                  : "bg-app-inner-white text-app-black hover:bg-app-main hover:text-app-white"
              }`}
              onClick={() => {
                if (m.title !== activeTitle) {
                  setActiveTitle(m.title);
                }
              }}
            >
              {m.title}
            </button>
          ))}
        </div>
        <a
          className="py-[1.0625rem] pl-[84.5px] pr-[79.5px] flex items-center gap-medium rounded-[2.5rem] border border-app-black"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          <span className="text-t16b text-app-black">Try It Now</span>
          <img alt="..." width={24} height={24} src="/images/right-arrow-black-background-round.svg" />
        </a>
      </div>

      <div className="bg-app-black rounded-[2.5rem] px-[3.3125rem] pt-[3.375rem] pb-[4.5rem] flex flex-col gap-[3.125rem] w-[68.875rem]">
        <div className="flex flex-col gap-[0.375rem] items-center">
          <h2 className="text-h2 text-app-white">{activeMenu.title}</h2>
          <span className="text-t16 text-app-white">{activeMenu.description}</span>
        </div>
        <PrettyCode
          language="solidity"
          code={activeMenu.code}
          customStyle={{ height: "27.5rem", padding: "1.875rem", borderRadius: "1.25rem" }}
        />
      </div>
    </div>
  );
}
