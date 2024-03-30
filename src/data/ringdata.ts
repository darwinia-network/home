interface CardsData {
    id: string;
    image: string;
    title: string;
    desc : string ;
    buttonText : string ,
    type : string ,
    link : string | null
  }

  interface ExchangesdataType {
    text: string;
    image: string;
    subtext : string ,
    link : string

  }
  
  const data: CardsData[] = [
    {
      id: "1",
      image: "/images/ring/cards/Centralized.png",
      title: "Centralized Exchanges",
      desc : "Exchanges are businesses that let you buy crypto using traditional currencies. They have custody over any RING you buy until you send it to a wallet you control" ,
      buttonText : "Find a CEX" ,
      type : "centralized" ,
      link : null
    } ,
    {
        id: "2",
        image: "/images/ring/cards/Decentralized.png",
        title: "Decentralized Exchanges",
        desc : "If you want more control, buy RING using smart contracts. With a DEX you can trade digital assets without ever giving control of your funds to a centralized company or organization." ,
        buttonText : "Try a DEX" ,
        type : "decentralized" ,
        link : null

      } ,
    {
        id: "3",
        image: "/images/ring/cards/Bridges.png",
        title: "Bridges",
        desc : "If you have some RING already, you can initiate sending and receiving RING through the bridge." ,
        buttonText : "Try a bridge" ,
        type : ""  ,
        link : "https://helixbridge.app/?token_category=ring"
    } ,
    {
        id: "4",
        image: "/images/ring/cards/ReceiveRING.png",
        title: "Receive RING From Your Peers",
        desc : "Once you have an EVM account, all you need to do is share your address to start sending and receiving RING peer-to-peer." ,
        buttonText : "More on wallets" ,
        type : "" ,
        link : "https://apps.darwinia.network/"
    } ,
    {
        id: "5",
        image: "/images/ring/cards/EarnRING.png",
        title: "Earn RING",
        desc : "You can earn RING by working for DAOs or companies that pay in crypto, winning bounties, finding software bugs and more." ,
        buttonText : "Find a DAO" ,
        type : "" ,
        link : "https://apps.darwinia.network/"
    } ,
    {
        id: "6",
        image: "/images/ring/cards/StakingRewards.png",
        title: "Staking Rewards",
        desc : "If you already have some RING, you can earn more by running a collator node or stake your RING to a collator." ,
        buttonText : "Learn more" ,
        type : "" ,
        link : "https://docs.darwinia.network/staking-guide-4306a2a3f25f4ea0b41377e267e1d319"
    } ,
  ];
  export const Centralizeddata : ExchangesdataType[] = [
    {image :'/images/ring/Gate.io.png' ,
    subtext :  '' ,
    text :'Gate.io' ,
    link : "https://www.coingecko.com/en/exchanges/gate-io"
    } ,
    {
      image :'/images/ring/MEXC.png' ,
      subtext :  '' ,
      text :'MEXC' , 
      link : "https://www.coingecko.com/en/exchanges/mexc"
    } ,
    {
      image :'/images/ring/HTX.png' ,
      subtext :  '' ,
      text :'HTX' ,
      link : "https://www.coingecko.com/en/exchanges/htx"
    } ,
    {
      image :'/images/ring/CoinEX.png' ,
      subtext :  '' ,
      text :'CoinEX' ,
      link : "https://www.coingecko.com/en/coins/coinex-token"
    } ,
    {
      image :'/images/ring/Poloniex.png' ,
      subtext :  '',
       text :'Poloniex' ,
       link : "https://www.coingecko.com/en/exchanges/poloniex"
    }
  ]
  export const Decentralizeddata : ExchangesdataType [] = [
    {
      image : '/images/ring/UniswapV3.png' ,
      subtext : 'Arbitrum One' ,
      text : 'Uniswap V3'  ,
      link : "https://www.coingecko.com/en/nft/uniswap-v3-positions"
    } ,
    {
      image : '/images/ring/UniswapV2.png' ,
      subtext : 'Ethereum' ,
      text : 'Uniswap V2' ,
      link : "https://www.coingecko.com/en/exchanges/uniswap-v2-ethereum"
    } ,
    {
      image : '/images/ring/DeGate.png' ,
      subtext : '',
       text : 'DeGate' ,
       link : "https://www.coingecko.com/en/coins/degate"
    } ,
    {
      image : '/images/ring/Snowswap.png' ,
      subtext : '' ,
      text : 'Snowswap' ,
      link : "https://darwinia.snowswap.xyz/"
    } ,
    {
      image : '/images/ring/Quickswap.png',
       subtext : '' ,
      text : 'Quickswap' ,
      link : "https://www.coingecko.com/en/coins/quickswap"
    } 
  ]
  
  export function useRingData() {
    return data;
  }
  
  