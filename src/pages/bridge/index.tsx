import React, { useRef } from 'react'
import OthersPageWrap from '../../components/OthersPageWrap'
import { useBridgeData } from '../../data/bridgedata'
import BridgeCards from '../../components/bridge/BridgeCards';
import DecentralizedExchanges from '../../components/bridge/DecentralizedExchanges';
import CentralizedExchanges from '../../components/bridge/CentralizedExchanges';
import UseYourRing from '../../components/bridge/UseYourRing';
import BridgeHero from '../../components/bridge/BridgeHero';


const Bridge = () => {
    const cardsdata = useBridgeData();
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

  return (
    <OthersPageWrap>
        <BridgeHero />
        <section className='flex items-center justify-center gap-[20px] lg:gap-[40px] flex-wrap mt-[100px] 2xl:px-[320px]'>
            {
                cardsdata.map((item , index) => {
                    return (
                        <BridgeCards data={item} key={item.title + index} scrollToRef={scrollToRef} DecentralizedExchangesRef={DecentralizedExchangesRef} CentralizedExchangesRef={CentralizedExchangesRef} />
                    )
                })
            }
        </section>
        <div className='flex items-center justify-center' >
            <p className='text-[10px] font-[500] text-[#6F6F6F] lg:w-[660px] text-center my-[20px] lg:mt-[20px] lg:mb-[100px] leading-[12.6px] px-[20px] lg:px-0'>The information presented on this page, including product names, logos, and links to external web pages, is made available solely for general information purposes and is by no means an endorsement of the project, the content of its web pages, or the team. If you want to add a product or provide feedback <a href='https://github.com/darwinia-network/home/issues' target='_blank' rel='noopener noreferrer' className='text-[10px] font-[500] text-[#FF0083]'>create an issue in GitHub.</a> </p>
        </div>
        <section className='flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] justify-center mb-[100px]'>
            <DecentralizedExchanges ref={DecentralizedExchangesRef}/>
            <CentralizedExchanges ref={CentralizedExchangesRef}/>
        </section>
        <UseYourRing />
    </OthersPageWrap>
  )
}

export default Bridge