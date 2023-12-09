import React from 'react'
import { WiSunrise } from "react-icons/wi";

const Footer = () => {
  return (
    <div className='mt-16 w-full py-8 m-auto border-t-2'>
      <div className='flex items-center m-auto justify-center'>
        <WiSunrise size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>GOAWAY</h1>
      </div>
    </div>
  )
}

export default Footer
