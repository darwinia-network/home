const GovernedSection = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-[1.875rem] bg-black py-[6.25rem] px-[1.25rem]">
      <h3 className="text-[1.375rem] lg:text-[1.875rem] leading-[1.75rem] lg:leading-[2.375rem] text-[#F6F6F7] tracking-[0.063rem] font-[700] lg:font-[600]">
        Governed by
      </h3>
      <img src="/images/crossChain/ringDa.png" alt="ringDa" className="w-[16.25rem] lg:w-[25rem] 2xl:w-auto" />
      <p className="text-[0.875rem] text-[#F6F6F7] leading-[1.4rem] tracking-[0.063rem] font-[400] mt-[1.25rem] text-center lg:w-[49rem]">
        <a href="https://ringdao.com/">RingDAO</a> refers to the next governance version of Darwinia. RING serves as the governance token for RingDAO, and
        the upgrades to Darwinia Chain will be governed by RingDAO. RING also functions as the Gas Token for Darwinia
        Chain and plays a role in Collator Staking, among other aspects. RingDAO also governs other projects, including
        Msgport and XAPI. For details, visit <a href="https://ringdao.com/">RingDAO’s website</a>.
      </p>
    </section>
  );
};

export default GovernedSection;
