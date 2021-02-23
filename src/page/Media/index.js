import React, {Component} from "react";
import {Container, Row, Col, Button, Carousel} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import Fade from 'react-reveal/Fade';

// import GradientHeading from "../../components/GradientHeading/GradientHeading";
import recom1 from "../Media/img/recom1.png"
import recom2 from "../Media/img/recom2.png"
import recom3 from "../Media/img/recom3.png"
import recom4 from "../Media/img/recom4.png"
import recom5 from "../Media/img/recom5.png"
import recom6 from "../Media/img/recom6.png"
import reports from "./img/reports.png"
import report6 from "../Media/img/report6.png"
import report7 from "../Media/img/report7.png"
import report8 from "../Media/img/report8.png"
import report9 from "../Media/img/report9.png"
import news from "./img/news.png"
import news27 from "../Media/img/news27.png"
import news28 from "../Media/img/news28.png"
import news29 from "../Media/img/news29.png"
import news30 from "../Media/img/news30.png"
import events from "./img/events.png"
import event1 from "../Media/img/event1.png"
import event2 from "../Media/img/event2.png"
import event3 from "../Media/img/event3.png"
import video12 from "../Media/img/video12.png"
import video11 from "../Media/img/video11.png"
import video10 from "../Media/img/video10.png"
import video9 from "../Media/img/video9.png"
import videoIcon from "../Media/img/video-icon.png"
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
                <PageHeader transparent={true} hasHeightinMobile={true}/>
                <div className={`${styles.media}`}>
                    <div className={`hidden-md media-carousel ${styles.carousel}`}>
                        <Carousel controls={false} interval={4000}>
                            <Carousel.Item>
                                <div className={styles.carouselItem}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_5_link')}>
                                                <img alt="news" src={recom5}/>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className={styles.mediaDetail}>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:recom_5_tag')}</span>
                                                    <span className={styles.mediaTime}>{t('media:recom_5_time')}</span>
                                                </div>
                                                <div className={styles.mediaTitle}>
                                                    <div className={styles.text}>{t('media:recom_5_title')}</div>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:recom_5_desc')}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={styles.carouselItem}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_4_link')}>
                                                <img alt="news" src={recom4}/>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className={styles.mediaDetail}>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:recom_4_tag')}</span>
                                                    <span className={styles.mediaTime}>{t('media:recom_4_time')}</span>
                                                </div>
                                                <div className={styles.mediaTitle}>
                                                    {t('media:recom_4_title')}
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:recom_4_desc')}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={styles.carouselItem}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_3_link')}>
                                                <img alt="news" src={recom3}/>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className={styles.mediaDetail}>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:recom_3_tag')}</span>
                                                    <span className={styles.mediaTime}>{t('media:recom_3_time')}</span>
                                                </div>
                                                <div className={styles.mediaTitle}>
                                                    {t('media:recom_3_title')}
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:recom_3_desc')}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>    
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={styles.carouselItem}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                            <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_2_link')}>
                                                <img alt="news" src={recom2}/>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className={styles.mediaDetail}>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:recom_2_tag')}</span>
                                                    <span className={styles.mediaTime}>{t('media:recom_2_time')}</span>
                                                </div>
                                                <div className={styles.mediaTitle}>
                                                    {t('media:recom_2_title')}
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:recom_2_desc')}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>    
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={styles.carouselItem}>
                                    <Row>
                                        <Col xs={12} md={9}>
                                        <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_1_link')}>
                                                <img alt="news" src={recom1}/>
                                            </a>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <div className={styles.mediaDetail}>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:recom_1_tag')}</span>
                                                    <span className={styles.mediaTime}>{t('media:recom_1_time')}</span>
                                                </div>
                                                <div className={styles.mediaTitle}>
                                                    {t('media:recom_1_title')}
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:recom_1_desc')}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <Container>
                        <Row>
                            <Col xs={12} className={`${styles.content}`}>
                                <div className={`hidden-xs media-carousel ${styles.carousel} ${styles.pcCarousel}`}>
                                    <Carousel controls={false} interval={4000}>
                                    <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                <Row>
                                                    <Col xs={12} md={9}>
                                                        <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_6_link')}>
                                                            <img alt="news" src={recom6}/>
                                                            <div className={styles.mediaTitle}>
                                                                <div className={styles.bg}></div>
                                                                <div className={styles.text}>{t('media:recom_6_title')}</div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xs={12} md={3}>
                                                        <div className={styles.mediaDetail}>
                                                            <div className={styles.mediaInfo}>
                                                                <span>{t('media:recom_6_tag')}</span>
                                                                <span className={styles.mediaTime}>{t('media:recom_6_time')}</span>
                                                            </div>
                                                            <div className={styles.mediaDesc}>
                                                                {t('media:recom_6_desc')}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>    
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                <Row>
                                                    <Col xs={12} md={9}>
                                                        <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_5_link')}>
                                                            <img alt="news" src={recom5}/>
                                                            <div className={styles.mediaTitle}>
                                                                <div className={styles.bg}></div>
                                                                <div className={styles.text}>{t('media:recom_5_title')}</div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xs={12} md={3}>
                                                        <div className={styles.mediaDetail}>
                                                            <div className={styles.mediaInfo}>
                                                                <span>{t('media:recom_5_tag')}</span>
                                                                <span className={styles.mediaTime}>{t('media:recom_5_time')}</span>
                                                            </div>
                                                            <div className={styles.mediaDesc}>
                                                                {t('media:recom_5_desc')}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                <Row>
                                                    <Col xs={12} md={9}>
                                                        <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_4_link')}>
                                                            <img alt="news" src={recom4}/>
                                                            <div className={styles.mediaTitle}>
                                                                <div className={styles.bg}></div>
                                                                <div className={styles.text}>{t('media:recom_4_title')}</div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xs={12} md={3}>
                                                        <div className={styles.mediaDetail}>
                                                            <div className={styles.mediaInfo}>
                                                                <span>{t('media:recom_4_tag')}</span>
                                                                <span className={styles.mediaTime}>{t('media:recom_4_time')}</span>
                                                            </div>
                                                            <div className={styles.mediaDesc}>
                                                                {t('media:recom_4_desc')}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                <Row>
                                                    <Col xs={12} md={9}>
                                                        <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_3_link')}>
                                                            <img alt="news" src={recom3}/>
                                                            <div className={styles.mediaTitle}>
                                                                <div className={styles.bg}></div>
                                                                <div className={styles.text}>{t('media:recom_3_title')}</div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xs={12} md={3}>
                                                        <div className={styles.mediaDetail}>
                                                            <div className={styles.mediaInfo}>
                                                                <span>{t('media:recom_3_tag')}</span>
                                                                <span className={styles.mediaTime}>{t('media:recom_3_time')}</span>
                                                            </div>
                                                            <div className={styles.mediaDesc}>
                                                                {t('media:recom_3_desc')}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>    
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={styles.carouselItem}>
                                                <Row>
                                                    <Col xs={12} md={9}>
                                                    <a target="_blank" rel="noopener noreferrer" className={styles.imgRatio} href={t('media:recom_1_link')}>
                                                            <img alt="news" src={recom1}/>
                                                            <div className={styles.mediaTitle}>
                                                                <div className={styles.bg}></div>
                                                                <div className={styles.text}>{t('media:recom_1_title')}</div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xs={12} md={3}>
                                                        <div className={styles.mediaDetail}>
                                                            <div className={styles.mediaInfo}>
                                                                <span>{t('media:recom_1_tag')}</span>
                                                                <span className={styles.mediaTime}>{t('media:recom_1_time')}</span>
                                                            </div>
                                                            <div className={styles.mediaDesc}>
                                                                {t('media:recom_1_desc')}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                <div className={`${styles.section} ${styles.news}`}>
                                    <div className={styles.title}>
                                        <img src={news}  alt="news"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:news')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3}  className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_30_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="news" src={news30}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:news_30_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:news_30_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_29_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="news" src={news29}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:news_29_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:news_29_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_28_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="news" src={news28}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:news_28_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:news_28_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:news_27_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="news" src={news27}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:news_27_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:news_27_title')}
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/news"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                <div className={`${styles.section} ${styles.reports}`}>
                                    <div className={styles.title}>
                                        <img src={reports}  alt="reports"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:reports')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_9_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="reports" src={report9}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:report_9_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:report_9_title')}
                                                </div>
                                            </a>
                                        </Col>
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
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/reports"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
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
                                </Fade>
                                <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                <div className={`${styles.section} ${styles.videos}`}>
                                    <div className={styles.title}>
                                        <img src={videoIcon}  alt="videos"/>
                                        <h1 className={`${styles.gradientText}`}>{t('media:videos')}</h1>
                                    </div>
                                    <Row>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_12_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="videos" src={video12}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:video_12_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:video_12_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_11_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="videos" src={video11}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:video_11_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:video_11_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_10_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="videos" src={video10}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:video_10_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:video_10_title')}
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md={3} className={styles.mediaContent}>
                                            <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_9_link')}>
                                                <div className={styles.imgRatio}>
                                                    <img alt="videos" src={video9}/>
                                                </div>
                                                <div className={styles.mediaInfo}>
                                                    <span>{t('media:more_title')}</span>
                                                    <span className={styles.mediaTime}>{t('media:video_9_time')}</span>
                                                </div>
                                                <div className={styles.mediaDesc}>
                                                    {t('media:video_9_title')}
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <div className={`text-center`}>
                                        <Button variant="dark" target="_blank" href="/videos"
                                        className={styles.button}>{t('media:view_all')}</Button>
                                    </div>
                                </div>
                                </Fade>
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
