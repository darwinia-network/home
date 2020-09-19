import React, {Component} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
// import GradientHeading from "../../components/GradientHeading/GradientHeading";
import reports from "./img/reports.png"
import news from "./img/news.png"
import events from "./img/events.png"
import videos from "./img/videos.png"
import placeholder1 from "./img/placeholder_1.png"
import placeholder2 from "./img/placeholder_2.png"
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
                <div className={`${styles.media}`}>
                    <Container>
                        <Row>
                            <Col xs={12} className={`${styles.content}`}>
                                <div className={styles.carousel}>
                                </div>
                                <div className={`${styles.section} ${styles.reports}`}>
                                    <div className={styles.title}>
                                        <img src={reports}  alt="reports"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:reports')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_eth_relay')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_1')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_2')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_3')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/reports"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
                                <div className={`${styles.section} ${styles.news}`}>
                                    <div className={styles.title}>
                                        <img src={news}  alt="news"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:news')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_eth_relay')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_1')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_2')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_3')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/news"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
                                <div className={`${styles.section} ${styles.events}`}>
                                    <div className={styles.title}>
                                        <img src={events}  alt="events"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:events')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_eth_relay')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_1')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_2')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_3')}>
                                                <img alt="news" src={placeholder1}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/events"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
                                <div className={`${styles.section} ${styles.videos}`}>
                                    <div className={styles.title}>
                                        <img src={videos}  alt="videos"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:videos')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_eth_relay')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_1')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_2')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_3')}>
                                                <img alt="news" src={placeholder2}/>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:more_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:more_subtitle')}
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/videos"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
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
