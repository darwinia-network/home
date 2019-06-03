import React, {Component} from "react";
import {Container, Row, Col, Image, InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import dwIcon from './img/darwinia-logo.png'
import architecture from './img/architecture.png'
import architecture_en from './img/architecture-en.png'
import roadmap from './img/roadmap.png'
import roadmapMobile from './img/roadmap-m.png'
import axios from 'axios'
import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import i18n from '../../locales/i18n';
import Zmage from 'react-zmage'


class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            info: ''
        }
    }

    componentDidMount() {
        archorsComponent()
    }

    subscribe = (text) => {
        axios.post('https://darwinia.network/api/subscribe?email=' + text)
            .then( (response) => {
                console.log(response);
                if (response.data.code === 0) {
                    this.setState({
                        info: this.props.t('home_page:subscribe_tip')
                    })
                }
            })
            .catch( (error) => {
                // console.log(error);
            });
    }

    changeTextValue = (k, e) => {
        this.setState({
            [k]: e.target.value
        })
    }

    render() {
        const {t} = this.props
        const {email, info} = this.state
        return (
            <div>
                <div className={styles.homeBannerArea}>
                    <PageHeader transparent={true}/>
                    <Container>
                        <Row className={`${styles.promoteContentArea} d-flex justify-content-center`}>
                            <Col xs={{order: 2, span: 11}} md={{order: 1, span: 6}}>
                                <p className={styles.slogan}>{t('home_page:slogan')}</p>
                                <div className={styles.line}/>
                                <p className={`${styles.subTitle} mb-4`}>{t('home_page:subtitle')}</p>
                                <InputGroup className={`mb-3 ${styles.subscribe} hidden-xs`}>
                                    <FormControl
                                        value={email}
                                        onChange={(e) => {
                                            this.changeTextValue('email', e)
                                        }}
                                        placeholder={t('home_page:placeholder')}
                                        aria-label={t('home_page:placeholder')}
                                        aria-describedby={t('home_page:placeholder')}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" onClick={() => {
                                            this.subscribe(email)
                                        }}>{t('home_page:subscribe_btn')}</Button>
                                    </InputGroup.Append>

                                </InputGroup>
                                <Form.Text className={`text-muted ${styles.subscribeTip} hidden-xs`} dangerouslySetInnerHTML = {{ __html: info || '&nbsp' }} >

                                </Form.Text>
                                <Form className={`${styles.subscribe} hidden-md`}>
                                    <FormControl
                                        value={email}
                                        type={'email'}
                                        onChange={(e) => {
                                            this.changeTextValue('email', e)
                                        }}
                                        placeholder={t('home_page:placeholder')}
                                        aria-label={t('home_page:placeholder')}
                                        aria-describedby={t('home_page:placeholder')}
                                    />

                                    <Button block onClick={() => {
                                        this.subscribe(email)
                                    }}>
                                        {t('home_page:subscribe_btn')}
                                    </Button>
                                    <Form.Text className={`text-muted ${styles.subscribeTip}`} dangerouslySetInnerHTML = {{ __html: info || '&nbsp' }} />

                                </Form>
                            </Col>
                            <Col xs={{order: 1}} md={{order: 2, span: 6}}
                                 className={` d-flex justify-content-center align-items-center`}>
                                <img src={dwIcon}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.highlightContainer}`}>
                    <Container>
                        <h1 className={`text-center ${styles.fontH1}`}>{t('home_page:highlight_title')}</h1>
                        <div className={styles.lineH1}></div>
                        <Row className={`d-flex justify-content-center`}>
                            <Col xs={10} md={6} lg={3}>
                                <h3>{t('home_page:highlight_block_title_1')}</h3>
                                <p>{t('home_page:highlight_block_content_1')}</p>
                            </Col>
                            <Col xs={10} md={6} lg={3}>
                                <h3>{t('home_page:highlight_block_title_2')}</h3>
                                <p>{t('home_page:highlight_block_content_2')}</p>
                            </Col>
                            <Col xs={10} md={6} lg={3}>
                                <h3>{t('home_page:highlight_block_title_3')}</h3>
                                <p>{t('home_page:highlight_block_content_3')}</p>
                            </Col>
                            <Col xs={10} md={6} lg={3}>
                                <h3>{t('home_page:highlight_block_title_4')}</h3>
                                <p>{t('home_page:highlight_block_content_4')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.architectureContainer}`}>
                    <Container>
                        <h1 className={`text-center ${styles.fontH1}`}>{t('home_page:architecture_title')}</h1>
                        {i18n.language.indexOf('en') > -1 ? <Zmage src={architecture_en}/> :
                            <Zmage src={architecture}/>}
                    </Container>
                </div>

                <div className={`${styles.teamContainer} d-flex justify-content-center align-items-center`}>
                    <Container className={'text-center'}>
                        <Row>
                            <Col>
                                <h1>{t('home_page:dev_title')}</h1>
                                <div className={styles.lineH2}></div>
                                <p>{t('home_page:dev_content')}</p>
                                <p>{t('home_page:dev_link')}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={`${styles.roadmapContainer}`}>
                    <Container>
                        <h1 className={`text-center ${styles.fontH1}`}>{t('home_page:roadmap_title')}</h1>
                        <div className={styles.lineH1}/>
                        <div className={`hidden-md`}>
                            <Row className={`d-flex justify-content-center align-items-between`}>
                                <Col xs={5}>
                                    <img src={roadmapMobile}/>
                                </Col>
                                <Col xs={5} className={styles.nospace}>
                                    <div className={`text-center d-flex ${styles.label}`}>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_1_name')}</p>
                                            <p>{t('home_page:roadmap_1_milestone')}</p>
                                        </div>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_2_name')}</p>
                                            <p>{t('home_page:roadmap_2_milestone')}</p>
                                        </div>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_3_name')}</p>
                                            <p>{t('home_page:roadmap_3_milestone')}</p>
                                        </div>
                                        <div xs={12}>
                                            <p>{t('home_page:roadmap_4_name')}</p>
                                            <p>{t('home_page:roadmap_4_milestone')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={`${styles.content} hidden-xs`}>
                            <img src={roadmap}/>
                            <Row className={`text-center ${styles.label}`}>
                                <Col>
                                    <p>{t('home_page:roadmap_1_name')}</p>
                                    <p>{t('home_page:roadmap_1_milestone')}</p>
                                </Col>
                                <Col>
                                    <p>{t('home_page:roadmap_2_name')}</p>
                                    <p>{t('home_page:roadmap_2_milestone')}</p>
                                </Col>
                                <Col>
                                    <p>{t('home_page:roadmap_3_name')}</p>
                                    <p>{t('home_page:roadmap_3_milestone')}</p>
                                </Col>
                                <Col>
                                    <p>{t('home_page:roadmap_4_name')}</p>
                                    <p>{t('home_page:roadmap_4_milestone')}</p>
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

export default withTranslation()(Home);
