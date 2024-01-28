import Copyright from "../../components/Copyright";
import Features from "../../components/Features";
import FooterSocialMedia from "../../components/FooterSocialMedia";
import Header from "../../components/Header";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import { BuildingWithMsgportSectionMobile } from "./sections/BuildingWithMsgportSection";
import { HowItWorksSectionMobile } from "./sections/HowItWorksSection";
import { ResourcesSectionMobile } from "./sections/ResourcesSection";
import { UseCaseSectionMobile } from "./sections/UseCaseSection";

export default function HomeV2Mobile() {
  return (
    <main className="w-full overflow-x-hidden lg:hidden">
      <div
        className="h-[36.25rem] w-full bg-cover relative"
        style={{ backgroundImage: "url(/images/home-page-bg.png)" }}
      >
        <Header />
        <div className="absolute z-10 left-5 bottom-[3.125rem]">
          <PoweringYourDapps />
        </div>
        <div className="absolute z-10 top-[6.25rem] right-[6.75rem] rounded-full w-[2.8125rem] h-[2.8125rem] bg-app-main" />
      </div>

      <div className="pt-[6.25rem] pb-[20rem] px-[1.25rem] bg-white">
        <Features />
      </div>

      <HowItWorksSectionMobile />
      <BuildingWithMsgportSectionMobile />
      <UseCaseSectionMobile />
      <ResourcesSectionMobile />

      <div className="py-[1.25rem] flex flex-col gap-[1.25rem] items-center bg-app-black">
        <FooterSocialMedia />
        <Copyright />
      </div>
    </main>
  );
}
