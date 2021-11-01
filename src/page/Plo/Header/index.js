import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { Container } from 'react-bootstrap';
import logo from './img/logo-darwinia.png';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <Container>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <img  alt='...' src={logo} className={cx('logo')} />
          <button className={cx('plo-btn')}>
            <span>PLO</span>
          </button>
        </div>
        <div className={cx('right')}>
          <a rel='noopener noreferrer' className={cx('link')} href='https//www.baidu.com/'>Crowdloan</a>
          <a rel='noopener noreferrer' className={cx('link')} href='https//www.baidu.com/'>Support</a>
          <a rel='noopener noreferrer' className={cx('link')} href='https//www.baidu.com/'>Timeline</a>
          <a rel='noopener noreferrer' className={cx('link')} href='https//www.baidu.com/'>FAQs</a>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Header);
