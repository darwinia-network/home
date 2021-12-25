import React, { useRef, useEffect, useState, useMemo } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tooltip, Modal, Typography, Spin, message, notification } from "antd";
import Fade from "react-reveal/Fade";

import darwiniaLogo from "./img/logo-darwinia.png";
import infoIcon from "./img/info-icon.png";
import dotIcon from "./img/dot-icon.png";
import modalCloseIcon from "./img/modal-close.png";
import copyIcon from "./img/copy-icon.png";

import twitterIcon from "./img/twitter.png";
import mediumIcon from "./img/medium.png";
import telegramIcon from "./img/telegram.png";
import discordIcon from "./img/discord.png";
import BTCReward from "./components/btc-reward";
import ringIcon from './img/ring-icon.png';
import ktonIcon from './img/kton-icon.png';

import {
  CONTRIBUTES_BY_PARA_ID,
  gqlCrowdloanWhoStatisticByAddress,
  gqlCrowdloanReferStatisticByReferralCode,
  CONTRIBUTES_BY_ADDRESS_PARA_ID,
  REFERRAL_CODE_BY_ADDRESS_PARA_ID,
  CONTRIBUTE_PIONEERS,
  ALL_WHO_CROWDLOAN,
  ALL_REFER_CROWDLOAN,
} from "./gql";

import { useEcharts } from "./useEcharts";
import { useApi, useCurrentBlockNumber, useBalanceAll } from "./hooks";

import {
  DOT_TO_ORIG,
  shortAddress,
  isInsufficientBalance,
  isValidContributeDOTInput,
  isValidAddressPolkadotAddress,
  formatBalanceFromOrigToDOT,
  formatBalanceFromDOTToOrig,
  polkadotAddressToReferralCode,
  referralCodeToPolkadotAddress,
  RING_REWARD,
  KTON_REWARD,
} from "./utils";
import { isMobile } from "../../utils";

// Polkadot
import { web3Enable, web3AccountsSubscribe, web3FromAddress, web3Accounts } from "@polkadot/extension-dapp";
import Identicon from "@polkadot/react-identicon";
import { Keyring } from "@polkadot/keyring";
import { stringToHex } from "@polkadot/util";

import BN from "bn.js";
import Big from "big.js";

import { useQuery } from "@apollo/client";
import GlobalContributionActivity from "./components/global-contribution-activity";
import ReferralLeaderboard from "./components/referral-leaderboard";
import ConnectionFailedModal from "./components/connection-failed-modal";
import btcTop5 from './top5.json';

const cx = classNames.bind(styles);

const PARA_ID = 2003;
const T1_BLOCK_NUMBER = 8263710;
const LOCAL_STORAGE_CURRENT_ADDRESS_KEY = stringToHex("plo current address");

/**
 * PLO Contribute
 * @returns ReactNode
 */
const PloContribute = () => {
  const echartsRef = useRef();
  const unsubscribeAccounts = useRef(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  // Graphql
  const totalContributeHistory = useQuery(CONTRIBUTES_BY_PARA_ID, { variables: { paraId: PARA_ID } });
  const myContributeHistory = useQuery(CONTRIBUTES_BY_ADDRESS_PARA_ID, {
    variables: { paraId: PARA_ID, address: currentAccount ? currentAccount.address : "" },
  });
  const myReferralCode = useQuery(REFERRAL_CODE_BY_ADDRESS_PARA_ID, {
    variables: { paraId: PARA_ID, address: currentAccount ? currentAccount.address : "" },
  });
  const contributePionners = useQuery(CONTRIBUTE_PIONEERS);
  const myWhoCrowdloan = useQuery(gqlCrowdloanWhoStatisticByAddress(currentAccount ? currentAccount.address : ""));
  const myReferCrwonloan = useQuery(
    gqlCrowdloanReferStatisticByReferralCode(
      currentAccount ? polkadotAddressToReferralCode(currentAccount.address) : ""
    )
  );
  const allWhoCrowdloan = useQuery(ALL_WHO_CROWDLOAN);
  const allReferCrowdloan = useQuery(ALL_REFER_CROWDLOAN);

  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [contributeBtnLoading, setContributeBtnLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [inputDot, setInputDot] = useState("");
  const [inputReferralCode, setInputReferralCode] = useState("");
  const [showTransactionInProgress, setShowTransactionInProgress] = useState(false);
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);
  const [showThanksForSupportModal, setShowThanksForSupportModal] = useState(false);
  const [showConnectionFailedModal, setShowConnectionFailedModal] = useState(false);

  const { api } = useApi();
  const { currentBlockNumber } = useCurrentBlockNumber(api);
  const { currentTotalContribute } = useEcharts(echartsRef.current, totalContributeHistory);
  const { currentAccountBalannce } = useBalanceAll(api, currentAccount ? currentAccount.address : null);

  let referralsContributeHistory = [];
  if (
    !myReferCrwonloan.loading &&
    !myReferCrwonloan.error &&
    myReferCrwonloan.data &&
    myReferCrwonloan.data.crowdloanReferStatistic &&
    myReferCrwonloan.data.crowdloanReferStatistic.contributors &&
    myReferCrwonloan.data.crowdloanReferStatistic.contributors.nodes &&
    myReferCrwonloan.data.crowdloanReferStatistic.contributors.nodes.length
  ) {
    const tmp = [];
    for (let node1 of myReferCrwonloan.data.crowdloanReferStatistic.contributors.nodes) {
      const { block: { number }, extrinsicId, timestamp, balance, id } = node1;

      tmp.push({
        number,
        balance,
        timestamp,
        extrinsicId,
        index: id.split('-')[1]
      })
    }
    referralsContributeHistory = tmp;
  }

  let globalTotalPower = new BN("1000000").mul(DOT_TO_ORIG);
  const allReferContributeData = [];
  if (!allWhoCrowdloan.loading && !allWhoCrowdloan.error && !allReferCrowdloan.loading && !allReferCrowdloan.error) {
    let totalPowerTmp = new BN(0);

    if (
      allWhoCrowdloan.data &&
      allWhoCrowdloan.data.crowdloanWhoStatistics &&
      allWhoCrowdloan.data.crowdloanWhoStatistics.nodes &&
      allWhoCrowdloan.data.crowdloanWhoStatistics.nodes.length
    ) {
      allWhoCrowdloan.data.crowdloanWhoStatistics.nodes.forEach((node) => {
        totalPowerTmp = totalPowerTmp.add(new BN(node.totalPower));
      });
    }

    if (
      allReferCrowdloan.data &&
      allReferCrowdloan.data.crowdloanReferStatistics &&
      allReferCrowdloan.data.crowdloanReferStatistics.nodes &&
      allReferCrowdloan.data.crowdloanReferStatistics.nodes.length
    ) {
      allReferCrowdloan.data.crowdloanReferStatistics.nodes.forEach((node) => {
        totalPowerTmp = totalPowerTmp.add(new BN(node.totalPower));

        allReferContributeData.push({
          user: referralCodeToPolkadotAddress(node.user),
        });
      });
    }

    globalTotalPower = totalPowerTmp.gt(globalTotalPower) ? totalPowerTmp : globalTotalPower;
  }

  let myReferralCodeFromGql = null;
  if (!myReferralCode.loading && !myReferralCode.error && myReferralCode.data.crowdloanMemos.nodes.length) {
    myReferralCodeFromGql = referralCodeToPolkadotAddress(myReferralCode.data.crowdloanMemos.nodes[0].memo);
  }

  let auctionSuccessReward = {
    base: { ring: Big(0), kton: Big(0) },
    bonus: { ring: Big(0), kton: Big(0) },
    referral: { ring: Big(0), kton: Big(0) },
    total: { ring: Big(0), kton: Big(0) },
  };
  if (currentBlockNumber && Number(inputDot) && Number(inputDot) > 0) {
    const inputDotBN = new BN(Number(inputDot)).mul(DOT_TO_ORIG);
    const contributePer = Big(inputDotBN.toString()).div(globalTotalPower.toString());

    const bonusN = currentBlockNumber < T1_BLOCK_NUMBER ? 0.2 : 0;
    const referN =
      isValidAddressPolkadotAddress(inputReferralCode) || isValidAddressPolkadotAddress(myReferralCodeFromGql)
        ? 0.05
        : 0;

    const base = {
      ring: contributePer.mul(RING_REWARD),
      kton: contributePer.mul(KTON_REWARD),
    };
    const bonus = {
      ring: base.ring.mul(bonusN),
      kton: base.kton.mul(bonusN),
    };
    const referral = {
      ring: base.ring.add(bonus.ring).mul(referN),
      kton: base.kton.add(bonus.kton).mul(referN),
    };
    const total = {
      ring: base.ring.add(bonus.ring).add(referral.ring),
      kton: base.kton.add(bonus.kton).add(referral.kton),
    };

    auctionSuccessReward = { base, bonus, referral, total };
  }

  let myTotalContribute = new BN(0);
  let myRingReward = "0";
  let myKtonReward = "0";
  if (
    !myWhoCrowdloan.loading &&
    !myWhoCrowdloan.error &&
    myWhoCrowdloan.data &&
    myWhoCrowdloan.data.crowdloanWhoStatistic
  ) {
    myTotalContribute = new BN(myWhoCrowdloan.data.crowdloanWhoStatistic.totalBalance);

    if (
      myWhoCrowdloan.data.crowdloanWhoStatistic.contributors.nodes &&
      myWhoCrowdloan.data.crowdloanWhoStatistic.contributors.nodes.length
    ) {
      let myRingRewardTmp = new Big(0);
      let myktonRewardTmp = new Big(0);
      for (let node of myWhoCrowdloan.data.crowdloanWhoStatistic.contributors.nodes) {
        const contributePer = Big(node.balance).div(globalTotalPower.toString());

        if (currentBlockNumber) {
          const bonusN = currentBlockNumber < T1_BLOCK_NUMBER ? 0.2 : 0;
          const referN = isValidAddressPolkadotAddress(node.refer) ? 0.05 : 0;

          const base = {
            ring: contributePer.mul(RING_REWARD),
            kton: contributePer.mul(KTON_REWARD),
          };
          const bonus = {
            ring: base.ring.mul(bonusN),
            kton: base.kton.mul(bonusN),
          };
          const referral = {
            ring: base.ring.add(bonus.ring).mul(referN),
            kton: base.kton.add(bonus.kton).mul(referN),
          };
          const total = {
            ring: base.ring.add(bonus.ring).add(referral.ring),
            kton: base.kton.add(bonus.kton).add(referral.kton),
          };

          myRingRewardTmp = myRingRewardTmp.add(total.ring);
          myktonRewardTmp = myktonRewardTmp.add(total.kton);
        }
      }

      myRingReward = myRingRewardTmp.toFixed(4);
      myKtonReward = myktonRewardTmp.toFixed(4);
    }
  }
  const myContributePer = Big(myTotalContribute.toString()).div(globalTotalPower.toString());

  const top5contribute = useMemo(() => btcTop5.reduce((acc, cur) => acc.add(new Big(cur.amount)), new Big('0')), []);

  useEffect(() => {
    const address = localStorage.getItem(LOCAL_STORAGE_CURRENT_ADDRESS_KEY);
    (async () => {
      const extensions = await web3Enable("darwinia.network");
      if (extensions.length === 0) {
        // no extension installed, or the user did not accept the authorization
        // in this case we should inform the use and give a link to the extension
        return;
      }

      const keyring = new Keyring();
      keyring.setSS58Format(0); // Polkadot format address

      if (isMobile()) {
        const allAccounts = await web3Accounts();
        setAccounts(
          allAccounts.map((account) => {
            if (isValidAddressPolkadotAddress(account.address)) {
              const pair = keyring.addFromAddress(account.address);
              if (pair.address === address) {
                setCurrentAccount({ ...account, address: pair.address });
              }
              return { ...account, address: pair.address };
            } else {
              return null;
            }
          })
        );
      } else {
        unsubscribeAccounts.current && unsubscribeAccounts.current();
        unsubscribeAccounts.current = await web3AccountsSubscribe((allAccounts) => {
          setAccounts(
            allAccounts.map((account) => {
              if (isValidAddressPolkadotAddress(account.address)) {
                const pair = keyring.addFromAddress(account.address);
                if (pair.address === address) {
                  setCurrentAccount({ ...account, address: pair.address });
                }
                return { ...account, address: pair.address };
              } else {
                return null;
              }
            })
          );
        });
      }
    })();

    return () => {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = null;
    };
  }, []);

  const handleClickConnectWallet = async () => {
    if (accounts.length) {
      setShowSelectAccountModal(true);
      return;
    }

    const extensions = await web3Enable("darwinia.network");
    if (extensions.length === 0) {
      // no extension installed, or the user did not accept the authorization
      // in this case we should inform the use and give a link to the extension
      setShowConnectionFailedModal(true);
      return;
    }

    const keyring = new Keyring();
    keyring.setSS58Format(0); // Polkadot format address

    if (isMobile()) {
      const allAccounts = await web3Accounts();
      setAccounts(
        allAccounts.map((account) => {
          if (isValidAddressPolkadotAddress(account.address)) {
            const pair = keyring.addFromAddress(account.address);
            return { ...account, address: pair.address };
          } else {
            return null;
          }
        })
      );
      setShowSelectAccountModal(true);
    } else {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = await web3AccountsSubscribe((allAccounts) => {
        setAccounts(
          allAccounts.map((account) => {
            if (isValidAddressPolkadotAddress(account.address)) {
              const pair = keyring.addFromAddress(account.address);
              return { ...account, address: pair.address };
            } else {
              return null;
            }
          })
        );

        setShowSelectAccountModal(true);
      });
    }
  };

  const handleClickSelectAccount = async (account) => {
    setShowSelectAccountModal(false);
    account && setCurrentAccount(account);
    localStorage.setItem(LOCAL_STORAGE_CURRENT_ADDRESS_KEY, account.address);
  };

  const handleChangeInputDot = (e) => {
    if (isValidContributeDOTInput(e.target.value)) {
      setInputDot(e.target.value);
      if (isInsufficientBalance(currentAccountBalannce.availableBalance, e.target.value)) {
        setInsufficientBalance(true);
      } else {
        setInsufficientBalance(false);
      }
    }
  };

  const handleChangeInputReferral = (e) => {
    try {
      const referral = new URLSearchParams(new URL(e.target.value).searchParams).get("referral");
      referral && setInputReferralCode(referral);
    } catch (error) {
      setInputReferralCode(e.target.value);
    }
  };

  const handleClickContribute = async () => {
    if (!api) {
      message.warning("api does not connect yet");
      return;
    }

    if (Number(inputDot) >= 5) {
      const extrinsicContribute = api.tx.crowdloan.contribute(PARA_ID, formatBalanceFromDOTToOrig(inputDot), null);
      const extrinsicAddMemo = myReferralCodeFromGql
        ? api.tx.crowdloan.addMemo(PARA_ID, polkadotAddressToReferralCode(myReferralCodeFromGql))
        : isValidAddressPolkadotAddress(inputReferralCode)
        ? api.tx.crowdloan.addMemo(PARA_ID, polkadotAddressToReferralCode(inputReferralCode))
        : null;
      const injector = await web3FromAddress(currentAccount.address);
      const tx = extrinsicAddMemo ? api.tx.utility.batch([extrinsicContribute, extrinsicAddMemo]) : extrinsicContribute;

      try {
        setContributeBtnLoading(true);
        const unsub = await tx.signAndSend(
          currentAccount.address,
          { signer: injector.signer },
          ({ events = [], status }) => {
            events.forEach(({ phase, event: { data, method, section } }) => {
              console.log(`${phase}: ${section}.${method}:: ${data}`);

              if (method === "Contributed" && section === "crowdloan") {
                // setContributedValue(formatKSMBalance(data[2]));
              }

              if (method === "ExtrinsicSuccess" && section === "system") {
                if (status.isInBlock) {
                  // setContributedBlockHash(status.asInBlock);
                  setShowTransactionInProgress(false);
                  setShowThanksForSupportModal(true);
                  setContributeBtnLoading(false);
                } else if (status.isFinalized) {
                  unsub && unsub();
                }
              }

              if (method === "ExtrinsicFailed" && section === "system") {
                setShowTransactionInProgress(false);
                setContributeBtnLoading(false);
              }
            });
          }
        );
        setShowTransactionInProgress(true);
      } catch (err) {
        console.log(err);
        notification.warning({
          message: "Failed To Contribute",
          description: err.message,
        });
        setShowTransactionInProgress(false);
        setContributeBtnLoading(false);
      } finally {
        //
      }
    }
  };

  const handleClickMaxInput = () => {
    setInputDot(formatBalanceFromOrigToDOT(currentAccountBalannce.availableBalance));
  };

  useEffect(() => {
    const referral = new URLSearchParams(window.location.search).get("referral");
    referral && setInputReferralCode(referral);
  }, []);

  useEffect(() => {
    if (currentAccount && inputReferralCode && currentAccount.address === inputReferralCode) {
      notification.warning({
        message: "Referral Check",
        description: "Can not set yourself account as a referral",
      });
      setInputReferralCode("");
    }
  }, [currentAccount, inputReferralCode]);

  return (
    <div className={cx("main")}>
      <div className={cx("magic-01")} />
      <div className={cx("magic-02")} />

      <Container>
        {/* Heading */}
        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={cx("heading-container")}>
            <div className={cx("heading-container-logo")}>
              <Link to="/">
                <img alt="..." src={darwiniaLogo} className={cx("heading-container-logo-img")} />
              </Link>
              <div className={cx("heading-container-logo-plo")}>
                <span>PLO</span>
              </div>
            </div>

            <div className={cx("heading-container-right")}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://darwinianetwork.medium.com/guide-to-participate-in-the-darwinia-plo-e14b1718787f"
                className={cx("heading-container-right-how-it-works-link")}
              >
                <span>How it works</span>
              </a>
              {currentAccount ? (
                <div className={cx("heading-container-current-account-wrap")}>
                  <div className={cx("heading-container-current-account")}>
                    <span>{shortAddress(currentAccount.address)}</span>
                    <Identicon value={currentAccount.address} size={isMobile() ? 15 : 30} theme="polkadot" />
                  </div>
                  <button
                    className={cx("heading-container-change-account")}
                    onClick={() => setShowSelectAccountModal(true)}
                  >
                    <span>Change</span>
                  </button>
                </div>
              ) : (
                <button className={cx("heading-container-connnect-wallet-btn")} onClick={handleClickConnectWallet}>
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>
          </div>
        </Fade>

        {/* Contribute, Crowloan, Referral link */}
        <Fade bottom fraction={0.1} duration={1200} distance={"50px"}>
          <div className={cx("contribute-crowloan-referral")}>
            <div className={cx("contribute")}>
              <h3 className={cx("contribute-title")}>Contribute</h3>

              <div className={cx("dot-amount-input-wrap")}>
                <p className={cx("contribute-lebal")}>Enter your contribution amount</p>
                <div className={cx("dot-amount-input-control")}>
                  <input className={cx("contribute-input")} value={inputDot} onChange={handleChangeInputDot}></input>
                  <div className={cx("dot-amount-input-suffix")}>
                    <span className={cx("dot-amount-input-dot-suffix")}>DOT</span>
                    <button
                      className={cx("dot-amount-input-max-btn")}
                      onClick={handleClickMaxInput}
                      disabled={!currentAccount}
                    >
                      <span>MAX</span>
                    </button>
                  </div>
                </div>
                <div className={cx("input-dot-tip-wrap")}>
                  <span
                    className={cx("min-contrbution", {
                      warning:
                        (inputDot.length && 0 <= Number(inputDot) && Number(inputDot) < 5) || insufficientBalance,
                    })}
                  >
                    {insufficientBalance ? "Insufficient balance" : "Min contribution: 5 DOT"}
                  </span>
                  <span className={cx("my-available-dot")}>
                    Available: {formatBalanceFromOrigToDOT(currentAccountBalannce.availableBalance)} DOT
                  </span>
                </div>
              </div>

              <div className={cx("referral-code-input-wrap")}>
                <p className={cx("contribute-lebal")}>Enter your referral code (optional)</p>
                <div className={cx("referral-code-input-control")}>
                  <input
                    className={cx("referral-code-input")}
                    value={myReferralCodeFromGql || inputReferralCode}
                    disabled={!!myReferralCodeFromGql}
                    onChange={handleChangeInputReferral}
                  ></input>
                </div>
                <span
                  className={cx("invalid-referral-code", {
                    show: inputReferralCode && !isValidAddressPolkadotAddress(inputReferralCode),
                  })}
                >
                  Invalid referral code
                </span>
              </div>

              <div className={cx("auction-success-rewards-wrap")}>
                <div className={cx("contribute-lebal-wrap")}>
                  <p className={cx("contribute-lebal")}>Auction Success Rewards</p>
                  <Tooltip
                    overlayClassName="tooltip-overlay"
                    overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                    color="white"
                    placement="rightTop"
                    trigger={["click", "hover"]}
                    title={
                      <p className={cx("tips")}>
                        The rewards are dynamic.
                        <br />
                        <br />
                        The rewards on basis of contribution share will be displayed in real-time.
                        <br />
                        <br />
                        RING and KTON will be released linearly based on the contribution share after Darwinia Network
                        wins the slot auction.
                      </p>
                    }
                  >
                    <img alt="..." src={infoIcon} className={cx("info-icon")} />
                  </Tooltip>
                </div>
                <div className={cx("auction-success-rewards")}>
                  <span>Base</span>
                  <span className={cx("token-amount")}>{auctionSuccessReward.base.ring.toFixed(2)} RING</span>
                  <span className={cx("token-amount")}>{auctionSuccessReward.base.kton.toFixed(2)} KTON</span>

                  <div className={cx("auction-success-rewards-content-wrap")}>
                    <span>Bonus</span>
                    <div className={cx("limited-time")}>
                      <span>Limited Time</span>
                    </div>
                  </div>
                  <span className={cx("token-amount")}>{auctionSuccessReward.bonus.ring.toFixed(2)} RING</span>
                  <span className={cx("token-amount")}>{auctionSuccessReward.bonus.kton.toFixed(2)} KTON</span>

                  <span>Referral</span>
                  <span className={cx("token-amount")}>{auctionSuccessReward.referral.ring.toFixed(2)} RING</span>
                  <span className={cx("token-amount")}>{auctionSuccessReward.referral.kton.toFixed(2)} KTON</span>

                  <span>Total</span>
                  <span className={cx("total", "token-amount")}>{auctionSuccessReward.total.ring.toFixed(2)} RING</span>
                  <span className={cx("total", "token-amount")}>{auctionSuccessReward.total.kton.toFixed(2)} KTON</span>
                </div>
              </div>

              <div className={cx("contribute-btn-container")}>
                {currentAccount ? (
                  <button
                    className={cx("contribute-btn")}
                    onClick={handleClickContribute}
                    disabled={!currentAccount || Number(inputDot) < 5 || contributeBtnLoading || insufficientBalance}
                  >
                    <Spin spinning={contributeBtnLoading} wrapperClassName={cx("contribute-btn-spinning")}>
                      <span>{contributeBtnLoading ? "" : "Contribute"}</span>
                    </Spin>
                  </button>
                ) : (
                  <button className={cx("my-contribute-connect-wallet-btn")} onClick={handleClickConnectWallet}>
                    <span>Connect Wallet</span>
                  </button>
                )}
              </div>
            </div>

            <div className={cx("crowloan-referral")}>
              <div className={cx("crowloan")}>
                <h3 className={cx("crowloan-title")}>The Crowdloan</h3>

                <div className={cx("total-rewards-wrap")}>
                  <span>Total rewards: </span>
                  <div className={cx("total-ring-rewards")}>
                    <img alt="..." src={ringIcon} />
                    <span>200,000,000</span>
                  </div>
                  <div className={cx("total-kton-rewards")}>
                    <img alt="..." src={ktonIcon} />
                    <span>8,000</span>
                  </div>
                </div>

                <div ref={echartsRef} className={cx("crowloan-echarts")} />

                <div className={cx("current-total-contribute")}>
                  <span>Current total contributions</span>
                  <div className={cx("total-contribute-dot")}>
                    <img alt="..." src={dotIcon} />
                    <span>{formatBalanceFromOrigToDOT(currentTotalContribute)} DOT</span>
                  </div>
                </div>
              </div>

              <div className={cx("my-referral-link")}>
                <div className={cx("my-referral-link-title-wrap")}>
                  <h3 className={cx("my-referral-link-title")}>My Referral Link</h3>
                  {currentAccount && (
                    <Tooltip
                      overlayClassName="tooltip-overlay"
                      overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                      color="white"
                      placement="rightBottom"
                      trigger={["click", "hover"]}
                      title={
                        <p className={cx("tips")}>
                          You can copy your referral link to invite people to participate and win more awards.
                        </p>
                      }
                    >
                      <img alt="..." src={infoIcon} className={cx("info-icon")} />
                    </Tooltip>
                  )}
                </div>
                {currentAccount ? (
                  <Typography.Link
                    rel="noopener noreferrer"
                    className={cx("my-referral-link-content", "link")}
                    code={false}
                    copyable={{
                      icon: <img alt="..." src={copyIcon} style={{ width: "16px" }} />,
                      text: `${window.location.origin}/plo_contribute?referral=${currentAccount.address}`,
                    }}
                    target="_blank"
                    href={`/plo_contribute?referral=${currentAccount.address}`}
                  >
                    {`${window.location.origin}/plo_contribute?referral=${
                      isMobile() ? shortAddress(currentAccount.address) : currentAccount.address
                    }`}
                  </Typography.Link>
                ) : (
                  <span className={cx("my-referral-link-content")}>
                    Please connect wallet first, and you can copy your referral link to invite people to participate and
                    win more awards.
                  </span>
                )}
              </div>
            </div>
          </div>
        </Fade>

        {/* My Contribute */}
        <Fade bottom fraction={0.1} duration={1200} distance={"50px"}>
          <div className={cx("my-contribute")}>
            <div className={cx("my-contribute-title-wrap")}>
              <div className={cx("my-contribute-title", { connected: !!currentAccount })}>
                <h3>My Contribution</h3>
                <span>
                  *The reward amount will change in real-time according to the progress of the crowdloan, and the final
                  result shall prevail.
                </span>
              </div>
              <div></div>
              {currentAccount ? (
                <div className={cx("my-contribute-container-current-account-wrap")}>
                  <div className={cx("heading-container-current-account")}>
                    <span>{shortAddress(currentAccount.address)}</span>
                    <Identicon value={currentAccount.address} size={isMobile() ? 15 : 30} theme="polkadot" />
                  </div>
                  <button
                    className={cx("heading-container-change-account")}
                    onClick={() => setShowSelectAccountModal(true)}
                  >
                    <span>Change</span>
                  </button>
                </div>
              ) : (
                <button className={cx("my-contribute-connect-wallet-btn")} onClick={handleClickConnectWallet}>
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>

            <div className={cx("contribute-info-card")}>
              <div className={cx("contribute-info-item")}>
                <span className={cx("contribute-info-item-title")}>Total DOT Contributed</span>
                <div className={cx("current-tag", "space")}>
                  <span>Current</span>
                </div>
                <span className={cx("contribute-info-item-value")}>
                  {formatBalanceFromOrigToDOT(myTotalContribute).split(".")[0]}(
                  {myTotalContribute.isZero() ? 0 : (myContributePer * 100).toFixed(4)}%)
                </span>
                <button className={cx("claim-reward-btn", "space")} disabled={true}>
                  <span>Claim</span>
                </button>
              </div>

              <div className={cx("my-contribute-line")} />

              <div className={cx("contribute-info-item")}>
                <div className={cx("contribute-info-item-title-wrap")}>
                  <span className={cx("contribute-info-item-title")}>Metaverse NFT Package</span>
                  <Tooltip
                    overlayClassName="tooltip-overlay"
                    overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                    color="white"
                    placement="rightTop"
                    trigger={["click", "hover"]}
                    title={
                      <p className={cx("tips")}>
                        You can get an{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/">
                          Evolution Land
                        </a>{" "}
                        Metaverse NFT Package when your contribution share greater or equal 10 DOT and you will have a
                        chance to get a limited edition commemorative NFT in the Package.
                        <br />
                        <br />
                        The Metaverse NFT Package will be awarded after the Polkadot Slot Auction is terminated
                        regardless of whether Darwinia Network wins the slot auction or not.
                      </p>
                    }
                  >
                    <img alt="..." src={infoIcon} className={cx("info-icon")} />
                  </Tooltip>
                </div>
                <div className={cx("current-tag", "space")}>
                  <span>Current</span>
                </div>
                <span className={cx("contribute-info-item-value")}>
                  {myTotalContribute.gte(DOT_TO_ORIG.muln(10)) ? "1" : "0"}
                </span>
                <button className={cx("claim-reward-btn")} disabled={true}>
                  <span>Claim</span>
                </button>
              </div>

             <BTCReward currentAccount={currentAccount} /> 

              <div className={cx("contribute-info-item-wrap")}>
                <div className={cx("contribute-info-item")}>
                  <div className={cx("contribute-info-item-title-wrap")}>
                    <span className={cx("contribute-info-item-title")}>RING Rewards</span>
                    <Tooltip
                      overlayClassName="tooltip-overlay"
                      overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                      color="white"
                      placement="rightTop"
                      trigger={["click", "hover"]}
                      title={
                        <p className={cx("tips")}>
                          RING rewards are dynamic.
                          <br />
                          <br />
                          200,000,000 RING will be released linearly based on the contribution share after Darwinia
                          Network wins the slot auction.
                        </p>
                      }
                    >
                      <img alt="..." src={infoIcon} className={cx("info-icon")} />
                    </Tooltip>
                  </div>
                  <div className={cx("current-tag")}>
                    <span>Current</span>
                  </div>
                  <span className={cx("contribute-info-item-value")}>{myRingReward}</span>
                  <button className={cx("claim-reward-btn", "space")} disabled={true}>
                    <span>Claim</span>
                  </button>
                </div>
                <div className={cx("contribute-info-item")}>
                  <div className={cx("contribute-info-item-title-wrap")}>
                    <span className={cx("contribute-info-item-title")}>KTON Rewards</span>
                    <Tooltip
                      overlayClassName="tooltip-overlay"
                      overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                      color="white"
                      placement="rightTop"
                      trigger={["click", "hover"]}
                      title={
                        <p className={cx("tips")}>
                          KTON rewards are dynamic.
                          <br />
                          <br />
                          8,000 KTON will be released linearly based on the contribution share after Darwinia Network
                          wins the slot auction.
                        </p>
                      }
                    >
                      <img alt="..." src={infoIcon} className={cx("info-icon")} />
                    </Tooltip>
                  </div>
                  <div className={cx("current-tag")}>
                    <span>Current</span>
                  </div>
                  <span className={cx("contribute-info-item-value")}>{myKtonReward}</span>
                  <button className={cx("claim-reward-btn", "space")} disabled={true}>
                    <span>Claim</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={cx("my-contribute-history")}>
              <div className={cx("contribute-history-wrap")}>
                <p>Contribution history</p>
                {!myContributeHistory.loading &&
                !myContributeHistory.error &&
                myContributeHistory.data.crowdloanContributeds.nodes.length ? (
                  <div className={cx("contribute-history-control")}>
                    {myContributeHistory.data.crowdloanContributeds.nodes.map((node, index) => (
                      <div className={cx("contribute-history-control-item")} key={index}>
                        <span>
                          {new Date(node.timestamp).toDateString().split(" ")[1]}{" "}
                          {new Date(node.timestamp).toDateString().split(" ")[2]}
                        </span>
                        <span className={cx("dot-amount")}>{formatBalanceFromOrigToDOT(node.balance)} DOT</span>
                        <a
                          className={cx("hash-id")}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://polkadot.subscan.io/extrinsic/${node.extrinsicId}`}
                        >
                          {node.id}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={cx("contribute-history-control", "no-data")}>No Data</div>
                )}
              </div>
              <div className={cx("referral-history-wrap")}>
                <p>Referral history</p>
                {referralsContributeHistory.length ? (
                  <div className={cx("referral-history-control")}>
                    {referralsContributeHistory.map((data, index) => (
                      <div className={cx("referral-history-control-item")} key={`${index}}`}>
                        <span>
                          {new Date(data.timestamp).toDateString().split(" ")[1]}{" "}
                          {new Date(data.timestamp).toDateString().split(" ")[2]}
                        </span>
                        <span className={cx("dot-amount")}>{formatBalanceFromOrigToDOT(data.balance)} DOT</span>
                        <a
                          className={cx("hash-id")}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://polkadot.subscan.io/extrinsic/${data.extrinsicId}`}
                        >
                          {data.number}-{data.index}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={cx("referral-history-control", "no-data")}>No Data</div>
                )}
              </div>
            </div>
          </div>
        </Fade>

        {/* Contribute Pioneers */}
        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={cx("contribute-pioneers")}>
            <div className={cx("contribute-pioneers-title-wrap")}>
              <div className={cx("contribute-pioneers-title")}>
                <h3>Contribution Pioneers</h3>
                <Tooltip
                  overlayClassName="tooltip-overlay"
                  overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                  color="white"
                  placement="rightTop"
                  trigger={["click", "hover"]}
                  title={
                    <p className={cx("tips")}>
                      At the beginning of the second round auction, supporters who have contributed more than 10,000 DOT
                      and the top 5 people (exclude the Exchange address) ranking will distribute 1 BTC in proportion to
                      their contribution.
                    </p>
                  }
                >
                  <img alt="..." src={infoIcon} className={cx("info-icon")} />
                </Tooltip>
              </div>
              {currentAccount &&
                contributePionners.data &&
                contributePionners.data.accounts &&
                contributePionners.data.accounts.nodes &&
                contributePionners.data.accounts.nodes.length &&
                contributePionners.data.accounts.nodes.findIndex((node) => node.id === currentAccount.address) !==
                  -1 && (
                  <div className={cx("contribute-pioneers-title-rank")}>
                    <Identicon
                      value={currentAccount.address}
                      className={cx("pioneers-item-account-icon")}
                      size={isMobile() ? 15 : 30}
                      theme="polkadot"
                    />
                    <span>
                      My Rank:{" "}
                      {contributePionners.data.accounts.nodes.findIndex((node) => node.id === currentAccount.address) +
                        1}
                    </span>
                  </div>
                )}
            </div>

            <div className={cx("pioneers-container")}>
              {contributePionners.data &&
              contributePionners.data.accounts &&
              contributePionners.data.accounts.nodes &&
              contributePionners.data.accounts.nodes.length
                ? contributePionners.data.accounts.nodes.map((node, index) =>
                    index > 4 ? null : (
                      <div className={cx("pioneers-item")} key={index}>
                        <div className={cx("pioneers-item-num-icon")}>
                          <span>{index + 1}</span>
                        </div>
                        <Identicon
                          value={node.id}
                          className={cx("pioneers-item-account-icon")}
                          size={isMobile() ? 26 : 30}
                          theme="polkadot"
                        />
                        <span className={cx("pioneers-item-account-name")}>{shortAddress(node.id)}</span>
                        <span className={cx("pioneers-item-dot-amount")}>
                          {formatBalanceFromOrigToDOT(node.contributedTotal)} DOT
                        </span>
                      </div>
                    )
                  )
                : null}
            </div>
          </div>
        </Fade>

        <ReferralLeaderboard globalTotalPower={globalTotalPower} />

        <GlobalContributionActivity
          allReferContributeData={allReferContributeData}
          globalTotalPower={globalTotalPower}
          top5contribute={top5contribute}
        />

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <p className={cx("all-right")}>Copyright@2021 Darwinia Network</p>
        </Fade>
      </Container>

      <Modal
        className={cx("transaction-in-progress-modal")}
        visible={showTransactionInProgress}
        footer={null}
        title={null}
        closable={true}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        onCancel={() => setShowTransactionInProgress(false)}
      >
        <div className={cx("transaction-in-progress")}>
          <Spin size="large" />
          <span>Transaction in progress ...</span>
        </div>
      </Modal>

      <Modal
        className={cx("select-account-modal")}
        visible={showSelectAccountModal}
        footer={null}
        title="Select an Account"
        closable={true}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        onCancel={() => setShowSelectAccountModal(false)}
        width={580}
      >
        <div className={cx("accounts-container")}>
          {accounts.map((account, index) =>
            account ? (
              <button className={cx("accounts-item")} key={index} onClick={() => handleClickSelectAccount(account)}>
                <Identicon value={account.address} size={isMobile() ? 30 : 40} theme="polkadot" />
                <div className={cx("accounts-item-name-address")}>
                  <span className={cx("name")}>{account.meta.name}</span>
                  <span className={cx("address")}>{account.address}</span>
                </div>
              </button>
            ) : null
          )}
        </div>
      </Modal>

      <Modal
        className={cx("thanks-for-support-modal")}
        visible={showThanksForSupportModal}
        onCancel={() => setShowThanksForSupportModal(false)}
        title={null}
        footer={null}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
      >
        <div className={cx("thanks-for-support-modal-content")}>
          <h3 className={cx("thanks-for-support-modal-content-title")}>
            <span role="img" aria-label="thx">
              🎉
            </span>{" "}
            Thank you for supporting Darwinia Network!
          </h3>
          <p className={cx("thanks-for-support-modal-content-desc")}>
            You can track the latest progress of Darwinia Network PLO in the following ways:
          </p>
          <div className={cx("thanks-for-support-modal-content-contact")}>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/DarwiniaNetwork"
            >
              <img alt="..." src={twitterIcon} />
            </a>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://darwinianetwork.medium.com/"
            >
              <img alt="..." src={mediumIcon} />
            </a>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/DarwiniaNetwork"
            >
              <img alt="..." src={telegramIcon} />
            </a>
            <a
              className={cx("thanks-for-support-modal-content-contact-item")}
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.com/channels/456092011347443723/795384466930663434"
            >
              <img alt="..." src={discordIcon} />
            </a>
          </div>
        </div>
      </Modal>

      <ConnectionFailedModal
        showConnectionFailedModal={showConnectionFailedModal}
        onCancel={() => setShowConnectionFailedModal(false)}
      />
    </div>
  );
};

export default React.memo(PloContribute);
