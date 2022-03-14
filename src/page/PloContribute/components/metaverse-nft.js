import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";
import { Tooltip, Modal, Spin } from "antd";

import { DOT_TO_ORIG } from "../utils";
import acceptIcon from "../img/accept.svg";
import acceptedIcon from "../img/accepted.svg";
import infoIcon from "../img/info-icon.png";
import modalCloseIcon from "../img/modal-close.png";

const cx = classNames.bind(styles);

const MetaverseNFT = ({ myTotalContribute }) => {
  const [isRemarked, setIsRemarked] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [claimLoading, setClaimLoading] = useState(false);
  const [visibleModalCopyThat, setVisibleModalCopyThat] = useState(false);
  const [visibleModalClaimNFT, setVisibleModalClaimNFT] = useState(true);

  // TODO:
  void isRemarked;
  void setIsRemarked;
  void setClaimLoading;

  const handleClickAcceptAndClaim = async () => {};

  const handleChangeNftCrabAddress = () => {};

  return (
    <>
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
                Metaverse NFT Package when your contribution share greater or equal 10 DOT and you will have a chance to
                get a limited edition commemorative NFT in the Package.
                <br />
                <br />
                The Metaverse NFT Package will be awarded after the Polkadot Slot Auction is terminated regardless of
                whether Darwinia Network wins the slot auction or not.
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

      <Modal
        visible={visibleModalCopyThat}
        title={null}
        footer={null}
        onCancel={() => setVisibleModalCopyThat(false)}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        className={cx("metaverse-nft-modal")}
      >
        <div className={cx("metaverse-nft-modal-body")}>
          <h5 className={cx("metaverse-nft-modal-title")}>Copy that!</h5>
          <ul className={cx("metaverse-nft-modal-content")}>
            <li>Your address has been recorded!</li>
            <li>
              Please track the NFT rewards by switching to Columbus Continent of Evolution Land, or stay tuned on our
              official Twitter.
            </li>
            <li>
              Please feel free to contact us through "
              <a target="_blank" rel="noopener noreferrer" href="mailto:hello@darwinia.network">
                hello@darwinia.network
              </a>
              " if you have any questions.
            </li>
          </ul>
          <button
            className={cx("metaverse-nft-modal-ok-btn", "metaverse-nft-modal-copy-that-ok-btn")}
            onClick={() => setVisibleModalCopyThat(false)}
          >
            <span className={cx("metaverse-nft-modal-ok-btn-text")}>OK</span>
          </button>
        </div>
      </Modal>
      <Modal
        visible={visibleModalClaimNFT}
        title={null}
        footer={null}
        onCancel={() => setVisibleModalClaimNFT(false)}
        closeIcon={<img alt="..." src={modalCloseIcon} />}
        className={cx("metaverse-nft-modal")}
      >
        <div className={cx("metaverse-nft-modal-body")}>
          <h5 className={cx("metaverse-nft-modal-title")}>Claim NFT</h5>
          <ul className={cx("metaverse-nft-modal-content")}>
            <li>The NFT is sent as a reward for your support of Darwinia Network Crowdloan.</li>
            <li>
              You need to fill in the correct Crab Smart Chain receiving address <strong>starts with “0x”</strong>.
            </li>
            <li>
              The reward will be distributed after 2 rounds of Evolution Land{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/lands">
                Columbus Continent
              </a>{" "}
              sales end.
            </li>
            <li>
              Please feel free to contact us through "
              <a target="_blank" rel="noopener noreferrer" href="mailto:hello@darwinia.network">
                hello@darwinia.network
              </a>
              " if you have any questions.
            </li>
          </ul>
          <div className={cx("metaverse-nft-modal-accept")}>
            <button onClick={() => setIsAccepted((prev) => !prev)}>
              <img alt="..." src={isAccepted ? acceptedIcon : acceptIcon} />
            </button>
            <span>I accept and continue to claim</span>
          </div>
          <div className={cx("metaverse-nft-modal-address-input-wrap")}>
            <input
              onChange={handleChangeNftCrabAddress}
              className={cx("metaverse-nft-modal-address-input")}
              disabled={true}
              placeholder="Please enter your receiving address"
            />
            <span className={cx("metaverse-nft-modal-address-warning", { disbaled: false })}>
              Please fill in the correct receiving address starts with “0x”.{" "}
            </span>
          </div>
          <button className={cx("metaverse-nft-modal-ok-btn")} disabled={true} onClick={handleClickAcceptAndClaim}>
            <Spin wrapperClassName={cx("metaverse-nft-modal-ok-btn-spin")} spinning={claimLoading || true}>
              <span className={cx("metaverse-nft-modal-ok-btn-text")}>I accept and claim</span>
            </Spin>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(MetaverseNFT);
