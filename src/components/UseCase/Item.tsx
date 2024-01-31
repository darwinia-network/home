import { useState } from "react";
import useApp from "../../hooks/useApp";
import RightArrowRound from "../RightArrowRound";
import PrettyCode from "../PrettyCode";

interface Props {
  title: string;
  code: string;
  link: string; // External link
  description: string;
}

export default function Item({ title, code, link, description }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const { isDesktopWidth, isDesktopHeight } = useApp();

  return (
    <div className="flex flex-col gap-5 lg:gap-[1.875rem]">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <h3 className={`text-app-white ${isDesktopWidth ? (isDesktopHeight ? "text-h1" : "text-h2") : "text-h2"}`}>
          {title}
        </h3>
        <a
          className="flex items-center gap-medium rounded-[2.5rem] pl-[15px] pr-medium h-[50px] border border-app-white w-fit text-app-white transition-colors hover:border-app-main hover:text-app-main"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="text-t16">View use case in docs</span>
          <RightArrowRound fill={isHovering ? "main" : "white"} />
        </a>
      </div>
      <PrettyCode
        className={`lg:w-[48.75rem] ${
          isDesktopWidth ? (isDesktopHeight ? "h-[26.5rem]" : "h-[19.25rem]") : "h-[26.5rem]"
        }`}
        language="solidity"
        code={code}
      />
      <span className="text-t14 text-app-white lg:mt-[0.1875rem]">{description}</span>
    </div>
  );
}