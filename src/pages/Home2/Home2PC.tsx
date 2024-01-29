import Features from "../../components/Features";
import HeaderPC from "../../components/Header/HeaderPC";
import PoweringYourDapps from "../../components/PoweringYourDapps";
import PCLayout from "./PCLayout";
import { BuildingWithMsgportPC } from "./sections/BuildingWithMsgport";
import { FooterPC } from "./sections/Footer";
import { HowItWorksPC } from "./sections/HowItWorks";
import { ResourcesPC } from "./sections/Resources";
import { UseCasePC } from "./sections/UseCase";

export default function Home2PC() {
  return (
    <PCLayout>
      <HeaderPC />

      <div className="bg-cover flex pr-[12rem] h-full" style={{ backgroundImage: "url(/images/home-page-bg.jpg)" }}>
        <div className="px-[2.5rem] py-[3.75rem] h-full flex flex-col justify-end gap-[7.625rem]">
          <div className="w-[4.375rem] h-[4.375rem] bg-app-main rounded-full self-end ml-[66rem]" />
          <PoweringYourDapps />
        </div>

        <div className="px-[11.25rem] h-full flex items-center">
          <Features />
        </div>
      </div>

      <HowItWorksPC />
      <BuildingWithMsgportPC />
      <UseCasePC />
      <ResourcesPC />
      <FooterPC />
    </PCLayout>
  );
}
