import React from 'react'
import White from '../assets/White.png'


const CallToAction = () => {
  return (
    <div className="bg-yellow-500 flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
    <div className="text-center md:text-left mb-8 md:mb-0">
      <h2 className="text-4xl font-bold mb-4">Call now and book our taxi for your next ride 
        
      </h2>
      <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold">
        Book Taxi Now
      </button>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={White} alt="Car" className="w-64 md:w-96" />
    </div>
  </div>
);
};

export default CallToAction;