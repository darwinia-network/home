import { useState } from "react";
import BuildingWithMsgportMobileMenuItem from "./BuildingWithMsgportMobileMenuItem";

interface Props {
  title: string[];
  menu: {
    title: string;
    description: string;
    code: string;
  }[];
  link: string; // External link
}

export default function BuildingWithMsgportMobile({ title, menu, link }: Props) {
  const [activeTitle, setActiveActive] = useState(menu[0].title);

  return (
    <div className="flex flex-col gap-[1.875rem] lg:hidden">
      <div className="flex flex-col">
        <span className="text-t16b text-app-black">{title.at(0)}</span>
        <h2 className="text-h2 text-app-main">{title.at(1)}</h2>
      </div>
      <div className="flex flex-col gap-[1.875rem]">
        {menu.map((m) => (
          <BuildingWithMsgportMobileMenuItem
            key={m.title}
            activeTitle={activeTitle}
            title={m.title}
            description={m.description}
            code={m.code}
            onChange={setActiveActive}
          />
        ))}
      </div>
      <a
        className="py-[0.75rem] flex items-center justify-center gap-medium rounded-[2.5rem] border border-app-black"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <span className="text-t16b text-app-black">Try It Now</span>
        <img alt="..." width={24} height={24} src="/images/right-arrow-black-background-round.svg" />
      </a>
    </div>
  );
}
