import React from 'react'

const BgBlackContainer = ({children} : any) => {
  return (
    <div className='lg:w-[695px] bg-black rounded-[30px] p-[20px] lg:p-[40px] flex flex-col gap-[30px] mx-[20px] lg:mx-0'>
        {children}
    </div>
  )
}

export default BgBlackContainer