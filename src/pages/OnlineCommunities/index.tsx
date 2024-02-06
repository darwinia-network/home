import { Link } from "react-router-dom";
import { useOnlineCommunitiesData } from "../../data/onlineCommunities";
import { Fragment } from "react";
import PageTable from "../../components/PageTable";
import OthersPageWrap from "../../components/OthersPageWrap";

export default function OnlineCommunitiesPage() {
  const { title, summary, sections } = useOnlineCommunitiesData();

  return (
    <OthersPageWrap>
      <div className="flex lg:gap-24 max-w-8xl mx-auto px-large py-[2.5rem] lg:py-[6.25rem]">
        <div className="w-full flex flex-col gap-10">
          <span className="text-t14 text-app-gray">Home/Community</span>
          <h1 className="text-h1 text-app-black">{title}</h1>
          <div className="h-[1px] bg-app-black/50 w-full" />
          <p className="text-t14 text-app-gray">{summary}</p>

          {sections.map((section) => (
            <Fragment key={section.h1}>
              <h3 className="text-h3 text-app-black" id={section.h1}>
                {section.h1}
              </h3>
              {section.content.map(({ link, text }, index) => (
                <div key={index} className="text-t14 text-app-gray italic">
                  {link.isExternal ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link.path}
                      className="underline transition-colors hover:text-app-main"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="underline transition-colors hover:text-app-main">
                      {link.label}
                    </Link>
                  )}
                  <span> - {text}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <PageTable data={sections} />
      </div>
    </OthersPageWrap>
  );
}
