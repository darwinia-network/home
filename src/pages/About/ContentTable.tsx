import { Fragment, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  title: string;
  data: { title: string; sub?: { title: string }[] }[];
}

export default function ContentTable({ title, data }: Props) {
  const { hash } = useLocation();
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (hash.length > 1) {
      elementRef.current = document.getElementById(decodeURIComponent(hash.slice(1)));
    }

    if (elementRef.current) {
      setTimeout(() => {
        elementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        elementRef.current = null;
      }, 100);
    }
  }, [hash]);

  return (
    <div className="hidden lg:flex flex-col gap-large w-[15.625rem] sticky top-32 h-fit" data-aos="fade-up">
      <span className="uppercase text-t16b text-app-black/70">CONTENT</span>
      <div />
      <span className="text-t14b text-app-black">{title}</span>
      {data.map((d) => (
        <Fragment key={d.title}>
          <Link to={`#${d.title}`} className="text-t1 text-app-gray hover:underline">
            {d.title}
          </Link>
          {d.sub?.map((s) => (
            <Link key={s.title} to={`#${s.title}`} className="indent-4 text-t14 text-app-gray hover:underline">
              {s.title}
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
