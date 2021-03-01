/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageHeader } from '../../components/PageHeader'
import { PageFooter } from '../../components/PageFooter'
// import { GradientHeading } from '../../components/GradientHeading'
import LazyBackground from "../../components/lazyBackground"
import MediaQuery from 'react-responsive'
import styles from './style.module.scss'
import Fade from 'react-reveal/Fade';

// import themeBg from "./img/theme-bg.png"
// import archBg from "./img/theme-bg.png"
import relayBg from "./img/relay-bg.png"
import relayBgM from "./img/relay-bg-m.png"
import bridgeBg from "./img/bridge-bg.png"
import mmrBg from "./img/mmr-bg.png"
import mmrBgM from "./img/mmr-bg-m.png"
// import inno1 from "./img/innovation-1.png"
// import inno2 from "./img/innovation-2.png"
import gameBg from "./img/game-bg.png"
import gameBgM from "./img/game-bg-m.png"
import nftBg from "./img/nft-bg.png"
import nftBgM from "./img/nft-bg-m.png"
import bannerBg from "./img/banner-bg.png"
import bannerBgM from "./img/banner-bg-m.png"
import theme0 from "./img/theme-0.png"
import theme1 from "./img/theme-1.png"
import theme2 from "./img/theme-2.png"
import theme3 from "./img/theme-3.png"

import architecture from './img/architecture/architecture.png'
import architecture_en from './img/architecture/architecture-en.png'
import architecture_mobile from './img/architecture/architecture-mobile.png'
import architecture_mobile_en from './img/architecture/architecture-mobile.png'
import architecture_solo from './img/architecture/architecture-solo.png'
import architecture_chain from './img/architecture/architecture-chain.png'

// import roadmapCur from './img/roadmap/roadmap-cur.png'
import roadmapLine from './img/roadmap/roadmap-line.png'
import roadmapItem1 from './img/roadmap/roadmap-item-1.png'
import roadmapItem2 from './img/roadmap/roadmap-item-2.png'
import roadmapItem3 from './img/roadmap/roadmap-item-3.png'
import roadmapItem4 from './img/roadmap/roadmap-item-4.png'
import roadmapItem5 from './img/roadmap/roadmap-item-5.png'
import roadmapItem6 from './img/roadmap/roadmap-item-6.png'
import roadmapMobile from './img/roadmap/roadmap-m.png'

import archorsComponent from '../../components/anchorsComponent'
import { withTranslation } from "react-i18next";
import i18n from '../../locales/i18n';

class Home extends Component {

    componentDidMount() {
        archorsComponent();
    }
    renderContainer() {
        const { t } = this.props
        return (
            <div className={styles.content}>
                        <div className={`hidden-xs ${styles.slogan} ${styles.pcSlogan}`}>
                            {t('tech:theme_desc')}
                        </div>
                        <div className={`hidden-md ${styles.slogan}`}>
                            <p>{t('tech:theme_desc_1')}</p>
                            <p>{t('tech:theme_desc_2')}</p>
                            <p>{t('tech:theme_desc_3')}</p>
                            <p>{t('tech:theme_desc_4')}</p>
                            <p>{t('tech:theme_desc_5')}</p>
                        </div>
                        <div className={styles.items}>
                            <a target="_blank" rel="noopener noreferrer" href={t('tech:theme_0_link')}>
                                <img src={theme0} alt="icon"/>
                                <span>{t('tech:theme_0')}</span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={t('tech:theme_1_link')}>
                                <img src={theme1} alt="icon"/>
                                <span>{t('tech:theme_1')}</span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={t('tech:theme_2_link')}>
                                <img src={theme2} alt="icon"/>
                                <span>{t('tech:theme_2')}</span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={t('tech:theme_3_link')}>
                                <img src={theme3} alt="icon"/>
                                <span>{t('tech:theme_3')}</span>
                            </a>
                        </div>
                    </div>
        )
    }

    render() {
        const { t } = this.props
        return (
            <div className={styles.tech}>
                <PageHeader href="#top" transparent={true}/>
                <MediaQuery minDeviceWidth={768}>
                    <LazyBackground src={bannerBg } className={styles.themeContainer}>
                        {this.renderContainer()}
                    </LazyBackground>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767.98}>
                    <LazyBackground src={bannerBgM } className={styles.themeContainer}>
                        {this.renderContainer()}
                    </LazyBackground>
                </MediaQuery>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.architectureContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('tech:architecture')}</h1>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <p>{t('tech:architecture_desc')}</p>
                                {/* <img src={archBg} alt="architecture"/> */}
                                <div className={`${styles.archWrapper}`}>
                                    {i18n.language.indexOf('en') > -1 ? <img alt="architecture" className={`hidden-xs`} src={architecture_en} /> :
                                        <img alt="architecture" className={`hidden-xs`} src={architecture} />}
                                    {i18n.language.indexOf('en') > -1 ? <img alt="architecture" className={`visible-xs`} src={architecture_mobile_en} /> :
                                        <img alt="architecture" className={`visible-xs`} src={architecture_mobile} />}
                                    <div className={`hidden-xs ${styles.anime}`}>
                                        <div>
                                            <Button className={styles.soloBtn}>{t('home_page:architecture_solo')}</Button>
                                            <Button className={`${styles.soloBtn} ${styles.soloWhiteBtn}`}>{t('home_page:architecture_solo')}</Button>
                                            <Button className={styles.chainBtn}>{t('home_page:architecture_chain')}</Button>
                                            <Button className={`${styles.chainBtn} ${styles.chainPinkBtn}`}>{t('home_page:architecture_chain')}</Button>
                                            <img alt="chain" src={architecture_chain} className={styles.chain} />
                                            <img alt="solo" src={architecture_solo} className={styles.solo} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.stageContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('tech:mainnet_stage')}</h1>
                        </div>
                        <Row className={'hidden-xs'}>
                            <Col xs={12}>
                                <p>{t('tech:mainnet_stage_desc')}</p>
                                <Row className={`text-center ${styles.roadmapRow}`}>
                                    <Col>
                                        <img alt="roadmap" src={roadmapItem1} />
                                    </Col>
                                    <Col className={styles.holderCol}>
                                        <img alt="roadmap" src={roadmapLine} />
                                    </Col>
                                    <Col className={styles.crayfishCol}>
                                        <img alt="roadmap" src={roadmapItem2} />
                                    </Col>
                                    <Col className={`${styles.holderCol}`}>
                                        <img alt="roadmap" src={roadmapLine} />
                                    </Col>
                                    <Col>
                                        <img alt="roadmap" src={roadmapItem3} />
                                    </Col>
                                    <Col className={`${styles.holderCol}`}>
                                        <img alt="roadmap" src={roadmapLine} />
                                    </Col>
                                    <Col>
                                        <img alt="roadmap" src={roadmapItem4} />
                                    </Col>
                                    <Col className={`${styles.holderCol}`}>
                                        <img alt="roadmap" src={roadmapLine} />
                                    </Col>
                                    <Col className={`${styles.mainnetCol}`}>
                                        <img alt="roadmap" src={roadmapItem5} />
                                    </Col>
                                    <Col className={` ${styles.holderCol}`}>
                                        <img alt="roadmap" src={roadmapLine} />
                                    </Col>
                                    <Col className={` ${styles.lastCol}`}>
                                        <img alt="roadmap" src={roadmapItem6} />
                                    </Col>
                                </Row>
                                <Row className={`text-center ${styles.label}`}>
                                    <Col>
                                        <p>{t('tech:stage_0')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col className={styles.crayfishCol}>
                                        <p>{t('tech:stage_1')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col>
                                        <p>{t('tech:stage_2')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col>
                                        <p>{t('tech:stage_3')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col className={styles.mainnetCol}>
                                        <p>{t('tech:stage_4')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col className={`${styles.lastCol}`}>
                                        <p>{t('tech:stage_5')}</p>
                                    </Col>
                                </Row>
                                <Row className={`text-center ${styles.detail}`}>
                                    <Col>
                                        <p>{t('tech:stage_0_title')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col className={styles.crayfishCol}>
                                        <p>{t('tech:stage_1_title')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col>
                                        <p>{t('tech:stage_2_title')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col>
                                        <p>{t('tech:stage_3_title')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col className={styles.mainnetCol}>
                                        <p>{t('tech:stage_4_title')}</p>
                                    </Col>
                                    <Col className={styles.holderCol}></Col>
                                    <Col className={`${styles.lastCol}`}>
                                        <p>{t('tech:stage_5_title')}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className={`hidden-md`}>
                            <p className={styles.desc}>{t('tech:mainnet_stage_desc')}</p>
                            <Row className={`d-flex justify-content-center align-items-between`}>
                                <Col xs={1} className={styles.placeholderCol}></Col>
                                <Col xs={4} className={styles.imgCol}>
                                    <img src={roadmapMobile} alt="roadmap"/>
                                    <div className={styles.waiting}>
                                        <img src={roadmapMobile} alt="roadmap"/>
                                    </div>
                                </Col>
                                <Col xs={6} className={styles.nospace}>
                                    <div className={`d-flex ${styles.label}`}>
                                        <div xs={12} className={styles.Col1}>
                                            <p className={styles.time}>{t('tech:stage_0')}</p>
                                            <p>{t('tech:stage_0_title')}</p>
                                        </div>
                                        <div></div>
                                        <div xs={12} className={styles.Col2}>
                                            <p className={styles.time}>{t('tech:stage_1')}</p>
                                            <p>{t('tech:stage_1_title')}</p>
                                        </div>
                                        <div></div>
                                        <div xs={12} className={styles.Col3}>
                                            <p className={styles.time}>{t('tech:stage_2')}</p>
                                            <p>{t('tech:stage_2_title_1')}</p>
                                            <p>{t('tech:stage_2_title_2')}</p>
                                        </div>
                                        <div></div>
                                        <div xs={12} className={styles.Col4}>
                                            <p className={styles.time}>{t('tech:stage_3')}</p>
                                            <p>{t('tech:stage_3_title_1')}</p>
                                            <p>{t('tech:stage_3_title_2')}</p>
                                        </div>
                                        <div></div>
                                        <div xs={12} className={styles.Col5}>
                                            <p className={styles.time}>{t('tech:stage_4')}</p>
                                            <p>{t('tech:stage_4_title')}</p>
                                        </div>
                                        <div></div>
                                        <div xs={12} className={`${styles.Col6}`}>
                                            <p className={styles.time}>{t('tech:stage_5')}</p>
                                            <p>{t('tech:stage_5_title_1')}</p>
                                            <p>{t('tech:stage_5_title_2')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={1} className={styles.placeholderCol}></Col>
                            </Row>
                            </div>
                    </Container>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.innovationContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('tech:innovation')}</h1>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <p>{t('tech:innovation_desc')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.bridgeContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h2 className={`${styles.gradientText}`}>{t('tech:bridge')}</h2>
                            <p>{t('tech:bridge_desc')}</p>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <div className={styles.section}>
                                    <img src={bridgeBg} alt="bridge"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.relayContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h2 className={`${styles.gradientText}`}>{t('tech:relay')}</h2>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <p>{t('tech:relay_desc')}</p>
                                <div className={`hidden-xs ${styles.relaySection}`}>
                                    <img src={relayBg} alt="relay"/>
                                    <div className={styles.content}>
                                        <div className={styles.trust}>
                                            <div className={styles.title}>
                                                {t('tech:trust')}
                                            </div>
                                            <div className={styles.item}>
                                                <p>{t('tech:trust_1')}</p>
                                                <p>{t('tech:trust_2')}</p>
                                                <p>{t('tech:trust_3')}</p>
                                            </div>
                                        </div>
                                        <div className={styles.truth}>
                                            <div className={styles.title}>
                                                {t('tech:truth')}
                                            </div>
                                            <div className={styles.item}>
                                                <p>{t('tech:truth_1')}</p>
                                                <p>{t('tech:truth_2')}</p>
                                                <p>{t('tech:truth_3')}</p>
                                                <p>{t('tech:truth_4')}</p>
                                                <p>{t('tech:truth_5')}</p>
                                                <p>{t('tech:truth_6')}</p>
                                                <p>{t('tech:truth_7')}</p>
                                                <p>{t('tech:truth_8')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`hidden-md ${styles.relaySection}`}>
                        <img src={relayBgM} alt="relay"/>
                        <div className={styles.content}>
                            <div className={styles.trust}>
                                <div className={styles.title}>
                                    {t('tech:trust')}
                                </div>
                                <div className={styles.item}>
                                    <p>{t('tech:trust_1')}</p>
                                    <p>{t('tech:trust_2')}</p>
                                    <p>{t('tech:trust_3')}</p>
                                </div>
                            </div>
                            <div className={styles.truth}>
                                <div className={styles.title}>
                                    {t('tech:truth')}
                                </div>
                                <div className={styles.item}>
                                    <p>{t('tech:truth_1')}</p>
                                    <p>{t('tech:truth_2')}</p>
                                    <p>{t('tech:truth_3')}</p>
                                    <p>{t('tech:truth_4')}</p>
                                    <p>{t('tech:truth_5')}</p>
                                    <p>{t('tech:truth_6')}</p>
                                    <p>{t('tech:truth_7')}</p>
                                    <p>{t('tech:truth_8')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.mmrContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h2 className={`${styles.gradientText}`}>{t('tech:mmr')}</h2>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <p>{t('tech:mmr_desc')}</p>
                                <img className={'hidden-xs'} src={mmrBg} alt="mmr"/>
                                <img className={'hidden-md'} src={mmrBgM} alt="mmr"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.gameContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h2 className={`${styles.gradientText}`}>{t('tech:game')}</h2>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <div className={styles.section}>
                                    <img className={'hidden-xs'} src={gameBg} alt="game"/>
                                    <img className={'hidden-md'} src={gameBgM} alt="game"/>
                                    <p>{t('tech:game_desc')}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={styles.nftContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h2 className={`${styles.gradientText}`}>{t('tech:nft')}</h2>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <div className={styles.section}>
                                    <img className={'hidden-xs'} src={nftBg} alt="nft"/>
                                    <img className={'hidden-md'} src={nftBgM} alt="nft"/>
                                    <p>{t('tech:nft_desc')}</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button variant="dark" target="_blank" rel="noopener noreferrer" href={t('tech:read_more_link')}
                                    className={styles.button}>{t('tech:read_more')}</Button>
                        </div>
                    </Container>
                </div>
                </Fade>

                <PageFooter></PageFooter>
            </div>
        );
    }
}

export default withTranslation()(Home);
