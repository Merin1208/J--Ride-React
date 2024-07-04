import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';


const ContactSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
          Have a Questions?
        </h2>
        <p className="mt-4 max-w-2xl text-center text-xl text-black lg:mx-auto">
          Our dedicated support team is here to assist you 24/7. Whether it is about your ride, app features, or anything in between, feel free to reach out.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-10">
          <div className="text-center">
            <MapPinIcon className="mx-auto h-12 w-12 text-black" />
            <h3 className="mt-2 text-lg font-medium text-black">Our Address</h3>
            <p className="mt-2 text-base text-black">
              JRIDE Taxi Service <br />
              Speed IT net <br />
              PalalyRoad Thirunelvely
            </p>
          </div>
          <div className="text-center">
            <PhoneIcon className="mx-auto h-12 w-12 text-black" />
            <h3 className="mt-2 text-lg font-medium text-black">Our Phones</h3>
            <p className="mt-2 text-base text-black">
              0777 563213 <br />
              0703563213
            </p>
          </div>
          <div className="text-center">
            <EnvelopeIcon className="mx-auto h-12 w-12 text-black" />
            <h3 className="mt-2 text-lg font-medium text-black">Our Email</h3>
            <p className="mt-2 text-base text-black">hello@jride.lk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;