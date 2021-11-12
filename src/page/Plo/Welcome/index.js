import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import bridge from './img/bridge.png';

const cx = classNames.bind(styles);

const Welcome = () => {
  return (
    <Container>
      <div className={cx("main")}>
        <img alt="..." src={bridge} className={cx("bridge")} />
        <h2 className={cx("title-h2")}>Support Darwinia, invest in the next generation of Web3.0 Metaverse</h2>
        <p className={cx("desc")}>Darwinia Network is bridging heterogeneous chains to build the Web3.0 Metaverse.</p>
        <div className={cx("link-wrap")}>
          <Link className={cx("join-our-crowdloan-link")} to="plo_contribute">
            <span>Join our crowdloan</span>
          </Link>
          <a
            className={cx("learn-more-link")}
            href="https://darwinianetwork.medium.com/support-darwinia-while-investing-in-the-next-generation-infrastructure-for-the-web3-0-metaverse-aaf3defb234a"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Lrean more</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Welcome);
