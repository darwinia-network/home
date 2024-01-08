import { Fragment } from "react";
import Footer from "../../components/Footer";
import PageTable from "../../components/PageTable";
import { useFooterData } from "../../data/footer";
import useGetInvolvedData from "../../data/getInvolved";
import { Link } from "react-router-dom";

export default function GetInvolvedPage() {
  const { title, summary, sections } = useGetInvolvedData();
  const { footerData } = useFooterData();

  return (
    <main>
      <div className="flex lg:gap-24 max-w-8xl mx-auto lg:px-8 px-4 mt-32 lg:mt-40">
        <div className="w-full flex flex-col gap-10">
          <span className="text-light text-gray text-sm font-light">Home/ Community</span>
          <h1 className="text-bold text-4xl text-white font-bold">{title}</h1>
          <div className="h-[1px] bg-white/50 w-full" />
          <p className="text-light text-gray text-sm font-light">{summary}</p>

          {sections.map((section) => (
            <Fragment key={section.h1}>
              <h3 className="text-bold text-xl text-white font-bold" id={section.h1}>
                {section.icon} {section.h1}
              </h3>
              {section.description ? (
                <p className="text-light text-gray text-sm font-light">{section.description}</p>
              ) : null}
              {section.items?.map((item, index) => (
                <div key={index} className="text-light text-gray text-sm font-light">
                  {item.map((i, k) => (
                    <Fragment key={k}>
                      {typeof i === "string" ? (
                        <span>{i}</span>
                      ) : i.isExternal ? (
                        <a target="_blank" rel="noopener noreferrer" href={i.path} className="underline">
                          {i.label}
                        </a>
                      ) : (
                        <Link to={i.path} className="underline">
                          {i.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              ))}
              {section.content?.map(({ link, text }, index) => (
                <div key={index} className="text-light text-gray text-sm font-light">
                  {link.isExternal ? (
                    <a target="_blank" rel="noopener noreferrer" href={link.path} className="underline">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="underline">
                      {link.label}
                    </Link>
                  )}
                  {text ? <span> - {text}</span> : null}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <PageTable data={sections} />
      </div>
      <Footer data={footerData} />
    </main>
  );
}
