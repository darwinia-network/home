import React, {Component} from "react";
import {Container, Row, Col, Button, Popover, OverlayTrigger} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
// import GradientHeading from "../../components/GradientHeading/GradientHeading";

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

import newPerson from "./img/new.png"
import eduPerson from "./img/education.png"
import techPerson from "./img/technology.png"

import person_1 from "./img/person_1.png"
import person_2 from "./img/person_2.png"
import person_3 from "./img/person_3.png"
import person_4 from "./img/person_4.png"
import person_5 from "./img/person_5.png"
import person_6 from "./img/person_6.png"
import person_7 from "./img/person_7.png"

class Brand extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    }

    componentDidMount() {
        archorsComponent()
    }

    renderTooltip = props => {
        const {t} = this.props
        return <Popover {...props} className={styles.wxContainer}>
            <img alt="wx" src={wx}/>
            <p>{t("footer:scan")}</p>
            <p>{t("footer:follow")}</p>
        </Popover>
    }


    render() {
        const {t} = this.props
        return (
            <div className={`${styles.community}`}>
                <PageHeader transparent={true}/>
                <div className={`${styles.dive}`}>
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
                                    <Button variant="transparent" target="_blank" href={t('ambassador:form')}
                                    className={styles.button}>{t('community:dive_slogan')}</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <div className={`${styles.general}`}>
                    <Container>
                        <div>
                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={10} className={`${styles.content}`}>
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
                                                11,824
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
                                                11,478
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
                                                281
                                            </div>
                                            <div className={styles.mediaName}>
                                                {t('community:medium')}
                                            </div>
                                        </a>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{show: 100, hide: 1000}}
                                            overlay={this.renderTooltip}
                                        >
                                            <div className={`${styles.mediaBlock} ${styles.wechat}`}>
                                                <div className={styles.mediaLogo}>
                                                    <img alt="wechat" src={wechat_white}/>
                                                    <img className={styles.hoverImg} alt="wechat" src={wechat}/>
                                                </div>
                                                <div className={styles.mediaNum}>
                                                    9,645
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
                                                68
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
                    <Container>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className={`${styles.content}`}>
                                <div className={'text-center'}>
                                    <h1 className={`${styles.gradientText}`}>
                                        {t('community:contribute')}
                                    </h1>
                                </div>
                                <div className={styles.contributeBlocks}>
                                    <div className={`${styles.contributeBlock} ${styles.new}`}>
                                        <div className={styles.avatar}>
                                            <img alt="new" src={newPerson}/>
                                            <div>{t('community:new')}</div>
                                        </div>
                                        <div className={styles.section}>
                                            {/* <div className={styles.title}>{t('community:technology')}</div> */}
                                            <p>{t('community:new_intro')}</p>
                                            <div className={styles.buttons}>
                                                <Button variant="dark" target="_blank" href={t('community:darwinia_wiki_link')}
                                                    className={styles.button}>{t('community:darwinia_wiki')}</Button>
                                                <Button variant="dark" target="_blank" href="/faq"
                                                    className={styles.button}>{t('community:faq')}</Button>
                                                <Button variant="white" target="_blank" href={t('ambassador:form')}
                                                    className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.contributeBlock} ${styles.technology}`}>
                                        <div className={styles.avatar}>
                                            <img alt="technology" src={techPerson}/>
                                            <div>{t('community:technology')}</div>
                                        </div>
                                        <div className={styles.section}>
                                            <div className={styles.title}>{t('community:grant_program')}</div>
                                            <p>{t('community:grant_intro')}</p>
                                            <div className={styles.buttons}>
                                                <Button variant="white" target="_blank" href={t('ambassador:form')}
                                                    className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                            </div>

                                            <div className={styles.title}>{t('community:bounty_program')}</div>
                                            <p>{t('community:bounty_intro')}</p>
                                            <div className={styles.buttons}>
                                                <Button variant="white" target="_blank" href={t('ambassador:form')}
                                                    className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.contributeBlock} ${styles.education}`}>
                                        <div className={styles.avatar}>
                                            <img alt="educator" src={eduPerson}/>
                                            <div>{t('community:education')}</div>
                                        </div>
                                        <div className={styles.section}>
                                            <div className={styles.title}>{t('community:content_creator')}</div>
                                            <p>{t('community:content_intro')}</p>

                                            <div className={styles.title}>{t('community:meetup_organizer')}</div>
                                            <p>{t('community:meetup_intro')}</p>

                                            <div className={styles.title}>{t('community:translator')}</div>
                                            <p>{t('community:translator_intro')}</p>

                                            <div className={styles.title}>{t('community:moderator')}</div>
                                            <p>{t('community:moderator_intro')}</p>

                                            <div className={styles.title}>{t('community:experience_officer')}</div>
                                            <p>{t('community:experience_intro')}</p>

                                            <div className={styles.buttons}>
                                                <Button variant="white" target="_blank" href={t('ambassador:form')}
                                                    className={`${styles.button} ${styles.buttonWhite}`}>{t('community:get_started')}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={styles.contributors}>
                    <Container>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className={`${styles.content}`}>
                                <h1 className={styles.title}>
                                    {t('community:contributors')}
                                </h1>
                                <div className={`${styles.persons}`}>
                                    <img alt="person" src={person_1}/>
                                    <img alt="person" src={person_2}/>
                                    <img alt="person" src={person_3}/>
                                    <img alt="person" src={person_4}/>
                                    <img alt="person" src={person_5}/>
                                    <img alt="person" src={person_6}/>
                                    <img alt="person" src={person_7}/>
                                </div>
                                <p>
                                    {t('community:invite')}
                                </p>
                                <Button variant="transparent" target="_blank" href="/ambassador"
                                className={styles.button}>{t('community:join_community')}</Button>
                            </Col>
                        </Row>
                    </Container>

                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(Brand);
