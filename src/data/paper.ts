interface PaperData {
  id: string;
  image: string;
  authors: string[];
  tags: string[];
  title: string;
  fullPath: string;
  summaries: string[];
  lastUpdate: string;
}

const data: PaperData[] = [
  {
    id: "genepaper-v4",
    image: "/images/papers/genepaper-v4.png",
    authors: ["Alex Chien", "Denny Wang"],
    tags: ["Cross-Chain Messaging", "Darwinia Msgport", "Darwinia EVM+"],
    title: "Darwinia Genepaper V4",
    fullPath: "/Genepaper_v4.pdf",
    summaries: [
      "The blockchain industry has been evolving rapidly, witnessing the emergence of numerous blockchain networks. As proponents of a multi-chain future, we recognize the increasing need for DApp interoperability among these diverse chains. While addressing this interoperability challenge, our focus extends beyond safety to encompass versatility, generalizability, cost-effectiveness, and programmability.",
      "Currently, several service providers offer token bridges for token holders. However, most of these solutions are limited to specific assets or use cases, lacking the desired level of generalization and programmability. Moreover, the complexity that arises from layering application-layer smart contracts on top of underlying cross-chain solutions further compromises security. To meet the needs of cross-chain DApp developers, there is a requirement for layered protocols, including a purpose-built, generalized, and programmable cross-chain messaging layer to support their applications.",
      "Much like how Ethereum revolutionized the industry by introducing smart contracts, thereby transforming blockchains into programmable platforms and laying the foundation for the DApp boom and DeFi summer, we anticipate a substantial increase in blockchain functionality driven by new and emerging cross-chain messaging technologies.",
      "Darwinia aims to lead this trend with its cross-chain messaging services and infrastructure. We focus on enhancing the cross-chain capabilities of DApps by providing developers with Darwinia Msgport. This solution enables seamless integration of cross-chain functionality into their DApps. Additionally, Darwinia offers extensive support facilities and various message protocol options, including ORMP, LCMP, XCMP, L1-L2 Messaging, and more, in addition to the Darwinia EVM+ ability.",
    ],
    lastUpdate: "January 5, 2024",
  },
  {
    id: "genepaper-v3",
    image: "/images/papers/genepaper-v3.png",
    authors: ["Alex Chien", "Denny Wang"],
    tags: ["Darwinia ChainRelay", "Light-Client", "Optimistic Verification"],
    title: "Darwinia Genepaper V3",
    fullPath: "/Genepaper_v3.pdf",
    summaries: [
      "The blockchain industry has been evolving rapidly, witnessing the emergence of numerous blockchain networks. As proponents of a multi-chain future, we recognize the increasing need for interoperability among these diverse chains. While addressing this interoperability challenge, our focus extends beyond safety to encompass versatility, generalizability, and programmability.",
      "Currently, several service providers offer token bridges for token holders. However, most of these solutions are limited to specific assets or use cases, lacking the desired level of generalization and programmability. Moreover, the complexity arising from layering application layer smart contracts on top of underlying cross-chain solutions further compromises security. To cater to the needs of cross-chain Dapp developers, there is a requirement for layered protocols, including a purpose-built, generalized, and programmable cross-chain messaging layer to support their applications.",
    ],
    lastUpdate: "July 5, 2023",
  },
  {
    id: "op-bridge",
    image: "/images/papers/optimistic-bridge.png",
    authors: ["Alex Chien", "Denny Wang"],
    tags: ["Darwinia ChainRelay", "Light-Client", "Optimistic Verification", "Merkle Mountain Range"],
    title: "Darwinia Optimistic Bridge: Sublinear Relay for Interoperable Blockchains",
    fullPath: "/itering_io_optimistic_bridge_technical_paper_en.pdf",
    summaries: [
      "Abstract—To verify transactions, cryptocurrencies such as Bit-coin [1] and Ethereum [2] require nodes to verify that the block-chain is valid. This requirement means downloading and verifying all blocks, which takes hours and requires gigabytes of bandwidth and storage space. Therefore, clients with limited resources cannot independently verify transactions without trusting the full node. Bitcoin and Ethereum provide lightweight clients called simplified payment verification (SPV) clients that can verify the chain by downloading only the block header. Unfortunately, the storage and bandwidth requirements of SPV clients still grow linearly with chain length. Recently, NIPoPoW [3] and FlyClient [4] have proposed a type of solution called super-light client. It is expected that light clients only need to download and store the logarithmic number of block headers, but this type of solution cannot be directly used for light clients on the chain, that is, cross-chain Relay. FlyClient requires making a certain degree of a hard fork to the corresponding chain and supports the Merkle Mountain Range (MMR) commitment before it can be used for relay on the chain, they all have a certain degree of poor generality, Non-Interactive Proof of Work (NIPoPoW) is only applicable to chains with fixed block difficulty, and FlyClient needs to modify the best probability block sampling protocol and variable-difficulty verification model",
    ],
    lastUpdate: "July 26, 2022",
  },
];

export function usePapersData() {
  return data;
}

export function usePaperData(id: string) {
  return data.find((d) => d.id === id);
}
