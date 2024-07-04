import React from 'react'
import ManualBooking from '../assets/ManualBooking.jpg'
import YoutubeEmbed from './YoutubeEmbed';


const Manual = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={ManualBooking} alt='/' />
          
          <div className='flex flex-col justify-center'>
            <p className='text-yellow-600 font-bold '>Manual Booking</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Your first choice for traveling anywhere</h1>
            <p className='page-break-avoid '>
            We are specialized in providing a high quality service
            <ul className='list-disc list-inside mt-4'>
            <li>Easy Searching</li>
            <li>Rapid Rides</li>
            <li>Inclusive Rates</li>
            <li>Rapid Rides</li>

          </ul>

          
            </p>

            <div className='w-full md:w-1/4'>
            <YoutubeEmbed embedId="Y-6yyXGgT1E" width={400} height={300} />
          </div>
          <p className='mt-4'>
            Call Us Now! <br />
            <span className='font-bold text-lg'>0706563213</span>
          </p>
        </div>
      </div>
    </div>
      
  )
}

export default Manual
