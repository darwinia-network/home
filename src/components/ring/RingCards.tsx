import React from 'react';

const RingCards = ({ data, scrollToRef, DecentralizedExchangesRef, CentralizedExchangesRef}: any) => {
    const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
        scrollToRef(ref);
    };

    return (
        <div className='lg:h-[300px] bg-[#EAF0F6] p-[30px] lg:w-[400px] rounded-[10px]'>
            <img src={data.image} alt='' className='lg:w-[50px] lg:h-[50px] rounded-[10px] mb-[20px]' />
            <h4 className='text-black text-[20px] font-[500] leading-[23.36px]'>{data.title}</h4>
            <p className='text-black text-[12px] font-[300] mt-[10px] mb-[20px] h-[75px] leading-[15.22px]'>{data.desc}</p>
            <button
                className='text-[14px] font-[700] leading-[22px] flex items-center gap-[10px] pr-[10px] pl-[15px] py-[8px] rounded-[40px] border-[1px] border-black text-black lg:text-[12px] lg:font-[300]'
                type='button'
                onClick={() => 
                {
                    if(data.type === "decentralized") {
                        handleScroll(DecentralizedExchangesRef)
                    } else if(data.type === "centralized") {
                        handleScroll(CentralizedExchangesRef)
                    } else {
                        window.open(data.link, '_blank');
                    }
                }}>
                {data.buttonText}
                <img src='/images/ring/cards/goIcon.svg' alt='' />
            </button>
        </div>
    );
};

export default RingCards;