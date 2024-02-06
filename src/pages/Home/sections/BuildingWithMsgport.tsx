import MobileBuildingWithMsgportComp from "../../../components/BuildingWithMsgport/MobileBuildingWithMsgport";
import DesktopBuildingWithMsgportComp from "../../../components/BuildingWithMsgport/DesktopBuildingWithMsgport";
import { useApp }from "../../../hooks/useApp";

export function MobileBuildingWithMsgport() {
  return (
    <div className="pt-[20rem] pb-[6.25rem] px-[1.25rem] bg-app-white relative">
      <div className="w-[8.5625rem] h-[8.5625rem] absolute top-[6rem] -left-[2rem] bg-app-main rounded-full z-10" />
      <MobileBuildingWithMsgportComp />
    </div>
  );
}

export function DesktopBuildingWithMsgport() {
  const { isDesktopHeight } = useApp();
  return (
    <div className="bg-app-white h-full flex items-center pr-[7.5rem] relative overflow-hidden shrink-0 pl-[28rem]">
      <div className="w-[34.375rem] h-[34.375rem] absolute -top-[22rem] -left-[10rem] bg-app-main rounded-full z-10" />
      {isDesktopHeight && (
        <div className="w-[25.875rem] h-[25.875rem] absolute -bottom-[18rem] -right-[12rem] bg-app-main rounded-full z-10" />
      )}
      <DesktopBuildingWithMsgportComp />
    </div>
  );
}
