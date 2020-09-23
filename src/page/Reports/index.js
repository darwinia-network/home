import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";

import reports from "../Media/img/reports.png"
import report1 from "../Media/img/report1.png"
import report2 from "../Media/img/report2.png"
import report3 from "../Media/img/report3.png"
import report4 from "../Media/img/report4.png"
import report5 from "../Media/img/report5.png"
import report6 from "../Media/img/report6.png"
import report7 from "../Media/img/report7.png"
import report8 from "../Media/img/report8.png"

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
                            <img src={reports}  alt="reports"/>
                            <h1 className={`${styles.gradientText}`}>{t('media:reports')}</h1>
                        </div>
                        <Row>
                            <Col md={3} className={styles.content}>
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
                            <Col md={3} className={styles.content}>
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

                            <Col md={3}  className={styles.content}>
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
                            <Col md={3} className={styles.content}>
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

                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_4_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="reports" src={report4}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:report_4_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:report_4_title')}
                                    </div>
                                </a>
                            </Col>

                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_3_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="reports" src={report3}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:report_3_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:report_3_title')}
                                    </div>
                                </a>
                            </Col>

                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_2_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="reports" src={report2}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:report_2_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:report_2_title')}
                                    </div>
                                </a>
                            </Col>

                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('media:report_1_link')}>
                                    <div className={styles.imgRatio}>
                                        <img alt="reports" src={report1}/>
                                    </div>
                                    <div className={styles.mediaInfo}>
                                        <span>{t('media:more_title')}</span>
                                        <span className={styles.mediaTime}>{t('media:report_1_time')}</span>
                                    </div>
                                    <div className={styles.mediaDesc}>
                                        {t('media:report_1_title')}
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
