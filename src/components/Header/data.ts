export const navigations: {
  label: string;
  sub: { label: string; link: string; isExternal?: boolean }[];
  link?: string;
  isExternal?: boolean;
}[] = [
  {
    label: "Use Darwinia",
    sub: [
      // { label: "Get RING", link: "https://darwinia.notion.site/Where-can-I-get-the-RING-token-c0932eaa99454be99335fdfff106e789", isExternal: true },
      {
        label: "Get RING",
        link: "/get-ring",
        isExternal: false,
      },
      {
        label: "Stake RING",
        link: "https://docs.darwinia.network/evm/tutorial/staking/",
        isExternal: true,
      },
      {
        label: "Run A Node",
        link: "https://docs.darwinia.network/evm/tutorial/chain/run-archive-node/",
        isExternal: true,
      },
      {
        label: "Cross-Chain Asset Bridge",
        link: "https://docs.darwinia.network/msgport/user-cases/token-bridge/",
        isExternal: true,
      },
      {
        label: "Cross-Chain DAO Governance",
        link: "https://docs.darwinia.network/msgport/user-cases/multichain-dao-governance/",
        isExternal: true,
      },
    ],
  },
  {
    label: "Learn",
    sub: [
      { label: "What Is Darwinia", link: "https://docs.darwinia.network/", isExternal: true },
      {
        label: "What Is RING",
        link: "https://docs.darwinia.network/ring/",
        isExternal: true,
      },
      { label: "Darwinia Ecosystem DApps", link: "https://apps.darwinia.network/", isExternal: true },
      { label: "Darwinia News & Updates", link: "https://medium.com/darwinianetwork", isExternal: true },
      {
        label: "Darwinia Roadmap",
        link: "https://darwinia.notion.site/c700133dd5a04c2494ceab489c75c907?v=8ff88199019d4236a3b9a190f5e7b9d5",
        isExternal: true,
      },
      { label: "Darwinia Genepaper v4", link: "/Genepaper_v4.pdf", isExternal: true },
      { label: "Paper Resources", link: "/papers", isExternal: false },
      {
        label: "Glossary",
        link: "https://docs.darwinia.network/msgport/glossary/",
        isExternal: true,
      },
      { label: "FAQ", link: "https://docs.darwinia.network/msgport/faq/", isExternal: true },
    ],
  },
  {
    label: "Developers",
    sub: [
      { label: "Documentation", link: "https://docs.darwinia.network/", isExternal: true },
      {
        label: "Use Cases",
        link: "https://docs.darwinia.network/msgport/user-cases/token-bridge/",
        isExternal: true,
      },
    ],
  },
  {
    label: "Technology",
    sub: [
      {
        label: "Messaging Protocols",
        link: "https://docs.darwinia.network/msgport/messaging-protocols/ormp/",
        isExternal: true,
      },
      {
        label: "Darwinia EVM+",
        link: "https://docs.darwinia.network/evm/overview/",
        isExternal: true,
      },
    ],
  },
  {
    label: "Community",
    sub: [
      { label: "Online Communities", link: "/online-communities", isExternal: false },
      { label: "Get Involved", link: "/get-involved", isExternal: false },
      {
        label: "Grants",
        link: "https://github.com/darwinia-network/collaboration/blob/master/grant/README.md",
        isExternal: true,
      },
      { label: "Bug Bounty Program", link: "https://immunefi.com/bounty/darwinia/", isExternal: true },
      {
        label: "Help Center",
        link: "https://darwinia.notion.site/a76d5bdc7ad242bea991c023dfca208f?v=5fb127fc9a7a4d67a3bbc3ed50445180",
        isExternal: true,
      },
      {
        label: "Brand Assets",
        link: "https://darwinia.notion.site/Brand-Assets-9bd35f88f0674232954737577616f2c2",
        isExternal: true,
      },
    ],
  },
  { label: "Bridge", sub: [], link: "https://bridge.darwinia.network", isExternal: true },
];
