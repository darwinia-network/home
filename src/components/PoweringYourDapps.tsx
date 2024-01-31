import useApp from "../hooks/useApp";

export default function PoweringYourDapps() {
  const { isDesktopWidth, isDesktopHeight } = useApp();

  return (
    <div className={`flex flex-col`}>
      <span
        className={`font-medium tracking-[1px] lg:font-normal text-black ${
          isDesktopWidth ? (isDesktopHeight ? "text-6xl" : "text-[3.125rem]") : "text-2xl"
        }`}
      >{`Powering Your DApp's`}</span>
      <div
        className={`mt-[7px] lg:mt-3 flex flex-col text-app-main uppercase lg:font-bold lg:tracking-[1px] ${
          isDesktopWidth
            ? isDesktopHeight
              ? "text-[120px] leading-[122px]"
              : "text-[6.25rem] leading-[6.25rem]"
            : "text-h1"
        }`}
      >
        <span className="whitespace-nowrap">Cross-Chain</span>
        <span>Capabilities</span>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.darwinia.network/"
        className="mt-[22px] lg:mt-[30px] flex items-center gap-small lg:gap-large py-[9px] px-4 lg:py-5 lg:px-12 rounded-[100px] bg-black w-fit transition-colors hover:bg-app-main"
      >
        <span className="text-t14 lg:text-t20 text-white">Try It Now</span>
        <img
          className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
          alt="..."
          src="/images/right-arrow-white-background-round.svg"
        />
      </a>
    </div>
  );
}
