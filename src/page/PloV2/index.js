import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Tooltip, Table, Modal } from 'antd';
import { ethers } from 'ethers';

import darwiniaLogo from './img/logo-darwinia.png';
import infoIcon from './img/info-icon.png';
import ringIcon from './img/ring-icon.png';
import ktonIcon from './img/kton-icon.png';
import dotIcon from './img/dot-icon.png';
import accountIcon from './img/account-icon.png';
import modalCloseIcon from './img/modal-close.png';

// Polkadot
import {
  web3Enable,
  web3AccountsSubscribe,
} from '@polkadot/extension-dapp';
import Identicon from '@polkadot/react-identicon';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';

// ======================= echarts ==========================
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);
// ======================= echarts ==========================

const cx = classNames.bind(styles);

const shortAddress = (address = '') => {
  if (address.length && address.length > 12) {
    return `${address.slice(0, 5)}...${address.slice(address.length - 5)}`;
  }
  return address;
}

const PloV2 = () => {
  const echartsRef = useRef();
  const polkadotApi = useRef(null);
  const unsubscribeAccounts = useRef(null);
  const unsubscribeCurBalance = useRef(null);

  const [accounts, setAccounts] = useState([]);
  const [inputDot, setInputDot] = useState('');
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentAccountBalannce, setCurrentAccountBalannce] = useState({ freeBalance: '0', lockedBalance: '0', availableBalance: '0' });
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);

  const globalContributeColumns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      align: 'left',
      width: '17%',
      render: (text) => (<span className={cx('global-contribute-address')}>{text}</span>)
    },
    {
      title: 'Contributed DOT',
      dataIndex: 'myDot',
      key: 'myDot',
      align: 'center',
    },
    {
      title: 'Referrals',
      dataIndex: 'referrals',
      key: 'referrals',
      align: 'center',
    },
    {
      title: `Referrer's Contributed DOT`,
      dataIndex: 'referralDot',
      key: 'referralDot',
      align: 'center',
    },
    {
      title: 'Current RING Rewards',
      dataIndex: 'curRingRewards',
      key: 'curRingRewards',
      align: 'center',
    },
    {
      title: 'Current KTON Rewards',
      dataIndex: 'curKtonRewards',
      key: 'curKtonRewards',
      align: 'center',
    },
    {
      title: 'Current BTC Rewards',
      dataIndex: 'curBtcRewards',
      key: 'curBtcRewards',
      align: 'center',
    },
    {
      title: 'Metaverse NFT Package',
      dataIndex: 'curNft',
      key: 'curNft',
      align: 'center',
    },
  ];

  const globalContributeDataSource = [];
  for (let i = 0; i < 100; i++) {
    globalContributeDataSource.push({
      key: i,
      address: '5CRABk…eEQNM6',
      myDot: '323,273.43',
      referrals: '100',
      referralDot: '323,273.43',
      curRingRewards: '32776.27',
      curKtonRewards: '37.27',
      curBtcRewards: '0.1457',
      curNft: 'No Status',
    });
  }

  const handleClickConnectWallet = async () => {
    const extensions = await web3Enable('darwinia.network');
    if (extensions.length === 0) {
      // no extension installed, or the user did not accept the authorization
      // in this case we should inform the use and give a link to the extension
      return;
    }

    setShowSelectAccountModal(true);
    unsubscribeAccounts.current = await web3AccountsSubscribe(allAccounts => setAccounts(allAccounts));
  };

  const handleClickSelectAccount = async (account) => {
    setShowSelectAccountModal(false);
    account && setCurrentAccount(account);
  };

  const handleChangeInputDot = (e) => {
    setInputDot(e.target.value);
  }

  const handleClickMaxInput = () => {
    setInputDot(ethers.utils.formatEther(currentAccountBalannce.availableBalance));
  }

  useEffect(() => {
    (async () => {
      const wsProvider = new WsProvider('wss://rpc.polkadot.io');
      polkadotApi.current = await ApiPromise.create({ provider: wsProvider });
    })()

    return () => {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = null;
    }
  }, []);

  useEffect(() => {
    if (currentAccount && polkadotApi.current) {
      const keyring = new Keyring();
      keyring.setSS58Format(0); // Polkadot format address
      const pair = keyring.addFromAddress(currentAccount.address);

      polkadotApi.current.derive.balances.all(pair.address, (balancesAll) => {
        setCurrentAccountBalannce({
          freeBalance: balancesAll.freeBalance.toString(),
          lockedBalance: balancesAll.lockedBalance.toString(),
          availableBalance: balancesAll.availableBalance.toString(),
        });
      })
      .then((unsub) => {
        unsubscribeCurBalance.current && unsubscribeCurBalance.current();
        unsubscribeCurBalance.current = unsub;
      })
      .catch((err) => {
        console.error(err);
      });
    }

    return () => {
      unsubscribeCurBalance.current && unsubscribeCurBalance.current();
      unsubscribeCurBalance.current = null;
    };
  }, [currentAccount, polkadotApi]);

  useEffect(() => {
    if (echartsRef.current) {
      const crowdloanEchart = echarts.init(echartsRef.current);
      let base = +new Date(1968, 9, 3);
      const oneDay = 24 * 3600 * 1000;
      const date = [];
      const data = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        const now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }

      const option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        // title: {
        //   left: 'center',
        //   text: 'Large Area Chart'
        // },
        // toolbox: {
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: 'none'
        //     },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10
          }
        ],
        series: [
          {
            name: 'Crowdloan Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: data
          }
        ]
      };

      crowdloanEchart.setOption(option);
    }
  }, []);

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

          {currentAccount ? (
            <div className={cx('heading-container-current-account-wrap')}>
              <div className={cx('heading-container-current-account')}>
                <span>{shortAddress(currentAccount.address)}</span>
                <Identicon value={currentAccount.address} size={30} theme="polkadot" />
              </div>
              <button className={cx('heading-container-change-account')} onClick={() => setShowSelectAccountModal(true)}>
                <span>Change</span>
              </button>
            </div>
          ) : (
            <button className={cx('heading-container-connnect-wallet-btn')} onClick={handleClickConnectWallet}>
              <span>Connect Wallet</span>
            </button>
          )}
        </div>

        {/* Contribute, Crowloan, Referral link */}
        <div className={cx('contribute-crowloan-referral')}>
          <div className={cx('contribute')}>
            <h3 className={cx('contribute-title')}>Contribute</h3>

            <div className={cx('dot-amount-input-wrap')}>
              <p className={cx('contribute-lebal')}>Enter your contribution amount</p>
              <div className={cx('dot-amount-input-control')}>
                <input className={cx('contribute-input')} value={inputDot} onChange={handleChangeInputDot}></input>
                <div className={cx('dot-amount-input-suffix')}>
                  <span className={cx('dot-amount-input-dot-suffix')}>DOT</span>
                  <button className={cx('dot-amount-input-max-btn')} onClick={handleClickMaxInput}>
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

              <div ref={echartsRef} className={cx('crowloan-echarts')} />

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

        {/* Referral Leaderboard */}
        <div className={cx('referral-leaderboard')}>
          <h3 className={cx('referral-leaderboard-title')}>Referral Leaderboard</h3>
          <div className={cx('referral-leaderboard-control')}>
            <div className={cx('referral-leaderboard-item')}>
              <span className={cx('referral-leaderboard-item-rank')}>Rank</span>
              <span className={cx('referral-leaderboard-item-address')}>Address</span>
              <span className={cx('referral-leaderboard-item-referrals')}>Referrals</span>
              <span className={cx('referral-leaderboard-item-accumulated')}>Accumulated Contribution</span>
              <span className={cx('referral-leaderboard-item-rewards')}>Refferal Rewards</span>
            </div>

            {[0,0,0,0,0].map((_, index) => (
              <div className={cx('referral-leaderboard-item')} key={index}>
                <div className={cx('referral-leaderboard-item-rank')}>
                  <div className={cx('rank')}>
                    <span>{index + 1}</span>
                  </div>
                </div>
                <span className={cx('referral-leaderboard-item-address')} style={{ color: '#488CCB' }}>5CRABk…eEQNM6</span>
                <span className={cx('referral-leaderboard-item-referrals')}>60</span>
                <span className={cx('referral-leaderboard-item-accumulated')}>19000 DOT</span>
                <div className={cx('referral-leaderboard-item-rewards')}>
                  <span>100000 RING</span>
                  <span>100 KTON</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Table
          className={cx('global-contribute')}
          columns={globalContributeColumns}
          dataSource={globalContributeDataSource}
          title={() => 'Global Contribution Activity'}
          pagination={{
            size: 'small',
            showSizeChanger: false,
          }}
        />

        <p className={cx('all-right')}>Copyright@2021 Darwinia Network</p>

      </Container>

      <Modal
        className={cx('select-account-modal')}
        visible={showSelectAccountModal}
        footer={null}
        title='Select an Account'
        closable={true}
        closeIcon={<img alt='...' src={modalCloseIcon} />}
        onCancel={() => setShowSelectAccountModal(false)}
        width={560}
      >
        <div className={cx('accounts-container')}>
          {accounts.map((account, index) => (
            <button className={cx('accounts-item')} key={index} onClick={() => handleClickSelectAccount(account)}>
              <Identicon value={account.address} size={40} theme='polkadot' />
              <div className={cx('accounts-item-name-address')}>
                <span className={cx('name')}>{account.meta.name}</span>
                <span className={cx('address')}>{account.address}</span>
              </div>
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(PloV2);
