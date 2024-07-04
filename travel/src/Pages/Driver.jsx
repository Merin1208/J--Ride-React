import React from 'react'

const Driver = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            How Drivers to Join and Add Vehicles in JRide Driver App
          </h1>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Download JRide Driver & Delivery App</li>
            <li>Register Using your Sri Lanka Mobile Number with a secure Password.</li>
            <li>You will get OTP Code on Mobile for Verification</li>
            <li>Once Verified, Your Account can be accessed by you</li>
            <li>You need to Update your Profile using My Profile Section. Following Documents are Mandatory</li>
            <ul className="list-disc list-inside pl-5 space-y-2">
              <li>NIC Front & Back Side images</li>
              <li>Driving Licence Front & Back images</li>
            </ul>
            <li>Add your Vehicle via Add Vehicle Section. Following Documents are Mandatory</li>
            <ul className="list-disc list-inside pl-5 space-y-2">
              <li>Vehicle Tax Front Side image</li>
              <li>Vehicle Insurance Front Side image</li>
              <li>Vehicle Front image</li>
            </ul>
            <li>Once you've Added Vehicle, Status will be Pending</li>
            <li>Once We verify and Activate, Drivers Can be Online and will be Ready to accept Rides.</li>
            <li>Drivers can Add multiple Vehicles, but only One can be the Preferred Vehicle for Riding at a time.</li>
            <li>If Drivers Follow the Drivers Whatsapp Community, YouTube, Facebook Page, they can get More information</li>
          </ol>
        </div>
        <div className="bg-yellow-300 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">If you have issues in Adding Vehicle</h2>
          <p className="mb-4">Send All to one of the Following WhatsApp Numbers: 0703563213 / 0706563213</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile Number</li>
            <li>NIC Front & Back Side images</li>
            <li>Driving Licence Front & Back images</li>
            <li>Vehicle Tax Front Side image</li>
            <li>Vehicle Insurance Front Side image</li>
            <li>Vehicle Front image</li>
          </ul>
          <p className="mt-4">We will Add and inform you</p>
        </div>
      </div>
    </div>
  )
}

export default Driver
