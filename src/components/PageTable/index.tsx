import { Fragment, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  data: { h1: string; sub?: { h2: string }[] }[];
}

export default function PageTable({ data }: Props) {
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
    <div className="hidden lg:flex flex-col gap-medium p-5 w-80 bg-table-bg h-fit sticky top-20">
      <h3 className="text-bold text-white text-sm font-bold">On This Page</h3>
      <div className="h-[1px] bg-white/50 w-full" />
      {data.map(({ h1, sub }) => (
        <Fragment key={h1}>
          <Link to={`#${h1}`} className="text-sm font-light font-[JetBrainsMono-Light] text-gray hover:underline">
            {h1}
          </Link>
          {sub?.map(({ h2 }) => (
            <Link
              key={h2}
              to={`#${h2}`}
              className="text-sm font-light font-[JetBrainsMono-Light] text-gray hover:underline indent-4"
            >
              {h2}
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
