import NavigationV2PC from "./NavigationV2PC";

const data: { label: string; sub: { label: string; link: string; isExternal?: boolean }[] }[] = [
  {
    label: "Use Darwinia",
    sub: [
      { label: "Get RING", link: "#" },
      { label: "Stake RING", link: "#" },
      { label: "Run A Node", link: "#" },
      { label: "Cross-Chain Asset Bridge", link: "#" },
      { label: "Cross-Chain DAO Governance", link: "#" },
    ],
  },
  {
    label: "Learn",
    sub: [
      { label: "What Is Darwinia", link: "#" },
      { label: "What Is RING", link: "#" },
      { label: "Darwinia Ecosystem DApps", link: "#" },
      { label: "Darwinia News & Updates", link: "#" },
      { label: "Darwinia Roadmap", link: "#" },
      { label: "Darwinia Genepaper v4", link: "#" },
      { label: "Paper Resources", link: "#" },
      { label: "Glossary", link: "#" },
      { label: "FAQ", link: "#" },
    ],
  },
  {
    label: "Developers",
    sub: [
      { label: "Documentation", link: "#" },
      { label: "Use Cases", link: "#" },
    ],
  },
  {
    label: "Solutions",
    sub: [
      { label: "Messaging Protocols", link: "#" },
      { label: "Darwinia EVM+", link: "#" },
    ],
  },
  {
    label: "Community",
    sub: [
      { label: "Online Communities", link: "#" },
      { label: "Get Involved", link: "#" },
      { label: "Grants", link: "#" },
      { label: "Help Center", link: "#" },
      { label: "Brand Assets", link: "#" },
    ],
  },
];

export default function NavigationV2() {
  return (
    <>
    <NavigationV2PC data={data} />
    </>
  )
}
