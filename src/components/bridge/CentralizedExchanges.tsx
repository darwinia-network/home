import React from 'react'
import DecentralizedItems from './DecentralizedItems'
import BgBlackContainer from './BgBlackContainer'

const CentralizedExchanges = ({ref} : any) => {
  return (
  <BgBlackContainer>
     <div ref={ref}>
        <h1 className='text-[#F2F3F5] tsxt-[22px] leading-[27.9px] lg:text-[40px] font-[700] lg:leading-[50.72px] tracking-[2px]'>Centralized Exchanges(CEXs)</h1>
        <p className='leading-[15.22px] text-[12px] lg:text-[14px] font-[400] lg:leading-[22.4px] tracking-[1px]'>
            Centralized exchanges are platforms that are managed by a single entity or company. They act as middlemen between buyers and sellers of cryptocurrencies, similar to traditional stock exchanges. 
            Typically, exchanges have restrictions on where they can sell crypto. Some exchanges may not be available in your country or area, you can consult the exchanges customer service or check the announcement from exchanges. As for the tax issue, you may also want to consult the local department for more information.
        </p>
        <div className='flex gap-[20px] lg:gap-0 lg:justify-between flex-wrap w-full'>
            <DecentralizedItems img='/images/bridge/Gate.io.png' subtext='' text='Gate.io' />
            <DecentralizedItems img='/images/bridge/MEXC.png' subtext='' text='MEXC' />
            <DecentralizedItems img='/images/bridge/HTX.png' subtext='' text='HTX' />
            <DecentralizedItems img='/images/bridge/CoinEX.png' subtext='' text='CoinEX' />
            <DecentralizedItems img='/images/bridge/Poloniex.png' subtext='' text='Poloniex' />
        </div>
        <div>
        <p className='text-[10px] font-[500] leading-[12.68px] text-[#6F6F6F]'>DISCLAIMER: The information presented herein, sourced from community and <span className='text-[10px] font-[500] leading-[12.68px] text-[#FF0083]'>CoinGecko</span> , is made available solely for general information purposes. It should not be construed as professional or financial advice of any kind. </p>
        </div>
     </div>
  </BgBlackContainer>
  )
}

export default CentralizedExchanges