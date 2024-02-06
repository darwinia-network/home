import Section from "./Section";
import { columns } from "./data";

export default function FooterLinks({ isHomePage }: { isHomePage?: boolean }) {
  return (
    <>
      {columns.map((column, index) => (
        <div key={index} className="flex flex-col gap-[6.25rem]" data-aos="fade-up" data-aos-delay={(index + 1) * 50}>
          {column.sections
            .filter(({ hiddenOnHomePage }) => !(isHomePage && hiddenOnHomePage))
            .map((section) => (
              <Section key={section.title} title={section.title} links={section.links} />
            ))}
        </div>
      ))}
    </>
  );
}
