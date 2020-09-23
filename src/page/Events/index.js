import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";

import events from "../Media/img/events.png"
import event1 from "../Media/img/event1.png"
import event2 from "../Media/img/event2.png"
import event3 from "../Media/img/event3.png"

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
                            <img src={events}  alt="events"/>
                            <h1 className={`${styles.gradientText}`}>{t('media:events')}</h1>
                        </div>
                        <Row>
                            <Col md={3} className={styles.content}>
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
                            <Col md={3} className={styles.content}>
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

                            <Col md={3}  className={styles.content}>
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
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(News);
