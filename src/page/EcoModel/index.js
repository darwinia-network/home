/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import { Container, Row, Col, InputGroup, FormControl, Button, Form, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { PageHeader } from '../../components/PageHeader'
import { PageFooter } from '../../components/PageFooter'
// import { GradientHeading } from '../../components/GradientHeading'

import styles from './style.module.scss'

// import roadmapCur from './img/roadmap/roadmap-cur.png'
// import roadmapLine from './img/roadmap/roadmap-line.png'
// import roadmapItem1 from './img/roadmap/roadmap-item-1.png'
// import roadmapItem2 from './img/roadmap/roadmap-item-2.png'
// import roadmapItem3 from './img/roadmap/roadmap-item-3.png'
// import roadmapItem4 from './img/roadmap/roadmap-item-4.png'
// import roadmapItem5 from './img/roadmap/roadmap-item-5.png'
// import roadmapItem6 from './img/roadmap/roadmap-item-6.png'
// import roadmapMobile from './img/roadmap-m.png'

import archorsComponent from '../../components/anchorsComponent'
import { withTranslation } from "react-i18next";
// import i18n from '../../locales/i18n';

class Home extends Component {

    componentDidMount() {
        archorsComponent();
    }

    render() {
        const { t } = this.props
        return (
            <div>
                <PageHeader href="#top" transparent={true} />
                <div className={styles.themeContainer}>
                    <Container>
                        <Row className={`${styles.promoteContentArea} d-flex justify-content-center`}>
                            <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                                <h1 className={`text-center reveal-h1 ${styles.fontH1} ${styles.gradientText}`}>{t('home_page:theme_title')}</h1>
                                <p>{t('home_page:theme_desc')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <PageFooter></PageFooter>
            </div>
        );
    }
}

export default withTranslation()(Home);
