import React from "react";
import style from "./style.module.scss";
import Fade from "react-reveal/Fade";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";

import crabIcon from "./img/crab.svg";
import crabIconM from "./img/crab-m.svg";
import feature1Icon from "./img/feature-1.svg";
import feature2Icon from "./img/feature-2.svg";
import feature3Icon from "./img/feature-3.svg";

const cx = classNames.bind(style);

const CrabNetwork = () => {
  return (
    <>
      <PageHeader forceFixed={true} />

      <Fade bottom fraction={0.1} duration={1600} distance={"50px"}>
        <div className={cx("page-section-1")}>
          <Container>
            <Row>
              <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start">
                <img alt="..." src={crabIcon} className="d-none d-sm-block" />
                <img alt="..." src={crabIconM} className="d-block d-sm-none" />
              </Col>
              <Col
                xs={12}
                sm={6}
                className="d-flex flex-column justify-content-center align-items-center align-items-sm-start text-center"
              >
                <h3>Crab Network</h3>
                <p>
                  Ethereum-compatible Smart Contracts Platform on Kusama, Which Includes Substrate-based Crab Chain(CC)
                  and EVM-compatible Crab Smart Chain(CSC)
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fade>

      <Fade bottom fraction={0.1} duration={1600} distance={"50px"}>
        <Container>
          <Row>
            <Col className="d-flex flex-column">
              <h3 className="text-center text-sm-left">What is Crab Chain</h3>
              <p className="text-center text-sm-left">
                The native standalone chain based on substrate with a set of dispatch calls defined by its runtime.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} className="d-flex flex-column">
              <div className={cx("d-flex justify-content-center align-items-center px-6 rounded", "feature-card")}>
                <img alt="..." src={feature1Icon} />
              </div>
              <h5 className="text-center text-sm-left">{`Safety & Efficiency`}</h5>
              <p className="text-center text-sm-left">
                Crab Chain uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It is
                designed with the roles of validators and nominators, to maximize chain security. Actors who are
                interested in maintaining the network can run a validator node. With NPoS consensus, the Chain is safe,
                robust, and efficient.
              </p>
            </Col>
            <Col xs={12} sm={4} className="d-flex flex-column">
              <div className={cx("d-flex justify-content-center align-items-center px-6 rounded", "feature-card")}>
                <img alt="..." src={feature2Icon} />
              </div>
              <h5 className="text-center text-sm-left">{`On-Chain Governance`}</h5>
              <p className="text-center text-sm-left">
                Crab chain has a sophisticated governance system where all stakeholders have a voice. Network upgrades
                are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Crab's
                development remains future-proof and community-driven.
              </p>
            </Col>
            <Col xs={12} sm={4} className="d-flex flex-column">
              <div className={cx("d-flex justify-content-center align-items-center px-6 rounded", "feature-card")}>
                <img alt="..." src={feature3Icon} />
              </div>
              <h5 className="text-center text-sm-left">{`Micro Gas Fees`}</h5>
              <p className="text-center text-sm-left">
                Crab Chain can bring users a very high-quality experience, including very low transaction fees and
                ultra-fast transaction confirmation speed.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>

      <PageFooter />
    </>
  );
};

export default React.memo(CrabNetwork);
