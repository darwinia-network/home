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

import application_1 from './img/application/application-1.png'
import application_2 from './img/application/application-2.png'

import roadmap from './img/roadmap.png'
import roadmapMobile from './img/roadmap-m.png'

import key1 from './img/key/key-1.png'
import key2 from './img/key/key-2.png'
import key3 from './img/key/key-3.png'
import key4 from './img/key/key-4.png'
import key5 from './img/key/key-5.png'
import key6 from './img/key/key-6.png'

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
import partner19 from './img/partner/partner-19.png'
import partner20 from './img/partner/partner-20.png'
import partner21 from './img/partner/partner-21.png'
import partner22 from './img/partner/partner-22.png'
import partner23 from './img/partner/partner-23.png'


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
        this.partners = [
            partner1,
            partner2,
            partner20,
            partner21,
            partner3,
            partner4,
            partner5,
            partner6,
            partner7,
            partner8,
            partner9,
            partner10,
            partner11,
            partner12,
            partner13,
            partner14,
            partner15,
            partner16,
            partner17,
            partner18,
            partner19,
            partner22,
            partner23,
        ]
        this.partnersUrl = [
            'https://polkadot.network/',
            'https://web3.foundation/',
            'https://snzholding.com/',
            'https://www.hashkey.com/',
            'https://bihu.com/',
            'https://www.polkaworld.org/',
            'https://token.im/',
            'https://www.mathwallet.org/',
            'https://cobo.com/',
            'https://polkawallet.io//',
            'https://www.bitportal.io/',
            'https://www.wetez.io',
            'http://sssnodes.com/',
            'http://drf.ee/',
            'http://drf.ee/',
            'https://cha.in/',
            'https://www.nodeasy.com/',
            'http://dapp.cc/',
            'http://www.blackpool.pro/',
            'https://cybex.io/',
            'https://ddex.io/',
            'https://www.evolution.land/',
            'https://www.otcmaker.com/',
        ]
    }

    componentDidMount() {
        archorsComponent()
    }

    subscribe = (text) => {
        axios.post('https://darwinia.network/api/subscribe?email=' + text)
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
                <Col key={index} xs={6} md={4} lg={2}><a target="_blank" href={this.partnersUrl[index]}><img src={partner}/></a></Col>
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
                                <img className={styles.slideLogo} src={dwSlideIcon}/>
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
                            <Col xs={6} md={4} lg={2}>
                                <img src={key1}/>
                                <h3>{t('home_page:highlight_block_title_1')}</h3>
                                <p>{t('home_page:highlight_block_content_1')}</p>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src={key2}/>
                                <h3>{t('home_page:highlight_block_title_2')}</h3>
                                <p>{t('home_page:highlight_block_content_2')}</p>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src={key3}/>
                                <h3>{t('home_page:highlight_block_title_3')}</h3>
                                <p>{t('home_page:highlight_block_content_3')}</p>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src={key4}/>
                                <h3>{t('home_page:highlight_block_title_4')}</h3>
                                <p>{t('home_page:highlight_block_content_4')}</p>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src={key5}/>
                                <h3>{t('home_page:highlight_block_title_5')}</h3>
                                <p>{t('home_page:highlight_block_content_5')}</p>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src={key6}/>
                                <h3>{t('home_page:highlight_block_title_6')}</h3>
                                <p>{t('home_page:highlight_block_content_6')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.architectureContainer}`}>
                    <Container>
                        {/*<h1 className={`text-center ${styles.fontH1}`}>{t('home_page:architecture_title')}</h1>*/}
                        {i18n.language.indexOf('en') > -1 ? <Zmage src={architecture_en}/> :
                            <Zmage src={architecture}/>}
                    </Container>
                </div>

                <div className={`${styles.highlightContainer} ${styles.economicContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:economic_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <Row className={`d-flex justify-content-center`}>
                            <Col xs={12} md={4} lg={4}>
                                <img src={eco1}/>
                                <h3>{t('home_page:economic_block_title_1')}</h3>
                                <p>{t('home_page:economic_block_content_1')}</p>
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <img src={eco2}/>
                                <h3>{t('home_page:economic_block_title_2')}</h3>
                                <p>{t('home_page:economic_block_content_2')}</p>
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <img src={eco3}/>
                                <h3>{t('home_page:economic_block_title_3')}</h3>
                                <p>{t('home_page:economic_block_content_3')}</p>
                            </Col>
                        </Row>
                        <div>
                            <Button variant="dark" target="_blank" href={t('home_page:economic_url')}
                                    className={styles.button}>{t('home_page:economic_btn')}</Button>
                        </div>
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
                            </Col>
                            <Col xs={12} md={6}>
                                <img src={application_2}/>
                                <h3>{t('home_page:application_block_title_2')}</h3>
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
                                <Col xs={5}>
                                    <img src={roadmapMobile}/>
                                </Col>
                                <Col xs={5} className={styles.nospace}>
                                    <div className={`text-center d-flex ${styles.label}`}>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_1_name')}</p>
                                            <p>{t('home_page:roadmap_1_milestone')}</p>
                                        </div>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_2_name')}</p>
                                            <p>{t('home_page:roadmap_2_milestone')}</p>
                                        </div>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_3_name')}</p>
                                            <p>{t('home_page:roadmap_3_milestone')}</p>
                                        </div>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_4_name')}</p>
                                            <p>{t('home_page:roadmap_4_milestone')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={`${styles.content} hidden-xs`}>
                            <img src={roadmap}/>
                            <Row className={`text-center ${styles.label}`}>
                                <Col>
                                    <p>{t('home_page:roadmap_1_name')}</p>
                                    <p>{t('home_page:roadmap_1_milestone')}</p>
                                </Col>
                                <Col>
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
                                <h1>{t('home_page:dev_title')}</h1>
                                <div className={styles.lineH2}></div>
                                <p>{t('home_page:dev_content')}</p>
                                <p className={styles.link}><a
                                    href="https://itering.com">{t('home_page:dev_link')}</a></p>
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

                <div className={`${styles.highlightContainer}  ${styles.newContainer}`}>
                    <Container>
                        <GradientHeading
                            className={`text-center ${styles.fontH1}`}>{t('home_page:newest_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <Row className={`d-flex justify-content-center text-left`}>
                            <Col xs={10} md={4} lg={3}>
                                <img src={news1}/>
                                <h3><a target="_blank"
                                       href={t('home_page:news_link_1')}>{t('home_page:news_title_1')}</a></h3>
                            </Col>
                            <Col xs={10} md={4} lg={3}>
                                <img src={news2}/>
                                <h3><a target="_blank"
                                       href={t('home_page:news_link_2')}>{t('home_page:news_title_2')}</a></h3>
                            </Col>
                            <Col xs={10} md={4} lg={3}>
                                <img src={news0}/>
                                <h3><a target="_blank"
                                       href={t('home_page:news_link_3')}>{t('home_page:news_title_3')}</a></h3>
                            </Col>
                            <Col xs={10} md={4} lg={3}>
                                <img src={news0}/>
                                <h3><a target="_blank"
                                       href={t('home_page:news_link_4')}>{t('home_page:news_title_4')}</a></h3>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button variant="dark" href="/news"
                                    className={styles.button}>{t('home_page:news_btn')}</Button>
                        </div>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()

(
    Home
)
;
