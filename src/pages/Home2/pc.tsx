import BuildingWithMsgport from "../../components/BuildingWithMsgport";
import Copyright from "../../components/Copyright";
import Features from "../../components/Features";
import FooterSections from "../../components/FooterSections";
import FooterSocialMedia from "../../components/FooterSocialMedia";
import Header from "../../components/Header";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import ResourcesV2 from "../../components/ResourcesV2";
import SubscribeSection from "../../components/SubscribeSection";
import UseCases from "../../components/UseCases";
import { HowItWorksSectionPC } from "./sections/HowItWorksSection";

export default function HomeV2PC() {
  return (
    <main className="overflow-auto lg:flex items-center hidden">
      <Header />
      <div className="flex overflow-y-hidden">
        <div className="bg-cover flex pr-[12rem]" style={{ backgroundImage: "url(/images/home-page-bg.png)" }}>
          <div className="px-[2.5rem] py-[3.75rem] h-[62.5rem]">
            <div className="w-[4.375rem] h-[4.375rem] bg-app-main rounded-full mb-[7.625rem] ml-[64.1875rem] mt-[16.6875rem]" />
            <PoweringYourDapps />
          </div>

          <div className="px-[11.25rem] h-[62.5rem] flex items-center">
            <Features />
          </div>
        </div>

        <HowItWorksSectionPC />

        <div className="bg-app-white h-[62.5rem] flex items-center px-[6.875rem] relative overflow-hidden shrink-0 pl-[28rem]">
          <div className="w-[34.375rem] h-[34.375rem] absolute -top-[22rem] -left-[10rem] bg-app-main rounded-full z-10" />
          <div className="w-[25.875rem] h-[25.875rem] absolute -bottom-[16rem] -right-[12rem] bg-app-main rounded-full z-10" />
          <BuildingWithMsgport />
        </div>

        <div className="bg-app-black px-[10.625rem] h-[62.5rem] flex flex-col justify-center">
          <div className="flex flex-col items-end text-[3.625rem] font-bold tracking-[0.125rem] mb-[5rem]">
            <span className="text-app-white whitespace-nowrap">Enabling Diverse</span>
            <span className="text-app-main whitespace-nowrap">Cross-Chain Interactions</span>
          </div>
          <UseCases />
        </div>

        <div className="bg-app-white px-[7.375rem] h-[62.5rem] flex flex-col justify-center relative">
          <div className="w-[20rem] h-[20rem] shrink-0 bg-app-main opacity-20 rounded-full blur-[200px] absolute z-10 -top-[11rem] right-[10rem]" />
          <div className="w-[20rem] h-[20rem] shrink-0 bg-app-main opacity-20 rounded-full blur-[200px] absolute z-10 -bottom-[14rem] left-[6rem]" />
          <ResourcesV2 />
        </div>

        <div
          className="bg-cover flex flex-col justify-center gap-[6.25rem] px-[7.5rem] shrink-0 w-[75rem] h-[62.5rem]"
          style={{ backgroundImage: "url(/images/footer-bg.png)" }}
        >
          <SubscribeSection />
          <FooterSections />
          <div className="flex items-center justify-between">
            <Copyright />
            <FooterSocialMedia />
          </div>
        </div>
      </div>
    </main>
  );
}
