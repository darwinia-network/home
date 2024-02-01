import Item from "./Item";
import { cases } from "./data";

export default function UseCase() {
  return (
    <div className="flex flex-col gap-[3.75rem] lg:flex-row lg:gap-[10.25rem]">
      {cases.map(({ title, code, link, description, language }) => (
        <Item key={title} title={title} code={code} link={link} description={description} language={language} />
      ))}
    </div>
  );
}
