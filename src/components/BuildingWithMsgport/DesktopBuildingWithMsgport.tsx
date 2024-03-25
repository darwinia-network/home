import { useEffect, useRef, useState } from "react";
import PrettyCode from "../PrettyCode";
import RightArrowRound from "../RightArrowRound";
import { link, menu, title } from "./data";
import { useApp } from "../../hooks/useApp";

export default function DesktopBuildingWithMsgport() {
  const { isDesktopHeight } = useApp();
  const [activeTitle, setActiveTitle] = useState(menu[0].title);
  const activeMenu = menu.find(({ title }) => title === activeTitle) || menu[0];
  const ref = useRef<HTMLDivElement | null>(null);
  const [refHeight, setRefHeight] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setRefHeight(ref.current?.clientHeight ?? 0);
    }, 0);
  }, [activeTitle]);

  return (
    <div className={`flex gap-[6.875rem] ${isDesktopHeight ? "" : "items-center"}`}>
      <div className="flex flex-col gap-[1.875rem] max-w-max items-center">
        <div className="flex flex-col items-center">
          <h2 className={`text-app-black ${isDesktopHeight ? "text-h2" : "text-h3"}`}>{title.at(0)}</h2>
          <span
            className={`text-app-main whitespace-nowrap ${
              isDesktopHeight ? "font-bold text-[3.125rem] tracking-[0.125rem]" : "text-h1"
            }`}
          >
            {title.at(1)}
          </span>
        </div>
        <div className="flex flex-col gap-[1.875rem] overflow-y-auto w-full">
          {menu.map((m) => (
            <button
              key={m.title}
              className={`w-full rounded-[4rem] text-center text-h3 transition-colors capitalize ${
                isDesktopHeight ? "py-[1rem]" : "py-[0.6875rem]"
              } ${
                m.title === activeTitle
                  ? "bg-app-main text-app-white hover:cursor-default"
                  : "bg-app-inner-white text-app-black hover:text-app-main"
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
        <TryItNow link={link} />
      </div>

      <div
        className={`bg-app-black rounded-[2.5rem] px-[3.3125rem] pt-[3.375rem] pb-[4.5rem] flex flex-col justify-center gap-[3.125rem] w-[68.875rem] ${
          isDesktopHeight ? "h-[42.875rem]" : "h-[40.375rem]"
        }`}
      >
        <div className="flex flex-col gap-[0.375rem] items-center shrink-0 h-fit" ref={ref}>
          <h2 className="text-h2 text-app-white">{activeMenu.title}</h2>
          <span className="inline-block text-center text-t16 text-app-white">{activeMenu.description}</span>
        </div>
        <PrettyCode
          language={activeMenu.language}
          code={activeMenu.code}
          customStyle={{
            height: `calc(${
              isDesktopHeight ? "42.875rem" : "40.375rem"
            } - 3.375rem - 4.5rem - 3.125rem - ${refHeight}px)`,
            padding: "1.875rem",
            borderRadius: "1.25rem",
          }}
        />
      </div>
    </div>
  );
}

function TryItNow({ link }: { link: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const { isDesktopHeight } = useApp();

  return (
    <a
      className={`pl-[84.5px] pr-[79.5px] flex items-center gap-medium rounded-[2.5rem] border border-app-black text-app-black transition-colors hover:border-app-main hover:text-app-main ${
        isDesktopHeight ? "py-[1.0625rem]" : "py-[0.75rem]"
      }`}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="text-t16b">Try It Now</span>
      <RightArrowRound fill={isHovering ? "main" : "black"} />
    </a>
  );
}
