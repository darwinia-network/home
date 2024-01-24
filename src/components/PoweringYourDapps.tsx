export default function PoweringYourDapps() {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-medium tracking-[1px] lg:text-6xl lg:font-normal text-black">{`Powering Your DApp's`}</span>
      <div className="mt-[7px] lg:mt-3 flex flex-col text-app-main uppercase text-h1 lg:font-bold lg:tracking-[1px] lg:leading-[122px] lg:text-[120px]">
        <span>Cross-Chain</span>
        <span>Capabilities</span>
      </div>
      <button className="mt-[22px] lg:mt-[30px] flex items-center gap-small lg:gap-medium py-[9px] px-[10px] lg:py-5 lg:px-8 rounded-[100px] bg-black w-fit">
        <span className="text-t14 lg:text-t20 text-white">Develop with Darwinia</span>
        <img
          className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
          alt="..."
          src="/images/right-arrow-white-background-round.svg"
        />
      </button>
    </div>
  );
}
