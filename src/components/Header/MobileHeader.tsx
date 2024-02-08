import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../../ui/Drawer";
import NavigationV2Mobile from "../Navigation/MobileNavigation";
import { navigations } from "./data";

export default function MobileHeader() {
  const [isScrollOver, setIsScrollOver] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = () => {
      setIsScrollOver(ref.current ? ref.current.clientHeight / 2 <= window.scrollY : false);
    };
    window.addEventListener("scroll", listener, false);
    return () => {
      window.removeEventListener("scroll", listener, false);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[49] w-full py-[0.625rem] pl-[0.9375rem] pr-[1.125rem] flex items-center justify-between lg:hidden transition-colors ${
          isScrollOver ? "bg-app-white/60 hover:bg-app-white backdrop-blur-[0.625rem]" : "bg-transparent"
        }`}
        ref={ref}
      >
        <Link to="/">
          <img
            width={37}
            height={37}
            alt="Darwinia Logo"
            src="/images/darwinia-logo-black-background-round.svg"
            className="w-[2.3125rem] h-[2.3125rem] shrink-0"
          />
        </Link>
        <img
          width={22}
          height={18}
          className="w-[1.375rem] h-[1.125rem] shrink-0"
          alt="Menu"
          src="/images/menu.svg"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Drawer maskClosable isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NavigationV2Mobile data={navigations} />
      </Drawer>
    </>
  );
}
