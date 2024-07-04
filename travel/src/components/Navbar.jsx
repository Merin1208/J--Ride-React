import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [instructionDropdownOpen, setInstructionDropdownOpen] = useState(false);
  const [FAQDropdownOpen, setFAQDropdownOpen] = useState(false);
  const [whatsnewDropdownOpen, setWhatsnewDropdownOpen] = useState(false);  // Add state for what's new dropdown
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [nav, setNav] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleInstructionDropdown = () => {
    setInstructionDropdownOpen(!instructionDropdownOpen);
  };

  const toggleWhatsnewDropdown = () => {
    setWhatsnewDropdownOpen(!whatsnewDropdownOpen);
  };

  const toggleFAQDropdown = () => {
    setFAQDropdownOpen(!FAQDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Link to="/">
        <img src={Logo} alt="JRide Logo" className="w-13 h-12" />
      </Link>
      
      {/* Desktop Navbar */}
      <div className="flex items-center space-x-6">
        <ul className='hidden md:flex space-x-6'>
          <Link to="/Home" className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/About" className="text-white hover:text-yellow-300">About</Link>
          <Link to="/Service" className="text-white hover:text-yellow-300">Service</Link>
          <Link to="/Rates" className="text-white hover:text-yellow-300">Rates</Link>
          <Link to="/Contact" className="text-white hover:text-yellow-300">Contact</Link>
        </ul>

        {/* FAQ Dropdown */}
        <div className="relative">
          <button
            onClick={toggleFAQDropdown}
            className="inline-flex justify-center items-center w-full border border-transparent shadow-sm px-4 py-2 text-white"
          >
            FAQ
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {FAQDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link
                  to="/FAQPassanger"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Passanger
                </Link>
                <Link
                  to="/FAQDriver"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Driver
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Instruction Dropdown */}
        <div className="relative">
          <button
            onClick={toggleInstructionDropdown}
            className="inline-flex justify-center items-center w-full border border-transparent shadow-sm px-4 py-2 text-white"
          >
            How to use
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {instructionDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link
                  to="/Passanger"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Passanger
                </Link>
                <Link
                  to="/Driver"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Driver
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* What's New Dropdown */}
        <div className="relative">
          <button
            onClick={toggleWhatsnewDropdown}
            className="inline-flex justify-center items-center w-full border border-transparent shadow-sm px-4 py-2 text-white"
          >
            What's New
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {whatsnewDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link
                  to="/Blog"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                 Blog
                </Link>
                <Link
                  to="/Offer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Offer
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="inline-flex justify-center items-center w-full border border-transparent shadow-sm px-4 py-2 text-white"
          >
            Language: {selectedLanguage}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {languageDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={() => selectLanguage('English')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  English
                </button>
                <button
                  onClick={() => selectLanguage('Sinhala')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Sinhala
                </button>
                <button
                  onClick={() => selectLanguage('Tamil')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white w-full text-left"
                  role="menuitem"
                >
                  Tamil
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar Toggle */}
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navbar */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000200] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <Link to="/">
          <img src={Logo} alt="JRide Logo" className="w-13 h-12" />
        </Link>
        <div className='pt-8 uppercase p-4'>
          <li><Link to="/" className='block p-4 border-b border-red-300 hover:text-yellow-300'>Home</Link></li>
          <li><Link to="/Service" className='block p-4 border-b border-red-300 hover:text-yellow-300'>Services</Link></li>
          <li><Link to="/Rates" className='block p-4 border-b border-red-300 hover:text-yellow-300'>Rates</Link></li>
          <li><Link to="/About" className='block p-4 border-b border-red-300 hover:text-yellow-300'>About</Link></li>
          <li><Link to="/Contact" className='block p-4 hover:text-yellow-300'>Contact</Link></li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
