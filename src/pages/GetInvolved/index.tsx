import { Fragment, PropsWithChildren } from "react";
import PageTable from "../../components/PageTable";
import { useGetInvolvedData } from "../../data/getInvolved";
import { Link } from "react-router-dom";

export default function GetInvolvedPage() {
  const { title, summary, sections } = useGetInvolvedData();

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
      {/* <Footer data={footerData} /> */}
    </main>
  );
}

function H1({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h3 className="text-bold text-xl text-white font-bold" id={id}>
      {children}
    </h3>
  );
}

function H2({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <h5 className="text-bold text-lg text-white font-bold" id={id}>
      {children}
    </h5>
  );
}

function Description({ children }: PropsWithChildren<unknown>) {
  return <p className="text-light text-gray text-sm leading-7 font-light">{children}</p>;
}

function Items({ data }: { data: (string | { label: string; path: string; isExternal?: boolean })[][] }) {
  return (
    <ul className="list-disc space-y-3 pl-4">
      {data.map((item, index) => (
        <li key={index} className="text-light text-gray text-sm font-light">
          {item.map((i, k) => (
            <Fragment key={k}>
              {typeof i === "string" ? (
                <span>{i}</span>
              ) : i.isExternal ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={i.path}
                  className="underline transition-colors hover:text-primary"
                >
                  {i.label}
                </a>
              ) : (
                <Link to={i.path} className="underline transition-colors hover:text-primary">
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
        <li key={index} className="text-light text-gray text-sm font-light">
          {link.isExternal ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.path}
              className="underline transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ) : (
            <Link to={link.path} className="underline transition-colors hover:text-primary">
              {link.label}
            </Link>
          )}
          {text ? <span> - {text}</span> : null}
        </li>
      ))}
    </ul>
  );
}
