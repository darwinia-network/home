interface OnlineCommunitiesData {
  title: string;
  summary: string;
  sections: { h1: string; content: { link: { label: string; path: string; isExternal?: boolean }; text: string }[] }[];
}

export function useOnlineCommunitiesData(): OnlineCommunitiesData {
  return {
    title: "Online communities",
    summary:
      "Darwinia enthusiasts gather in these online forums to share news, talk about recent developments, debate technical issues, and imagine the future.",
    sections: [
      {
        h1: "Forums",
        content: [
          {
            link: {
              label: "Darwinia GitHub",
              path: "https://github.com/orgs/darwinia-network/discussions",
              isExternal: true,
            },
            text: "all things Darwinia",
          },
          {
            link: { label: "DIP GitHub", path: "https://github.com/darwinia-network/DIPs", isExternal: true },
            text: "focused on Darwinia improvement proposals",
          },
          {
            link: { label: "Darwinia SubSquare", path: "https://darwinia2.subsquare.io/", isExternal: true },
            text: "discussion for Darwinia on-chain proposal",
          },
          {
            link: { label: "DCDAO GitHub", path: "https://github.com/orgs/dcdao/discussions", isExternal: true },
            text: "focused on Darwinia community development",
          },
        ],
      },
      {
        h1: "Chat Rooms",
        content: [
          {
            link: { label: "Darwinia Discord", path: "https://discord.gg/jbRk7znn4Q", isExternal: true },
            text: "all things Darwinia",
          },
          {
            link: { label: "Staking Discord", path: "https://discord.gg/hp9fzFNap8", isExternal: true },
            text: "welcome to all interested in staking on Darwinia",
          },
          {
            link: { label: "Collator Discord", path: "https://discord.gg/5fxkpeNMgH", isExternal: true },
            text: "discussion and help for Darwinia collators",
          },
          {
            link: { label: "Governance Discord", path: "https://discord.gg/XYTB92UwKW", isExternal: true },
            text: "discussion for Darwinia on-chain proposals",
          },
          {
            link: { label: "Technical Discord", path: "https://discord.gg/fZDWmJKWCw", isExternal: true },
            text: "discussion and help for Darwinia developers",
          },
          {
            link: { label: "Technical Telegram", path: "https://t.me/DarwiniaDev", isExternal: true },
            text: "discussion and help for Darwinia developers",
          },
          {
            link: { label: "Darwinia Telegram", path: "https://t.me/DarwiniaNetwork", isExternal: true },
            text: "all things Darwinia",
          },
        ],
      },
      {
        h1: "Twitter & Blog",
        content: [
          {
            link: { label: "Twitter", path: "https://twitter.com/DarwiniaNetwork", isExternal: true },
            text: "keep up to date with the latest from the Darwinia",
          },
          {
            link: { label: "Blog", path: "https://medium.com/darwinianetwork", isExternal: true },
            text: "discover the latest news, deep dives, tutorials, and more from the Darwinia",
          },
        ],
      },
      {
        h1: "Decentralized Autonomous Organizations (DAOs)",
        content: [
          {
            link: { label: "DCDAO", path: "https://twitter.com/Official_DCDAO", isExternal: true },
            text: "community self-organized workgroup that aims to contribute to the growth and development of the Darwinia community",
          },
          {
            link: { label: "SubAPI DAO", path: "https://github.com/subapidao", isExternal: true },
            text: "targeting to be a SubDAO of Darwinia, working on Oracle and API integration",
          },
        ],
      },
    ],
  };
}
