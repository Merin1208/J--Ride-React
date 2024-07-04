import React from 'react'
import Address from '../assets/Address.png'
import Airport from '../assets/Airport.png'
import Taxi from '../assets/Taxi.png'

const Service = () => {
  return (
    <div className='w-full py-8 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto text-center mb-8'>
         <h1 className='md:text-4xl sm:text-3xl text-2xl text-black text-center font-bold md:py-6'>
          Our Services
        </h1>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Address} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>01</h2>
              <p className='text-center text-4xl font-bold'>Address Pickup.</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Our taxis will pick you up from your specified address.</p>
                  <p className='py-2 border-b mx-8'>Start</p>
                  <p className='py-2 border-b mx-8'>Enjoy this service</p>
              </div>
              <button className='bg-yellow-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Airport} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>02</h2>
              <p className='text-center text-4xl font-bold'>Airport Transfer</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Seamless transfers to and from the airport.</p>
                  <p className='py-2 border-b mx-8'>Start</p>
                  <p className='py-2 border-b mx-8'>Enjoy this service</p>
              </div>
              <button className='bg-black text-yellow-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Taxi} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>03</h2>
              <p className='text-center text-4xl font-bold'>Taxi Tours</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Discover the city with our guided taxi tours.</p>
                  <p className='py-2 border-b mx-8'>Start</p>
                  <p className='py-2 border-b mx-8'>Enjoy this service</p>
              </div>
              <button className='bg-yellow-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
      </div>
    </div>
  );
}

export default Service