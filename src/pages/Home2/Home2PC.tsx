import Features from "../../components/Features";
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
      <div className="bg-cover flex pr-[12rem] h-full" style={{ backgroundImage: "url(/images/home-page-bg.jpg)" }}>
        <div className="pl-[2.5rem] pb-[3.75rem] h-full flex flex-col justify-between">
          <div className="w-[4.375rem] h-[4.375rem] bg-app-main rounded-full self-end mt-[20%] shrink-0" />
          <div className="pr-[12.5rem]">
            <PoweringYourDapps />
          </div>
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
