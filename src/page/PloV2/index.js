import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';

import darwiniaLogo from './img/logo-darwinia.png';
import infoIcon from './img/info-icon.png';
import ringIcon from './img/ring-icon.png';
import ktonIcon from './img/kton-icon.png';
import dotIcon from './img/dot-icon.png';

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

        {/* Contribute, Crowloan, Referral link */}
        <div className={cx('contribute-crowloan-referral')}>
          <div className={cx('contribute')}>
            <h3 className={cx('contribute-title')}>Contribute</h3>

            <div className={cx('dot-amount-input-wrap')}>
              <p className={cx('contribute-lebal')}>Enter your contribution amount</p>
              <div className={cx('dot-amount-input-control')}>
                <input className={cx('contribute-input')}></input>
                <div className={cx('dot-amount-input-suffix')}>
                  <span className={cx('dot-amount-input-dot-suffix')}>DOT</span>
                  <button className={cx('dot-amount-input-max-btn')}>
                    <span>MAX</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={cx('referral-code-input-wrap')}>
              <p className={cx('contribute-lebal')}>Enter your referral code (optional)</p>
              <div className={cx('referral-code-input-control')}>
                <input className={cx('referral-code-input')}></input>
              </div>
            </div>

            <div className={cx('auction-success-rewards-wrap')}>
              <div className={cx('contribute-lebal-wrap')}>
                <p className={cx('contribute-lebal')}>Auction Success Rewards</p>
                <Tooltip>
                  <img alt='...' src={infoIcon} className={cx('info-icon')} />
                </Tooltip>
              </div>
              <div className={cx('auction-success-rewards')}>
                <span>Base</span>
                <span>0 RING</span>
                <span>0 KTON</span>

                <div className={cx('auction-success-rewards-content-wrap')}>
                  <span>Bonus</span>
                <div className={cx('limited-time')}>
                  <span>Limited Time</span>
                </div>
                </div>
                <span>0 RING</span>
                <span>0 KTON</span>

                <span>Referral</span>
                <span>0 RING</span>
                <span>0 KTON</span>

                <span>Rewards</span>
                <span>0 RING</span>
                <span>0 KTON</span>
              </div>
            </div>

            <button className={cx('contribute-btn')}>
              <span>Contribute</span>
            </button>
          </div>

          <div className={cx('crowloan-referral')}>
            <div className={cx('crowloan')}>
              <h3 className={cx('crowloan-title')}>The Crowdloan</h3>

              <div className={cx('total-rewards-wrap')}>
                <span>Total rewards:  </span>
                <div className={cx('total-ring-rewards')}>
                  <img alt='...' src={ringIcon} />
                  <span>200,000,000</span>
                </div>
                <div className={cx('total-kton-rewards')}>
                  <img alt='...' src={ktonIcon} />
                  <span>8,000</span>
                </div>
              </div>

              <div className={cx('current-total-contribute')}>
                <span>Current Total contributions</span>
                <div className={cx('total-contribute-dot')}>
                  <img alt='...' src={dotIcon} />
                  <span>42,483.73 DOT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default React.memo(PloV2);
