import React, {Component} from "react";
import {Container, Row, Col, Image, InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import {GradientHeading} from '../../components/GradientHeading'
import styles from './style.module.scss'
import dwIcon from './img/darwinia-logo.png'
import dwSlideIcon from './img/slide-logo.png'
import architecture from './img/architecture.png'
import architecture_en from './img/architecture-en.png'
import architecture_mobile from './img/architecture-mobile.png'
import architecture_mobile_en from './img/architecture-mobile-en.png'
import architecture_solo from './img/architecture-solo.svg'
import architecture_chain from './img/architecture-chain.svg'

import economic from './img/economic.png'
import economic_en from './img/economic-en.png'

import application_1 from './img/application/application-1.png'
import application_2 from './img/application/application-2.png'

import roadmap from './img/roadmap.png'
import roadmapMobile from './img/roadmap-m.png'

import key1 from './img/key/key-1.png'
import key1_mobile from './img/key/key-1-mobile.png'
import key2 from './img/key/key-2.png'
import key2_mobile from './img/key/key-2-mobile.png'
import key3 from './img/key/key-3.png'
import key3_mobile from './img/key/key-3-mobile.png'
import key4 from './img/key/key-4.png'
import key4_mobile from './img/key/key-4-mobile.png'
import key5 from './img/key/key-5.png'
import key5_mobile from './img/key/key-5-mobile.png'

import eco1 from './img/economic/eco-1.png'
import eco2 from './img/economic/eco-2.png'
import eco3 from './img/economic/eco-3.png'

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

import newsEthRelay from './img/news/news-eth-relay.png'
import news1 from './img/news/news-1.jpg'
import news2 from './img/news/news-2.jpg'
import news0 from './img/news/news-0.jpg'

import axios from 'axios'
import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import i18n from '../../locales/i18n';
import Zmage from 'react-zmage'


class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            info: ''
        }
        this.partnerInfo = {
            'polkadot': {
                logo: partner1,
                name: 'Polkadot',
                url: 'https://polkadot.network'
            },
            'web3': {
                logo: partner2,
                name: 'Web3 Foundation',
                url: 'https://web3.foundation'
            },
            'parity': {
                logo: partner3,
                name: 'Parity',
                url: 'https://www.parity.io'
            },
            'maker': {
                logo: partner4,
                name: 'MAKER',
                url: 'https://makerdao.com'
            },
            'snz': {
                logo: partner5,
                name: 'SNZ Holding',
                url: 'https://snzholding.com'
            },
            'hashkey': {
                logo: partner6,
                name: 'HashKey',
                url: 'https://www.hashkey.com'
            },
            'polkabase': {
                logo: partner7,
                name: 'Polkabase',
                url: 'https://www.polkabase.com'
            },
            'bihu': {
                logo: partner8,
                name: 'Bihu',
                url: 'https://bihu.com'
            },
            'evolutionland': {
                logo: partner9,
                name: 'Evolution Land',
                url: 'https://www.evolution.land'
            },
            'polkaworld': {
                logo: partner10,
                name: 'Polka World',
                url: 'https://www.polkaworld.org'
            },
            'imtoken': {
                logo: partner11,
                name: 'imToken',
                url: 'https://token.im'
            },
            'mathwallet': {
                logo: partner12,
                name: 'Math Wallet',
                url: 'https://www.mathwallet.org'
            },
            'cobowallet': {
                logo: partner13,
                name: 'Cobo Wallet',
                url: 'https://cobo.com'
            },
            'polkawallet': {
                logo: partner14,
                name: 'Polka Wallet',
                url: 'https://polkawallet.io'
            },
            'sssnodes': {
                logo: partner15,
                name: 'SSSnodes',
                url: 'http://sssnodes.com'
            },
            'digital': {
                logo: partner16,
                name: 'Digital Renaissance',
                url: 'http://drf.ee'
            },
            'ddex': {
                logo: partner17,
                name: 'DDEX',
                url: 'https://ddex.io'
            },
            'otcmaker': {
                logo: partner18,
                name: 'OTCMAKER',
                url: 'https://www.otcmaker.com'
            }
        }

        this.partners = [
            'polkadot', 'web3', 'parity', 'maker', 'snz', 'hashkey', 'polkabase', 'bihu',
            'evolutionland', 'polkaworld', 'imtoken', 'mathwallet', 'cobowallet', 'polkawallet',
            'sssnodes', 'digital', 'ddex',  'otcmaker'
        ]
    }

    componentDidMount() {
        archorsComponent()
    }

    subscribe = (text) => {
        axios.post('https://crab.subscan.io/api/subscribe?email=' + text)
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

    renderPartner = () => {
        return this.partners.map((partner, index) => {
            return (
                <Col key={index} xs={6} md={4} lg={2}>
                    <a target="_blank" href={this.partnerInfo[partner].url}>
                        <img src={this.partnerInfo[partner].logo}/>
                        <h3>{this.partnerInfo[partner].name}</h3>
                    </a>
                </Col>
            )
        })
    }

    render() {
        const {t} = this.props
        const {email, info} = this.state
        return (
            <div>
                <div className={styles.homeBannerArea}>
                    <PageHeader transparent={true}/>
                    <Container>
                        <Row className={`${styles.promoteContentArea} d-flex justify-content-center`}>
                            <Col xs={{order: 2, span: 11}} sm={{order: 1, span: 8}}>
                                {/* <img className={styles.slideLogo} src={dwSlideIcon}/> */}
                                <p className={styles.slogan}>{t('home_page:slogan')}</p>
                                <div className={styles.line}/>
                                <p className={`${styles.subTitle} mb-4`}>{t('home_page:subtitle')}</p>
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
                                           dangerouslySetInnerHTML={{__html: info || '&nbsp'}}>

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
                                               dangerouslySetInnerHTML={{__html: info || '&nbsp'}}/>

                                </Form>
                            </Col>
                            <Col xs={{order: 1}} md={{order: 2, span: 4}}
                                 className={`d-none d-md-block d-lg-block`}>
                                {/*<img src={dwIcon}/>*/}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.highlightContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:highlight_title')}</GradientHeading>
                        <div className={styles.lineH1}></div>
                        <Row className={`d-flex justify-content-center text-center`}>
                            <Col xs={12} md={4} className={styles.lg5}>
                                <img src={key1} className={`hidden-xs`}/>
                                <img src={key1_mobile} className={`visible-xs`}/>
                                <div className={styles.keyItem}>
                                    <h3>{t('home_page:highlight_block_title_1')}</h3>
                                    <p>{t('home_page:highlight_block_content_1')}</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={styles.lg5}>
                                <img src={key2} className={`hidden-xs`}/>
                                <img src={key2_mobile} className={`visible-xs`}/>
                                <div className={styles.keyItem}>
                                    <h3>{t('home_page:highlight_block_title_2')}</h3>
                                    <p>{t('home_page:highlight_block_content_2')}</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={styles.lg5}>
                                <img src={key3} className={`hidden-xs`}/>
                                <img src={key3_mobile} className={`visible-xs`}/>
                                <div className={styles.keyItem}>
                                    <h3>{t('home_page:highlight_block_title_3')}</h3>
                                    <p>{t('home_page:highlight_block_content_3')}</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={styles.lg5}>
                                <img src={key4} className={`hidden-xs`}/>
                                <img src={key4_mobile} className={`visible-xs`}/>
                                <div className={styles.keyItem}>
                                    <h3>{t('home_page:highlight_block_title_4')}</h3>
                                    <p>{t('home_page:highlight_block_content_4')}</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className={styles.lg5}>
                                <img src={key5} className={`hidden-xs`}/>
                                <img src={key5_mobile} className={`visible-xs`}/>
                                <div className={styles.keyItem}>
                                    <h3>{t('home_page:highlight_block_title_5')}</h3>
                                    <p>{t('home_page:highlight_block_content_5')}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.architectureContainer}`}>
                    <Container>
                    <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:architecture_title')}</GradientHeading>
                        {/* <h1 className={`text-center ${styles.fontH1}`}>{t('home_page:architecture_title')}</h1> */}
                        {/* {i18n.language.indexOf('en') > -1 ? <img src={architecture_en}/> :
                            <img src={architecture}/>} */}
                        <div className={`${styles.archWrapper}`}>
                            {i18n.language.indexOf('en') > -1 ? <img className={`hidden-xs`} src={architecture_en}/> :
                            <img className={`hidden-xs`} src={architecture}/>}
                            {i18n.language.indexOf('en') > -1 ? <img className={`visible-xs`} src={architecture_mobile_en}/> :
                            <img className={`visible-xs`} src={architecture_mobile}/>}
                            <div className={`hidden-xs ${styles.anime}`}>
                                <div>
                                    <Button className={styles.soloBtn}>{t('home_page:architecture_solo')}</Button>
                                    <Button className={`${styles.soloBtn} ${styles.soloWhiteBtn}`}>{t('home_page:architecture_solo')}</Button>
                                    <Button className={styles.chainBtn}>{t('home_page:architecture_chain')}</Button>
                                    <Button className={`${styles.chainBtn} ${styles.chainPinkBtn}`}>{t('home_page:architecture_chain')}</Button>
                                    <img src={architecture_chain} className={styles.chain}/>
                                    <img src={architecture_solo} className={styles.solo}/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={`${styles.highlightContainer} ${styles.economicContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:economic_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <Row className={`d-flex justify-content-center`}>
                            <Col xs={12} md={12} lg={6} className={styles.economicImg}>
                            {i18n.language.indexOf('en') > -1 ? <img className={styles.bridge} src={economic_en}/> :
                            <img className={styles.bridge} src={economic}/>}
                            </Col>
                            <Col xs={0} md={0} lg={1} />
                            <Col xs={12} md={12} lg={5} className={styles.economicCol}>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <img className={styles.economicIcon} src={eco1}/>
                                        <div>{t('home_page:economic_block_title_1')}</div>
                                    </div>
                                    <p>{t('home_page:economic_block_content_1')}</p>
                                </div>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <img className={styles.economicIcon} src={eco2}/>
                                        <div>{t('home_page:economic_block_title_2')}</div>
                                    </div>
                                    <p>{t('home_page:economic_block_content_2')}</p>
                                </div>
                                <div className={styles.economicItem}>
                                    <div className={styles.economicItemHeader}>
                                        <img className={styles.economicIcon} src={eco3}/>
                                        <div>{t('home_page:economic_block_title_3')}</div>
                                    </div>
                                    <p>{t('home_page:economic_block_content_3')}</p>
                                </div>
                            </Col>
                        </Row>
                        {/* <div>
                            <Button variant="dark" target="_blank" href={t('home_page:economic_url')}
                                    className={styles.button}>{t('home_page:economic_btn')}</Button>
                        </div> */}
                    </Container>
                </div>

                <div className={`${styles.highlightContainer} ${styles.applicationContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:application_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <Row className={`d-flex justify-content-center`}>
                            <Col xs={12} md={6}>
                                <img src={application_1}/>
                                <h3>{t('home_page:application_block_title_1')}</h3>
                                <p>{t('home_page:application_block_content_1')}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <img src={application_2}/>
                                <h3>{t('home_page:application_block_title_2')}</h3>
                                <p>{t('home_page:application_block_content_2')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.roadmapContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:roadmap_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <div className={`hidden-md`}>
                            <Row className={`d-flex justify-content-center align-items-between`}>
                                <Col xs={4}>
                                    <Row className={`text-center ${styles.label} ${styles.status}`}>
                                        <Col>
                                            <p>2019-07</p>
                                            <p>Launched</p>
                                        </Col>
                                        <Col className={styles.crayfishCol}>
                                            <p>2019-09</p>
                                            <p>Launched</p>
                                        </Col>
                                        <Col className={styles.icefrogCol}>
                                            <p>2019-11</p>
                                            <p>Launched</p>
                                        </Col>
                                        <Col className={styles.crabCol}>
                                            <p>2020-Q1</p>
                                            <p>Launched</p>
                                        </Col>
                                        <Col className={styles.mainnetCol}>
                                            <p>2020-Q3</p>
                                            <p></p>
                                        </Col>
                                        <Col className={styles.lastCol}>
                                            <p>2020 Q3-Q4</p>
                                            <p></p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={3} className={`${styles.roadMapImageBox}`}>
                                    <img src={roadmapMobile}/>
                                </Col>
                                <Col xs={5} className={styles.nospace}>
                                    <div className={`text-center d-flex ${styles.label}`}>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_1_name')}</p>
                                            <p>{t('home_page:roadmap_1_milestone')}</p>
                                        </div>
                                        <div xs={12} className={styles.crayfishCol}>
                                            <p>{t('home_page:roadmap_2_name')}</p>
                                            <p>{t('home_page:roadmap_2_milestone')}</p>
                                        </div>
                                        <div xs={12} className={styles.icefrogCol}>
                                            <p>{t('home_page:roadmap_3_name')}</p>
                                            <p>{t('home_page:roadmap_3_milestone')}</p>
                                        </div>
                                        <div xs={12} className={styles.crabCol}>
                                            <p>{t('home_page:roadmap_4_name')}</p>
                                            <p>{t('home_page:roadmap_4_milestone')}</p>
                                        </div>
                                        <div xs={12} className={styles.mainnetCol}>
                                            <p>{t('home_page:roadmap_5_name')}</p>
                                            <p>{t('home_page:roadmap_5_milestone')}</p>
                                        </div>
                                        <div xs={12} className={`${styles.lastCol} d-flex justify-content-center align-items-center`}>
                                            <p>{t('home_page:roadmap_6_name')}</p>
                                            <p>{t('home_page:roadmap_6_milestone')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={`${styles.content} hidden-xs`}>
                            <Row className={`text-center ${styles.label} ${styles.status}`}>
                                <Col>
                                    <p>2019-07</p>
                                    <p>Launched</p>
                                </Col>
                                <Col className={styles.crayfishCol}>
                                    <p>2019-09</p>
                                    <p>Launched</p>
                                </Col>
                                <Col>
                                    <p>2019-11</p>
                                    <p>Launched</p>
                                </Col>
                                <Col>
                                    <p>2020-Q1</p>
                                    <p>Launched</p>
                                </Col>
                                <Col className={styles.mainnetCol}>
                                    <p>2020-Q3</p>
                                    <p></p>
                                </Col>
                                <Col className={styles.lastCol}>
                                    <p>2020 Q3-Q4</p>
                                    <p></p>
                                </Col>
                            </Row>
                            <img src={roadmap}/>
                            <Row className={`text-center ${styles.label}`}>
                                <Col>
                                    <p>{t('home_page:roadmap_1_name')}</p>
                                    <p>{t('home_page:roadmap_1_milestone')}</p>
                                </Col>
                                <Col className={styles.crayfishCol}>
                                    <p>{t('home_page:roadmap_2_name')}</p>
                                    <p>{t('home_page:roadmap_2_milestone')}</p>
                                </Col>
                                <Col>
                                    <p>{t('home_page:roadmap_3_name')}</p>
                                    <p>{t('home_page:roadmap_3_milestone')}</p>
                                </Col>
                                <Col>
                                    <p>{t('home_page:roadmap_4_name')}</p>
                                    <p>{t('home_page:roadmap_4_milestone')}</p>
                                </Col>
                                <Col className={styles.mainnetCol}>
                                    <p>{t('home_page:roadmap_5_name')}</p>
                                    <p>{t('home_page:roadmap_5_milestone')}</p>
                                </Col>
                                <Col className={`${styles.lastCol} d-flex justify-content-center align-items-center`}>
                                    <p>{t('home_page:roadmap_6_name')}</p>
                                    <p>{t('home_page:roadmap_6_milestone')}</p>
                                </Col>
                            </Row>
                            <div className={`text-center`}>
                                <Button variant="dark" target="_blank" href={t('header:testnet_url')}
                                        className={styles.button}>{t('home_page:roadmap_btn')}</Button>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={`${styles.teamContainer} d-flex justify-content-center align-items-center`}>
                    <Container className={'text-center'}>
                        <Row>
                            <Col>
                                <h1 className={styles.fontH1}>{t('home_page:dev_title')}</h1>
                                <div className={styles.lineH2}></div>
                                <p>{t('home_page:dev_content')}</p>
                                <p className={styles.link}>
                                    <a href="https://www.itering.io/">{t('home_page:dev_link')}</a>
                                </p>

                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.partnersContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:partners_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <Row className={`d-flex`}>
                            {this.renderPartner()}
                        </Row>
                    </Container>
                </div>

                {/* <div className={`${styles.highlightContainer}  ${styles.newContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:newest_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <Row className={`d-flex justify-content-center text-left`}>
                            <Col xs={10} md={4} lg={3}>
                                <a className={styles.imgUrl} target="_blank" href={t('home_page:news_link_eth_relay')}>
                                    <img src={newsEthRelay}/>
                                    <h3>{t('home_page:news_title_eth_relay')}</h3>
                                </a>
                            </Col>
                            <Col xs={10} md={4} lg={3}>
                                <a className={styles.imgUrl} target="_blank" href={t('home_page:news_link_1')}>
                                    <img src={news1}/>
                                    <h3>{t('home_page:news_title_1')}</h3>
                                </a>
                            </Col>
                            <Col xs={10} md={4} lg={3}>
                                <a className={styles.imgUrl} target="_blank" href={t('home_page:news_link_2')}>
                                    <img src={news2}/>
                                    <h3>{t('home_page:news_title_2')}</h3>
                                </a>
                            </Col>
                            <Col xs={10} md={4} lg={3}>
                                <a className={styles.imgUrl} target="_blank" href={t('home_page:news_link_3')}>
                                    <img src={news0}/>
                                    <h3>{t('home_page:news_title_3')}</h3>
                                </a>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button variant="dark" href="/news"
                                    className={styles.button}>{t('home_page:news_btn')}</Button>
                        </div>
                    </Container>
                </div> */}

                <PageFooter></PageFooter>
            </div>
        );
    }
}

export default withTranslation()

(
    Home
)
;
