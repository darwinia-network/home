import React, {Component} from "react";
import {Container, Row, Col, OverlayTrigger, Popover, InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'
import i18n from '../../locales/i18n';

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
import axios from 'axios'

class PageFooter extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            info: '',
        }
    }

    subscribe = (text) => {
        axios.post('https://api.darwinia.network/api/subscribe?email=' + text)
            .then((response) => {
                console.log(response);
                if (response.data.code === 0) {
                    this.setState({
                        info: this.props.t('home_page:subscribe_tip')
                    })
                }
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    changeTextValue = (k, e) => {
        this.setState({
            [k]: e.target.value
        })
    }

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
                // console.log(e.pageX)
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
            <div className="popover-body">
            <img alt="wx" src={wx}/>
            <p>{t("footer:scan")}</p>
            <p>{t("footer:follow")}</p></div>
        </Popover>
    }

    renderMap = () => {
        const { email, info } = this.state
        const {t} = this.props

        return (
            <div className={`${styles.map} d-none d-md-block d-lg-block`}>
                <Container className={styles.mapContainer}>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <img alt="dwSlideIcon" className={styles.footerIcon} src={dwSlideIcon}/>
                        </Col>
                        <Col>
                        <InputGroup className={`mb-3 ${styles.subscribe} hidden-xs`}>
                        <FormControl
                            value={email}
                            onChange={(e) => {
                                this.changeTextValue('email', e)
                            }}
                            placeholder={t('home_page:placeholder')}
                            aria-label={t('home_page:placeholder')}
                            aria-describedby={t('home_page:placeholder')}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => {
                                this.subscribe(email)
                            }}>{t('home_page:subscribe_btn')}</Button>
                        </InputGroup.Append>

                        </InputGroup>
                        <Form.Text className={`text-muted ${styles.subscribeTip} hidden-xs`}
                            dangerouslySetInnerHTML={{ __html: info || '&nbsp' }}>

                        </Form.Text>
                        <Form className={`${styles.subscribe} hidden-md`}>
                                    <FormControl
                                        value={email}
                                        type={'email'}
                                        onChange={(e) => {
                                            this.changeTextValue('email', e)
                                        }}
                                        placeholder={t('home_page:placeholder')}
                                        aria-label={t('home_page:placeholder')}
                                        aria-describedby={t('home_page:placeholder')}
                                    />

                                    <Button block onClick={() => {
                                        this.subscribe(email)
                                    }}>
                                        {t('home_page:subscribe_btn')}
                                    </Button>
                                    <Form.Text className={`text-muted ${styles.subscribeTip}`}
                                        dangerouslySetInnerHTML={{ __html: info || '&nbsp' }} />

                                </Form>
                        </Col>
                    </Row>
                    <Row className={`d-flex justify-content-between`}>
                        <Col xs={6} md={4} lg={3}>
                            <h1>{t('footer:general')}</h1>
                            <p><a href="/#top">{t('footer:general_title_1')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://docs.darwinia.network/">{t('footer:general_title_2')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://www.itering.io/about">{t('footer:general_title_3')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="mailto:hello@darwinia.network">{t('footer:general_title_4')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="/brand">{t('footer:general_title_5')}</a></p>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <h1>{t('footer:technology')}</h1>
                            <p><a target="_blank" rel="noopener noreferrer" href={t('header:testnet_url')}>{t('footer:technology_title_1')}</a></p>
                            {i18n.language.indexOf('en') > -1 ?
                                <p><a target="_blank" rel="noopener noreferrer" href="/Darwinia_Genepaper_EN.pdf">{t('footer:technology_title_2')}</a></p>
                                :
                                <p><a target="_blank" rel="noopener noreferrer" href="/Darwinia_Genepaper_CN.pdf">{t('footer:technology_title_2')}</a></p>
                            }
                            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/darwinia-network/darwinia">{t('footer:technology_title_3')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://telemetry.polkadot.io/#list/Polkadot">{t('footer:technology_title_4')}</a></p>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <h1>{t('footer:community')}</h1>
                            <p><a target="_blank" rel="noopener noreferrer" href={t('footer:rfcs_link')}>{t('footer:community_title_1')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="/ambassador">{t('footer:community_title_2')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href="/community">{t('footer:community_title_3')}</a></p>
                            <p><a target="_blank" rel="noopener noreferrer" href={t('footer:faq_link')}>{t('footer:community_title_4')}</a></p>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <h1>{t('footer:contact')}</h1>
                            <Row className={styles.mdContent}>
                                <Col md={{order: 3}}
                                     className={`text-right ${styles.shareLogo}`}>
                                    <div>
                                        <img alt="email" onClick={() => {
                                            this.goto('email')
                                        }} src={share8}/>
                                        <OverlayTrigger
                                            placement="top-end"
                                            delay={{show: 100, hide: 100}}
                                            overlay={this.renderTooltip}
                                        >
                                            <img alt="wechat" onClick={(e) => {
                                                this.goto('wx', e)
                                            }} src={share7}/>
                                        </OverlayTrigger>
                                        <img alt="weibo" onClick={() => {
                                            this.goto('weibo')
                                        }} src={share6}/>
                                        <img alt="bihu" onClick={() => {
                                            this.goto('bihu')
                                        }} src={share5}/>
                                    </div>
                                    <div>
                                        <img alt="github" onClick={() => {
                                            this.goto('github')
                                        }} src={share4}/>
                                        <img alt="twitter" onClick={() => {
                                            this.goto('twitter')
                                        }} src={share3}/>
                                        <img alt="telegram" onClick={() => {
                                            this.goto('tg')
                                        }} src={share2}/>
                                        <img alt="Medium" onClick={() => {
                                            this.goto('medium')
                                        }} src={share1}/>
                                    </div>
                                </Col>
                            </Row>
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
        )
    }

    render() {
        const { t } = this.props
        return (
            <>
                {this.renderMap()}
                <div className={styles.navFooter}>
                    <Container>
                        <Row className={styles.mdContent}>
                            <Col className={`d-flex justify-content-between`}>
                                <div>
                                {t('footer:grant')}
                                </div>
                                <div>
                                {t('footer:copyright')}
                                </div>
                                <div>
                                {t('footer:support')}
                                </div>
                            </Col>
                        </Row>

                        <Row className={styles.xsContent}>
                            <Col className={`text-center  ${styles.shareLogo}`}>
                                <div className={styles.logoContent}>
                                    <img alt="email" onClick={() => {
                                        this.goto('email')
                                    }} src={share8}/>
                                    <OverlayTrigger
                                        placement="top-end"
                                        delay={{show: 100, hide: 1000}}
                                        overlay={this.renderTooltip}
                                    >
                                        <img alt="wechat" onClick={(e) => {
                                            this.goto('wx', e)
                                        }} src={share7}/>
                                    </OverlayTrigger>
                                    <img alt="weibo" onClick={() => {
                                        this.goto('weibo')
                                    }} src={share6}/>
                                    <img alt="bihu" onClick={() => {
                                        this.goto('bihu')
                                    }} src={share5}/>
                                    
                                    
                                    
                                    
                                </div>
                                <div className={styles.logoContent}>
                                <img alt="github" onClick={() => {
                                        this.goto('github')
                                    }} src={share4}/>
                                    <img alt="twitter" onClick={() => {
                                        this.goto('twitter')
                                    }} src={share3}/>
                                    <img alt="telegram" onClick={() => {
                                        this.goto('tg')
                                    }} src={share2}/>
                                    <img alt="Medium" onClick={() => {
                                        this.goto('medium')
                                    }} src={share1}/>
                                    
                                    
                                    
                                </div>
                            </Col>
                            <Col className={`text-center ${styles.copyright}`}>
                            {t('footer:copyright')}
                            </Col>
                        </Row>

                    </Container>
                </div>
            </>
        );
    }
}

export default withTranslation()(PageFooter);
