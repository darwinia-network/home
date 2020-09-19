import React, {Component} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import i18n from '../../locales/i18n';
import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
// import GradientHeading from "../../components/GradientHeading/GradientHeading";

import banner from './img/banner.png'
import flow_zh from './img/flow_zh.png'
import flow from './img/flow.png'
import media from './img/media.png'

class Brand extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    }

    componentDidMount() {
        archorsComponent()
    }


    render() {
        const {t} = this.props
        return (
            <div>
                <PageHeader transparent={true}/>
                <div className={`${styles.article}`}>
                    <Container>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className={`${styles.content}`}>
                                <h1>{t('ambassador:title')}</h1>
                                <div className={styles.author}>
                                    <span>{t('ambassador:time')}</span>
                                    <span>{t('ambassador:author')}</span>
                                </div>
                                <div className={styles.lineH1}></div>
                                <img alt="banner" className={styles.banner} src={banner}/>
                                <div className={styles.subTitle}>
                                    {t('ambassador:about_title')}
                                </div>
                                <p>{t('ambassador:about_desc')}</p>

                                <div className={styles.subTitle}>
                                    {t('ambassador:why_title')}
                                </div>
                                <p>{t('ambassador:why_desc_1')}</p>
                                <p>{t('ambassador:why_desc_2')}</p>
                                <p>{t('ambassador:why_desc_3')}</p>

                                <div className={styles.subTitle}>
                                    {t('ambassador:who_title')}
                                </div>
                                <p>{t('ambassador:who_desc_1')}</p>
                                <p>{t('ambassador:who_desc_2')}</p>
                                <p>{t('ambassador:who_desc_3')}</p>
                                <p>{t('ambassador:who_desc_4')}</p>
                                <p>{t('ambassador:who_desc_5')}</p>
                                <Button variant="dark" target="_blank" href={t('ambassador:form')}
                                    className={styles.button}>{t('community:dive_slogan')}</Button>

                                <div className={styles.subTitle}>
                                    {t('ambassador:what_title')}
                                </div>
                                <p>{t('ambassador:what_desc_1')}</p>
                                <h3>{t('ambassador:tech')}</h3>
                                <p>{t('ambassador:tech_desc_1')}</p>
                                <div className={styles.subContent}>
                                    <h4>{t('ambassador:grant')}</h4>
                                    <p>{t('ambassador:grant_desc')}</p>
                                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/darwinia-network/collaboration/blob/master/grant/README.md">{t('ambassador:link')}</a>
                                    <h4>{t('ambassador:bounty')}</h4>
                                    <p>{t('ambassador:bounty_desc')}</p>
                                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/darwinia-network/collaboration/blob/master/bounty/README.md">{t('ambassador:link')}</a>
                                </div>
                                <p>{t('ambassador:tech_desc_2')}</p>

                                <h3>{t('ambassador:edu')}</h3>
                                <p>{t('ambassador:edu_desc_1')}</p>
                                <div className={styles.subContent}>
                                    <h4>{t('ambassador:content')}</h4>
                                    <p>{t('ambassador:content_desc')}</p>
                                    <h4>{t('ambassador:meetup')}</h4>
                                    <p>{t('ambassador:meetup_desc')}</p>
                                    <h4>{t('ambassador:translator')}</h4>
                                    <p>{t('ambassador:translator_desc')}</p>
                                    <h4>{t('ambassador:moderator')}</h4>
                                    <p>{t('ambassador:moderator_desc')}</p>
                                    <h4>{t('ambassador:experience')}</h4>
                                    <p>{t('ambassador:experience_desc_1')}</p>
                                    <li>{t('ambassador:experience_desc_2')}</li>
                                    <li>{t('ambassador:experience_desc_3')}</li>
                                </div>

                                <div className={styles.subTitle}>
                                    {t('ambassador:how_title')}
                                </div>
                                <p className={styles.howDesc}>{t('ambassador:how_desc')}</p>
                                {i18n.language.indexOf('en') > -1 ?
                                    <img alt="banner" className={styles.banner} src={flow}/>
                                    :
                                    <img alt="banner" className={styles.banner} src={flow_zh}/>
                                }

                                <div className={styles.subTitle}>
                                    {t('ambassador:benefit_title')}
                                </div>
                                <p>{t('ambassador:benefit_content')}</p>
                                <p>{t('ambassador:benefit_desc_1')}</p>
                                <p>{t('ambassador:benefit_desc_2')}</p>
                                <p>{t('ambassador:benefit_desc_3')}</p>
                                <p>{t('ambassador:benefit_desc_4')}</p>
                                <p>{t('ambassador:benefit_desc_5')}</p>
                                <p>{t('ambassador:benefit_desc_6')}</p>

                                <div className={styles.lineH1}></div>
                                <div>
                                    <h2 className={`${styles.gradientText}`}>
                                        {t('ambassador:more')}
                                    </h2>
                                </div>
                                <ul className={styles.mediaBlocks}>
                                    <li className={styles.mediaBlock}>
                                        <img src={media} alt="media" />
                                        <div className={styles.mediaInfo}>
                                            <span>{t('ambassador:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('ambassador:more_time')}</span>
                                        </div>
                                        <div className={styles.mediaDesc}>
                                            {t('ambassador:more_subtitle')}
                                        </div>
                                    </li>
                                    <li className={styles.mediaBlock}>
                                        <img src={media} alt="media" />
                                        <div className={styles.mediaInfo}>
                                            <span>{t('ambassador:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('ambassador:more_time')}</span>
                                        </div>
                                        <div className={styles.mediaDesc}>
                                            {t('ambassador:more_subtitle')}
                                        </div>
                                    </li>
                                    <li className={styles.mediaBlock}>
                                        <img src={media} alt="media" />
                                        <div className={styles.mediaInfo}>
                                            <span>{t('ambassador:more_title')}</span>
                                            <span className={styles.mediaTime}>{t('ambassador:more_time')}</span>
                                        </div>
                                        <div className={styles.mediaDesc}>
                                            {t('ambassador:more_subtitle')}
                                        </div>
                                    </li>
                                </ul>
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
