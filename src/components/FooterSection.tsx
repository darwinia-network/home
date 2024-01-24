import { Link } from "react-router-dom";

interface Props {
  title: string;
  links: { text: string; href?: string; isExternal?: boolean }[];
}

export default function FooterSection({ title, links }: Props) {
  return (
    <div className="hidden lg:flex flex-col gap-5 h-fit max-w-max">
      <h3 className="uppercase text-xl leading-normal font-bold text-app-white">{title}</h3>
      <div className="flex flex-col gap-5">
        {links.map(({ text, href, isExternal }) => (
          <div key={text} className="text-t16">
            {href ? (
              isExternal ? (
                <a target="_blank" rel="noopener noreferrer" href={href} className="text-app-white hover:underline hover:text-app-main transition-colors">
                  {text}
                </a>
              ) : (
                <Link to={href} className="text-app-white hover:underline hover:text-app-main transition-colors">
                  {text}
                </Link>
              )
            ) : (
              <span className="text-white/50">{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
