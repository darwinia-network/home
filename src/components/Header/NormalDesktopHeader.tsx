import { Link } from "react-router-dom";
import DesktopNavigation from "../Navigation2/DesktopNavigation";
import { HeaderSocialMedia } from "../SocialMedia";
import { navigations } from "./data";
import { useEffect, useRef, useState } from "react";

export default function NormalDesktopHeader() {
  const [isNavigationActive, setIsNavigationActive] = useState(navigations.map(() => false));
  const [isScrollOver, setIsScrollOver] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = () => {
      setIsScrollOver(ref.current ? ref.current.clientHeight <= window.scrollY : false);
    };
    window.addEventListener("scroll", listener, false);
    return () => {
      window.removeEventListener("scroll", listener, false);
    };
  }, []);

  return (
    <div
      className={`h-[6.25rem] flex justify-center items-center fixed top-0 left-0 z-40 transition-colors ${
        isScrollOver ? "bg-app-white/60 hover:bg-app-white backdrop-blur-[0.625rem]" : "bg-transparent"
      }`}
      ref={ref}
    >
      <div className="max-w-8xl px-medium flex items-center justify-between">
        <Link to="/">
          <img width={60} height={60} alt="..." className="w-[3.75rem] h-[3.75rem] shrink-0" />
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
