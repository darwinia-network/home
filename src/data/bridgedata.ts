interface CardsData {
    id: string;
    image: string;
    title: string;
    desc : string ;
    buttonText : string ,
    type : string ,
  }
  
  const data: CardsData[] = [
    {
      id: "1",
      image: "/images/bridge/cards/Centralized.png",
      title: "Centralized Exchanges",
      desc : "Exchanges are businesses that let you buy crypto using traditional currencies. They have custody over any RING you buy until you send it to a wallet you control" ,
      buttonText : "Find a CEX" ,
      type : "decentralized"
    } ,
    {
        id: "2",
        image: "/images/bridge/cards/Decentralized.png",
        title: "Decentralized Exchanges",
        desc : "If you want more control, buy RING using smart contracts. With a DEX you can trade digital assets without ever giving control of your funds to a centralized company or organization." ,
        buttonText : "Try a DEX" ,
        type : "decentralized"
      } ,
    {
        id: "3",
        image: "/images/bridge/cards/Bridges.png",
        title: "Bridges",
        desc : "If you have some RING already, you can initiate sending and receiving RING through the bridge." ,
        buttonText : "Try a bridge" ,
        type : ""
    } ,
    {
        id: "4",
        image: "/images/bridge/cards/ReceiveRING.png",
        title: "Receive RING From Your Peers",
        desc : "Once you have an EVM account, all you need to do is share your address to start sending and receiving RING peer-to-peer." ,
        buttonText : "More on wallets" ,
        type : ""
    } ,
    {
        id: "5",
        image: "/images/bridge/cards/EarnRING.png",
        title: "Earn RING",
        desc : "You can earn RING by working for DAOs or companies that pay in crypto, winning bounties, finding software bugs and more." ,
        buttonText : "Find a DAO" ,
        type : ""
    } ,
    {
        id: "6",
        image: "/images/bridge/cards/StakingRewards.png",
        title: "Staking Rewards",
        desc : "If you already have some RING, you can earn more by running a collator node or stake your RING to a collator." ,
        buttonText : "Learn more" ,
        type : ""
    } ,
  ];
  
  export function useBridgeData() {
    return data;
  }
  
  