import TitleAndTextSection from "./TitleAndTextSection";

const EVMChain = () => {
  return (
    <section className="flex-col-reverse lg:flex-row flex items-center gap-[2.5rem] lg:gap-[5rem] justify-center py-[6.25rem] lg:py-[9.375rem] bg-white px-[0.625rem]">
      <TitleAndTextSection
        classes="lg:w-[36.25rem]"
        text="Darwinia Chain is parachain sharing the same level of security with Polkadot, and It is developed using Substrate and fully compatible with EVM."
        title="EVM Chain secured by Polkadot"
      />
      <img src="/images/crossChain/eVMChain.png" alt="" className="lg:w-[37.063rem] lg:h-[30.125rem]" />
    </section>
  );
};

export default EVMChain;
