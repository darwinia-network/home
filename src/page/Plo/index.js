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
import FAQs from './FAQs';
import Waitlist from './Waitlist';

const cx = classNames.bind(styles);

const PloPage = () => {
  return (
    <div className={cx('main')}>
      <div className={cx('inner')}>
        <Header />
        <Welcome />
        <Crowloan />
        <Auction />
        <Work />
        <Contribute />
        <FourCards />
        <FAQs />
        <Waitlist />

        <p className={cx('footer-allright')}>Copyright@2021 Darwinia Network</p>
      </div>
    </div>
  );
};

export default React.memo(PloPage);
