import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { WiSunrise } from "react-icons/wi";


const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <WiSunrise size={40} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>GOAWAY</h1>
      </div>
      <div className='flex'>
        <div className='hidden m:flex lg:flex items-center px-6'>
            <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
            <p className='text-sm text-gray-700'>9AM - 5AM</p>
        </div>
        <div className='hidden m:flex lg:flex items-center px-6'>
            <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
            <p className='text-sm text-gray-700'>1-777-187-1234</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default TopBar
