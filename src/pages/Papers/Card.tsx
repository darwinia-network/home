import { Link } from "react-router-dom";
import PaperTag from "../../components/PaperTag";

interface Props {
  title: string;
  authors: string[];
  tags: string[];
  image: string;
  id: string;
  index: number;
}

export default function Card({ title, authors, tags, image, id, index }: Props) {
  return (
    <Link to={`/paper/${id}`} className="" data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
      <div className="rounded-[1.25rem] p-[1.25rem] bg-app-inner-white flex flex-col lg:justify-between gap-[0.625rem] lg:w-[25rem] lg:h-full transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex flex-col gap-[0.625rem]">
          <img alt="..." src={image} className="h-[13.75] w-auto self-stretch" />
          <h3 className="text-h3 text-app-black">{title}</h3>
          <span className="text-t12 text-app-gray">By: {authors.join(", ")}</span>
        </div>
        <div className="flex items-center flex-wrap gap-[0.625rem]">
          {tags.map((tag) => (
            <PaperTag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
