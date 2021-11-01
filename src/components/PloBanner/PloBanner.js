import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import icon01 from './img/icon-01.png';

const cx = classNames.bind(styles);

const PloBanner = () => {
  return (
    // <div className={cx('main')}>Plo Banner</div>
    <Container>
      <div className={cx('main')}>
        <img alt='...' src={icon01} className={cx('banner-logo')} />
        <div className={cx('banner-content')}>
          <h5 className={cx('title')}><span role='img' aria-label='fire'>🔥</span> We are launching our Parachain Crowdloan on Polkadot.</h5>
          <p className={cx('desc')}>Contribute your DOT to help build a Web3.0 Bridge Hub by joining our crowdloan, unlock RING and KTON bonus, also BTC and Metaverse limited edition commemorative NFT waiting for you.</p>
        </div>        
        <button className={cx('banner-btn')}>
          <span>Join our crowdloan</span>
        </button>
      </div>
    </Container>
  );
};

export default React.memo(PloBanner);
