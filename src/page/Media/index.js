import React, {Component} from "react";
import {Container, Row, Col, Button, Carousel} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
// import GradientHeading from "../../components/GradientHeading/GradientHeading";
import recom1 from "../Media/img/recom1.jpeg"
import recom2 from "../Media/img/recom2.png"
import recom3 from "../Media/img/recom3.png"
import recom4 from "../Media/img/recom4.png"
import recom5 from "../Media/img/recom5.jpeg"
import reports from "./img/reports.png"
import report5 from "../Media/img/report5.png"
import report6 from "../Media/img/report6.png"
import report7 from "../Media/img/report7.png"
import report8 from "../Media/img/report8.png"
import news from "./img/news.png"
import news5 from "../Media/img/news5.png"
import news6 from "../Media/img/news6.png"
import news7 from "../Media/img/news7.png"
import news8 from "../Media/img/news8.png"
import events from "./img/events.png"
import event1 from "../Media/img/event1.png"
import event2 from "../Media/img/event2.jpeg"
import event3 from "../Media/img/event3.jpeg"
import videos from "./img/videos.png"
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
                                    <Carousel controls={false} interval={0}>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                <Container>
                                                    <Row>
                                                        <Col xs={9}>
                                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_5_link')}>
                                                                <img alt="news" src={recom5}/>
                                                            </a>
                                                        </Col>
                                                        <Col xs={3}>
                                                            <div className={styles.mediaDesc}>
                                                                <div className={styles.mediaInfo}>
                                                                    <span>{t('media:recom_5_tag')}</span>
                                                                    <span className={styles.mediaTime}>{t('media:recom_5_time')}</span>
                                                                </div>
                                                                <div className={styles.mediaDesc}>
                                                                    {t('media:recom_5_title')}
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <div className={styles.carouselItem}>
                                                <Container>
                                                    <Row>
                                                        <Col xs={9}>
                                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_4_link')}>
                                                                <img alt="news" src={recom4}/>
                                                            </a>
                                                        </Col>
                                                        <Col xs={3}>
                                                            <div className={styles.mediaDesc}>
                                                                <div className={styles.mediaInfo}>
                                                                    <span>{t('media:recom_4_tag')}</span>
                                                                    <span className={styles.mediaTime}>{t('media:recom_4_time')}</span>
                                                                </div>
                                                                <div className={styles.mediaDesc}>
                                                                    {t('media:recom_4_title')}
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={9}>
                                                                <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_3_link')}>
                                                                    <img alt="news" src={recom3}/>
                                                                </a>
                                                            </Col>
                                                            <Col xs={3}>
                                                                <div className={styles.mediaDesc}>
                                                                    <div className={styles.mediaInfo}>
                                                                        <span>{t('media:recom_3_tag')}</span>
                                                                        <span className={styles.mediaTime}>{t('media:recom_3_time')}</span>
                                                                    </div>
                                                                    <div className={styles.mediaDesc}>
                                                                        {t('media:recom_3_title')}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={9}>
                                                                <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_2_link')}>
                                                                    <img alt="news" src={recom2}/>
                                                                </a>
                                                            </Col>
                                                            <Col xs={3}>
                                                                <div className={styles.mediaDesc}>
                                                                    <div className={styles.mediaInfo}>
                                                                        <span>{t('media:recom_2_tag')}</span>
                                                                        <span className={styles.mediaTime}>{t('media:recom_2_time')}</span>
                                                                    </div>
                                                                    <div className={styles.mediaDesc}>
                                                                        {t('media:recom_2_title')}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={9}>
                                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_1_link')}>
                                                                    <img alt="news" src={recom1}/>
                                                                </a>
                                                            </Col>
                                                            <Col xs={3}>
                                                                <div className={styles.mediaDesc}>
                                                                    <div className={styles.mediaInfo}>
                                                                        <span>{t('media:recom_1_tag')}</span>
                                                                        <span className={styles.mediaTime}>{t('media:recom_1_time')}</span>
                                                                    </div>
                                                                    <div className={styles.mediaDesc}>
                                                                        {t('media:recom_1_title')}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className={`${styles.section} ${styles.reports}`}>
                                    <div className={styles.title}>
                                        <img src={reports}  alt="reports"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:reports')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_8_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="reports" src={report8}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:report_8_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:report_8_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_7_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="reports" src={report7}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:report_7_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:report_7_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_6_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="reports" src={report6}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:report_6_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:report_6_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_5_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="reports" src={report5}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:report_5_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:report_5_title')}
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
                                        <Col md={3} className={styles.mediaContent}>
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
                                        <Col md={3}  className={styles.mediaContent}>
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
                                        <Col md={3} className={styles.mediaContent}>
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
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:event_3_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="events" src={event3}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:event_3_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:event_3_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:event_2_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="events" src={event2}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:event_2_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:event_2_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:event_1_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="events" src={event1}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:event_1_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:event_1_title')}
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
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_2_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="videos" src={placeholder2}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:video_2_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:video_2_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_1_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="videos" src={placeholder2}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:video_1_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:video_1_title')}
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