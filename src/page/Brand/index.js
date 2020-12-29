import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import Fade from 'react-reveal/Fade';
// import GradientHeading from "../../components/GradientHeading/GradientHeading";

import downloadBtn from './img/download.png'
import darwiniaLogoWithText from './img/logo_text.png'
import darwiniaLogo from './img/logo.png'
import ring from './img/ring.png'
import cring from './img/cring.png'
import kton from './img/kton.png'
import ckton from './img/ckton.png'

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
                <PageHeader transparent={true}/>
                <div className={`${styles.brand}`}>
                    <Container>
                        <div>
                            <Row>
                                <Col xs={12}>
                                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                    <div className={styles.title}>
                                        <h1 className={`${styles.fontH1} ${styles.gradientText}`}>{t('brand:title')}</h1>
                                    </div>
                                    <p>{t('brand:desc')}</p>
                                    </Fade>
                                    <div className={styles.lineH1}/>
                                </Col>
                                <Col xs={12}>
                                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                    <div className={styles.subTitle}>
                                        {t('brand:about')}
                                    </div>
                                    <p>
                                        {t('brand:about_desc')}
                                    </p>
                                    </Fade>
                                    <div className={styles.lineH1}/>
                                </Col>
                                <Col xs={12}>
                                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                    <div className={styles.subTitle}>
                                        {t('brand:logos')}
                                    </div>
                                    <p>
                                        <img alt="download"  className={styles.downloadBtn} src={downloadBtn} />
                                        {t('brand:download')}
                                        <a href="/darwinia_brand.zip" download="darwinia_brand.zip" className={styles.link}>{t('brand:filename')}</a>
                                    </p>
                                    </Fade>
                                </Col>
                                <Col xs={12}>
                                    <div className={styles.margin}></div>
                                </Col>
                            </Row>
                            <Row className={`d-flex justify-content-center`}>
                                <Col xs={6}>
                                    <div className={styles.logoItem}>
                                        <span>{t('brand:darwinia')}</span>
                                        <img className={styles.logo} alt="darwinia_logo" src={darwiniaLogoWithText}></img>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className={styles.logoItem}>
                                        <span>{t('brand:darwinia')}</span>
                                        <img className={styles.logo} alt="darwinia_logo" src={darwiniaLogo}></img>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className={styles.margin}></div>
                                </Col>

                                <Col xs={3}>
                                    <div className={styles.logoItem}>
                                        <span>{t('brand:ring')}</span>
                                        <img className={styles.ring} alt="ring" src={ring}></img>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className={styles.logoItem}>
                                        <span>{t('brand:kton')}</span>
                                        <img className={styles.kton} alt="kton" src={kton}></img>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className={styles.logoItem}>
                                        <span>{t('brand:cring')}</span>
                                        <img className={styles.ring} alt="cring" src={cring}></img>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className={styles.logoItem}>
                                        <span>{t('brand:ckton')}</span>
                                        <img className={styles.kton} alt="ckton" src={ckton}></img>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className={styles.lineH1}/>
                                </Col>
                                <Col xs={12}>
                                    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
                                    <div className={styles.subTitle}>
                                        {t('brand:note')}
                                    </div>
                                    <p>
                                        {t('brand:note_1')}
                                    </p>
                                    <p>
                                        {t('brand:note_2')}
                                    </p>
                                    <p>
                                        {t('brand:note_3')}
                                    </p>
                                    <p>
                                        {t('brand:note_4')}
                                    </p>
                                    <p>
                                        {t('brand:note_5')}
                                    </p>
                                    </Fade>
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
