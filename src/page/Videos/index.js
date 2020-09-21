import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";

import videos from "../Media/img/videos.png"
import newsEthRelay from '../Home/img/news/news-eth-relay.png'

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
                <PageHeader transparent={true}/>
                <div className={`${styles.news}`}>
                    <Container>
                        <div className={styles.title}>
                            <img src={videos}  alt="videos"/>
                            <h1 className={`${styles.gradientText}`}>{t('media:videos')}</h1>
                        </div>
                        <Row>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:video_2_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="videos" src={newsEthRelay}/>
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
                                        <img alt="videos" src={newsEthRelay}/>
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
