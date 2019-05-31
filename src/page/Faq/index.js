import React, {Component} from "react";
import {Container, Row, Col, Image, InputGroup, FormControl, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";


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
                <PageHeader/>
                <div className={`${styles.faq}`}>
                    <Container>
                        <h1>FAQs</h1>
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
                        </div>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(Faq);
