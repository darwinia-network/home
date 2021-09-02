import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

import DropdownCard from "./DropdownCard";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { useTranslation } from "react-i18next";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import closeIcon from "./img/close.png";
import logoDarwinia from "./img/logo-darwinia.png";
import logoDarwiniaWhite from "./img/logo-darwinia-white.png";

import wikiIcon from "./img/docs/wiki.svg";
import roadmapIcon from "./img/docs/roadmap.svg";
import techPaperIcon from "./img/docs/tech-paper.svg";
import genePaperIcon from "./img/docs/gene-paper.svg";

import tokensIcon from "./img/use-darwinia/tokens.svg";
import appsIcon from "./img/use-darwinia/apps.svg";
import wormholeIcon from "./img/use-darwinia/wormhole.svg";
import smartAppIcon from "./img/use-darwinia/smart-app.svg";
import crabNetIcon from "./img/use-darwinia/crab-net.png";

const NavGrounp = ({ hasFixed = false }) => {
  const { t } = useTranslation();

  const docsdata = [
    {
      icon: wikiIcon,
      title: t("header:wiki"),
      content: t("header:wiki_content"),
      link: "#",
    },
    {
      icon: roadmapIcon,
      title: t("header:roadmap"),
      content: t("header:roadmap_content"),
      link: "#",
    },
    {
      icon: techPaperIcon,
      title: t("header:techpaper"),
      content: t("header:techpaper_content"),
      link: "#",
    },
    {
      icon: genePaperIcon,
      title: t("header:genepaper"),
      content: t("header:genepaper_content"),
      link: "#",
    },
  ];

  const useDarwiniaData = [
    {
      icon: tokensIcon,
      title: t("header:tokens"),
      content: t("header:tokens_content"),
      link: "#",
    },
    {
      icon: appsIcon,
      title: t("header:apps"),
      content: t("header:apps_content"),
      link: "#",
    },
    {
      icon: wormholeIcon,
      title: t("header:whormhole"),
      content: t("header:whormhole_content"),
      link: "#",
    },
    {
      icon: smartAppIcon,
      title: t("header:smart_app"),
      content: t("header:smart_app_content"),
      link: "#",
    },
    {
      icon: crabNetIcon,
      title: t("header:crab_net"),
      content: t("header:crab_net_content"),
      link: "#",
    },
  ];

  return (
    <>
      <Nav className="flex-column flex-lg-row align-items-start align-items-lg-center">
        <Nav.Link href="/tech" className={`${style.navLinkText} ${hasFixed ? style.hasFixed : ""}`}>
          {t("header:tech")}
        </Nav.Link>
        <NavDropdown
          title={t("header:docs")}
          id="collasible-nav-dropdown-docs"
          className={`${style.navLinkText} ${hasFixed ? style.hasFixed : ""}`}
        >
          <DropdownCard data={docsdata} />
        </NavDropdown>
        <NavDropdown
          title={t("header:use_darwinia")}
          id="collasible-nav-dropdown-use_darwinia"
          className={`${style.navLinkText} ${hasFixed ? style.hasFixed : ""}`}
        >
          <DropdownCard data={useDarwiniaData} />
        </NavDropdown>
        <Nav.Link href="/community" className={`${style.navLinkText} ${hasFixed ? style.hasFixed : ""}`}>
          {t("header:community")}
        </Nav.Link>
        <Nav.Link href="/media" className={`${style.navLinkText} ${hasFixed ? style.hasFixed : ""}`}>
          {t("header:media")}
        </Nav.Link>
        <Button
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          variant="outline-light"
          className={`${style.apps} ${hasFixed ? style.hasFixed : ""}`}
        >
          <span>Apps</span>
        </Button>
      </Nav>
    </>
  );
};

const MobileMenu = ({ expanded, onClick }) => {
  const { t, i18n } = useTranslation();

  const handleClickLand = () => {
    if (i18n.language === i18n.languages[0]) {
      i18n.changeLanguage(i18n.languages[1]);
    } else if (i18n.language === i18n.languages[1]) {
      i18n.changeLanguage(i18n.languages[0]);
    }
  };

  return (
    <div className={`d-lg-none ${style.mask} ${expanded ? "" : style.hidden}`} onClick={onClick}>
      <div className={style.collapse} onClick={(e) => e.stopPropagation()}>
        <div className="d-flex justify-content-between align-items-center px-2 mt-1">
          <Button className={style.landBtn} onClick={handleClickLand}>
            {t("header:lang_demo")}
          </Button>
          <Button className={style.closeBtn} onClick={onClick}>
            <img alt="..." src={closeIcon} width={15} />
          </Button>
        </div>

        <div className="pl-3 mt-5">
          <NavGrounp />
        </div>
      </div>
    </div>
  );
};

const PageHeader = () => {
  const [hasFixed, setHasFixed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClickToggle = () => {
    setExpanded((prev) => {
      if (!prev) {
        disableBodyScroll(document.body);
      } else {
        enableBodyScroll(document.body);
      }
      return !prev;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.getElementById("header-main").offsetHeight &&
        window.scrollY >= document.getElementById("header-main").offsetHeight
      ) {
        setHasFixed(true);
      } else {
        setHasFixed(false);
      }
    });

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`${style.main} ${hasFixed ? style.hasFixed : ""}`} id="header-main">
      <MobileMenu expanded={expanded} onClick={handleClickToggle} />

      <Container>
        <Navbar expand="lg" expanded={expanded} className="px-0">
          <Navbar.Brand href="/">
            <img alt="..." src={hasFixed ? logoDarwinia : logoDarwiniaWhite} className={style.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleClickToggle}
            aria-controls="responsive-navbar-nav"
            className={`${style.navToggle} ${hasFixed ? style.hasFixed : ""}`}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-none d-lg-flex justify-content-end align-items-center"
          >
            <NavGrounp hasFixed={hasFixed} />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default React.memo(PageHeader);
