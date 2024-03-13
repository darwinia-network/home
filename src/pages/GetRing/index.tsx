import React, { useRef } from 'react'
import OthersPageWrap from '../../components/OthersPageWrap'
import { useRingData } from '../../data/ringdata'
import RingCards from '../../components/ring/RingCards';
import DecentralizedExchanges from '../../components/ring/DecentralizedExchanges';
import CentralizedExchanges from '../../components/ring/CentralizedExchanges';
import UseYourRing from '../../components/ring/UseYourRing';
import RingHero from '../../components/ring/RingHero';


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
        <UseYourRing />
    </OthersPageWrap>
  )
}

export default Ring