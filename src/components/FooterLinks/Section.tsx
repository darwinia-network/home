import { Link } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { Section as TSection } from "./types";

interface Props extends TSection {}

export default function Section({ title, links }: Props) {
  const { isDesktopHeight } = useApp();

  return (
    <div className="hidden lg:flex flex-col gap-5 h-fit max-w-max">
      <h3 className="uppercase text-xl leading-normal font-bold text-app-white">{title}</h3>
      <div className="flex flex-col gap-5">
        {links.map(({ text, href, isExternal, isComingSoon }) => (
          <div key={text} className={`${isDesktopHeight ? "text-t16" : "text-t14"}`}>
            {href ? (
              isExternal ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className="text-app-white hover:underline hover:opacity-80 transition-opacity"
                >
                  {text}
                </a>
              ) : (
                <Link to={href} className="text-app-white hover:underline hover:opacity-80 transition-opacity">
                  {text}
                </Link>
              )
            ) : (
              <span className={`${isComingSoon ? "text-app-white/50" : "text-app-white"}`}>{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
