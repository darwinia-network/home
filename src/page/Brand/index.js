import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import GradientHeading from "../../components/GradientHeading/GradientHeading";

import downloadBtn from './img/download.png'

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
                <div className={`${styles.brand}`}>
                    <Container>
                        <div>
                            <Row>
                                <Col xs={12}>
                                    <div className={styles.title}>
                                        <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('brand:title')}</h1>
                                    </div>
                                    <p>{t('brand:desc')}</p>
                                    <div className={styles.lineH1}/>
                                </Col>
                                <Col xs={12}>
                                    <div className={styles.subTitle}>
                                        {t('brand:about')}
                                    </div>
                                    <p>
                                        {t('brand:about_desc')}
                                    </p>
                                    <div className={styles.lineH1}/>
                                </Col>
                                <Col xs={12}>
                                    <div className={styles.subTitle}>
                                        {t('brand:logos')}
                                    </div>
                                    <p>
                                        <img alt="download"  className={styles.downloadBtn} src={downloadBtn} />
                                        {t('brand:download')}
                                        <a href="" className={styles.link}>{t('brand:filename')}</a>
                                    </p>
                                </Col>
                            </Row>
                            <Row className={`d-flex justify-content-center`}>
                                <Col xs={6}>
                                ring
                                </Col>
                                <Col xs={6}>
                                kton
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className={styles.lineH1}/>
                                </Col>
                                <Col xs={12}>
                                    <div className={styles.subTitle}>
                                        {t('brand:note')}
                                    </div>
                                    <p>
                                        {t('brand:note_1')}
                                    </p>
                                    <p>
                                        {t('brand:note_2')}
                                    </p>
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
