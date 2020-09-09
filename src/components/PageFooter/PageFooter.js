import React, {Component} from "react";
import {Container, Row, Col, OverlayTrigger, Popover} from 'react-bootstrap'
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'

import share1 from './img/share-1.png'
import share2 from './img/share-2.png'
import share3 from './img/share-3.png'
import share4 from './img/share-4.png'
import share5 from './img/share-5.png'
import share6 from './img/share-6.png'
import share7 from './img/share-7.png'
import share8 from './img/share-8.png'
import dwSlideIcon from './img/slide-logo.png'

import wx from './img/wx.jpg'

class PageFooter extends Component {

    goto = (type, e) => {
        switch (type) {
            case 'medium':
                window.open('https://medium.com/@DarwiniaNetwork');
                return;
            case 'tg':
                window.open('https://t.me/DarwiniaNetwork');
                return;
            case 'twitter':
                window.open('https://twitter.com/DarwiniaNetwork');
                return;
            case 'github':
                window.open('https://github.com/darwinia-network');
                return;
            case 'bihu':
                window.open('https://bihu.com/people/1100617');
                return;
            case 'weibo':
                window.open('http://weibo.com/DarwiniaNetwork');
                return;
            case 'wx':
                // window.open('https://medium.com/@DarwiniaNetwork');
                console.log(e.pageX)
                return;
            case 'email':
                window.open('mailto:hello@darwinia.network');
                return;
            default:
                return;
        }
    }

    renderTooltip = props => {
        const {t} = this.props
        return <Popover {...props} className={styles.wxContainer}>
            <img alt="wx" src={wx}/>
            <p>{t("footer:scan")}</p>
            <p>{t("footer:follow")}</p>
        </Popover>
    }

    renderMap = () => {
        const {t, i18n} = this.props

        return (
            <div className={`${styles.map} d-none d-md-block d-lg-block`}>
                <Container>
                    <Row className={`d-flex justify-content-center`}>
                        <Col xs={6} md={4} lg={2}>
                            <h1>{t('footer:general')}</h1>
                            {/* <p><a target="_blank" href={t('home_page:economic_url')}>{t('footer:general_title_1')}</a></p> */}
                            <p><a href="/faq">{t('footer:general_title_2')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://docs.darwinia.network">{t('header:docs')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/land/1/bank/buy-ring">{t('header:gringotts')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="mailto:hello@darwinia.network">{t('footer:general_title_3')}</a></p>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <h1>{t('footer:technology')}</h1>
                            <p><a target="_blank" rel="noopener noreferrer" href={t('header:testnet_url')}>{t('footer:technology_title_1')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://telemetry.polkadot.io/#list/Darwinia%20POC-1%20Testnet">{t('footer:technology_title_2')}</a></p>
                            {i18n.language.indexOf('en') > -1 ?
                                <p><a target="_blank" rel="noopener noreferrer" href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_EN.pdf">{t('footer:technology_title_3')}</a></p>
                                :
                                <p><a target="_blank" rel="noopener noreferrer" href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_CN.pdf">{t('footer:technology_title_3')}</a></p>
                            }
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <h1>{t('footer:community')}</h1>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://rfcs.darwinia.network">{t('footer:community_title_1')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/darwinia-network">{t('footer:community_title_2')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@DarwiniaNetwork">{t('footer:community_title_3')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://t.me/DarwiniaNetwork">{t('footer:community_title_4')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/DarwiniaFans/">{t('footer:community_title_5')}</a></p>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <img alt="dwSlideIcon" className={styles.footerIcon} src={dwSlideIcon}/>
                            <Row className={styles.mdContent}>
                                <Col md={{order: 3}}
                                     className={`text-right ${styles.shareLogo}`}>
                                    <div>
                                        <img alt="Medium" onClick={() => {
                                            this.goto('medium')
                                        }} src={share1}/>
                                        <img alt="telegram" onClick={() => {
                                            this.goto('tg')
                                        }} src={share2}/>
                                        <img alt="twitter" onClick={() => {
                                            this.goto('twitter')
                                        }} src={share3}/>
                                        <img alt="github" onClick={() => {
                                            this.goto('github')
                                        }} src={share4}/>
                                    </div>
                                    <div>
                                        <img alt="bihu" onClick={() => {
                                            this.goto('bihu')
                                        }} src={share5}/>
                                        <img alt="weibo" onClick={() => {
                                            this.goto('weibo')
                                        }} src={share6}/>
                                        <OverlayTrigger
                                            placement="top-end"
                                            delay={{show: 100, hide: 1000}}
                                            overlay={this.renderTooltip}
                                        >
                                            <img alt="wechat" onClick={(e) => {
                                                this.goto('wx', e)
                                            }} src={share7}/>
                                        </OverlayTrigger>
                                        <img alt="email" onClick={() => {
                                            this.goto('email')
                                        }} src={share8}/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.renderMap()}
                <div className={styles.navFooter}>
                    <Container>
                        <Row className={styles.mdContent}>
                            <Col className="text-center">
                                &#169;2019-2020 darwinia.network
                            </Col>
                        </Row>

                        <Row className={styles.xsContent}>
                            <Col className={`text-center  ${styles.shareLogo}`}>
                                <div className={styles.logoContent}>
                                    <img alt="Medium" onClick={() => {
                                        this.goto('medium')
                                    }} src={share1}/>
                                    <img alt="telegram" onClick={() => {
                                        this.goto('tg')
                                    }} src={share2}/>
                                    <img alt="twitter" onClick={() => {
                                        this.goto('twitter')
                                    }} src={share3}/>
                                    <img alt="github" onClick={() => {
                                        this.goto('github')
                                    }} src={share4}/>
                                </div>
                                <div className={styles.logoContent}>
                                    <img alt="bihu" onClick={() => {
                                        this.goto('bihu')
                                    }} src={share5}/>
                                    <img alt="weibo" onClick={() => {
                                        this.goto('weibo')
                                    }} src={share6}/>
                                    <img alt="wechat" onClick={() => {
                                        this.goto('wx')
                                    }} src={share7}/>
                                    <img alt="email" onClick={() => {
                                        this.goto('email')
                                    }} src={share8}/>
                                </div>
                            </Col>
                            <Col className={`text-center ${styles.copyright}`}>
                                &#169;2019-2020 darwinia.network
                            </Col>
                        </Row>

                    </Container>
                </div>
            </>
        );
    }
}

export default withTranslation()(PageFooter);
