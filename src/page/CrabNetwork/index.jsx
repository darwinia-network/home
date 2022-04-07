import React from "react";
import style from "./style.module.scss";
import Fade from "react-reveal/Fade";
import classNames from "classnames/bind";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { SubcribeDarwinia } from "../../components/SubcribeDarwinia";

import { contractCodeString, sendTransactionCodeString } from "./codeString";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import crabIcon from "./img/crab.svg";
import crabIconM from "./img/crab-m.svg";
import crabTokenIcon from "./img/crab-token.svg";
import feature1Icon from "./img/feature-1.svg";
import feature2Icon from "./img/feature-2.svg";
import feature3Icon from "./img/feature-3.svg";
import crabChainIcon from "./img/crab-chain.svg";
import crabSmartChain from "./img/crab-smart-chain.svg";
import helixBridgeIcon from "./img/helix-bridge.svg";

const cx = classNames.bind(style);

const CodeCard = ({ title, codeString, language }) => (
  <div className="d-flex flex-column">
    <title className={cx("d-flex align-items-center pl-3 rounded-top", "code-card-title")}>{title}</title>
    <div className={cx("pl-2 pt-2 rounded-bottom", "code-card-source")}>
      <SyntaxHighlighter language={language} showLineNumbers style={a11yLight}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  </div>
);

const CrabNetwork = () => {
  return (
    <>
      <PageHeader forceFixed={true} />

      <Fade bottom fraction={0.1} duration={1800} distance={"50px"}>
        <section className={cx("page-section-1")}>
          <Container>
            <Row>
              <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start">
                <img alt="..." src={crabIcon} className="d-none d-sm-block" />
                <img alt="..." src={crabIconM} className="d-block d-sm-none" />
              </Col>
              <Col
                xs={12}
                sm={6}
                className="d-flex flex-column justify-content-center align-items-center align-items-sm-start text-center mt-5 mt-sm-0"
              >
                <h3 className={cx("title")}>Crab Network</h3>
                <p className={cx("description")}>
                  Ethereum-compatible Smart Contracts Platform on Kusama, Which Includes Substrate-based Crab Chain(CC)
                  and EVM-compatible Crab Smart Chain(CSC)
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      <Fade bottom fraction={0.1} duration={2000} distance={"50px"}>
        <section className={cx("page-section-2")}>
          <Container>
            <Row>
              <Col className="d-flex flex-column">
                <h3 className={cx("title", "text-center text-sm-left")}>
                  What is <strong>Crab Chain</strong>
                </h3>
                <p className={cx("description", "text-center text-sm-left")}>
                  The native standalone chain based on substrate with a set of dispatch calls defined by its runtime.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4} className="d-flex flex-column">
                <div className={cx("d-flex justify-content-center align-items-center px-6 rounded", "feature-card")}>
                  <img alt="..." src={feature1Icon} />
                </div>
                <h5 className={cx("sub-title", "text-left")}>{`Safety & Efficiency`}</h5>
                <p className={cx("sub-description", "text-left")}>
                  Crab Chain uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It
                  is designed with the roles of validators and nominators, to maximize chain security. Actors who are
                  interested in maintaining the network can run a validator node. With NPoS consensus, the Chain is
                  safe, robust, and efficient.
                </p>
              </Col>
              <Col xs={12} sm={4} className="d-flex flex-column">
                <div className={cx("d-flex justify-content-center align-items-center px-6 rounded", "feature-card")}>
                  <img alt="..." src={feature2Icon} />
                </div>
                <h5 className={cx("sub-title", "text-left")}>{`On-Chain Governance`}</h5>
                <p className={cx("sub-description", "text-left")}>
                  Crab chain has a sophisticated governance system where all stakeholders have a voice. Network upgrades
                  are coordinated on-chain and enacted autonomously and without forking the network, ensuring that
                  Crab's development remains future-proof and community-driven.
                </p>
              </Col>
              <Col xs={12} sm={4} className="d-flex flex-column">
                <div className={cx("d-flex justify-content-center align-items-center px-6 rounded", "feature-card")}>
                  <img alt="..." src={feature3Icon} />
                </div>
                <h5 className={cx("sub-title", "text-left")}>{`Micro Gas Fees`}</h5>
                <p className={cx("sub-description", "text-left")}>
                  Crab Chain can bring users a very high-quality experience, including very low transaction fees and
                  ultra-fast transaction confirmation speed.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      <Fade bottom fraction={0.1} duration={1600} distance={"50px"}>
        <section className={cx("page-section-3")}>
          <Container>
            <Row>
              <Col>
                <h5 className={cx("title", "text-center text-sm-left")}>
                  Completely Ethereum Compatibility
                  <br className="d-sm-none" /> <strong>Crab Smart Chain</strong>
                </h5>
                <p className={cx("description", "text-center text-sm-left")}>
                  By mirroring Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more, Crab Smart Chain
                  supports a full Ethereum-like environment and works with industry-standard Ethereum tools, DApps, and
                  protocols.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <CodeCard title={"Contract"} language="javascript" codeString={contractCodeString} />
              </Col>
              <Col xs={12} sm={6} className="mt-4 mt-sm-0">
                <CodeCard title={"Send a Transaction"} language="javascript" codeString={sendTransactionCodeString} />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12} sm={{ span: 2 }}>
                <Button
                  className={cx("w-100", "btn")}
                  onClick={() =>
                    window.open(
                      "https://docs.crab.network/evm-compatible-crab-smart-chain/builders/interact/rpcs",
                      "_blank",
                      "noreferrer,noopener"
                    )
                  }
                >
                  Dev Guide
                </Button>
              </Col>
              <Col xs={12} sm={{ span: 2 }} className="mt-2 mt-sm-0">
                <Button
                  className={cx("w-100", "btn")}
                  onClick={() => window.open("https://t.me/DarwiniaDev", "_blank", "noreferrer,noopener")}
                >
                  Discuss With Dev
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      <Fade bottom fraction={0.1} duration={1600} distance={"50px"}>
        <section className={cx("page-section-4")}>
          <Container>
            <Row>
              <Col>
                <h5 className={cx("title", "text-center text-sm-left")}>Interoperation between Chains</h5>
                <p className={cx("description", "text-center text-sm-left")}>
                  Crab Chain and Crab Smart Chain provide two set of different interfaces and chain structures but share
                  the same nodes network, state storage and native token(CRAB).
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4} className={cx("pr-sm-0")}>
                <div className={cx("interoperation-card", "crab-chain", "p-4 p-sm-5")}>
                  <img alt="..." src={crabChainIcon} />
                  <h6 className={cx("sub-title", "mt-3")}>Crab Chain</h6>
                  <p className={cx("sub-description")}>Addresses use SS58 address format with the 32-byte account ID</p>
                </div>
              </Col>
              <Col xs={12} sm={4} className={cx("p-sm-0 d-flex flex-sm-column")}>
                <div className={cx("interoperation-asset")}>
                  <img className={cx("smart-to-crab")} alt="..." src={crabTokenIcon} />
                </div>
                <div className={cx("d-flex flex-column justify-content-center align-items-center p-3", "helix-bridge")}>
                  <img alt="..." src={helixBridgeIcon} />
                  <span>Helix Bridge</span>
                </div>
                <div className={cx("interoperation-asset")}>
                  <img className={cx("crab-to-smart")} alt="..." src={crabTokenIcon} />
                </div>
              </Col>
              <Col xs={12} sm={4} className={cx("pl-sm-0")}>
                <div className={cx("interoperation-card", "crab-smart-chain", "p-4 p-sm-5")}>
                  <img alt="..." src={crabSmartChain} />
                  <h6 className={cx("sub-title", "mt-3")}>Crab Smart Chain</h6>
                  <p className={cx("sub-description")}>Smart Addresses use the Ethereum format(H160)</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={cx("d-flex align-items-center px-4 py-3 mt-4 rounded", "interoperation-token")}>
                  <img alt="..." src={crabTokenIcon} className={cx("d-none d-sm-block")} />
                  <span className={cx("description", "text-center text-sm-left ml-3")}>
                    The native token for Crab Network is CRAB, CRAB can be used as gas for transactions. Gas includes
                    transaction fees, contract execution fees, network bandwidth charges, storage fees, and more. Crab
                    Chain(CC) and Crab Smart Chain(CSC) share the same native token(CRAB), users can transfer CRAB
                    through the{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://wormhole.darwinia.network/#f%3Dethereum%26t%3Ddarwinia%26fm%3Dnative%26tm%3Dnative"
                    >
                      Helix Bridge
                    </a>{" "}
                    between CC and CSC.
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={{ span: 2, offset: 5 }} className={cx("mt-4")}>
                <Button
                  className={cx("w-100", "btn")}
                  onClick={() => window.open("https://wormhole.darwinia.network/", "_blank", "noreferrer,noopener")}
                >
                  Helix Bridge
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      <Fade bottom fraction={0.1} duration={1600} distance={"50px"}>
        <section className={cx("page-section-5")}>
          <Container>
            <Row>
              <Col>
                <h5 className={cx("title", "text-center")}>Join the Ecosystem</h5>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12} sm={6} className="pr-sm-5">
                <div className={cx("rounded p-4 p-sm-5 d-flex flex-column align-items-center", "join-card")}>
                  <h6 className={cx("sub-title", "text-center")}>Sign up to get the latest from Crab Network</h6>
                  <p className={cx("sub-description", "text-center")}>
                    Get notified about major developments in Crab Ecosystem.
                  </p>
                  <SubcribeDarwinia
                    btnText="Sign up"
                    placeholder="Please enter your email"
                    inputClassName={cx("join-input-group")}
                    responseClassName={cx("join-subcribe-response")}
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} className="mt-5 mt-sm-0 pl-sm-5">
                <div className={cx("rounded p-4 p-sm-5 d-flex flex-column align-items-center", "join-card")}>
                  <h6 className={cx("sub-title", "text-center")}>Build on Crab Network</h6>
                  <p className={cx("sub-description", "text-center")}>
                    Create a new DApp or port your existing Solidity project to Crab Smart Chain.
                  </p>
                  <Button
                    className={cx("join-btn")}
                    onClick={() =>
                      window.open(
                        "https://docs.crab.network/evm-compatible-crab-smart-chain/builders/interact/rpcs",
                        "_blank",
                        "noreferrer,noopener"
                      )
                    }
                  >
                    Quick Start
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>

      <PageFooter />
    </>
  );
};

export default React.memo(CrabNetwork);
