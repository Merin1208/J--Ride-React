import React from 'react';
import White from '../assets/White.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-black-800">Contact Us</h1>
        <p className="py-4">
          JRide is the ultimate solution for hassle-free transportation in Sri Lanka. Our online taxi app offers a quick and easy way to book any kind of vehicle ride, from cars to tuk-tuks, to get you where you need to go. With JRide, you can enjoy a safe and comfortable ride with experienced drivers who know the roads of Sri Lanka like the back of their hand.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://www.facebook.com/JRIDELK" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://jride.lk/#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://jride.lk/#" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://jride.lk/#" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://jride.lk/#" target="_blank" rel="noopener noreferrer">
            <FaDribbbleSquare size={30} />
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
      <img src={White} alt="White" className="w-64 md:w-96" />
    </div>

    
      <div className="lg:col-span-3 flex justify-between mt-6">
        
        <div>
          <h6 className="font-medium text-black-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Schedule Booking</li>
            <li className="py-2 text-sm">Trip</li>
            <li className="py-2 text-sm">Delivery</li>
            
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Career</li>
            
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Condition</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
