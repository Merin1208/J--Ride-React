import React from 'react'
import car from '../assets/CVcar.png'
import minicar from '../assets/minicar.png'
import largecar from '../assets/largecar.png'
import threewheel from '../assets/threewheel.png'
import van from '../assets/van.png'
import van8 from '../assets/van8s.png'

const vehicles = [
    {
      name: 'Car',
      image: car,
      baseRate: 250,
      perMile: 130,
      passengers: 4,
    },
    {
      name: 'Mini Car',
      image: minicar,
      baseRate: 150,
      perMile: 130,
      passengers: 3,
    },
    {
      name: 'Large Car',
      image: largecar,
      baseRate: 500,
      perMile: 130,
      passengers: 5,
    },
    {
      name: 'Three Wheel',
      image: threewheel,
      baseRate: 130,
      perMile: 100,
      passengers: 3,
    },
    {
      name: 'Van',
      image: van,
      baseRate: 1000,
      perMile: 130,
      passengers: 10,
    },
    {
      name: 'Van (8-seater)',
      image: van8,
      baseRate: 1000,
      perMile: 130,
      passengers: 8,
    },
];

const Rates = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">Rates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.name} className="border p-4 rounded-lg shadow-lg text-center">
                        <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                        <p>Base Rate: {vehicle.baseRate}</p>
                        <p>Per Mile/KM: {vehicle.perMile}</p>
                        <p>Passengers: {vehicle.passengers}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rates;
