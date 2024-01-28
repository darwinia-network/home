import Copyright from "../../components/Copyright";
import Features from "../../components/Features";
import FooterSections from "../../components/FooterSections";
import FooterSocialMedia from "../../components/FooterSocialMedia";
import Header from "../../components/Header";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import SubscribeSection from "../../components/SubscribeSection";
import { BuildingWithMsgportSectionPC } from "./sections/BuildingWithMsgportSection";
import { HowItWorksSectionPC } from "./sections/HowItWorksSection";
import { ResourcesSectionPC } from "./sections/ResourcesSection";
import { UseCaseSectionPC } from "./sections/UseCaseSection";

export default function HomeV2PC() {
  return (
    <main className="overflow-auto lg:flex items-center hidden scrollbar-color">
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
        <BuildingWithMsgportSectionPC />
        <UseCaseSectionPC />
        <ResourcesSectionPC />

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
