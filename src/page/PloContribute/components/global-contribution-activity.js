import Fade from "react-reveal/Fade";
import { Table } from "antd";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";
import {
  formatBalanceFromOrigToDOT,
  KTON_REWARD,
  RING_REWARD,
  shortAddress,
} from "../utils";
import Big from "big.js";
import { useQuery } from "@apollo/client";
import { gqlWhocrowdloanByOffset } from "../gql";
import btcTop5 from '../top5.json';

const cx = classNames.bind(styles);

const GlobalContributionActivity = ({ allReferContributeData, globalTotalPower, top5contribute }) => {
  const [offset, setOffset] = useState(0);
  const allWhoCrowdloan = useQuery(gqlWhocrowdloanByOffset(offset));

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

  const allWhoContributeData = [];
  if (!allWhoCrowdloan.loading && !allWhoCrowdloan.error) {
    if (
      allWhoCrowdloan.data &&
      allWhoCrowdloan.data.crowdloanWhoStatistics &&
      allWhoCrowdloan.data.crowdloanWhoStatistics.nodes &&
      allWhoCrowdloan.data.crowdloanWhoStatistics.nodes.length
    ) {
      allWhoCrowdloan.data.crowdloanWhoStatistics.nodes.forEach((node) => {
        allWhoContributeData.push({
          user: node.user,
          totalPower: node.totalPower,
          totalBalance: node.totalBalance,
        });
      });
    }
  }

  const globalContributeDataSource = [];
  for (let i = 0; i < allWhoContributeData.length; i++) {
    const nodeWho = allWhoContributeData[i];
    const nodeRefer = allReferContributeData.find((node) => node.user === nodeWho.user);
    const contributePer = Big(nodeWho.totalPower).div(globalTotalPower.toString());
    const target = btcTop5.find(item => item.address === nodeWho.user);

    globalContributeDataSource.push({
      key: i,
      address: nodeWho.user,
      myDot: formatBalanceFromOrigToDOT(nodeWho.totalBalance),
      referrals: nodeRefer ? nodeRefer.contributorsCount : 0,
      referralDot: nodeRefer ? formatBalanceFromOrigToDOT(nodeRefer.totalBalance) : 0,
      curRingRewards: contributePer.times(RING_REWARD).toFixed(8),
      curKtonRewards: contributePer.times(KTON_REWARD).toFixed(8),
      curBtcRewards: target ? target.reward : '0',
      curNft: "No Status",
    });
  }

  return (
    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
      <Table
        className={cx("global-contribute")}
        columns={globalContributeColumns}
        dataSource={globalContributeDataSource}
        title={() => "Global Contribution Activity"}
        loading={allWhoCrowdloan.loading}
        pagination={{
          total: allWhoCrowdloan.data ? allWhoCrowdloan.data.crowdloanWhoStatistics.totalCount : 0,
          size: "small",
          showSizeChanger: false,
          onChange: (page, pageSize) => {
            setOffset((page - 1) * pageSize);
          },
        }}
      />
    </Fade>
  );
};

export default React.memo(GlobalContributionActivity);
