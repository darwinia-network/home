import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import news from "../Media/img/news.png"
import news1 from "../Media/img/news1.png"
import news2 from "../Media/img/news2.png"
import news3 from "../Media/img/news3.png"
import news4 from "../Media/img/news4.png"
import news5 from "../Media/img/news5.png"
import news6 from "../Media/img/news6.png"
import news7 from "../Media/img/news7.png"
import news8 from "../Media/img/news8.png"
import news9 from "../Media/img/news9.png"

class News extends Component {
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
                <PageHeader transparent={true} hasHeightinMobile={true}/>
                <div className={`${styles.news}`}>
                    <Container>
                        <div className={styles.title}>
                            <img src={news}  alt="news"/>
                            <h1 className={`${styles.gradientText}`}>{t('media:news')}</h1>
                        </div>
                        <Row>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_9_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news9}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_9_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_9_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_8_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news8}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_8_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_8_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_7_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news7}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_7_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_7_title')}
                                    </div>
                                </a>
                            </Col>

                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_6_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news6}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_6_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_6_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_5_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news5}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_5_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_5_title')}
                                    </div>
                                </a>
                            </Col>

                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_4_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news4}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_4_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_4_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_3_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news3}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_3_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_3_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_2_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news2}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_2_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_2_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_1_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="news" src={news1}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:news_1_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:news_1_title')}
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(News);
