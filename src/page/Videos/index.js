import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";

import videos from "../Media/img/videos.png"
import news1 from '../Home/img/news/news-1.jpg'
import news2 from '../Home/img/news/news-2.jpg'
import news0 from '../Home/img/news/news-0.jpg'
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
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_eth_relay')}>
                                    <img alt="news" src={newsEthRelay}/>
                                    <p>{t('home_page:news_title_eth_relay')}</p>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_1')}>
                                    <img alt="news" src={news1}/>
                                    <p>{t('home_page:news_title_1')}</p>
                                </a>
                            </Col>

                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_2')}>
                                    <img alt="news" src={news2}/>
                                    <p>{t('home_page:news_title_2')}</p>
                                </a>
                            </Col>
                            <Col md={3} className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_3')}>
                                    <img alt="news" src={news0}/>
                                    <p>{t('home_page:news_title_3')}</p>
                                </a>
                            </Col>

                            <Col md={3}  className={styles.content}>
                                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={t('home_page:news_link_4')}>
                                    <img alt="news" src={news0}/>
                                    <p>{t('home_page:news_title_4')}</p>
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
