import React from 'react'

const Passanger = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            How Passanger to Join and Add Vehicles in JRide  App
          </h1>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Download JRide Passanger & Delivery App</li>
            <li>Register Using your Sri Lanka Mobile Number with a secure Password.</li>
            <li>You will get OTP Code on Mobile for Verification</li>
            <li>Once Verified, Your Account can be accessed by you</li>
            
            <li>Add your Vehicle via Add Vehicle Section. </li>
            
            <li>Once you've Added Vehicle, Status will be Pending</li>
            <li>Once We verify and Activate,Passangers Can be Online and will be Ready to accept it.</li>
            <li>Passanger can Add one Vehicle for travelling at a time.</li>
            <li>If Passangers Follow the Drivers Whatsapp Community, YouTube, Facebook Page, they can get More information</li>
          </ol>
        </div>
        <div className="bg-yellow-300 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">If you have issues in Adding Vehicle</h2>
          <p className="mb-4">Send All to one of the Following WhatsApp Numbers: 0703563213 / 0706563213</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile Number</li>
            <li>NIC Front & Back Side images</li>
            
          </ul>
          <p className="mt-4">We will Add and inform you</p>
        </div>
      </div>
    </div>
  )
}

export default Passanger
