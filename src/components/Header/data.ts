export const navigations: {
  label: string;
  sub: { label: string; link: string; isExternal?: boolean }[];
  link?: string;
  isExternal?: boolean;
}[] = [
  {
    label: "Use Darwinia",
    sub: [

      {
        label: "Get RING",
        link: "/get-ring",
        isExternal: false,
      },
      {
        label: "Apps",
        link: "https://apps.darwinia.network/",
        isExternal: true
      },
      {
        label: "Collator Staking",
        link: "https://collator-staking.darwinia.network/",
        isExternal: true,
      },
      {
        label: "Explorer",
        link: "https://explorer.darwinia.network",
        isExternal: true,
      },
      {
        label: "Govenance",
        link: "https://darwinia2.subsquare.io/",
        isExternal: true,
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
        link: "https://docs.darwinia.network/community/ringdao/#other-utilities-of-ring",
        isExternal: true,
      },
      { label: "News & Updates", link: "https://medium.com/darwinianetwork", isExternal: true },
      {
        label: "Roadmap",
        link: "https://ringdao.notion.site/10daad1d671e80a48e04edd0917f4be6?v=fffaad1d671e81cd9321000c79aeec2c",
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
        label: "Runtime(dotapps.io)",
        link: "https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=wss%3A%2F%2Frpc.darwinia.network#/chainstate",
        isExternal: true,
      },
      {
        label: "Run A Node",
        link: "https://docs.darwinia.network/build/chain/run-collator-node/",
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
      { label: "Bounty Program", link: "https://github.com/darwinia-network/collaboration/blob/master/bounty/README.md", isExternal: true },
      {
        label: "Help Center",
        link: "https://github.com/orgs/ringecosystem/discussions",
        isExternal: true,
      },
      {
        label: "Brand Assets",
        link: "https://ringdao.notion.site/Brand-Assets-10daad1d671e809b8cade67cfa9fe5a9",
        isExternal: true,
      },
    ],
  },
];
