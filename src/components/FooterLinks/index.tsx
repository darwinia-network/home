import Section from "./Section";
import { columns } from "./data";

export default function FooterLinks() {
  return (
    <>
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col gap-[6.25rem]">
          {column.sections.map((section) => (
            <Section key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      ))}
    </>
  );
}
