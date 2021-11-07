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
import accountIcon from './img/account-icon.png';

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

            <div className={cx('my-referral-link')}>
              <h3 className={cx('my-referral-link-title')}>My Referral Link</h3>
              <span className={cx('my-referral-link-content')}>Please connect wallet first, and you can copy your referral link to invite people to participate and win more awards.</span>
            </div>
          </div>
        </div>

        {/* My Contribute */}
        <div className={cx('my-contribute')}>
          <div className={cx('my-contribute-title-wrap')}>
            <div className={cx('my-contribute-title')}>
              <h3>My Contribution</h3>
              <span>*The reward amount will change in real-time according to the progress of the crowdloan, and the final result shall prevail.</span>
            </div>
            <button className={cx('my-contribute-connect-wallet-btn')}>
              <span>Connect Wallet</span>
            </button>
          </div>

          <div className={cx('contribute-info-card')}>
            <div className={cx('contribute-info-item')}>
              <span className={cx('contribute-info-item-title')}>Total DOT Contributed</span>
              <span className={cx('contribute-info-item-value')}>0(0%)</span>
            </div>

            <div className={cx('my-contribute-line')} />

            <div className={cx('contribute-info-item')}>
              <div className={cx('contribute-info-item-title-wrap')}>
                <span className={cx('contribute-info-item-title')}>Metaverse NFT Package</span>
                <img alt='...' src={infoIcon} className={cx('info-icon')} />
              </div>
              <span className={cx('contribute-info-item-value')}>0</span>
            </div>

            <div className={cx('contribute-info-item')}>
              <div className={cx('contribute-info-item-title-wrap')}>
                <span className={cx('contribute-info-item-title')}>BTC Rewards</span>
                <img alt='...' src={infoIcon} className={cx('info-icon')} />
              </div>
              <span className={cx('contribute-info-item-value')}>0</span>
            </div>

            <div className={cx('contribute-info-item-wrap')}>
              <div className={cx('contribute-info-item')}>
                <div className={cx('contribute-info-item-title-wrap')}>
                  <span className={cx('contribute-info-item-title')}>RING Rewards</span>
                  <img alt='...' src={infoIcon} className={cx('info-icon')} />
                </div>
                <span className={cx('contribute-info-item-value')}>0</span>
              </div>
              <div className={cx('contribute-info-item')}>
                <div className={cx('contribute-info-item-title-wrap')}>
                  <span className={cx('contribute-info-item-title')}>KTON Rewards</span>
                  <img alt='...' src={infoIcon} className={cx('info-icon')} />
                </div>
                <span className={cx('contribute-info-item-value')}>0</span>
              </div>
            </div>
          </div>

          <div className={cx('my-contribute-history')}>
            <div className={cx('contribute-history-wrap')}>
              <p>Contribution history</p>
              <div className={cx('contribute-history-control', 'no-data')}>No Data</div>
            </div>
            <div className={cx('referral-history-wrap')}>
              <p>Referral history</p>
              <div className={cx('referral-history-control')}>
                {[1,1,1,1,1,1,1,1,1].map((_, index) => (
                  <div className={cx('referral-history-control-item')} key={index}>
                    <span>Dec  23</span>
                    <span>32.376 DOT</span>
                    <span className={cx('hash-id')}>95650-2</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contribute Pioneers */}
        <div className={cx('contribute-pioneers')}>
          <div className={cx('contribute-pioneers-title-wrap')}>
            <div className={cx('contribute-pioneers-title')}>
              <h3>Contribution Pioneers</h3>
              <Tooltip>
                <img alt='...' src={infoIcon} className={cx('info-icon')} />
              </Tooltip>
            </div>
            <div className={cx('contribute-pioneers-title-rank')}>
              <img alt='...' src={accountIcon} />
              <span>You Rank: 3,837</span>
            </div>
          </div>

          <div className={cx('pioneers-container')}>
            {[0,0,0].map((_,index) => (
              <div className={cx('pioneers-item')} key={index}>
                <div className={cx('pioneers-item-num-icon')}>
                  <span>{index + 1}</span>
                </div>
                <img className={cx('pioneers-item-account-icon')} alt='...' src={accountIcon} />
                <span className={cx('pioneers-item-account-name')}>16Xuv8T....DiXkn</span>
                <span className={cx('pioneers-item-dot-amount')}>374,375.37 DOT</span>
              </div>
            ))}
          </div>
        </div>

        <p className={cx('all-right')}>Copyright@2021 Darwinia Network</p>

      </Container>
    </div>
  );
};

export default React.memo(PloV2);
