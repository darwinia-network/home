import Item from "./Item";

const sections: {
  title: string;
  links: { text: string; href?: string; isExternal?: boolean; isComingSoon?: boolean }[];
}[] = [
  {
    title: "Developers",
    links: [
      { text: "Documentation", href: "https://docs.darwinia.network/", isExternal: true },
      {
        text: "Use Cases",
        href: "https://docs.darwinia.network/use-cases-d707f114326a4fed8cdc6c2b37b444b1",
        isExternal: true,
      },
    ],
  },
  {
    title: "Technology",
    links: [
      {
        text: "Messaging Protocols",
        href: "https://docs.darwinia.network/messaging-protocols-69586eedc835438cbed676ef4f35cb93",
        isExternal: true,
      },
      {
        text: "Darwinia EVM+",
        href: "https://docs.darwinia.network/darwinia-evm-df814f681ec248438cb762df8aaddbd6",
        isExternal: true,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Papers", href: "/papers" },
      { text: "Wiki", href: "https://docs.darwinia.network/", isExternal: true },
      {
        text: "Roadmap",
        href: "https://darwinia.notion.site/c700133dd5a04c2494ceab489c75c907?v=8ff88199019d4236a3b9a190f5e7b9d5",
        isExternal: true,
      },
      { text: "Blog", href: "https://medium.com/darwinianetwork", isExternal: true },
      {
        text: "Telemetry",
        href: "https://telemetry.polkadot.io/#list/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
        isExternal: true,
      },
      { text: "Cooperation", href: "mailto:hello@darwinia.network", isExternal: true },
      {
        text: "Careers",
        href: "https://darwinia.notion.site/Join-Us-d573135a4b5144bca530276d99e6d9f0",
        isExternal: true,
      },
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

export default function FooterLinks() {
  return (
    <div className="hidden lg:flex justify-between">
      {sections.at(1) ? (
        <div className="flex flex-col gap-[100px]">
          {sections.slice(0, 2).map((section) => (
            <Item key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      ) : null}
      {sections.slice(2).map((section) => (
        <Item key={section.title} title={section.title} links={section.links} />
      ))}
    </div>
  );
}
