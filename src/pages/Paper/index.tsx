import { Navigate, useParams } from "react-router-dom";
import { usePaperData } from "../../data/paper";
import { useMemo, useState } from "react";
import { useApp } from "../../hooks/useApp";
import MobileLayout from "../../layouts/MobileLayout";
import OthersPageDesktopLayout from "../../layouts/OthersPageDesktopLayout";
import PaperTag from "../../components/PaperTag";
import RightArrowRound from "../../components/RightArrowRound";

export default function Paper() {
  const params = useParams();
  const paperData = usePaperData(params.paperId ?? "");
  const { isDesktopWidth } = useApp();

  const Layout = useMemo(() => (isDesktopWidth ? OthersPageDesktopLayout : MobileLayout), [isDesktopWidth]);

  return params.paperId && paperData ? (
    <Layout>
      <div className="pt-[3.75rem] lg:pt-[6.25rem] bg-app-white">
        <div className="w-full lg:w-[45rem] mx-auto px-medium flex flex-col gap-[1.25rem] py-[1.25rem] lg:py-[6.25rem]">
          <span className="text-app-black/70 text-t14" data-aos="fade-up">{`Home/Paper Resources/${paperData.title}`}</span>
          <img
            alt="..."
            src={paperData.image}
            className="h-[11.25rem] lg:h-[18.125rem] w-auto self-stretch"
            data-aos="fade-up"
          />
          <div className="flex items-center gap-[0.625rem] flex-wrap" data-aos="fade-up" data-aos-delay={100}>
            {paperData.tags.map((tag) => (
              <PaperTag key={tag} text={tag} />
            ))}
          </div>
          <div className="flex flex-col" data-aos="fade-up" data-aos-delay={150}>
            <h1 className="text-h1 text-app-black">{paperData.title}</h1>
            <div className="flex flex-col gap-medium lg:flex-row">
              <span className="text-t12 text-app-black/70">{`Page last updated: ${paperData.lastUpdate}`}</span>
              <span className="text-t12 text-app-gray">{`By: ${paperData.authors.join(", ")}`}</span>
            </div>
          </div>
          <div className="h-[1px] self-stretch bg-app-gray/50" />
          <div className="flex flex-col gap-medium" data-aos="fade-up" data-aos-delay={200}>
            {paperData.summaries.map((summary, index) => (
              <p key={index} className="text-t14 text-app-gray">
                {summary}
              </p>
            ))}
          </div>
          <div className="h-[1px] self-stretch bg-app-gray/50" />
          <div className="flex justify-center lg:justify-start" data-aos="fade-up">
            <ViewFullPaper fullPath={paperData.fullPath} />
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Navigate to="/not-found" replace />
  );
}

function ViewFullPaper({ fullPath }: { fullPath: string }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a
      className={`p-medium flex items-center gap-medium border rounded-[6.25rem] w-fit backdrop-blur-[1.25rem] transition-colors ${
        isHovering ? "border-app-main text-app-main" : "border-app-black text-app-black"
      }`}
      rel="noopener noreferrer"
      target="_blank"
      href={fullPath}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img alt="..." width={26} height={30} className="w-[1.625rem] h-[1.875rem]" src="/images/view-full.png" />
      <span className="text-t14">View Full Paper</span>
      <RightArrowRound fill={isHovering ? "main" : "black"} />
    </a>
  );
}
