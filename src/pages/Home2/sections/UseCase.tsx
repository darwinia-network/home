import UseCase from "../../../components/UseCase";
import useApp from "../../../hooks/useApp";

export function MobileUseCase() {
  return (
    <div className="bg-app-black px-[1.25rem] py-[6.25rem] flex flex-col gap-[3.75rem]">
      <div className="flex flex-col text-h2" data-aos="fade-up">
        <span className="whitespace-nowrap text-app-white">Enabling Diverse</span>
        <span className="whitespace-nowrap text-app-main">Cross-Chain</span>
        <span className="whitespace-nowrap text-app-main">Interactions</span>
      </div>
      <UseCase />
    </div>
  );
}

export function DesktopUseCase() {
  const { isDesktopHeight } = useApp();
  return (
    <div className="bg-app-black px-[10.625rem] h-full flex flex-col justify-center">
      <div
        className={`flex items-end ${
          isDesktopHeight
            ? "flex-col text-[3.625rem] font-bold tracking-[0.125rem] mb-[5rem]"
            : "items-center justify-end text-h1 mb-[3.625rem]"
        }`}
      >
        <span className="text-app-white whitespace-nowrap">Enabling Diverse</span>
        <span className="text-app-main whitespace-nowrap">Cross-Chain Interactions</span>
      </div>
      <UseCase />
    </div>
  );
}
