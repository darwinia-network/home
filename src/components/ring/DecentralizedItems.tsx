import React from 'react'

interface DecentralizedType {
  item : any
}

const DecentralizedItems = ({item} : DecentralizedType) => {
  return (
    <div className='flex items-center gap-[10px] lg:gap-0 lg:flex-col w-full bg-[#2A2A2A] lg:bg-transparent p-[10px] lg:p-0 rounded-[10px] lg:w-[104px]'>
        <img src={item.image} alt={item.text} className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]'/>
        <div className='flex items-center gap-[5px]'>
            <p className='text-[14px] font-[700] leading-[22.4px] tracking-[1px] text-[#F2F3F5] flex-shrink-0'>{item.text}</p>
            <img src="/images/bridge/UnionBridge.svg" alt="union" className='hidden lg:block cursor-pointer' onClick={() => {
                  window.open(item.link, '_blank');

            }}/>
        </div>
        {
            item.subtext &&
            <p className='text-[12px] font-[300] leading-[15.22px] text-[#F2F3F5] flex-shrink-0 opacity-50 w-[106px] lg:w-auto'>{item.subtext}</p>
          }
          <img src="/images/bridge/UnionBridge.svg" alt="union" className='lg:hidden cursor-pointer'  onClick={() => {
                window.open(item.link, '_blank');
          }}/>
    </div>
  )
}

export default DecentralizedItems