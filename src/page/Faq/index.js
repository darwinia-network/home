import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";

import report8 from "../Media/img/report8.png"
import news8 from "../Media/img/news8.png"
import event3 from "../Media/img/event3.png"


class Faq extends Component {
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
                <div className={`${styles.faq}`}>
                    <Container>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                                <div className={styles.title}>
                                    <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('faq_page:title')}</h1>
                                </div>
                                <div className={styles.lineH1}></div>

                                <h4>{t('faq_page:faq_1_title')}</h4>
                                <p>{t('faq_page:faq_1_content_1')}</p>
                                <p>{t('faq_page:faq_1_content_2')}</p>

                                <h4>{t('faq_page:faq_2_title')}</h4>
                                <p>{t('faq_page:faq_2_content_1')}</p>
                                <p>{t('faq_page:faq_2_content_2')}</p>
                                <p>{t('faq_page:faq_2_content_3')}</p>

                                <h4>{t('faq_page:faq_3_title')}</h4>
                                <p>{t('faq_page:faq_3_content')}</p>

                                <h4>{t('faq_page:faq_4_title')}</h4>
                                <p>{t('faq_page:faq_4_content')}</p>
                                
                                <h4>{t('faq_page:faq_5_title')}</h4>
                                <p>{t('faq_page:faq_5_content_1')}</p>
                                <p>{t('faq_page:faq_5_content_2')}</p>
                                
                                <h4>{t('faq_page:faq_6_title')}</h4>
                                <p>{t('faq_page:faq_6_content')}</p>

                                <h4>{t('faq_page:faq_7_title')}</h4>
                                <p>{t('faq_page:faq_7_content')}</p>

                                <h4>{t('faq_page:faq_8_title')}</h4>
                                <p>{t('faq_page:faq_8_content')}</p>

                                <h4>{t('faq_page:faq_9_title')}</h4>
                                <p>{t('faq_page:faq_9_content_1')}</p>
                                <p>{t('faq_page:faq_9_content_2')}</p>

                                <h4>{t('faq_page:faq_10_title')}</h4>
                                <p>{t('faq_page:faq_10_content_1')}</p>
                                <p>{t('faq_page:faq_10_content_2')}</p>
                                <p>{t('faq_page:faq_10_content_3')}</p>

                                <h4>{t('faq_page:faq_11_title')}</h4>
                                <p>{t('faq_page:faq_11_content')}</p>

                                <h4>{t('faq_page:faq_12_title')}</h4>
                                <p>{t('faq_page:faq_12_content')}</p>

                                <h4>{t('faq_page:faq_13_title')}</h4>
                                <p>{t('faq_page:faq_13_content')}</p>

                                <h4>{t('faq_page:faq_14_title')}</h4>
                                <p>{t('faq_page:faq_14_content')}</p>
                                <p><a target="_blank" rel="noopener noreferrer" href={t('faq_page:faq_14_content_link')}>{t('faq_page:faq_14_content_link')}</a></p>

                                <h4>{t('faq_page:faq_15_title')}</h4>
                                <p>{t('faq_page:faq_15_content')}</p>

                                <h4>{t('faq_page:faq_16_title')}</h4>
                                <p>{t('faq_page:faq_16_content_1')}</p>
                                <p>{t('faq_page:faq_16_content_2')}</p>
                                <p>{t('faq_page:faq_16_content_3')}</p>
                                <p>{t('faq_page:faq_16_content_4')}</p>
                                <p>{t('faq_page:faq_16_content_5')}</p>
                                <p>{t('faq_page:faq_16_content_6')}</p>
                                <p>{t('faq_page:faq_16_content_7')}</p>
                                <p>{t('faq_page:faq_16_content_8')}</p>
                                <p>{t('faq_page:faq_16_content_9')}</p>
                                <p>{t('faq_page:faq_16_content_10')}</p>
                                <p>{t('faq_page:faq_16_content_11')}</p>

                                <h4>{t('faq_page:faq_17_title')}</h4>
                                <p>{t('faq_page:faq_17_content')}</p>

                                <div className={styles.lineH1}></div>
                                <div>
                                    <h2 className={`${styles.gradientText}`}>
                                        {t('ambassador:more')}
                                    </h2>
                                </div>
                                <ul className={styles.mediaBlocks}>
                                    <li className={styles.mediaBlock}>
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
                                    </li>
                                    <li className={styles.mediaBlock}>
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
                                    </li>
                                    <li className={styles.mediaBlock}>
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

export default withTranslation()(Faq);
