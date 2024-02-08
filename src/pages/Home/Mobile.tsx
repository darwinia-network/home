import Features from "../../components/Features";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import MobileLayout from "../../layouts/MobileLayout";
import { MobileBuildingWithMsgport } from "./sections/BuildingWithMsgport";
import { MobileHowItWorks } from "./sections/HowItWorks";
import { MobileResources } from "./sections/Resources";
import { MobileUseCase } from "./sections/UseCase";

export default function Mobile() {
  return (
    <MobileLayout>
      <div
        className="h-[36.25rem] w-full bg-cover relative "
        style={{ backgroundImage: "url(/images/home-page-bg.jpg)" }}
      >
        <div className="absolute z-10 left-5 bottom-[3.125rem]">
          <PoweringYourDapps />
        </div>
        <div className="absolute z-10 top-[6.25rem] right-[6.75rem] rounded-full w-[2.8125rem] h-[2.8125rem] bg-app-main" />
      </div>

      <div
        className="pt-[6.25rem] pb-[20rem] px-large bg-app-white backdrop-blur-lg"
        style={{ boxShadow: "0px -12px 20px 0px #F2F3F5" }}
      >
        <Features />
      </div>

      <MobileHowItWorks />
      <MobileBuildingWithMsgport />
      <MobileUseCase />
      <MobileResources />
    </MobileLayout>
  );
}
