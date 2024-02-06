import { Fragment, PropsWithChildren } from "react";
import PageTable from "../../components/PageTable";
import { useGetInvolvedData } from "../../data/getInvolved";
import { Link } from "react-router-dom";
import OthersPageWrap from "../../components/OthersPageWrap";

export default function GetInvolvedPage() {
  const { title, summary, sections } = useGetInvolvedData();

  return (
    <OthersPageWrap>
      <div className="flex lg:gap-24 max-w-8xl mx-auto px-medium py-[2.5rem] lg:py-[6.25rem]">
        <div className="w-full flex flex-col gap-10">
          <span className="text-t14 text-app-gray">Home/Community</span>
          <h1 className="text-h1 text-app-black">{title}</h1>
          <div className="h-[1px] bg-app-black/50 w-full" />
          <p className="text-t14 text-app-gray">{summary}</p>

          {sections.map((section) => (
            <Fragment key={section.h1}>
              <H1 id={section.h1}>
                {section.icon} {section.h1}
              </H1>
              {section.description ? <Description>{section.description}</Description> : null}
              {section.items?.length ? <Items data={section.items} /> : null}
              {section.content?.length ? <Content data={section.content} /> : null}
              {section.sub?.map((sub) => (
                <Fragment key={sub.h2}>
                  <H2 id={sub.h2}>
                    {sub.icon} {sub.h2}
                  </H2>
                  {sub.description ? <Description>{sub.description}</Description> : null}
                  {sub.items?.length ? <Items data={sub.items} /> : null}
                  {sub.content?.length ? <Content data={sub.content} /> : null}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
        <PageTable data={sections} />
      </div>
    </OthersPageWrap>
  );
}

function H1({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h3 className="text-app-black text-h2" id={id}>
      {children}
    </h3>
  );
}

function H2({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h5 className="text-app-black text-h3" id={id}>
      {children}
    </h5>
  );
}

function Description({ children }: PropsWithChildren<unknown>) {
  return <p className="text-t14 text-app-gray">{children}</p>;
}

function Items({ data }: { data: (string | { label: string; path: string; isExternal?: boolean })[][] }) {
  return (
    <ul className="list-disc space-y-3 pl-4">
      {data.map((item, index) => (
        <li key={index} className="text-t14 text-app-gray">
          {item.map((i, k) => (
            <Fragment key={k}>
              {typeof i === "string" ? (
                <span>{i}</span>
              ) : i.isExternal ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={i.path}
                  className="underline transition-colors hover:text-app-main"
                >
                  {i.label}
                </a>
              ) : (
                <Link to={i.path} className="underline transition-colors hover:text-app-main">
                  {i.label}
                </Link>
              )}
            </Fragment>
          ))}
        </li>
      ))}
    </ul>
  );
}

function Content({ data }: { data: { link: { label: string; path: string; isExternal?: boolean }; text?: string }[] }) {
  return (
    <ul className="list-disc space-y-3 pl-4">
      {data.map(({ link, text }, index) => (
        <li key={index} className="text-t14 text-app-gray">
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
          {text ? <span> - {text}</span> : null}
        </li>
      ))}
    </ul>
  );
}
