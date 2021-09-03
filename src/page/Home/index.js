/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Container, Row, Col, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import Fade from "react-reveal/Fade";

import styles from "./style.module.scss";
import hero from "./img/hero.mp4";

import interoperabilityIcon from "./img/darwinia-tech/interoperability.svg";
import smartContractIcon from "./img/darwinia-tech/smart-contract.svg";
import experienceIcon from "./img/darwinia-tech/experience.svg";
import governanceIcon from "./img/darwinia-tech/governance.svg";

import tokenRingIcon from "./img/powering/token-ring.svg";
import tokenKtonIcon from "./img/powering/token-kton.svg";
import subscanIcon from "./img/powering/subscan.svg";
import etherscanIcon from "./img/powering/etherscan.svg";
import metamaskIcon from "./img/powering/metamask.svg";
import tronscanIcon from "./img/powering/tronscan.png";
import comingSoonIcon from "./img/powering/coming-soon.png";

import web3FundactionIcon from "./img/grants/web3-fundaction.png";
import substrateBuilderProgramIcon from "./img/grants/substrate-builder-program.png";
import web3BootcampIcon from "./img/grants/web3-bootcamp.png";
import polkadotIcon from "./img/grants/polkadot.png";

import project01Icon from "./img/projects/1.jpg";
import project02Icon from "./img/projects/2.jpg";
import project03Icon from "./img/projects/3.jpg";
import project04Icon from "./img/projects/4.jpg";
import project05Icon from "./img/projects/5.jpg";
import project06Icon from "./img/projects/6.jpg";
import project07Icon from "./img/projects/7.jpg";
import project08Icon from "./img/projects/8.jpg";
import project09Icon from "./img/projects/9.jpg";
import project10Icon from "./img/projects/10.jpg";
import project11Icon from "./img/projects/11.jpg";
import project12Icon from "./img/projects/12.jpg";
import project13Icon from "./img/projects/13.jpg";
import project14Icon from "./img/projects/14.jpg";
import project15Icon from "./img/projects/15.jpg";
import project17Icon from "./img/projects/16.jpg";
import project18Icon from "./img/projects/17.jpg";
import project19Icon from "./img/projects/18.jpg";
import project20Icon from "./img/projects/19.jpg";
import project21Icon from "./img/projects/20.jpg";
import project16Icon from "./img/projects/21.jpg";
import project22Icon from "./img/projects/22.jpg";
import project23Icon from "./img/projects/23.jpg";

import partner01Icon from "./img/partners/1.jpg";
import partner02Icon from "./img/partners/2.jpg";
import partner03Icon from "./img/partners/3.jpg";
import partner04Icon from "./img/partners/4.jpg";
import partner05Icon from "./img/partners/5.jpg";
import partner06Icon from "./img/partners/6.jpg";
import partner07Icon from "./img/partners/7.jpg";
import partner08Icon from "./img/partners/8.jpg";
import partner09Icon from "./img/partners/9.jpg";
import partner10Icon from "./img/partners/10.jpg";
import partner11Icon from "./img/partners/11.jpg";
import partner12Icon from "./img/partners/12.jpg";
import partner13Icon from "./img/partners/13.jpg";
import partner14Icon from "./img/partners/14.jpg";
import partner15Icon from "./img/partners/15.jpg";
import partner16Icon from "./img/partners/16.jpg";
import partner17Icon from "./img/partners/17.jpg";
import partner18Icon from "./img/partners/18.jpg";
import partner19Icon from "./img/partners/19.jpg";

import archorsComponent from "../../components/anchorsComponent";
import { withTranslation } from "react-i18next";
import scrollreveal from "scrollreveal";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      info: "",
    };

    this.tokenInfo = {
      ring: {
        tokenAddress: "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
        tokenSymbol: "RING",
        tokenDecimals: 18,
        tokenImage:
          "data:image/png;base64,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",
      },
      kton: {
        tokenAddress: "0x9F284E1337A815fe77D2Ff4aE46544645B20c5ff",
        tokenSymbol: "KTON",
        tokenDecimals: 18,
        tokenImage:
          "data:image/png;base64,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",
      },
    };

    this.darwiniaTechData = [
      {
        icon: interoperabilityIcon,
        title: this.props.t("home_page:interoperability"),
        content: this.props.t("home_page:interoperability_content"),
      },
      {
        icon: smartContractIcon,
        title: this.props.t("home_page:smart_contract"),
        content: this.props.t("home_page:smart_contract_content"),
      },
      {
        icon: experienceIcon,
        title: this.props.t("home_page:experience"),
        content: this.props.t("home_page:experience_content"),
      },
      {
        icon: governanceIcon,
        title: this.props.t("home_page:smart_contract"),
        content: this.props.t("home_page:smart_contract_content"),
      },
    ];

    this.poweringCardData = [
      {
        token: tokenRingIcon,
        name: "RING",
        content: this.props.t("home_page:ring_content"),
        chains: [
          {
            icon: subscanIcon,
            link: "#",
          },
          {
            icon: etherscanIcon,
            link: "#",
          },
          {
            icon: metamaskIcon,
            link: "#",
          },
          {
            icon: tronscanIcon,
            link: "#",
          },
          {
            icon: comingSoonIcon,
            link: "#",
          },
        ],
      },
      {
        token: tokenKtonIcon,
        name: "KTON",
        content: this.props.t("home_page:kton_content"),
        chains: [
          {
            icon: subscanIcon,
            link: "#",
          },
          {
            icon: etherscanIcon,
            link: "#",
          },
          {
            icon: metamaskIcon,
            link: "#",
          },
          {
            icon: tronscanIcon,
            link: "#",
          },
          {
            icon: comingSoonIcon,
            link: "#",
          },
        ],
      },
    ];

    this.grantsData = [
      {
        icon: substrateBuilderProgramIcon,
        description: this.props.t("home_page:band_1_desc"),
      },
      {
        icon: web3FundactionIcon,
        description: this.props.t("home_page:band_2_desc"),
      },
      {
        icon: web3BootcampIcon,
        description: this.props.t("home_page:band_3_desc"),
      },
      {
        icon: polkadotIcon,
        description: this.props.t("home_page:band_4_desc"),
      },
    ];

    this.projectsData = [
      {
        icon: project01Icon,
        link: "#",
      },
      {
        icon: project02Icon,
        link: "#",
      },
      {
        icon: project03Icon,
        link: "#",
      },
      {
        icon: project04Icon,
        link: "#",
      },
      {
        icon: project05Icon,
        link: "#",
      },
      {
        icon: project06Icon,
        link: "#",
      },
      {
        icon: project07Icon,
        link: "#",
      },
      {
        icon: project08Icon,
        link: "#",
      },
      {
        icon: project09Icon,
        link: "#",
      },
      {
        icon: project10Icon,
        link: "#",
      },
      {
        icon: project11Icon,
        link: "#",
      },
      {
        icon: project12Icon,
        link: "#",
      },
      {
        icon: project13Icon,
        link: "#",
      },
      {
        icon: project14Icon,
        link: "#",
      },
      {
        icon: project15Icon,
        link: "#",
      },
      {
        icon: project16Icon,
        link: "#",
      },
      {
        icon: project17Icon,
        link: "#",
      },
      {
        icon: project18Icon,
        link: "#",
      },
      {
        icon: project19Icon,
        link: "#",
      },
      {
        icon: project20Icon,
        link: "#",
      },
      {
        icon: project21Icon,
        link: "#",
      },
      {
        icon: project22Icon,
        link: "#",
      },
      {
        icon: project23Icon,
        link: "#",
      },
    ];

    this.partnersData = [
      {
        icon: partner01Icon,
        link: "#",
      },
      {
        icon: partner02Icon,
        link: "#",
      },
      {
        icon: partner03Icon,
        link: "#",
      },
      {
        icon: partner04Icon,
        link: "#",
      },
      {
        icon: partner05Icon,
        link: "#",
      },
      {
        icon: partner06Icon,
        link: "#",
      },
      {
        icon: partner07Icon,
        link: "#",
      },
      {
        icon: partner08Icon,
        link: "#",
      },
      {
        icon: partner09Icon,
        link: "#",
      },
      {
        icon: partner10Icon,
        link: "#",
      },
      {
        icon: partner11Icon,
        link: "#",
      },
      {
        icon: partner12Icon,
        link: "#",
      },
      {
        icon: partner13Icon,
        link: "#",
      },
      {
        icon: partner14Icon,
        link: "#",
      },
      {
        icon: partner15Icon,
        link: "#",
      },
      {
        icon: partner16Icon,
        link: "#",
      },
      {
        icon: partner17Icon,
        link: "#",
      },
      {
        icon: partner18Icon,
        link: "#",
      },
      {
        icon: partner19Icon,
        link: "#",
      },
    ];
  }

  componentDidMount() {
    archorsComponent();
  }

  addScrollReveal = () => {
    scrollreveal({
      mobile: false,
    }).reveal(".reveal-h1", {
      distance: "100px",
      reset: true,
      duration: 500,
      // interval: 300,
      // useDelay: 'onload',
      // opacity: 0.5,
      // delay: 500,
      // easing: 'ease-in-out',
      // viewOffset: {
      //     top: 145
      // },
      viewFactor: 0.8,
      // reset: true,
      // init: true
    });
  };

  changeTextValue = (k, e) => {
    this.setState({
      [k]: e.target.value,
    });
  };

  renderTooltip = (text) => {
    return (
      <Popover className={styles.wxContainer}>
        <div className={styles.wxContainerBody}>
          <p>{text}</p>
        </div>
      </Popover>
    );
  };

  addToken = async (type) => {
    const token = this.tokenInfo[type];
    const provider = window.web3.currentProvider;
    provider.sendAsync(
      {
        method: "metamask_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: token.tokenAddress,
            symbol: token.tokenSymbol,
            decimals: token.tokenDecimals,
            image: token.tokenImage,
          },
        },
        id: Math.round(Math.random() * 100000),
      },
      (err, added) => {
        if (err || "error" in added) {
          console.log(err);
          return;
        }
      }
    );
  };

  render() {
    const { t } = this.props;

    return (
      <div className={styles.homePage}>
        <PageHeader href="#top" transparent={true} />
        <div className={styles.slogan}>
          <video src={hero} autoPlay="autoplay" loop="loop" muted />
          <Container>
            <h2 className={styles.sloganTitle}>{t("home_page:slogan_title")}</h2>
            <h5 className={styles.sloganSubtitle}>{t("home_page:slogan_subtitle")}</h5>
            <div className={styles.sloganBtnGround}>
              <Button variant="light" className={styles.slogonBtnText}>
                <span>{t("home_page:get_started")}</span>
              </Button>
              <Button variant="light" className={styles.slogonBtnText}>
                <span>{t("home_page:build_onn_darwinia")}</span>
              </Button>
            </div>
          </Container>
        </div>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <Container className={styles.commonContainer}>
            <div className={styles.darwiniaTech}>
              {this.darwiniaTechData.map((item, index) => (
                <div key={index} className={`${styles.darwiniaTechItem}`}>
                  <img alt="..." src={item.icon} />
                  <div className="d-flex flex-column align-items-center align-items-md-start ml-1 mt-3">
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Button className={styles.btnGradient} target="_blank" rel="noopener noreferrer" href="#">
                <span>Learn more about Darwinia’s Technology</span>
              </Button>
            </div>
          </Container>
        </Fade>

        <div className={styles.powering}>
          <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
            <Container className={styles.commonContainer}>
              <div className="d-flex flex-column align-items-center px-md-5 mx-md-5">
                <h5 className={styles.poweringTitle}>{t("home_page:powering_title")}</h5>
                <p className={styles.poweringDesc}>{t("home_page:powering_desc")}</p>

                <div className={styles.poweringCardGrounp}>
                  {this.poweringCardData.map((item, index) => (
                    <div key={index} className={styles.poweringCard}>
                      <div className="d-flex flex-column align-items-center">
                        <img alt="..." src={item.token} className={styles.token} />
                        <h5 className={styles.name}>{item.name}</h5>
                      </div>
                      <div className="d-flex flex-column ml-0 ml-md-4">
                        <div className="d-flex align-items-center justify-content-center justify-centent-md-start">
                          {item.chains.map((chain, idx) => (
                            <a key={idx} target="_blank" rel="noopener noreferrer" href={chain.link}>
                              <img alt="..." src={chain.icon} className={styles.chain} />
                            </a>
                          ))}
                        </div>
                        <p className={styles.content}>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 w-100 d-flex justify-content-center">
                  <Button className={styles.btnLight} target="_blank" rel="noopener noreferrer" href="#">
                    <span>{t("home_page:learn_more")}</span>
                  </Button>
                </div>
              </div>
            </Container>
          </Fade>
        </div>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <Container className={styles.commonContainer}>
            <div className="d-flex flex-column align-items-center">
              <h3 className={styles.supportersTitle}>{t("home_page:supporters")}</h3>

              <h5 className={styles.supportersSubtitle}>{t("home_page:grants")}</h5>
              <div className={styles.grantsGrounp}>
                {this.grantsData.map((item, index) => (
                  <>
                    <OverlayTrigger
                      key={index}
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={this.renderTooltip(item.description)}
                    >
                      <img alt="..." src={item.icon} />
                    </OverlayTrigger>
                    <p>{item.description}</p>
                  </>
                ))}
              </div>

              <h5 className={styles.supportersSubtitle}>{t("home_page:ecosystem_projects")}</h5>
              <div className={styles.projectsGrounp}>
                {this.projectsData.map((item, index) => (
                  <a key={index} target="_blank" rel="noopener noreferrer" href={item.link}>
                    <img alt="..." src={item.icon} />
                  </a>
                ))}
              </div>

              <h5 className={styles.supportersSubtitle}>{t("home_page:partners")}</h5>
              <div className={styles.partnersGrounp}>
                {this.partnersData.map((item, index) => (
                  <a key={index} target="_blank" rel="noopener noreferrer" href={item.link}>
                    <img alt="..." src={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </Fade>

        <div className={`${styles.teamContainer}`}>
          <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
            <Container>
              <Row>
                <Col md={1} xs={0}></Col>
                <Col md={10} xs={12} className={`${styles.content}`}>
                  <h1 className={` ${styles.title} ${styles.fontH1}`}>{t("home_page:dev_title")}</h1>
                  <p>
                    {t("home_page:dev_content_1")}
                    <br />
                    {t("home_page:dev_content_2")}
                  </p>
                  <Button
                    variant="transparent"
                    target="_blank"
                    href="https://www.itering.io/"
                    className={styles.button}
                  >
                    {t("home_page:dev_join")}
                  </Button>
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>

        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default withTranslation()(Home);
