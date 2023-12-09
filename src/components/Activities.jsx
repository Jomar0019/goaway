import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1250px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl'>Resorts</h3>
            <img
                className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl'>Cruises</h3>
            <img
                className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl'>Snorkeling</h3>
            <img
                className='w-full h-full object-cover relative border-4 border-white shadow-lg'
                src="https://images.unsplash.com/photo-1583364493238-248032147fbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        </div>
    </div>
  )
}

export default Activities
