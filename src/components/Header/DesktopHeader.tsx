import { Link } from "react-router-dom";
import DesktopNavigation from "../Navigation2/DesktopNavigation";
import { useRef, useState } from "react";
import { navigations } from "./data";
import useApp from "../../hooks/useApp";
import useMediaQuery from "../../hooks/useMediaQuery";
import { HeaderSocialMedia } from "../SocialMedia";

export default function DesktopHeader() {
  const [isNavigationActive, setIsNavigationActive] = useState(navigations.map(() => false));
  const isPortraitHeight = useMediaQuery("max_h_pc", "vertical");
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { desktopScrollLeft, isDesktopHeight } = useApp();

  const hasActiveNavigation = isNavigationActive.some((isActive) => isActive);

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
        style={{
          width: isDesktopHeight
            ? undefined
            : isHovering || hasActiveNavigation || desktopScrollLeft <= 580
            ? ref.current?.clientWidth
            : 0,
        }}
      >
        <div className="flex items-center gap-[2.5rem] pl-[2.5rem] pr-[1.25rem] w-max shrink-0" ref={ref}>
          <DesktopNavigation
            data={navigations}
            isNavigationActive={isNavigationActive}
            setIsNavigationActive={setIsNavigationActive}
          />
          <HeaderSocialMedia />
        </div>
      </div>
    </div>
  );
}
