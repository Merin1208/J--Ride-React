import car from '../assets/CVcar.png'
import minicar from '../assets/minicar.png'
import largecar from '../assets/largecar.png'
import threewheel from '../assets/threewheel.png'
import van from '../assets/van.png'
import van8 from '../assets/van8s.png'

const vehicles = [
    {
      name: 'car',
      image: car, // Replace with the correct image link
      
    },
    {
      name: 'minicar',
      image: minicar, // Replace with the correct image link
      
    },
    {
      name: 'largecar',
      image: largecar, // Replace with the correct image link
      
    },
    {
      name: 'threewheel',
      image: threewheel, // Replace with the correct image link
      
    },
    {
      name: 'van',
      image: van, // Replace with the correct image link
      
    },
    {
      name: 'van(8s)',
      image: van8, // Replace with the correct image link
      
    },
  ];
  
  const ChooseVehicle = () => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Available Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="border p-4 rounded-lg shadow-lg text-center">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
              
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ChooseVehicle;