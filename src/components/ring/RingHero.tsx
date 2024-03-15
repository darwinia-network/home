import React from 'react'

const RingHero = () => {
  return (
    <div className='h-[260px] lg:h-[440px] lg:bg-contain bg-no-repeat lg:bg-center w-[100%] flex items-center justify-center flex-col gap-[10px] bg-[url("/public/images/ring/bridgeHeroBg.png")] bg-top bg-cover' 
    >
        <h3 className='text-[22px] leading-[27.9px] text-center font-[700] tracking-[2px] lg:text-[40px] lg:leading-[50.72px]'>Where to get RING</h3>
        <p className='text-[12px] leading-[15.22px] text-center font-[300] lg:text-[16px] lg:leading-[25.6px]'>You can earn RING, receive it from your peers, or buy it from exchanges and DApps</p>
    </div>
  )
}

export default RingHero