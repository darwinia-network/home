import React from 'react'

interface DecentralizedType {
    img : string ,
    text : string ,
    subtext : string 
}

const DecentralizedItems = ({img , text , subtext} : DecentralizedType) => {
  return (
    <div className='flex items-center gap-[10px] lg:gap-0 lg:flex-col w-full lg:w-auto bg-[#2A2A2A] lg:bg-transparent p-[10px] lg:p-0 rounded-[10px]'>
        <img src={img} alt={text} className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]'/>
        <div className='flex items-center gap-[5px]'>
            <p className='text-[14px] font-[700] leading-[22.4px] tracking-[1px] text-[#F2F3F5] flex-shrink-0'>{text}</p>
            <img src="/images/bridge/UnionBridge.svg" alt="union" className='hidden lg:block'/>
        </div>
        {
            subtext &&
            <p className='text-[12px] font-[300] leading-[15.22px] text-[#F2F3F5] flex-shrink-0 opacity-50 w-[106px] lg:w-auto'>{subtext}</p>
          }
          <img src="/images/bridge/UnionBridge.svg" alt="union" className='lg:hidden'/>
    </div>
  )
}

export default DecentralizedItems