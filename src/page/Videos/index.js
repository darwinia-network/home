import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";

import video11 from "../Media/img/video11.png"
import video10 from "../Media/img/video10.png"
import video9 from "../Media/img/video9.png"
import video8 from "../Media/img/video8.png"
import video7 from "../Media/img/video7.png"
import video6 from "../Media/img/video6.png"
import video5 from "../Media/img/video5.png"
import video4 from "../Media/img/video4.png"
import video3 from "../Media/img/video3.png"
import video2 from "../Media/img/video2.png"
import video1 from "../Media/img/video1.png"
import videoIcon from "../Media/img/video-icon.png"

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
                            <img src={videoIcon}  alt="videos"/>
                            <h1 className={`${styles.gradientText}`}>{t('media:videos')}</h1>
                        </div>
                        <Row>
                            <Col md={3} className={styles.content}>
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
                            <Col md={3} className={styles.content}>
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
                            <Col md={3} className={styles.content}>
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
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_8_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video8}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:video_8_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:video_8_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_7_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video7}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:video_7_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:video_7_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_6_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video6}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:video_6_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:video_6_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_5_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video5}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:video_5_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:video_5_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_4_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video4}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:video_4_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:video_4_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_3_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video3}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:video_3_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:video_3_title')}
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_2_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video2}/>
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
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_1_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={video1}/>
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
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(News);
