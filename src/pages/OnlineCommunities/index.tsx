import { Link } from "react-router-dom";
import { useOnlineCommunitiesData } from "../../data/onlineCommunities";
import { Fragment } from "react";
import PageTable from "../../components/PageTable";

export default function OnlineCommunitiesPage() {
  const { title, summary, sections } = useOnlineCommunitiesData();

  return (
    <main>
      <div className="flex lg:gap-24 max-w-8xl mx-auto lg:px-8 px-4 mt-32 lg:mt-40">
        <div className="w-full flex flex-col gap-10">
          <span className="text-light text-gray text-sm font-light">Home/ Community</span>
          <h1 className="text-bold text-4xl text-white font-bold">{title}</h1>
          <div className="h-[1px] bg-white/50 w-full" />
          <p className="text-light text-gray text-sm font-light leading-7">{summary}</p>

          {sections.map((section) => (
            <Fragment key={section.h1}>
              <h3 className="text-bold text-xl text-white font-bold" id={section.h1}>
                {section.h1}
              </h3>
              {section.content.map(({ link, text }, index) => (
                <div key={index} className="text-light text-gray text-sm font-light italic">
                  {link.isExternal ? (
                    <a target="_blank" rel="noopener noreferrer" href={link.path} className="underline transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="underline transition-colors hover:text-primary">
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
      {/* <Footer data={footerData} /> */}
    </main>
  );
}
