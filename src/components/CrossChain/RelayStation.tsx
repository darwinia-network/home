import React from "react";
import TitleAndTextSection from "./TitleAndTextSection";

const RelayStation = () => {
  return (
    <section className="px-[0.625rem] lg:px-[14.188rem] bg-[#FFFFFF] flex items-center justify-center flex-col gap-[2.5rem] py-[6.25rem] lg:py-[9.375rem]">
      <img src="/images/crossChain/relayStation.png" alt="relayStation" className="hidden lg:block" />
      <img src="/images/crossChain/relayStationMobile.png" alt="relayStation" className="lg:hidden block" />
      <TitleAndTextSection
        text="Darwinia Chain serves as a Polkadot Parachain that connects to Assethub and other assets through XCMP.
          Darwinia Chain collaborates deeply with Helix Bridge in a one-stop Bridge solution that can bridge various EVM
          ecosystems."
        title="Cross-Chain Asset Relay Station"
        classes="lg:w-[58.688rem] text-center"
      />
    </section>
  );
};

export default RelayStation;
