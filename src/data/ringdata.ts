interface CardsData {
  id: string;
  image: string;
  title: string;
  desc: string;
  buttonText: string;
  type: string;
  link: string | null;
}

interface ExchangesdataType {
  text: string;
  image: string;
  subtext: string;
  link: string;
}

const data: CardsData[] = [
  {
    id: "1",
    image: "/images/ring/cards/Centralized.png",
    title: "Centralized Exchanges",
    desc: "Exchanges are businesses that let you buy crypto using traditional currencies. They have custody over any RING you buy until you send it to a wallet you control",
    buttonText: "Find a CEX",
    type: "centralized",
    link: null,
  },
  {
    id: "2",
    image: "/images/ring/cards/Decentralized.png",
    title: "Decentralized Exchanges",
    desc: "If you want more control, buy RING using smart contracts. With a DEX you can trade digital assets without ever giving control of your funds to a centralized company or organization.",
    buttonText: "Try a DEX",
    type: "decentralized",
    link: null,
  },
  {
    id: "3",
    image: "/images/ring/cards/Bridges.png",
    title: "Bridges",
    desc: "If you have some RING already, you can initiate sending and receiving RING through the bridge.",
    buttonText: "Try a bridge",
    type: "",
    link: "https://helixbridge.app/?token_category=ring",
  },
  {
    id: "4",
    image: "/images/ring/cards/ReceiveRING.png",
    title: "Receive RING From Your Peers",
    desc: "Once you have an EVM account, all you need to do is share your address to start sending and receiving RING peer-to-peer.",
    buttonText: "More on wallets",
    type: "",
    link: "https://apps.darwinia.network/",
  },
  {
    id: "5",
    image: "/images/ring/cards/EarnRING.png",
    title: "Earn RING",
    desc: "You can earn RING by working for DAOs or companies that pay in crypto, winning bounties, finding software bugs and more.",
    buttonText: "Find a DAO",
    type: "",
    link: "https://apps.darwinia.network/",
  },
  {
    id: "6",
    image: "/images/ring/cards/StakingRewards.png",
    title: "Staking Rewards",
    desc: "If you already have some RING, you can earn more by running a collator node or stake your RING to a collator.",
    buttonText: "Learn more",
    type: "",
    link: "https://docs.darwinia.network/evm/tutorial/staking/",
  },
];
export const Centralizeddata: ExchangesdataType[] = [
  { image: "/images/ring/Gate.io.png", subtext: "", text: "Gate.io", link: "https://www.gate.io/trade/RING_USDT" },
  {
    image: "/images/ring/MEXC.png",
    subtext: "",
    text: "MEXC",
    link: "https://www.mexc.com/exchange/RING_USDT",
  },
  {
    image: "/images/ring/HTX.png",
    subtext: "",
    text: "HTX",
    link: "https://www.htx.com/trade/ring_usdt",
  },
  {
    image: "/images/ring/CoinEX.png",
    subtext: "",
    text: "CoinEX",
    link: "https://www.coinex.com/en/exchange/ring-usdt?currency=USDT&dest=RING#spot",
  },
  {
    image: "/images/ring/Poloniex.png",
    subtext: "",
    text: "Poloniex",
    link: "https://poloniex.com/trade/RING_USDT?type=spot",
  },
];
export const Decentralizeddata: ExchangesdataType[] = [
  {
    image: "/images/ring/UniswapV3.png",
    subtext: "Arbitrum One",
    text: "Uniswap V3",
    link: "https://app.uniswap.org/#/swap?chain=arbitrum&inputCurrency=0x9e523234d36973f9e38642886197d023c88e307e&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  },
  {
    image: "/images/ring/UniswapV2.png",
    subtext: "Ethereum",
    text: "Uniswap V2",
    link: "https://app.uniswap.org/#/swap?inputCurrency=0x9469d013805bffb7d3debe5e7839237e535ec483&outputCurrency=ETH",
  },
  {
    image: "/images/ring/DeGate.png",
    subtext: "",
    text: "DeGate",
    link: "https://app.degate.com/trade/USDC/0x9469d013805bffb7d3debe5e7839237e535ec483",
  },
  {
    image: "/images/ring/Snowswap.png",
    subtext: "",
    text: "Snowswap",
    link: "https://darwinia.snowswap.xyz/",
  },
  {
    image: "/images/ring/Quickswap.png",
    subtext: "",
    text: "Quickswap",
    link: "https://quickswap.exchange/#/swap?inputCurrency=0x9c1c23e60b72bc88a043bf64afdb16a02540ae8f&outputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  },
];

export function useRingData() {
  return data;
}
