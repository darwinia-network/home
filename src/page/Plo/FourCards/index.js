import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import icon01 from './img/icon-01.png';
import icon02 from './img/icon-02.png';
import icon03 from './img/icon-03.png';
import icon04 from './img/icon-04.png';

const cx = classNames.bind(styles);

const FourCards = () => {
  return (
    <Container>
      <div className={cx('main')}>
        <div className={cx('card')}>
          <img alt='...' src={icon01} className={cx('card-icon')} />
          <div className={cx('card-content')}>
            <h5 className={cx('card-content-title')}>Referral</h5>
            <p className={cx('card-content-desc')}>
              After successfully contributing to the crowdloan, both the referrer and the referee will receive 5% token reward bonus.<br/>
              At the same time, the number of DOT invested through the referral link will be ranked, and the referrer reward will be added.
            </p>
            <div className={cx('card-content-tabs')}>
              <div className={cx('tab')}>
                <span>Top1 8%+</span>
              </div>
              <div className={cx('tab')}>
                <span>Top1 8%+</span>
              </div>
              <div className={cx('tab')}>
                <span>Top1 8%+</span>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('card')}>
          <img alt='...' src={icon02} className={cx('card-icon')} />
          <div className={cx('card-content')}>
            <h5 className={cx('card-content-title')}>Contribution Pioneers</h5>
            <p className={cx('card-content-desc')}>
              At the beginning of the second round auction, supporters who have contributed more than 10,000 DOT and the top 5 people (in addition to the Exchange address) ranking will distribute 1 BTC in proportion to their contribution.<br/>
              1 BTC will be released immediately after the second round auction starts.
            </p>
          </div>
        </div>

        <div className={cx('card')}>
          <img alt='...' src={icon03} className={cx('card-icon')} />
          <div className={cx('card-content')}>
            <h5 className={cx('card-content-title')}>Metaverse NFT Package</h5>
            <p className={cx('card-content-desc')}>
              You can get a <a rel='noopener noreferrer' target='_blank' href='https://www.evolution.land/'>Evolution Land</a> Metaverse NFT Package when your contribution share greater or equal 10 DOT, and you will have a chance to get a limited edition commemorative NFT in the Package.<br/>
              The package will be awarded immediately after the second round auction is terminated regardless of whether Darwinia Network wins the slot auction or not.
            </p>
          </div>
        </div>

        <div className={cx('card')}>
          <img alt='...' src={icon04} className={cx('card-icon')} />
          <div className={cx('card-content')}>
            <h5 className={cx('card-content-title')}>Early Bird</h5>
            <p className={cx('card-content-desc')}>We will give more rewards to users who join earlier. The specific profit algorithm and formula can be queried in the corresponding article.</p>
            <button className={cx('card-content-btn')}>
              <span>Learn more</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(FourCards);
