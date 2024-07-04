import React from 'react'
import { ReactTyped } from "react-typed";
import Background from '../assets/Background.jpeg'


const Hero = () => {
  return (
    <div className='text-white bg-cover' style={{ background: `url(${Background})`,backgroundSize :'cover', width: '100%', height: '100%' }}>
      <div className='max-w-[1500px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-yellow-300 font-bold p-2'>
          Best Taxi App From Jaffna Srilanka
        </p>

        <h1 className='md:text-5xl sm:text-4xl text-4xl text-white font-bold md:py-6'>
          JRide Taxi App - Beyond The Road
        </h1>

        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl text-white font-bold py-4'>
            Fast, flexible Travelling for
          </p>

          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl text-yellow-300 font-bold md:pl-4 pl-2'
            strings={['TAXI', 'AIRPORT TRANSFER', 'ADDRESS PICKUP']}
            typeSpeed={120}
            backSpeed={140}
            loop/>

        </div>
        <p className='md:text-2xl text-xl font-bold text-white-500'>Ride is the ultimate solution for hassle-free transportation in Sri Lanka.</p>
        <button className='bg-yellow-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>


        </div>
        </div>
  )
}

export default Hero