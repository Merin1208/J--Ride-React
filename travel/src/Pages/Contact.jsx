import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
                <div className="mb-6">
                    <iframe
                        title="JRide Taxi App Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31628.70960645339!2d80.00373314150788!3d9.667047282419857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe65c7ec74223b%3A0x3e3b7d3db3e34c26!2sJaffna!5e0!3m2!1sen!2slk!4v1593595862864!5m2!1sen!2slk"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        className="w-full rounded"
                    ></iframe>
                </div>
                <div className="text-center">
                    <p className="text-xl font-semibold">JRide Taxi App Office</p>
                    <p>136 Palali Rd, Jaffna 40000</p>
                    <p className="mt-4">
                        <strong>Phone:</strong> 0777 563213 / 0703563213 / 021 222 8358
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
