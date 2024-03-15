// DecentralizedExchanges.tsx
import React, { forwardRef, ReactNode } from 'react';
import DecentralizedItems from './DecentralizedItems';
import BgBlackContainer from './BgBlackContainer';
import { Decentralizeddata } from '../../data/ringdata';

type DecentralizedExchangesProps = {
  children?: ReactNode;
};

const DecentralizedExchanges = forwardRef<HTMLDivElement, DecentralizedExchangesProps>((props, ref) => {
  return (
    <BgBlackContainer ref={ref}>
      <h1 className='text-[#F2F3F5] text-[22px] leading-[27.9px] lg:text-[40px] font-[700] lg:leading-[50.72px] tracking-[2px]'>Decentralized Exchanges(DEXs)</h1>
      <p className='leading-[15.22px] text-[12px] lg:text-[14px] font-[400] lg:leading-[22.4px] tracking-[1px]'>
        DEXs operate without a central authority, serving as open marketplaces for tokens where buyers and sellers are connected directly. 
        Instead of relying on a trusted third party to secure funds during transactions, DEXs utilize code, called smart contracts, to ensure transaction security. In this setup, the seller &apos s RING is only transferred once payment is guaranteed. 
        DEXs offer fewer geographical restrictions compared to their centralized alternatives. As long as someone is selling what you need and accepting a payment method you can offer, you &apos re ready to proceed. This decentralized nature provides greater accessibility and flexibility for users.
      </p>
      <div className='gap-[20px] grid lg:grid-cols-5 lg:gap-[34px]'>
        {
          Decentralizeddata.map(item => {
            return (
              <DecentralizedItems key={item.text} item={item} />
            )
          })
        }
      </div>
      <div>
        <p className='text-[10px] font-[500] leading-[12.68px] text-[#6F6F6F]'>DISCLAIMER: The information presented herein, sourced from community and 
        <span className='text-[10px] font-[500] leading-[12.68px] text-[#FF0083]'>CoinGecko</span> 
        , is made available solely for general information purposes. These DEXs aren &apos t for beginners as you &apos ll need some RING to use them.  Do your own research!</p>
      </div>
    </BgBlackContainer>
  );
});

DecentralizedExchanges.displayName = 'DecentralizedExchanges';

export default DecentralizedExchanges;