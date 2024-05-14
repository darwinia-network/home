const Hero = () => {
  return (
    <section className="relative flex items-start justify-end lg:items-center lg:justify-center min-h-[31.938rem] lg:min-h-[35rem] flex-col gap-[1.375rem] lg:gap-[2.5rem] py-[3.125rem] lg:py-0 px-[1.25rem] lg:px-0 bg-white">
      <div className="absolute inset-0 overflow-hidden lg:hidden block">
        <img src="/images/crossChain/heroMobile.png" alt="heroMobile" className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <video className="object-cover w-full h-full" autoPlay loop muted playsInline>
          <source src="/images/heroBg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="z-10 hidden lg:block">
        <h2 className="lg:text-[3.125rem] lg:leading-[3.75rem] 2xl:text-[3.75rem] font-[300] 2xl:leading-[5.625rem] text-center text-black">
          POWERING YOUR
        </h2>
        <h1 className="lg:text-[3.125rem] lg:leading-[3.75rem] 2xl:text-[3.75rem] font-[600] 2xl:leading-[5.625rem] text-center text-[#FF0083]">
          {"DAPP’S CROSS-CHAIN CAPABILITIES"}
        </h1>
      </div>
      <div className="z-10 lg:hidden block">
        <h2 className="text-[1.5rem] font-[500] leading-[1.875rem] text-black">Powering Your DApp’s</h2>
        <h1 className="text-[2.5rem] font-[600] leading-[3.169rem] text-[#FF0083]">CROSS-CHAIN CAPABILITES</h1>
      </div>
      <a href="https://docs.darwinia.network/" rel="noreferrer" target="_blank" className="px-[0.625rem] py-[0.75rem] flex items-center gap-[0.313rem] lg:gap-[0.625rem] font-[400] text-[0.875rem] lg:text-[1.25rem] text-[#F6F6F7] leading-[1.4rem] lg:leading-[1.563rem] tracking-[0.063rem] lg:px-[0.938rem] bg-black z-10 rounded-[6.25rem] lg:font-[500] lg:py-[0.938rem] transition-all delay-75 hover:bg-[#FF0083] cursor-pointer">
        Develop with Darwinia
        <img src="/images/right-arrow-white-background-round.svg" alt="right-arrow" />
      </a>
    </section>
  );
};

export default Hero;
