import FooterSection from "./FooterSection";

const sections: { title: string; links: { text: string; href?: string; isExternal?: boolean }[] }[] = [
  { title: "Developers", links: [{ text: "Documentation" }, { text: "Use Cases" }] },
  { title: "Cross-Chain Service", links: [{ text: "Darwinia Msgport" }, { text: "Darwinia EVM+" }] },
  {
    title: "Resources",
    links: [
      { text: "Papers" },
      { text: "Wiki" },
      { text: "Roadmap" },
      { text: "Blog" },
      { text: "Telemetry" },
      { text: "Cooperation" },
      { text: "Careers" },
      {
        text: "Brand",
        href: "https://darwinia.notion.site/Brand-Assets-9bd35f88f0674232954737577616f2c2",
        isExternal: true,
      },
    ],
  },
  {
    title: "Collaboration",
    links: [
      { text: "Substrate_builders Program" },
      { text: "Web3 Foundation" },
      { text: "Web3.0 Bootcamp" },
      { text: "Polkadot" },
    ],
  },
];

export default function FooterSections() {
  return (
    <div className="hidden lg:flex justify-between">
      {sections.at(1) ? (
        <div className="flex flex-col gap-[100px]">
          {sections.slice(0, 2).map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      ) : null}
      {sections.slice(2).map((section) => (
        <FooterSection key={section.title} title={section.title} links={section.links} />
      ))}
    </div>
  );
}
