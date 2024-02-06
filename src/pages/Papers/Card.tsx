import { Link } from "react-router-dom";

interface Props {
  title: string;
  authors: string[];
  tags: string[];
  image: string;
  link: string;
  isExternal?: boolean;
}

export default function Card({ title, authors, tags, image, link, isExternal }: Props) {
  return isExternal ? (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Inner title={title} authors={authors} tags={tags} image={image} />
    </a>
  ) : (
    <Link to={link}>
      <Inner title={title} authors={authors} tags={tags} image={image} />
    </Link>
  );
}

function Inner({ title, authors, tags, image }: Omit<Props, "isExternal" | "link">) {
  return (
    <div className="rounded-[1.25rem] p-[1.25rem] bg-app-inner-white flex flex-col gap-[0.625rem]">
      <img width={305} height={211} alt="..." src={image} className="w-full" />
      <h3 className="text-h3 text-app-black">{title}</h3>
      <span className="text-t12 text-[#6F6F6F]">By: {authors.join(", ")}</span>
      <div className="flex items-center flex-wrap gap-[0.625rem]">
        {tags.map((tag) => (
          <div key={tag} className="h-[1.5rem] px-[0.625rem] flex items-center rounded-[3.125rem]">
            <span className="text-tag text-app-black">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
