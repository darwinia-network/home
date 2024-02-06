import { useMemo } from "react";
import { usePapersData } from "../../data/paper";
import { useApp } from "../../hooks/useApp";
import OthersPageDesktopLayout from "../../layouts/OthersPageDesktopLayout";
import Card from "./Card";
import MobileLayout from "../../layouts/MobileLayout";

export default function Papers() {
  const { isDesktopWidth } = useApp();
  const papersData = usePapersData();

  const Layout = useMemo(() => (isDesktopWidth ? OthersPageDesktopLayout : MobileLayout), [isDesktopWidth]);

  return (
    <Layout>
      <div className="pt-[3.75rem] lg:pt-[6.25rem] bg-app-white">
        <div className="container mx-auto px-medium flex flex-col items-center gap-[2.5rem] py-[2.5rem] lg:gap-[6.25rem] lg:py-[6.25rem]">
          {/* Title */}
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-h2 text-app-black lg:text-h1">Paper Resources</h2>
            <span className="text-t14 text-app-gray lg:text-t20">
              A series of papers written by experts about Darwinia Network.
            </span>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[2.5rem] lg:flex-row lg:justify-center">
            {papersData.map((data, index) => (
              <Card
                key={data.id}
                title={data.title}
                authors={data.authors}
                tags={data.tags}
                image={data.image}
                id={data.id}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
