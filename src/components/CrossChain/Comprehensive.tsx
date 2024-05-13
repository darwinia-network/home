import React from "react";
import TitleAndTextSection from "./TitleAndTextSection";

const Comprehensive = () => {
  return (
    <section className="flex-col lg:flex-row flex items-center gap-[5rem] justify-center py-[6.25rem] bg-white px-[0.625rem]">
      <img src="/images/crossChain/Comprehensive.png" alt="Comprehensive" className="lg:w-[32.5rem] lg:h-[28.813rem]" />
      <div className="flex flex-col items-center justify-center lg:block">
        <TitleAndTextSection
          text="Msgport is a programmable Cross-Chain Messaging Port. Just as smart contracts provide programmability for DApp developers, integration with Msgport will empower developers on Darwinia Chain with the capability for cross-chain programming.To develop more interesting cross-chain DApps on Darwinia Chain using Msgport."
          title="Comprehensive Cross-Chain Stack"
          classes="lg:w-[34.375rem]"
        />
        <button className="flex items-center gap-[0.625rem] text-[0.875rem] text-[#F6F6F7] leading-[1.375rem] tracking-[0.063rem] py-[0.625rem] px-[0.938rem] bg-black z-10 rounded-[6.25rem] mt-[1.25rem] font-[700]">
          learn more
          <img src="/images/right-arrow-white-background-round.svg" alt="right-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Comprehensive;
