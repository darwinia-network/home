import { Link } from "react-router-dom";
import NavigationV2PC from "../NavigationV2/NavigationV2PC";
import { useEffect, useRef, useState } from "react";
import { medias, navigations } from "./data";
import useApp from "../../hooks/useApp";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function HeaderPC() {
  const [isNavigationActive, setIsNavigationActive] = useState(navigations.map(() => false));
  const [expandedWidth, setExpandedWidth] = useState<number>();
  const isPortraitHeight = useMediaQuery("max_h_pc", "vertical");
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { pcScrollLeft } = useApp();

  const hasActiveNavigation = isNavigationActive.some((isActive) => isActive);

  useEffect(() => {
    setTimeout(() => setExpandedWidth(ref.current?.clientWidth), 0);
  }, []);

  return (
    <div
      className={`top-5 left-5 z-40 py-[1.25rem] px-[1.25rem] rounded-[31.25rem] transition-colors hover:bg-app-white flex items-center shrink-0 backdrop-blur-[0.625rem] ${
        hasActiveNavigation ? "bg-app-white" : "bg-app-white/60"
      } ${isPortraitHeight ? "absolute" : "fixed"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to="/" className="shrink-0">
        <img
          width={74}
          height={74}
          alt="Darwinia Logo"
          src="/images/darwinia-logo-black-background-round.svg"
          className="w-[4.625rem] h-[4.625rem] shrink-0"
        />
      </Link>
      <div
        className="transition-[width] duration-200 overflow-x-hidden py-2 shrink-0"
        style={{ width: isHovering || hasActiveNavigation || pcScrollLeft <= 580 ? expandedWidth : 0 }}
      >
        <div className="flex items-center gap-[2.5rem] pl-[2.5rem] pr-[1.25rem] w-fit shrink-0" ref={ref}>
          <NavigationV2PC
            data={navigations}
            isNavigationActive={isNavigationActive}
            setIsNavigationActive={setIsNavigationActive}
          />
          {medias.map((media, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              target="_blank"
              href={media.link}
              className="shrink-0 transition-transform hover:scale-105 active:scale-95"
            >
              <img width={34} height={34} alt="" src={media.icon} className="shrink-0 w-[2.125rem] h-[2.125rem]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
