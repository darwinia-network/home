import React, { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import styles from "./style.module.scss";

import lngIcon from "./img/lngIcon.svg";

import share1 from "./img/share-1.png";
import share2 from "./img/share-2.png";
import share3 from "./img/share-3.png";
import share4 from "./img/share-4.png";
import share8 from "./img/share-8.png";
import share10 from "./img/share-10.png";
import shareElement from "./img/element.svg";
import shareYoutube from "./img/youtube.svg";
import dwSlideIcon from "./img/slide-logo.png";

class PageFooter extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }

  changeTextValue = (k, e) => {
    this.setState({
      [k]: e.target.value,
    });
  };

  goto = (type, e) => {
    switch (type) {
      case "medium":
        window.open("https://darwinianetwork.medium.com/");
        return;
      case "tg":
        window.open("https://t.me/DarwiniaNetwork");
        return;
      case "twitter":
        window.open("https://twitter.com/DarwiniaNetwork");
        return;
      case "github":
        window.open("https://github.com/darwinia-network");
        return;
      case "bihu":
        window.open("https://bihu.com/people/1100617");
        return;
      case "weibo":
        window.open("http://weibo.com/DarwiniaNetwork");
        return;
      case "email":
        window.open("mailto:hello@darwinia.network");
        return;
      case "discord":
        window.open("https://discord.com/channels/456092011347443723/795384466930663434");
        return;
      case "element":
        window.open("https://app.element.io/#/room/#darwinia:matrix.org");
        return;
      case "youtube":
        window.open("https://www.youtube.com/channel/UCgtFX6DJn66fM7rPp99fOGg/featured");
        return;
      default:
        return;
    }
  };

  handleClickLng = (lng) => {
    this.props.i18n.changeLanguage(lng);
  };

  renderMap = () => {
    const { t, i18n } = this.props;

    return (
      <div className={`${styles.map} d-none d-md-block d-lg-block`}>
        <Container className={styles.mapContainer}>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <img alt="dwSlideIcon" className={styles.footerIcon} src={dwSlideIcon} />
            </Col>
            <Col>
              <Form
                action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <InputGroup className={`${styles.subscribe} hidden-xs`}>
                  <div className="mc-field-group">
                    <FormControl
                      type="email"
                      className="required email"
                      defaultValue=""
                      id="mce-EMAIL"
                      name="EMAIL"
                      placeholder={t("home_page:placeholder")}
                      aria-label={t("home_page:placeholder")}
                      aria-describedby={t("home_page:placeholder")}
                    />
                    <div
                      htmlFor="mce-EMAIL"
                      style={{ display: "none" }}
                      className={`mce_inline_error text-muted ${styles.subscribeTip}`}
                    ></div>
                  </div>
                  <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit">
                      {t("home_page:subscribe_btn")}
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                <Form.Text
                  id="mce-error-response"
                  className={`text-muted ${styles.subscribeTip} hidden-xs`}
                  style={{ display: "none" }}
                ></Form.Text>
                <Form.Text
                  id="mce-success-response"
                  className={`text-muted ${styles.subscribeTip} hidden-xs`}
                  style={{ display: "none" }}
                ></Form.Text>
              </Form>
            </Col>
          </Row>
          <Row className={`d-flex justify-content-between`}>
            <Col xs={6} md={4} lg={3}>
              <h1>{t("footer:general")}</h1>
              <p>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.darwinia.network/">
                  {t("footer:general_title_2")}
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.notion.so/itering/9617e154ec884b07a7cee9a056374e42?v=0c3e4d9f257646c486a32a0425ee3a93"
                >
                  {t("footer:general_title_6")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={t("footer:general_link_3")}>
                  {t("footer:general_title_3")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href="mailto:hello@darwinia.network">
                  {t("footer:general_title_4")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href="/brand">
                  {t("footer:general_title_5")}
                </a>
              </p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <h1>{t("footer:technology")}</h1>
              {i18n.language.indexOf("en") > -1 ? (
                <p>
                  <a target="_blank" rel="noopener noreferrer" href="/Darwinia_Genepaper_EN.pdf">
                    {t("footer:technology_title_2")}
                  </a>
                </p>
              ) : (
                <p>
                  <a target="_blank" rel="noopener noreferrer" href="/Darwinia_Genepaper_CN.pdf">
                    {t("footer:technology_title_2")}
                  </a>
                </p>
              )}
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://darwinia.network/Optimistic_Bridge_Technical_Paper(Preview)_EN.pdf"
                >
                  {t("footer:technology_title_5")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/darwinia-network/darwinia">
                  {t("footer:technology_title_3")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href="https://telemetry.polkadot.io/#list/Polkadot">
                  {t("footer:technology_title_4")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={t("footer:technology_title_6_link")}>
                  {t("footer:technology_title_6")}
                </a>
              </p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <h1>{t("footer:use_darwinia")}</h1>
              <p>
                <a target="_self" href={t("footer:use_darwinia_title_1_link")}>
                  {t("footer:use_darwinia_title_1")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={t("footer:use_darwinia_title_2_link")}>
                  {t("footer:use_darwinia_title_2")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={t("footer:use_darwinia_title_3_link")}>
                  {t("footer:use_darwinia_title_3")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={t("footer:use_darwinia_title_4_link")}>
                  {t("footer:use_darwinia_title_4")}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={t("footer:use_darwinia_title_5_link")}>
                  {t("footer:use_darwinia_title_5")}
                </a>
              </p>
            </Col>
            <Col xs={6} md={4} lg={2}>
              <h1>{t("footer:contact")}</h1>
              <Row className={styles.mdContent}>
                <Col md={{ order: 3 }} className={`text-right ${styles.shareLogo}`}>
                  <div>
                    <img
                      alt="email"
                      onClick={() => {
                        this.goto("email");
                      }}
                      src={share8}
                    />
                    <img
                      alt="github"
                      onClick={() => {
                        this.goto("github");
                      }}
                      src={share4}
                    />
                    <img
                      alt="Medium"
                      onClick={() => {
                        this.goto("medium");
                      }}
                      src={share1}
                    />
                    <img
                      alt="twitter"
                      onClick={() => {
                        this.goto("twitter");
                      }}
                      src={share3}
                    />
                  </div>
                  <div>
                    <img
                      alt="telegram"
                      onClick={() => {
                        this.goto("tg");
                      }}
                      src={share2}
                    />
                    <img
                      alt="discord"
                      onClick={() => {
                        this.goto("discord");
                      }}
                      src={share10}
                    />
                    <img
                      alt="element"
                      onClick={() => {
                        this.goto("element");
                      }}
                      src={shareElement}
                    />
                    <img
                      alt="youtube"
                      onClick={() => {
                        this.goto("youtube");
                      }}
                      src={shareYoutube}
                    />
                  </div>
                </Col>
              </Row>
              <div className="d-flex align-items-center">
                <img alt="..." src={lngIcon} />
                <Button className={styles.lngBtn} onClick={() => this.handleClickLng("en")}>
                  EN
                </Button>
                <div className={styles.lngDivider} />
                <Button className={styles.lngBtn} onClick={() => this.handleClickLng("zh")}>
                  中文
                </Button>
              </div>
            </Col>
            <Col xs={0} md={0} lg={1}></Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.line}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  render() {
    const { t } = this.props;
    return (
      <>
        {this.renderMap()}
        <div className={styles.navFooter}>
          <Container>
            <Row className={styles.mdContent}>
              <Col className={`d-flex justify-content-between`}>
                <div>{t("footer:grant")}</div>
                <div>{t("footer:copyright", { year: new Date().getFullYear() })}</div>
                <div>{t("footer:support")}</div>
              </Col>
            </Row>

            <Row className={styles.xsContent}>
              <Col className={`text-center  ${styles.shareLogo}`}>
                <div className={styles.logoContent}>
                  <img
                    alt="email"
                    onClick={() => {
                      this.goto("email");
                    }}
                    src={share8}
                  />
                  <img
                    alt="github"
                    onClick={() => {
                      this.goto("github");
                    }}
                    src={share4}
                  />
                  <img
                    alt="Medium"
                    onClick={() => {
                      this.goto("medium");
                    }}
                    src={share1}
                  />
                  <img
                    alt="twitter"
                    onClick={() => {
                      this.goto("twitter");
                    }}
                    src={share3}
                  />
                </div>
                <div className={styles.logoContent}>
                  <img
                    alt="telegram"
                    onClick={() => {
                      this.goto("tg");
                    }}
                    src={share2}
                  />
                  <img
                    alt="discord"
                    onClick={() => {
                      this.goto("discord");
                    }}
                    src={share10}
                  />
                  <img
                    alt="element"
                    onClick={() => {
                      this.goto("element");
                    }}
                    src={shareElement}
                  />
                  <img
                    alt="youtube"
                    onClick={() => {
                      this.goto("youtube");
                    }}
                    src={shareYoutube}
                  />
                </div>
              </Col>
              <Col className={`text-center ${styles.copyright}`}>
                {t("footer:copyright", { year: new Date().getFullYear() })}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default withTranslation()(PageFooter);
