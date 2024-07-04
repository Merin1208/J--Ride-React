import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Offer from "./Pages/Offer";
import Contact from './Pages/Contact'
import Driver from "./Pages/Driver";
import Service from './Pages/Service'
import FAQPassanger from './Pages/FAQPassanger'
import FAQDriver from './Pages/FAQDriver'
import Rates from "./Pages/Rates";


import Hero from "./components/Hero";
import Manual from "./components/Manual";
import Cards from "./components/Cards";
import WhyChooseUs from "./components/WhyChooseUs";
import AppBanner from "./components/AppBanner";
import Footer from "./components/Footer";
import ChooseVehicle from "./components/ChooseVehicle";
import CallToAction from "./components/CallToAction";
import Instructions from "./components/Howtouse";
import ContactSection from "./components/ContactSection";
import Passanger from "./Pages/Passanger";


function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Hero/>
      <Routes>
        <Route path="/Home" exact element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Offer" element={<Offer/>} />
        <Route path="/FAQPassanger" element ={<FAQPassanger/>}/>
        <Route path="/FAQDriver" element ={<FAQDriver/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Driver" element={<Driver/>} />
        <Route path="/Passanger" element={<Passanger/>}/>
        <Route path="/Service" element={<Service/>} />
        <Route path="/Rates" element={<Rates/>} />
        
      </Routes>
    </Router>
      
      
      
      <Manual/>
      <Cards/>
      <WhyChooseUs/>
      <ChooseVehicle/>
      <AppBanner/>
      <CallToAction/>
      <Instructions/>
      <ContactSection/>
      <Footer/>
     

    </div>
  );
}

export default App;
