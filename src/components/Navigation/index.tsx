import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu-toggler.svg";
import closeIcon from "../../assets/images/close.svg";
import { useEffect, useState } from "react";
import { Menu, Navigation as TNavigation } from "../../data/types";
import { useMenuData } from "../../data/menu";
import { CSSTransition } from "react-transition-group";

interface SubMenuHeight {
  [path: string]: number;
}

interface NavigationDataSet {
  path?: string;
}

const Navigation = () => {
  const { menu } = useMenuData();
  const [isMobileNavVisible, toggleMobileNav] = useState(false);
  const [openedMobileMenuPath, setOpenedMobileMenuPath] = useState<string | undefined>(undefined);
  const [mobileMenuHeightByPathMap, setMenuHeight] = useState<SubMenuHeight>({});
  const [openedPCMenuPath, setOpenedPCMenuPath] = useState<string | undefined>(undefined);
  const [navBarBackground, setNavBarBackground] = useState("rgba(0,0,0,0)");
  const navBarThreshold = 100;

  useEffect(() => {
    const mobileNavParents = document.querySelectorAll<HTMLElement>(".mobile-nav-parent");
    mobileNavParents.forEach((item) => {
      const dataset = item.dataset as unknown as NavigationDataSet;
      if (dataset.path) {
        const path = dataset.path;
        const height = item.scrollHeight;
        setMenuHeight((oldValue) => {
          return {
            ...oldValue,
            [path]: height,
          };
        });
      }
    });
  }, [openedPCMenuPath, openedMobileMenuPath]);

  useEffect(() => {
    document.addEventListener("click", onClosePCSubMenu);
    const mobileNavLinks = document.querySelectorAll<HTMLElement>(".mobile-navigation a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", onCloseMobileNavigation);
    });
    window.addEventListener("scroll", updateNavBarBackground);
    return () => {
      document.removeEventListener("click", onClosePCSubMenu);
      window.removeEventListener("scroll", updateNavBarBackground);
      mobileNavLinks.forEach((link) => {
        link.removeEventListener("click", onCloseMobileNavigation);
      });
    };
  }, []);

  /* use this to trigger mobile nav links click on the first app init. It needs this hook
   * since the mobile nav will be unmounted by default, so the links wouldn't be selectable */
  useEffect(() => {
    const mobileNavLinks = document.querySelectorAll<HTMLElement>(".mobile-navigation a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", onCloseMobileNavigation);
    });
  }, [isMobileNavVisible]);

  const updateNavBarBackground = () => {
    const scrollY = window.scrollY;
    if (scrollY > navBarThreshold) {
      setNavBarBackground("rgba(0,0,0,1)");
    } else {
      setNavBarBackground("rgba(0,0,0,0)");
    }
  };

  const controlMobileNav = () => {
    toggleMobileNav((isVisible) => {
      return !isVisible;
    });
  };

  const onClosePCSubMenu = () => {
    setOpenedPCMenuPath(undefined);
  };

  const onCloseMobileNavigation = () => {
    toggleMobileNav(false);
  };

  const onMobileSubMenuToggle = (path: string | undefined) => {
    setOpenedMobileMenuPath(openedMobileMenuPath === path ? undefined : path);
  };

  return (
    <div
      style={{ background: navBarBackground }}
      className={
        "duration-700 transition-all fixed z-[99] left-0 top-0 right-0 flex justify-center h-[3.75rem] lg:h-[4.375rem]"
      }
    >
      <div className={"justify-between flex container pl-[1.25rem] pr-[0.25rem] lg:px-[1.875rem] xl:px-[3.75rem]"}>
        <NavLink to="/" className={"flex hover:cursor-pointer"}>
          <img className={"self-center w-[10.108rem] lg:w-[11.119rem]"} src={logo} alt="logo" />
        </NavLink>

        {/* PC navigation */}
        {/* DON'T use the class hidden since the display: none
       items have zero height, this will make us fail to get the submenu scrollHeights
       if the mobile navigation is hidden when the component is getting mounted */}
        <div
          className={
            "max-w-[1px] max-h-[1px] overflow-hidden lg:max-w-[none] lg:max-h-[none] lg:overflow-visible lg: lg:block pc-navigation"
          }
        >
          <div className="flex items-center h-full">{createPCMenu(menu, openedPCMenuPath, setOpenedPCMenuPath)}</div>
        </div>

        {/* Mobile navigation toggler */}
        <div
          onClick={() => {
            controlMobileNav();
          }}
          className={"lg:hidden flex items-center px-[1rem] hover:opacity-80"}
        >
          <img src={menuIcon} alt="menu-toggler" />
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* mask */}
      <CSSTransition in={isMobileNavVisible} classNames={"nav-overlay"} timeout={300} unmountOnExit={true}>
        <div
          onClick={() => {
            controlMobileNav();
          }}
          className={`lg:hidden navigation-overlay`}
        />
      </CSSTransition>

      {/* Mobile Navigation itself */}
      {/* DON'T use the class hidden since the display: none
       items have zero height, this will make us fail to get the submenu scrollHeights
       if the mobile navigation is hidden when the component is getting mounted */}

      <CSSTransition in={isMobileNavVisible} unmountOnExit={true} classNames={"mobile-nav"} timeout={300}>
        <div className={`lg:w-[1px] lg:h-[1px] lg:overflow-hidden mobile-navigation`}>
          <div className={"flex h-full flex-col"}>
            <div className={"flex justify-end px-[1.25rem]"}>
              <img
                onClick={() => {
                  controlMobileNav();
                }}
                className={"py-[1.375rem]"}
                src={closeIcon}
                alt="close-icon"
              />
            </div>
            <div className={"flex-1 relative overflow-auto"}>
              <div className={"absolute top-0 left-0 right-0"}>
                <div className={"px-[1.25rem]"}>
                  <div className={"divider"} />
                </div>
                <div className={"flex text-right flex-col my-[1.25rem]"}>
                  {createMobileMenu(menu, openedMobileMenuPath, mobileMenuHeightByPathMap, onMobileSubMenuToggle)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

const createPCMenu = (
  menu: Menu[],
  openedMenuPath: string | undefined,
  onToggleSubMenu: (path: string | undefined) => void
) => {
  return menu.map((item, index) => {
    const path = `${index}`;
    const isActive = openedMenuPath === path;

    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={"relative text capitalize px-[.9375rem]"}
        key={path}
      >
        <div
          onClick={() => {
            onToggleSubMenu(isActive ? undefined : path);
          }}
          className={`hover:cursor-pointer hover:text-primary transition-colors select-none ${
            isActive ? "text-primary" : "text-white"
          }`}
        >
          {item.title}
        </div>
        <CSSTransition unmountOnExit={true} in={isActive} classNames={"pc-sub-menu"} timeout={300}>
          <div className={"left-1/2 top-10 absolute z-[2] w-max overflow-hidden"}>
            <div className={"justify-between flex bg-black border-2 border-primary w-fit select-none"}>
              <SubMenu navigations={item.navigations} />
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  });
};

/* our mobile navigation only supports two levels */
const createMobileMenu = (
  menu: Menu[],
  openedMenuPath: string | undefined,
  menuHeightByPathMap: SubMenuHeight,
  onChildMenuToggle: (path: string | undefined) => void
) => {
  return menu.map((item, index) => {
    const path = `${index}`;
    const isActive = openedMenuPath === path;

    return (
      <div key={path} className={"first:mt-0 mt-[0.3125rem]"}>
        <div
          onClick={() => {
            onChildMenuToggle(path);
          }}
          className={`text capitalize px-[1.25rem] py-[0.625rem] ${isActive ? "text-primary" : "text-white"}`}
        >
          {item.title}
        </div>
        <div
          style={{
            height: isActive ? `${menuHeightByPathMap[path]}px` : "0",
            transitionProperty: "height",
          }}
          data-path={path}
          className={`mobile-nav-parent ease-in-out duration-[300ms] flex
            overflow-hidden flex-col relative after:content-[''] after:z-[-1]
            after:absolute after:left-0 after:right-0 after:top-0
            after:bottom-0 after:bg-white after:opacity-10`}
        >
          <SubMenu navigations={item.navigations} />
        </div>
      </div>
    );
  });
};

const SubMenu = ({ navigations }: { navigations: TNavigation[] }) => {
  return (
    <div className="flex flex-col p-5 gap-small">
      {navigations.map((navigation) => {
        if (navigation.path) {
          return navigation.external ? (
            <div className="inline-flex gap-2 text-white hover:text-primary transition-colors" key={navigation.label}>
              <span className="hidden lg:inline">{">"}</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={navigation.path}
                className="text hover:underline text-white hover:text-primary transition-colors w-full"
              >
                {navigation.label}
              </a>
            </div>
          ) : (
            <div className="inline-flex gap-2 text-white hover:text-primary transition-colors" key={navigation.label}>
              <span className="hidden lg:inline">{">"}</span>
              <NavLink
                to={navigation.path}
                className="text hover:underline text-white hover:text-primary transition-colors w-full"
              >
                {navigation.label}
              </NavLink>
            </div>
          );
        }
        return (
          <div className="inline-flex gap-2 justify-end lg:justify-start" key={navigation.label}>
            <span className="hidden lg:inline text-white/50">{">"}</span>
            <span className="text text-white/50">{navigation.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
