import Copyright from "../../components/Copyright";
import Features from "../../components/Features";
import MobileHeader from "../../components/Header/MobileHeader";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import { FooterSocialMedia } from "../../components/SocialMedia";
import { MobileBuildingWithMsgport } from "./sections/BuildingWithMsgport";
import { MobileHowItWorks } from "./sections/HowItWorks";
import { MobileResources } from "./sections/Resources";
import { MobileUseCase } from "./sections/UseCase";

export default function Mobile() {
  return (
    <>
      <MobileHeader />
      <main className="w-full overflow-x-hidden lg:hidden">
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
          className="pt-[6.25rem] pb-[20rem] px-[1.25rem] bg-app-white backdrop-blur-lg"
          style={{ boxShadow: "0px -12px 20px 0px #F2F3F5" }}
        >
          <Features />
        </div>

        <MobileHowItWorks />
        <MobileBuildingWithMsgport />
        <MobileUseCase />
        <MobileResources />

        <div className="py-[1.25rem] flex flex-col gap-[1.25rem] items-center bg-app-black">
          <FooterSocialMedia />
          <Copyright />
        </div>
      </main>
    </>
  );
}
