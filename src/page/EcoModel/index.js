/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import { Container, Row, Col, InputGroup, FormControl, Button, Form, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { PageHeader } from '../../components/PageHeader'
import { PageFooter } from '../../components/PageFooter'
// import { GradientHeading } from '../../components/GradientHeading'

import eco1 from './img/eco-1.png'
import eco2 from './img/eco-2.png'
import styles from './style.module.scss'
import tokenBg from "./img/token-bg.png"
import tokenBgM from "./img/token-bg-m.png"
import inflation1 from "./img/inflation-1.png"
import inflation2 from "./img/inflation-2.png"
import model1 from "./img/model-1.png"
import model2 from "./img/model-2.png"
import staking1 from "./img/staking-1.png"
import staking2 from "./img/staking-2.png"
import circulation from "./img/circulation.png"

import archorsComponent from '../../components/anchorsComponent'
import { withTranslation } from "react-i18next";
// import i18n from '../../locales/i18n';

class Home extends Component {

    componentDidMount() {
        archorsComponent();
    }

    render() {
        const { t } = this.props
        return (
            <div className={styles.economic}>
                <PageHeader href="#top" transparent={true} hasHeightinMobile={true}/>
                
                <div className={styles.themeContainer}>
                    <Container>
                        <div>
                            <Row>
                                <Col xs={12} className={`${styles.content}`}>
                                    <div className={styles.title}>
                                        <h1 className={` ${styles.fontH1} ${styles.gradientText}`}>{t('model:economic')}</h1>
                                    </div>
                                    <div className={styles.title}>
                                        <h3 className={` ${styles.gradientText}`}>
                                            {t('model:theme')}
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className={styles.tokenContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`reveal-h1 ${styles.fontH1} ${styles.gradientText}`}>{t('model:token')}</h1>
                        </div>
                        <Row>
                            <Col xs={12} md={9}>
                                <img className={'hidden-xs'} src={tokenBg} alt="token"/>
                                <img className={'hidden-md'} src={tokenBgM} alt="token"/>
                            </Col>
                            <Col xs={12} md={3} className={styles.economicCol}>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <div>
                                            <img alt="economic" className={styles.economicIcon} src={eco1} />
                                            <span>{t('home_page:economic_block_title_1')}</span>
                                        </div>
                                    </div>
                                    <div className={styles.economicItemContent}>
                                        <p>{t('model:ring_1')}</p>
                                        <p>{t('model:ring_2')}</p>
                                        <ul>
                                            <li>{t('model:ring_2_1')}</li>
                                            <li>{t('model:ring_2_2')}</li>
                                            <li>{t('model:ring_2_3')}</li>
                                        </ul>
                                        <p>{t('model:ring_3')}</p>
                                        <p>{t('model:ring_4')}</p>
                                    </div>
                                </div>
                                <div className={`${styles.economicItem} ${styles.kton}`}>
                                    <div className={styles.economicItemHeader}>
                                        <div>
                                            <img alt="economic" className={styles.economicIcon} src={eco2} />
                                            <span>{t('home_page:economic_block_title_2')}</span>
                                        </div>
                                        <p>
                                        </p>
                                    </div>
                                    <div className={styles.economicItemContent}>
                                        <p>{t('model:kton_1')}</p>
                                        <p>{t('model:kton_2')}</p>
                                        <p>{t('model:kton_3')}</p>
                                        <p>{t('model:kton_4')}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={styles.stakingContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('model:staking')}</h1>
                        </div>
                        <p>{t('model:staking_desc')}</p>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <div>{t('model:staking_1')}</div>
                                    <img src={staking1} alt="staking"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <div>{t('model:staking_2')}</div>
                                    <img src={staking2} alt="staking"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={styles.inflationContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('model:inflation')}</h1>
                        </div>
                        <p>{t('model:inflation_content')}</p>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <div>{t('model:inflation_1')}</div>
                                    <img src={inflation1} alt="inflation"/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <div>{t('model:inflation_2')}</div>
                                    <img src={inflation2} alt="inflation"/>
                                </div>
                            </Col>
                        </Row>
                        <div className={styles.chartDesc}>
                            {t('model:inflation_desc')}
                        </div>
                    </Container>
                </div>

                <div className={styles.circulationContainer}>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className={styles.textCol}>
                                <div className={styles.title}>
                                    <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('model:circulation')}</h1>
                                </div>
                                <div className={styles.subTitle}>
                                    {t('model:circulation_title')}
                                </div>
                                <p>{t('model:circulation_desc_1')}</p>
                                <p>{t('model:circulation_desc_2')}</p>
                                <p>{t('model:circulation_desc_3')}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <img src={circulation} alt="circulation"/>
                                    <div>{t('model:circulation_chart_desc')}</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={styles.modelContainer}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('model:revenue')}</h1>
                        </div>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <div className={styles.imgWrapper}>
                                        <img src={model1} alt="model"/>
                                    </div>
                                    <div className={styles.chartSection}>
                                        <div className={styles.title}>
                                            {t('model:revenue_1')}
                                        </div>
                                        <p>
                                            {t('model:revenue_1_item_1')}
                                        </p>
                                        <p>
                                            {t('model:revenue_1_item_2')}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className={styles.chart}>
                                    <div className={styles.imgWrapper}>
                                        <img src={model2} alt="model"/>
                                    </div>
                                    <div className={styles.chartSection}>
                                        <div className={styles.title}>
                                            {t('model:revenue_2')}
                                        </div>
                                        <p>
                                            {t('model:revenue_2_item_1')}
                                        </p>
                                        <p>
                                            {t('model:revenue_2_item_2')}
                                        </p>
                                        <p>
                                            {t('model:revenue_2_item_3')}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <PageFooter></PageFooter>
            </div>
        );
    }
}

export default withTranslation()(Home);
