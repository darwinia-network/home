import React, {Component} from "react";
import {Container, Row, Col, Button, Popover, OverlayTrigger} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import LazyBackground from "../../components/lazyBackground"
import MediaQuery from 'react-responsive'
import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import Fade from 'react-reveal/Fade';


// import GradientHeading from "../../components/GradientHeading/GradientHeading";
import bannerBg from "./img/banner-bg.png"
import bannerBgM from "./img/banner-bg-m.png"
import github from './img/github.png'
import github_white from './img/github_white.png'
import medium from './img/medium.png'
import medium_white from './img/medium_white.png'
import telegram from './img/telegram.png'
import telegram_white from './img/telegram_white.png'
import twitter from './img/twitter.png'
import twitter_white from './img/twitter_white.png'
import wechat from './img/wechat.png'
import wechat_white from './img/wechat_white.png'
import wx from './img/wx.jpg'

import new_bg from './img/new-bg.png'
import new_bg_m from './img/new-bg-m.png'
import technology_bg from './img/technology-bg.png'
import technology_bg_m from './img/technology-bg-m.png'
import education_bg from './img/education-bg.png'
import education_bg_m from './img/education-bg-m.png'
import grant from './img/grant.png'
import bounty from './img/bounty.png'
import creator from './img/creator.png'
import experience from './img/experience.png'
import meetup from './img/meetup.png'
import moderator from './img/moderator.png'
import translator from './img/translator.png'

import person_1 from "./img/person_1.jpg"
import person_2 from "./img/person_2.jpg"
import person_3 from "./img/person_3.jpg"
import person_4 from "./img/person_4.jpg"
import person_5 from "./img/person_5.jpg"
import person_6 from "./img/person_6.jpg"
import person_7 from "./img/person_7.jpg"
import person_8 from "./img/person_8.jpg"
import person_9 from "./img/person_9.jpg"
import person_10 from "./img/person_10.jpg"
import person_11 from "./img/person_11.jpg"
import person_12 from "./img/person_12.jpg"
import person_13 from "./img/person_13.jpg"
import person_14 from "./img/person_14.jpg"
import person_15 from "./img/person_15.jpg"
import person_16 from "./img/person_16.jpg"
import person_17 from "./img/person_17.jpg"
import person_more from "./img/person_more.png"

class Brand extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showMore: false
        }
    }

    componentDidMount() {
        archorsComponent()
    }

    showMoreAvatar() {
        this.setState({showMore: true})
    }

    renderTooltip = props => {
        const {t} = this.props
        return <Popover {...props} className={styles.wxContainer}>
            <div class="popover-body"><img alt="wx" src={wx}/>
            <p>{t("footer:scan")}</p>
            <p>{t("footer:follow")}</p></div>
        </Popover>
    }

    renderContainer() {
        const {t} = this.props
        return (
            <Container>
                        <div>
                            <Row>
                                <Col xs={12} className={`${styles.content}`}>
                                    <h1 className={styles.title}>
                                        {t('community:dive_title')}
                                    </h1>
                                    <p>
                                        {t('community:dive_subtitle')}
                                    </p>
                                    <Button variant="transparent" target="_blank" href="/ambassador"
                                    className={`hidden-xs ${styles.button}`}>{t('community:dive_slogan')}</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
        )
    }

    render() {
        const {t} = this.props
        const {showMore} = this.state
        return (
            <div className={`${styles.community}`}>
                <PageHeader transparent={true}/>
                <MediaQuery minDeviceWidth={768}>
                    <LazyBackground src={bannerBg } className={styles.dive}>
                        {this.renderContainer()}
                    </LazyBackground>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767.98}>
                    <LazyBackground src={bannerBgM } className={styles.dive}>
                        {this.renderContainer()}
                    </LazyBackground>
                </MediaQuery>

                <div className={`${styles.general}`}>
                    <Container>
                        <div>
                            <Row>
                                <Col md={1} xs={0}></Col>
                                <Col md={10} xs={12} className={`${styles.content}`}>
                                    {/* <div className={'text-center'}>
                                        <h1 className={`${styles.title} ${styles.gradientText}`}>
                                            {t('community:general')}
                                        </h1>
                                    </div> */}
                                    <div className={`${styles.mediaBlocks}`}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DarwiniaNetwork" className={`${styles.mediaBlock} ${styles.twitter}`}>
                                            <div className={styles.mediaLogo}>
                                                <img alt="twitter" src={twitter_white}/>
                                                <img className={styles.hoverImg} alt="twitter" src={twitter}/>
                                            </div>
                                            <div className={styles.mediaNum}>
                                                22,889
                                            </div>
                                            <div className={styles.mediaName}>
                                                {t('community:twitter')}
                                            </div>
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://t.me/DarwiniaNetwork" className={`${styles.mediaBlock} ${styles.telegram}`}>
                                            <div className={styles.mediaLogo}>
                                                <img alt="telegram" src={telegram_white}/>
                                                <img className={styles.hoverImg} alt="telegram" src={telegram}/>
                                            </div>
                                            <div className={styles.mediaNum}>
                                                17,705
                                            </div>
                                            <div className={styles.mediaName}>
                                                {t('community:telegram')}
                                            </div>
                                        </a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@DarwiniaNetwork" className={`${styles.mediaBlock} ${styles.medium}`}>
                                            <div className={styles.mediaLogo}>
                                                <img alt="medium" src={medium_white}/>
                                                <img className={styles.hoverImg} alt="medium" src={medium}/>
                                            </div>
                                            <div className={styles.mediaNum}>
                                                2,436
                                            </div>
                                            <div className={styles.mediaName}>
                                                {t('community:medium')}
                                            </div>
                                        </a>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{show: 100, hide: 100}}
                                            overlay={this.renderTooltip}
                                        >
                                            <div className={`${styles.mediaBlock} ${styles.wechat}`}>
                                                <div className={styles.mediaLogo}>
                                                    <img alt="wechat" src={wechat_white}/>
                                                    <img className={styles.hoverImg} alt="wechat" src={wechat}/>
                                                </div>
                                                <div className={styles.mediaNum}>
                                                    11,545
                                                </div>
                                                <div className={styles.mediaName}>
                                                    {t('community:wechat')}
                                                </div>
                                            </div>
                                        </OverlayTrigger>
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/darwinia-network" className={`${styles.mediaBlock} ${styles.github}`}>
                                            <div className={styles.mediaLogo}>
                                                <img alt="github" src={github_white}/>
                                                <img className={styles.hoverImg} alt="github" src={github}/>
                                            </div>
                                            <div className={styles.mediaNum}>
                                                89
                                            </div>
                                            <div className={styles.mediaName}>
                                                {t('community:github')}
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className={`${styles.contribute}`}>
                    <div className={styles.new}>
                        <img className={'hidden-xs'} alt="new-bg" src={new_bg}/>
                        <img className={'hidden-md'} alt="new-bg" src={new_bg_m}/>
                        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                        <Container className={styles.container}>
                            <Row className={styles.newRow}>
                                <Col md={12} xs={12}>
                                    <div className={'text-center'}>
                                        <h1 className={styles.sectionTitle}>
                                            {t('community:contribute')}
                                        </h1>
                                    </div>
                                    <div className={styles.lineH1}></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8} xs={12} className={`${styles.content}`}>
                                    <div className={'text-center'}>
                                        <div className={`${styles.contentTitle}`}>{t('community:new')}</div>
                                        <p>{t('community:new_intro')}</p>
                                        <div className={styles.buttons}>
                                            <Button variant="transparent" target="_blank" href={t('community:darwinia_wiki_link')}
                                                className={styles.button}>{t('community:darwinia_wiki')}</Button>
                                            <Button variant="transparent" target="_blank" href={t('footer:faq_link')}
                                                className={styles.button}>{t('community:faq')}</Button>
                                            <Button variant="transparent" target="_blank" href={t('ambassador:form')}
                                                className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        </Fade>
                    </div>
                    <div className={styles.technology}>
                        <img className={'hidden-xs'} alt="technology-bg" src={technology_bg}/>
                        <img className={'hidden-md'} alt="technology-bg" src={technology_bg_m}/>
                        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                        <Container className={styles.container}>
                            <Row>
                                <Col md={9} xs={12} className={`${styles.content}`}>
                                    <div className={styles.section}>
                                        <img alt="grant" src={grant}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:grant_program')}</div>
                                            <p>{t('community:grant_intro')}</p>
                                            <div className={styles.buttons}>
                                                <Button variant="white" target="_blank" href={t('community:grant_link')}
                                                    className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.section}>
                                        <img alt="bounty" src={bounty}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:bounty_program')}</div>
                                            <p>{t('community:bounty_intro')}</p>
                                            <div className={styles.buttons}>
                                                <Button variant="white" target="_blank" href={t('community:grant_link')}
                                                    className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3} xs={12}>
                                    <div className={`text-center ${styles.contentTitle}`}>
                                        {t('community:technology')}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        </Fade>
                    </div>
                    <div className={styles.education}>
                        <img className={'hidden-xs'} alt="education-bg" src={education_bg}/>
                        <img className={'hidden-md'} alt="education-bg" src={education_bg_m}/>
                        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                        <Container className={styles.container}>
                            <Row>
                                <Col md={3} xs={12}>
                                    <div className={`${styles.contentTitle}`}>
                                        {t('community:education')}
                                    </div>
                                </Col>
                                <Col md={9} xs={12} className={`${styles.content}`}>
                                    <div className={styles.section}>
                                        <img alt="creator" src={creator}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:content_creator')}</div>
                                            <p>{t('community:content_intro')}</p>
                                        </div>
                                    </div>

                                    <div className={styles.section}>
                                        <img alt="meetup" src={meetup}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:meetup_organizer')}</div>
                                            <p>{t('community:meetup_intro')}</p>
                                        </div>
                                    </div>

                                    <div className={styles.section}>
                                        <img alt="translator" src={translator}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:translator')}</div>
                                            <p>{t('community:translator_intro')}</p>
                                        </div>
                                    </div>

                                    <div className={styles.section}>
                                        <img alt="moderator" src={moderator}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:moderator')}</div>
                                            <p>{t('community:moderator_intro')}</p>
                                        </div>
                                    </div>

                                    <div className={styles.section}>
                                        <img alt="experience" src={experience}/>
                                        <div className={styles.text}>
                                            <div className={styles.title}>{t('community:experience_officer')}</div>
                                            <p>{t('community:experience_intro')}</p>
                                        </div>
                                    </div>

                                    <div className={styles.buttons}>
                                        <Button variant="white" target="_blank" href={t('ambassador:form')}
                                            className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        </Fade>
                    </div>
                </div>

                <div className={styles.contributors}>
                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                    <Container>
                        <Row>
                            {/* <Col xs={0} md={1}></Col> */}
                            <Col xs={12} md={12} className={`${styles.content}`}>
                                <h1 className={styles.title}>
                                    {t('community:contributors')}
                                </h1>
                                <MediaQuery minDeviceWidth={768}>
                                    <div className={`hidden-xs ${styles.persons}`}>
                                        <img className={`${styles.avatar}`} alt="person" src={person_1}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_2}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_3}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_4}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_5}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_6}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_7}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_8}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_9}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_10}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_11}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_12}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_13}/>
                                        {showMore ? (<>
                                        <img className={`${styles.avatar}`} alt="person" src={person_14}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_15}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_16}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_17}/>
                                        </>) : <img alt="person" className={`${styles.personMore}`} src={person_more} onClick={() => this.showMoreAvatar()}/>}
                                    </div>
                                </MediaQuery>
                                <MediaQuery maxDeviceWidth={767.98}>
                                    <div className={`hidden-md ${styles.persons}`}>
                                        <img className={`${styles.avatar}`} alt="person" src={person_1}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_2}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_3}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_4}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_5}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_6}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_7}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_8}/>
                                        {showMore ? (<>
                                        <img className={`${styles.avatar}`} alt="person" src={person_9}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_10}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_11}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_12}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_13}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_14}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_15}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_16}/>
                                        <img className={`${styles.avatar}`} alt="person" src={person_17}/>
                                        </>) : <img alt="person" className={`${styles.personMore}`} src={person_more} onClick={() => this.showMoreAvatar()}/>}
                                    </div>
                                </MediaQuery>
                                <p>
                                    {t('community:invite')}
                                </p>
                                <Button variant="transparent" target="_blank" href="/ambassador"
                                className={styles.button}>{t('community:join_community')}</Button>
                            </Col>
                        </Row>
                    </Container>
                    </Fade>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(Brand);
