/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import { Container, Row, Col, InputGroup, FormControl, Button, Form, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import LazyBackground from "../../components/lazyBackground";
import MediaQuery from "react-responsive";
import Fade from "react-reveal/Fade";

// import { GradientHeading } from '../../components/GradientHeading'
import eco1 from "./img/eco-1.png";
import eco2 from "./img/eco-2.png";
import styles from "./style.module.scss";
import tokenBg from "./img/token-bg.png";
import tokenBgM from "./img/token-bg-m.png";
import inflation1 from "./img/inflation-1.png";
import inflation2 from "./img/inflation-2.png";
import model1 from "./img/model-1.png";
import model2 from "./img/model-2.png";
import staking1 from "./img/staking-1.png";
import staking2 from "./img/staking-2.png";
import circulation from "./img/circulation.png";
import bannerBg from "./img/banner-bg.png";
import bannerBgM from "./img/banner-bg-m.png";
import archorsComponent from "../../components/anchorsComponent";
import { withTranslation } from "react-i18next";
import axios from "axios";
// import i18n from '../../locales/i18n';

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      ring: "",
      kton: "",
    };
  }

  componentDidMount() {
    archorsComponent();
    this.getTokenDetail();
  }

  getTokenDetail = (text) => {
    axios
      .get("https://api.darwinia.network/supply/kton")
      .then((response) => {
        if (response.data.code === 0) {
          let data = response.data.data;
          this.setState({
            kton: {
              circulatingSupply: parseInt(data.circulatingSupply).toLocaleString("en-US"),
              totalSupply: parseInt(data.totalSupply).toLocaleString("en-US"),
            },
          });
        }
      })
      .catch((error) => {
        // console.log(error);
      });
    axios
      .get("https://api.darwinia.network/supply/ring")
      .then((response) => {
        if (response.data.code === 0) {
          let data = response.data.data;
          this.setState({
            ring: {
              circulatingSupply: parseInt(data.circulatingSupply).toLocaleString("en-US"),
              totalSupply: parseInt(data.totalSupply).toLocaleString("en-US"),
            },
          });
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  renderContainer() {
    const { t } = this.props;
    return (
      <Container>
        <div>
          <Row>
            <Col xs={12} className={`${styles.content}`}>
              <div className={styles.title}>
                <h1 className={` ${styles.fontH1} ${styles.gradientText}`}>{t("model:economic")}</h1>
              </div>
              <div className={styles.title}>
                <h3 className={` ${styles.gradientText}`}>{t("model:theme")}</h3>
              </div>
              <div className={styles.buttonSection}>
                <Button target="_blank" href={t("model:how_to_stake_link")}>
                  {t("model:how_to_stake")}
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }

  render() {
    const { t } = this.props;
    const { ring, kton } = this.state;
    return (
      <div className={styles.economic}>
        <PageHeader href="#top" transparent={true} hasHeightinMobile={true} />
        <MediaQuery minDeviceWidth={768}>
          <LazyBackground src={bannerBg} className={styles.themeContainer}>
            {this.renderContainer()}
          </LazyBackground>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={767.98}>
          <LazyBackground src={bannerBgM} className={styles.themeContainer}>
            {this.renderContainer()}
          </LazyBackground>
        </MediaQuery>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={styles.tokenContainer}>
            <Container>
              <div className={styles.title}>
                <h1 className={`reveal-h1 ${styles.fontH1} ${styles.gradientText}`}>{t("model:token")}</h1>
              </div>
              <Row>
                <Col xs={12} md={6} className={`${styles.col} ${styles.colRing}`}>
                  <div>
                    <div className={styles.placeHolder}></div>
                    <div className={`${styles.symbol}`}>
                      <img src={eco1} alt="ring" />
                      <span>{t("model:ring")}</span>
                    </div>
                    <div className={styles.placeHolder}></div>
                    <div className={`${styles.content}`}>
                      <div className={`${styles.item} ${styles.itemTitle}`}>
                        <span className={`${styles.desc}`}>{t("model:ring_desc")}</span>
                      </div>
                      <div className={`${styles.item}`}>
                        <span className={`${styles.desc}`}>{t("model:max_supply")}</span>
                        <span className={`${styles.number}`}>10,000,000,000</span>
                      </div>
                      <div className={`${styles.item}`}>
                        <span className={`${styles.desc}`}>{t("model:circulating_supply")}</span>
                        <span className={`${styles.number}`}>{ring.circulatingSupply || ""}</span>
                      </div>
                      <div className={`${styles.item}`}>
                        <span className={`${styles.desc}`}>{t("model:total_supply")}</span>
                        <span className={`${styles.number}`}>{ring.totalSupply || ""}</span>
                      </div>
                    </div>
                    <div className={styles.placeHolder}></div>
                  </div>
                </Col>
                <Col xs={12} md={6} className={`${styles.col} ${styles.colKton}`}>
                  <div>
                    <div className={styles.placeHolder}></div>
                    <div className={`${styles.symbol}`}>
                      <img src={eco2} alt="kton" />
                      <span>{t("model:kton")}</span>
                    </div>
                    <div className={styles.placeHolder}></div>
                    <div className={`${styles.content}`}>
                      <div className={`${styles.item} ${styles.itemTitle}`}>
                        <span className={`${styles.desc}`}>{t("model:kton_desc")}</span>
                      </div>
                      <div className={`${styles.item}`}>
                        <span className={`${styles.desc}`}>{t("model:max_supply")}</span>
                        <span className={`${styles.number}`}>{t("model:none")}</span>
                      </div>
                      <div className={`${styles.item}`}>
                        <span className={`${styles.desc}`}>{t("model:circulating_supply")}</span>
                        <span className={`${styles.number}`}>{kton.circulatingSupply || ""}</span>
                      </div>
                      <div className={`${styles.item}`}>
                        <span className={`${styles.desc}`}>{t("model:total_supply")}</span>
                        <span className={`${styles.number}`}>{kton.totalSupply || ""}</span>
                      </div>
                    </div>
                    <div className={styles.placeHolder}></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className={`${styles.title} ${styles.bridge}`}>
                    <h2 className={`${styles.gradientText}`}>{t("model:token_bridge")}</h2>
                  </div>
                  <img className={"hidden-xs"} src={tokenBg} alt="token" />
                  <img className={"hidden-md"} src={tokenBgM} alt="token" />
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={styles.stakingContainer}>
            <Container>
              <div className={styles.title}>
                <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t("model:staking")}</h1>
              </div>
              <p>{t("model:staking_desc")}</p>
              <Row>
                <Col xs={12} md={6} className={styles.col}>
                  <div className={styles.chart}>
                    <div>{t("model:staking_1")}</div>
                    <img src={staking1} alt="staking" />
                  </div>
                  <div className={`text-center ${styles.btn}`}>
                    <Button variant="dark" target="_blank" href={t("model:read_more_link_1")} className={styles.button}>
                      {t("model:read_more")}
                    </Button>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.chart}>
                    <div>{t("model:staking_2")}</div>
                    <img src={staking2} alt="staking" />
                  </div>
                  <div className={`text-center ${styles.btn}`}>
                    <Button variant="dark" target="_blank" href={t("model:read_more_link_2")} className={styles.button}>
                      {t("model:read_more")}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={styles.inflationContainer}>
            <Container>
              <div className={styles.title}>
                <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t("model:inflation")}</h1>
              </div>
              <p>{t("model:inflation_content")}</p>
              <Row>
                <Col xs={12} md={6}>
                  <div className={styles.chart}>
                    <div>{t("model:inflation_1")}</div>
                    <img src={inflation1} alt="inflation" />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.chart}>
                    <div>{t("model:inflation_2")}</div>
                    <img src={inflation2} alt="inflation" />
                  </div>
                </Col>
              </Row>
              <div className={styles.chartDesc}>{t("model:inflation_desc")}</div>
              <div className={`text-center ${styles.btn}`}>
                <Button variant="dark" target="_blank" href={t("model:read_more_link_3")} className={styles.button}>
                  {t("model:read_more")}
                </Button>
              </div>
            </Container>
          </div>
        </Fade>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={styles.circulationContainer}>
            <Container>
              <Row>
                <Col xs={12} md={6} className={styles.textCol}>
                  <div className={styles.title}>
                    <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t("model:circulation")}</h1>
                  </div>
                  <div className={styles.subTitle}>{t("model:circulation_title")}</div>
                  <p>{t("model:circulation_desc_1")}</p>
                  <p>{t("model:circulation_desc_2")}</p>
                  <p>{t("model:circulation_desc_3")}</p>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.chart}>
                    <div className={styles.chartImg}>
                      <img src={circulation} alt="circulation" />
                    </div>
                    <div>{t("model:circulation_chart_desc")}</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={styles.modelContainer}>
            <Container>
              <div className={styles.title}>
                <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t("model:revenue")}</h1>
              </div>
              <Row>
                <Col xs={12} md={6}>
                  <div className={styles.chart}>
                    <div className={styles.imgWrapper}>
                      <img src={model1} alt="model" />
                    </div>
                    <div className={styles.chartSection}>
                      <div className={styles.title}>{t("model:revenue_1")}</div>
                      <p>{t("model:revenue_1_item_1")}</p>
                      <p>{t("model:revenue_1_item_2")}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.chart}>
                    <div className={styles.imgWrapper}>
                      <img src={model2} alt="model" />
                    </div>
                    <div className={styles.chartSection}>
                      <div className={styles.title}>{t("model:revenue_2")}</div>
                      <p>{t("model:revenue_2_item_1")}</p>
                      <p>{t("model:revenue_2_item_2")}</p>
                      <p>{t("model:revenue_2_item_3")}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>

        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default withTranslation()(Home);
