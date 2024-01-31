import Copyright from "../../components/Copyright";
import Features from "../../components/Features";
import FooterSocialMedia from "../../components/FooterSocialMedia";
import HeaderMobile from "../../components/Header/HeaderMobile";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import { BuildingWithMsgportMobile } from "./sections/BuildingWithMsgport";
import { HowItWorksSectionMobile } from "./sections/HowItWorks";
import { ResourcesSectionMobile } from "./sections/Resources";
import { UseCaseSectionMobile } from "./sections/UseCase";

export default function Home2Mobile() {
  return (
    <>
      <HeaderMobile />
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

        <HowItWorksSectionMobile />
        <BuildingWithMsgportMobile />
        <UseCaseSectionMobile />
        <ResourcesSectionMobile />

        <div className="py-[1.25rem] flex flex-col gap-[1.25rem] items-center bg-app-black">
          <FooterSocialMedia />
          <Copyright />
        </div>
      </main>
    </>
  );
}
