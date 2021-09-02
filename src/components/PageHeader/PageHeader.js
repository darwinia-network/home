import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { withTranslation } from "react-i18next";
import $ from "jquery";
// import i18n from '../../locales/i18n';
import styles from "./style.module.scss";
import logo from "./img/logo-darwinia.png";
import logoWhite from "./img/logo-darwinia-white.png";
import closeIcon from "./img/close.png";
// import github from './img/github.svg'

class CustomToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    document.querySelector("body").click();
    e.preventDefault();

    // this.props.onClick(e);
  }

  render() {
    return <div onClick={this.handleClick}>{this.props.children}</div>;
  }
}

class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasFixed: false,
      didScroll: false,
      lastScrollTop: 0,
      delta: 5,
      open: false,
    };
  }

  targetElement = null;

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    this.targetElement = document.querySelector("body");
    this.initScroll();
    this.initFontStyle();
  }

  initFontStyle = () => {
    const { i18n } = this.props;
    let isZh = i18n.language.indexOf("en") === -1;
    let app = document.getElementsByTagName("body")[0];
    if (isZh) {
      app.setAttribute("class", "zh-font");
    } else {
      app.setAttribute("class", "");
    }
  };

  initScroll = () => {
    $(window).scroll((event) => {
      this.setState({
        didScroll: true,
      });
    });

    setInterval(() => {
      let { didScroll } = this.state;
      if (didScroll) {
        this.AdjustHeader();
        this.hasScrolled();
        this.setState({
          didScroll: false,
        });
      }
    }, 100);
  };

  AdjustHeader = () => {
    var navbarSecondaryHeight = $(".navbar--primary").outerHeight();
    if ($(window).scrollTop() > navbarSecondaryHeight) {
      if (!$(".collapse-header").hasClass("nav-primary-fixed")) {
        $(".collapse-header").addClass("nav-primary-fixed");
        this.setState({
          hasFixed: true,
        });
      }
    } else {
      $(".collapse-header").removeClass("nav-primary-fixed");
      this.setState({
        hasFixed: false,
      });
    }
  };

  hasScrolled = () => {
    let { lastScrollTop, delta } = this.state;
    var navbarHeight = $(".collapse-header").outerHeight();
    var st = $(window).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $(".collapse-header").removeClass("nav-down").addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $(".collapse-header").removeClass("nav-up").addClass("nav-down");
      }
    }
    this.setState({
      lastScrollTop: st,
    });
  };

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  changeLng = (lng) => {
    const { i18n } = this.props;

    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    let app = document.getElementsByTagName("body")[0];
    if (lng === "zh-cn") {
      app.setAttribute("class", "zh-font");
    } else {
      app.setAttribute("class", "");
    }
  };

  showTargetElement = () => {
    // ... some logic to show target element

    // 3. Disable body scroll
    this.setState({ open: true });
    disableBodyScroll(this.targetElement);
  };

  hideTargetElement = () => {
    // ... some logic to hide target element

    // 4. Re-enable body scroll
    this.setState({ open: false });
    enableBodyScroll(this.targetElement);
  };

  render() {
    const { t, transparent, hasHeightinMobile } = this.props;
    const { open, hasFixed } = this.state;

    return (
      <div
        className={`${styles.NavBarWrapper} ${
          hasHeightinMobile ? styles.hasHeight : null
        } ${hasFixed ? styles.hasFixed : null}`}
      >
        <div className={`nav-down collapse-header ${styles.NavBarContainer}`}>
          <Container>
            <Row>
              {/* <Col xs={12} className={`${styles.ColSub} navbar--secondary`}>
                            <div className={`d-flex align-items-center justify-content-between ${styles.NavMenu}`}>
                                <div className={styles.placeholder}></div>
                                <div className={`d-flex align-items-center ${styles.papers}`}>
                                    <a target="_blank" rel="noopener noreferrer" href={t('header:genepaper_url')} className={styles.paper}><div className={styles.gIcon}/>{t('header:genepaper')}</a>
                                    <a target="_blank" rel="noopener noreferrer" href={t('header:techpaper_url')} className={styles.paper}><div className={styles.tIcon}/>{t('header:techpaper')}</a>
                                    <Dropdown className={styles.dropdown}>
                                    <Dropdown.Toggle className={styles.dropdownToggle} id="dropdown-custom-components">
                                        <CustomToggle>
                                            <div className={styles.lngBtn}>{t('header:lang_demo')}</div>
                                        </CustomToggle>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={`animated fadeIn faster ${styles.dropdownMenu}`}>
                                        <Dropdown.Item onClick={() => this.changeLng('zh-cn')} eventKey="4.1">
                                            简体中文
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4.2"
                                                    onClick={() => this.changeLng('en-us')}>English</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>
                            </div>
                        </Col> */}
              <Col
                xs={12}
                className={`${styles.ColMain}  navbar--primary d-flex justify-content-between align-items-center`}
              >
                <Navbar
                  bg="white"
                  expand="lg"
                  className={`${styles.Navbar} ${
                    transparent ? null : styles.NavBg
                  } cs-header`}
                >
                  <Navbar.Brand href="/">
                    <div className={"hidden-xs"}>
                      {hasFixed ? (
                        <img
                          alt="darwinia logo"
                          className={styles.logo}
                          src={logo}
                        />
                      ) : (
                        <img
                          alt="darwinia logo"
                          className={styles.logo}
                          src={logo}
                        />
                      )}
                    </div>
                    <div className={"hidden-md"}>
                      {!hasFixed && !hasHeightinMobile ? (
                        <img
                          alt="darwinia logo"
                          className={styles.logo}
                          src={logoWhite}
                        />
                      ) : (
                        <img
                          alt="darwinia logo"
                          className={styles.logo}
                          src={logo}
                        />
                      )}
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    onClick={() => {
                      this.showTargetElement();
                    }}
                    aria-controls="basic-navbar-nav"
                  />

                  <Navbar.Collapse className={"d-none d-lg-block"}>
                    <Nav className="mr-auto"></Nav>
                    <Form inline>
                      <Nav.Link className={styles.navTab} href="/tech">
                        {t("header:tech")}
                      </Nav.Link>
                      <Nav.Link
                        className={styles.navTab}
                        href="https://www.baidu.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("header:docs")}
                      </Nav.Link>
                      <Nav.Link className={styles.navTab} href="#">
                        {t("header:use_darwinia")}
                      </Nav.Link>
                      <Nav.Link className={styles.navTab} href="/community">
                        {t("header:community")}
                      </Nav.Link>
                      <Nav.Link
                        className={`${styles.navTab} ${styles.navMedia}`}
                        href="/media"
                      >
                        {t("header:media")}
                      </Nav.Link>
                    </Form>
                  </Navbar.Collapse>
                </Navbar>

                {open && (
                  <div
                    id="basic-navbar-nav"
                    className={`${styles.navDraw} d-flex flex-column animated fadeInRight faster`}
                  >
                    <div className={`${styles.closeBox} d-flex`}>
                      <Dropdown alignRight>
                        <Dropdown.Toggle id="dropdown-custom-components">
                          {/* <div className={styles.lngBtn}>{t('header:lang_demo')}</div> */}
                          <CustomToggle>
                            <div className={styles.lngBtn}>
                              {t("header:lang_demo")}
                            </div>
                          </CustomToggle>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className={`animated fadeIn faster ${styles.dropdownMenu}`}
                        >
                          <Dropdown.Item
                            onClick={() => this.changeLng("zh-cn")}
                            eventKey="4.1"
                          >
                            简体中文
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="4.2"
                            onClick={() => this.changeLng("en-us")}
                          >
                            English
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className={"spacer"}></div>
                      <div
                        onClick={() => {
                          this.hideTargetElement();
                        }}
                      >
                        <img alt="close" width={15} src={closeIcon} />
                      </div>
                    </div>

                    <Container
                      className={
                        "text-center spacer d-flex flex-column justify-content-center"
                      }
                    >
                      <Row className={styles.navDrawList}>
                        <Col md={12}>
                          <Nav.Link href="/">{t("header:home")}</Nav.Link>
                        </Col>
                        <Col md={12}>
                          <Nav.Link href="/tech">{t("header:tech")}</Nav.Link>
                        </Col>
                        <Col md={12}>
                          <Nav.Link href="/community">
                            {t("header:community")}
                          </Nav.Link>
                        </Col>
                        <Col md={12}>
                          <Nav.Link href="/economic_model">
                            {t("header:economic_model")}
                          </Nav.Link>
                        </Col>
                        <Col md={12}>
                          <Nav.Link href="/media">{t("header:media")}</Nav.Link>
                        </Col>
                        <Col md={12}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={t("header:genepaper_url")}
                            className={styles.paper}
                          >
                            <div className={styles.gIcon} />
                            {t("header:genepaper")}
                          </a>
                        </Col>
                        <Col md={12}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={t("header:techpaper_url")}
                            className={styles.paper}
                          >
                            <div className={styles.tIcon} />
                            {t("header:techpaper")}
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                )}

                {open && (
                  <div
                    onClick={() => {
                      this.hideTargetElement();
                    }}
                    className="overlay overlay--active  animated fadeIn faster"
                  ></div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className={`${styles.NavBarBg}`}></div> */}
      </div>
    );
  }
}

export default withTranslation()(PageHeader);
