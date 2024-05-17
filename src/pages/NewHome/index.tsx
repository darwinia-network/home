import React from "react";
import OthersPageWrap from "../../components/OthersPageWrap";
import Hero from "../../components/CrossChain/Hero";
import RelayStation from "../../components/CrossChain/RelayStation";
import OmnichainAccount from "../../components/CrossChain/OmnichainAccount";
import EVMChain from "../../components/CrossChain/EVMChain";
import Comprehensive from "../../components/CrossChain/Comprehensive";
import GovernedSection from "../../components/CrossChain/GovernedSection";

const CrossChain = () => {
  return (
    <OthersPageWrap>
      <Hero />
      <RelayStation />
      <OmnichainAccount />
      <EVMChain />
      <Comprehensive />
      <GovernedSection />
    </OthersPageWrap>
  );
};

export default CrossChain;
