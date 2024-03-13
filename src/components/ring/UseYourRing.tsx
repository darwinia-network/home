import React from 'react'

const UseYourRing = () => {
  return (
    <section className='flex flex-col lg:flex-wrap items-center justify-center pb-[140px] lg:pb-[48px] px-[20px] lg:px-0'>
        <img src="/images/ring/ringformobile.png" alt="ringformobile" className='lg:hidden mb-[10px]'/>
        <div className='flex items-center justify-center flex-col lg:bg-no-repeat lg:bg-contain lg:bg-center gap-[10px] lg:bg-[url("/public/images/ring/ringBg.png")] xl:w-[1262px]'>
            <img src="/images/ring/ring.png" alt="ring" className='w-[100px] h-[100px] hidden lg:block'/>
            <h2 className='font-[700] text-[22px] leading-[27.9px] tracking-[1px] text-[black]'>Use Your RING</h2>
            <p className='text-[16px] font-[300] leading-[25.6px] text-center text-[#6F6F6F] lg:w-[800px]'>
                Now that you own some RING, check out some Darwinia ecosystem applications (DApps). There are DApps for finance, social media, gaming and lots of other categories.
            </p>
            <a className='flex items-center gap-[10px] pr-[10px] pl-[15px] py-[8px] rounded-[40px] border-[1px] border-black text-black text-[16px] lg:text-[12px] font-[300] leading-[25.6px]' href='https://apps.darwinia.network/' target='_blank' rel='noopener noreferrer'>
            Check out DApps
            <img src="/images/ring/cards/goIcon.svg" alt="" />
        </a>
        </div>
    </section>
  )
}

export default UseYourRing