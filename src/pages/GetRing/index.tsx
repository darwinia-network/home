import React, { useRef } from 'react'
import OthersPageWrap from '../../components/OthersPageWrap'
import { useRingData } from '../../data/ringdata'
import RingCards from '../../components/ring/RingCards';
import DecentralizedExchanges from '../../components/ring/DecentralizedExchanges';
import CentralizedExchanges from '../../components/ring/CentralizedExchanges';
import UseYourRing from '../../components/ring/UseYourRing';
import RingHero from '../../components/ring/RingHero';

import { CowSwapWidget, CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react'


const Ring = () => {
    const cardsdata = useRingData();
    const DecentralizedExchangesRef = useRef<HTMLDivElement>(null);
    const CentralizedExchangesRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        let offset = 100; // Default offset
        if (window.innerWidth <= 768) {
            // Mobile or smaller screen size
            offset = 57; // Adjusted offset for mobile
        }

        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - offset,
                behavior: 'smooth',
            });
        }
    };


    //  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
    const cowWidgetarams: CowSwapWidgetParams = {
        "appCode": "darwinia-cow-app", // Name of your app (max 50 characters)
        "width": "100%", // Width in pixels (or 100% to use all available space)
        "height": "640px",
        "chainId": 1, // 1 (Mainnet), 100 (Gnosis), 11155111 (Sepolia)
        "tokenLists": [ // All default enabled token lists. Also see https://tokenlists.org
            "https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/definition/tokens/cow-widget.json",
            "https://files.cow.fi/tokens/CowSwap.json",
            "https://files.cow.fi/tokens/CoinGecko.json"
        ],
        "tradeType": TradeType.SWAP, // TradeType.SWAP, TradeType.LIMIT or TradeType.ADVANCED
        "sell": { // Sell token. Optionally add amount for sell orders
            "asset": "USDC",
            "amount": "1000"
        },
        "buy": { // Buy token. Optionally add amount for buy orders
            "asset": "RING",
            "amount": "0"
        },
        "enabledTradeTypes": [ // TradeType.SWAP, TradeType.LIMIT and/or TradeType.ADVANCED
            TradeType.SWAP,
            TradeType.LIMIT,
            TradeType.ADVANCED,
            TradeType.YIELD
        ],
        "theme": "dark", // light/dark or provide your own color palette
        "standaloneMode": true,
        "disableToastMessages": false,
        "disableProgressBar": false,
        "hideBridgeInfo": false,
        "hideOrdersTable": false,
        "images": {},
        "sounds": {},
        "customTokens": []
    }

  return (
    <OthersPageWrap>
        <RingHero />
        <section className='flex items-center justify-center gap-[20px] lg:gap-[40px] flex-wrap mt-[100px] px-[20px] lg:px-0 min-[1720px]:px-[220px] min-[1920px]:px-[320px]'>
            {
                cardsdata.map((item , index) => {
                    return (
                        <RingCards data={item} key={item.title + index} scrollToRef={scrollToRef} DecentralizedExchangesRef={DecentralizedExchangesRef} CentralizedExchangesRef={CentralizedExchangesRef} />
                    )
                })
            }
        </section>
        <div className='flex items-center justify-center' >
            <p className='text-[10px] font-[500] text-[#6F6F6F] lg:w-[660px] text-center my-[20px] lg:mt-[20px] lg:mb-[100px] leading-[12.6px] px-[20px] lg:px-0'>The information presented on this page, including product names, logos, and links to external web pages, is made available solely for general information purposes and is by no means an endorsement of the project, the content of its web pages, or the team. If you want to add a product or provide feedback <a href='https://github.com/darwinia-network/home/issues' target='_blank' rel='noopener noreferrer' className='text-[10px] font-[500] text-[#FF0083]'>create an issue in GitHub.</a> </p>
        </div>
        <section className='flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] justify-center mb-[100px] flex-wrap'>
            <DecentralizedExchanges ref={DecentralizedExchangesRef}/>
            <CentralizedExchanges ref={CentralizedExchangesRef}/>
        </section>
        <section className='flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] justify-center mb-[100px] flex-wrap box-cow'>
            <CowSwapWidget params={cowWidgetarams} />
        </section>
        <UseYourRing />
    </OthersPageWrap>
  )
}

export default Ring