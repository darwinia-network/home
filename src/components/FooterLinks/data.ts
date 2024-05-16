import { Section } from "./types";

export const columns: { sections: Section[] }[] = [
  {
    sections: [
      {
        title: "Developers",
        links: [
          { text: "Documentation", href: "https://docs.darwinia.network/", isExternal: true },
          {
            text: "Use Cases",
            href: "#",
            isExternal: true,
          },
        ],
      },
      {
        title: "Cross-Chain Service",
        links: [
          {
            text: "Msgport",
            href: "https://msgport.xyz/",
            isExternal: true,
          },
          {
            text: "Darwinia EVM+",
            href: "#",
            isExternal: true,
          },
        ],
      },
    ],
  },
  {
    sections: [
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
          { text: "Collaboration", href: "https://github.com/darwinia-network/collaboration", isExternal: true },
          { text: "Careers", href: "#", isExternal: true },
          {
            text: "Brand",
            href: "https://darwinia.notion.site/Brand-Assets-9bd35f88f0674232954737577616f2c2",
            isExternal: true,
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Collaboration",
        links: [
          { text: "Substrate_builders Program" },
          { text: "Web3 Foundation" },
          { text: "Web3.0 Bootcamp" },
          { text: "Polkadot" },
        ],
      },
      {
        title: "Others",
        links: [{ text: "About darwinia.network", href: "/about", isExternal: false }],
      },
    ],
  },
];
