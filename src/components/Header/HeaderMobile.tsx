import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "../../ui/Drawer";
import NavigationV2Mobile from "../NavigationV2/NavigationV2Mobile";
import { navigations } from "./data";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="py-[0.625rem] pl-[0.9375rem] pr-[1.125rem] flex items-center justify-between lg:hidden">
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
