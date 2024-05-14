import { Link, useLocation } from "react-router-dom";
import DesktopNavigation from "../Navigation/DesktopNavigation";
import { HeaderSocialMedia } from "../SocialMedia";
import { navigations } from "./data";
import { useEffect, useRef, useState } from "react";

export default function OthersPageDesktopHeader() {
  const [isNavigationActive, setIsNavigationActive] = useState(navigations.map(() => false));
  const [isScrollOver, setIsScrollOver] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = () => {
      setIsScrollOver(ref.current ? ref.current.clientHeight / 2 <= window.scrollY : false);
    };
    window.addEventListener("scroll", listener, false);
    return () => {
      window.removeEventListener("scroll", listener, false);
    };
  }, []);

  const path = useLocation();

  return (
    <div
      className={`w-full h-[6.25rem] flex justify-center items-center fixed top-0 left-0 z-40 transition-colors ${
        isScrollOver
          ? "bg-app-white/60 hover:bg-app-white backdrop-blur-[0.625rem]"
          : path.pathname === "/new-home"
          ? "bg-white"
          : "bg-transparent"
      }`}
      ref={ref}
    >
      <div className="max-w-8xl px-medium flex items-center justify-between w-full">
        <Link to="/">
          <img
            width={60}
            height={60}
            alt="..."
            src="/images/darwinia-logo-black-background-round.svg"
            className="w-[3.75rem] h-[3.75rem] shrink-0"
          />
        </Link>
        <div className="flex items-center gap-[2.5rem]">
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
