import React, {Component} from "react";
import {Navbar, NavDropdown, Dropdown, Nav, Form, Container, Row, Col} from 'react-bootstrap'
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import {withTranslation} from "react-i18next";

import styles from './style.module.scss'
import logo from './img/logo-darwinia.png'
import closeIcon from './img/close.png'
import github from './img/github.svg'


class CustomToggle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        document.querySelector('body').click()
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <div className="nav-link" onMouseEnter={this.handleClick} onClick={this.handleClick}>
                {this.props.children}
            </div>
        );
    }
}

class PageHeader extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    targetElement = null;

    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        this.targetElement = document.querySelector('body');
    }

    componentWillUnmount() {
        // 5. Useful if we have called disableBodyScroll for multiple target elements,
        // and we just want a kill-switch to undo all that.
        // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
        // clicks a link which takes him/her to a different page within the app.
        clearAllBodyScrollLocks();
    }

    changeLng = lng => {
        const {i18n} = this.props;

        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    }

    showTargetElement = () => {
        // ... some logic to show target element

        // 3. Disable body scroll
        this.setState({open: true})
        disableBodyScroll(this.targetElement);
    };

    hideTargetElement = () => {
        // ... some logic to hide target element

        // 4. Re-enable body scroll
        this.setState({open: false})
        enableBodyScroll(this.targetElement);
    }

    render() {
        const {t, transparent, i18n} = this.props
        const {open} = this.state
        return (
            <div>
                <Navbar expand="lg" className={`${styles.Navbar} ${transparent ? null : styles.NavBg} cs-header`}>
                    <Navbar.Brand href="/">
                        <img className={styles.logo} src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => {
                        this.showTargetElement()
                    }} aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse className={'d-none d-lg-block'}>
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <Nav.Link href="/">{t('header:home')}</Nav.Link>
                            {i18n.language.indexOf('en') > -1 ?
                            <Nav.Link target={'_blank'}
                            href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_EN_200320.pdf">{t('header:genepaper')}</Nav.Link>
                            :
                            <Nav.Link target={'_blank'}
                            href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_200320.pdf">{t('header:genepaper')}</Nav.Link>
                            }
                            <Nav.Link target="_blank" href="https://talk.darwinia.network">{t('header:forum')}</Nav.Link>
                            <Nav.Link target="_blank" href={t('header:testnet_url')}>{t('header:testnet')}</Nav.Link>
                            <Nav.Link target="_blank" href={t('header:explorer_url')}>{t('header:explorer')}</Nav.Link>
                            <Nav.Link target={'_blank'} href="https://rfcs.darwinia.network/">{t('header:rfc')}</Nav.Link>
                            <Nav.Link href="/faq">{t('header:faq')}</Nav.Link>
                            <Nav.Link className={styles.walletBtn} href="https://testnet-wallet.darwinia.network/#/accounts">{t('header:wallet')}</Nav.Link>
                            <Nav.Link target="_blank" href="https://github.com/darwinia-network" className={styles.githubBox}><img width={24} src={github}/></Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <div className={styles.lngBtn}/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=' animated fadeIn faster'>
                                    <Dropdown.Item onClick={() => this.changeLng('zh-cn')} eventKey="4.1">
                                        简体中文
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="4.2"
                                                   onClick={() => this.changeLng('en-us')}>English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>

                    </Navbar.Collapse>
                </Navbar>

                {open ? <div id="basic-navbar-nav"
                             className={`${styles.navDraw} d-flex flex-column animated fadeInRight faster`}>
                    <div className={`${styles.closeBox} d-flex`}>
                        <div className={'spacer'}></div>
                        <div onClick={() => {
                            this.hideTargetElement()
                        }}>
                            <img width={15} src={closeIcon}/>
                        </div>
                    </div>

                    <Container className={'text-center spacer d-flex flex-column justify-content-center'}>
                        <Row>
                            <Col md={12}>
                                <Nav.Link href="/">{t('header:home')}</Nav.Link>
                            </Col>
                            <Col md={12}>
                            <Nav.Link target="_blank" href="https://github.com/darwinia-network">{t('footer:community_title_2')}</Nav.Link>
                            </Col>
                            <Col md={12}>
                            {i18n.language.indexOf('en') > -1 ?
                            <Nav.Link target={'_blank'}
                            href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_EN_200320.pdf">{t('header:genepaper')}</Nav.Link>
                            :
                            <Nav.Link target={'_blank'}
                            href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_200320.pdf">{t('header:genepaper')}</Nav.Link>
                            }
                            </Col>
                            <Col md={12}>
                                <Nav.Link target="_blank" href="https://talk.darwinia.network">{t('header:forum')}</Nav.Link>
                            </Col>
                            <Col md={12}>
                                <Nav.Link target="_blank" href="https://github.com/darwinia-network/darwinia/wiki/How-To-Join-Darwinia-POC-1-Testnet---Trilobita">{t('header:testnet')}</Nav.Link>
                            </Col>
                            <Col md={12}>
                                <Nav.Link target="_blank" href={t('header:explorer_url')}>{t('header:explorer')}</Nav.Link>
                            </Col>

                            <Col md={12}>
                                <Nav.Link target={'_blank'} href="https://rfcs.darwinia.network/">{t('header:rfc')}</Nav.Link>
                            </Col>

                            <Col md={12}>
                                <Nav.Link href="/faq">{t('header:faq')}</Nav.Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className={`${styles.lngBox} text-center`}>
                        <Row>
                            <Col md={12}>
                                <Nav.Link onClick={() => this.changeLng('zh-cn')}>简体中文</Nav.Link>
                            </Col>
                            <Col md={12}>
                                <Nav.Link onClick={() => this.changeLng('en-us')}>English</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div> : null}

                {open ? <div onClick={() => {
                    this.hideTargetElement()
                }} className="overlay overlay--active  animated fadeIn faster"></div> : null}
            </div>

        );
    }
}

export default withTranslation()(PageHeader);
