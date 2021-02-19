/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button, Form, Carousel, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'
import { PageHeader } from '../../components/PageHeader'
import { PageFooter } from '../../components/PageFooter'
import Fade from 'react-reveal/Fade';
// import { GradientHeading } from '../../components/GradientHeading'

// import carousel_1 from "./img/carousel/carousel-1.jpg"
// import carousel_1_en from "./img/carousel/carousel-1-en.jpg"
import carousel_2 from "./img/carousel/carousel-2.jpg"
import carousel_2_en from "./img/carousel/carousel-2-en.jpg"
import carousel_3 from "./img/carousel/carousel-3.jpg"
import carousel_3_en from "./img/carousel/carousel-3-en.jpg"
// import carousel_1_m from "./img/carousel/carousel-1-m.jpg"
// import carousel_1_en_m from "./img/carousel/carousel-1-m-en.jpg"
import carousel_2_m from "./img/carousel/carousel-2-m.jpg"
import carousel_2_en_m from "./img/carousel/carousel-2-m-en.jpg"
import carousel_3_m from "./img/carousel/carousel-3-m.jpg"
import carousel_3_en_m from "./img/carousel/carousel-3-m-en.jpg"

import roadmapSplit from "./img/roadmap/roadmap-split.png"

import styles from './style.module.scss'
import architecture from './img/architecture.png'
import architecture_en from './img/architecture.png'
import architecture_mobile from './img/architecture-mobile.png'
import architecture_mobile_en from './img/architecture-mobile.png'
// import architecture_solo from './img/architecture-solo.png'
// import architecture_chain from './img/architecture-chain.png'
import economic from './img/economic.png'
import economic_en from './img/economic-en.png'

import app_token from "./img/application/app-token.png"
import app_nft from "./img/application/app-nft.png"
import app_evo from './img/application/app-evo.png'
import app_subscan from './img/application/app-subscan.png'
import application_token from './img/application/application-token.png'
import application_nft from './img/application/application-nft.png'
import application_evo from './img/application/application-evo.png'
import application_subscan from './img/application/application-subscan.png'

import eco1 from './img/economic/eco-1.png'
import eco2 from './img/economic/eco-2.png'
import eco3 from './img/economic/eco-3.png'
import etherscan from './img/economic/etherscan.png'
import tronscan from './img/economic/tronscan.png'
import metamask from './img/economic/metamask.png'

import partner1 from './img/partner/partner-1.png'
import partner2 from './img/partner/partner-2.png'
import partner3 from './img/partner/partner-3.png'
import partner4 from './img/partner/partner-4.png'
import partner5 from './img/partner/partner-5.png'
import partner6 from './img/partner/partner-6.png'
import partner7 from './img/partner/partner-7.png'
import partner8 from './img/partner/partner-8.png'
import partner9 from './img/partner/partner-9.png'
import partner10 from './img/partner/partner-10.png'
import partner11 from './img/partner/partner-11.png'
import partner12 from './img/partner/partner-12.png'
import partner13 from './img/partner/partner-13.png'
import partner14 from './img/partner/partner-14.png'
import partner15 from './img/partner/partner-15.png'
import partner16 from './img/partner/partner-16.png'
import partner17 from './img/partner/partner-17.png'
import partner18 from './img/partner/partner-18.png'
import partner19 from './img/partner/partner-19.png'
import partner20 from './img/partner/partner-20.png'
import partner21 from './img/partner/partner-21.png'
import partner22 from './img/partner/partner-22.png'
import partner23 from './img/partner/partner-23.png'
import partner24 from './img/partner/partner-24.png'
import partner25 from './img/partner/partner-25.png'
import partner26 from './img/partner/partner-26.png'

import news20 from "../Media/img/news20.png"
import news21 from "../Media/img/news21.png"
import news23 from "../Media/img/news23.png"
import news24 from "../Media/img/news24.png"

import band1 from "./img/band/band-1.png"
import band2 from "./img/band/band-2.png"
import band3 from "./img/band/band-3.png"
import band4 from "./img/band/band-4.png"
import bandAll from "./img/band/band-all.png"

import axios from 'axios'
import archorsComponent from '../../components/anchorsComponent'
import { withTranslation } from "react-i18next";
import i18n from '../../locales/i18n';
import scrollreveal from "scrollreveal";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            info: '',
            hasMetamask: false
        }
        this.partnerInfo = {
            'polkadot': {
                logo: partner1,
                name: 'Polkadot',
                url: 'https://polkadot.network'
            },
            'parity': {
                logo: partner2,
                name: 'Parity',
                url: 'https://www.parity.io'
            },
            'maker': {
                logo: partner3,
                name: 'MAKER',
                url: 'https://makerdao.com'
            },
            'snz': {
                logo: partner4,
                name: 'SNZ Holding',
                url: 'https://snzholding.com'
            },
            'hashkey': {
                logo: partner5,
                name: 'HashKey',
                url: 'https://www.hashkey.com'
            },
            'chainlink': {
                logo: partner6,
                name: 'Chainlink',
                url: 'https://chain.link/'
            },
            'ankr': {
                logo: partner7,
                name: 'Ankr',
                url: 'https://www.ankr.com/'
            },
            'bondly': {
                logo: partner8,
                name: 'Bondly',
                url: 'https://bondly.finance/'
            },
            'crust': {
                logo: partner9,
                name: 'Crust',
                url: 'https://crust.network/'
            },
            'reef': {
                logo: partner10,
                name: 'Reef',
                url: 'https://reef.finance/'
            },
            'polkabase': {
                logo: partner25,
                name: 'Polkabase',
                url: 'https://www.polkabase.com'
            },
            'bihu': {
                logo: partner11,
                name: 'Bihu',
                url: 'https://bihu.com'
            },
            'evolutionland': {
                logo: partner12,
                name: 'Evolution Land',
                url: 'https://www.evolution.land'
            },
            'polkaworld': {
                logo: partner26,
                name: 'Polka World',
                url: 'https://www.polkaworld.org'
            },
            'imtoken': {
                logo: partner13,
                name: 'imToken',
                url: 'https://token.im'
            },
            'mathwallet': {
                logo: partner14,
                name: 'Math Wallet',
                url: 'https://www.mathwallet.org'
            },
            'cobowallet': {
                logo: partner15,
                name: 'Cobo Wallet',
                url: 'https://cobo.com'
            },
            'polkawallet': {
                logo: partner16,
                name: 'Polka Wallet',
                url: 'https://polkawallet.io'
            },
            'sssnodes': {
                logo: partner17,
                name: 'SSSnodes',
                url: 'http://sssnodes.com'
            },
            'waterdrip': {
                logo: partner18,
                name: 'Waterdrip Capital',
                url: 'http://waterdrip.io/index_cn.html'
            },
            'consensus': {
                logo: partner19,
                name: 'Consensus Lab',
                url: 'http://www.consensus-lab.com/index.aspx'
            },
            'bitrise': {
                logo: partner20,
                name: 'Bitrise Capital',
                url: 'http://bitrisevc.com/'
            },
            'seven': {
                logo: partner21,
                name: 'Seven X',
                url: 'http://jyjtx.com/'
            },
            'digital': {
                logo: partner22,
                name: 'Digital Renaissance',
                url: 'http://drf.ee'
            },
            'ddex': {
                logo: partner23,
                name: 'DDEX',
                url: 'https://ddex.io'
            },
            'otcmaker': {
                logo: partner24,
                name: 'OTCMAKER',
                url: 'https://www.otcmaker.com'
            }
        }

        this.tokenInfo = {
            ring: {
                tokenAddress: '0x9469D013805bFfB7D3DEBe5E7839237e535ec483',
                tokenSymbol: 'RING',
                tokenDecimals: 18,
                tokenImage: 'data:image/png;base64,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'
            },
            kton: {
                tokenAddress: '0x9F284E1337A815fe77D2Ff4aE46544645B20c5ff',
                tokenSymbol: 'KTON',
                tokenDecimals: 18,
                tokenImage: 'data:image/png;base64,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'
            }
        }

        this.partners = [
            'polkadot', 'parity', 'maker', 'snz', 'hashkey', 'chainlink', 
            'ankr', 'bondly', 'crust', 'reef', 'bihu', 'evolutionland', 
            'imtoken', 'mathwallet', 'cobowallet', 'polkawallet', 'sssnodes', 'waterdrip',
            'consensus', 'bitrise', 'seven', 'digital', 'ddex', 'otcmaker', 
            'polkabase', 'polkaworld'
        ]
        this.detectMetaMaskTimer = null;
    }

    componentDidMount() {
        archorsComponent();
        // this.addScrollReveal();
        this.detectMetaMaskTimer = setTimeout(() => {
            this.detectMetaMask();
        }, 1500);
    }

    componentWillUnmount() {
        this.detectMetaMaskTimer && clearTimeout(this.detectMetaMaskTimer);
    }

    addScrollReveal = () => {
        scrollreveal({
            mobile: false
        }).reveal('.reveal-h1', { 
            distance: '100px',
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
    }

    detectMetaMask = () => {
        if (typeof window.ethereum !== 'undefined') {
            this.setState({
                hasMetamask: window.ethereum.isMetaMask
            })
        }
    }

    subscribe = (text) => {
        axios.post('https://api.darwinia.network/api/subscribe?email=' + text)
            .then((response) => {
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

    renderTooltip = (text) => {
        return <Popover className={styles.wxContainer}>
            <div className={styles.wxContainerBody}>
                <p>{text}</p>
            </div>
        </Popover>
    }

    renderPartner = () => {
        return this.partners.map((partner, index) => {
            return (
                <Col key={index} xs={6} md={4} lg={2}>
                    <a target="_blank" rel="noopener noreferrer" href={this.partnerInfo[partner].url}>
                        <img alt={this.partnerInfo[partner].name} src={this.partnerInfo[partner].logo} />
                        <h3>{this.partnerInfo[partner].name}</h3>
                    </a>
                </Col>
            )
        })
    }

    addToken = async (type) => {
        const token = this.tokenInfo[type];
        const provider = window.web3.currentProvider;
        provider.sendAsync({
            method: 'metamask_watchAsset',
            params: {
                "type": "ERC20",
                "options": {
                    "address": token.tokenAddress,
                    "symbol": token.tokenSymbol,
                    "decimals": token.tokenDecimals,
                    "image": token.tokenImage,
                },
            },
            id: Math.round(Math.random() * 100000),
        }, (err, added) => {
            if (err || 'error' in added) {
                console.log(err)
                return
            }
        })
    }

    render() {
        const { t } = this.props
        const { email, info, hasMetamask } = this.state
        return (
            <div className={styles.homePage}>
                {/* <a href="#top"></a> */}
                <PageHeader href="#top" transparent={true} />
                {/* <div className={styles.launchBanner}>
                    <img src={launchBanner} alt="banner"/>
                </div> */}
                <div className={`home-carousel ${styles.carousel}`}>
                    <Carousel controls={false}  indicators={true} interval={4000}>
                        <Carousel.Item>
                            <div className={styles.carouselItem}>
                                <a target="_blank" rel="noopener noreferrer" className={`${styles.imgRatio}`} href={t('home_page:recom_3_link')}>
                                    <div className={`hidden-xs`}>
                                        {i18n.language.indexOf('en') > -1 ? <img alt="news" src={carousel_3_en}/> :
                                        <img alt="news" src={carousel_3}/>}
                                    </div>
                                    <div className={`hidden-md`}>
                                        {i18n.language.indexOf('en') > -1 ? <img alt="news" src={carousel_3_en_m}/> :
                                        <img alt="news" src={carousel_3_m}/>}
                                    </div>
                                </a> 
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.carouselItem}>
                                <a target="_blank" rel="noopener noreferrer" className={`${styles.imgRatio}`} href={t('home_page:recom_2_link')}>
                                    <div className={`hidden-xs`}>
                                        {i18n.language.indexOf('en') > -1 ? <img alt="news" src={carousel_2_en}/> :
                                        <img alt="news" src={carousel_2}/>}
                                    </div>
                                    <div className={`hidden-md`}>
                                        {i18n.language.indexOf('en') > -1 ? <img alt="news" src={carousel_2_en_m}/> :
                                        <img alt="news" src={carousel_2_m}/>}
                                    </div>
                                </a> 
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                <div className={`reveal-h1 ${styles.themeContainer}`}>
                    <Container>
                        <Row className={`${styles.promoteContentArea} d-flex justify-content-center`}>
                            <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                                <h1 className={`text-center ${styles.fontH1} ${styles.gradientText}`}>{t('home_page:theme_title')}</h1>
                                <p>{t('home_page:theme_desc_1')}</p>
                                <p>{t('home_page:theme_desc_2')}</p>
                                <Row className={`hidden-xs ${styles.bands} ${styles.bandsPc}`}>
                                    <Col xs={12}>
                                        <div className={styles.bandAll}>
                                            <img alt="Wall of Honor" src={bandAll}/>
                                            <ul>
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{show: 100, hide: 100}}
                                                    overlay={this.renderTooltip(t('home_page:band_1_desc'))}
                                                >
                                                    <li></li>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{show: 100, hide: 100}}
                                                    overlay={this.renderTooltip(t('home_page:band_2_desc'))}
                                                >
                                                    <li></li>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{show: 100, hide: 100}}
                                                    overlay={this.renderTooltip(t('home_page:band_3_desc'))}
                                                >
                                                    <li></li>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{show: 100, hide: 100}}
                                                    overlay={this.renderTooltip(t('home_page:band_4_desc'))}
                                                >
                                                    <li></li>
                                                </OverlayTrigger>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={`hidden-md ${styles.bands}`}>
                                    <Col xs={12} md={4} lg={3}>
                                        <div className={styles.imgRatio}>
                                            <img alt="web3" src={band1}/>
                                        </div>
                                        <p className={styles.bandDesc}>
                                            {t('home_page:band_1_desc')}
                                        </p>
                                    </Col>
                                    <Col xs={12} md={4} lg={3}>
                                        <div className={styles.imgRatio}>
                                            <img alt="substrate builder program" src={band2}/>
                                        </div>
                                        <p className={styles.bandDesc}>
                                            {t('home_page:band_2_desc')}
                                        </p>
                                    </Col>
                                    <Col xs={12} md={4} lg={3}>
                                        <div className={styles.imgRatio}>
                                            <img alt="web3.0 bootcamp" src={band3}/>
                                        </div>
                                        <p className={styles.bandDesc}>
                                            {t('home_page:band_3_desc')}
                                        </p>
                                    </Col>
                                    <Col xs={12} md={4} lg={3}>
                                        <div className={styles.imgRatio}>
                                            <img alt="polkadot" src={band4}/>
                                        </div>
                                        <p className={styles.bandDesc}>
                                            {t('home_page:band_4_desc')}
                                        </p>
                                    </Col>
                                </Row>
                                <InputGroup className={`${styles.subscribe} hidden-xs`}>
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
                    </Container>
                </div>
                </Fade>


                <div className={`${styles.architectureContainer}`}>
                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                    <Container className={`reveal-h1`}>
                        <h1 className={`text-center  ${styles.fontH1}`}>{t('home_page:architecture_title')}</h1>
                        {/* {i18n.language.indexOf('en') > -1 ? <img src={architecture_en}/> :
                            <img src={architecture}/>} */}
                        <div className={`${styles.archWrapper}`}>
                            {i18n.language.indexOf('en') > -1 ? <img alt="architecture" className={`hidden-xs`} src={architecture_en} /> :
                                <img alt="architecture" className={`hidden-xs`} src={architecture} />}
                            {i18n.language.indexOf('en') > -1 ? <img alt="architecture" className={`visible-xs`} src={architecture_mobile_en} /> :
                                <img alt="architecture" className={`visible-xs`} src={architecture_mobile} />}
                            {/* <div className={`hidden-xs ${styles.anime}`}>
                                <div>
                                    <Button className={styles.soloBtn}>{t('home_page:architecture_solo')}</Button>
                                    <Button className={`${styles.soloBtn} ${styles.soloWhiteBtn}`}>{t('home_page:architecture_solo')}</Button>
                                    <Button className={styles.chainBtn}>{t('home_page:architecture_chain')}</Button>
                                    <Button className={`${styles.chainBtn} ${styles.chainPinkBtn}`}>{t('home_page:architecture_chain')}</Button>
                                    <img alt="chain" src={architecture_chain} className={styles.chain} />
                                    <img alt="solo" src={architecture_solo} className={styles.solo} />
                                </div>
                            </div> */}
                        </div>
                    </Container>
                    </Fade>
                </div>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>           
                <div className={`reveal-h1 ${styles.highlightContainer} ${styles.economicContainer}`}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('home_page:economic_title')}</h1>
                        </div>
                        {/* <div className={styles.lineH1} /> */}
                        <Row className={`d-flex justify-content-center`}>
                            <Col xs={12} md={12} lg={6} className={styles.economicImg}>
                                {i18n.language.indexOf('en') > -1 ? <img alt="economic" className={styles.bridge} src={economic_en} /> :
                                    <img alt="economic" className={styles.bridge} src={economic} />}
                            </Col>
                            <Col xs={0} md={0} lg={1} />
                            <Col xs={12} md={12} lg={5} className={styles.economicCol}>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <div>
                                            <img alt="economic" className={styles.economicIcon} src={eco1} />
                                            <span className={styles.gradientText}>{t('home_page:economic_block_title_1')}</span>
                                        </div>
                                        <p>
                                            <OverlayTrigger
                                                placement={'top'}
                                                overlay={
                                                    <Tooltip>
                                                        etherscan
                                                    </Tooltip>
                                                }
                                            >
                                                <a href={`https://etherscan.io/token/${this.tokenInfo.ring.tokenAddress}`} target="_blank" rel="noopener noreferrer">
                                                    <img alt="etherscan" src={etherscan} />
                                                </a>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'top'}
                                                overlay={
                                                    <Tooltip>
                                                        metamask
                                                    </Tooltip>
                                                }
                                            >
                                                <span>{hasMetamask ? <a className={styles.addToken} href="javascript:void(0)" onClick={() => this.addToken('ring')}>
                                                    <img alt="metamask" src={metamask} />
                                                </a> : null}</span>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'top'}
                                                overlay={
                                                    <Tooltip>
                                                        tronscan
                                                    </Tooltip>
                                                }
                                            >
                                                <a href="https://tronscan.org/#/token20/TL175uyihLqQD656aFx3uhHYe1tyGkmXaW" target="_blank" rel="noopener noreferrer">
                                                    <img alt="tronscan" src={tronscan} />
                                                </a>
                                            </OverlayTrigger>
                                        </p>
                                    </div>
                                    <div className={styles.economicItemContent}>
                                        <p>{t('home_page:economic_block_content_1')}</p>
                                    </div>
                                </div>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <div>
                                            <img alt="economic" className={styles.economicIcon} src={eco2} />
                                            <span className={styles.gradientText}>{t('home_page:economic_block_title_2')}</span>
                                        </div>
                                        <p>
                                            <OverlayTrigger
                                                placement={'top'}
                                                overlay={
                                                    <Tooltip>
                                                        etherscan
                                                    </Tooltip>
                                                }
                                            >   
                                                <a href={`https://etherscan.io/token/${this.tokenInfo.kton.tokenAddress}`} target="_blank" rel="noopener noreferrer">
                                                    <img alt="etherscan" src={etherscan} />
                                                </a>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'top'}
                                                overlay={
                                                    <Tooltip>
                                                        metamask
                                                    </Tooltip>
                                                }
                                            >
                                                <span>{hasMetamask ? <a className={styles.addToken} href="javascript:void(0)" onClick={() => this.addToken('kton')}>
                                                <img alt="metamask" src={metamask} />
                                                </a> : null}</span>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'top'}
                                                overlay={
                                                    <Tooltip>
                                                        tronscan
                                                    </Tooltip>
                                                }
                                            >   
                                                <a href="https://tronscan.org/#/token20/TW3kTpVtYYQ5Ka1awZvLb9Yy6ZTDEC93dC" target="_blank" rel="noopener noreferrer">
                                                    <img alt="tronscan" src={tronscan} />
                                                </a>
                                            </OverlayTrigger>
                                        </p>
                                    </div>
                                    <div className={styles.economicItemContent}>
                                        <p>{t('home_page:economic_block_content_2')}</p>
                                    </div>
                                </div>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <div>
                                            <img alt="economic" className={styles.economicIcon} src={eco3} />
                                            <span className={styles.gradientText}>{t('home_page:economic_block_title_3')}</span>
                                        </div>
                                    </div>
                                    <div className={styles.economicItemContent}>
                                        <p>{t('home_page:economic_block_content_3')}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <Button variant="transparent" href="/economic_model"
                                    className={`${styles.button} ${styles.colorBtn}`}>{t('home_page:read_more')}</Button>
                        </div>
                    </Container>
                </div>
                </Fade>

                <div className={`${styles.highlightContainer} ${styles.applicationContainer}`}>
                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                    <Container className={`reveal-h1`}>
                        <div className={`hidden-xs ${styles.title}`}>
                            <h1 className={` ${styles.fontH1}`}>{t('home_page:application_title')}</h1>
                        </div>
                        <div className={`hidden-md ${styles.title}`}>
                            <h1 className={` ${styles.gradientText} ${styles.fontH1}`}>{t('home_page:application_title')}</h1>
                        </div>
                        <Row className={`d-flex justify-content-center`}>
                            <Col xs={12} md={6} className={styles.appItem}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/">
                                    <img className={`hidden-xs`} alt="evoland" src={app_evo} />
                                    <img className={`hidden-md`} alt="evoland" src={application_evo} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/">
                                    <h3 className={styles.generalGradientText}>{t('home_page:application_block_title_1')}</h3>
                                </a>
                                <p>{t('home_page:application_block_content_1')}</p>
                            </Col>
                            <Col xs={12} md={6} className={styles.appItem}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.subscan.io">
                                    <img className={`hidden-xs`} alt="subscan" src={app_subscan} />
                                    <img className={`hidden-md`} alt="subscan" src={application_subscan} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.subscan.io">
                                    <h3 className={styles.generalGradientText}>{t('home_page:application_block_title_2')}</h3>
                                </a>
                                <p>{t('home_page:application_block_content_2')}</p>
                            </Col>
                            <Col xs={12} md={6} className={styles.appItem}>
                                <img className={`hidden-xs`} alt="Token DEX" src={app_token} />
                                <img className={`hidden-md`} alt="Token DEX" src={application_token} />
                                <h3 className={styles.generalGradientText}>{t('home_page:application_block_title_3')}</h3>
                                <p>{t('home_page:application_block_content_3')}</p>
                            </Col>
                            <Col xs={12} md={6} className={styles.appItem}>
                                <img alt="NFT Market" src={app_nft} className={`hidden-xs ${styles.secondImg}`}/>
                                <img alt="NFT Market" src={application_nft} className={`hidden-md ${styles.secondImg}`}/>
                                <h3 className={styles.generalGradientText}>{t('home_page:application_block_title_4')}</h3>
                                <p>{t('home_page:application_block_content_4')}</p>
                            </Col>
                        </Row>
                    </Container>
                    </Fade>
                </div>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>        
                <div className={`reveal-h1 ${styles.roadmapContainer}`}>
                    <Container>
                        <div className={styles.title}>
                            <h1 className={` ${styles.fontH1} ${styles.gradientText}`}>{t('home_page:roadmap_title')}</h1>
                        </div>
                        <div className={`hidden-xs ${styles.roadmap}`}>
                            <Row className={styles.roadmapRow}>
                                <Col className={styles.roadmapImgCol}>
                                    <Row className={styles.roadmapImgRow}>
                                        <Col md={6} xs={0}></Col>
                                        <Col className={styles.roadmapTextCol}>
                                            <Row className={styles.roadmap2018}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>2018</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2018')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2019q1}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q1</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2019_q1')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2019q2}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q2</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2019_q2')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2019q3}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q3</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2019_q3_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2019_q3_2')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2019q4}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q4</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2019_q4')}
                                                    </p>
                                                </Col>
                                            </Row>

                                            <Row className={styles.roadmap2020q1}>
                                                <Col xs={2}>
                                                    <div className={`${styles.whiteBtn}`}>Q1</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2020_q1')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2020q2}>
                                                <Col xs={2}>
                                                    <div className={`${styles.whiteBtn}`}>Q2</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2020_q2_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q2_2')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2020q3}>
                                                <Col xs={2}>
                                                    <div className={`${styles.whiteBtn}`}>Q3</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2020_q3_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q3_2')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q3_3')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2020q4}>
                                                <Col xs={2}>
                                                    <div className={`${styles.whiteBtn}`}>Q4</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p className={styles.roadmap2020Q4}>
                                                        {t('home_page:roadmap_2020_q4_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q4_2')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q4_3')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q4_4')}
                                                        <br/>
                                                        {t('home_page:roadmap_2020_q4_5')}
                                                    </p>
                                                </Col>
                                            </Row>

                                            <Row className={styles.roadmap2021q1}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q1</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2021_q1_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q1_2')}
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q1_3')}
                                                        <br/>
                                                        <span className={styles.note}>{t('home_page:roadmap_2021_q1_4')}</span>
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q1_5')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2021q2}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q2</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2021_q2_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q2_2')}
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q2_3')}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className={styles.roadmap2021q3}>
                                                <Col xs={2}>
                                                    <div className={`${styles.colorBtn}`}>Q3-Q4</div>
                                                </Col>
                                                <Col xs={10} className={styles.middleTextCol}>
                                                    <p>
                                                        {t('home_page:roadmap_2021_q3_1')}
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q3_2')}
                                                        <br/>
                                                        {t('home_page:roadmap_2021_q3_3')}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className={`hidden-md ${styles.roadmapM}`}>
                            <Row>
                                <Col>
                                    <h6 className={`${styles.generalGradientText}`}>2018-2019</h6>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2018}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>2018</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2018')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2019q1}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q1</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2019_q1')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2019q2}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q2</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2019_q2')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2019q3}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q3</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2019_q3_1')}
                                        <br/>
                                        {t('home_page:roadmap_2019_q3_2')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2019q4}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q4</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2019_q4')}
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <img src={roadmapSplit} alt="roadmap split line"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h6 className={`${styles.transBtn} ${styles.generalGradientText}`}>2020</h6>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2020q1}>
                                <Col xs={3}>
                                    <div className={`${styles.whiteBtn}`}>Q1</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2020_q1')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2020q2}>
                                <Col xs={3}>
                                    <div className={`${styles.whiteBtn}`}>Q2</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2020_q2_1')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q2_2')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2020q3}>
                                <Col xs={3}>
                                    <div className={`${styles.whiteBtn}`}>Q3</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2020_q3_1')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q3_2')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q3_3')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2020q4}>
                                <Col xs={3}>
                                    <div className={`${styles.whiteBtn}`}>Q4</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p className={styles.roadmap2020Q4}>
                                        {t('home_page:roadmap_2020_q4_1')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q4_2')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q4_3')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q4_4')}
                                        <br/>
                                        {t('home_page:roadmap_2020_q4_5')}
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <img src={roadmapSplit} alt="roadmap split line"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h6 className={`${styles.transBtn} ${styles.generalGradientText}`}>2021</h6>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2021q1}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q1</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2021_q1_1')}
                                        <br/>
                                        {t('home_page:roadmap_2021_q1_2')}
                                        <br/>
                                        {t('home_page:roadmap_2021_q1_3')}
                                        <br/>
                                        <span className={styles.note}>{t('home_page:roadmap_2021_q1_4')}</span>
                                        <br/>
                                        {t('home_page:roadmap_2021_q1_5')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2021q2}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q2</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2021_q2_1')}
                                        <br/>
                                        {t('home_page:roadmap_2021_q2_2')}
                                        <br/>
                                        {t('home_page:roadmap_2021_q2_3')}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={styles.roadmap2021q3}>
                                <Col xs={3}>
                                    <div className={`${styles.colorBtn}`}>Q3-Q4</div>
                                </Col>
                                <Col xs={9} className={styles.middleTextCol}>
                                    <p>
                                        {t('home_page:roadmap_2021_q3_1')}
                                        <br/>
                                        {t('home_page:roadmap_2021_q3_2')}
                                        <br/>
                                        {t('home_page:roadmap_2021_q3_3')}
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                </Fade>

                <div className={`${styles.teamContainer}`}>
                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                    <Container className={`reveal-h1`}>
                        <Row>
                            <Col md={1} xs={0}></Col>
                            <Col md={10} xs={12} className={`${styles.content}`}>
                                <h1 className={` ${styles.title} ${styles.fontH1}`}>
                                    {t('home_page:dev_title')}
                                </h1>
                                <p>
                                    {t('home_page:dev_content_1')}
                                    <br/>
                                    {t('home_page:dev_content_2')}
                                </p>
                                <Button variant="transparent" target="_blank" href="https://www.itering.io/"
                                className={styles.button}>{t('home_page:dev_join')}</Button>
                            </Col>
                        </Row>
                    </Container>
                    </Fade>
                </div>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                    <div className={`reveal-h1 ${styles.partnersContainer}`}>
                        <Container>
                            <div className={styles.title}>
                                <h1 className={` ${styles.fontH1} ${styles.gradientText}`}>{t('home_page:partners_title')}</h1>
                            </div>
                            <Row className={`d-flex`}>
                                {this.renderPartner()}
                            </Row>
                        </Container>
                    </div>
                </Fade>

                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                    <div className={`reveal-h1 ${styles.highlightContainer}  ${styles.newContainer}`}>
                        <Container>
                            <div className={styles.title}>
                                <h1 className={` ${styles.fontH1} ${styles.gradientText}`}>{t('home_page:newest_title')}</h1>
                            </div>
                            <Row className={`d-flex justify-content-center text-left`}>
                                <Col xs={12} md={4} lg={3}>
                                    <a className={styles.imgUrl} target="_blank" rel="noopener noreferrer" href={t('media:news_24_link')}>
                                        <div className={styles.imgRatio}>
                                            <img alt="news" src={news24}/>
                                        </div>
                                        <div className={styles.mediaInfo}>
                                            <span>{t('media:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('media:news_24_time')}</span>
                                        </div>
                                        <p className={styles.mediaDesc}>
                                            {t('media:news_24_title')}
                                        </p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} lg={3}>
                                    <a className={styles.imgUrl} target="_blank" rel="noopener noreferrer" href={t('media:news_23_link')}>
                                        <div className={styles.imgRatio}>
                                            <img alt="news" src={news23}/>
                                        </div>
                                        <div className={styles.mediaInfo}>
                                            <span>{t('media:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('media:news_23_time')}</span>
                                        </div>
                                        <p className={styles.mediaDesc}>
                                            {t('media:news_23_title')}
                                        </p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} lg={3}>
                                    <a className={styles.imgUrl} target="_blank" rel="noopener noreferrer" href={t('media:news_21_link')}>
                                        <div className={styles.imgRatio}>
                                            <img alt="news" src={news21}/>
                                        </div>
                                        <div className={styles.mediaInfo}>
                                            <span>{t('media:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('media:news_21_time')}</span>
                                        </div>
                                        <p className={styles.mediaDesc}>
                                            {t('media:news_21_title')}
                                        </p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} lg={3}>
                                    <a className={styles.imgUrl} target="_blank" rel="noopener noreferrer" href={t('media:news_20_link')}>
                                        <div className={styles.imgRatio}>
                                            <img alt="news" src={news20}/>
                                        </div>
                                        <div className={styles.mediaInfo}>
                                            <span>{t('media:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('media:news_20_time')}</span>
                                        </div>
                                        <p className={styles.mediaDesc}>
                                            {t('media:news_20_title')}
                                        </p>
                                    </a>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <Button variant="dark" href="/media"
                                        className={styles.button}>{t('home_page:news_btn')}</Button>
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
