import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tooltip, Table, Modal, Typography, notification } from "antd";
import { ethers } from "ethers";
import Fade from "react-reveal/Fade";
import { isMobile } from "../../utils";

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

// Polkadot
import { web3Enable, web3AccountsSubscribe, web3FromAddress } from "@polkadot/extension-dapp";
import Identicon from "@polkadot/react-identicon";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring, decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex, formatBalance } from "@polkadot/util";
import BN from "bn.js";

import { graphqlClient } from "../../graphql";
import { gql, useQuery } from "@apollo/client";

// ======================= echarts ==========================
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);
// ======================= echarts ==========================

const cx = classNames.bind(styles);

const shortAddress = (address = "") => {
  if (address.length && address.length > 12) {
    return `${address.slice(0, 5)}...${address.slice(address.length - 5)}`;
  }
  return address;
};

const isValidAddressPolkadotAddress = (address) => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    return false;
  }
};

// const isValidReferralCode = (referralCode) => {
//   try {
//     const address = encodeAddress(hexToU8a(`0x${referralCode}`));
//     return isValidAddressPolkadotAddress(address);
//   } catch (error) {
//     return false;
//   }
// }

// const PARA_ID = 2003;
const PARA_ID = 2084;

const T1_BLOCK_NUMBER = 9473310;
const RING_REWARD = 200000000;
const KTON_REWARD = 8000;
const DOT_TO_BN = new BN("10000000000");

const TOTAL_CONTRIBUTE_HISTORY = gql`
  query {
    events(filter: { method: { equalTo: "Contributed" }, and: { data: { includes: ",${PARA_ID}," } } }) {
      totalCount
      nodes {
        timestamp
        data
      }
    }
  }
`;

const actionSomeOneConntributeHistory = (address = "HeU2h1RoQNx5MkUKBDZ9VsX5uCNb4gdCf6YADVxj3Ku6SPG") =>
  gql`
query {
  extrinsics(
    filter: {
      signerId: { equalTo: "${address}" }
    }
  ) {
    totalCount
    nodes {
      events(
        filter:{
          method:{equalTo: "Contributed"}
          and: {
            data: {
              includes: ",${PARA_ID},"
            }
          }
        }) {
        nodes {
          id
          timestamp
          data
        }
      }
    }
  }
}
`;

const actionSomeOneReferrals = (referralCode = "0x3e68cf5a7d3350cf8a1fa6ad81bc3515e4e86238f472f6a4655c11137500ef57") =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: ",${PARA_ID},\\"${referralCode}\\""
       }
     }
   }
 ){
     totalCount
     nodes {
       data
     }
   }
 }
`;

const actionGetMyReferralCode = (address) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: "\\"${address}\\",${PARA_ID},"
       }
     }
   }
 ){
     totalCount
     nodes {
       data
     }
   }
 }
`;

const CONTRIBUTE_PIONEERS = gql`
  query {
    accounts(first: 6, orderBy: CONTRIBUTED_TOTAL_DESC) {
      nodes {
        id
        transferTotalCount
        contributedTotalCount
        contributedTotal
      }
    }
  }
`;

const TOTAL_WHO_CONTRIBUTE_WITH_POWER = gql`
  query {
    crowdloanWhoStatistics {
      nodes {
        user
        totalPower
      }
    }
  }
`;

const TOTAL_REFER_CONTRIBUTE_WITH_POWER = gql`
  query {
    crowdloanReferStatistics {
      nodes {
        user
        totalPower
      }
    }
  }
`;

const REFERRAL_LEADERBORD = gql`
  query {
    crowdloanReferStatistics(orderBy: TOTAL_BALANCE_DESC) {
      nodes {
        user
        totalPower
        totalBalance
        contributors {
          nodes {
            id
          }
        }
      }
    }
  }
`;

/**
 * PLO Contribute
 * @returns ReactNode
 */
const PloContribute = () => {
  const echartsRef = useRef();
  const polkadotApi = useRef(null);
  const unsubscribeAccounts = useRef(null);
  const unsubscribeCurBalance = useRef(null);
  const unsubscribeLatestHeads = useRef(null);
  const currentBlockNumber = useRef(null);

  const [accounts, setAccounts] = useState([]);
  const [inputDot, setInputDot] = useState("");
  const [inputReferralCode, setInputReferralCode] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentAccountBalannce, setCurrentAccountBalannce] = useState({
    freeBalance: "0",
    lockedBalance: "0",
    availableBalance: "0",
  });
  const [currentTotalContribute, setCurrentTotalContribute] = useState(new BN(0));
  const [referralsContributeHistory, setReferralsContributeHistory] = useState([]);

  const [showThanksForSupportModal, setShowThanksForSupportModal] = useState(false);
  const [showSelectAccountModal, setShowSelectAccountModal] = useState(false);

  // Graphql
  const totalContributeHistory = useQuery(TOTAL_CONTRIBUTE_HISTORY);
  const myContributeHistoty = useQuery(actionSomeOneConntributeHistory());
  const myReferrals = useQuery(actionSomeOneReferrals());
  const myReferralCode = useQuery(actionGetMyReferralCode(currentAccount ? currentAccount.address : ""));
  const contributePionners = useQuery(CONTRIBUTE_PIONEERS);
  const totalWhoContributeWithPower = useQuery(TOTAL_WHO_CONTRIBUTE_WITH_POWER);
  const totalReferContributeWithPower = useQuery(TOTAL_REFER_CONTRIBUTE_WITH_POWER);
  const referralLeaderborad = useQuery(REFERRAL_LEADERBORD);

  // All total power
  let totalPower = new BN(0);
  if (
    !totalWhoContributeWithPower.loading &&
    !totalWhoContributeWithPower.error &&
    !totalReferContributeWithPower.loading &&
    !totalReferContributeWithPower.error
  ) {
    totalPower = new BN(0);

    if (
      totalWhoContributeWithPower.data &&
      totalWhoContributeWithPower.data.crowdloanWhoStatistics &&
      totalWhoContributeWithPower.data.crowdloanWhoStatistics.nodes &&
      totalWhoContributeWithPower.data.crowdloanWhoStatistics.nodes.length
    ) {
      totalWhoContributeWithPower.data.crowdloanWhoStatistics.nodes.forEach((node) => {
        totalPower = totalPower.add(new BN(node.totalPower));
      });
    }

    if (
      totalReferContributeWithPower.data &&
      totalReferContributeWithPower.data.crowdloanWhoStatistics &&
      totalReferContributeWithPower.data.crowdloanWhoStatistics.nodes &&
      totalReferContributeWithPower.data.crowdloanWhoStatistics.nodes.length
    ) {
      totalReferContributeWithPower.data.crowdloanWhoStatistics.nodes.forEach((node) => {
        totalPower = totalPower.add(new BN(node.totalPower));
      });
    }
  }

  const referralLeaderboradData = [];
  if (
    referralLeaderborad.data &&
    referralLeaderborad.data.crowdloanReferStatistics &&
    referralLeaderborad.data.crowdloanReferStatistics.nodes &&
    referralLeaderborad.data.crowdloanReferStatistics.nodes.length
  ) {
    referralLeaderborad.data.crowdloanReferStatistics.nodes.forEach((node) => {
      const aBN = totalPower.div(new BN(node.totalPower));
      referralLeaderboradData.push({
        address: node.user,
        referrals: node.contributors.nodes.length,
        accumulatedContribution: node.totalBalance,
        refferalRewards: {
          ring: totalPower.isZero()
            ? 0
            : aBN.lt(DOT_TO_BN) && aBN.toNumber() > 0
            ? (1.0 / aBN.toNumber()) * RING_REWARD
            : 0,
          kton: totalPower.isZero()
            ? 0
            : aBN.lt(DOT_TO_BN) && aBN.toNumber() > 0
            ? (1.0 / aBN.toNumber()) * KTON_REWARD
            : 0,
        },
      });
    });
  }

  let myReferralCodeFromGql = null;
  if (!myReferralCode.loading && !myReferralCode.error && myReferralCode.data.events.nodes.length) {
    myReferralCodeFromGql = JSON.parse(myReferralCode.data.events.nodes[0].data)[2];
  }

  let auctionSuccessReward = {
    base: { ring: 0, kton: 0 },
    bonus: { ring: 0, kton: 0 },
    referral: { ring: 0, kton: 0 },
    total: { ring: 0, kton: 0 },
  };
  if (currentBlockNumber.current && !totalPower.isZero() && Number(inputDot) && Number(inputDot) > 0) {
    const inputDotBN = new BN(`${inputDot}`).mul(DOT_TO_BN);
    const bonusN = currentBlockNumber.current < T1_BLOCK_NUMBER ? 0.2 : 0;
    const referN =
      isValidAddressPolkadotAddress(inputReferralCode) || isValidAddressPolkadotAddress(myReferralCodeFromGql)
        ? 0.05
        : 0;

    const base = {
      ring: totalPower.div(inputDotBN).lt(DOT_TO_BN) ? (1.0 / totalPower.div(inputDotBN).toNumber()) * RING_REWARD : 0,
      kton: totalPower.div(inputDotBN).lt(DOT_TO_BN) ? (1.0 / totalPower.div(inputDotBN).toNumber()) * KTON_REWARD : 0,
    };
    const bonus = {
      ring: base.ring * bonusN,
      kton: base.kton * bonusN,
    };
    const referral = {
      ring: (base.ring + bonus.ring) * referN,
      kton: (base.kton + bonus.kton) * referN,
    };
    const total = {
      ring: base.ring + bonus.ring + referral.ring,
      kton: base.kton + bonus.kton + referral.kton,
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
    myContributeHistoty.data.extrinsics.nodes.forEach((node1) => {
      node1.events.nodes.forEach((node2) => {
        myTotalContribute = myTotalContribute.add(new BN(JSON.parse(node2.data)[2]));
      });
    });
  }

  const myContributePer = myTotalContribute.isZero()
    ? 0
    : 100.0 / currentTotalContribute.div(myTotalContribute).toNumber();

  let myBtcReward = 0;
  if (
    currentAccount &&
    contributePionners.data &&
    contributePionners.data.accounts &&
    contributePionners.data.accounts.nodes &&
    contributePionners.data.accounts.nodes.length
  ) {
    let top5contribute = new BN(0);
    let myContribute = new BN(0);

    contributePionners.data.accounts.nodes.forEach((node) => {
      if (currentAccount.address === node.id) {
        myContribute = myContribute.add(new BN(node.contributedTotal));
      }
      top5contribute = top5contribute.add(new BN(node.contributedTotal));
    });

    if (!myContribute.isZero()) {
      if (top5contribute.div(myContribute).ltn(1000000)) {
        myBtcReward = (1.0 / top5contribute.div(myContribute).toNumber()).toFixed(6);
      }
    }
  }

  const myRingReward = ((myContributePer * 200000000) / 100).toFixed(2);
  const myKtonReward = ((myContributePer * 8000) / 100).toFixed(2);

  const globalContributeColumns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "left",
      width: "17%",
      render: (text) => <span className={cx("global-contribute-address")}>{text}</span>,
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
  for (let i = 0; i < 100; i++) {
    globalContributeDataSource.push({
      key: i,
      address: "5CRABk…eEQNM6",
      myDot: "323,273.43",
      referrals: "100",
      referralDot: "323,273.43",
      curRingRewards: "32776.27",
      curKtonRewards: "37.27",
      curBtcRewards: "0.1457",
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
    if (Number(inputDot) > 0) {
      const extrinsicContribute = polkadotApi.current.tx.crowdloan.contribute(
        PARA_ID,
        ethers.utils.parseEther(Number(inputDot).toString()).toString(),
        null
      );
      const extrinsicAddMemo = isValidAddressPolkadotAddress(inputReferralCode)
        ? polkadotApi.current.tx.crowdloan.addMemo(PARA_ID, inputReferralCode)
        : null;
      const injector = await web3FromAddress(currentAccount.address);
      const tx = extrinsicAddMemo
        ? polkadotApi.current.tx.utility.batch([extrinsicContribute, extrinsicAddMemo])
        : extrinsicContribute;

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
    setInputDot(ethers.utils.formatEther(currentAccountBalannce.availableBalance));
  };

  useEffect(() => {
    const referral = new URLSearchParams(window.location.search).get("referral");
    referral && setInputReferralCode(referral);
  }, []);

  useEffect(() => {
    (async () => {
      const results = [];
      if (!myReferrals.loading && !myReferrals.error && myReferrals.data.events.totalCount) {
        for (let node of myReferrals.data.events.nodes) {
          const res = await graphqlClient.query({ query: actionSomeOneConntributeHistory(JSON.parse(node.data)[0]) });
          results.push(res);
        }
        results.length > 0 && setReferralsContributeHistory(results);
      }
    })();
  }, [myReferrals]);

  useEffect(() => {
    if (currentAccount && inputReferralCode && currentAccount.address === inputReferralCode) {
      notification.warning({
        message: "Referral Check",
        description: "Can not set yourself account as a referral",
      });
      setInputReferralCode("");
    }
  }, [currentAccount, inputReferralCode]);

  useEffect(() => {
    (async () => {
      const wsProvider = new WsProvider("wss://rpc.polkadot.io");
      const api = await ApiPromise.create({ provider: wsProvider });
      polkadotApi.current = api;

      unsubscribeLatestHeads.current = await api.rpc.chain.subscribeNewHeads((header) => {
        currentBlockNumber.current = header.number;
      });
    })();

    return () => {
      unsubscribeAccounts.current && unsubscribeAccounts.current();
      unsubscribeAccounts.current = null;

      unsubscribeLatestHeads.current && unsubscribeLatestHeads.current();
      unsubscribeLatestHeads.current = null;
    };
  }, []);

  useEffect(() => {
    if (currentAccount && polkadotApi.current) {
      polkadotApi.current.derive.balances
        .all(currentAccount.address, (balancesAll) => {
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
    if (
      echartsRef.current &&
      !totalContributeHistory.error &&
      !totalContributeHistory.loading &&
      totalContributeHistory.data.events.totalCount
    ) {
      const crowdloanEchart = echarts.init(echartsRef.current);

      const date = [];
      const data = [];
      for (let i = 0; i < totalContributeHistory.data.events.totalCount; i++) {
        const node = totalContributeHistory.data.events.nodes[i];
        const amount = new BN(JSON.parse(node.data)[2]);
        date.push(node.timestamp.split("T")[0].replaceAll("-", "/"));
        // date.push(node.timestamp.split('T')[1].split('.')[0].replaceAll('-', '/'));
        data.push(i > 0 ? data[i - 1].add(amount) : amount);
      }

      setCurrentTotalContribute(data[data.length - 1]);

      const option = {
        tooltip: {
          trigger: "axis",
          position: function (pt) {
            return [pt[0], "10%"];
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10,
          },
          {
            start: 0,
            end: 10,
          },
        ],
        series: [
          {
            name: "Contribute DOT",
            type: "line",
            symbol: "none",
            sampling: "lttb",
            itemStyle: {
              color: "rgb(255, 70, 131)",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)",
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)",
                },
              ]),
            },
            data: data.map((d) => formatBalance(d, { forceUnit: true, withUnit: false, withSi: false, decimals: 10 })),
          },
        ],
      };

      crowdloanEchart.setOption(option);
    }
  }, [totalContributeHistory]);

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

              <button className={cx("contribute-btn")} onClick={handleClickContribute} disabled={!currentAccount}>
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
                  <span>Current Total contributions</span>
                  <div className={cx("total-contribute-dot")}>
                    <img alt="..." src={dotIcon} />
                    <span>
                      {formatBalance(currentTotalContribute, {
                        forceUnit: true,
                        withUnit: false,
                        withSi: false,
                        decimals: 10,
                      })}{" "}
                      DOT
                    </span>
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
                  {
                    formatBalance(myTotalContribute, {
                      forceUnit: true,
                      withUnit: false,
                      withSi: false,
                      decimals: 10,
                    }).split(".")[0]
                  }
                  ({myTotalContribute.isZero() ? 0 : myContributePer.toFixed(2)}%)
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
                  {myTotalContribute.gte(DOT_TO_BN.muln(10)) ? "1" : "0"}
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
                        At the beginning of the second round auction, spporters who have contributed more than 10,000
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
                            {formatBalance(new BN(JSON.parse(node2.data)[2]), {
                              forceUnit: true,
                              withUnit: false,
                              withSi: false,
                              decimals: 10,
                            })}{" "}
                            DOT
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
                              {formatBalance(new BN(JSON.parse(node2.data)[2]), {
                                forceUnit: true,
                                withUnit: false,
                                withSi: false,
                                decimals: 10,
                              })}{" "}
                              DOT
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
                      At the beginning of the second round auction, spporters who have contributed more than 10,000 DOT
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
                          {formatBalance(new BN(node.contributedTotal), {
                            forceUnit: true,
                            withUnit: false,
                            withSi: false,
                            decimals: 10,
                          })}{" "}
                          DOT
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

              {referralLeaderboradData.map((data, index) => (
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
                    {formatBalance(new BN(data.accumulatedContribution), {
                      forceUnit: true,
                      withUnit: false,
                      withSi: false,
                      decimals: 10,
                    })}{" "}
                    DOT
                  </span>
                  <div className={cx("referral-leaderboard-item-rewards")}>
                    <span>{data.refferalRewards.ring.toFixed(2)} RING</span>
                    <span>{data.refferalRewards.kton.toFixed(2)} KTON</span>
                  </div>
                </div>
              ))}
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
