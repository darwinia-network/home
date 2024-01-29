import UseCases from "../../../components/UseCases";

export function UseCaseSectionMobile() {
  return (
    <div className="bg-app-black px-[1.25rem] py-[6.25rem] flex flex-col gap-[3.75rem]">
      <div className="flex flex-col text-h2">
        <span className="whitespace-nowrap text-app-white">Enabling Diverse</span>
        <span className="whitespace-nowrap text-app-main">Cross-Chain</span>
        <span className="whitespace-nowrap text-app-main">Interactions</span>
      </div>
      <UseCases />
    </div>
  );
}

export function UseCasePC() {
  return (
    <div className="bg-app-black px-[10.625rem] h-full flex flex-col justify-center">
      <div className="flex flex-col items-end text-[3.625rem] font-bold tracking-[0.125rem] mb-[5rem]">
        <span className="text-app-white whitespace-nowrap">Enabling Diverse</span>
        <span className="text-app-main whitespace-nowrap">Cross-Chain Interactions</span>
      </div>
      <UseCases />
    </div>
  );
}
