import React from 'react'

const Booking = () => {
  return (
    <div id="deals" className='max-w-[1250px] m-auto mt-12 w-full p-4'>
        <form className='lg:flex lg:gap-2 lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Boracay</option>
                    <option>El Nido</option>
                    <option>Coron</option>
                    <option>Cebu City</option>
                </select>
            </div>
            <div className='flex w-full gap-2'>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
                    <label>Check-In</label>
                    <input type="date" className='border rounded-md p-2'/>
                </div>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
                    <label>Check-Out</label>
                    <input type="date" className='border rounded-md p-2'/>
                </div>
            </div>
            <div className='flex flex-col my-2 py-2 w-full'>
                <label>Search</label>
                <button className='w-full'>Rates & Availabilities</button>
            </div>
        </form>
    </div>
  )
}

export default Booking
