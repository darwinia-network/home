import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import bridge from "./img/bridge.png";

const cx = classNames.bind(styles);

const Welcome = () => {
  return (
    <Container>
      <div className={cx("main")}>
        <img alt="..." src={bridge} className={cx("bridge")} />
        <h2 className={cx("title-h2")}>
          The Polkadot Parachain Auction has ended. Thank you for supporting Darwinia Network!
        </h2>
        <p className={cx("desc")}>
          Do not contribute any more DOT at this time. Metaverse NFT Package rewards can be claimed now!
        </p>
        <div className={cx("link-wrap")}>
          <Link className={cx("join-our-crowdloan-link")} to="plo_contribute">
            <span>Crowdloan Details</span>
          </Link>
          <a
            className={cx("learn-more-link")}
            href="https://darwinianetwork.medium.com/guide-to-participate-in-the-darwinia-plo-e14b1718787f"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Learn more</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Welcome);
