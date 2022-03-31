import React from "react";
import style from "./style.module.scss";
import Fade from "react-reveal/Fade";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";

import crabIcon from "./img/crab.svg";
import crabIconM from "./img/crab-m.svg";

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

      <PageFooter />
    </>
  );
};

export default React.memo(CrabNetwork);
