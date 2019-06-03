import React, {Component} from "react";
import {Container, Row, Col, OverlayTrigger, Popover} from 'react-bootstrap'
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'

import share1 from './img/share-1.png'
import share2 from './img/share-2.png'
import share3 from './img/share-3.png'
import share4 from './img/share-4.png'
import share5 from './img/share-5.png'
import share6 from './img/share-6.png'
import share7 from './img/share-7.png'
import share8 from './img/share-8.png'
import wx from './img/wx.jpg'




class PageFooter extends Component {

    goto = (type, e) => {
        switch (type) {
            case 'medium':
                window.open('https://medium.com/@DarwiniaNetwork');
                return;
            case 'tg':
                window.open('https://t.me/DarwiniaNetwork');
                return;
            case 'twitter':
                window.open('https://twitter.com/DarwiniaNetwork');
                return;
            case 'github':
                window.open('https://github.com/darwinia-network');
                return;
            case 'bihu':
                window.open('https://bihu.com/people/1100617');
                return;
            case 'weibo':
                window.open('http://weibo.com/DarwiniaNetwork');
                return;
            case 'wx':
                // window.open('https://medium.com/@DarwiniaNetwork');
                console.log(e.pageX)
                return;
            case 'email':
                window.open('mailto:hello@darwinia.network');
                return;
        }
    }

    renderTooltip = props => {
        const {t} = this.props
        return <Popover {...props} className={styles.wxContainer}>
            <img src={wx} />
            <p>{t("footer:scan")}</p>
            <p>{t("footer:follow")}</p>
        </Popover>
    }

    render() {
        const {t} = this.props

        return (
            <div className={styles.navFooter}>
                <Container>
                    <Row className={styles.mdContent}>
                        <Col md={{span: 4, order: 1}} sm={{span: 12, order: 2}}>
                            &#169;2019 darwinia.network
                        </Col>
                        <Col md={{span: 8, order: 2}} sm={{span: 12, order: 1}}
                             className={`text-right ${styles.shareLogo}`}>
                            <img onClick={() => {this.goto('medium')}} src={share1}/>
                            <img onClick={() => {this.goto('tg')}} src={share2}/>
                            <img onClick={() => {this.goto('twitter')}} src={share3}/>
                            <img onClick={() => {this.goto('github')}} src={share4}/>
                            <img onClick={() => {this.goto('bihu')}} src={share5}/>
                            <img onClick={() => {this.goto('weibo')}} src={share6}/>
                            <OverlayTrigger
                                placement="top-end"
                                delay={{ show: 100, hide: 1000 }}
                                overlay={this.renderTooltip}
                            >
                                <img onClick={(e) => {this.goto('wx',e)}} src={share7}/>
                            </OverlayTrigger>
                            <img onClick={() => {this.goto('email')}} src={share8}/>
                        </Col>
                    </Row>

                    <Row className={styles.xsContent}>
                        <Col className={`text-center  ${styles.shareLogo}`}>
                            <div className={styles.logoContent}>
                                <img  onClick={() => {this.goto('medium')}} src={share1}/>
                                <img onClick={() => {this.goto('tg')}} src={share2}/>
                                <img onClick={() => {this.goto('twitter')}} src={share3}/>
                                <img onClick={() => {this.goto('github')}}  src={share4}/>
                            </div>
                            <div className={styles.logoContent}>
                                <img onClick={() => {this.goto('bihu')}} src={share5}/>
                                <img onClick={() => {this.goto('weibo')}} src={share6}/>
                                <img onClick={() => {this.goto('wx')}} src={share7}/>
                                <img onClick={() => {this.goto('email')}} src={share8}/>
                            </div>
                        </Col>
                        <Col className={`text-center ${styles.copyright}`}>
                            &#169;2019 darwinia.network
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default withTranslation()(PageFooter);
