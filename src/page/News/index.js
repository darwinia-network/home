import React, {Component} from "react";
import {Container, Row, Col, Image, InputGroup, FormControl, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import GradientHeading from "../../components/GradientHeading/GradientHeading";

import news1 from '../Home/img/news/news-1.jpg'
import news2 from '../Home/img/news/news-2.jpg'
import news0 from '../Home/img/news/news-0.jpg'

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
                <PageHeader/>
                <div className={`${styles.news}`}>
                    <Container>
                        <GradientHeading className={`text-center ${styles.fontH1}`}>{t('home_page:newest_title')}</GradientHeading>
                        <div className={styles.lineH1}/>
                        <div>
                            <Row>
                                <Col md={3} className={styles.content}>
                                    <img src={news1}/>
                                    <p><a target="_blank" href={t('home_page:news_link_1')}>{t('home_page:news_title_1')}</a></p>
                                </Col>

                                <Col md={3}  className={styles.content}>
                                    <img src={news2}/>
                                    <p><a target="_blank" href={t('home_page:news_link_2')}>{t('home_page:news_title_2')}</a></p>
                                </Col>
                                <Col md={3} className={styles.content}>
                                    <img src={news0}/>
                                    <p><a target="_blank" href={t('home_page:news_link_3')}>{t('home_page:news_title_3')}</a></p>
                                </Col>

                                <Col md={3}  className={styles.content}>
                                    <img src={news0}/>
                                    <p><a target="_blank" href={t('home_page:news_link_4')}>{t('home_page:news_title_4')}</a></p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(News);
