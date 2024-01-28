import BuildingWithMsgport from "../../../components/BuildingWithMsgport";

export function BuildingWithMsgportSectionMobile() {
  return (
    <div className="pt-[20rem] pb-[6.25rem] px-[1.25rem] bg-app-white relative">
      <div className="w-[8.5625rem] h-[8.5625rem] absolute top-[6rem] -left-[2rem] bg-app-main rounded-full z-10" />
      <BuildingWithMsgport />
    </div>
  );
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
