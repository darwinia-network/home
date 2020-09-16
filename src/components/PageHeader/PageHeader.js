import React, {Component} from "react";
import {Navbar, Dropdown, Nav, Form, Container, Row, Col} from 'react-bootstrap'
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import {withTranslation} from "react-i18next";
import $ from "jquery";

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
            didScroll: false,
            lastScrollTop: 0,
            delta: 5,
            open: false,
        };
    }

    targetElement = null;

    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        this.targetElement = document.querySelector('body');
        this.initScroll();
    }

    initScroll = () => {
        let {didScroll} = this.state;
        $(window).scroll((event) =>{
            this.setState({
                didScroll: true
            })
        });

        setInterval(() => {
            let {didScroll} = this.state;
            if (didScroll) {
                this.AdjustHeader();
                this.hasScrolled();
                this.setState({
                    didScroll: false
                })
            }
        }, 100);
    }

    AdjustHeader = () => {
        var navbarSecondaryHeight = $(".navbar--secondary").outerHeight();
        if ($(window).scrollTop() > navbarSecondaryHeight) {
            if (!$(".collapse-header").hasClass("nav-primary-fixed")) {
                $(".collapse-header").addClass("nav-primary-fixed");
            }
        } else {
            $(".collapse-header").removeClass("nav-primary-fixed");
        }
    }

    hasScrolled = () => {
        let {lastScrollTop, delta} = this.state;
        var navbarHeight = $(".collapse-header").outerHeight();
        var st = $(window).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $(".collapse-header").removeClass("nav-down").addClass("nav-up");
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $(".collapse-header").removeClass("nav-up").addClass("nav-down");
            }
        }
        this.setState({
            lastScrollTop: st
        })
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
            <div className={styles.NavBarWrapper}>
                <div className={`nav-down collapse-header ${styles.NavBarContainer}`}>
                <Container>
                    <Row className={''}>
                        <Col xs={12} className={`${styles.ColSub} navbar--secondary`}>
                            <div className={`d-flex align-items-center justify-content-between ${styles.NavMenu}`}>
                                <div onClick={() => this.changeLng('en-us')}>en</div>
                                <div onClick={() => this.changeLng('zh-cn')}>zh</div>
                                <div className={`d-flex align-items-center ${styles.papers}`}>
                                    <div>{t('header:genepaper')}</div>
                                    <div>{t('header:techpaper')}</div>
                                </div>
                            </div>
                            {/* <div className={`${styles.ColLine}`}></div> */}
                        </Col>
                        <Col xs={12} className={`${styles.ColMain}  navbar--primary d-flex justify-content-between align-items-center`}>
                            <Navbar bg="white" expand="lg" className={`${styles.Navbar} ${transparent ? null : styles.NavBg} cs-header`}>
                                <Navbar.Brand href="/">
                                    <img alt="darwinia logo" className={styles.logo} src={logo}/>
                                </Navbar.Brand>
                                <Navbar.Toggle onClick={() => {
                                    this.showTargetElement()
                                }} aria-controls="basic-navbar-nav"/>

                                <Navbar.Collapse className={'d-none d-lg-block'}>
                                    <Nav className="mr-auto">
                                    </Nav>
                                    <Form inline>
                                        {/* <Nav.Link href="/">{t('header:home')}</Nav.Link> */}
                                        <Nav.Link href="/tech">{t('header:tech')}</Nav.Link>
                                        <Nav.Link href="/community">{t('header:community')}</Nav.Link>
                                        <Nav.Link href="/model">{t('header:economical_model')}</Nav.Link>
                                        <Nav.Link href="/media">{t('header:media')}</Nav.Link>
                                        <Nav.Link target={'_blank'} href="https://www.itering.io/about">{t('header:hiring')}</Nav.Link>
                                        {/* {i18n.language.indexOf('en') > -1 ?
                                        <Nav.Link target={'_blank'}
                                        href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_EN.pdf">{t('header:genepaper')}</Nav.Link>
                                        :
                                        <Nav.Link target={'_blank'}
                                        href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_CN.pdf">{t('header:genepaper')}</Nav.Link>
                                        } */}
                                        {/* <Nav.Link target="_blank" href="https://talk.darwinia.network">{t('header:forum')}</Nav.Link> */}
                                        {/* <Nav.Link target="_blank" href={t('header:testnet_url')}>{t('header:testnet')}</Nav.Link> */}
                                        {/* <Nav.Link target="_blank" href={t('header:explorer_url')}>{t('header:explorer')}</Nav.Link> */}
                                        {/* <Nav.Link target={'_blank'} href="https://docs.darwinia.network/">{t('header:docs')}</Nav.Link> */}
                                        {/* <Nav.Link href="/faq">{t('header:faq')}</Nav.Link> */}
                                        {/* <Nav.Link className={styles.walletBtn} href="https://apps.darwinia.network/">{t('header:wallet')}</Nav.Link> */}
                                        {/* <Nav.Link target="_blank" href="https://github.com/darwinia-network" className={styles.githubBox}><img alt="github" width={24} src={github}/></Nav.Link> */}
                                        {/* <Dropdown>
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
                                        </Dropdown> */}
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
                                        <img alt="close" width={15} src={closeIcon}/>
                                    </div>
                                </div>

                                <Container className={'text-center spacer d-flex flex-column justify-content-center'}>
                                    <Row>
                                        {/* <Col md={12}>
                                            <Nav.Link href="/">{t('header:home')}</Nav.Link>
                                        </Col> */}
                                        <Col md={12}>
                                            <Nav.Link target="_blank" href="/tech">{t('header:tech')}</Nav.Link>
                                        </Col>
                                        <Col md={12}>
                                            <Nav.Link target="_blank" href="https://github.com/darwinia-network">{t('footer:community_title_2')}</Nav.Link>
                                        </Col>
                                        <Col md={12}>
                                        {i18n.language.indexOf('en') > -1 ?
                                        <Nav.Link target={'_blank'}
                                        href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_EN.pdf">{t('header:genepaper')}</Nav.Link>
                                        :
                                        <Nav.Link target={'_blank'}
                                        href="https://evolution.l2me.com/darwinia/Darwinia_Genepaper_CN.pdf">{t('header:genepaper')}</Nav.Link>
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
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className={styles.NavBarBg}></div>
            </div>

        );
    }
}

export default withTranslation()(PageHeader);
