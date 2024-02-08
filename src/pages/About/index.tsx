import { Fragment } from "react";
import { useApp } from "../../hooks/useApp";
import { useAboutData } from "../../data/about";
import Contributors from "./Contributors";
import ContentTable from "./ContentTable";
import OthersPageWrap from "../../components/OthersPageWrap";

export default function About() {
  const aboutData = useAboutData();
  const { isDesktopWidth } = useApp();

  return (
    <OthersPageWrap>
      {isDesktopWidth ? (
        <div className="w-full flex justify-center overflow-y-hidden">
          <img
            alt="..."
            height={490}
            width={1920}
            className="h-[30.625rem] w-[120rem] shrink-0 max-w-none"
            src="/images/about-page-hero.png"
            data-aos="fade-up"
          />
        </div>
      ) : (
        <div className="px-large flex flex-col gap-5" data-aos="fade-up">
          <span className="text-t14 text-app-black/70">Home / About</span>
          <img alt="" height={180} width={335} className="h-[11.25rem] max-w-none shrink-0" src="/images/about-page-hero-m.png" />
        </div>
      )}

      <div className="mx-auto w-full lg:w-fit py-5 lg:pt-[3.125rem] lg:pb-[7.5rem] flex gap-[3.75rem] px-large">
        <div className="flex flex-col gap-5 w-full lg:w-[45rem]">
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-h2 text-app-black">{aboutData.title}</h2>
            <span className="text-t12 text-app-gray">{`Page last updated: ${aboutData.lastUpdate}`}</span>
          </div>
          <div className="h-[1px] w-full bg-app-black" />
          {aboutData.sections.map((section) => (
            <Fragment key={section.title}>
              <h2 id={section.title} className="text-h2 text-app-black" data-aos="fade-up">
                {section.title}
              </h2>
              {section.contents?.length ? (
                <div className="flex flex-col gap-5" data-aos="fade-up">
                  {section.contents.map((content, index) => (
                    <p key={index} className="text-t14 text-app-gray">
                      {content}
                    </p>
                  ))}
                </div>
              ) : null}
              {section.list?.length ? (
                <ul className="space-y-3 list-disc pl-4" data-aos="fade-up">
                  {section.list.map((item, index) => (
                    <li key={index} className="text-t14 text-app-gray">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.sub?.map((sub, index) => (
                <Fragment key={index}>
                  <h3 className="text-h3 text-app-black" id={sub.title} data-aos="fade-up">
                    {sub.title}
                  </h3>
                  <div className="flex flex-col gap-5" data-aos="fade-up">
                    {sub.contents.map((content, index) => (
                      <p key={index} className="text-t14 text-app-gray">
                        {content}
                      </p>
                    ))}
                  </div>
                </Fragment>
              ))}
            </Fragment>
          ))}
          <div />
          <Contributors contributors={aboutData.contributors} github={aboutData.github} />
        </div>

        <ContentTable title={aboutData.title} data={aboutData.sections} />
      </div>
    </OthersPageWrap>
  );
}
