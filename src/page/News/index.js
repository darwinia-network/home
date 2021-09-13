import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";

import archorsComponent from "../../components/anchorsComponent";
import { withTranslation } from "react-i18next";
import styles from "./style.module.scss";
import news from "../Media/img/news.png";
import news1 from "../Media/img/news1.png";
import news2 from "../Media/img/news2.png";
import news3 from "../Media/img/news3.png";
import news4 from "../Media/img/news4.png";
import news5 from "../Media/img/news5.png";
import news6 from "../Media/img/news6.png";
import news7 from "../Media/img/news7.png";
import news8 from "../Media/img/news8.png";
import news9 from "../Media/img/news9.png";
import news10 from "../Media/img/news10.png";
import news11 from "../Media/img/news11.png";
import news12 from "../Media/img/news12.png";
import news13 from "../Media/img/news13.png";
import news14 from "../Media/img/news14.png";
import news15 from "../Media/img/news15.png";
import news16 from "../Media/img/news16.png";
import news17 from "../Media/img/news17.png";
import news18 from "../Media/img/news18.png";
import news19 from "../Media/img/news19.png";
import news20 from "../Media/img/news20.png";
import news21 from "../Media/img/news21.png";
import news22 from "../Media/img/news22.png";
import news23 from "../Media/img/news23.png";
import news24 from "../Media/img/news24.png";
import news25 from "../Media/img/news25.png";
import news26 from "../Media/img/news26.png";
import news27 from "../Media/img/news27.png";
import news28 from "../Media/img/news28.png";
import news29 from "../Media/img/news29.png";
import news30 from "../Media/img/news30.png";
import news31 from "../Media/img/news31.png";
import news32 from "../Media/img/news32.png";
import news33 from "../Media/img/news33.png";
import news34 from "../Media/img/news34.png";
import news35 from "../Media/img/news35.png";
import news36 from "../Media/img/news36.png";
import news37 from "../Media/img/news37.png";
import news38 from "../Media/img/news38.png";
import news39 from "../Media/img/news39.png";
import news40 from "../Media/img/news40.png";
import news41 from "../Media/img/news41.png";
import news42 from "../Media/img/news42.png";
import news43 from "../Media/img/news43.png";
import news44 from "../Media/img/news44.png";
import news45 from "../Media/img/news45.png";
import news46 from "../Media/img/news46.png";
import news47 from "../Media/img/news47.png";

class News extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    const { t } = this.props;

    this.infos = [
      {
        link: t("media:news_47_link"),
        time: t("media:news_47_time"),
        title: t("media:news_47_title"),
        src: news47,
      },
      {
        link: t("media:news_46_link"),
        time: t("media:news_46_time"),
        title: t("media:news_46_title"),
        src: news46,
      },
      {
        link: t("media:news_45_link"),
        time: t("media:news_45_time"),
        title: t("media:news_45_title"),
        src: news45,
      },
      {
        link: t("media:news_44_link"),
        time: t("media:news_44_time"),
        title: t("media:news_44_title"),
        src: news44,
      },
      {
        link: t("media:news_43_link"),
        time: t("media:news_43_time"),
        title: t("media:news_43_title"),
        src: news43,
      },
      {
        link: t("media:news_42_link"),
        time: t("media:news_42_time"),
        title: t("media:news_42_title"),
        src: news42,
      },
      {
        link: t("media:news_41_link"),
        time: t("media:news_41_time"),
        title: t("media:news_41_title"),
        src: news41,
      },
      {
        link: t("media:news_40_link"),
        time: t("media:news_40_time"),
        title: t("media:news_40_title"),
        src: news40,
      },
      {
        link: t("media:news_39_link"),
        time: t("media:news_39_time"),
        title: t("media:news_39_title"),
        src: news39,
      },
      {
        link: t("media:news_38_link"),
        time: t("media:news_38_time"),
        title: t("media:news_38_title"),
        src: news38,
      },
      {
        link: t("media:news_37_link"),
        time: t("media:news_37_time"),
        title: t("media:news_37_title"),
        src: news37,
      },
      {
        link: t("media:news_36_link"),
        time: t("media:news_36_time"),
        title: t("media:news_36_title"),
        src: news36,
      },
      {
        link: t("media:news_35_link"),
        time: t("media:news_35_time"),
        title: t("media:news_35_title"),
        src: news35,
      },
      {
        link: t("media:news_34_link"),
        time: t("media:news_34_time"),
        title: t("media:news_34_title"),
        src: news34,
      },
      {
        link: t("media:news_33_link"),
        time: t("media:news_33_time"),
        title: t("media:news_33_title"),
        src: news33,
      },
      {
        link: t("media:news_32_link"),
        time: t("media:news_32_time"),
        title: t("media:news_32_title"),
        src: news32,
      },
      {
        link: t("media:news_31_link"),
        time: t("media:news_31_time"),
        title: t("media:news_31_title"),
        src: news31,
      },
      {
        link: t("media:news_30_link"),
        time: t("media:news_30_time"),
        title: t("media:news_30_title"),
        src: news30,
      },
      {
        link: t("media:news_29_link"),
        time: t("media:news_29_time"),
        title: t("media:news_29_title"),
        src: news29,
      },
      {
        link: t("media:news_28_link"),
        time: t("media:news_28_time"),
        title: t("media:news_28_title"),
        src: news28,
      },
      {
        link: t("media:news_27_link"),
        time: t("media:news_27_time"),
        title: t("media:news_27_title"),
        src: news27,
      },
      {
        link: t("media:news_26_link"),
        time: t("media:news_26_time"),
        title: t("media:news_26_title"),
        src: news26,
      },
      {
        link: t("media:news_25_link"),
        time: t("media:news_25_time"),
        title: t("media:news_25_title"),
        src: news25,
      },
      {
        link: t("media:news_24_link"),
        time: t("media:news_24_time"),
        title: t("media:news_24_title"),
        src: news24,
      },
      {
        link: t("media:news_23_link"),
        time: t("media:news_23_time"),
        title: t("media:news_23_title"),
        src: news23,
      },
      {
        link: t("media:news_22_link"),
        time: t("media:news_22_time"),
        title: t("media:news_22_title"),
        src: news22,
      },
      {
        link: t("media:news_21_link"),
        time: t("media:news_21_time"),
        title: t("media:news_21_title"),
        src: news21,
      },
      {
        link: t("media:news_20_link"),
        time: t("media:news_20_time"),
        title: t("media:news_20_title"),
        src: news20,
      },
      {
        link: t("media:news_19_link"),
        time: t("media:news_19_time"),
        title: t("media:news_19_title"),
        src: news19,
      },
      {
        link: t("media:news_18_link"),
        time: t("media:news_18_time"),
        title: t("media:news_18_title"),
        src: news18,
      },
      {
        link: t("media:news_17_link"),
        time: t("media:news_17_time"),
        title: t("media:news_17_title"),
        src: news17,
      },
      {
        link: t("media:news_16_link"),
        time: t("media:news_16_time"),
        title: t("media:news_16_title"),
        src: news16,
      },
      {
        link: t("media:news_15_link"),
        time: t("media:news_15_time"),
        title: t("media:news_15_title"),
        src: news15,
      },
      {
        link: t("media:news_14_link"),
        time: t("media:news_14_time"),
        title: t("media:news_14_title"),
        src: news14,
      },
      {
        link: t("media:news_13_link"),
        time: t("media:news_13_time"),
        title: t("media:news_13_title"),
        src: news13,
      },
      {
        link: t("media:news_12_link"),
        time: t("media:news_12_time"),
        title: t("media:news_12_title"),
        src: news12,
      },
      {
        link: t("media:news_11_link"),
        time: t("media:news_11_time"),
        title: t("media:news_11_title"),
        src: news11,
      },
      {
        link: t("media:news_10_link"),
        time: t("media:news_10_time"),
        title: t("media:news_10_title"),
        src: news10,
      },
      {
        link: t("media:news_9_link"),
        time: t("media:news_9_time"),
        title: t("media:news_9_title"),
        src: news9,
      },
      {
        link: t("media:news_8_link"),
        time: t("media:news_8_time"),
        title: t("media:news_8_title"),
        src: news8,
      },
      {
        link: t("media:news_7_link"),
        time: t("media:news_7_time"),
        title: t("media:news_7_title"),
        src: news7,
      },
      {
        link: t("media:news_6_link"),
        time: t("media:news_6_time"),
        title: t("media:news_6_title"),
        src: news6,
      },
      {
        link: t("media:news_5_link"),
        time: t("media:news_5_time"),
        title: t("media:news_5_title"),
        src: news5,
      },
      {
        link: t("media:news_4_link"),
        time: t("media:news_4_time"),
        title: t("media:news_4_title"),
        src: news4,
      },
      {
        link: t("media:news_3_link"),
        time: t("media:news_3_time"),
        title: t("media:news_3_title"),
        src: news3,
      },
      {
        link: t("media:news_2_link"),
        time: t("media:news_2_time"),
        title: t("media:news_2_title"),
        src: news2,
      },
      {
        link: t("media:news_1_link"),
        time: t("media:news_1_time"),
        title: t("media:news_1_title"),
        src: news1,
      },
    ];
  }

  componentDidMount() {
    archorsComponent();
  }

  renderNews() {
    const { t } = this.props;
    return this.infos.map((partner, index) => {
      return (
        <Col key={index} md={3} className={styles.content}>
          {partner.link ? (
            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={partner.link}>
              <div className={styles.imgRatio}>
                <img alt="news" src={partner.src} />
              </div>
              <div className={styles.mediaInfo}>
                <span>{t("media:more_title")}</span>
                <span className={styles.mediaTime}>{partner.time}</span>
              </div>
              <div className={styles.mediaDesc}>{partner.title}</div>
            </a>
          ) : (
            <div className={styles.imgUrl}>
              <div className={styles.imgRatio}>
                <img alt="news" src={partner.src} />
              </div>
              <div className={styles.mediaInfo}>
                <span>{t("media:more_title")}</span>
                <span className={styles.mediaTime}>{partner.time}</span>
              </div>
              <div className={styles.mediaDesc}>{partner.title}</div>
            </div>
          )}
        </Col>
      );
    });
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <PageHeader transparent={true} hasHeightinMobile={true} />
        <div className={`${styles.news}`}>
          <Container>
            <div className={styles.title}>
              <img src={news} alt="news" />
              <h1 className={`${styles.gradientText}`}>{t("media:news")}</h1>
            </div>
            <Row>{this.renderNews()}</Row>
          </Container>
        </div>

        <PageFooter />
      </div>
    );
  }
}

export default withTranslation()(News);
