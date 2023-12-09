import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        
        {/* ALT IMG : https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}

        <img src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero-Beach"
        className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 bold'>With GoAway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet incidunt illo animi maxime iure id cumque neque odio itaque dolores molestias vero tenetur a, veniam eum sequi est commodi!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
