import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';

const DriverInstructions = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          App Instructions Step By Step Video Demonstration
        </h1>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>How to create account in JRide?</h2>
            <YoutubeEmbed embedId="Ksc0xX1OKYo" />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-4'>How to book in JRide Taxi App?</h2>
            <YoutubeEmbed embedId="WDUNiU3ALf4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverInstructions
