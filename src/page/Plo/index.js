import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import Header from './Header';
import Welcome from './Welcome';
import Crowloan from './Crowloan';
import Auction from './Auction';
import Work from './Work';
import Contribute from './Contribute';
import FourCards from './FourCards';
import Timeline from './Timeline';
import FAQs from './FAQs';
import Waitlist from './Waitlist';

import magic03 from './img/magic-03.png';
import magic04 from './img/magic-04.png';
import magic05 from './img/magic-05.png';

const cx = classNames.bind(styles);

const PloPage = () => {
  return (
    <div className={cx('main')}>
      <div className={cx('magic-01')} />
      <div className={cx('magic-02')} />
      <img className={cx('magic-03')} alt='...' src={magic03} />
      <img className={cx('magic-04')} alt='...' src={magic04} />
      <img className={cx('magic-05')} alt='...' src={magic05} />

      <Header />
      <Welcome />
      <Crowloan />
      <Auction />
      <Work />
      <Contribute />
      <FourCards />
      <Timeline />
      <FAQs />
      <Waitlist />

      <p className={cx('footer-allright')}>Copyright@2021 Darwinia Network</p>
    </div>
  );
};

export default React.memo(PloPage);
