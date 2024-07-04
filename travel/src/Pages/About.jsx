import React from 'react'
import Car from '../assets/Car.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Car} alt='/' />
          
          <div className='flex flex-col justify-center'>
            <p className='text-yellow-600 font-bold '>JRIDE</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>ABOUT US</h1>
            <p className='page-break-avoid '>
            JRide is the ultimate solution for hassle-free transportation in SriLanka. Our online 
            taxi app offers a quick and easy way to book any kind of vehicle ride, from cars to 
            tuk-tuks, to get you where you need to go.With JRide, you can enjoy a safe and
            comfortable ride with experienced drivers who know the roads of Sri Lanka like the 
            back of their hand.Whether you are commuting to work, running errands, or exploring 
            the city, our reliable drivers will get you to your destination on time and in style.
            Our user-friendly app allows you to easily book a ride, track your driver in real-time,
            and pay seamlessly through the app. You can choose your preferred vehicle type, set 
            your pick-up and drop-off locations, and even schedule your ride in advance. At JRide, 
            we prioritize your safety and comfort. Our drivers are thoroughly screened and trained
            to ensure that you have a secure and enjoyable ride. Our vehicles are regularly maintained 
            and cleaned to provide a pleasant and hygienic experience. So why wait? Download the JRide 
            app today and experience the convenience of hassle-free transportation in Sri Lanka.
            </p>
            
          </div>
        </div>
      </div>
  )
}

export default About