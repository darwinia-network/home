import BuildingWithMsgport from "../../../components/BuildingWithMsgport";

export function BuildingWithMsgportSectionMobile() {
  return null;
}

export function BuildingWithMsgportSectionPC() {
  return (
    <div className="bg-app-white h-[62.5rem] flex items-center px-[6.875rem] relative overflow-hidden shrink-0 pl-[28rem]">
      <div className="w-[34.375rem] h-[34.375rem] absolute -top-[22rem] -left-[10rem] bg-app-main rounded-full z-10" />
      <div className="w-[25.875rem] h-[25.875rem] absolute -bottom-[16rem] -right-[12rem] bg-app-main rounded-full z-10" />
      <BuildingWithMsgport />
    </div>
  );
}
