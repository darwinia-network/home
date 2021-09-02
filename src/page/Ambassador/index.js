import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";

import i18n from "../../locales/i18n";
import archorsComponent from "../../components/anchorsComponent";
import { withTranslation } from "react-i18next";
import styles from "./style.module.scss";
// import GradientHeading from "../../components/GradientHeading/GradientHeading";

import banner from "./img/banner.png";
import banner_en from "./img/banner_en.png";
import flow from "./img/flow.png";
import flow_en from "./img/flow_en.png";

import video12 from "../Media/img/video12.png";
import report10 from "../Media/img/report10.png";
import report9 from "../Media/img/report9.png";

class Brand extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {
    archorsComponent();
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <PageHeader transparent={true} hasHeightinMobile={true} />
        <div className={`${styles.article}`}>
          <Container>
            <Row>
              <Col xs={0} md={1}></Col>
              <Col xs={12} md={10} className={`${styles.content}`}>
                <h1>{t("ambassador:title")}</h1>
                <div className={styles.author}>
                  <span>{t("ambassador:time")}</span>
                  <span>{t("ambassador:author")}</span>
                </div>
                <div className={styles.lineH1}></div>
                {i18n.language.indexOf("en") > -1 ? (
                  <img alt="banner" className={styles.banner} src={banner_en} />
                ) : (
                  <img alt="banner" className={styles.banner} src={banner} />
                )}
                <div className={styles.subTitle}>
                  {t("ambassador:about_title")}
                </div>
                <p>{t("ambassador:about_desc")}</p>

                <div className={styles.subTitle}>
                  {t("ambassador:why_title")}
                </div>
                <p>{t("ambassador:why_desc_1")}</p>
                <p>{t("ambassador:why_desc_2")}</p>
                <p>{t("ambassador:why_desc_3")}</p>

                <div className={styles.subTitle}>
                  {t("ambassador:who_title")}
                </div>
                <p>{t("ambassador:who_desc_1")}</p>
                <p>{t("ambassador:who_desc_2")}</p>
                <p>{t("ambassador:who_desc_3")}</p>
                <p>{t("ambassador:who_desc_4")}</p>
                <p>{t("ambassador:who_desc_5")}</p>
                <Button
                  variant="dark"
                  target="_blank"
                  href={t("ambassador:form")}
                  className={styles.button}
                >
                  {t("community:dive_slogan")}
                </Button>

                <div className={styles.subTitle}>
                  {t("ambassador:what_title")}
                </div>
                <p>{t("ambassador:what_desc_1")}</p>
                <h3>{t("ambassador:tech")}</h3>
                <p>{t("ambassador:tech_desc_1")}</p>
                <div className={styles.subContent}>
                  <h4>{t("ambassador:grant")}</h4>
                  <p>{t("ambassador:grant_desc")}</p>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/darwinia-network/collaboration/blob/master/grant/README.md"
                  >
                    {t("ambassador:link")}
                  </a>
                  <h4>{t("ambassador:bounty")}</h4>
                  <p>{t("ambassador:bounty_desc")}</p>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/darwinia-network/collaboration/blob/master/bounty/README.md"
                  >
                    {t("ambassador:link")}
                  </a>
                </div>
                <p>{t("ambassador:tech_desc_2")}</p>

                <h3>{t("ambassador:edu")}</h3>
                <p>{t("ambassador:edu_desc_1")}</p>
                <div className={styles.subContent}>
                  <h4>{t("ambassador:content")}</h4>
                  <p>{t("ambassador:content_desc")}</p>
                  <h4>{t("ambassador:meetup")}</h4>
                  <p>{t("ambassador:meetup_desc")}</p>
                  <h4>{t("ambassador:translator")}</h4>
                  <p>{t("ambassador:translator_desc")}</p>
                  <h4>{t("ambassador:moderator")}</h4>
                  <p>{t("ambassador:moderator_desc")}</p>
                  <h4>{t("ambassador:experience")}</h4>
                  <p>{t("ambassador:experience_desc_1")}</p>
                  <li>{t("ambassador:experience_desc_2")}</li>
                  <li>{t("ambassador:experience_desc_3")}</li>
                </div>

                <div className={styles.subTitle}>
                  {t("ambassador:how_title")}
                </div>
                <p className={styles.howDesc}>
                  <span>{t("ambassador:how_desc_1")}</span>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={t("ambassador:form")}
                  >
                    {t("ambassador:how_desc_2")}
                  </a>
                  <span>{t("ambassador:how_desc_3")}</span>
                </p>
                {i18n.language.indexOf("en") > -1 ? (
                  <img alt="banner" className={styles.banner} src={flow_en} />
                ) : (
                  <img alt="banner" className={styles.banner} src={flow} />
                )}

                <div className={styles.subTitle}>
                  {t("ambassador:benefit_title")}
                </div>
                <p>{t("ambassador:benefit_content")}</p>
                <p>{t("ambassador:benefit_desc_1")}</p>
                <p>{t("ambassador:benefit_desc_2")}</p>
                <p>{t("ambassador:benefit_desc_3")}</p>
                <p>{t("ambassador:benefit_desc_4")}</p>
                <p>{t("ambassador:benefit_desc_5")}</p>
                <p>{t("ambassador:benefit_desc_6")}</p>

                <Button
                  variant="dark"
                  target="_blank"
                  href={t("ambassador:form")}
                  className={styles.button}
                >
                  {t("community:dive_slogan")}
                </Button>

                <div className={styles.lineH1}></div>
                <div>
                  <h2 className={`${styles.gradientText}`}>
                    {t("ambassador:more")}
                  </h2>
                </div>
                <ul className={styles.mediaBlocks}>
                  <li className={styles.mediaBlock}>
                    <a
                      className={styles.imgUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={t("media:video_12_link")}
                    >
                      <div className={styles.imgRatio}>
                        <img alt="video" src={video12} />
                      </div>
                      <div className={styles.mediaInfo}>
                        <span>{t("media:more_title")}</span>
                        <span className={styles.mediaTime}>
                          {t("media:video_12_time")}
                        </span>
                      </div>
                      <div className={styles.mediaDesc}>
                        {t("media:video_12_title")}
                      </div>
                    </a>
                  </li>
                  <li className={styles.mediaBlock}>
                    <a
                      className={styles.imgUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={t("media:report_10_link")}
                    >
                      <div className={styles.imgRatio}>
                        <img alt="report" src={report10} />
                      </div>
                      <div className={styles.mediaInfo}>
                        <span>{t("media:more_title")}</span>
                        <span className={styles.mediaTime}>
                          {t("media:report_10_time")}
                        </span>
                      </div>
                      <div className={styles.mediaDesc}>
                        {t("media:report_10_title")}
                      </div>
                    </a>
                  </li>
                  <li className={styles.mediaBlock}>
                    <a
                      className={styles.imgUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={t("media:report_9_link")}
                    >
                      <div className={styles.imgRatio}>
                        <img alt="report" src={report9} />
                      </div>
                      <div className={styles.mediaInfo}>
                        <span>{t("media:more_title")}</span>
                        <span className={styles.mediaTime}>
                          {t("media:report_9_time")}
                        </span>
                      </div>
                      <div className={styles.mediaDesc}>
                        {t("media:report_9_title")}
                      </div>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default withTranslation()(Brand);
