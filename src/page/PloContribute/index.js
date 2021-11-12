import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tooltip, Table, Modal, Typography, notification } from "antd";
import Fade from "react-reveal/Fade";

import darwiniaLogo from "./img/logo-darwinia.png";
import infoIcon from "./img/info-icon.png";
import ringIcon from "./img/ring-icon.png";
import ktonIcon from "./img/kton-icon.png";
import dotIcon from "./img/dot-icon.png";
import modalCloseIcon from "./img/modal-close.png";
import copyIcon from "./img/copy-icon.png";

import twitterIcon from "./img/twitter.png";
import mediumIcon from "./img/medium.png";
import telegramIcon from "./img/telegram.png";
import discordIcon from "./img/discord.png";

import {
  gqlContributesByParaId,
  gqlSomeOneContributesByAddressAndParaId,
  gqlReferralsOfSomeOneByAddressAndParaId,
  gqlGetReferralCodeOfSomeOneByAddressAndParaId,
  CONTRIBUTE_PIONEERS,
  ALL_WHO_CROWDLOAN,
  ALL_REFER_CROWDLOAN,
} from "./gql";

import { useEcharts } from "./useEcharts";
import { useApi, useCurrentBlockNumber, useBalanceAll } from "./hooks";

import {
  DOT_TO_ORIG,
  shortAddress,
  isValidAddressPolkadotAddress,
  formatBalanceFromOrigToDOT,
  formatBalanceFromDOTToOrig,
} from "./utils";
import { isMobile } from "../../utils";

// Polkadot
import { web3Enable, web3AccountsSubscribe, web3FromAddress } from "@polkadot/extension-dapp";
import Identicon from "@polkadot/react-identicon";
import { Keyring } from "@polkadot/keyring";
import BN from "bn.js";
import Big from "big.js";

import { graphqlClient } from "../../graphql";
import { useQuery } from "@apollo/client";

const cx = classNames.bind(styles);

const PARA_ID = 2003;
const T1_BLOCK_NUMBER = 8263710;
const RING_REWARD = 200000000;
const KTON_REWARD = 8000;

/**
 * PLO Contribute
 * @returns ReactNode
 */
const PloContribute = () => {
  const echartsRef = useRef();
  const unsubscribeAccounts = useRef(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  // Graphql
  const totalContributeHistory = useQuery(gqlContributesByParaId(PARA_ID));
  const myContributeHistoty = useQuery(
    gqlSomeOneContributesByAddressAndParaId(currentAccount ? currentAccount.address : "", PARA_ID)
  );
  const myReferrals = useQuery(
    gqlReferralsOfSomeOneByAddressAndParaId(currentAccount ? currentAccount.address : "", PARA_ID)
  );
  const myReferralCode = useQuery(
    gqlGetReferralCodeOfSomeOneByAddressAndParaId(currentAccount ? currentAccount.address : "", PARA_ID)
  );
  const contributePionners = useQuery(CONTRIBUTE_PIONEERS);
  const allWhoCrowdloan = useQuery(ALL_WHO_CROWDLOAN);
  const allReferCrowdloan = useQuery(ALL_REFER_CROWDLOAN);

  const [accounts, setAccounts] = useState([]);
  const [inputDot, setInputDot] = useState("");
  const [inputReferralCode, setInputReferralCode] = useState("");
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);
  const [showThanksForSupportModal, setShowThanksForSupportModal] = useState(false);

  const { api } = useApi();
  const { currentBlockNumber } = useCurrentBlockNumber(api);
  const { currentTotalContribute } = useEcharts(echartsRef.current, totalContributeHistory);
  const { currentAccountBalannce } = useBalanceAll(api, currentAccount ? currentAccount.address : null);

  let referralsContributeHistory = [];
  (async (_myReferrals) => {
    const results = [];
    if (
      !_myReferrals.loading &&
      !_myReferrals.error &&
      _myReferrals.data.events.nodes &&
      _myReferrals.data.events.nodes.length
    ) {
      for (let node of _myReferrals.data.events.nodes) {
        const res = await graphqlClient.query({
          query: gqlSomeOneContributesByAddressAndParaId(JSON.parse(node.data)[0], PARA_ID),
        });
        results.push(res);
      }
      if (results.length) {
        referralsContributeHistory = results;
      }
    }
  })(myReferrals);

  let globalTotalPower = new BN("1000000").mul(DOT_TO_ORIG);
  const allWhoContributeData = [];
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

        allWhoContributeData.push({
          user: node.user,
          totalPower: node.totalPower,
          totalBalance: node.totalBalance,
        });
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
          user: node.user,
          totalPower: node.totalPower,
          totalBalance: node.totalBalance,
          contributorsCount: node.contributors.nodes.length,
        });
      });
    }

    globalTotalPower = totalPowerTmp.gt(globalTotalPower) ? totalPowerTmp : globalTotalPower;
  }

  const referralLeaderboradData = [];
  if (!allReferCrowdloan.loading && !allReferCrowdloan.error) {
    if (
      allReferCrowdloan.data &&
      allReferCrowdloan.data.crowdloanReferStatistics &&
      allReferCrowdloan.data.crowdloanReferStatistics.nodes &&
      allReferCrowdloan.data.crowdloanReferStatistics.nodes.length
    ) {
      allReferCrowdloan.data.crowdloanReferStatistics.nodes.forEach((node) => {
        const nodeTotalPowerBN = new BN(node.totalPower);
        const contributePer = Big(nodeTotalPowerBN.toString()).div(globalTotalPower.toString());

        referralLeaderboradData.push({
          address: node.user,
          referrals: node.contributors.nodes.length,
          accumulatedContribution: node.totalBalance,
          refferalRewards: {
            ring: contributePer.mul(RING_REWARD),
            kton: contributePer.mul(KTON_REWARD),
          },
        });
      });
    }
  }

  let myReferralCodeFromGql = null;
  if (!myReferralCode.loading && !myReferralCode.error && myReferralCode.data.events.nodes.length) {
    myReferralCodeFromGql = JSON.parse(myReferralCode.data.events.nodes[0].data)[2];
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
  if (
    !myContributeHistoty.loading &&
    !myContributeHistoty.error &&
    myContributeHistoty.data &&
    myContributeHistoty.data.extrinsics.nodes.length &&
    myContributeHistoty.data.extrinsics.nodes[0].events.nodes.length
  ) {
    myTotalContribute = new BN(0);
    myContributeHistoty.data.extrinsics.nodes.forEach((node1) => {
      node1.events.nodes.forEach((node2) => {
        myTotalContribute = myTotalContribute.add(new BN(JSON.parse(node2.data)[2]));
      });
    });
  }

  const myContributePer =
    myTotalContribute.isZero() || currentTotalContribute.isZero()
      ? 0
      : 1.0 / currentTotalContribute.div(myTotalContribute).toNumber();

  const myRingReward = (myContributePer * RING_REWARD).toFixed(2);
  const myKtonReward = (myContributePer * KTON_REWARD).toFixed(2);

  let myBtcReward = 0;
  let top5contribute = new BN(0);
  if (
    contributePionners.data &&
    contributePionners.data.accounts &&
    contributePionners.data.accounts.nodes &&
    contributePionners.data.accounts.nodes.length
  ) {
    top5contribute = new BN(0);
    let myContribute = new BN(0);

    for (let i = 0; i < contributePionners.data.accounts.nodes.length; i++) {
      if (i > 4) {
        break;
      }
      const node = contributePionners.data.accounts.nodes[i];
      const nodeContributedTotalBN = new BN(node.contributedTotal);
      if (currentAccount && currentAccount.address === node.id) {
        myContribute = nodeContributedTotalBN;
      }
      top5contribute = top5contribute.add(nodeContributedTotalBN);
    }

    if (!myContribute.isZero() && myContribute.gte(DOT_TO_ORIG.muln(10000))) {
      if (top5contribute.div(myContribute).lt(DOT_TO_ORIG)) {
        myBtcReward = (1.0 / top5contribute.div(myContribute).toNumber()).toFixed(6);
      }
    }
  }

  const globalContributeColumns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "left",
      width: "17%",
      render: (text) => (
        <a
          className={cx("global-contribute-address")}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://polkadot.subscan.io/account/${text}`}
        >
          {shortAddress(text)}
        </a>
      ),
    },
    {
      title: "Contributed DOT",
      dataIndex: "myDot",
      key: "myDot",
      align: "center",
    },
    {
      title: "Referrals",
      dataIndex: "referrals",
      key: "referrals",
      align: "center",
    },
    {
      title: `Referrer's Contributed DOT`,
      dataIndex: "referralDot",
      key: "referralDot",
      align: "center",
    },
    {
      title: "Current RING Rewards",
      dataIndex: "curRingRewards",
      key: "curRingRewards",
      align: "center",
    },
    {
      title: "Current KTON Rewards",
      dataIndex: "curKtonRewards",
      key: "curKtonRewards",
      align: "center",
    },
    {
      title: "Current BTC Rewards",
      dataIndex: "curBtcRewards",
      key: "curBtcRewards",
      align: "center",
    },
    {
      title: "Metaverse NFT Package",
      dataIndex: "curNft",
      key: "curNft",
      align: "center",
    },
  ];

  const globalContributeDataSource = [];
  for (let i = 0; i < allWhoContributeData.length; i++) {
    const nodeWho = allWhoContributeData[i];
    const nodeRefer = allReferContributeData.find((node) => node.user === nodeWho.user);

    const nodeWhoTotalBalanceBN = new BN(nodeWho.totalBalance);
    const contributePer = Big(nodeWho.totalPower).div(globalTotalPower.toString());

    let btcR = 0;
    if (
      i < 5 &&
      nodeWhoTotalBalanceBN.gte(DOT_TO_ORIG.muln(10000)) &&
      !top5contribute.isZero() &&
      top5contribute.div(nodeWhoTotalBalanceBN).lt(DOT_TO_ORIG)
    ) {
      btcR = Big(nodeWhoTotalBalanceBN.toString()).div(top5contribute.toString()).toFixed(8);
    }

    globalContributeDataSource.push({
      key: i,
      address: nodeWho.user,
      myDot: formatBalanceFromOrigToDOT(nodeWho.totalBalance),
      referrals: nodeRefer ? nodeRefer.contributorsCount : 0,
      referralDot: nodeRefer ? formatBalanceFromOrigToDOT(nodeRefer.totalBalance) : 0,
      curRingRewards: contributePer.mul(RING_REWARD).toFixed(8),
      curKtonRewards: contributePer.mul(KTON_REWARD).toFixed(8),
      curBtcRewards: btcR,
      curNft: "No Status",
    });
  }

  const handleClickConnectWallet = async () => {
    const extensions = await web3Enable("darwinia.network");
    if (extensions.length === 0) {
      // no extension installed, or the user did not accept the authorization
      // in this case we should inform the use and give a link to the extension
      return;
    }

    const keyring = new Keyring();
    keyring.setSS58Format(0); // Polkadot format address

    unsubscribeAccounts.current = await web3AccountsSubscribe((allAccounts) => {
      setAccounts(
        allAccounts.map((account) => {
          const pair = keyring.addFromAddress(account.address);
          return { ...account, address: pair.address };
        })
      );

      setShowSelectAccountModal(true);
    });
  };

  useEffect(() => {
    return () => {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = null;
    };
  }, []);

  const handleClickSelectAccount = async (account) => {
    setShowSelectAccountModal(false);
    account && setCurrentAccount(account);
  };

  const handleChangeInputDot = (e) => {
    setInputDot(e.target.value);
  };

  const handleChangeInputReferral = (e) => {
    setInputReferralCode(e.target.value);
  };

  const handleClickContribute = async () => {
    if (Number(inputDot) > 5) {
      const extrinsicContribute = api.tx.crowdloan.contribute(PARA_ID, formatBalanceFromDOTToOrig(inputDot), null);
      const extrinsicAddMemo =
        !myReferralCodeFromGql && isValidAddressPolkadotAddress(inputReferralCode)
          ? api.tx.crowdloan.addMemo(PARA_ID, inputReferralCode)
          : null;
      const injector = await web3FromAddress(currentAccount.address);
      const tx = extrinsicAddMemo ? api.tx.utility.batch([extrinsicContribute, extrinsicAddMemo]) : extrinsicContribute;

      try {
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
                  setShowThanksForSupportModal(true);
                } else if (status.isFinalized) {
                  unsub && unsub();
                }
              }

              if (method === "ExtrinsicFailed" && section === "system") {
                // setDisableContributeBtn(false);
              }
            });
          }
        );
      } catch (err) {
        console.log(err);
        notification.warning({
          message: "Failed To Contribute",
          description: err.message,
        });
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
                  <span className={cx("min-contrbution", { warning: 0 < Number(inputDot) && Number(inputDot) < 5 })}>
                    Min contribution: 5 DOT
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

              <button
                className={cx("contribute-btn")}
                onClick={handleClickContribute}
                disabled={!currentAccount || Number(inputDot) < 5}
              >
                <span>Contribute</span>
              </button>
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
                    copyable={{ icon: <img alt="..." src={copyIcon} style={{ width: "16px" }} /> }}
                    target="_blank"
                    href={`/plo_contribute?referral=${currentAccount.address}`}
                  >
                    {`https://darwinia.network/plo_contribute?referral=${currentAccount.address}`}
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
                  {myTotalContribute.isZero() ? 0 : (myContributePer * 100).toFixed(2)}%)
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

              <div className={cx("contribute-info-item")}>
                <div className={cx("contribute-info-item-title-wrap")}>
                  <span className={cx("contribute-info-item-title")}>BTC Rewards</span>
                  <Tooltip
                    overlayClassName="tooltip-overlay"
                    overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                    color="white"
                    placement="rightTop"
                    trigger={["click", "hover"]}
                    title={
                      <p className={cx("tips")}>
                        BTC rewards are dynamic.
                        <br />
                        <br />
                        At the beginning of the second round auction, supporters who have contributed more than 10,000
                        DOT and the top 5 people (exclude the Exchange address) ranking will distribute 1 BTC in
                        proportion to their contribution.
                        <br />
                        <br />1 BTC will be released immediately after the second round auction starts regardless of
                        whether Darwinia Network wins the slot auction or not.
                      </p>
                    }
                  >
                    <img alt="..." src={infoIcon} className={cx("info-icon")} />
                  </Tooltip>
                </div>
                <div className={cx("current-tag")}>
                  <span>Current</span>
                </div>
                <span className={cx("contribute-info-item-value")}>{myBtcReward}</span>
                <button className={cx("claim-reward-btn")} disabled={true}>
                  <span>Claim</span>
                </button>
              </div>

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
                {!myContributeHistoty.loading &&
                !myContributeHistoty.error &&
                myContributeHistoty.data.extrinsics.nodes.length &&
                myContributeHistoty.data.extrinsics.nodes[0].events.nodes.length ? (
                  <div className={cx("contribute-history-control")}>
                    {myContributeHistoty.data.extrinsics.nodes.map((node1, index1) =>
                      node1.events.nodes.map((node2, index2) => (
                        <div className={cx("contribute-history-control-item")} key={`${index1}-${index2}`}>
                          <span>
                            {new Date(node2.timestamp).toDateString().split(" ")[1]}{" "}
                            {new Date(node2.timestamp).toDateString().split(" ")[2]}
                          </span>
                          <span className={cx("dot-amount")}>
                            {formatBalanceFromOrigToDOT(JSON.parse(node2.data)[2])} DOT
                          </span>
                          <a
                            className={cx("hash-id")}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://polkadot.subscan.io/extrinsic/${node2.id}`}
                          >
                            {node2.id}
                          </a>
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  <div className={cx("contribute-history-control", "no-data")}>No Data</div>
                )}
              </div>
              <div className={cx("referral-history-wrap")}>
                <p>Referral history</p>
                {referralsContributeHistory.length ? (
                  <div className={cx("referral-history-control")}>
                    {referralsContributeHistory.map((someone, index0) =>
                      someone.data.extrinsics.nodes.map((node1, index1) =>
                        node1.events.nodes.map((node2, index2) => (
                          <div className={cx("referral-history-control-item")} key={`${index0}-${index1}-${index2}`}>
                            <span>
                              {new Date(node2.timestamp).toDateString().split(" ")[1]}{" "}
                              {new Date(node2.timestamp).toDateString().split(" ")[2]}
                            </span>
                            <span className={cx("dot-amount")}>
                              {formatBalanceFromOrigToDOT(JSON.parse(node2.data)[2])} DOT
                            </span>
                            <a
                              className={cx("hash-id")}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://polkadot.subscan.io/extrinsic/${node2.id}`}
                            >
                              {node2.id}
                            </a>
                          </div>
                        ))
                      )
                    )}
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

        {/* Referral Leaderboard */}
        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <div className={cx("referral-leaderboard")}>
            <h3 className={cx("referral-leaderboard-title")}>Referral Leaderboard</h3>
            <div className={cx("referral-leaderboard-control")}>
              <div className={cx("referral-leaderboard-item")}>
                <span className={cx("referral-leaderboard-item-rank")}>Rank</span>
                <span className={cx("referral-leaderboard-item-address")}>Address</span>
                <span className={cx("referral-leaderboard-item-referrals")}>Referrals</span>
                <span className={cx("referral-leaderboard-item-accumulated")}>Accumulated Contribution</span>
                <span className={cx("referral-leaderboard-item-rewards")}>Refferal Rewards</span>
              </div>

              {referralLeaderboradData.length ? (
                referralLeaderboradData.map((data, index) => (
                  <div className={cx("referral-leaderboard-item")} key={index}>
                    <div className={cx("referral-leaderboard-item-rank")}>
                      <div className={cx({ rank: index < 5, rank2: 5 <= index && index < 100, rank3: 100 <= index })}>
                        <span>{index + 1}</span>
                      </div>
                    </div>
                    <a
                      className={cx("referral-leaderboard-item-address")}
                      style={{ color: "#488CCB" }}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://polkadot.subscan.io/account/15S2EPQ5DCdeBB3Dsrpe2obfrpm3Gy9J6xLufgSC4URdJ5bQ`}
                    >
                      {shortAddress(data.address)}
                    </a>
                    <span className={cx("referral-leaderboard-item-referrals")}>{data.referrals}</span>
                    <span className={cx("referral-leaderboard-item-accumulated")}>
                      {formatBalanceFromOrigToDOT(data.accumulatedContribution)} DOT
                    </span>
                    <div className={cx("referral-leaderboard-item-rewards")}>
                      <span>{data.refferalRewards.ring.toFixed(2)} RING</span>
                      <span>{data.refferalRewards.kton.toFixed(2)} KTON</span>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ marginTop: "20px", textAlign: "center" }}>No Data</div>
              )}
            </div>
          </div>
        </Fade>

        {/* Global Contribution Activity */}
        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <Table
            className={cx("global-contribute")}
            columns={globalContributeColumns}
            dataSource={globalContributeDataSource}
            title={() => "Global Contribution Activity"}
            pagination={{
              size: "small",
              showSizeChanger: false,
            }}
          />
        </Fade>

        <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
          <p className={cx("all-right")}>Copyright@2021 Darwinia Network</p>
        </Fade>
      </Container>

      <Modal
        className={cx("select-account-modal")}
        visible={showSelectAccountModal}
        footer={null}
        title="Select an Account"
        closable={true}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        onCancel={() => setShowSelectAccountModal(false)}
        width={560}
      >
        <div className={cx("accounts-container")}>
          {accounts.map((account, index) => (
            <button className={cx("accounts-item")} key={index} onClick={() => handleClickSelectAccount(account)}>
              <Identicon value={account.address} size={isMobile() ? 30 : 40} theme="polkadot" />
              <div className={cx("accounts-item-name-address")}>
                <span className={cx("name")}>{account.meta.name}</span>
                <span className={cx("address")}>{account.address}</span>
              </div>
            </button>
          ))}
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
    </div>
  );
};

export default React.memo(PloContribute);
