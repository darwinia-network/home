import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import bridge from './img/bridge.png';

const cx = classNames.bind(styles);

const Auction = () => {
  return (
    <Container>
      <div className={cx('main')} id="crowdloan-section">
        <div className={cx('content')}>

          <div className={cx('part')}>
            <h5 className={cx('title')}>What is Polkadot Parachain Auction?</h5>
            <p className={cx('desc')}>Polkadot is a multi-chain network. If a parachain wants to connect to parachain and share Polkadot's cross-chain capabilities and network security, it must obtain a parachain slot.</p>
          </div>

          <div className={cx('part')}>
            <h5 className={cx('title')}>What is the Crowdloan?</h5>
            <p className={cx('desc')}>In order to obtain a slot, Darwinia Network will launch crowdloan to allow the community to participate together to increase the probability of success while supporters' DOTs will not leave away from their wallets.</p>
          </div>

        </div>
        <img alt='...' src={bridge} className={cx('icon')} />
      </div>
    </Container>
  );
};

export default React.memo(Auction);
