import React from 'react'
import Blogs from '../assets/Blogs.png'

const Blog = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='h-[400px] w-auto  mx-auto my-4' src={Blogs} alt='/' />
          
          <div className='flex flex-col justify-center'>
            <p className='text-yellow-600 font-bold '>JRIDE</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Seamless Jaffna Taxi Service: A Passenger's Perspective</h1>
            <p >
            Discover the convenience and comfort of our Jaffna taxi service as we navigate through the city's vibrant streets,
            offering seamless pick-up and drop-off experiences for passengers. The journey begins with a prompt and friendly 
            pick-up at your specified location. Our professional drivers, familiar with Jaffna's roads, ensure a smooth start 
            to your ride. Feel at ease as you settle into the well-maintained, air-conditioned vehicle, equipped for a comfortable 
            journey. ... As we weave through the city's traffic, our drivers prioritize passenger safety and satisfaction. Whether 
            you're headed to a business meeting, a cultural event, or a relaxing day out, our taxi service is tailored to meet your
            needs. Jaffna's bustling markets and serene parks become easily accessible with our efficient drop-off service. Rest
            assured that our drivers are well-versed in the city's geography, ensuring you reach your destination promptly. ...
            Our commitment to providing a reliable taxi service extends to every aspect of your journey. From courteous drivers
            to clean and well-maintained vehicles, we prioritize your comfort and convenience. Experience Jaffna with the 
            assurance of a dependable taxi service. Whether you're a local or a visitor, let us handle your transportation 
            needs, so you can focus on enjoying the moments that matter.
            </p>
           
          </div>
        </div>
      </div>
    );
}

export default Blog