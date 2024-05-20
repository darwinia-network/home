import { Section } from "./types";

export const columns: { sections: Section[] }[] = [
  {
    sections: [
      {
        title: "Build",
        links: [
          { text: "Smart Contract", href: "https://docs.darwinia.network/build/smart-contract/interact-with-web3js/", isExternal: true },
          {
            text: "Node Operator",
            href: "https://docs.darwinia.network/build/chain/run-collator-node/",
            isExternal: true,
          },
          {
            text: "Frontier",
            href: "https://github.com/polkadot-evm/frontier",
            isExternal: true,
          },
          {
            text: "Substrate",
            href: "https://substrate.io/",
            isExternal: true,
          },
          {
            text: "Polkadot",
            href: "https://polkadot.network/",
            isExternal: true,
          }
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Community",
        links: [
          {
            text: "Forum",
            href: "https://github.com/orgs/darwinia-network/discussions",
            isExternal: true
          },
          { 
            text: "RingDAO",
            href: "https://docs.darwinia.network/community/ringdao/",
            isExternal: true,
          },
          { text: "DCDAO",
            href: "https://github.com/orgs/dcdao/discussions",
            isExternal: true,
          },
        ],
      },
      {
        title: "Cross-Chain Stack",
        links: [
          {
            text: "Msgport",
            href: "https://msgport.xyz/",
            isExternal: true,
          },
          {
            text: "XAPI",
            href: "https://github.com/xapi-box",
            isExternal: true,
          },
          {
            text: "HelixBridge",
            href: "https://helixbridge.app/",
            isExternal: true,
          },
          {
            text: "XToken",
            href: "https://xtoken.box/",
            isExternal: true,
          },
          {
            text: "XAccount",
            href: "https://xaccount.box/",
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
            href: "https://telemetry.polkadot.io/#list/0xf0b8924b12e8108550d28870bc03f7b45a947e1b2b9abf81bfb0b89ecb60570e",
            isExternal: true,
          },
          { text: "Collaboration", href: "https://github.com/darwinia-network/collaboration", isExternal: true },
//          { text: "Careers", href: "#", isExternal: true },
          {
            text: "Brand",
            href: "https://darwinia.notion.site/Brand-Assets-9bd35f88f0674232954737577616f2c2",
            isExternal: true,
          },
        ],
      },
      {
        title: "Others",
        links: [{ text: "About darwinia.network", href: "/about", isExternal: false }],
      },
    ],
  },
];
