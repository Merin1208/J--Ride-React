import React from 'react';
import ManualBooking from '../assets/ManualBooking.jpg';
import AppGallery from '../assets/Appgallery.png';
import AppStore from '../assets/Appstore.png';
import GooglePlay from '../assets/GooglePlay.png';

const AppBanner = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ManualBooking} alt='Manual Booking' />
        
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Download the app and all Taxi will be at your hand
          </h1>
          <p className='page-break-avoid'>
            Empower your commute with convenience. Download our app and elevate your travel experience because every ride should be a smooth journey at your command
            <ul className='list-disc list-inside mt-4'>
              <li>Easy Searching</li>
              <li>Rapid Rides</li>
              <li>Inclusive Rates</li>
              <li>Rapid Rides</li>
            </ul>
          </p>
          <div className="flex space-x-4 justify-center mt-4 items-center">
            <a href="https://play.google.com/store/apps/details?id=com.speedIt.JRide" target="_blank" rel="noopener noreferrer">
              <img className='w-[150px] h-auto' src={GooglePlay} alt='Google Play Store' />
            </a>
            <a href="https://apps.apple.com/us/app/jride-sri-lanka/id6473840540" target="_blank" rel="noopener noreferrer">
              <img className='w-[150px] h-auto' src={AppStore} alt='App Store' />
            </a>
            <a href="https://appgallery.huawei.com/app/C109542861" target="_blank" rel="noopener noreferrer">
              <img className='w-[150px] h-auto' src={AppGallery} alt='App Gallery' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
