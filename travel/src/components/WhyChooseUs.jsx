import React from 'react'

import SafetyImage from '../assets/Safety.png' 
import driverImage from '../assets/driverImg.png'
import quotationImage from '../assets/quotationImage.png'


const WhyChooseUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <p className="text-center mb-8">
        Choose us for a ride that blends Easy Searching, Quick Pickups, Inclusive Rates, and a touch of innovation.
        Join us on the road to exceptional travel experiences.
      </p>
      
      <div className="flex flex-wrap justify-between mb-8">
        <div className="w-full md:w-1/3 p-4 text-center">
          <img src={SafetyImage} alt="Safety Guarantee" className="w-12 h-12 mx-auto mb-2" />
          <h3 className="text-xl font-semibold mb-2">Safety Guarantee</h3>
          <p>Your well-being is our priority. Every ride is backed by rigorous safety protocols.</p>
        </div>
        <div className="w-full md:w-1/3 p-4 text-center">
          <img src={driverImage} alt="Trusted & Verified Driver" className="w-12 h-12 mx-auto mb-2" />
          <h3 className="text-xl font-semibold mb-2">Trusted & Verified Driver</h3>
          <p>Our drivers are not just trusted but also skilled professionals who are verified.</p>
        </div>
        <div className="w-full md:w-1/3 p-4 text-center">
          <img src={quotationImage} alt="Free Quotation" className="w-12 h-12 mx-auto mb-2" />
          <h3 className="text-xl font-semibold mb-2">Free Quotation</h3>
          <p>Enjoy the free quotation and know the cost before you even step into the vehicle.</p>
        </div>
      </div>

      
    </div>
  );
};

export default WhyChooseUs;