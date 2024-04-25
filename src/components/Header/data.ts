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
        link: "https://docs.darwinia.network/build/getting-started/staking/",
        isExternal: true,
      },
      { 
        label: "Apps", 
        link: "https://apps.darwinia.network/", 
        isExternal: true 
      },
      { 
        label: "Bridge", 
        link: "https://bridge.darwinia.network", 
        isExternal: true 
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
      { label: "News & Updates", link: "https://medium.com/darwinianetwork", isExternal: true },
      {
        label: "Roadmap",
        link: "https://darwinia.notion.site/c700133dd5a04c2494ceab489c75c907?v=8ff88199019d4236a3b9a190f5e7b9d5",
        isExternal: true,
      },
      { label: "Genepaper v4", link: "/Genepaper_v4.pdf", isExternal: true },
      { label: "Paper Resources", link: "/papers", isExternal: false },
      { label: "FAQ", link: "https://docs.darwinia.network/learn/faq/", isExternal: true },
    ],
  },
  {
    label: "Build",
    sub: [
      { label: "Smart Contract", link: "https://docs.darwinia.network/build/smart-contract/interact-with-web3js/", isExternal: true },
      {
        label: "Msgport",
        link: "https://docs.msgport.xyz/build/use-cases/overview/",
        isExternal: true,
      },
      {
        label: "Run A Node",
        link: "https://docs.darwinia.network/evm/tutorial/chain/run-collator-node/",
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
];
