import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

import darwiniaLogo from './img/logo-darwinia.png';

const cx = classNames.bind(styles);

const PloV2 = () => {
  return (
    <div className={cx('main')}>
      <Container>

        {/* Heading */}
        <div className={cx('heading-container')}>
          <div className={cx('heading-container-logo')}>
            <Link to='/'>
              <img alt='...' src={darwiniaLogo} className={cx('heading-container-logo-img')} />
            </Link>
            <div className={cx('heading-container-logo-plo')}>
              <span>PLO</span>
            </div>
          </div>
          <button className={cx('heading-container-connnect-wallet-btn')}>
            <span>Connect Wallet</span>
          </button>
        </div>

      </Container>
    </div>
  );
};

export default React.memo(PloV2);
