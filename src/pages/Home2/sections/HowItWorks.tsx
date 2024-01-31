import useApp from "../../../hooks/useApp";

export function MobileHowItWorks() {
  return (
    <div className="h-[60rem] w-full bg-primary relative shrink-0">
      <div
        className="absolute z-20 top-1/2 left-1/2 bg-app-black shrink-0 w-[999rem] h-[80rem] flex justify-center items-center"
        style={{ transform: "translate(-50%, -50%) rotate(10deg)" }}
      >
        <div className="flex flex-col gap-[1.875rem] w-screen px-[1.25rem]" style={{ transform: "rotate(-10deg)" }}>
          <div className="flex items-center flex-nowrap text-h2">
            <span className="text-app-white">How It</span>
            <span className="text-app-main">Works</span>
          </div>
          <div className="relative">
            <img
              width={335}
              height={296}
              alt="..."
              src="/images/how-it-works.png"
              className="w-[20.9375rem] h-[18.5rem] shrink-0"
            />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/images/how-it-works.png"
              className="shrink-0 absolute z-[21] left-0 bottom-[3rem]"
            >
              <img
                width={20}
                height={20}
                alt="..."
                src="/images/zoom.svg"
                className="w-[1.25rem] h-[1.25rem] shrink-0"
              />
            </a>
          </div>
          <div className="flex flex-col gap-[1.875rem] text-t16 text-app-white">
            <p>
              To provide DApps with a simple and consistent chain-free capability, extensive foundational infrastructure
              is required
            </p>
            <p>
              Various messaging protocols cater to different needs, each with distinct considerations for security and
              cost, and built on unique technologies
            </p>
            <p>This complex yet orderly system demands significant integration and infrastructure development</p>
            <p>However, DApp developers no longer need to worry about these underlying protocols</p>
            <p>
              With Darwinia Msgport service layer, direct usage is simplified, while the Darwinia open-source community
              handle the intricate integration and construction efforts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopHowItWorks() {
  const { isDesktopHeight } = useApp();

  return (
    <div className="relative shrink-0 w-[90rem] h-full">
      <div
        className="absolute z-20 top-1/2 left-1/2 bg-app-black shrink-0 w-[110rem] h-[999rem]"
        style={{ transform: "translate(-50%, -50%) rotate(-20deg)" }}
      />
      <div className="absolute -top-[12.5rem] left-[13rem] z-[21] flex justify-center items-center border border-app-main/40 rounded-full w-[78.125rem] h-[78.125rem]">
        <div className="flex justify-center items-center border border-app-main/30 rounded-full w-[48.625rem] h-[48.625rem]">
          <div className="flex justify-center items-center border border-app-main/20 rounded-full w-[38.875rem] h-[38.875rem]" />
        </div>
      </div>
      <div
        className="absolute z-[22] top-1/2 left-1/2 bg-transparent shrink-0 w-[110rem] h-[999rem] px-[7.5rem] flex justify-center items-center"
        style={{ transform: "translate(-50%, -50%) rotate(-20deg)" }}
      >
        <div className="flex items-center" style={{ transform: "rotate(20deg)" }}>
          <div className={`flex flex-col ${isDesktopHeight ? "gap-[3.75rem]" : "gap-[3.125rem]"}`}>
            <div
              className={`flex ${isDesktopHeight ? "text-[4.375rem] flex-col" : "items-center gap-4 text-[3.125rem]"}`}
              style={{ transform: "translate(-9rem, 2rem)" }}
            >
              <span className="font-bold tracking-[0.125rem] text-app-white whitespace-nowrap">How It</span>
              <span className="font-bold tracking-[0.125rem] text-app-main">Works</span>
            </div>
            <div
              className={`flex items-end gap-[0.625rem] ${isDesktopHeight ? "w-[24.25rem]" : "w-[33.875rem]"}`}
              style={{ transform: "translate(-2rem, 2rem)" }}
            >
              <div className="w-[0.375rem] h-[3.25rem] rounded-[1.125rem] bg-app-main shrink-0" />
              <div className="flex flex-col gap-5 text-t16 text-app-white">
                <p>
                  To provide DApps with a simple and consistent chain-free capability, extensive foundational
                  infrastructure is required
                </p>
                <p>
                  Various messaging protocols cater to different needs, each with distinct considerations for security
                  and cost, and built on unique technologies
                </p>
              </div>
            </div>
            <div
              className={`flex items-end gap-[0.625rem] ${isDesktopHeight ? "w-[26.375rem]" : "w-[36.875rem]"}`}
              style={{ transform: "translate(8rem, 2rem)" }}
            >
              <div className="w-[0.375rem] h-[3.25rem] rounded-[1.125rem] bg-app-main shrink-0" />
              <div className="flex flex-col gap-5 text-t16 text-app-white">
                <p>This complex yet orderly system demands significant integration and infrastructure development</p>
                <p>However, DApp developers no longer need to worry about these underlying protocols</p>
                <p>
                  With Darwinia Msgport service layer, direct usage is simplified, while the Darwinia open-source
                  community handle the intricate integration and construction efforts
                </p>
              </div>
            </div>
          </div>
          <img
            alt="..."
            src="/images/how-it-works.png"
            className={`shrink-0 ${isDesktopHeight ? "w-[52.625rem] h-[46.5rem]" : "w-[43.125rem] h-[38.125rem]"}`}
            style={{ transform: "translate(9rem, 0)" }}
          />
          {isDesktopHeight && (
            <div
              className="w-[4.5rem] h-[4.5rem] rounded-full bg-app-main"
              style={{ transform: "translate(14rem, 22rem)" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
