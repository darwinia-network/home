import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import GradientHeading from "../../components/GradientHeading/GradientHeading";


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
                <PageHeader/>
                <div className={`${styles.faq}`}>
                    <Container>
                        <GradientHeading className={`text-center ${styles.fontH1}`}>FAQs</GradientHeading>
                        <div className={styles.lineH1}/>
                        <div>
                            <Row>
                                <Col md={6} className={styles.content}>
                                    <h3>{t('faq_page:faq_1_title')}</h3>
                                    <p>{t('faq_page:faq_1_content')}</p>
                                </Col>

                                <Col  md={6}  className={styles.content}>
                                    <h3>{t('faq_page:faq_2_title')}</h3>
                                    <p>{t('faq_page:faq_2_content')}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className={styles.content}>
                                    <h3>{t('faq_page:faq_3_title')}</h3>
                                    <p dangerouslySetInnerHTML={{__html: t('faq_page:faq_3_content')}}/>
                                </Col>

                                <Col  md={6}  className={styles.content}>
                                    <h3>{t('faq_page:faq_4_title')}</h3>
                                    <p>{t('faq_page:faq_4_content')}</p>
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

export default withTranslation()(Brand);
