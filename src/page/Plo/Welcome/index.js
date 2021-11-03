import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import bridge from './img/bridge.png';

const cx = classNames.bind(styles);

const Welcome = () => {
  return (
    <Container>
      <div className={cx('main')}>
        <img alt='...' src={bridge} className={cx('bridge')} />
        <h2 className={cx('title-h2')}>Support Darwinia, invest in the next generation of Web3.0 Metaverse</h2>
        <p className={cx('desc')}>Darwinia Network is bridging heterogeneous chains to build the Web3.0 Metaverse.</p>
        <a className={cx('sign-up-for-wautlist-link')} href="#waitlist-section">
          <span>Sign up for waitlist</span>
        </a>
      </div>
    </Container>
  );
};

export default React.memo(Welcome);
